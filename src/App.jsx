import { useEffect, useMemo, useRef, useState } from "react";
import {
  coreVerbs,
  practiceCards,
  scenarioPacks,
  sentenceFrames,
  sourceMaterials,
} from "./data";
import {
  meetingCategories,
  meetingMonthPlan,
  meetingPracticeCards,
  meetingSentences,
} from "./meetingData.js";
import {
  workbookPracticeCards,
  workbookReferenceItems,
  workbookSources,
} from "./workbookData.js";

const STORAGE_KEY = "verb-first-progress-v1";
const VALID_VIEWS = ["today", "practice", "meeting", "library", "notebook", "progress"];

const navItems = [
  { id: "today", label: "오늘", icon: "home" },
  { id: "practice", label: "연습", icon: "play" },
  { id: "meeting", label: "회의 100", mobileLabel: "회의", icon: "briefcase" },
  { id: "library", label: "동사 사전", icon: "book" },
  { id: "notebook", label: "내 문장", icon: "note" },
  { id: "progress", label: "기록", icon: "chart" },
];

const meetingReferenceItems = meetingSentences.map((sentence) => ({
  id: `meeting-reference-${String(sentence.no).padStart(3, "0")}`,
  day: sentence.no,
  term: sentence.en,
  meaning: sentence.ko,
  type: "meeting",
  source: "영어 회의 100 완전문장",
  coreId: sentence.verbId,
  focus: sentence.focus,
  category: sentence.categoryKo,
  pattern: sentence.pattern,
}));

const libraryReferenceItems = [...workbookReferenceItems, ...meetingReferenceItems];

const defaultProgress = {
  version: 1,
  xp: 0,
  sessions: 0,
  totalReviews: 0,
  streak: 0,
  lastStudyDate: null,
  cards: {},
  activity: {},
  favorites: [],
  notes: {},
  sentences: [],
  meetingStartDate: null,
  settings: {
    theme: "light",
    dailyGoal: 10,
  },
};

function Icon({ name, size = 20, strokeWidth = 1.8 }) {
  const paths = {
    home: (
      <>
        <path d="M3.5 10.8 12 3.8l8.5 7" />
        <path d="M5.5 9.7V20h13V9.7M9.3 20v-6h5.4v6" />
      </>
    ),
    play: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m10 8.7 5 3.3-5 3.3Z" />
      </>
    ),
    book: (
      <>
        <path d="M4.5 4.5h5.2A2.3 2.3 0 0 1 12 6.8V20a2.8 2.8 0 0 0-2.8-2.8H4.5Z" />
        <path d="M19.5 4.5h-5.2A2.3 2.3 0 0 0 12 6.8V20a2.8 2.8 0 0 1 2.8-2.8h4.7Z" />
      </>
    ),
    note: (
      <>
        <path d="M6 3.8h9l3 3V20H6Z" />
        <path d="M15 3.8V7h3M9 11h6M9 14.5h6" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V4h6v3M3 12h18M10 12v2h4v-2" />
      </>
    ),
    calendar: (
      <>
        <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
        <path d="M8 3v4M16 3v4M3.5 9.5h17M8 13h3M13.5 13h2.5M8 16.5h3" />
      </>
    ),
    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.6" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),
    flame: (
      <path d="M13.8 2.8c.5 3.4-1.8 4.7-3.2 6.5-1.2 1.6-.8 3.1.4 4.1-.1-2.2 1.4-3.3 2.8-4.5 2 1.6 3.8 3.6 3.8 6.5a5.6 5.6 0 0 1-11.2 0c0-4.6 3.3-7.1 7.4-12.6Z" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    chevron: <path d="m9 6 6 6-6 6" />,
    volume: (
      <>
        <path d="M4 10h3l4-3.5v11L7 14H4ZM15 9.2a4 4 0 0 1 0 5.6M17.7 6.5a7.8 7.8 0 0 1 0 11" />
      </>
    ),
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z" />,
    close: <path d="m5 5 14 14M19 5 5 19" />,
    check: <path d="m4 12 5 5L20 6" />,
    rotate: (
      <>
        <path d="M20 7v5h-5" />
        <path d="M18.2 17.5A8 8 0 1 1 20 12" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 2 1.4 4.6L18 8l-4.6 1.4L12 14l-1.4-4.6L6 8l4.6-1.4Z" />
        <path d="m18.5 14 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7Z" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    trash: (
      <>
        <path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12M7 10l5 5 5-5M5 20h14" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V4M7 9l5-5 5 5M5 20h14" />
      </>
    ),
    moon: <path d="M20.3 15.2A8.5 8.5 0 0 1 8.8 3.7 8.5 8.5 0 1 0 20.3 15.2Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    bolt: <path d="m13.5 2.5-8 11h6l-1 8 8-12h-6Z" />,
    grid: (
      <>
        <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1" />
        <rect x="14" y="3.5" width="6.5" height="6.5" rx="1" />
        <rect x="3.5" y="14" width="6.5" height="6.5" rx="1" />
        <rect x="14" y="14" width="6.5" height="6.5" rx="1" />
      </>
    ),
    trophy: (
      <>
        <path d="M8 4h8v5a4 4 0 0 1-8 0ZM8 6H4v2a4 4 0 0 0 4 4M16 6h4v2a4 4 0 0 1-4 4M12 13v4M8 20h8M9 17h6" />
      </>
    ),
    edit: (
      <>
        <path d="m4 16.5-.5 4 4-.5L19 8.5 15.5 5Z" />
        <path d="m13.8 6.7 3.5 3.5" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {paths[name] ?? paths.sparkle}
    </svg>
  );
}

function getStoredProgress() {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultProgress;

  try {
    const parsed = JSON.parse(raw);
    return {
      ...defaultProgress,
      ...parsed,
      settings: { ...defaultProgress.settings, ...parsed.settings },
    };
  } catch (error) {
    console.warn("저장된 학습 기록을 읽지 못해 새 기록으로 시작합니다.", error);
    window.localStorage.removeItem(STORAGE_KEY);
    return defaultProgress;
  }
}

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromKey(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(key, amount) {
  const date = dateFromKey(key);
  date.setDate(date.getDate() + amount);
  return dateKey(date);
}

function getRecentDays(count) {
  return Array.from({ length: count }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (count - index - 1));
    return {
      key: dateKey(date),
      label: new Intl.DateTimeFormat("ko-KR", { weekday: "short" }).format(date),
      day: date.getDate(),
      month: date.getMonth() + 1,
    };
  });
}

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 11) return "좋은 아침이에요.";
  if (hour < 17) return "오늘도 한 문장부터.";
  return "오늘 배운 문장을 입에 붙여요.";
}

function formatToday() {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date());
}

function seededShuffle(items, seedText) {
  const copy = [...items];
  let seed = [...seedText].reduce((total, char) => total + char.charCodeAt(0), 0) || 1;
  for (let index = copy.length - 1; index > 0; index -= 1) {
    seed = (seed * 9301 + 49297) % 233280;
    const target = Math.floor((seed / 233280) * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function normalizeSentence(value) {
  return value
    .toLowerCase()
    .replace(/[.,!?'"’]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getVerbMastery(progress, verbId) {
  const cards = practiceCards.filter((card) => card.verbId === verbId);
  if (!cards.length) return 0;
  const total = cards.reduce((sum, card) => sum + (progress.cards[card.id]?.box ?? 0), 0);
  return Math.round((total / (cards.length * 5)) * 100);
}

function getOverallMastery(progress) {
  const total = practiceCards.reduce(
    (sum, card) => sum + Math.min(progress.cards[card.id]?.box ?? 0, 5),
    0,
  );
  return Math.round((total / (practiceCards.length * 5)) * 100);
}

function getCurrentStreak(previous) {
  const today = dateKey();
  if (!previous.lastStudyDate) return 1;
  if (previous.lastStudyDate === today) return Math.max(previous.streak, 1);
  if (previous.lastStudyDate === addDays(today, -1)) return previous.streak + 1;
  return 1;
}

function getMeetingPlanDay(startDate) {
  if (!startDate) return 1;
  const elapsed = Math.floor((dateFromKey(dateKey()) - dateFromKey(startDate)) / 86400000);
  return Math.min(30, Math.max(1, elapsed + 1));
}

function App() {
  const initialHash = window.location.hash.replace("#", "");
  const [view, setView] = useState(VALID_VIEWS.includes(initialHash) ? initialHash : "today");
  const [progress, setProgress] = useState(getStoredProgress);
  const [selectedItem, setSelectedItem] = useState(null);
  const [practiceSession, setPracticeSession] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  const importInputRef = useRef(null);

  const today = dateKey();
  const focusVerb = coreVerbs[getDayOfYear() % coreVerbs.length];
  const customCards = useMemo(
    () =>
      progress.sentences.map((sentence) => ({
        id: `mine-${sentence.id}`,
        verbId: sentence.verbId,
        verb: coreVerbs.find((verb) => verb.id === sentence.verbId)?.word ?? "MY",
        ko: sentence.ko,
        answer: sentence.en,
        hint: sentence.hint || "내가 저장한 문장",
        meaning: sentence.hint
          ? `내 상황에서 '${sentence.hint}' 표현으로 말하기`
          : "내가 저장한 문장을 다시 말하기",
        context: "내 문장",
      })),
    [progress.sentences],
  );
  const allPracticeCards = useMemo(
    () => [
      ...practiceCards,
      ...meetingPracticeCards,
      ...workbookPracticeCards,
      ...customCards,
    ],
    [customCards],
  );
  const dueCards = useMemo(
    () =>
      allPracticeCards.filter((card) => {
        const record = progress.cards[card.id];
        return record?.due && record.due <= today;
      }),
    [allPracticeCards, progress.cards, today],
  );
  const overallMastery = getOverallMastery(progress);
  const meetingPlanDay = getMeetingPlanDay(progress.meetingStartDate);
  const level = Math.floor(progress.xp / 120) + 1;
  const levelXp = progress.xp % 120;

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    document.documentElement.dataset.theme = progress.settings.theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      progress.settings.theme === "dark" ? "#101511" : "#f5f4ee",
    );
  }, [progress.settings.theme]);

  useEffect(() => {
    const handleHashChange = () => {
      const next = window.location.hash.replace("#", "");
      if (VALID_VIEWS.includes(next)) setView(next);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(
    () => () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
    },
    [],
  );

  function showToast(message, tone = "success") {
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    setToast({ message, tone });
    toastTimer.current = window.setTimeout(() => setToast(null), 2800);
  }

  function changeView(nextView) {
    setView(nextView);
    window.history.pushState(null, "", `#${nextView}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleTheme() {
    setProgress((previous) => ({
      ...previous,
      settings: {
        ...previous.settings,
        theme: previous.settings.theme === "light" ? "dark" : "light",
      },
    }));
  }

  function toggleFavorite(id) {
    setProgress((previous) => {
      const exists = previous.favorites.includes(id);
      return {
        ...previous,
        favorites: exists
          ? previous.favorites.filter((favorite) => favorite !== id)
          : [...previous.favorites, id],
      };
    });
  }

  function updateNote(id, value) {
    setProgress((previous) => ({
      ...previous,
      notes: { ...previous.notes, [id]: value },
    }));
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) {
      showToast("이 브라우저에서는 음성 재생을 지원하지 않아요.", "warning");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.88;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (voice) =>
        voice.lang.startsWith("en-US") &&
        /Samantha|Ava|Google|Microsoft|Natural/i.test(voice.name),
    );
    if (preferred) utterance.voice = preferred;
    window.speechSynthesis.speak(utterance);
  }

  function buildSessionPool(options = {}) {
    if (options.cards?.length) return options.cards;
    if (options.meetingOnly) return meetingPracticeCards;
    if (options.verbId) {
      return allPracticeCards.filter((card) => card.verbId === options.verbId);
    }
    if (options.scenarioId) {
      return allPracticeCards.filter((card) => card.scenarioId === options.scenarioId);
    }
    if (options.customOnly) return customCards;
    return [...practiceCards, ...customCards];
  }

  function startPractice(mode = "quick", options = {}) {
    const pool = buildSessionPool(options);
    if (!pool.length) {
      showToast("연습할 문장이 아직 없어요.", "warning");
      return;
    }

    const requestedCount =
      options.count ??
      {
        quick: 8,
        recall: 10,
        build: 8,
        choice: 10,
        shadow: 6,
        scenario: 6,
      }[mode] ??
      8;

    const ordered = [...pool].sort((a, b) => {
      const aRecord = progress.cards[a.id];
      const bRecord = progress.cards[b.id];
      const aDue = aRecord?.due && aRecord.due <= today ? 0 : aRecord ? 2 : 1;
      const bDue = bRecord?.due && bRecord.due <= today ? 0 : bRecord ? 2 : 1;
      if (aDue !== bDue) return aDue - bDue;
      return (aRecord?.box ?? 0) - (bRecord?.box ?? 0);
    });
    const prioritized = [
      ...seededShuffle(ordered.filter((card) => progress.cards[card.id]?.due <= today), `${today}-due`),
      ...seededShuffle(ordered.filter((card) => !progress.cards[card.id]), `${today}-new`),
      ...seededShuffle(
        ordered.filter(
          (card) => progress.cards[card.id] && progress.cards[card.id]?.due > today,
        ),
        `${today}-future`,
      ),
    ];
    const queue = prioritized.slice(0, Math.min(requestedCount, prioritized.length));

    setPracticeSession({
      id: `${Date.now()}`,
      mode,
      title: options.title ?? "오늘의 기본동사 드릴",
      queue,
    });
  }

  function reviewCard(card, rating) {
    const intervals = [0, 1, 3, 7, 14, 30];
    const xpByRating = { again: 1, hard: 3, good: 5 };

    setProgress((previous) => {
      const current = previous.cards[card.id] ?? {
        box: 0,
        reviews: 0,
        correct: 0,
      };
      const nextBox =
        rating === "again"
          ? Math.max(0, current.box - 1)
          : rating === "hard"
            ? Math.max(1, current.box)
            : Math.min(5, current.box + 1);
      const waitDays =
        rating === "again" ? 0 : rating === "hard" ? 1 : intervals[nextBox];

      return {
        ...previous,
        xp: previous.xp + xpByRating[rating],
        totalReviews: previous.totalReviews + 1,
        streak: getCurrentStreak(previous),
        lastStudyDate: today,
        activity: {
          ...previous.activity,
          [today]: (previous.activity[today] ?? 0) + 1,
        },
        cards: {
          ...previous.cards,
          [card.id]: {
            ...current,
            box: nextBox,
            reviews: current.reviews + 1,
            correct: current.correct + (rating === "good" ? 1 : 0),
            lastRating: rating,
            lastReviewed: today,
            due: addDays(today, waitDays),
          },
        },
      };
    });
  }

  function completeSession() {
    setProgress((previous) => ({ ...previous, sessions: previous.sessions + 1 }));
  }

  function startMeetingPlan() {
    if (progress.meetingStartDate) {
      showToast(`30일 코스 ${meetingPlanDay}일차를 이어갑니다.`);
      return;
    }
    setProgress((previous) => ({ ...previous, meetingStartDate: today }));
    showToast("오늘부터 30일 회의 영어 코스를 시작합니다.");
  }

  function saveSentence(sentence) {
    const next = {
      id: sentence.id ?? `${Date.now()}`,
      ko: sentence.ko.trim(),
      en: sentence.en.trim(),
      verbId: sentence.verbId,
      hint: sentence.hint?.trim() ?? "",
      createdAt: sentence.createdAt ?? new Date().toISOString(),
    };
    if (!next.ko || !next.en) {
      showToast("한국어와 영어 문장을 모두 입력해 주세요.", "warning");
      return false;
    }

    setProgress((previous) => ({
      ...previous,
      sentences: sentence.id
        ? previous.sentences.map((item) => (item.id === sentence.id ? next : item))
        : [next, ...previous.sentences],
    }));
    showToast(sentence.id ? "문장을 수정했어요." : "내 문장에 저장했어요.");
    return true;
  }

  function deleteSentence(id) {
    if (!window.confirm("이 문장을 삭제할까요?")) return;
    setProgress((previous) => ({
      ...previous,
      sentences: previous.sentences.filter((sentence) => sentence.id !== id),
    }));
    showToast("문장을 삭제했어요.");
  }

  function exportProgress() {
    const blob = new Blob([JSON.stringify(progress, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `verb-first-backup-${today}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    showToast("학습 기록을 내보냈어요.");
  }

  function importProgress(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (parsed.version !== 1 || typeof parsed.cards !== "object") {
          throw new Error("지원하지 않는 백업 형식입니다.");
        }
        setProgress({
          ...defaultProgress,
          ...parsed,
          settings: { ...defaultProgress.settings, ...parsed.settings },
        });
        showToast("학습 기록을 불러왔어요.");
      } catch (error) {
        console.error("학습 기록 가져오기 실패", error);
        showToast(error.message || "백업 파일을 읽지 못했어요.", "warning");
      } finally {
        if (importInputRef.current) importInputRef.current.value = "";
      }
    };
    reader.onerror = () => showToast("파일을 읽지 못했어요.", "warning");
    reader.readAsText(file);
  }

  function resetProgress() {
    if (!window.confirm("학습 기록과 내 문장을 모두 초기화할까요? 이 작업은 되돌릴 수 없어요.")) {
      return;
    }
    setProgress(defaultProgress);
    showToast("새 학습 기록으로 초기화했어요.");
  }

  const sharedViewProps = {
    progress,
    dueCards,
    today,
    speak,
    showToast,
    startPractice,
    openVerb: (verb) => setSelectedItem({ type: "core", item: verb }),
    openReference: (item) => setSelectedItem({ type: "reference", item }),
  };

  return (
    <div className="app-shell">
      <Sidebar
        level={level}
        levelXp={levelXp}
        onChangeView={changeView}
        onToggleTheme={toggleTheme}
        progress={progress}
        view={view}
      />

      <div className="app-stage">
        <Topbar
          dueCount={dueCards.length}
          onStart={() => startPractice("quick")}
          theme={progress.settings.theme}
        />

        <main className="page-shell">
          {view === "today" && (
            <TodayView
              {...sharedViewProps}
              focusVerb={focusVerb}
              overallMastery={overallMastery}
            />
          )}
          {view === "practice" && <PracticeView {...sharedViewProps} />}
          {view === "meeting" && (
            <MeetingView
              currentDay={meetingPlanDay}
              onSaveSentence={saveSentence}
              onStartPlan={startMeetingPlan}
              progress={progress}
              speak={speak}
              startPractice={startPractice}
            />
          )}
          {view === "library" && (
            <LibraryView
              {...sharedViewProps}
              favorites={progress.favorites}
              onToggleFavorite={toggleFavorite}
            />
          )}
          {view === "notebook" && (
            <NotebookView
              {...sharedViewProps}
              onDelete={deleteSentence}
              onSave={saveSentence}
              sentences={progress.sentences}
            />
          )}
          {view === "progress" && (
            <ProgressView
              {...sharedViewProps}
              importInputRef={importInputRef}
              level={level}
              levelXp={levelXp}
              onExport={exportProgress}
              onImport={importProgress}
              onReset={resetProgress}
              overallMastery={overallMastery}
            />
          )}
        </main>
      </div>

      <MobileNav onChangeView={changeView} view={view} />

      {selectedItem && (
        <DetailDrawer
          favorite={progress.favorites.includes(
            selectedItem.type === "core"
              ? `core:${selectedItem.item.id}`
              : selectedItem.item.id,
          )}
          item={selectedItem}
          note={
            progress.notes[
              selectedItem.type === "core"
                ? `core:${selectedItem.item.id}`
                : selectedItem.item.id
            ] ?? ""
          }
          onClose={() => setSelectedItem(null)}
          onPractice={(options) => {
            setSelectedItem(null);
            startPractice("recall", options);
          }}
          onSaveSentence={saveSentence}
          onToggleFavorite={toggleFavorite}
          onUpdateNote={updateNote}
          speak={speak}
        />
      )}

      {practiceSession && (
        <PracticeModal
          allCards={allPracticeCards}
          onClose={() => setPracticeSession(null)}
          onComplete={completeSession}
          onRate={reviewCard}
          session={practiceSession}
          speak={speak}
        />
      )}

      <input
        accept="application/json"
        className="visually-hidden"
        onChange={(event) => importProgress(event.target.files?.[0])}
        ref={importInputRef}
        type="file"
      />

      {toast && <Toast message={toast.message} tone={toast.tone} />}
    </div>
  );
}

function Sidebar({ view, onChangeView, progress, level, levelXp, onToggleTheme }) {
  return (
    <aside className="sidebar">
      <button className="brand" onClick={() => onChangeView("today")} type="button">
        <span className="brand-mark">VF</span>
        <span>
          <strong>VERB FIRST</strong>
          <small>동사를 먼저 던져라</small>
        </span>
      </button>

      <nav className="side-nav" aria-label="주 메뉴">
        {navItems.map((item) => (
          <button
            aria-current={view === item.id ? "page" : undefined}
            className={view === item.id ? "active" : ""}
            key={item.id}
            onClick={() => onChangeView(item.id)}
            type="button"
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
            {item.id === "practice" && progress.activity[dateKey()] > 0 && (
              <span className="nav-dot" />
            )}
          </button>
        ))}
      </nav>

      <div className="sidebar-spacer" />

      <div className="level-card">
        <div className="level-card-top">
          <span className="level-badge">{level}</span>
          <span>
            <strong>Level {level}</strong>
            <small>{120 - levelXp} XP 후 레벨업</small>
          </span>
        </div>
        <div className="mini-progress">
          <span style={{ width: `${(levelXp / 120) * 100}%` }} />
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="streak-pill">
          <Icon name="flame" size={18} />
          <span>
            <strong>{progress.streak}</strong>일 연속
          </span>
        </div>
        <button
          aria-label="테마 전환"
          className="icon-button subtle"
          onClick={onToggleTheme}
          type="button"
        >
          <Icon name={progress.settings.theme === "light" ? "moon" : "sun"} />
        </button>
      </div>
    </aside>
  );
}

function Topbar({ dueCount, onStart, theme }) {
  return (
    <header className="topbar">
      <div className="mobile-brand">
        <span className="brand-mark">VF</span>
        <strong>VERB FIRST</strong>
      </div>
      <div className="topbar-date">
        <span>{formatToday()}</span>
        <small>{theme === "dark" ? "Night practice" : "Daily practice"}</small>
      </div>
      <div className="topbar-actions">
        <span className="due-label">
          <span className="status-dot" />
          {dueCount ? `복습 ${dueCount}개` : "오늘 복습 완료"}
        </span>
        <button className="button compact dark" onClick={onStart} type="button">
          <Icon name="bolt" size={17} />
          퀵 드릴
        </button>
      </div>
    </header>
  );
}

function MobileNav({ view, onChangeView }) {
  return (
    <nav className="mobile-nav" aria-label="모바일 주 메뉴">
      {navItems.map((item) => (
        <button
          aria-current={view === item.id ? "page" : undefined}
          className={view === item.id ? "active" : ""}
          key={item.id}
          onClick={() => onChangeView(item.id)}
          type="button"
        >
          <Icon name={item.icon} size={19} />
          <span>{item.mobileLabel ?? item.label}</span>
        </button>
      ))}
    </nav>
  );
}

function PageHeader({ eyebrow, title, description, action }) {
  return (
    <div className="page-header">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {action}
    </div>
  );
}

function TodayView({
  progress,
  focusVerb,
  overallMastery,
  dueCards,
  openVerb,
  speak,
  startPractice,
}) {
  const recentDays = getRecentDays(7);
  const todayCount = progress.activity[dateKey()] ?? 0;
  const dailyGoal = progress.settings.dailyGoal;
  const goalPercent = Math.min(100, Math.round((todayCount / dailyGoal) * 100));
  const focusMastery = getVerbMastery(progress, focusVerb.id);
  const focusUsageCards = practiceCards.filter(
    (card) => card.verbId === focusVerb.id && card.kind === "conversation-usage",
  );
  const expressionOffset = getDayOfYear() % focusVerb.usages.length;
  const todayExpressions = [
    ...focusVerb.usages.slice(expressionOffset),
    ...focusVerb.usages.slice(0, expressionOffset),
  ].slice(0, 6);
  const suggestions = coreVerbs
    .filter((verb) => verb.id !== focusVerb.id)
    .sort(
      (a, b) => getVerbMastery(progress, a.id) - getVerbMastery(progress, b.id),
    )
    .slice(0, 3);

  return (
    <div className="page view-enter">
      <PageHeader
        eyebrow="TODAY · VERB ENGINE"
        title={getGreeting()}
        description="완벽하게 번역하려 하지 말고, 주어와 동사부터 0.1초 안에 꺼내 보세요."
        action={
          <div className="header-streak">
            <Icon name="flame" size={18} />
            <span>
              <strong>{progress.streak}</strong>
              <small>day streak</small>
            </span>
          </div>
        }
      />

      <section
        className="focus-hero"
        style={{
          "--verb-accent": focusVerb.accent,
          "--verb-tint": focusVerb.tint,
        }}
      >
        <div className="focus-copy">
          <div className="focus-kicker">
            <span>오늘의 엔진</span>
            <span>DAY {String((getDayOfYear() % 100) + 1).padStart(3, "0")}</span>
          </div>
          <h2>{focusVerb.word}</h2>
          <p className="focus-meaning">{focusVerb.korean}</p>
          <p className="focus-summary">{focusVerb.image}</p>
          <div className="focus-actions">
            <button
              className="button dark"
              onClick={() =>
                startPractice("quick", {
                  cards: focusUsageCards,
                  title: `${focusVerb.word} 오늘의 실전 표현`,
                  count: 10,
                })
              }
              type="button"
            >
              <Icon name="play" size={18} />
              실전 10문장 시작
            </button>
            <button className="button ghost-on-dark" onClick={() => openVerb(focusVerb)} type="button">
              동사 카드 보기
              <Icon name="arrow" size={17} />
            </button>
          </div>
        </div>

        <div className="focus-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div
            className="mastery-ring"
            style={{ "--progress": `${Math.max(focusMastery, 4) * 3.6}deg` }}
          >
            <div>
              <strong>{focusMastery}%</strong>
              <span>mastery</span>
            </div>
          </div>
          <span className="floating-phrase phrase-one">{focusVerb.chunks[0].phrase}</span>
          <span className="floating-phrase phrase-two">{focusVerb.chunks[1].phrase}</span>
          <span className="floating-phrase phrase-three">{focusVerb.chunks[2].phrase}</span>
        </div>
      </section>

      <section className="today-expression-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SIX EXPRESSIONS FOR TODAY</span>
            <h2>오늘 바로 쓰는 {focusVerb.word} 표현</h2>
          </div>
          <p>한국어 뜻만 맞히지 말고, 아래 의도와 문장 틀을 함께 연결해 말해 보세요.</p>
        </div>
        <div className="today-expression-grid">
          {todayExpressions.map((usage, index) => (
            <article key={`${usage.frame}-${usage.example}`}>
              <div className="today-expression-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{usage.meaning}</small>
              </div>
              <strong>{usage.frame}</strong>
              <button onClick={() => speak(usage.example)} type="button">
                <p>{usage.example}</p>
                <em>{usage.ko}</em>
                <Icon name="volume" size={17} />
              </button>
            </article>
          ))}
        </div>
        <button
          className="button secondary wide today-expression-practice"
          onClick={() =>
            startPractice("quick", {
              cards: focusUsageCards,
              title: `${focusVerb.word} 오늘의 실전 표현`,
              count: 10,
            })
          }
          type="button"
        >
          오늘의 10가지 용법 모두 연습
          <Icon name="arrow" size={17} />
        </button>
      </section>

      <section className="metric-grid">
        <MetricCard
          icon="bolt"
          label="오늘 말한 문장"
          value={`${todayCount}`}
          meta={`/ ${dailyGoal} 목표`}
          tone="lime"
        />
        <MetricCard
          icon="rotate"
          label="복습 대기"
          value={`${dueCards.length}`}
          meta={dueCards.length ? "지금이 가장 잘 외워질 때" : "모두 정리했어요"}
          tone="blue"
        />
        <MetricCard
          icon="trophy"
          label="전체 숙련도"
          value={`${overallMastery}%`}
          meta={`${progress.totalReviews}번 누적 복습`}
          tone="violet"
        />
        <MetricCard
          icon="flame"
          label="연속 학습"
          value={`${progress.streak}일`}
          meta={progress.streak ? "리듬을 유지하고 있어요" : "오늘 첫 기록을 만들어 보세요"}
          tone="coral"
        />
      </section>

      <section className="dashboard-grid">
        <div className="panel routine-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">20 MIN ROUTINE</span>
              <h3>오늘의 말하기 루틴</h3>
            </div>
            <div
              className="goal-ring-small"
              style={{ "--goal": `${goalPercent * 3.6}deg` }}
            >
              <span>{goalPercent}%</span>
            </div>
          </div>

          <div className="routine-list">
            <RoutineStep
              active={todayCount < 3}
              done={todayCount >= 3}
              index="01"
              meta="5분 · 표현과 의도 연결"
              title={`${focusVerb.word} 10가지 쓰임 익히기`}
            />
            <RoutineStep
              active={todayCount >= 3 && todayCount < 7}
              done={todayCount >= 7}
              index="02"
              meta="8분 · 상황 + 한국어 → 영어"
              title="의도를 보고 자연스러운 문장 꺼내기"
            />
            <RoutineStep
              active={todayCount >= 7 && todayCount < dailyGoal}
              done={todayCount >= dailyGoal}
              index="03"
              meta="7분 · 사람·시간·장소 바꾸기"
              title="핵심 틀을 내 이야기로 확장하기"
            />
          </div>

          <button className="button primary wide" onClick={() => startPractice("quick")} type="button">
            {todayCount ? "오늘 루틴 이어하기" : "오늘 루틴 시작하기"}
            <Icon name="arrow" size={18} />
          </button>
        </div>

        <div className="panel rhythm-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">WEEKLY RHYTHM</span>
              <h3>이번 주 리듬</h3>
            </div>
            <span className="soft-badge">{recentDays.reduce((sum, day) => sum + (progress.activity[day.key] ?? 0), 0)} 문장</span>
          </div>
          <div className="week-bars">
            {recentDays.map((day) => {
              const count = progress.activity[day.key] ?? 0;
              return (
                <div className="week-bar-item" key={day.key}>
                  <div className="week-bar-track">
                    <span style={{ height: `${Math.max(8, Math.min(100, count * 10))}%` }} />
                  </div>
                  <strong>{count}</strong>
                  <small>{day.label}</small>
                </div>
              );
            })}
          </div>
          <div className="rhythm-note">
            <span className="rhythm-icon">
              <Icon name="sparkle" size={19} />
            </span>
            <p>
              <strong>짧아도 매일 말하는 것이 가장 강합니다.</strong>
              눈으로 아는 문장을 입에서 나오는 문장으로 바꾸세요.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">NEXT TO EXPLORE</span>
            <h2>다음에 익힐 동사</h2>
          </div>
          <button className="text-button" onClick={() => window.location.assign("#library")} type="button">
            전체 사전 보기 <Icon name="arrow" size={16} />
          </button>
        </div>
        <div className="suggestion-grid">
          {suggestions.map((verb) => (
            <VerbPreviewCard
              key={verb.id}
              mastery={getVerbMastery(progress, verb.id)}
              onClick={() => openVerb(verb)}
              verb={verb}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function MetricCard({ icon, label, value, meta, tone }) {
  return (
    <div className={`metric-card ${tone}`}>
      <span className="metric-icon">
        <Icon name={icon} size={19} />
      </span>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{meta}</small>
      </div>
    </div>
  );
}

function RoutineStep({ index, title, meta, done, active }) {
  return (
    <div className={`routine-step ${done ? "done" : ""} ${active ? "active" : ""}`}>
      <span className="routine-index">{done ? <Icon name="check" size={17} /> : index}</span>
      <div>
        <strong>{title}</strong>
        <small>{meta}</small>
      </div>
      {active && <span className="now-badge">NOW</span>}
    </div>
  );
}

function VerbPreviewCard({ verb, mastery, onClick }) {
  return (
    <button
      className="verb-preview-card"
      onClick={onClick}
      style={{ "--card-accent": verb.accent, "--card-tint": verb.tint }}
      type="button"
    >
      <div className="verb-preview-top">
        <span className="verb-order">{String(coreVerbs.indexOf(verb) + 1).padStart(2, "0")}</span>
        <span className="tiny-progress">
          <span style={{ width: `${mastery}%` }} />
        </span>
      </div>
      <strong>{verb.word}</strong>
      <p>{verb.korean}</p>
      <span className="chunk-preview">{verb.chunks[0].phrase}</span>
      <span className="card-arrow">
        <Icon name="arrow" size={17} />
      </span>
    </button>
  );
}

function PracticeView({ progress, dueCards, startPractice, speak }) {
  const modes = [
    {
      id: "recall",
      icon: "rotate",
      title: "즉답 리콜",
      description: "한국어를 보고 3초 안에 영어 문장을 꺼냅니다.",
      meta: "10 cards · 8 min",
      color: "lime",
    },
    {
      id: "build",
      icon: "grid",
      title: "문장 조립",
      description: "흩어진 단어를 영어 어순으로 빠르게 연결합니다.",
      meta: "8 cards · 7 min",
      color: "violet",
    },
    {
      id: "choice",
      icon: "bolt",
      title: "동사 선택",
      description: "상황에 가장 자연스러운 기본동사를 고릅니다.",
      meta: "10 cards · 6 min",
      color: "blue",
    },
    {
      id: "shadow",
      icon: "volume",
      title: "3회 섀도잉",
      description: "원어민 음성을 듣고 리듬째 세 번 따라 말합니다.",
      meta: "6 cards · 8 min",
      color: "coral",
    },
  ];

  return (
    <div className="page view-enter">
      <PageHeader
        eyebrow="PRACTICE LAB"
        title="알고 있는 문장을, 바로 나오는 문장으로."
        description="리콜 · 어순 · 소리 · 상황 훈련을 섞을수록 기본동사가 더 빠르게 자동화됩니다."
        action={
          <button className="button dark" onClick={() => startPractice("quick")} type="button">
            <Icon name="bolt" size={18} />
            추천 믹스 시작
          </button>
        }
      />

      <section className="practice-mode-grid">
        {modes.map((mode) => (
          <button
            className={`practice-mode-card ${mode.color}`}
            key={mode.id}
            onClick={() => startPractice(mode.id, { title: mode.title })}
            type="button"
          >
            <span className="mode-icon">
              <Icon name={mode.icon} size={23} />
            </span>
            <div>
              <h3>{mode.title}</h3>
              <p>{mode.description}</p>
            </div>
            <span className="mode-meta">{mode.meta}</span>
            <span className="mode-arrow">
              <Icon name="arrow" size={18} />
            </span>
          </button>
        ))}
      </section>

      <section className="section-block workbook-pack-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FOUR COMPLETE WORKBOOKS</span>
            <h2>첨부 워크북 대표문장 400개</h2>
          </div>
          <p>각 100일 과정의 대표문장, 예문 3개, 스몰토크, TIP을 빠짐없이 담았습니다.</p>
        </div>
        <div className="workbook-pack-grid">
          {workbookSources.map((source, index) => {
            const cards = workbookPracticeCards.filter(
              (card) => card.sourceId === source.id,
            );
            const studied = cards.filter((card) => progress.cards[card.id]?.reviews > 0).length;
            const percent = Math.round((studied / cards.length) * 100);
            return (
              <article
                className={`workbook-pack-card tone-${index + 1}`}
                key={source.id}
              >
                <div className="workbook-pack-top">
                  <span>{source.label}</span>
                  <strong>{studied}/100</strong>
                </div>
                <h3>{source.title}</h3>
                <p>대표문장 100 · 예문 300 · 대화 100 · TIP 100</p>
                <div className="workbook-pack-progress">
                  <span style={{ width: `${percent}%` }} />
                </div>
                <small>{percent}% 학습</small>
                <div className="workbook-pack-actions">
                  <button
                    onClick={() =>
                      startPractice("quick", {
                        cards,
                        count: 10,
                        title: `${source.title} 오늘의 10문장`,
                      })
                    }
                    type="button"
                  >
                    10문장 믹스
                  </button>
                  <button
                    onClick={() =>
                      startPractice("shadow", {
                        cards,
                        count: 8,
                        title: `${source.title} 섀도잉`,
                      })
                    }
                    type="button"
                  >
                    <Icon name="volume" size={16} />
                    섀도잉
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="practice-layout">
        <div className="panel review-queue-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">SPACED REVIEW</span>
              <h3>오늘의 복습 큐</h3>
            </div>
            <span className="count-badge">{dueCards.length}</span>
          </div>
          {dueCards.length ? (
            <div className="review-list">
              {dueCards.slice(0, 5).map((card) => {
                const verb = coreVerbs.find((item) => item.id === card.verbId);
                return (
                  <div className="review-row" key={card.id}>
                    <span
                      className="review-verb"
                      style={{ "--review-color": verb?.accent ?? "#d9ff66" }}
                    >
                      {card.verb}
                    </span>
                    <div>
                      <strong>{card.answer}</strong>
                      <small>{card.ko}</small>
                    </div>
                    <button
                      aria-label={`${card.answer} 듣기`}
                      className="icon-button"
                      onClick={() => speak(card.answer)}
                      type="button"
                    >
                      <Icon name="volume" size={18} />
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="queue-empty">
              <span>
                <Icon name="check" size={24} />
              </span>
              <div>
                <strong>오늘 복습은 정리됐어요.</strong>
                <p>새 문장을 익히면 기억 곡선에 맞춰 자동으로 다시 보여드려요.</p>
              </div>
            </div>
          )}
          <button
            className="button secondary wide"
            disabled={!dueCards.length}
            onClick={() =>
              startPractice("recall", {
                cards: dueCards,
                count: dueCards.length,
                title: "오늘의 복습 큐",
              })
            }
            type="button"
          >
            복습 큐 시작
            <Icon name="arrow" size={17} />
          </button>
        </div>

        <div className="panel roadmap-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">8 WEEK ROADMAP</span>
              <h3>반사 속도를 만드는 순서</h3>
            </div>
          </div>
          <div className="roadmap">
            {[
              ["1–2주", "핵심 동사", "10개 동사 + 6개 문장 틀"],
              ["3–4주", "작은 단어", "구동사로 표현 확장"],
              ["5–6주", "상황 전환", "카페·이동·문제 해결"],
              ["7–8주", "업무 자동화", "회의 흐름과 즉답"],
            ].map(([week, title, detail], index) => (
              <div className={`roadmap-step ${index === 0 ? "current" : ""}`} key={week}>
                <span>{week}</span>
                <div>
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </div>
                {index === 0 && <em>현재</em>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SCENARIO PACKS</span>
            <h2>상황째로 연습하기</h2>
          </div>
          <p>문장을 따로 외우지 않고, 실제로 말할 순서대로 연결합니다.</p>
        </div>
        <div className="scenario-grid">
          {scenarioPacks.map((scenario, index) => (
            <button
              className="scenario-card"
              key={scenario.id}
              onClick={() =>
                startPractice("scenario", {
                  scenarioId: scenario.id,
                  title: scenario.title,
                  count: scenario.cards.length,
                })
              }
              style={{ "--scenario-color": scenario.color }}
              type="button"
            >
              <div className="scenario-number">0{index + 1}</div>
              <span className="scenario-line" />
              <h3>{scenario.title}</h3>
              <p>{scenario.subtitle}</p>
              <span className="scenario-meta">
                {scenario.cards.length}문장
                <Icon name="arrow" size={17} />
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SENTENCE FRAMES</span>
            <h2>동사만 갈아끼우는 {sentenceFrames.length}개 틀</h2>
          </div>
        </div>
        <div className="frame-strip">
          {sentenceFrames.map((frame) => (
            <button className="frame-card" key={frame.id} onClick={() => speak(frame.example)} type="button">
              <span>{frame.ko}</span>
              <strong>{frame.frame}</strong>
              <small>{frame.example}</small>
              <Icon name="volume" size={17} />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function MeetingView({
  progress,
  currentDay,
  onStartPlan,
  onSaveSentence,
  speak,
  startPractice,
}) {
  const [selectedDay, setSelectedDay] = useState(currentDay);
  const [categoryId, setCategoryId] = useState("all");
  const [query, setQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    setSelectedDay(currentDay);
  }, [currentDay]);

  useEffect(() => {
    setVisibleCount(12);
  }, [categoryId, query]);

  const selectedPlan = meetingMonthPlan[selectedDay - 1] ?? meetingMonthPlan[0];
  const selectedNumbers = new Set(
    selectedPlan.sentenceIds
      .map((id) => meetingSentences.find((sentence) => sentence.id === id)?.no)
      .filter(Boolean),
  );
  const selectedNumberList = [...selectedNumbers].sort((a, b) => a - b);
  const selectedPlanTitle = selectedPlan.review
    ? `전 범위 교차 복습 ${selectedDay - 25}`
    : `${selectedPlan.focus} · ${selectedNumberList[0]}-${selectedNumberList.at(-1)}번`;
  const selectedOriginalCards = meetingPracticeCards.filter(
    (card) => card.kind === "original" && selectedNumbers.has(card.meetingNo),
  );
  const selectedFullCards = meetingPracticeCards.filter((card) =>
    selectedNumbers.has(card.meetingNo),
  );
  const completedOriginals = meetingPracticeCards.filter(
    (card) => card.kind === "original" && progress.cards[card.id]?.reviews > 0,
  ).length;
  const completedApplications = meetingPracticeCards.filter(
    (card) => card.kind === "application" && progress.cards[card.id]?.reviews > 0,
  ).length;
  const normalizedQuery = query.trim().toLowerCase();
  const filteredSentences = meetingSentences.filter((sentence) => {
    const matchesCategory = categoryId === "all" || sentence.categoryId === categoryId;
    const searchable = [
      sentence.en,
      sentence.ko,
      sentence.categoryKo,
      sentence.categoryEn,
      sentence.pattern,
      ...sentence.variants.flatMap((variant) => [variant.en, variant.ko]),
    ]
      .join(" ")
      .toLowerCase();
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  });
  const uniquePatterns = new Set(meetingSentences.map((sentence) => sentence.pattern)).size;
  const planProgress = progress.meetingStartDate ? Math.round((currentDay / 30) * 100) : 0;

  function getSentenceMastery(sentence) {
    const cards = meetingPracticeCards.filter((card) => card.meetingNo === sentence.no);
    const total = cards.reduce(
      (sum, card) => sum + Math.min(progress.cards[card.id]?.box ?? 0, 5),
      0,
    );
    return Math.round((total / (cards.length * 5)) * 100);
  }

  function getCategoryMastery(category) {
    const numbers = new Set(
      meetingSentences
        .filter((sentence) => sentence.categoryId === category.id)
        .map((sentence) => sentence.no),
    );
    const cards = meetingPracticeCards.filter(
      (card) => card.kind === "original" && numbers.has(card.meetingNo),
    );
    const reviewed = cards.filter((card) => progress.cards[card.id]?.reviews > 0).length;
    return cards.length ? Math.round((reviewed / cards.length) * 100) : 0;
  }

  function saveMeetingSentence(sentence, variant = null) {
    onSaveSentence({
      ko: variant?.ko ?? sentence.ko,
      en: variant?.en ?? sentence.en,
      verbId: sentence.verbId,
      hint: sentence.pattern,
    });
  }

  return (
    <div className="page meeting-page view-enter">
      <PageHeader
        eyebrow="MEETING 100 · 30 DAY INTENSIVE"
        title="한 달 뒤, 회의에서 바로 꺼내는 100문장."
        description="원문 100개를 빠짐없이 익히고, 문장마다 두 가지 응용 표현까지 총 300문장을 반복합니다."
        action={
          <button
            className="button dark"
            onClick={() => {
              onStartPlan();
              if (progress.meetingStartDate) {
                startPractice("quick", {
                  cards: selectedFullCards,
                  count: selectedFullCards.length,
                  title: `회의 영어 ${currentDay}일차`,
                });
              }
            }}
            type="button"
          >
            <Icon name={progress.meetingStartDate ? "play" : "calendar"} size={18} />
            {progress.meetingStartDate ? `${currentDay}일차 이어하기` : "30일 코스 시작"}
          </button>
        }
      />

      <section className="meeting-hero">
        <div className="meeting-hero-copy">
          <div className="meeting-hero-kicker">
            <span>100 ORIGINALS</span>
            <span>200 APPLICATIONS</span>
            <span>16 SITUATIONS</span>
          </div>
          <h2>MEETING<br />100</h2>
          <p>시작 · 의견 · 반대 · 질문 · 위임 · 업데이트 · 마무리까지 회의의 전체 흐름을 한 달에 자동화합니다.</p>
          <div className="meeting-hero-actions">
            <button
              className="button primary"
              onClick={() =>
                startPractice("recall", {
                  cards: selectedOriginalCards,
                  count: selectedOriginalCards.length,
                  title: `DAY ${selectedDay} 원문 리콜`,
                })
              }
              type="button"
            >
              오늘 원문 {selectedOriginalCards.length}개
              <Icon name="arrow" size={17} />
            </button>
            <button
              className="button ghost-on-dark"
              onClick={() =>
                startPractice("quick", {
                  cards: selectedFullCards,
                  count: selectedFullCards.length,
                  title: `DAY ${selectedDay} 원문 + 응용`,
                })
              }
              type="button"
            >
              응용까지 {selectedFullCards.length}개
            </button>
          </div>
        </div>
        <div className="meeting-hero-progress">
          <div
            className="meeting-course-ring"
            style={{ "--meeting-progress": `${Math.max(planProgress, 2) * 3.6}deg` }}
          >
            <div>
              <strong>{progress.meetingStartDate ? currentDay : 0}</strong>
              <span>/ 30 DAYS</span>
            </div>
          </div>
          <div className="meeting-progress-copy">
            <span>MONTHLY PROGRESS</span>
            <strong>{planProgress}%</strong>
            <small>
              {progress.meetingStartDate
                ? `${progress.meetingStartDate} 시작 · 오늘 ${currentDay}일차`
                : "시작일을 기록하면 매일 분량을 자동으로 보여드려요."}
            </small>
          </div>
        </div>
      </section>

      <section className="meeting-stat-grid">
        <MetricCard
          icon="book"
          label="원문 학습"
          value={`${completedOriginals}/100`}
          meta="원문을 한 번 이상 꺼낸 수"
          tone="lime"
        />
        <MetricCard
          icon="sparkle"
          label="응용 학습"
          value={`${completedApplications}/200`}
          meta="상황을 바꿔 말한 문장"
          tone="violet"
        />
        <MetricCard
          icon="grid"
          label="회의 상황"
          value="16"
          meta="회의의 시작부터 화상 미팅까지"
          tone="blue"
        />
        <MetricCard
          icon="bolt"
          label="재사용 패턴"
          value={`${uniquePatterns}`}
          meta="단어만 바꿔 다시 쓰는 문장 틀"
          tone="coral"
        />
      </section>

      <section className="meeting-plan-layout">
        <div className="panel meeting-day-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">30 DAY PLAN</span>
              <h3>오늘의 분량을 선택하세요</h3>
            </div>
            <span className="soft-badge">DAY {selectedDay}</span>
          </div>
          <div className="meeting-day-grid">
            {meetingMonthPlan.map((day) => (
              <button
                className={`${selectedDay === day.day ? "selected" : ""} ${day.day === currentDay && progress.meetingStartDate ? "today" : ""} ${day.review ? "review" : ""}`}
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                type="button"
              >
                <span>{day.day}</span>
                <small>{day.review ? "복습" : "4문장"}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="panel meeting-today-panel">
          <span className="eyebrow">{selectedPlan.review ? "REVIEW DAY" : "TODAY'S FOUR"}</span>
          <h3>{selectedPlanTitle}</h3>
          <p>{selectedPlan.focus}</p>
          <div className="meeting-today-list">
            {selectedOriginalCards.slice(0, selectedPlan.review ? 5 : 4).map((card) => (
              <div key={card.id}>
                <span>{String(card.meetingNo).padStart(3, "0")}</span>
                <p><strong>{card.answer}</strong><small>{card.ko}</small></p>
                <button aria-label={`${card.answer} 듣기`} onClick={() => speak(card.answer)} type="button">
                  <Icon name="volume" size={17} />
                </button>
              </div>
            ))}
          </div>
          {selectedPlan.review && (
            <small className="meeting-review-note">대표 5개만 표시했습니다. 연습을 시작하면 20개 전체가 나옵니다.</small>
          )}
          <div className="meeting-today-actions">
            <button
              className="button secondary"
              onClick={() =>
                startPractice("recall", {
                  cards: selectedOriginalCards,
                  count: selectedOriginalCards.length,
                  title: `DAY ${selectedDay} 원문`,
                })
              }
              type="button"
            >
              원문만
            </button>
            <button
              className="button primary"
              onClick={() =>
                startPractice("quick", {
                  cards: selectedFullCards,
                  count: selectedFullCards.length,
                  title: `DAY ${selectedDay} 완전 훈련`,
                })
              }
              type="button"
            >
              원문 + 응용
              <Icon name="arrow" size={17} />
            </button>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">16 MEETING SITUATIONS</span>
            <h2>상황별로 흐름을 통째로 익히기</h2>
          </div>
          <p>카테고리를 누르면 아래 100문장 목록이 해당 상황으로 바로 좁혀집니다.</p>
        </div>
        <div className="meeting-category-grid">
          {meetingCategories.map((category, index) => {
            const count = meetingSentences.filter(
              (sentence) => sentence.categoryId === category.id,
            ).length;
            const mastery = getCategoryMastery(category);
            return (
              <button
                className={categoryId === category.id ? "active" : ""}
                key={category.id}
                onClick={() => {
                  setCategoryId(category.id);
                  document.querySelector(".meeting-library")?.scrollIntoView({ behavior: "smooth" });
                }}
                type="button"
              >
                <span className="meeting-category-index">{String(index + 1).padStart(2, "0")}</span>
                <strong>{category.ko}</strong>
                <small>{category.en}</small>
                <div><span style={{ width: `${mastery}%` }} /></div>
                <em>{count}문장 · {mastery}%</em>
              </button>
            );
          })}
        </div>
      </section>

      <section className="meeting-library section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ALL 100 + 200 APPLICATIONS</span>
            <h2>회의 문장 전체 라이브러리</h2>
          </div>
          <span className="soft-badge">{filteredSentences.length}개 원문</span>
        </div>

        <div className="meeting-library-toolbar">
          <label className="search-box">
            <Icon name="search" size={20} />
            <input
              onChange={(event) => setQuery(event.target.value)}
              placeholder="영어·한국어·상황·패턴 검색"
              type="search"
              value={query}
            />
            {query && (
              <button aria-label="검색어 지우기" onClick={() => setQuery("")} type="button">
                <Icon name="close" size={16} />
              </button>
            )}
          </label>
          <select
            aria-label="회의 상황 선택"
            onChange={(event) => setCategoryId(event.target.value)}
            value={categoryId}
          >
            <option value="all">전체 16개 상황</option>
            {meetingCategories.map((category) => (
              <option key={category.id} value={category.id}>{category.ko}</option>
            ))}
          </select>
          {categoryId !== "all" && (
            <button className="text-button" onClick={() => setCategoryId("all")} type="button">
              필터 해제
            </button>
          )}
        </div>

        <div className="meeting-sentence-list">
          {filteredSentences.slice(0, visibleCount).map((sentence) => {
            const expanded = expandedId === sentence.id;
            const mastery = getSentenceMastery(sentence);
            const relatedVerb = coreVerbs.find((verb) => verb.id === sentence.verbId);
            const sentenceCards = meetingPracticeCards.filter(
              (card) => card.meetingNo === sentence.no,
            );
            return (
              <article
                className={`meeting-sentence-card ${expanded ? "expanded" : ""}`}
                key={sentence.id}
                style={{ "--meeting-verb-color": relatedVerb?.accent ?? "#d9ff66" }}
              >
                <button
                  aria-expanded={expanded}
                  className="meeting-sentence-main"
                  onClick={() => setExpandedId(expanded ? null : sentence.id)}
                  type="button"
                >
                  <span className="meeting-sentence-no">{String(sentence.no).padStart(3, "0")}</span>
                  <div>
                    <span className="meeting-sentence-category">{sentence.categoryKo}</span>
                    <strong>{sentence.en}</strong>
                    <p>{sentence.ko}</p>
                  </div>
                  <div className="meeting-sentence-side">
                    <span>{sentence.pattern}</span>
                    <small>{mastery}%</small>
                    <Icon name="chevron" size={18} />
                  </div>
                </button>

                {expanded && (
                  <div className="meeting-sentence-detail">
                    <div className="meeting-original-actions">
                      <span className="meeting-kind original">ORIGINAL</span>
                      <button onClick={() => speak(sentence.en)} type="button">
                        <Icon name="volume" size={17} /> 듣기
                      </button>
                      <button onClick={() => saveMeetingSentence(sentence)} type="button">
                        <Icon name="plus" size={17} /> 내 문장
                      </button>
                      <button
                        onClick={() =>
                          startPractice("recall", {
                            cards: sentenceCards,
                            count: sentenceCards.length,
                            title: `회의 문장 ${sentence.no} 응용`,
                          })
                        }
                        type="button"
                      >
                        <Icon name="play" size={17} /> 3문장 연습
                      </button>
                    </div>
                    <div className="meeting-variant-grid">
                      {sentence.variants.map((variant, index) => (
                        <div key={variant.id}>
                          <div>
                            <span className="meeting-kind application">APPLICATION {index + 1}</span>
                            <button aria-label={`${variant.en} 듣기`} onClick={() => speak(variant.en)} type="button">
                              <Icon name="volume" size={16} />
                            </button>
                            <button aria-label="내 문장에 저장" onClick={() => saveMeetingSentence(sentence, variant)} type="button">
                              <Icon name="plus" size={16} />
                            </button>
                          </div>
                          <strong>{variant.en}</strong>
                          <p>{variant.ko}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {visibleCount < filteredSentences.length && (
          <button
            className="button secondary load-more"
            onClick={() => setVisibleCount((count) => count + 16)}
            type="button"
          >
            16문장 더 보기
            <Icon name="plus" size={17} />
          </button>
        )}
      </section>
    </div>
  );
}

function LibraryView({
  progress,
  favorites,
  onToggleFavorite,
  openVerb,
  openReference,
}) {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("core");
  const [visibleCount, setVisibleCount] = useState(36);

  useEffect(() => {
    setVisibleCount(36);
  }, [query, tab]);

  const normalizedQuery = query.trim().toLowerCase();
  const matchingCore = coreVerbs.filter((verb) => {
    const searchable = [
      verb.word,
      verb.korean,
      verb.image,
      ...verb.chunks.flatMap((chunk) => [chunk.phrase, chunk.meaning]),
      ...verb.usages.flatMap((usage) => [
        usage.frame,
        usage.meaning,
        usage.example,
        usage.ko,
      ]),
    ]
      .join(" ")
      .toLowerCase();
    const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
    const matchesFavorite = tab !== "favorites" || favorites.includes(`core:${verb.id}`);
    return matchesQuery && matchesFavorite;
  });
  const matchingReferences = libraryReferenceItems.filter((item) => {
    const matchesQuery =
      !normalizedQuery ||
      `${item.term} ${item.meaning} ${item.source} ${item.category ?? ""} ${item.pattern ?? ""} ${item.focus ?? ""} ${item.model ?? ""} ${item.modelKo ?? ""} ${(item.examples ?? []).join(" ")} ${item.dialogue?.a ?? ""} ${item.dialogue?.b ?? ""} ${item.tip ?? ""}`
        .toLowerCase()
        .includes(normalizedQuery);
    const matchesTab =
      Boolean(normalizedQuery) ||
      tab === "all" ||
      (tab === "basic" && item.type === "basic") ||
      (tab === "phrasal" && item.type === "phrasal") ||
      (tab === "conversation" && item.type === "conversation") ||
      (tab === "basic-conversation" && item.type === "basic-conversation") ||
      (tab === "meeting" && item.type === "meeting") ||
      (tab === "favorites" && favorites.includes(item.id));
    return matchesQuery && matchesTab;
  });
  const showCore = tab === "core" || tab === "all" || tab === "favorites" || normalizedQuery;
  const showReferences = tab !== "core" || normalizedQuery;

  return (
    <div className="page view-enter">
      <PageHeader
        eyebrow="SEARCHABLE VERB LIBRARY"
        title="필요할 때 다시 찾는 동사 사전"
        description="30개 핵심 엔진과 네 워크북 400단원, 회의 원문 100개를 예문·대화·TIP까지 검색하세요."
        action={
          <div className="library-counts">
            <span><strong>{coreVerbs.length}</strong> core</span>
            <span><strong>500</strong> units</span>
          </div>
        }
      />

      <div className="library-toolbar">
        <label className="search-box">
          <Icon name="search" size={20} />
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="동사, 뜻, 표현 검색 — 예: get, 미루다, 회의"
            type="search"
            value={query}
          />
          {query && (
            <button aria-label="검색어 지우기" onClick={() => setQuery("")} type="button">
              <Icon name="close" size={16} />
            </button>
          )}
        </label>
        <div className="library-tabs" role="tablist">
          {[
            ["core", `핵심 ${coreVerbs.length}`],
            ["basic", "기본 쓰임 100"],
            ["phrasal", "구동사 100"],
            ["basic-conversation", "기초 회화 100"],
            ["conversation", "실전 회화 100"],
            ["meeting", "회의 문장 100"],
            ["all", "전체"],
            ["favorites", "저장"],
          ].map(([id, label]) => (
            <button
              aria-selected={tab === id}
              className={tab === id ? "active" : ""}
              key={id}
              onClick={() => setTab(id)}
              role="tab"
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {showCore && matchingCore.length > 0 && (
        <section className="library-section">
          <div className="library-section-title">
            <span>CORE ENGINES</span>
            <small>{matchingCore.length}개</small>
          </div>
          <div className="verb-library-grid">
            {matchingCore.map((verb, index) => {
              const favoriteId = `core:${verb.id}`;
              const mastery = getVerbMastery(progress, verb.id);
              return (
                <article
                  className="verb-library-card"
                  key={verb.id}
                  style={{ "--card-accent": verb.accent, "--card-tint": verb.tint }}
                >
                  <button
                    aria-label={`${verb.word} ${favorites.includes(favoriteId) ? "저장 해제" : "저장"}`}
                    className={`favorite-button ${favorites.includes(favoriteId) ? "active" : ""}`}
                    onClick={() => onToggleFavorite(favoriteId)}
                    type="button"
                  >
                    <Icon name="star" size={17} />
                  </button>
                  <button className="verb-card-main" onClick={() => openVerb(verb)} type="button">
                    <span className="verb-index">{String(index + 1).padStart(2, "0")}</span>
                    <strong>{verb.word}</strong>
                    <p>{verb.korean}</p>
                    <small>{verb.image}</small>
                    <div className="card-chunks">
                      {verb.chunks.slice(0, 2).map((chunk) => (
                        <span key={chunk.phrase}>{chunk.phrase}</span>
                      ))}
                    </div>
                    <div className="card-mastery">
                      <span><span style={{ width: `${mastery}%` }} /></span>
                      <small>{mastery}%</small>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {showReferences && matchingReferences.length > 0 && (
        <section className="library-section">
          <div className="library-section-title">
            <span>QUICK REFERENCE</span>
            <small>{matchingReferences.length}개 결과</small>
          </div>
          <div className="reference-grid">
            {matchingReferences.slice(0, visibleCount).map((item) => (
              <article className="reference-card" key={item.id}>
                <button
                  aria-label={`${item.term} ${favorites.includes(item.id) ? "저장 해제" : "저장"}`}
                  className={`favorite-button ${favorites.includes(item.id) ? "active" : ""}`}
                  onClick={() => onToggleFavorite(item.id)}
                  type="button"
                >
                  <Icon name="star" size={16} />
                </button>
                <button onClick={() => openReference(item)} type="button">
                  <div className="reference-meta">
                    <span className={item.type}>
                      {item.type === "basic"
                        ? "BASIC"
                        : item.type === "phrasal"
                          ? "PHRASAL"
                          : item.type === "basic-conversation"
                            ? "BASIC CONV"
                            : item.type === "conversation"
                              ? "CONVERSATION"
                              : "MEETING"}
                    </span>
                    <small>DAY {String(item.day).padStart(3, "0")}</small>
                  </div>
                  <strong>{item.term}</strong>
                  <p>{item.meaning}</p>
                  {(item.coreId || item.focus) && (
                    <span className="related-core">
                      {item.coreId ? `CORE · ${item.coreId.toUpperCase()}` : `FOCUS · ${item.focus}`}
                    </span>
                  )}
                </button>
              </article>
            ))}
          </div>
          {visibleCount < matchingReferences.length && (
            <button
              className="button secondary load-more"
              onClick={() => setVisibleCount((count) => count + 36)}
              type="button"
            >
              36개 더 보기
              <Icon name="plus" size={17} />
            </button>
          )}
        </section>
      )}

      {!matchingCore.length && !matchingReferences.length && (
        <div className="search-empty">
          <span><Icon name="search" size={28} /></span>
          <h3>일치하는 표현이 없어요.</h3>
          <p>더 짧은 단어 또는 한국어 핵심 뜻으로 다시 검색해 보세요.</p>
        </div>
      )}
    </div>
  );
}

function NotebookView({
  sentences,
  onSave,
  onDelete,
  speak,
  startPractice,
}) {
  const emptyForm = { id: null, ko: "", en: "", verbId: "get", hint: "" };
  const [form, setForm] = useState(emptyForm);

  function submit(event) {
    event.preventDefault();
    if (onSave(form)) setForm(emptyForm);
  }

  function editSentence(sentence) {
    setForm({ ...sentence, verbId: sentence.verbId ?? "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="page view-enter">
      <PageHeader
        eyebrow="MY SENTENCE NOTEBOOK"
        title="외운 문장보다, 내가 쓸 문장."
        description="오늘 실제로 말하고 싶은 문장을 저장하면 반복 복습 카드에 자동으로 들어갑니다."
        action={
          <button
            className="button dark"
            disabled={!sentences.length}
            onClick={() =>
              startPractice("recall", {
                customOnly: true,
                title: "내 문장 복습",
                count: Math.min(10, sentences.length),
              })
            }
            type="button"
          >
            <Icon name="play" size={18} />
            내 문장 연습
          </button>
        }
      />

      <section className="notebook-layout">
        <form className="panel sentence-form" onSubmit={submit}>
          <div className="panel-heading">
            <div>
              <span className="eyebrow">PERSONALIZE</span>
              <h3>{form.id ? "내 문장 수정" : "새 문장 만들기"}</h3>
            </div>
            {form.id && (
              <button className="text-button" onClick={() => setForm(emptyForm)} type="button">
                새로 쓰기
              </button>
            )}
          </div>

          <label className="field">
            <span>한국어 상황</span>
            <textarea
              onChange={(event) => setForm({ ...form, ko: event.target.value })}
              placeholder="예: 회의 끝나고 다시 연락드릴게요."
              rows="3"
              value={form.ko}
            />
          </label>

          <label className="field">
            <span>내가 말할 영어</span>
            <textarea
              onChange={(event) => setForm({ ...form, en: event.target.value })}
              placeholder="I'll get back to you after the meeting."
              rows="3"
              value={form.en}
            />
          </label>

          <div className="field-row">
            <label className="field">
              <span>중심 동사</span>
              <select
                onChange={(event) => setForm({ ...form, verbId: event.target.value })}
                value={form.verbId}
              >
                <option value="">기타 표현 · 핵심동사 연결 없음</option>
                {coreVerbs.map((verb) => (
                  <option key={verb.id} value={verb.id}>
                    {verb.word} · {verb.korean}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>힌트 (선택)</span>
              <input
                onChange={(event) => setForm({ ...form, hint: event.target.value })}
                placeholder="get back to"
                type="text"
                value={form.hint}
              />
            </label>
          </div>

          <div className="form-tip">
            <Icon name="sparkle" size={18} />
            <p>명사 하나만 내 상황으로 바꿔도 기억에 훨씬 오래 남아요.</p>
          </div>

          <button className="button primary wide" type="submit">
            <Icon name={form.id ? "check" : "plus"} size={18} />
            {form.id ? "수정 완료" : "내 문장에 저장"}
          </button>
        </form>

        <div className="panel notebook-guide">
          <span className="eyebrow">3 STEP METHOD</span>
          <h3>문장을 내 것으로 만드는 법</h3>
          <div className="guide-steps">
            <div>
              <span>1</span>
              <p><strong>그대로 읽기</strong>기본 문장을 소리 내어 세 번 읽습니다.</p>
            </div>
            <div>
              <span>2</span>
              <p><strong>한 단어 바꾸기</strong>coffee를 tea로, report를 email로 바꿉니다.</p>
            </div>
            <div>
              <span>3</span>
              <p><strong>상황 붙이기</strong>언제, 누구에게 말할지 한국어 상황과 함께 저장합니다.</p>
            </div>
          </div>
          <div className="guide-example">
            <span>BASE</span>
            <p>I'll get back to you.</p>
            <Icon name="arrow" size={17} />
            <span>MINE</span>
            <p>I'll get back to you after lunch.</p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SAVED SENTENCES</span>
            <h2>내가 다시 말할 문장</h2>
          </div>
          <span className="soft-badge">{sentences.length}개 저장</span>
        </div>

        {sentences.length ? (
          <div className="saved-sentence-grid">
            {sentences.map((sentence) => {
              const verb = coreVerbs.find((item) => item.id === sentence.verbId);
              return (
                <article
                  className="saved-sentence-card"
                  key={sentence.id}
                  style={{ "--sentence-accent": verb?.accent ?? "#d9ff66" }}
                >
                  <div className="saved-sentence-top">
                    <span>{verb?.word ?? "MY"}</span>
                    <div>
                      <button
                        aria-label="문장 듣기"
                        className="icon-button"
                        onClick={() => speak(sentence.en)}
                        type="button"
                      >
                        <Icon name="volume" size={17} />
                      </button>
                      <button
                        aria-label="문장 수정"
                        className="icon-button"
                        onClick={() => editSentence(sentence)}
                        type="button"
                      >
                        <Icon name="edit" size={17} />
                      </button>
                      <button
                        aria-label="문장 삭제"
                        className="icon-button danger"
                        onClick={() => onDelete(sentence.id)}
                        type="button"
                      >
                        <Icon name="trash" size={17} />
                      </button>
                    </div>
                  </div>
                  <p>{sentence.ko}</p>
                  <strong>{sentence.en}</strong>
                  {sentence.hint && <small>{sentence.hint}</small>}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="notebook-empty">
            <span><Icon name="note" size={30} /></span>
            <h3>첫 번째 내 문장을 만들어 보세요.</h3>
            <p>실제로 자주 말하고 싶은 문장일수록 더 빨리 입에 붙습니다.</p>
          </div>
        )}
      </section>
    </div>
  );
}

function ProgressView({
  progress,
  overallMastery,
  level,
  levelXp,
  onExport,
  onImport,
  onReset,
  importInputRef,
}) {
  const heatmapDays = getRecentDays(84);
  const activeDays = heatmapDays.filter((day) => (progress.activity[day.key] ?? 0) > 0).length;
  const totalLast84 = heatmapDays.reduce(
    (sum, day) => sum + (progress.activity[day.key] ?? 0),
    0,
  );
  const rankings = coreVerbs
    .map((verb) => ({ verb, mastery: getVerbMastery(progress, verb.id) }))
    .sort((a, b) => b.mastery - a.mastery);

  return (
    <div className="page view-enter">
      <PageHeader
        eyebrow="PROGRESS & MEMORY"
        title="쌓인 횟수가 말하기 자신감이 됩니다."
        description="정답률보다 더 중요한 것은 다시 꺼낸 횟수입니다. 작은 기록을 꾸준히 이어가세요."
        action={
          <div className="level-display">
            <span>{level}</span>
            <div>
              <strong>LEVEL {level}</strong>
              <small>{levelXp} / 120 XP</small>
            </div>
          </div>
        }
      />

      <section className="progress-hero-grid">
        <div className="progress-score-card">
          <span className="eyebrow">TOTAL MASTERY</span>
          <div
            className="large-score-ring"
            style={{ "--score": `${Math.max(overallMastery, 2) * 3.6}deg` }}
          >
            <div>
              <strong>{overallMastery}</strong>
              <span>%</span>
            </div>
          </div>
          <p>전체 기본동사 문장 중 장기 기억 단계에 도달한 비율</p>
        </div>
        <div className="progress-stat-stack">
          <div>
            <span><Icon name="flame" size={20} /></span>
            <p><strong>{progress.streak}일</strong>현재 연속 학습</p>
          </div>
          <div>
            <span><Icon name="rotate" size={20} /></span>
            <p><strong>{progress.totalReviews}</strong>누적 문장 복습</p>
          </div>
          <div>
            <span><Icon name="play" size={20} /></span>
            <p><strong>{progress.sessions}</strong>완료한 세션</p>
          </div>
          <div>
            <span><Icon name="note" size={20} /></span>
            <p><strong>{progress.sentences.length}</strong>저장한 내 문장</p>
          </div>
        </div>
      </section>

      <section className="panel heatmap-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">LAST 12 WEEKS</span>
            <h3>말하기 활동</h3>
          </div>
          <div className="heatmap-summary">
            <span><strong>{activeDays}</strong> active days</span>
            <span><strong>{totalLast84}</strong> sentences</span>
          </div>
        </div>
        <div className="heatmap-wrap">
          <div className="heatmap">
            {heatmapDays.map((day) => {
              const count = progress.activity[day.key] ?? 0;
              const levelClass =
                count === 0 ? 0 : count < 4 ? 1 : count < 8 ? 2 : count < 12 ? 3 : 4;
              return (
                <span
                  aria-label={`${day.key}: ${count}문장`}
                  className={`heat-level-${levelClass}`}
                  key={day.key}
                  title={`${day.key} · ${count}문장`}
                />
              );
            })}
          </div>
          <div className="heat-legend">
            <span>적게</span>
            {[0, 1, 2, 3, 4].map((item) => (
              <i className={`heat-level-${item}`} key={item} />
            ))}
            <span>많이</span>
          </div>
        </div>
      </section>

      <section className="progress-layout">
        <div className="panel mastery-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">VERB MASTERY</span>
              <h3>동사별 숙련도</h3>
            </div>
          </div>
          <div className="mastery-list">
            {rankings.map(({ verb, mastery }) => (
              <div className="mastery-row" key={verb.id}>
                <span style={{ "--dot-color": verb.accent }}>{verb.word}</span>
                <div><span style={{ width: `${Math.max(mastery, 2)}%` }} /></div>
                <strong>{mastery}%</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="panel data-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">YOUR DATA</span>
              <h3>기록 보관</h3>
            </div>
          </div>
          <p className="data-intro">
            모든 학습 기록은 이 브라우저에만 저장됩니다. 백업 파일로 옮기거나 복원할 수 있어요.
          </p>
          <button className="data-action" onClick={onExport} type="button">
            <span><Icon name="download" size={20} /></span>
            <div><strong>기록 내보내기</strong><small>JSON 백업 파일 저장</small></div>
            <Icon name="chevron" size={17} />
          </button>
          <button className="data-action" onClick={() => importInputRef.current?.click()} type="button">
            <span><Icon name="upload" size={20} /></span>
            <div><strong>기록 불러오기</strong><small>이전에 저장한 백업 복원</small></div>
            <Icon name="chevron" size={17} />
          </button>
          <button className="data-action danger" onClick={onReset} type="button">
            <span><Icon name="trash" size={20} /></span>
            <div><strong>전체 기록 초기화</strong><small>진도와 내 문장 모두 삭제</small></div>
            <Icon name="chevron" size={17} />
          </button>
        </div>
      </section>

      <section className="panel sources-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">SOURCE MAP</span>
            <h3>앱에 반영된 학습 자료</h3>
          </div>
          <span className="soft-badge">{sourceMaterials.length} PDFs</span>
        </div>
        <div className="source-grid">
          {sourceMaterials.map((source, index) => (
            <div key={source.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p><strong>{source.title}</strong><small>{source.detail}</small></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function DetailDrawer({
  item,
  favorite,
  note,
  onClose,
  onPractice,
  onSaveSentence,
  onToggleFavorite,
  onUpdateNote,
  speak,
}) {
  const isCore = item.type === "core";
  const data = item.item;
  const favoriteId = isCore ? `core:${data.id}` : data.id;
  const relatedVerb = !isCore && data.coreId
    ? coreVerbs.find((verb) => verb.id === data.coreId)
    : null;
  const referenceExample = relatedVerb?.chunks.find(
    (chunk) => chunk.phrase.toLowerCase() === data.term.toLowerCase(),
  );

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  function saveExample(example, verbId) {
    onSaveSentence({
      ko: example.ko,
      en: example.example,
      verbId,
      hint: isCore ? data.word.toLowerCase() : data.term,
    });
  }

  return (
    <div className="drawer-backdrop" onMouseDown={onClose} role="presentation">
      <aside
        aria-label={isCore ? `${data.word} 상세 카드` : `${data.term} 상세 카드`}
        aria-modal="true"
        className="detail-drawer"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button aria-label="닫기" className="drawer-close" onClick={onClose} type="button">
          <Icon name="close" size={20} />
        </button>

        {isCore ? (
          <>
            <header
              className="drawer-verb-hero"
              style={{ "--drawer-accent": data.accent, "--drawer-tint": data.tint }}
            >
              <div className="drawer-meta">
                <span>CORE ENGINE · {String(coreVerbs.indexOf(data) + 1).padStart(2, "0")}</span>
                <button
                  className={`favorite-button large ${favorite ? "active" : ""}`}
                  onClick={() => onToggleFavorite(favoriteId)}
                  type="button"
                >
                  <Icon name="star" size={19} />
                </button>
              </div>
              <h2>{data.word}</h2>
              <p>{data.korean}</p>
              <span className="verb-image">{data.image}</span>
              <small>{data.forms}</small>
            </header>

            <div className="drawer-body">
              <p className="drawer-summary">{data.summary}</p>

              <section className="drawer-section">
                <div className="drawer-section-title">
                  <span>01</span>
                  <h3>핵심 문장 틀</h3>
                </div>
                <div className="pattern-list">
                  {data.patterns.map((pattern) => (
                    <div key={pattern.frame}>
                      <span>{pattern.frame}</span>
                      <small>{pattern.meaning}</small>
                      <button onClick={() => speak(pattern.example)} type="button">
                        <p>{pattern.example}</p>
                        <em>{pattern.ko}</em>
                        <Icon name="volume" size={17} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="drawer-section">
                <div className="drawer-section-title">
                  <span>02</span>
                  <h3>원어민 실전 회화 용법</h3>
                  <small>{data.usages.length} USES</small>
                </div>
                <div className="conversation-usage-list">
                  {data.usages.map((usage, index) => (
                    <article key={`${usage.frame}-${usage.example}`}>
                      <div className="usage-heading">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <strong>{usage.frame}</strong>
                        <small>{usage.meaning}</small>
                      </div>
                      <button onClick={() => speak(usage.example)} type="button">
                        <p>{usage.example}</p>
                        <em>{usage.ko}</em>
                        <Icon name="volume" size={17} />
                      </button>
                    </article>
                  ))}
                </div>
              </section>

              <section className="drawer-section">
                <div className="drawer-section-title">
                  <span>03</span>
                  <h3>덩어리로 익히기</h3>
                </div>
                <div className="chunk-list">
                  {data.chunks.map((chunk) => (
                    <article key={chunk.phrase}>
                      <div>
                        <strong>{chunk.phrase}</strong>
                        <span>{chunk.meaning}</span>
                      </div>
                      <p>{chunk.example}</p>
                      <small>{chunk.ko}</small>
                      <div className="chunk-actions">
                        <button aria-label="문장 듣기" onClick={() => speak(chunk.example)} type="button">
                          <Icon name="volume" size={16} />
                        </button>
                        <button
                          aria-label="내 문장에 저장"
                          onClick={() => saveExample(chunk, data.id)}
                          type="button"
                        >
                          <Icon name="plus" size={16} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="drawer-section">
                <div className="drawer-section-title">
                  <span>04</span>
                  <h3>나만의 메모</h3>
                </div>
                <textarea
                  className="note-area"
                  onChange={(event) => onUpdateNote(favoriteId, event.target.value)}
                  placeholder="헷갈리는 점, 내 상황에 바꿔 쓸 단어를 적어 두세요."
                  rows="4"
                  value={note}
                />
              </section>
            </div>

            <footer className="drawer-footer">
              <button
                className="button primary wide"
                onClick={() =>
                  onPractice({
                    verbId: data.id,
                    title: `${data.word} 집중 드릴`,
                    count: 8,
                  })
                }
                type="button"
              >
                <Icon name="play" size={18} />
                {data.word}만 집중 연습
              </button>
            </footer>
          </>
        ) : (
          <>
            <header className={`reference-drawer-hero ${data.type}`}>
              <div className="drawer-meta">
                <span>
                  {data.type === "basic"
                    ? "BASIC VERB USE"
                    : data.type === "phrasal"
                      ? "PHRASAL VERB"
                      : data.type === "basic-conversation"
                        ? "BASIC CONVERSATION"
                        : data.type === "conversation"
                          ? "CONVERSATION PATTERN"
                          : "MEETING SENTENCE"}
                </span>
                <button
                  className={`favorite-button large ${favorite ? "active" : ""}`}
                  onClick={() => onToggleFavorite(favoriteId)}
                  type="button"
                >
                  <Icon name="star" size={19} />
                </button>
              </div>
              <small>{data.type === "meeting" ? "NO" : "DAY"} {String(data.day).padStart(3, "0")} · {data.source}</small>
              <h2>{data.term}</h2>
              <p>{data.meaning}</p>
            </header>
            <div className="drawer-body reference-drawer-body">
              <section className="reference-focus-card">
                <span className="eyebrow">HOW TO REMEMBER</span>
                <h3>
                  {data.type === "phrasal"
                    ? "한 덩어리로 소리 내어 익히세요."
                    : data.type === "meeting"
                      ? "완성 문장을 먼저 익힌 뒤 상황만 바꿔 말하세요."
                      : data.type === "conversation" || data.type === "basic-conversation"
                        ? "대표문장을 소리 덩어리로 먼저 익히세요."
                        : "뜻보다 쓰임을 문장에 붙이세요."}
                </h3>
                <p>
                  {data.type === "phrasal"
                    ? `${data.term}를 단어별로 번역하지 말고 하나의 동사처럼 세 번 이어 말해 보세요.`
                    : data.type === "meeting"
                      ? `${data.pattern} 틀을 유지하고 안건·사람·일정만 바꿔 여러 회의 상황에 적용해 보세요.`
                      : data.type === "conversation" || data.type === "basic-conversation"
                        ? `${data.term} 표현이 필요한 상황을 떠올리고 대표문장과 예문을 한 호흡으로 반복하세요.`
                        : `${data.term}를 먼저 던진 뒤 사람·사물·상황을 뒤에 붙여 문장을 늘려 보세요.`}
                </p>
              </section>

              {data.model && (
                <section className="workbook-detail">
                  <div className="workbook-model">
                    <span>MODEL SENTENCE</span>
                    <button onClick={() => speak(data.model)} type="button">
                      <strong>{data.model}</strong>
                      <small>{data.modelKo ?? data.heading}</small>
                      <Icon name="volume" size={19} />
                    </button>
                    <button
                      className="text-button"
                      onClick={() =>
                        onSaveSentence({
                          ko: data.modelKo ?? data.heading,
                          en: data.model,
                          verbId: data.coreId ?? null,
                          hint: data.term,
                        })
                      }
                      type="button"
                    >
                      <Icon name="plus" size={16} />
                      내 문장에 저장
                    </button>
                  </div>

                  <div className="workbook-examples">
                    <span>MODEL EXAMPLES</span>
                    {data.examples.map((example, index) => (
                      <button key={example} onClick={() => speak(example)} type="button">
                        <em>{index + 1}</em>
                        <p>{example}</p>
                        <Icon name="volume" size={16} />
                      </button>
                    ))}
                  </div>

                  <div className="workbook-dialogue">
                    <span>SMALL TALK</span>
                    <p><em>A</em>{data.dialogue.a}</p>
                    <p><em>B</em>{data.dialogue.b}</p>
                    <button
                      aria-label="대화 전체 듣기"
                      onClick={() => speak(`${data.dialogue.a} ${data.dialogue.b}`)}
                      type="button"
                    >
                      <Icon name="volume" size={17} />
                    </button>
                  </div>

                  <div className="workbook-tip">
                    <span>TIP</span>
                    <p>{data.tip}</p>
                  </div>
                </section>
              )}

              {referenceExample && (
                <section className="reference-example">
                  <span>EXAMPLE</span>
                  <button onClick={() => speak(referenceExample.example)} type="button">
                    <strong>{referenceExample.example}</strong>
                    <small>{referenceExample.ko}</small>
                    <Icon name="volume" size={18} />
                  </button>
                  <button
                    className="text-button"
                    onClick={() => saveExample(referenceExample, relatedVerb.id)}
                    type="button"
                  >
                    <Icon name="plus" size={16} />
                    내 문장에 저장
                  </button>
                </section>
              )}

              {relatedVerb && (
                <section
                  className="related-engine-card"
                  style={{ "--related-accent": relatedVerb.accent }}
                >
                  <span>RELATED CORE ENGINE</span>
                  <strong>{relatedVerb.word}</strong>
                  <p>{relatedVerb.image}</p>
                </section>
              )}

              <section className="drawer-section">
                <div className="drawer-section-title">
                  <span>+</span>
                  <h3>나만의 메모</h3>
                </div>
                <textarea
                  className="note-area"
                  onChange={(event) => onUpdateNote(favoriteId, event.target.value)}
                  placeholder="이 표현을 쓸 내 상황과 문장을 적어 보세요."
                  rows="5"
                  value={note}
                />
              </section>
            </div>
            <footer className="drawer-footer">
              <button
                className="button primary wide"
                onClick={() =>
                  onPractice({
                    cards: [
                      {
                        id: `reference-practice-${data.id}`,
                        verbId: data.coreId,
                        verb: data.focus ?? data.sourceLabel ?? data.term.split(" ")[0].toUpperCase(),
                        ko: data.modelKo ?? data.heading ?? data.meaning,
                        answer: data.model ?? data.term,
                        hint: data.pattern ?? data.term ?? data.source,
                        meaning: data.meaning ?? `${data.term} 표현을 문장으로 말하기`,
                        context: data.category ?? "동사 사전",
                      },
                    ],
                    title: `${data.term} 대표문장`,
                    count: 1,
                  })
                }
                type="button"
              >
                <Icon name="play" size={18} />
                이 표현 바로 연습
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}

function PracticeModal({ session, allCards, onClose, onRate, onComplete, speak }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [builtTokens, setBuiltTokens] = useState([]);
  const [shadowCount, setShadowCount] = useState(0);
  const [results, setResults] = useState([]);
  const [finished, setFinished] = useState(false);
  const completedRef = useRef(false);
  const current = session.queue[index];
  const taskType =
    session.mode === "quick"
      ? ["recall", "build", "choice"][index % 3]
      : session.mode === "scenario"
        ? "recall"
        : session.mode;

  const answerTokens = useMemo(
    () =>
      current
        ? seededShuffle(
            current.answer.split(/\s+/).map((text, tokenIndex) => ({
              id: `${tokenIndex}-${text}`,
              text,
            })),
            current.id,
          )
        : [],
    [current],
  );
  const choices = useMemo(() => {
    if (!current) return [];
    const candidates = allCards.filter(
      (card) => card.id !== current.id && card.answer !== current.answer,
    );
    const sameVerb = candidates.filter(
      (card) => card.verbId && card.verbId === current.verbId,
    );
    const sameContext = candidates.filter(
      (card) =>
        card.context === current.context &&
        (!card.verbId || card.verbId !== current.verbId),
    );
    const remaining = candidates.filter(
      (card) =>
        card.verbId !== current.verbId &&
        card.context !== current.context,
    );
    const distractors = [
      ...seededShuffle(sameVerb, `${current.id}-same-verb`),
      ...seededShuffle(sameContext, `${current.id}-same-context`),
      ...seededShuffle(remaining, `${current.id}-remaining`),
    ]
        .map((card) => card.answer)
        .filter((answer, answerIndex, array) => array.indexOf(answer) === answerIndex)
        .slice(0, 3);
    return seededShuffle([current.answer, ...distractors], `${current.id}-final`);
  }, [allCards, current]);
  const assembledSentence = builtTokens.map((token) => token.text).join(" ");
  const buildCorrect =
    current && normalizeSentence(assembledSentence) === normalizeSentence(current.answer);
  const choiceCorrect = selectedChoice === current?.answer;
  const progressPercent = ((index + (finished ? 1 : 0)) / session.queue.length) * 100;

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.code === "Space" && taskType === "recall" && !revealed) {
        event.preventDefault();
        setRevealed(true);
      }
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, revealed, taskType]);

  useEffect(() => {
    setRevealed(false);
    setSelectedChoice(null);
    setBuiltTokens([]);
    setShadowCount(0);
  }, [index]);

  function rateAndContinue(rating) {
    onRate(current, rating);
    setResults((previous) => [...previous, rating]);
    if (index === session.queue.length - 1) {
      setFinished(true);
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete();
      }
    } else {
      setIndex((currentIndex) => currentIndex + 1);
    }
  }

  function addToken(token) {
    if (builtTokens.some((item) => item.id === token.id)) return;
    setBuiltTokens((previous) => [...previous, token]);
  }

  function removeToken(token) {
    setBuiltTokens((previous) => previous.filter((item) => item.id !== token.id));
  }

  if (finished) {
    const good = results.filter((result) => result === "good").length;
    const hard = results.filter((result) => result === "hard").length;
    const xp = good * 5 + hard * 3 + (results.length - good - hard);
    return (
      <div className="practice-backdrop">
        <section aria-modal="true" className="practice-modal result-modal" role="dialog">
          <div className="result-confetti">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className="result-icon"><Icon name="trophy" size={32} /></span>
          <span className="eyebrow">SESSION COMPLETE</span>
          <h2>입이 기억할 한 세트를 끝냈어요.</h2>
          <p>틀린 문장은 더 빨리, 잘한 문장은 기억이 흐려질 때 다시 만납니다.</p>
          <div className="result-stats">
            <div><strong>{session.queue.length}</strong><span>문장 완료</span></div>
            <div><strong>{good}</strong><span>바로 나옴</span></div>
            <div><strong>+{xp}</strong><span>XP 획득</span></div>
          </div>
          <button className="button primary wide" onClick={onClose} type="button">
            완료
            <Icon name="check" size={18} />
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="practice-backdrop">
      <section aria-modal="true" className="practice-modal" role="dialog">
        <header className="practice-header">
          <div>
            <span>{session.title}</span>
            <small>{taskType === "recall" ? "즉답 리콜" : taskType === "build" ? "문장 조립" : taskType === "choice" ? "동사 선택" : "3회 섀도잉"}</small>
          </div>
          <div className="practice-counter">
            <strong>{index + 1}</strong>
            <span>/ {session.queue.length}</span>
          </div>
          <button aria-label="연습 닫기" className="icon-button" onClick={onClose} type="button">
            <Icon name="close" size={19} />
          </button>
        </header>
        <div className="practice-progress"><span style={{ width: `${progressPercent}%` }} /></div>

        <div className="practice-content">
          <div className="practice-context">
            <span>{current.context ?? "기본동사"}</span>
            <strong>{current.verb}</strong>
          </div>

          {taskType === "recall" && (
            <div className="recall-task">
              <span className="task-label">상황과 의도에 맞게 3초 안에 영어로 말해 보세요.</span>
              <h2>{current.ko}</h2>
              {current.meaning && (
                <p className="intent-line"><span>의도</span>{current.meaning}</p>
              )}
              <p className="hint-line"><span>HINT</span>{current.hint}</p>

              {!revealed ? (
                <button className="reveal-button" onClick={() => setRevealed(true)} type="button">
                  정답 확인
                  <small>Space</small>
                </button>
              ) : (
                <div className="answer-reveal">
                  <button aria-label="정답 듣기" onClick={() => speak(current.answer)} type="button">
                    <Icon name="volume" size={22} />
                  </button>
                  <div><strong>{current.answer}</strong><span>{current.ko}</span></div>
                </div>
              )}
            </div>
          )}

          {taskType === "choice" && (
            <div className="choice-task">
              <span className="task-label">가장 자연스러운 문장을 고르세요.</span>
              <h2>{current.ko}</h2>
              {current.meaning && (
                <p className="intent-line"><span>의도</span>{current.meaning}</p>
              )}
              <div className="choice-list">
                {choices.map((choice, choiceIndex) => {
                  const chosen = selectedChoice === choice;
                  const correct = selectedChoice && choice === current.answer;
                  const wrong = chosen && choice !== current.answer;
                  return (
                    <button
                      className={`${chosen ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}`}
                      disabled={Boolean(selectedChoice)}
                      key={choice}
                      onClick={() => setSelectedChoice(choice)}
                      type="button"
                    >
                      <span>{String.fromCharCode(65 + choiceIndex)}</span>
                      <strong>{choice}</strong>
                      {correct && <Icon name="check" size={18} />}
                      {wrong && <Icon name="close" size={18} />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {taskType === "build" && (
            <div className="build-task">
              <span className="task-label">영어 어순으로 문장을 조립하세요.</span>
              <h2>{current.ko}</h2>
              {current.meaning && (
                <p className="intent-line"><span>의도</span>{current.meaning}</p>
              )}
              <div className={`build-answer ${buildCorrect ? "correct" : ""}`}>
                {builtTokens.length ? (
                  builtTokens.map((token) => (
                    <button key={token.id} onClick={() => removeToken(token)} type="button">
                      {token.text}
                    </button>
                  ))
                ) : (
                  <span>주어 + 동사부터 놓아 보세요</span>
                )}
              </div>
              <div className="token-bank">
                {answerTokens.map((token) => (
                  <button
                    disabled={builtTokens.some((item) => item.id === token.id)}
                    key={token.id}
                    onClick={() => addToken(token)}
                    type="button"
                  >
                    {token.text}
                  </button>
                ))}
              </div>
              {!buildCorrect && (
                <button className="text-button center" onClick={() => setRevealed(true)} type="button">
                  정답 보기
                </button>
              )}
              {revealed && !buildCorrect && (
                <div className="build-solution">
                  <span>ANSWER</span>
                  <strong>{current.answer}</strong>
                </div>
              )}
            </div>
          )}

          {taskType === "shadow" && (
            <div className="shadow-task">
              <span className="task-label">듣고, 같은 리듬으로 세 번 따라 말하세요.</span>
              <p>{current.ko}</p>
              <button className="shadow-sentence" onClick={() => speak(current.answer)} type="button">
                <span><Icon name="volume" size={25} /></span>
                <strong>{current.answer}</strong>
                <small>눌러서 다시 듣기</small>
              </button>
              <div className="shadow-reps">
                {[1, 2, 3].map((rep) => (
                  <button
                    className={shadowCount >= rep ? "done" : ""}
                    key={rep}
                    onClick={() => setShadowCount(Math.max(shadowCount, rep))}
                    type="button"
                  >
                    {shadowCount >= rep ? <Icon name="check" size={20} /> : rep}
                    <span>{rep}회</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {((taskType === "recall" && revealed) ||
          (taskType === "choice" && selectedChoice) ||
          (taskType === "build" && (buildCorrect || revealed)) ||
          (taskType === "shadow" && shadowCount >= 3)) && (
          <footer className="rating-footer">
            <span>얼마나 바로 나왔나요?</span>
            <div>
              <button className="again" onClick={() => rateAndContinue("again")} type="button">
                <small>다시</small>
                막혔어요
              </button>
              <button className="hard" onClick={() => rateAndContinue("hard")} type="button">
                <small>어려움</small>
                조금 생각했어요
              </button>
              <button className="good" onClick={() => rateAndContinue(choiceCorrect || buildCorrect || taskType !== "choice" ? "good" : "again")} type="button">
                <small>좋음</small>
                바로 나왔어요
              </button>
            </div>
          </footer>
        )}
      </section>
    </div>
  );
}

function Toast({ message, tone }) {
  return (
    <div className={`toast ${tone}`} role="status">
      <span><Icon name={tone === "warning" ? "more" : "check"} size={17} /></span>
      {message}
    </div>
  );
}

export default App;
