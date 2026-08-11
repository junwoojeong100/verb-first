import {
  coreVerbs,
  practiceCards,
  referenceItems,
  scenarioPacks,
  sentenceFrames,
  sourceMaterials,
} from "../src/data.js";
import {
  meetingCategories,
  meetingMonthPlan,
  meetingPracticeCards,
  meetingSentences,
} from "../src/meetingData.js";
import {
  workbookPracticeCards,
  workbookReferenceItems,
  workbookSources,
  workbookTextCorrections,
  workbookUnits,
} from "../src/workbookData.js";
import { basicConversationWorkbookTranslations } from "../src/workbookTranslations/basicConversation.js";
import { basicVerbWorkbookTranslations } from "../src/workbookTranslations/basicVerb.js";
import { conversationWorkbookTranslations } from "../src/workbookTranslations/conversation.js";
import { phrasalWorkbookTranslations } from "../src/workbookTranslations/phrasal.js";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function assertUnique(items, label) {
  const duplicate = items.find((item, index) => items.indexOf(item) !== index);
  assert(!duplicate, `${label} contains duplicate value: ${duplicate}`);
}

const verbForms = {
  be: ["be", "am", "is", "are", "was", "were", "been", "being"],
  have: ["have", "has", "had", "having"],
  do: ["do", "does", "did", "done", "doing"],
  get: ["get", "gets", "got", "gotten", "getting"],
  make: ["make", "makes", "made", "making"],
  take: ["take", "takes", "took", "taken", "taking"],
  give: ["give", "gives", "gave", "given", "giving"],
  go: ["go", "goes", "went", "gone", "going"],
  come: ["come", "comes", "came", "coming"],
  put: ["put", "puts", "putting"],
  keep: ["keep", "keeps", "kept", "keeping"],
  let: ["let", "lets", "letting"],
  want: ["want", "wants", "wanted", "wanting"],
  need: ["need", "needs", "needed", "needing"],
  like: ["like", "likes", "liked", "liking"],
  think: ["think", "thinks", "thought", "thinking"],
  know: ["know", "knows", "knew", "known", "knowing"],
  see: ["see", "sees", "saw", "seen", "seeing"],
  look: ["look", "looks", "looked", "looking"],
  watch: ["watch", "watches", "watched", "watching"],
  mean: ["mean", "means", "meant", "meaning"],
  say: ["say", "says", "said", "saying"],
  tell: ["tell", "tells", "told", "telling"],
  ask: ["ask", "asks", "asked", "asking"],
  talk: ["talk", "talks", "talked", "talking"],
  turn: ["turn", "turns", "turned", "turning"],
  run: ["run", "runs", "ran", "running"],
  work: ["work", "works", "worked", "working"],
  call: ["call", "calls", "called", "calling"],
  break: ["break", "breaks", "broke", "broken", "breaking"],
};

function answerUsesVerb(answer, verbId) {
  const normalized = answer.toLowerCase().replaceAll("’", "'");
  if (
    verbId === "be" &&
    /\b(?:i'm|you're|we're|they're|what's|who's|where's|how's|there's|that's|everyone's|he's|she's|it's)\b/.test(
      normalized,
    )
  ) {
    return true;
  }
  if (
    verbId === "have" &&
    /\b(?:i've|you've|we've|they've|he's|she's|hasn't|haven't|hadn't)\b/.test(
      normalized,
    )
  ) {
    return true;
  }
  if (verbId === "do" && /\b(?:don't|doesn't|didn't)\b/.test(normalized)) {
    return true;
  }
  return verbForms[verbId].some((form) =>
    new RegExp(`\\b${form}\\b`, "i").test(normalized),
  );
}

const brokenKoreanFragments = ["않 도록", "하세 요", "어 감", "형용사 를"];

function assertCleanText(text, label) {
  assert(!/\s{2,}/.test(text), `${label} contains repeated whitespace: ${text}`);
  for (const [opening, closing] of [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]) {
    assert(
      text.split(opening).length === text.split(closing).length,
      `${label} has unbalanced ${opening}${closing}: ${text}`,
    );
  }
  assert(
    (text.match(/"/g) ?? []).length % 2 === 0,
    `${label} has unmatched quotation marks: ${text}`,
  );
  for (const fragment of brokenKoreanFragments) {
    assert(!text.includes(fragment), `${label} contains broken Korean spacing: ${fragment}`);
  }
}

const expectedCoreIds = [
  "be",
  "have",
  "do",
  "get",
  "make",
  "take",
  "give",
  "go",
  "come",
  "put",
  "keep",
  "let",
  "want",
  "need",
  "like",
  "think",
  "know",
  "see",
  "look",
  "watch",
  "mean",
  "say",
  "tell",
  "ask",
  "talk",
  "turn",
  "run",
  "work",
  "call",
  "break",
];

assert(coreVerbs.length === 30, `Expected 30 core verbs, found ${coreVerbs.length}`);
assertUnique(coreVerbs.map((verb) => verb.id), "Core verb IDs");
for (const id of expectedCoreIds) {
  assert(coreVerbs.some((verb) => verb.id === id), `Missing core verb: ${id}`);
}
for (const verb of coreVerbs) {
  assert(verb.patterns.length === 3, `${verb.id} must have 3 patterns`);
  assert(verb.usages.length >= 10, `${verb.id} must have at least 10 conversation usages`);
  assertUnique(
    verb.usages.map((usage) => usage.example.toLowerCase()),
    `${verb.id} conversation usage examples`,
  );
  assertUnique(
    verb.usages.map((usage) => usage.frame.toLowerCase()),
    `${verb.id} conversation usage frames`,
  );
  for (const usage of verb.usages) {
    assert(
      Boolean(usage.frame && usage.meaning && usage.example && usage.ko),
      `${verb.id} has an incomplete conversation usage`,
    );
    assertCleanText(usage.example, `${verb.id} conversation usage English`);
    assertCleanText(usage.ko, `${verb.id} conversation usage Korean`);
  }
  assert(verb.chunks.length === 4, `${verb.id} must have 4 chunks`);
  assert(verb.prompts.length === 3, `${verb.id} must have 3 prompts`);
}

assert(sentenceFrames.length === 18, `Expected 18 sentence frames, found ${sentenceFrames.length}`);
assert(scenarioPacks.length === 5, `Expected 5 scenario packs, found ${scenarioPacks.length}`);
assert(referenceItems.length === 200, `Expected 200 base references, found ${referenceItems.length}`);
assert(sourceMaterials.length === 8, `Expected 8 source materials, found ${sourceMaterials.length}`);

assert(workbookSources.length === 4, `Expected 4 workbooks, found ${workbookSources.length}`);
for (const [label, translations] of Object.entries({
  "basic-conversation": basicConversationWorkbookTranslations,
  "basic-verb": basicVerbWorkbookTranslations,
  conversation: conversationWorkbookTranslations,
  phrasal: phrasalWorkbookTranslations,
})) {
  assert(translations.length === 100, `${label} must contain 100 Korean prompts`);
}
assert(workbookUnits.length === 400, `Expected 400 workbook units, found ${workbookUnits.length}`);
assert(
  workbookReferenceItems.length === 400,
  `Expected 400 workbook references, found ${workbookReferenceItems.length}`,
);
assert(
  workbookPracticeCards.length === 400,
  `Expected 400 workbook practice cards, found ${workbookPracticeCards.length}`,
);
for (const card of workbookPracticeCards) {
  assert(
    card.verb === card.hint,
    `${card.id} has an incorrect practice label: ${card.verb}`,
  );
}
for (const item of workbookReferenceItems) {
  assert(
    item.focus === (item.coreId ? null : item.term),
    `${item.id} has an incorrect focus label`,
  );
}
assertUnique(workbookUnits.map((unit) => unit.id), "Workbook unit IDs");
for (const source of workbookSources) {
  const units = workbookUnits.filter((unit) => unit.sourceId === source.id);
  assert(units.length === 100, `${source.id} must contain 100 units`);
  assertUnique(units.map((unit) => unit.no), `${source.id} day numbers`);
}
for (const unit of workbookUnits) {
  assert(Boolean(unit.model), `${unit.id} is missing its model sentence`);
  assert(Boolean(unit.ko), `${unit.id} is missing its Korean prompt`);
  assert(/[가-힣]/.test(unit.ko), `${unit.id} Korean prompt does not contain Korean text`);
  assert(unit.ko !== unit.heading, `${unit.id} still uses its heading as the Korean prompt`);
  assert(unit.examples.length === 3, `${unit.id} must contain 3 model examples`);
  assert(Boolean(unit.dialogue.a && unit.dialogue.b), `${unit.id} is missing small talk`);
  assert(Boolean(unit.tip), `${unit.id} is missing its tip`);
  for (const englishText of [
    unit.model,
    ...unit.examples,
    unit.dialogue.a,
    unit.dialogue.b,
  ]) {
    assertCleanText(englishText, `${unit.id} English content`);
    assert(!/[가-힣]/.test(englishText), `${unit.id} has Korean text mixed into English content`);
    assert(
      !/[A-Za-z]-\s+[A-Za-z]/.test(englishText),
      `${unit.id} has a broken hyphenated English word: ${englishText}`,
    );
  }
  for (const koreanText of [unit.ko, unit.usage, unit.heading, unit.tip]) {
    assertCleanText(koreanText, `${unit.id} Korean content`);
  }
  for (const cleanedSourceText of [unit.usage, unit.heading, unit.tip]) {
    for (const [incorrect] of workbookTextCorrections) {
      assert(
        !cleanedSourceText.includes(incorrect),
        `${unit.id} still contains a known text corruption: ${incorrect}`,
      );
    }
  }
}

assert(meetingCategories.length === 16, `Expected 16 meeting categories, found ${meetingCategories.length}`);
assert(meetingSentences.length === 100, `Expected 100 meeting originals, found ${meetingSentences.length}`);
assert(
  meetingSentences.reduce((sum, sentence) => sum + sentence.variants.length, 0) === 200,
  "Meeting sentences must contain exactly 200 applied variants",
);
assert(
  meetingPracticeCards.length === 300,
  `Expected 300 meeting practice cards, found ${meetingPracticeCards.length}`,
);
assert(meetingMonthPlan.length === 30, `Expected 30 meeting plan days, found ${meetingMonthPlan.length}`);
assertUnique(meetingSentences.map((sentence) => sentence.no), "Meeting sentence numbers");
for (let number = 1; number <= 100; number += 1) {
  assert(meetingSentences.some((sentence) => sentence.no === number), `Missing meeting sentence ${number}`);
}
for (const sentence of meetingSentences) {
  assert(sentence.variants.length === 2, `${sentence.id} must have 2 applied variants`);
  assert(Boolean(sentence.focus), `${sentence.id} is missing its focus expression`);
  assert(
    sentence.verbId || sentence.focus !== "MEETING",
    `${sentence.id} has neither a core verb nor a specific focus expression`,
  );
  assertCleanText(sentence.en, `${sentence.id} English`);
  assertCleanText(sentence.ko, `${sentence.id} Korean`);
  for (const variant of sentence.variants) {
    assertCleanText(variant.en, `${variant.id} English`);
    assertCleanText(variant.ko, `${variant.id} Korean`);
  }
  assertUnique(
    [sentence.en, ...sentence.variants.map((variant) => variant.en.toLowerCase())].map((text) =>
      text.toLowerCase(),
    ),
    `${sentence.id} English texts`,
  );
}

const learningIds = meetingMonthPlan
  .filter((day) => !day.review)
  .flatMap((day) => day.sentenceIds);
const reviewIds = meetingMonthPlan
  .filter((day) => day.review)
  .flatMap((day) => day.sentenceIds);
assert(learningIds.length === 100, "Days 1-25 must contain 100 learning assignments");
assert(new Set(learningIds).size === 100, "Days 1-25 must cover every original once");
assert(reviewIds.length === 100, "Days 26-30 must contain 100 review assignments");
assert(new Set(reviewIds).size === 100, "Days 26-30 must review every original once");

const coreIdSet = new Set(coreVerbs.map((verb) => verb.id));
const allPracticeCards = [
  ...practiceCards,
  ...meetingPracticeCards,
  ...workbookPracticeCards,
];
const conversationUsageCards = practiceCards.filter(
  (card) => card.kind === "conversation-usage",
);
assert(
  conversationUsageCards.length === 300,
  `Expected 300 conversation usage cards, found ${conversationUsageCards.length}`,
);
for (const card of conversationUsageCards) {
  assert(Boolean(card.meaning), `${card.id} is missing its speaking intent`);
}
assertUnique(allPracticeCards.map((card) => card.id), "Practice card IDs");
const answersByKorean = new Map();
for (const card of allPracticeCards) {
  assert(Boolean(card.answer && card.ko), `${card.id} is missing prompt content`);
  assert(Boolean(card.hint && card.meaning), `${card.id} is missing a clear speaking cue`);
  assert(!/[가-힣]/.test(card.answer), `${card.id} has Korean text mixed into its English answer`);
  assert(
    card.verbId == null || coreIdSet.has(card.verbId),
    `${card.id} references unknown core verb: ${card.verbId}`,
  );
  assert(
    card.verbId == null || answerUsesVerb(card.answer, card.verbId),
    `${card.id} is assigned to ${card.verbId} but its answer does not use that verb: ${card.answer}`,
  );

  const korean = card.ko.trim();
  const answers = answersByKorean.get(korean) ?? new Set();
  answers.add(card.answer.trim().toLowerCase());
  answersByKorean.set(korean, answers);
}
for (const [korean, answers] of answersByKorean) {
  assert(
    answers.size === 1,
    `Ambiguous Korean prompt has multiple answers: ${korean} -> ${[...answers].join(" / ")}`,
  );
}

console.log(
  JSON.stringify(
    {
      sources: 8,
      coreVerbs: coreVerbs.length,
      conversationUsages: coreVerbs.reduce((sum, verb) => sum + verb.usages.length, 0),
      sentenceFrames: sentenceFrames.length,
      scenarioPacks: scenarioPacks.length,
      workbookUnits: workbookUnits.length,
      workbookKoreanPrompts: workbookUnits.filter((unit) => Boolean(unit.ko)).length,
      workbookModelExamples: workbookUnits.reduce(
        (sum, unit) => sum + unit.examples.length,
        0,
      ),
      workbookDialogues: workbookUnits.length,
      workbookTips: workbookUnits.length,
      meetingOriginals: meetingSentences.length,
      meetingApplications: 200,
      meetingPlanDays: meetingMonthPlan.length,
      totalPracticeCards: allPracticeCards.length,
      clearSpeakingCues: allPracticeCards.filter(
        (card) => Boolean(card.hint && card.meaning),
      ).length,
      ambiguousKoreanPrompts: 0,
    },
    null,
    2,
  ),
);
