import { basicConversationWorkbookTranslations } from "./workbookTranslations/basicConversation.js";
import { basicVerbWorkbookTranslations } from "./workbookTranslations/basicVerb.js";
import { conversationWorkbookTranslations } from "./workbookTranslations/conversation.js";
import { phrasalWorkbookTranslations } from "./workbookTranslations/phrasal.js";

export const workbookSources = [
  {
    "id": "conversation",
    "type": "conversation",
    "title": "영어회화 100",
    "label": "CONVERSATION",
    "count": 100,
    "chapters": [
      {
        "id": "conversation-chapter-1",
        "first": 1,
        "last": 20,
        "ko": "취향·기대·제안",
        "en": "Preferences, Anticipation & Offers"
      },
      {
        "id": "conversation-chapter-2",
        "first": 21,
        "last": 40,
        "ko": "의견·일정·상황",
        "en": "Opinions, Schedules & Situations"
      },
      {
        "id": "conversation-chapter-3",
        "first": 41,
        "last": 60,
        "ko": "요청·감사·공감",
        "en": "Requests, Thanks & Empathy"
      },
      {
        "id": "conversation-chapter-4",
        "first": 61,
        "last": 80,
        "ko": "대화 흐름·뉘앙스",
        "en": "Conversation Flow & Nuance"
      },
      {
        "id": "conversation-chapter-5",
        "first": 81,
        "last": 100,
        "ko": "묘사·조건·완곡 표현",
        "en": "Describing, Conditions & Softening"
      }
    ]
  },
  {
    "id": "basic-conversation",
    "type": "basic-conversation",
    "title": "기초 영어회화 100",
    "label": "BASIC CONV",
    "count": 100,
    "chapters": [
      {
        "id": "basic-conversation-chapter-1",
        "first": 1,
        "last": 20,
        "ko": "기본 반응과 짧은 표현",
        "en": "Basic Reactions & Short Phrases"
      },
      {
        "id": "basic-conversation-chapter-2",
        "first": 21,
        "last": 40,
        "ko": "일상 묘사와 동사 표현",
        "en": "Everyday Descriptions & Verbs"
      },
      {
        "id": "basic-conversation-chapter-3",
        "first": 41,
        "last": 60,
        "ko": "동사·시제 활용",
        "en": "Verbs & Tenses in Action"
      },
      {
        "id": "basic-conversation-chapter-4",
        "first": 61,
        "last": 80,
        "ko": "제안·요청·완곡 표현",
        "en": "Suggestions, Requests & Softening"
      },
      {
        "id": "basic-conversation-chapter-5",
        "first": 81,
        "last": 100,
        "ko": "문장 패턴·구문",
        "en": "Sentence Patterns & Structures"
      }
    ]
  },
  {
    "id": "basic-verb",
    "type": "basic",
    "title": "기본 동사 100",
    "label": "BASIC VERB",
    "count": 100,
    "chapters": [
      {
        "id": "basic-verb-chapter-1",
        "first": 1,
        "last": 41,
        "ko": "가장 많이 쓰는 핵심 기본 동사",
        "en": "Core Everyday Verbs"
      },
      {
        "id": "basic-verb-chapter-2",
        "first": 42,
        "last": 62,
        "ko": "기본기를 다지는 필수 동사",
        "en": "Essential Building-Block Verbs"
      },
      {
        "id": "basic-verb-chapter-3",
        "first": 63,
        "last": 82,
        "ko": "회화·작문 빈출 동사",
        "en": "High-Frequency Verbs"
      },
      {
        "id": "basic-verb-chapter-4",
        "first": 83,
        "last": 92,
        "ko": "상황별 실전 동사",
        "en": "Practical Situational Verbs"
      },
      {
        "id": "basic-verb-chapter-5",
        "first": 93,
        "last": 100,
        "ko": "생활 속 표현 동사",
        "en": "Useful Expressive Verbs"
      }
    ]
  },
  {
    "id": "phrasal",
    "type": "phrasal",
    "title": "구동사 100",
    "label": "PHRASAL",
    "count": 100,
    "chapters": [
      {
        "id": "phrasal-chapter-1",
        "first": 1,
        "last": 25,
        "ko": "일상생활 구동사",
        "en": "Everyday Life"
      },
      {
        "id": "phrasal-chapter-2",
        "first": 26,
        "last": 50,
        "ko": "일·문제 해결 구동사",
        "en": "Getting Things Done"
      },
      {
        "id": "phrasal-chapter-3",
        "first": 51,
        "last": 75,
        "ko": "사람·관계·태도 구동사",
        "en": "People & Perception"
      },
      {
        "id": "phrasal-chapter-4",
        "first": 76,
        "last": 100,
        "ko": "행동·결과 구동사",
        "en": "Action & Outcomes"
      }
    ]
  }
];

const rawWorkbookUnits = [
  {
    "id": "conversation-001",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 1,
    "expression": "for",
    "usage": "취향에 맞는 것 표현하기",
    "heading": "for 취향에 맞는 것 표현하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "Black coffee is really for me — I've never liked sweet drinks.",
    "examples": [
      "Early mornings are definitely for me; I feel most productive before 8 a.m.",
      "A quiet beach vacation is really for us — we hate big crowds.",
      "This kind of fast-paced city life just isn't for everyone."
    ],
    "dialogue": {
      "a": "Did you enjoy the yoga class?",
      "b": "Not really. Low-impact exercise just isn't for me."
    },
    "tip": "for me는 나에게 맞다·어울린다는 뜻으로, 취향이나 적합성을 나타낼 때 씁니다.",
    "coreId": null
  },
  {
    "id": "conversation-002",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 2,
    "expression": "can't wait to",
    "usage": "기대감 표현하기",
    "heading": "can't wait to 기대감 표현하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "I can't wait to try that new ramen place downtown.",
    "examples": [
      "She can't wait to meet her college roommates for the very first time.",
      "We can't wait to take that road trip along the coast next month.",
      "I can't wait to finally sleep in on the long weekend."
    ],
    "dialogue": {
      "a": "The concert is only two days away!",
      "b": "I know — I can't wait to hear them play live."
    },
    "tip": "can't wait to는 설레고 기대되는 마음을 구어체로 자연스럽게 표현하는 표현입니다.",
    "coreId": null
  },
  {
    "id": "conversation-003",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 3,
    "expression": "do you mind ~ing",
    "usage": "정중하게 부탁하기",
    "heading": "do you mind ~ing 정중하게 부탁하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "Do you mind closing the window? It's getting a bit chilly in here.",
    "examples": [
      "Do you mind watching my bag for a moment while I grab a coffee?",
      "Do you mind repeating that? I didn't quite catch the last part.",
      "Do you mind moving your car a little? I need to get mine out."
    ],
    "dialogue": {
      "a": "Do you mind turning the music down a bit? I'm on a call.",
      "b": "Oh, of course! Sorry about that."
    },
    "tip": "Do you mind ~ing에 No, not at all로 답하면 괜찮다는 뜻이고, Yes, I do는 거절이므로 헷갈리지 않도록 주의하세요.",
    "coreId": "do"
  },
  {
    "id": "conversation-004",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 4,
    "expression": "super",
    "usage": "강조 부사로 강도 높이기",
    "heading": "super 강조 부사로 강도 높이기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "The new café near the station is super cozy.",
    "examples": [
      "That presentation you gave was super clear and easy to follow.",
      "I'm super excited about the hiking trip next weekend.",
      "She's super helpful whenever you have a question."
    ],
    "dialogue": {
      "a": "How was the team dinner last night?",
      "b": "It was super fun — everyone stayed until midnight."
    },
    "tip": "super는 very보다 더 구어체적이고 활기찬 느낌을 주므로, 공식 문서보다는 일상 대화에서 사용하세요.",
    "coreId": null
  },
  {
    "id": "conversation-005",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 5,
    "expression": "how do you feel about",
    "usage": "상대방의 의견 묻기",
    "heading": "how do you feel about 상대방의 의견 묻기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "How do you feel about taking a cooking class together this weekend?",
    "examples": [
      "How do you feel about working from home three days a week?",
      "How do you feel about the new parking regulations downtown?",
      "How do you feel about trying a different approach to this project?"
    ],
    "dialogue": {
      "a": "How do you feel about moving the meeting to Thursday morning?",
      "b": "That actually works better for me. Let's do it."
    },
    "tip": "How do you feel about는 상대방의 감정적 반응까지 함께 묻는 표현으로, What do you think about보다 더 부드럽습니다.",
    "coreId": "do"
  },
  {
    "id": "conversation-006",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 6,
    "expression": "there's nothing like",
    "usage": "최고의 경험이나 느낌 표현하기",
    "heading": "there's nothing like 최고의 경험이나 느낌 표현하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "There's nothing like a hot bowl of soup on a rainy afternoon.",
    "examples": [
      "There's nothing like a good night's sleep after a tough week.",
      "There's nothing like live music to lift your spirits on a bad day.",
      "There's nothing like homemade bread fresh out of the oven."
    ],
    "dialogue": {
      "a": "How was your camping trip?",
      "b": "Amazing. There's nothing like sleeping under the stars to clear your head."
    },
    "tip": "There's nothing like ~는 그 무엇과도 비교할 수 없는 특별한 경험을 강조할 때 쓰는 표현입니다.",
    "coreId": "like"
  },
  {
    "id": "conversation-007",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 7,
    "expression": "be up/down for",
    "usage": "제안에 동의하거나 거절하기",
    "heading": "be up/down for 제안에 동의하거나 거절하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "I'm totally up for trying that new Thai restaurant tonight.",
    "examples": [
      "Are you up for going for a bike ride after work?",
      "I'm not really down for a late-night movie — I have an early meeting.",
      "If everyone else is up for it, let's move the party to the rooftop."
    ],
    "dialogue": {
      "a": "We're thinking of grabbing brunch on Sunday. You in?",
      "b": "Sounds great — I'm totally up for that."
    },
    "tip": "up for는 어떤 제안에 기꺼이 응하겠다는 뜻이며, down for도 같은 의미로 쓰이지만 더 캐주얼한 어감입니다.",
    "coreId": "be"
  },
  {
    "id": "conversation-008",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 8,
    "expression": "feel + adjective",
    "usage": "신체 상태나 감정 묘사하기",
    "heading": "feel + adjective 신체 상태나 감정 묘사하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "I feel a bit dizzy — I think I skipped lunch again.",
    "examples": [
      "She feels stiff after sitting at her desk all day.",
      "I feel completely drained after that back-to-back meeting schedule.",
      "He feels much better after a long walk in the park."
    ],
    "dialogue": {
      "a": "You look a little pale. Are you okay?",
      "b": "I feel kind of nauseous. I might head home early."
    },
    "tip": "feel + 형용사는 감각이나 상태를 직접 묘사하는 패턴으로, feel badly가 아닌 feel bad처럼 형용사를 써야 합니다.",
    "coreId": "think"
  },
  {
    "id": "conversation-009",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 9,
    "expression": "would you like me to",
    "usage": "정중하게 도움 제안하기",
    "heading": "would you like me to 정중하게 도움 제안하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "Would you like me to send you the revised draft by end of day?",
    "examples": [
      "Would you like me to pick up anything from the store on my way?",
      "Would you like me to hold your spot in line while you make a call?",
      "Would you like me to introduce you to the project manager?"
    ],
    "dialogue": {
      "a": "I'm not sure how to get to the venue from here.",
      "b": "Would you like me to pull up the directions on my phone for you?"
    },
    "tip": "Would you like me to ~는 Do you want me to ~보다 공손한 제안 표현으로, 업무 상황에서도 자 주 씁니다.",
    "coreId": "like"
  },
  {
    "id": "conversation-010",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 10,
    "expression": "have in mind",
    "usage": "생각하고 있는 것 묻거나 말하기",
    "heading": "have in mind 생각하고 있는 것 묻거나 말하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "Do you have a specific venue in mind for the annual event?",
    "examples": [
      "I have a few places in mind for the anniversary dinner.",
      "Did you have a particular color in mind when you asked for a new sign?",
      "She already had someone in mind for the open position."
    ],
    "dialogue": {
      "a": "I'd like to redecorate this room.",
      "b": "Do you have a style in mind, or are you still exploring options?"
    },
    "tip": "have ~ in mind는 막연하지만 구체적인 무언가를 생각하고 있다는 뉘앙스를 전달합니다.",
    "coreId": "have"
  },
  {
    "id": "conversation-011",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 11,
    "expression": "thinking of ~ing",
    "usage": "생각이나 계획 공유하기",
    "heading": "thinking of ~ing 생각이나 계획 공유하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "I'm thinking of signing up for a pottery class this fall.",
    "examples": [
      "He's thinking of switching careers and going back to school.",
      "We're thinking of adopting a dog from the local shelter.",
      "Are you thinking of staying in the same apartment next year?"
    ],
    "dialogue": {
      "a": "Any plans for the long weekend?",
      "b": "I'm thinking of driving up to the mountains for a day hike."
    },
    "tip": "thinking of ~ing는 확정은 아니지만 진지하게 고려 중임을 표현할 때 적합합니다.",
    "coreId": null
  },
  {
    "id": "conversation-012",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 12,
    "expression": "I wish + past",
    "usage": "아쉬움이나 후회 표현하기",
    "heading": "I wish + past 아쉬움이나 후회 표현하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "I wish I had brought an umbrella — the sky looks threatening.",
    "examples": [
      "I wish I spoke another language; I'd love to travel without a translator.",
      "She wishes she had taken more photos during the trip.",
      "I wish the weekends were just a little longer."
    ],
    "dialogue": {
      "a": "Did you hear they're closing that old bookstore on Main Street?",
      "b": "I know. I wish I had gone there more often when I had the chance."
    },
    "tip": "I wish + 과거동사는 현재 사실과 반대인 소망을, I wish + 과거완료는 과거에 대한 아쉬움을 나타냅 니다.",
    "coreId": null
  },
  {
    "id": "conversation-013",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 13,
    "expression": "how does ~ sound",
    "usage": "계획이나 시간에 대한 의견 묻기",
    "heading": "how does ~ sound 계획이나 시간에 대한 의견 묻기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "How does Saturday afternoon sound for our study session?",
    "examples": [
      "How does a quick lunch at that deli around the corner sound?",
      "How does 3 o'clock on Friday sound for a follow-up call?",
      "How does a movie night at my place sound this weekend?"
    ],
    "dialogue": {
      "a": "I was thinking we could meet around 11 to go over the report.",
      "b": "How does 11:30 sound? I have a short call before that."
    },
    "tip": "How does ~ sound는 제안에 대한 상대방의 반응을 편안하게 묻는 표현으로, 공식·비공식 상황 모 두에 씁니다.",
    "coreId": null
  },
  {
    "id": "conversation-014",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 14,
    "expression": "there's something + adj",
    "usage": "막연하지만 특별한 느낌 표현하기",
    "heading": "there's something + adj 막연하지만 특별한 느낌 표현하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "There's something really comforting about sitting by a fireplace in winter.",
    "examples": [
      "There's something oddly satisfying about organizing your desk at the end of the day.",
      "There's something different about the way she speaks — very calm and measured.",
      "There's something magical about the first snow of the season."
    ],
    "dialogue": {
      "a": "Why do you always order the same dish here?",
      "b": "I can't explain it — there's something special about their spicy noodles."
    },
    "tip": "There's something + 형용사는 딱 꼬집어 말하기 어렵지만 그 무언가가 느껴진다는 뉘앙스를 줍니 다.",
    "coreId": null
  },
  {
    "id": "conversation-015",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 15,
    "expression": "be done with",
    "usage": "일이 끝났거나 끝날 것임을 말하기",
    "heading": "be done with 일이 끝났거나 끝날 것임을 말하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "I'll be done with the report by noon — give me an hour.",
    "examples": [
      "Are you done with the scissors? I need them for a second.",
      "Once I'm done with this chapter, I'll make us some tea.",
      "He was finally done with his thesis after six months of work."
    ],
    "dialogue": {
      "a": "Are you done with the printer? I need to use it.",
      "b": "Almost — I'm printing the last page right now."
    },
    "tip": "be done with ~는 특정 작업이 완료된 상태를 나타내며, finish보다 구어체에서 더 자연스럽게 씁니 다.",
    "coreId": "be"
  },
  {
    "id": "conversation-016",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 16,
    "expression": "look good on",
    "usage": "어울린다고 말하기",
    "heading": "look good on 어울린다고 말하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "That color really looks good on you — it matches your eyes perfectly.",
    "examples": [
      "Short hairstyles tend to look really good on her.",
      "That blazer looks good on you — did you get it recently?",
      "Darker shades look good on him in photos."
    ],
    "dialogue": {
      "a": "I'm not sure about this jacket. Is it too casual?",
      "b": "Not at all — it looks great on you. Keep it."
    },
    "tip": "look good on someone은 옷이나 스타일이 특정 사람에게 어울린다고 칭찬할 때 쓰는 표현입니다.",
    "coreId": "look"
  },
  {
    "id": "conversation-017",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 17,
    "expression": "work for",
    "usage": "일정이 맞는지 묻거나 말하기",
    "heading": "work for 일정이 맞는지 묻거나 말하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "Does Tuesday at two work for you?",
    "examples": [
      "The 4 o'clock slot works for me if it works for the team.",
      "Unfortunately, Thursday doesn't work for me — how about Friday?",
      "Let me know which time works for you and I'll block it off."
    ],
    "dialogue": {
      "a": "I'd like to schedule a quick call to review the contract.",
      "b": "Does Monday morning work for you? I'm free from 9 to 11."
    },
    "tip": "work for someone은 일정이나 계획이 상대방에게 편리한지 물을 때 쓰는 실용적인 표현입니다.",
    "coreId": "work"
  },
  {
    "id": "conversation-018",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 18,
    "expression": "speaking of which",
    "usage": "관련 주제로 자연스럽게 전환하기",
    "heading": "speaking of which 관련 주제로 자연스럽게 전환하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "I just got back from a great yoga class. Speaking of which, you should try the new studio on Grove Street.",
    "examples": [
      "I love cooking Italian food. Speaking of which, have you tried that new pasta place near the river?",
      "We need to hire someone for the marketing team. Speaking of which, did Sandra send in her application?",
      "I've been reading a lot lately. Speaking of which, do you have any book recommendations?"
    ],
    "dialogue": {
      "a": "The film festival is coming up next month.",
      "b": "Oh, speaking of which, I heard they're screening that documentary we wanted to see."
    },
    "tip": "Speaking of which는 방금 나온 주제와 연관된 이야기로 넘어갈 때 쓰는 자연스러운 연결 표현입니 다.",
    "coreId": null
  },
  {
    "id": "conversation-019",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 19,
    "expression": "take (time) off",
    "usage": "휴가나 쉬는 날 표현하기",
    "heading": "take (time) off 휴가나 쉬는 날 표현하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "I'm planning to take a few days off around the holidays.",
    "examples": [
      "She decided to take a week off to recharge after the big product launch.",
      "Can I take Monday off? I have a family thing I need to attend.",
      "He's been working nonstop — he really needs to take some time off."
    ],
    "dialogue": {
      "a": "You look exhausted. When did you last have a break?",
      "b": "Ages ago. I think I'll take a few days off next month."
    },
    "tip": "take time off는 직장에서 휴가를 낸다는 의미로, 병가나 개인 사유 모두에 쓸 수 있습니다.",
    "coreId": "take"
  },
  {
    "id": "conversation-020",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 20,
    "expression": "be busy ~ing",
    "usage": "무엇을 하느라 바쁘다고 표현하기",
    "heading": "be busy ~ing 무엇을 하느라 바쁘다고 표현하기",
    "chapterKo": "취향·기대·제안",
    "chapterEn": "Preferences, Anticipation & Offers",
    "model": "I've been busy preparing for the conference all week.",
    "examples": [
      "She's been busy setting up the new apartment since she moved in.",
      "We've been busy planning the annual fundraiser for the past month.",
      "He's been busy studying for his licensing exam — barely leaves the house."
    ],
    "dialogue": {
      "a": "I haven't seen you around much lately.",
      "b": "I know — I've been busy wrapping up a big project at work."
    },
    "tip": "be busy ~ing는 특정 활동으로 시간이 없을 만큼 바쁘다는 것을 자연스럽게 표현합니다.",
    "coreId": "be"
  },
  {
    "id": "conversation-021",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 21,
    "expression": "I don't see it that way",
    "usage": "부드럽게 반대 의사 표현하기",
    "heading": "I don't see it that way 부드럽게 반대 의사 표현하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "I don't see it that way — I think the situation is more nuanced than that.",
    "examples": [
      "I don't see it that way. From where I stand, both sides have valid points.",
      "With all due respect, I don't see it that way. The data tells a different story.",
      "I don't see it that way — cutting the budget now could actually hurt us later."
    ],
    "dialogue": {
      "a": "I think the new policy will solve all our scheduling problems.",
      "b": "I don't see it that way. It might fix one issue but create a few new ones."
    },
    "tip": "I don't see it that way는 You're wrong보다 훨씬 부드럽게 의견 차이를 표현하는 완곡한 표현입니 다.",
    "coreId": "see"
  },
  {
    "id": "conversation-022",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 22,
    "expression": "can barely afford",
    "usage": "재정적 어려움 표현하기",
    "heading": "can barely afford 재정적 어려움 표현하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "I can barely afford rent this month after the car repair bill.",
    "examples": [
      "With four kids, they can barely afford to go out for dinner anymore.",
      "She can barely afford her student loan payments on her current salary.",
      "I love that jacket, but I can barely afford groceries right now."
    ],
    "dialogue": {
      "a": "Have you seen that new electric bike everyone's talking about?",
      "b": "Yeah, but I can barely afford my bus pass — that thing is way out of my league."
    },
    "tip": "can barely afford는 겨우겨우 감당할 수 있거나 사실상 어렵다는 뉘앙스로, 재정 압박을 강조할 때 씁니다.",
    "coreId": null
  },
  {
    "id": "conversation-023",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 23,
    "expression": "out of my price range",
    "usage": "가격이 너무 비싸다고 표현하기",
    "heading": "out of my price range 가격이 너무 비싸다고 표현하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "That hotel looks amazing, but it's a bit out of my price range right now.",
    "examples": [
      "The apartment has everything I want, but it's out of my price range by a mile.",
      "Business class is out of my price range — I'll stick with economy.",
      "Most of the watches in that store are out of my price range, unfortunately."
    ],
    "dialogue": {
      "a": "What about that resort in the mountains? It's supposed to be incredible.",
      "b": "I checked the rates, and honestly, it's out of my price range for this trip."
    },
    "tip": "out of my price range는 단순히 비싸다는 것 외에도 내 예산 범위를 벗어났다는 뉘앙스를 전달합니 다.",
    "coreId": null
  },
  {
    "id": "conversation-024",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 24,
    "expression": "you get what you pay for",
    "usage": "가격과 품질의 관계에 대해 말하기",
    "heading": "you get what you pay for 가격과 품질의 관계에 대해 말하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "It broke after two weeks. Well, you get what you pay for.",
    "examples": [
      "That cheap blender died after a month — you really do get what you pay for.",
      "The budget hotel was loud and uncomfortable. You get what you pay for, I guess.",
      "I know it's pricier, but the quality is worth it. You get what you pay for."
    ],
    "dialogue": {
      "a": "I bought those discount sneakers online and the sole peeled off after a week.",
      "b": "Ouch. You get what you pay for, right?"
    },
    "tip": "You get what you pay for는 싼 것을 골랐다가 실망했을 때나 비싼 것의 가치를 정당화할 때 모두 씁니다.",
    "coreId": "get"
  },
  {
    "id": "conversation-025",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 25,
    "expression": "I'm glad (that)",
    "usage": "안도감이나 기쁨 표현하기",
    "heading": "I'm glad (that) 안도감이나 기쁨 표현하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "I'm glad that you made it home safely in that weather.",
    "examples": [
      "I'm glad we checked the weather forecast before heading out.",
      "She's glad that the misunderstanding was cleared up so quickly.",
      "I'm glad you told me — I had no idea the deadline moved up."
    ],
    "dialogue": {
      "a": "The presentation went really well. The client loved it.",
      "b": "I'm so glad to hear that. You worked really hard on it."
    },
    "tip": "I'm glad (that) ~는 결과에 대한 안도와 기쁨을 함께 표현하며, 격식과 비격식 상황 모두에서 자연스 럽습니다.",
    "coreId": null
  },
  {
    "id": "conversation-026",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 26,
    "expression": "feel free to",
    "usage": "부담 없이 하도록 권유하기",
    "heading": "feel free to 부담 없이 하도록 권유하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "Feel free to reach out if you have any questions after the demo.",
    "examples": [
      "Feel free to grab a snack from the table — there's plenty for everyone.",
      "Feel free to drop by my office anytime this week.",
      "Feel free to add your comments to the shared document whenever you're ready."
    ],
    "dialogue": {
      "a": "I don't want to bother you if you're busy.",
      "b": "Not at all — feel free to knock on my door whenever you need help."
    },
    "tip": "Feel free to ~는 상대가 편안하게 행동할 수 있도록 허락하거나 권유하는 친절한 표현입니다.",
    "coreId": "have"
  },
  {
    "id": "conversation-027",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 27,
    "expression": "at this hour",
    "usage": "특정 시간대를 강조하며 말하기",
    "heading": "at this hour 특정 시간대를 강조하며 말하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "Who sends work emails at this hour? It's almost midnight.",
    "examples": [
      "I can't believe traffic is still this bad at this hour.",
      "What are you doing at the office at this hour? Go home!",
      "They're still serving food at this hour? That's great news."
    ],
    "dialogue": {
      "a": "There's already a line outside the bakery.",
      "b": "Really? At this hour? It's not even 7 a.m.!"
    },
    "tip": "at this hour는 특정 시간이 이른지 늦은지를 강조하며 놀람이나 의아함을 표현할 때 씁니다.",
    "coreId": "work"
  },
  {
    "id": "conversation-028",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 28,
    "expression": "grab",
    "usage": "가볍게 먹거나 가져가는 것 표현하기",
    "heading": "grab 가볍게 먹거나 가져가는 것 표현하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "Let's grab a coffee before the meeting starts.",
    "examples": [
      "I need to grab a quick bite — I haven't eaten since breakfast.",
      "Can you grab a couple of chairs from the storage room?",
      "We grabbed tacos from that food truck and ate in the park."
    ],
    "dialogue": {
      "a": "Are you heading out for lunch?",
      "b": "Yeah, I'm going to grab a sandwich at the deli down the street."
    },
    "tip": "grab은 음식을 먹거나 물건을 가져올 때 빠르고 가볍게 한다는 느낌을 주며, get보다 더 캐주얼합니 다.",
    "coreId": "let"
  },
  {
    "id": "conversation-029",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 29,
    "expression": "get used to",
    "usage": "적응하는 과정 표현하기",
    "heading": "get used to 적응하는 과정 표현하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "It took me a while, but I'm finally getting used to the early commute.",
    "examples": [
      "She's getting used to cooking for herself after years of eating out.",
      "It's hard to get used to a new keyboard layout at first.",
      "I had to get used to the constant noise when I moved to the city."
    ],
    "dialogue": {
      "a": "How are you adjusting to the new office setup?",
      "b": "It's okay. I'm still getting used to the open-plan layout, but it's getting better."
    },
    "tip": "get used to는 처음에는 낯설지만 점차 익숙해지는 과정을 나타내며, 뒤에 명사 또는 동명사가 옵니 다.",
    "coreId": "get"
  },
  {
    "id": "conversation-030",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 30,
    "expression": "not ~ until",
    "usage": "특정 시점까지 기다려야 함을 표현하기",
    "heading": "not ~ until 특정 시점까지 기다려야 함을 표현하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "The package isn't expected to arrive until Thursday.",
    "examples": [
      "I didn't realize how tired I was until I sat down on the couch.",
      "The café doesn't open until 9, so we have some time to kill.",
      "She won't be available until after the training session ends."
    ],
    "dialogue": {
      "a": "Is the doctor ready to see me?",
      "b": "Not until 2:30, I'm afraid. Can you wait about fifteen minutes?"
    },
    "tip": "not ~ until은 그 시점이 되어야 비로소 일이 일어난다는 것을 강조하며, 기다림이나 제한을 표현합니 다.",
    "coreId": null
  },
  {
    "id": "conversation-031",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 31,
    "expression": "think of A as B A를 B로",
    "usage": "여기거나 비유하기",
    "heading": "think of A as B A를 B로 여기거나 비유하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "I think of regular exercise as an investment in my future health.",
    "examples": [
      "She thinks of her mentor as a second parent — someone she can always turn to.",
      "Try thinking of the grammar rules as helpful signposts, not prison walls.",
      "He thinks of his home office as a sanctuary, not just a workspace."
    ],
    "dialogue": {
      "a": "Why do you spend so much time on journaling?",
      "b": "I think of it as a mental reset button — it clears my head every single day."
    },
    "tip": "think of A as B는 A를 B의 개념으로 이해하거나 비유적으로 표현할 때 쓰는 유용한 패턴입니다.",
    "coreId": "think"
  },
  {
    "id": "conversation-032",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 32,
    "expression": "that explains why",
    "usage": "이유를 깨달았을 때 표현하기",
    "heading": "that explains why 이유를 깨달았을 때 표현하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "Oh, that explains why she didn't show up to the meeting this morning.",
    "examples": [
      "He's been training for a triathlon — that explains why he's at the gym every day.",
      "The server was down all morning. That explains why none of our emails went through.",
      "She studied abroad for two years. That explains why her English sounds so natural."
    ],
    "dialogue": {
      "a": "Did you know the road out front is closed for construction?",
      "b": "That explains why it took me forty minutes to get here today!"
    },
    "tip": "That explains why ~는 이상하게 느꼈던 것의 이유를 갑자기 알았을 때 쓰는 자연스러운 반응입니 다.",
    "coreId": null
  },
  {
    "id": "conversation-033",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 33,
    "expression": "just wanted to",
    "usage": "연락 목적을 부드럽게 말하기",
    "heading": "just wanted to 연락 목적을 부드럽게 말하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "Hey, I just wanted to let you know the schedule changed.",
    "examples": [
      "I just wanted to check in and see how you're settling in.",
      "I just wanted to say thank you for all your help last week.",
      "I just wanted to make sure you got my previous message."
    ],
    "dialogue": {
      "a": "I just wanted to give you a heads-up — the client might be a few minutes late.",
      "b": "Good to know. Thanks for the update."
    },
    "tip": "I just wanted to ~는 연락의 이유를 부드럽고 비공식적으로 소개할 때 쓰며, I'm calling because보 다 더 친근하게 들립니다.",
    "coreId": "let"
  },
  {
    "id": "conversation-034",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 34,
    "expression": "look forward to ~ing",
    "usage": "기대감을 격식 있게 표현하기",
    "heading": "look forward to ~ing 기대감을 격식 있게 표현하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "We look forward to hearing from you at your earliest convenience.",
    "examples": [
      "I look forward to meeting the rest of the team at the onboarding event.",
      "She's looking forward to starting her new position next Monday.",
      "We look forward to collaborating with you on future projects."
    ],
    "dialogue": {
      "a": "Thank you for taking the time to meet with us today.",
      "b": "My pleasure. I look forward to continuing this conversation next week."
    },
    "tip": "look forward to ~ing는 can't wait to보다 격식이 높으며, 이메일이나 비즈니스 대화에서 자주 씁니 다.",
    "coreId": "look"
  },
  {
    "id": "conversation-035",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 35,
    "expression": "what is it like ~ing",
    "usage": "특정 경험이 어떤지 묻기",
    "heading": "what is it like ~ing 특정 경험이 어떤지 묻기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "What is it like working from home every single day?",
    "examples": [
      "What is it like living in a city where you don't speak the language fluently?",
      "What is it like commuting for two hours each way every day?",
      "What is it like being the only person in your field in a small town?"
    ],
    "dialogue": {
      "a": "What is it like running your own business after years in a corporate job?",
      "b": "Honestly? It's stressful but incredibly rewarding at the same time."
    },
    "tip": "What is it like ~ing는 직접 경험하지 못한 상황에 대해 상대방의 느낌을 묻는 표현으로, 대화를 깊게 이어갈 때 유용합니다.",
    "coreId": "like"
  },
  {
    "id": "conversation-036",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 36,
    "expression": "get + object + past participle",
    "usage": "누군가에게 무언가를 처리하게 하기",
    "heading": "get + object + past participle 누군가에게 무언가를 처리하게 하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "I need to get my laptop screen fixed before the weekend.",
    "examples": [
      "She got her résumé reviewed by a career counselor before applying.",
      "We need to get the air conditioner serviced before summer hits.",
      "He finally got his car washed after three weeks of putting it off."
    ],
    "dialogue": {
      "a": "Your jacket has a small tear on the sleeve.",
      "b": "I know — I've been meaning to get it repaired. I'll drop it off this week."
    },
    "tip": "get + 목적어 + 과거분사는 직접 하는 것이 아니라 다른 사람에게 시키거나 서비스를 받는 것을 나타 냅니다.",
    "coreId": "get"
  },
  {
    "id": "conversation-037",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 37,
    "expression": "what are you up to",
    "usage": "상대방의 계획이나 하는 일 묻기",
    "heading": "what are you up to 상대방의 계획이나 하는 일 묻기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "What are you up to this weekend? Any fun plans?",
    "examples": [
      "What are you up to later? We're going to the jazz festival if you're free.",
      "Hey, what are you up to? You look like you're in deep thought.",
      "What are you up to these days? I feel like I haven't seen you in forever."
    ],
    "dialogue": {
      "a": "What are you up to after work today?",
      "b": "I'm thinking of heading to the gym and then cooking dinner. Why?"
    },
    "tip": "What are you up to는 계획을 물을 때뿐 아니라 지금 뭘 하고 있는지 가볍게 물을 때도 쓰는 다용도 표현입니다.",
    "coreId": null
  },
  {
    "id": "conversation-038",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 38,
    "expression": "just in time",
    "usage": "딱 알맞은 타이밍을 표현하기",
    "heading": "just in time 딱 알맞은 타이밍을 표현하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "We got to the theater just in time — the previews were just starting.",
    "examples": [
      "She caught the last bus just in time before the rain started pouring.",
      "The repair team fixed the elevator just in time for the big event.",
      "I submitted the form just in time — the deadline was at midnight."
    ],
    "dialogue": {
      "a": "I was worried we'd miss the boarding announcement.",
      "b": "We made it just in time — they were about to close the gate."
    },
    "tip": "just in time은 아슬아슬하게 제때 도착하거나 완료했음을 강조하며, right on time보다 긴박한 느낌 이 있습니다.",
    "coreId": null
  },
  {
    "id": "conversation-039",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 39,
    "expression": "for here or to go",
    "usage": "매장에서 먹을지 포장할지 묻기",
    "heading": "for here or to go 매장에서 먹을지 포장할지 묻기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "Will that be for here or to go?",
    "examples": [
      "I usually get my morning coffee to go — I drink it on the train.",
      "Since it stopped raining, let's make it for here — I'd like to sit down.",
      "The barista asked for here or to go, and I chose to eat in for once."
    ],
    "dialogue": {
      "a": "I'll have the turkey sandwich and a large iced tea, please.",
      "b": "Sure! For here or to go?"
    },
    "tip": "For here or to go는 카페나 패스트푸드점에서 흔히 듣는 표현으로, to go 대신 takeout이라고도 합 니다.",
    "coreId": "go"
  },
  {
    "id": "conversation-040",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 40,
    "expression": "how about we ~ how about으로",
    "usage": "제안하기",
    "heading": "how about we ~ how about으로 제안하기",
    "chapterKo": "의견·일정·상황",
    "chapterEn": "Opinions, Schedules & Situations",
    "model": "How about we meet halfway and grab lunch near the station?",
    "examples": [
      "How about we take a break and come back to this with fresh eyes?",
      "How about we split the cost and both go to the concert?",
      "How about we try that new Vietnamese place for dinner Friday night?"
    ],
    "dialogue": {
      "a": "I can't decide whether to eat in or order delivery.",
      "b": "How about we just walk over to that noodle place? It's only five minutes away."
    },
    "tip": "How about we ~는 Why don't we ~와 비슷하지만 더 가볍고 편안한 어감으로 제안할 때 씁니다.",
    "coreId": null
  },
  {
    "id": "conversation-041",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 41,
    "expression": "get someone something",
    "usage": "누군가를 위해 무언가를 가져다 주기",
    "heading": "get someone something 누군가를 위해 무언가를 가져다 주기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "Can I get you something while I'm up? Coffee or water?",
    "examples": [
      "Let me get you a menu — you've been waiting a while.",
      "He got his coworkers pastries from the bakery near his apartment.",
      "Can I get you anything from the kitchen before the meeting starts?"
    ],
    "dialogue": {
      "a": "I'm heading to the vending machine. Can I get you anything?",
      "b": "Oh, yes please — I'd love a bottle of water if they have it."
    },
    "tip": "get someone something은 상대를 위해 직접 가져다 주는 친절한 행동을 표현하는 자연스러운 구 문입니다.",
    "coreId": "get"
  },
  {
    "id": "conversation-042",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 42,
    "expression": "I'm good",
    "usage": "정중하게 거절하거나 괜찮다고 말하기",
    "heading": "I'm good 정중하게 거절하거나 괜찮다고 말하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "Thanks for offering, but I'm good — I just had lunch.",
    "examples": [
      "Would you like a refill on your coffee? No thanks, I'm good.",
      "I'm good for now, but I'll let you know if I need a hand later.",
      "You look like you need help with those bags. I'm good, but thank you!"
    ],
    "dialogue": {
      "a": "Would you like some more salad?",
      "b": "I'm good, thanks — it was delicious, but I'm pretty full."
    },
    "tip": "I'm good은 구어체에서 No, thank you 대신 자연스럽게 쓰이는 완곡한 거절 표현입니다.",
    "coreId": null
  },
  {
    "id": "conversation-043",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 43,
    "expression": "figure out",
    "usage": "방법이나 해답을 찾아내기",
    "heading": "figure out 방법이나 해답을 찾아내기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "I'm still trying to figure out the best way to organize all these files.",
    "examples": [
      "Did you ever figure out what caused that weird noise in the engine?",
      "She's trying to figure out how to balance work and studying at the same time.",
      "We need to figure out a solution before the client calls back."
    ],
    "dialogue": {
      "a": "The printer keeps jamming and I have no idea why.",
      "b": "Let me take a look — I might be able to figure out what's going on."
    },
    "tip": "figure out은 문제 해결, 이해, 결정 등 다양한 상황에서 쓰이는 구동사로 work out과 비슷한 의미입 니다.",
    "coreId": null
  },
  {
    "id": "conversation-044",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 44,
    "expression": "could use",
    "usage": "필요나 원함을 완곡하게 표현하기",
    "heading": "could use 필요나 원함을 완곡하게 표현하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "I could use a second pair of eyes on this — would you mind taking a look?",
    "examples": [
      "This kitchen could use a good cleaning before the guests arrive.",
      "You look tired — you could use a solid eight hours of sleep.",
      "I could use some advice on how to handle this situation professionally."
    ],
    "dialogue": {
      "a": "You seem stressed. Everything okay?",
      "b": "I could really use a break. This week has been relentless."
    },
    "tip": "could use는 직접적인 요청보다 부드럽게 필요를 표현하며, 상대방이 자연스럽게 도움을 제공하도록 유도합니다.",
    "coreId": "look"
  },
  {
    "id": "conversation-045",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 45,
    "expression": "it's nice of you to",
    "usage": "친절한 행동에 감사 표현하기",
    "heading": "it's nice of you to 친절한 행동에 감사 표현하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "It's really nice of you to pick me up from the airport.",
    "examples": [
      "It's so nice of you to remember my birthday — you didn't have to do that.",
      "It was nice of him to offer his seat to the elderly woman on the train.",
      "It's really nice of you to help carry those boxes — I appreciate it."
    ],
    "dialogue": {
      "a": "I made some extra pasta and figured you might want some.",
      "b": "Oh wow, that's so nice of you — I haven't cooked all week."
    },
    "tip": "It's nice of you to ~는 상대방의 친절한 행동을 직접적으로 칭찬하면서 감사를 표현하는 따뜻한 표 현입니다.",
    "coreId": null
  },
  {
    "id": "conversation-046",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 46,
    "expression": "can't complain",
    "usage": "불만은 없다는 완곡한 긍정 표현하기",
    "heading": "can't complain 불만은 없다는 완곡한 긍정 표현하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "The pay isn't great, but the work is interesting — I can't complain.",
    "examples": [
      "The apartment's a bit small, but the location is perfect — can't complain.",
      "Asked how the new job was going, she smiled and said she couldn't complain.",
      "The weather's been warm and sunny all week. I really can't complain."
    ],
    "dialogue": {
      "a": "How's the new neighborhood treating you?",
      "b": "Honestly? Can't complain. The neighbors are friendly and there are great restaurants nearby."
    },
    "tip": "Can't complain은 완벽하지는 않지만 불평할 이유도 없다는 소박한 만족감을 표현하는 캐주얼한 표 현입니다.",
    "coreId": "work"
  },
  {
    "id": "conversation-047",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 47,
    "expression": "owe",
    "usage": "돈이나 호의를 빚지고 있다고 표현하기",
    "heading": "owe 돈이나 호의를 빚지고 있다고 표현하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "You got dinner last time, so I owe you one.",
    "examples": [
      "Thanks for covering my shift — I owe you big time.",
      "She still owes him twenty dollars from the concert last month.",
      "I owe you an apology. I shouldn't have reacted that way."
    ],
    "dialogue": {
      "a": "I talked to the manager and got your refund approved.",
      "b": "Seriously? That's amazing. I owe you one — thank you so much."
    },
    "tip": "owe someone은 금전적 빚뿐 아니라 상대 덕분에 도움을 받았다는 사회적 빚을 표현할 때도 씁니 다.",
    "coreId": null
  },
  {
    "id": "conversation-048",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 48,
    "expression": "I feel the same way",
    "usage": "상대방의 감정이나 의견에 동의하기",
    "heading": "I feel the same way 상대방의 감정이나 의견에 동의하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "I feel the same way — this neighborhood has really changed over the years.",
    "examples": [
      "I feel the same way about long commutes — they're exhausting.",
      "You said it feels like the team has lost momentum. I feel the same way.",
      "I feel the same way about that movie — beautiful visuals but a weak plot."
    ],
    "dialogue": {
      "a": "Sometimes I think we take the little things for granted too easily.",
      "b": "I feel exactly the same way. It's something I've been thinking about a lot lately."
    },
    "tip": "I feel the same way는 상대방의 감정을 정확히 공유한다는 공감의 표현으로, I agree보다 감정적으 로 더 따뜻한 느낌을 줍니다.",
    "coreId": null
  },
  {
    "id": "conversation-049",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 49,
    "expression": "hassle",
    "usage": "번거롭거나 불편한 상황 표현하기",
    "heading": "hassle 번거롭거나 불편한 상황 표현하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "Renewing your license online is easy — no hassle at all.",
    "examples": [
      "Moving to a new apartment is always such a hassle, but it's worth it.",
      "I don't want to be a hassle — I can wait until you're free.",
      "Dealing with the returns process at that store is such a hassle."
    ],
    "dialogue": {
      "a": "Do you want me to drive you to the station?",
      "b": "I don't want to hassle you — I'll just take the bus."
    },
    "tip": "hassle은 명사(번거로움)로도, 동사(귀찮게 하다)로도 쓸 수 있는 유용한 단어입니다.",
    "coreId": null
  },
  {
    "id": "conversation-050",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 50,
    "expression": "how things work",
    "usage": "관행이나 운영 방식에 대해 말하기",
    "heading": "how things work 관행이나 운영 방식에 대해 말하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "It took me a while to understand how things work around here.",
    "examples": [
      "Let me walk you through how things work in our onboarding process.",
      "It's a small company, so how things work here is pretty informal.",
      "If you're new to the neighborhood, you'll quickly learn how things work at the farmers' market."
    ],
    "dialogue": {
      "a": "I'm still a bit confused about the approval process.",
      "b": "Don't worry — I'll explain how things work here. It's pretty straightforward once you get the hang of it."
    },
    "tip": "how things work는 규칙이나 절차보다 관행이나 문화적 흐름을 설명할 때 더 자연스럽습니다.",
    "coreId": "work"
  },
  {
    "id": "conversation-051",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 51,
    "expression": "get better at",
    "usage": "향상되고 싶다는 의지 표현하기",
    "heading": "get better at 향상되고 싶다는 의지 표현하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "I want to get better at managing my time — I waste so much of it.",
    "examples": [
      "She's been practicing every day to get better at playing the guitar.",
      "The only way to get better at public speaking is to do it more often.",
      "He signed up for a course to get better at data analysis."
    ],
    "dialogue": {
      "a": "How's the swimming going?",
      "b": "Slowly, but I'm getting better at breathing technique. That's been the hardest part."
    },
    "tip": "get better at는 점진적인 향상을 나타내며, 뒤에 명사나 동명사가 모두 올 수 있습니다.",
    "coreId": "get"
  },
  {
    "id": "conversation-052",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 52,
    "expression": "find the time to",
    "usage": "시간 부족을 표현하기",
    "heading": "find the time to 시간 부족을 표현하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "I really need to find the time to clean out the garage.",
    "examples": [
      "She can barely find the time to eat lunch on her busiest days.",
      "I've been meaning to call my aunt, but I can't seem to find the time.",
      "Do you ever find the time to read for pleasure, or are you always too busy?"
    ],
    "dialogue": {
      "a": "Have you been to that new gallery yet?",
      "b": "Not yet — I keep meaning to go, but I just can't find the time during the week."
    },
    "tip": "find the time to는 하고 싶지만 시간이 없어서 못 하고 있다는 뉘앙스를 전달하는 자연스러운 표현 입니다.",
    "coreId": "need"
  },
  {
    "id": "conversation-053",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 53,
    "expression": "for (various)",
    "usage": "다양한 의미의 for 활용하기",
    "heading": "for (various) 다양한 의미의 for 활용하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "This blender is perfect for making smoothies in the morning.",
    "examples": [
      "This area is known for its excellent street food and vibrant night markets.",
      "I've been waiting for this moment for as long as I can remember.",
      "She bought flowers for her mom just to say thank you."
    ],
    "dialogue": {
      "a": "What's that big pot on the stove for?",
      "b": "It's for making soup — I'm cooking dinner for the whole family tonight."
    },
    "tip": "for는 목적, 이유, 기간, 수혜자 등 매우 다양하게 쓰이므로 문맥에 맞게 자연스럽게 활용하는 연습이 필요합니다.",
    "coreId": null
  },
  {
    "id": "conversation-054",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 54,
    "expression": "over (a meal)",
    "usage": "식사나 음료를 함께하며 대화하기",
    "heading": "over (a meal) 식사나 음료를 함께하며 대화하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "We'll go over the details over coffee tomorrow morning.",
    "examples": [
      "They settled the disagreement over dinner at a quiet Italian restaurant.",
      "Let's discuss the project proposal over lunch — my treat.",
      "We reconnected over drinks and talked for hours."
    ],
    "dialogue": {
      "a": "When's a good time to catch up on the quarterly results?",
      "b": "How about over lunch on Thursday? It'll be a relaxed way to go through everything."
    },
    "tip": "over + 식사·음료는 그 자리에서 식사를 하면서 동시에 대화나 업무를 한다는 뉘앙스를 자연스럽게 전달합니다.",
    "coreId": "go"
  },
  {
    "id": "conversation-055",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 55,
    "expression": "swing by",
    "usage": "잠깐 들르는 것 표현하기",
    "heading": "swing by 잠깐 들르는 것 표현하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "I'll swing by the office to drop off the documents.",
    "examples": [
      "Can you swing by the dry cleaner's and pick up my suit on your way?",
      "I swung by her desk earlier, but she wasn't there.",
      "Feel free to swing by the café if you're ever in the neighborhood."
    ],
    "dialogue": {
      "a": "Do you need anything from the grocery store?",
      "b": "If you're going, could you swing by and grab some milk? We're almost out."
    },
    "tip": "swing by는 잠깐 어딘가에 들른다는 의미로, stop by와 매우 비슷하지만 더 캐주얼한 어감입니다.",
    "coreId": null
  },
  {
    "id": "conversation-056",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 56,
    "expression": "I already have plans",
    "usage": "선약이 있어서 거절하기",
    "heading": "I already have plans 선약이 있어서 거절하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "Sorry, I already have plans that evening — maybe next time?",
    "examples": [
      "I'd love to join, but I already have plans for the long weekend.",
      "She already has plans with her family on Sunday, so she can't make it.",
      "I already have plans to see an old friend — can we reschedule?"
    ],
    "dialogue": {
      "a": "We're going bowling on Friday. Want to come?",
      "b": "I wish I could, but I already have plans. Maybe next Friday?"
    },
    "tip": "I already have plans는 구체적인 이유를 밝히지 않고도 정중하게 거절할 수 있는 유용한 표현입니 다.",
    "coreId": "have"
  },
  {
    "id": "conversation-057",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 57,
    "expression": "money is tight",
    "usage": "돈이 빠듯하다고 말하기",
    "heading": "money is tight 돈이 빠듯하다고 말하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "Money is a bit tight right now, so we're cooking at home more.",
    "examples": [
      "Money's been tight since he changed jobs, so they're cutting back on extras.",
      "I love concerts, but money's tight and the tickets are expensive.",
      "Let's keep things simple for the holidays — money is tight for a lot of us."
    ],
    "dialogue": {
      "a": "Are you going on that ski trip with everyone in January?",
      "b": "Probably not — money is tight after the holidays. I'll join next year."
    },
    "tip": "money is tight는 직접 가난하다고 말하지 않고 재정 상황이 어렵다고 완곡하게 표현하는 실용적인 표현입니다.",
    "coreId": null
  },
  {
    "id": "conversation-058",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 58,
    "expression": "the hours",
    "usage": "영업시간이나 근무시간 묻기",
    "heading": "the hours 영업시간이나 근무시간 묻기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "What are the hours for the community pool on weekends?",
    "examples": [
      "The hours here are flexible — most people arrive between 8 and 10.",
      "Can you check the hours for that pharmacy? I need to pick something up.",
      "The long hours are honestly the hardest part of the job."
    ],
    "dialogue": {
      "a": "Is the post office open right now?",
      "b": "I'm not sure about the hours on Saturdays. Let me look it up quickly."
    },
    "tip": "the hours는 복수형으로 영업시간이나 근무 시간 전체를 가리키며, opening hours와 유사하게 씁니 다.",
    "coreId": null
  },
  {
    "id": "conversation-059",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 59,
    "expression": "handle",
    "usage": "상황을 감당하거나 처리하기",
    "heading": "handle 상황을 감당하거나 처리하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "Do you think you can handle the client presentation on your own?",
    "examples": [
      "She handles customer complaints so professionally — nothing flusters her.",
      "I can handle the logistics if you can take care of the communications.",
      "Some days the workload is hard to handle without extra support."
    ],
    "dialogue": {
      "a": "There are three issues coming in at once — I'm a bit overwhelmed.",
      "b": "Don't worry. I'll handle two of them. You focus on the most urgent one."
    },
    "tip": "handle은 어려운 상황이나 일을 처리하거나 감당한다는 의미로, deal with나 manage보다 자신감 있는 어감을 줍니다.",
    "coreId": "do"
  },
  {
    "id": "conversation-060",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 60,
    "expression": "calls for",
    "usage": "상황이 무언가를 요구한다고 표현하기",
    "heading": "calls for 상황이 무언가를 요구한다고 표현하기",
    "chapterKo": "요청·감사·공감",
    "chapterEn": "Requests, Thanks & Empathy",
    "model": "A cold evening like this really calls for a bowl of warm soup.",
    "examples": [
      "This kind of mistake calls for a direct apology, not just an email.",
      "Getting a promotion calls for a celebration — let's go out tonight!",
      "The complexity of this project calls for more than one person to lead it."
    ],
    "dialogue": {
      "a": "We've been working all morning with no break.",
      "b": "Agreed — this definitely calls for at least a fifteen-minute coffee break."
    },
    "tip": "calls for는 상황이 특정 반응이나 행동을 필요로 한다는 뜻으로, requires나 warrants와 비슷하지만 더 자연스럽게 씁니다.",
    "coreId": "like"
  },
  {
    "id": "conversation-061",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 61,
    "expression": "didn't catch that",
    "usage": "못 들었다고 정중하게 말하기",
    "heading": "didn't catch that 못 들었다고 정중하게 말하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "Sorry, I didn't catch that last part — could you repeat it?",
    "examples": [
      "I didn't catch the name of the street — could you say it one more time?",
      "You were talking pretty fast and I didn't catch what time we were meeting.",
      "Excuse me, I didn't catch that — the music is really loud in here."
    ],
    "dialogue": {
      "a": "The meeting got pushed to Thursday at eleven.",
      "b": "Sorry, I didn't catch that — did you say Thursday or Tuesday?"
    },
    "tip": "I didn't catch that는 I didn't hear you보다 부드럽고 공손하게 다시 말해 달라고 요청하는 표현입 니다.",
    "coreId": null
  },
  {
    "id": "conversation-062",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 62,
    "expression": "no wonder",
    "usage": "이유를 근거로 당연한 결과 말하기",
    "heading": "no wonder 이유를 근거로 당연한 결과 말하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "She stayed up until 2 a.m. studying. No wonder she's exhausted.",
    "examples": [
      "He hasn't eaten all day. No wonder he looks pale.",
      "That restaurant has a three-Michelin-star rating. No wonder the waitlist is six months long.",
      "The office is on the top floor with no elevator. No wonder no one goes up there."
    ],
    "dialogue": {
      "a": "The line here is always around the block.",
      "b": "No wonder — their croissants are honestly the best I've ever had."
    },
    "tip": "No wonder ~는 그러니까 ~하는 것도 당연하지라는 자연스러운 인과 표현으로 문장 앞이나 뒤에 쓸 수 있습니다.",
    "coreId": null
  },
  {
    "id": "conversation-063",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 63,
    "expression": "can't think of",
    "usage": "기억이 안 날 때 표현하기",
    "heading": "can't think of 기억이 안 날 때 표현하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "I can't think of his name right now, but I know he's on the second floor.",
    "examples": [
      "I can't think of a better way to spend a Sunday afternoon than this.",
      "She couldn't think of the right word in the moment, but she kept going.",
      "I can't think of any reason why that plan wouldn't work."
    ],
    "dialogue": {
      "a": "Who recommended that Italian place near the harbor?",
      "b": "Hmm, I can't think of her name right now — someone from the marketing team."
    },
    "tip": "can't think of는 일시적으로 기억이 나지 않을 때나 예시를 들기 어려울 때 자연스럽게 쓸 수 있는 표 현입니다.",
    "coreId": "think"
  },
  {
    "id": "conversation-064",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 64,
    "expression": "by the way",
    "usage": "대화 중에 부가적인 주제 언급하기",
    "heading": "by the way 대화 중에 부가적인 주제 언급하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "By the way, did you hear that the office is getting a new printer?",
    "examples": [
      "By the way, I left the report on your desk. Just let me know if you have questions.",
      "I'll email you the slides. By the way, great job on the presentation today.",
      "By the way, they're offering free coffee until noon at that new place on Oak Street."
    ],
    "dialogue": {
      "a": "Okay, I think we've covered everything for the project.",
      "b": "Great. Oh, by the way — we need to update the client's contact info in the system."
    },
    "tip": "By the way는 주제를 갑자기 바꾸는 것이 아니라 현재 대화에 가볍게 추가할 때 쓰는 자연스러운 연 결어입니다.",
    "coreId": null
  },
  {
    "id": "conversation-065",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 65,
    "expression": "be aware of",
    "usage": "무언가를 알고 인식하고 있다고 말하기",
    "heading": "be aware of 무언가를 알고 인식하고 있다고 말하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "Please be aware of the construction on the third floor this week.",
    "examples": [
      "Are you aware of the new policy changes taking effect next month?",
      "She's well aware of the risks but decided to go ahead with the plan.",
      "Be aware of your surroundings when you're walking alone late at night."
    ],
    "dialogue": {
      "a": "Did anyone mention there's a fire drill scheduled for tomorrow morning?",
      "b": "Yes — I made sure everyone on the team is aware of it."
    },
    "tip": "be aware of는 단순히 알고 있다는 것을 넘어 의식적으로 주의하고 있다는 뉘앙스를 전달합니다.",
    "coreId": "be"
  },
  {
    "id": "conversation-066",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 66,
    "expression": "I'll let you go",
    "usage": "전화 통화를 정중하게 마무리하기",
    "heading": "I'll let you go 전화 통화를 정중하게 마무리하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "It was great catching up — I'll let you go and we'll talk soon.",
    "examples": [
      "I know you're busy, so I'll let you go. Thanks for the quick update.",
      "Well, I'll let you go — I just wanted to touch base before the weekend.",
      "You mentioned you have a meeting in a few minutes, so I'll let you go."
    ],
    "dialogue": {
      "a": "I'll let you go — I can hear you're somewhere pretty noisy.",
      "b": "Yeah, I just stepped outside briefly. Let's talk properly tomorrow."
    },
    "tip": "I'll let you go는 상대방을 배려하며 통화를 끝낼 때 쓰는 표현으로, 직접 끊겠다고 하지 않아 더 예의 바른 느낌을 줍니다.",
    "coreId": "go"
  },
  {
    "id": "conversation-067",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 67,
    "expression": "away (time)",
    "usage": "앞으로 남은 시간 표현하기",
    "heading": "away (time) 앞으로 남은 시간 표현하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "The final exam is only two days away — I need to study harder.",
    "examples": [
      "The product launch is just a week away, and we still have a lot to prepare.",
      "With the holiday only three days away, the streets are packed with shoppers.",
      "Retirement is still years away for him, but he's already started planning."
    ],
    "dialogue": {
      "a": "Can you believe the reunion is only a month away?",
      "b": "I know! I still need to book my flight — I've been putting it off forever."
    },
    "tip": "time + away는 어떤 이벤트나 날짜까지 남은 시간을 강조하는 표현으로, 기대나 긴박감을 함께 전달 합니다.",
    "coreId": "need"
  },
  {
    "id": "conversation-068",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 68,
    "expression": "behind on",
    "usage": "진도나 일정이 늦어졌다고 표현하기",
    "heading": "behind on 진도나 일정이 늦어졌다고 표현하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "I'm a bit behind on my reading for the class — I need to catch up.",
    "examples": [
      "He got behind on his mortgage payments after losing his job.",
      "We're behind on the project timeline — we'll need to work overtime this week.",
      "She was behind on her emails after returning from a two-week vacation."
    ],
    "dialogue": {
      "a": "How's progress on the quarterly report?",
      "b": "Honestly, I'm a bit behind on it — can I get an extension until Friday?"
    },
    "tip": "behind on은 정해진 기한이나 기대에 비해 뒤처져 있다는 의미로, 업무·학업·재정 등 다양한 상황에 씁니다.",
    "coreId": "need"
  },
  {
    "id": "conversation-069",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 69,
    "expression": "that's for sure",
    "usage": "확실한 동의나 확신 표현하기",
    "heading": "that's for sure 확실한 동의나 확신 표현하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "Training for a marathon is no joke — that's for sure.",
    "examples": [
      "The prices have gone up significantly this year — that's for sure.",
      "She knows her stuff when it comes to tax law — that's for sure.",
      "Living downtown is convenient, but it's also noisy. That's for sure."
    ],
    "dialogue": {
      "a": "This summer has been unusually hot, hasn't it?",
      "b": "That's for sure — I've been running the air conditioner nonstop for weeks."
    },
    "tip": "That's for sure는 앞서 언급된 내용을 강하게 확인하거나 공감할 때 쓰는 짧고 강조적인 표현입니다.",
    "coreId": null
  },
  {
    "id": "conversation-070",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 70,
    "expression": "can't go wrong with",
    "usage": "안전하고 좋은 선택 추천하기",
    "heading": "can't go wrong with 안전하고 좋은 선택 추천하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "You can't go wrong with a classic navy blazer — it goes with everything.",
    "examples": [
      "You can't go wrong with a gift card — people can choose whatever they want.",
      "If you don't know what to bring to a potluck, you can't go wrong with a Caesar salad.",
      "For a first visit to Tokyo, you really can't go wrong with staying near Shinjuku."
    ],
    "dialogue": {
      "a": "I can't decide what to wear to the interview.",
      "b": "You can't go wrong with a simple white button-down and dark trousers. Clean and professional."
    },
    "tip": "can't go wrong with는 실수할 가능성이 없는 믿을 만한 선택을 자신 있게 추천할 때 쓰는 표현입니 다.",
    "coreId": "go"
  },
  {
    "id": "conversation-071",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 71,
    "expression": "for (purpose)",
    "usage": "목적을 위해 나가다 표현하기",
    "heading": "for (purpose) 목적을 위해 나가다 표현하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "Let's go out for dinner to celebrate — you deserve it.",
    "examples": [
      "She went out for a run before the sun got too hot.",
      "We went out for drinks after the team wrapped up the big presentation.",
      "He popped out for a quick coffee and ran into an old colleague."
    ],
    "dialogue": {
      "a": "Do you want to go out for a walk? The weather is perfect right now.",
      "b": "Absolutely — let me just grab my jacket and I'll meet you outside."
    },
    "tip": "go out for ~는 특정 목적을 위해 밖에 나가는 행동을 간결하게 표현하는 구어체 표현입니다.",
    "coreId": "go"
  },
  {
    "id": "conversation-072",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 72,
    "expression": "about (topic/reason)",
    "usage": "주제나 이유를 묻거나 말하기",
    "heading": "about (topic/reason) 주제나 이유를 묻거나 말하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "What's this meeting about? Nobody told me the agenda.",
    "examples": [
      "The book is about a group of friends navigating life in their thirties.",
      "She left a message saying it was about the contract, but didn't give details.",
      "What's the complaint about? I'll look into it right away."
    ],
    "dialogue": {
      "a": "There's a note on your desk — looks urgent.",
      "b": "Oh, it's probably about the invoice I sent last week. I'll call them now."
    },
    "tip": "about은 주제(~에 관한), 이유(~때문에), 대략(~약) 등 다양한 뜻이 있으므로 문맥을 파악하는 것이 중요합니다.",
    "coreId": null
  },
  {
    "id": "conversation-073",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 73,
    "expression": "sound (various) ~하게",
    "usage": "들린다로 반응하기",
    "heading": "sound (various) ~하게 들린다로 반응하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "That sounds like a great plan — when do we start?",
    "examples": [
      "That sounds like too good a deal to pass up.",
      "A picnic in the park on Saturday? That sounds perfect.",
      "That sounds a bit complicated — can we break it into smaller steps?"
    ],
    "dialogue": {
      "a": "I was thinking we could combine both projects into one proposal.",
      "b": "That sounds like it could work — let's talk through the details."
    },
    "tip": "That sounds + 형용사나 like + 명사는 상대방의 의견이나 제안에 반응하는 자연스러운 표현으로, 긍정과 부정 모두에 쓸 수 있습니다.",
    "coreId": "do"
  },
  {
    "id": "conversation-074",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 74,
    "expression": "it's not like",
    "usage": "오해를 바로잡거나 상황을 설명하기",
    "heading": "it's not like 오해를 바로잡거나 상황을 설명하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "It's not like I forgot — I've just been really swamped this week.",
    "examples": [
      "It's not like she doesn't care — she's just been dealing with a lot lately.",
      "It's not like we planned for this to happen; it just sort of unfolded this way.",
      "It's not like I hate the idea — I just think the timing isn't right."
    ],
    "dialogue": {
      "a": "You seem like you've been avoiding the office meetings lately.",
      "b": "It's not like I'm avoiding them — I've had back-to-back client calls every Tuesday."
    },
    "tip": "It's not like ~는 상대방이 잘못 이해하고 있는 것을 부드럽게 바로잡을 때 쓰는 설명적인 표현입니 다.",
    "coreId": "like"
  },
  {
    "id": "conversation-075",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 75,
    "expression": "are you sure",
    "usage": "상대방의 의사를 재확인하기",
    "heading": "are you sure 상대방의 의사를 재확인하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "Are you sure you want to take on this extra project? It's a lot.",
    "examples": [
      "Are you sure you don't want to stay for dessert? It's included.",
      "Are you sure about this route? The GPS is showing a different way.",
      "Are you sure you left your wallet at the restaurant? Let's call them."
    ],
    "dialogue": {
      "a": "I'll handle the whole presentation myself if that helps.",
      "b": "Are you sure? That's a lot to take on alone — I'm happy to help with the slides."
    },
    "tip": "Are you sure는 상대의 결정을 의심하는 것이 아니라 진심으로 걱정하거나 배려하는 마음으로 재확 인하는 표현입니다.",
    "coreId": "take"
  },
  {
    "id": "conversation-076",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 76,
    "expression": "sorry about ~",
    "usage": "간단하게 사과하기",
    "heading": "sorry about ~ 간단하게 사과하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "Sorry about the wait — we've been backed up all afternoon.",
    "examples": [
      "Sorry about the short notice — the meeting time changed at the last minute.",
      "Sorry about that — I must have sent the wrong version of the file.",
      "Sorry about the mess; we're in the middle of redecorating."
    ],
    "dialogue": {
      "a": "The coffee machine is broken again this morning.",
      "b": "Ugh, sorry about that — I'll get it looked at today."
    },
    "tip": "Sorry about ~는 I apologize for ~보다 훨씬 캐주얼하며, 일상적인 불편함에 대해 가볍게 사과할 때 씁니다.",
    "coreId": null
  },
  {
    "id": "conversation-077",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 77,
    "expression": "not there yet",
    "usage": "아직 그 단계에 이르지 못했다고 표현하기",
    "heading": "not there yet 아직 그 단계에 이르지 못했다고 표현하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "I've been practicing my guitar, but I'm not there yet — still lots to learn.",
    "examples": [
      "The app is almost ready, but we're not there yet with the testing phase.",
      "She's a great cook, but she's not there yet when it comes to pastry work.",
      "I want to run a 5K, but honestly I'm not there yet — I can barely do two miles."
    ],
    "dialogue": {
      "a": "Do you think the team is ready to take on international clients?",
      "b": "We're getting there, but not there yet. We need a few more months of preparation."
    },
    "tip": "not there yet는 목표에 아직 도달하지 못했지만 그 방향으로 나아가고 있음을 암시하는 표현입니 다.",
    "coreId": null
  },
  {
    "id": "conversation-078",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 78,
    "expression": "forget (leave behind)",
    "usage": "물건을 두고 오다 표현하기",
    "heading": "forget (leave behind) 물건을 두고 오다 표현하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "I forgot my charger at the office again — this is the third time.",
    "examples": [
      "She forgot her umbrella at the café and had to walk back in the rain.",
      "Don't forget your keycard — you'll need it to get into the building.",
      "He forgot his lunch on the kitchen counter and had to buy something nearby."
    ],
    "dialogue": {
      "a": "Have you seen my glasses? I think I might have forgotten them somewhere.",
      "b": "You forgot them on the table by the door. I spotted them on my way out."
    },
    "tip": "forgot + 목적어는 물건을 두고 왔을 때, forget to + 동사는 해야 할 일을 하지 않았을 때 씁니다.",
    "coreId": null
  },
  {
    "id": "conversation-079",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 79,
    "expression": "never seen anything like",
    "usage": "처음 보는 놀라운 상황 표현하기",
    "heading": "never seen anything like 처음 보는 놀라운 상황 표현하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "I've never seen anything like this snowfall — it's absolutely incredible.",
    "examples": [
      "The audience had never seen anything like her performance — it was breathtaking.",
      "I've never seen anything like the traffic in this city during rush hour.",
      "None of us had ever seen anything like the lightning storm over the ocean that night."
    ],
    "dialogue": {
      "a": "What did you think of the street festival?",
      "b": "Honestly, I've never seen anything like it — the whole city just comes alive."
    },
    "tip": "never seen anything like는 비교할 대상이 없을 만큼 특별하거나 충격적인 경험을 묘사할 때 쓰는 강한 표현입니다.",
    "coreId": "like"
  },
  {
    "id": "conversation-080",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 80,
    "expression": "be at (place) ~ing",
    "usage": "있는 장소와 하고 있는 일 동시에 표현하기",
    "heading": "be at (place) ~ing 있는 장소와 하고 있는 일 동시에 표현하기",
    "chapterKo": "대화 흐름·뉘앙스",
    "chapterEn": "Conversation Flow & Nuance",
    "model": "I'm at the gym working out — can I call you back in about an hour?",
    "examples": [
      "She's at the library studying for her final exams.",
      "They were at the park playing catch when the rain started.",
      "He's at the office finishing up some last-minute reports."
    ],
    "dialogue": {
      "a": "Where are you? The meeting started five minutes ago.",
      "b": "I'm at the elevator — the badge reader isn't working. I'll be there in two minutes."
    },
    "tip": "be at + 장소 + ~ing는 위치와 동작을 함께 전달하는 간결한 패턴으로, 일상적인 문자나 대화에서 자 주 씁니다.",
    "coreId": "be"
  },
  {
    "id": "conversation-081",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 81,
    "expression": "I thought maybe we could",
    "usage": "조심스럽게 제안하기",
    "heading": "I thought maybe we could 조심스럽게 제안하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "I thought maybe we could go for a walk after dinner — what do you think?",
    "examples": [
      "I thought maybe we could split the appetizers and each get a main course.",
      "I thought maybe we could hold the next meeting online to save everyone time.",
      "I thought maybe we could ask for an extension if the deadline is too tight."
    ],
    "dialogue": {
      "a": "I'm not sure what to do for Dad's birthday this year.",
      "b": "I thought maybe we could plan a small surprise dinner — nothing too big."
    },
    "tip": "I thought maybe we could ~는 강요하지 않고 부드럽게 아이디어를 꺼낼 때 쓰는 완곡하고 배려 있 는 표현입니다.",
    "coreId": "do"
  },
  {
    "id": "conversation-082",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 82,
    "expression": "that (as subject)",
    "usage": "지시대명사 that을 주어로 쓰기",
    "heading": "that (as subject) 지시대명사 that을 주어로 쓰기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "That was the best cup of coffee I've had in months.",
    "examples": [
      "That's exactly what I was trying to explain earlier.",
      "That was a really interesting point — I hadn't thought of it that way.",
      "That doesn't make sense to me — can you walk me through it again?"
    ],
    "dialogue": {
      "a": "We finished the entire project two days ahead of schedule.",
      "b": "That's incredible — the team really pulled together on this one."
    },
    "tip": "That을 주어로 쓸 때는 직전 상황·발언·경험 등을 가리키며, 간결하고 자연스러운 반응에 자주 쓰입 니다.",
    "coreId": null
  },
  {
    "id": "conversation-083",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 83,
    "expression": "be interested in",
    "usage": "관심사나 흥미 표현하기",
    "heading": "be interested in 관심사나 흥미 표현하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "I've been interested in learning to play the ukulele for a while.",
    "examples": [
      "She's interested in applying for the program abroad next fall.",
      "Are you interested in taking a wine tasting class this weekend?",
      "He's been interested in urban photography since he moved to the city."
    ],
    "dialogue": {
      "a": "We're putting together a volunteer team for the food drive.",
      "b": "I'd be interested in joining — how do I sign up?"
    },
    "tip": "be interested in ~ing는 현재 진행 중인 관심이나 참여 의향을 나타내며, be curious about보다 더 적극적인 뉘앙스입니다.",
    "coreId": "be"
  },
  {
    "id": "conversation-084",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 84,
    "expression": "have you got a minute",
    "usage": "잠깐 시간이 있는지 묻기",
    "heading": "have you got a minute 잠깐 시간이 있는지 묻기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "Have you got a minute? I just need to ask you something quick.",
    "examples": [
      "Have you got a minute to go over this document before I send it?",
      "Hey, have you got a minute? I want to get your take on something.",
      "I know you're busy, but have you got a minute for a quick question?"
    ],
    "dialogue": {
      "a": "Have you got a minute? There's something odd in the numbers.",
      "b": "Sure — pull up a chair and show me what you're seeing."
    },
    "tip": "Have you got a minute는 Do you have a moment와 같은 의미로, 바쁜 사람에게 정중하게 짧은 시간을 요청할 때 씁니다.",
    "coreId": "have"
  },
  {
    "id": "conversation-085",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 85,
    "expression": "are you familiar with",
    "usage": "상대방이 알고 있는지 묻기",
    "heading": "are you familiar with 상대방이 알고 있는지 묻기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "Are you familiar with the new reporting software we just installed?",
    "examples": [
      "Are you familiar with that bookstore on Maple Avenue? They have a great local section.",
      "Are you familiar with the concept of intermittent fasting? It's been really popular.",
      "Are you familiar with this area? We're looking for a good place for brunch."
    ],
    "dialogue": {
      "a": "Are you familiar with cloud-based project management tools?",
      "b": "A little — I've used a couple of them, but not the one you're probably thinking of."
    },
    "tip": "Are you familiar with ~는 상대가 어떤 것을 알고 있는지 중립적으로 물을 때 쓰며, 대화를 이어가기 위한 자연스러운 시작점이 됩니다.",
    "coreId": null
  },
  {
    "id": "conversation-086",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 86,
    "expression": "either (negative)",
    "usage": "부정문에서 나도를 표현하기",
    "heading": "either (negative) 부정문에서 나도를 표현하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "I haven't seen that new thriller either — let's watch it together.",
    "examples": [
      "She hasn't tried sushi before, and her sister hasn't either.",
      "I didn't know the meeting was canceled either — nobody told me.",
      "He can't figure out how to reset the password, and I can't either."
    ],
    "dialogue": {
      "a": "I have no idea what that acronym stands for.",
      "b": "I don't either — let's just look it up."
    },
    "tip": "부정문에서 나도를 말할 때는 too 대신 either를 써야 하며, Me neither도 같은 의미의 자연스러운 짧은 답변입니다.",
    "coreId": "let"
  },
  {
    "id": "conversation-087",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 87,
    "expression": "unlike",
    "usage": "대조를 나타내는 unlike 사용하기",
    "heading": "unlike 대조를 나타내는 unlike 사용하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "Unlike most people I know, she actually enjoys cold weather.",
    "examples": [
      "Unlike his previous manager, the new one is very open to feedback.",
      "Unlike last summer, this one has been mild and relatively rainy.",
      "Unlike coffee, green tea doesn't give me the afternoon jitters."
    ],
    "dialogue": {
      "a": "This hotel is so different from the last one we stayed at.",
      "b": "Definitely — unlike that place, this one actually has good soundproofing."
    },
    "tip": "Unlike ~는 두 대상을 비교하며 차이점을 강조할 때 쓰며, 문장 앞이나 중간에 모두 쓸 수 있습니다.",
    "coreId": "know"
  },
  {
    "id": "conversation-088",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 88,
    "expression": "unusual/unusually",
    "usage": "평소와 다른 상황 표현하기",
    "heading": "unusual/unusually 평소와 다른 상황 표현하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "It's been unusually cold for May — I might bring a jacket just in case.",
    "examples": [
      "The train was unusually crowded for a Tuesday afternoon.",
      "It's unusual for her to be late — she's typically the first one here.",
      "He was unusually quiet at dinner, and everyone noticed."
    ],
    "dialogue": {
      "a": "The streets are empty for a Friday evening.",
      "b": "That's unusual — it must be because of the big game on TV tonight."
    },
    "tip": "unusual은 형용사로, unusually는 부사로 쓰이며, 평소의 패턴과 다른 상황을 자연스럽게 표현합니 다.",
    "coreId": null
  },
  {
    "id": "conversation-089",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 89,
    "expression": "I insist",
    "usage": "정중하게 강하게 주장하기",
    "heading": "I insist 정중하게 강하게 주장하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "Let me get the check — I insist. You paid last time.",
    "examples": [
      "You've been such a great help today — please let me buy you lunch. I insist.",
      "Stay for dinner, I insist — it's the least I can do.",
      "I insist you take the bigger piece of cake. You've earned it."
    ],
    "dialogue": {
      "a": "You really don't have to go out of your way to drive me home.",
      "b": "It's no trouble at all — I insist. It's on my way anyway."
    },
    "tip": "I insist는 단독으로도 쓸 수 있으며, 상대방의 사양이나 거절에도 친절하지만 확실하게 주장할 때 씁 니다.",
    "coreId": "get"
  },
  {
    "id": "conversation-090",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 90,
    "expression": "what you ~ (noun clause)",
    "usage": "명사절을 목적어로 활용하기",
    "heading": "what you ~ (noun clause) 명사절을 목적어로 활용하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "I understand what you're saying, but I see it a bit differently.",
    "examples": [
      "Show me what you came up with — I'd love to see the draft.",
      "Tell me what you need and I'll try to make it happen.",
      "I really appreciate what you've done for us this year."
    ],
    "dialogue": {
      "a": "I'm not sure how to explain the problem clearly.",
      "b": "Just describe what you're seeing and I'll help figure it out from there."
    },
    "tip": "what + 주어 + 동사의 명사절은 문장의 목적어 역할을 하며, 의미 전달을 풍부하고 자연스럽게 만들 어 줍니다.",
    "coreId": "see"
  },
  {
    "id": "conversation-091",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 91,
    "expression": "relatively",
    "usage": "비교를 통해 상대적으로 표현하기",
    "heading": "relatively 비교를 통해 상대적으로 표현하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "The course is relatively straightforward — most students finish in under an hour.",
    "examples": [
      "This neighborhood is relatively quiet compared to the rest of the city.",
      "The new version is relatively simple to set up, even for non-technical users.",
      "She recovered relatively quickly after the surgery, which was a huge relief."
    ],
    "dialogue": {
      "a": "Is the hike difficult? I'm not in great shape.",
      "b": "It's relatively easy — mostly flat with one short uphill section near the end."
    },
    "tip": "relatively는 절대적인 판단 대신 기준과 비교했을 때 어느 정도라는 뉘앙스를 전달하여 표현을 더 정 확하게 만들어 줍니다.",
    "coreId": null
  },
  {
    "id": "conversation-092",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 92,
    "expression": "from (cause) ~해서",
    "usage": "생긴 결과의 원인 표현하기",
    "heading": "from (cause) ~해서 생긴 결과의 원인 표현하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "My shoulders are sore from sitting hunched over the computer all day.",
    "examples": [
      "Her eyes were red from crying during the movie.",
      "He's exhausted from running back-to-back workshops all week.",
      "My hands are rough from gardening without gloves."
    ],
    "dialogue": {
      "a": "Why are you limping?",
      "b": "My feet are blistered from walking in new shoes all day — rookie mistake."
    },
    "tip": "from ~ing는 어떤 행동이 직접적인 원인이 되어 신체적·물리적 결과를 낳았을 때 자연스럽게 씁니 다.",
    "coreId": null
  },
  {
    "id": "conversation-093",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 93,
    "expression": "when (condition)",
    "usage": "조건이나 상황을 나타내는 when 활용하기",
    "heading": "when (condition) 조건이나 상황을 나타내는 when 활용하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "When it gets too hot outside, we usually stay in and watch a film.",
    "examples": [
      "When you're ready to order, just wave and a server will come right over.",
      "When I'm tired, I tend to make more small mistakes than usual.",
      "When the power goes out, we light candles and play board games."
    ],
    "dialogue": {
      "a": "What do you do when you're feeling overwhelmed at work?",
      "b": "When that happens, I step outside for ten minutes — fresh air really helps me reset."
    },
    "tip": "when ~은 만약 ~한다면의 의미에도 쓰이지만, if보다 더 일반적이거나 반복적인 상황을 가정할 때 자연스럽습니다.",
    "coreId": "watch"
  },
  {
    "id": "conversation-094",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 94,
    "expression": "plan on ~ing",
    "usage": "계획하고 있다고 표현하기",
    "heading": "plan on ~ing 계획하고 있다고 표현하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "I plan on leaving the house by 7 to beat the morning traffic.",
    "examples": [
      "Do you plan on attending the conference this fall?",
      "They plan on expanding the café by adding an outdoor seating area.",
      "She doesn't plan on staying at the same company for more than two years."
    ],
    "dialogue": {
      "a": "Are you planning to see the exhibition before it closes?",
      "b": "Yes — I plan on going this weekend. Want to come?"
    },
    "tip": "plan on ~ing와 plan to + 동사는 거의 같은 의미로 쓰이며, plan on이 조금 더 구어체에 가깝습니 다.",
    "coreId": null
  },
  {
    "id": "conversation-095",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 95,
    "expression": "I'm afraid",
    "usage": "나쁜 소식을 부드럽게 전달하기",
    "heading": "I'm afraid 나쁜 소식을 부드럽게 전달하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "I'm afraid the table won't be ready for another thirty minutes.",
    "examples": [
      "I'm afraid we don't have that item in stock at the moment.",
      "I'm afraid the last train has already left — you might need a cab.",
      "I'm afraid the deadline is fixed — there's no room for an extension."
    ],
    "dialogue": {
      "a": "Is the director available for a quick meeting today?",
      "b": "I'm afraid she's fully booked until Thursday. I can schedule something for then."
    },
    "tip": "I'm afraid는 두려움이 아니라 상대에게 실망스러운 소식을 정중하게 전달할 때 쓰는 완곡 표현입니 다.",
    "coreId": "be"
  },
  {
    "id": "conversation-096",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 96,
    "expression": "unless",
    "usage": "조건을 나타내는 unless 활용하기",
    "heading": "unless 조건을 나타내는 unless 활용하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "The store is open every day unless it's a national holiday.",
    "examples": [
      "Don't sign anything unless you've read every clause in the contract.",
      "She won't come to the party unless she knows at least a few people there.",
      "I'll see you Friday unless something comes up before then."
    ],
    "dialogue": {
      "a": "Do I need to RSVP for the workshop?",
      "b": "Unless you're already on the guest list, yes — spots fill up quickly."
    },
    "tip": "unless는 if not과 같은 의미지만 특정 조건이 성립되지 않을 경우를 강조하는 데 더 자연스럽습니다.",
    "coreId": null
  },
  {
    "id": "conversation-097",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 97,
    "expression": "~, though",
    "usage": "문장 끝에서 그래도로 대조 표현하기",
    "heading": "~, though 문장 끝에서 그래도로 대조 표현하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "The apartment is small. It has a great view, though.",
    "examples": [
      "The commute is long. The pay makes it worth it, though.",
      "I'm not a fan of crowds. The atmosphere at the festival was electric, though.",
      "The food took forever to arrive. It was absolutely delicious, though."
    ],
    "dialogue": {
      "a": "The hike was pretty exhausting.",
      "b": "True. The view from the top was worth every step, though."
    },
    "tip": "문장 끝의 though는 but보다 부드럽게 앞 내용을 부분적으로 반박하거나 균형을 맞출 때 쓰는 표현 입니다.",
    "coreId": null
  },
  {
    "id": "conversation-098",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 98,
    "expression": "make sense",
    "usage": "논리가 통한다고 표현하기",
    "heading": "make sense 논리가 통한다고 표현하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "Your reasoning makes total sense — I can see why you made that call.",
    "examples": [
      "It makes sense to double-check the numbers before sending the report out.",
      "Does this explanation make sense, or should I try a different approach?",
      "Now that you put it that way, it makes perfect sense."
    ],
    "dialogue": {
      "a": "I divided the tasks based on each person's strengths.",
      "b": "That makes sense — it should speed things up considerably."
    },
    "tip": "make sense는 논리나 이유가 납득 가능하다는 뜻으로, Does that make sense는 설명 후 이해 여부 를 확인할 때 자주 씁니다.",
    "coreId": "make"
  },
  {
    "id": "conversation-099",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 99,
    "expression": "I don't think ~",
    "usage": "부드럽게 의견이나 우려 표현하기",
    "heading": "I don't think ~ 부드럽게 의견이나 우려 표현하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "I don't think we have enough data yet to make a final decision.",
    "examples": [
      "I don't think that approach will work in the long run — let me explain why.",
      "I don't think she's heard back yet, but I'll check with her.",
      "I don't think we need to panic — this is a minor issue, easily fixed."
    ],
    "dialogue": {
      "a": "Should we go ahead and announce the new product at tomorrow's meeting?",
      "b": "Honestly, I don't think we're ready yet — there are still a few details to iron out."
    },
    "tip": "I don't think ~는 I think ~ not보다 영어에서 더 자연스러우며, 의견을 부드럽게 완화하는 기능을 합니다.",
    "coreId": "think"
  },
  {
    "id": "conversation-100",
    "sourceId": "conversation",
    "sourceType": "conversation",
    "sourceTitle": "영어회화 100",
    "sourceLabel": "CONVERSATION",
    "no": 100,
    "expression": "quite",
    "usage": "꽤·상당히로 강도 조절하기",
    "heading": "quite 꽤·상당히로 강도 조절하기",
    "chapterKo": "묘사·조건·완곡 표현",
    "chapterEn": "Describing, Conditions & Softening",
    "model": "The new intern is quite talented — she picked everything up in just two days.",
    "examples": [
      "That's quite a change from what we discussed in the last meeting.",
      "The hike was quite challenging, but we made it to the top.",
      "She's been quite busy lately, so don't take it personally if she doesn't reply right away."
    ],
    "dialogue": {
      "a": "How was the conference?",
      "b": "Quite interesting, actually — I came away with a lot of new ideas to share with the team."
    },
    "tip": "미국 영어에서 quite는 꽤·상당히라는 긍정적 강조로 쓰이는 경우가 많으며, 영국 영어의 약화 용법 과 다를 수 있습니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-001",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 1,
    "expression": "mean",
    "usage": "오해를 바로잡거나 가볍게 사과할 때",
    "heading": "mean 오해를 바로잡거나 가볍게 사과할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "I didn't mean it that way.",
    "examples": [
      "Sorry, I didn't mean to wake you up.",
      "That's not what I meant — I was just joking.",
      "Oh, I meant to say eight, not eighteen."
    ],
    "dialogue": {
      "a": "Are you saying I was wrong?",
      "b": "No! That's not what I mean. I just think we can try again."
    },
    "tip": "mean을 사용하면 '그런 뜻이 아니었어요'라고 오해를 쉽게 풀 수 있습니다.",
    "coreId": "mean"
  },
  {
    "id": "basic-conversation-002",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 2,
    "expression": "That'd be great",
    "usage": "상대방의 제안을 기쁘게 수락할 때",
    "heading": "That'd be great 상대방의 제안을 기쁘게 수락할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "That'd be great, thanks!",
    "examples": [
      "A ride home? That'd be great!",
      "If you could help me move, that'd be great.",
      "That'd be great — I'll see you at noon."
    ],
    "dialogue": {
      "a": "Do you want me to bring some snacks?",
      "b": "That'd be great! I'll take care of the drinks."
    },
    "tip": "That'd = That would의 줄임말로, 제안을 흔쾌히 받아들일 때 씁니다.",
    "coreId": "be"
  },
  {
    "id": "basic-conversation-003",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 3,
    "expression": "My bad",
    "usage": "가벼운 실수를 인정하고 사과할 때",
    "heading": "My bad 가벼운 실수를 인정하고 사과할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "Oh, my bad. I forgot to reply to you.",
    "examples": [
      "My bad! I left your umbrella at home.",
      "Oh, my bad — I thought the meeting was at three, not two.",
      "Sorry, my bad. I grabbed the wrong bag by mistake."
    ],
    "dialogue": {
      "a": "Hey, you sent me the wrong file.",
      "b": "Oh, my bad! Let me send you the right one right now."
    },
    "tip": "My bad!는 가벼운 실수에 '내 잘못이야'라고 편하게 사과하는 구어 표현입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-004",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 4,
    "expression": "never mind",
    "usage": "방금 한 말을 취소하거나 '신경 쓰지 마세요'라고 할 때",
    "heading": "never mind 방금 한 말을 취소하거나 '신경 쓰지 마세요'라고 할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "Oh, never mind — I already found it.",
    "examples": [
      "Never mind what I said — it wasn't important.",
      "Oh, never mind. I'll just handle it myself.",
      "Actually, never mind — I remembered the answer."
    ],
    "dialogue": {
      "a": "What were you about to ask me?",
      "b": "Oh, never mind. I just figured it out on my own."
    },
    "tip": "never mind는 방금 한 말을 취소하거나 '신경 쓰지 마세요'라고 할 때 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-005",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 5,
    "expression": "Can I get ~",
    "usage": "카페나 식당에서 주문할 때",
    "heading": "Can I get ~ 카페나 식당에서 주문할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "Can I get a small coffee, please?",
    "examples": [
      "Can I get a glass of orange juice?",
      "Can I get the mushroom soup and a side salad?",
      "Can I get two bottles of water to go?"
    ],
    "dialogue": {
      "a": "Hi there! What can I get for you today?",
      "b": "Can I get a large hot tea, please?"
    },
    "tip": "Can I get ~?는 가게나 식당에서 가장 자연스러운 주문 표현입니다.",
    "coreId": "get"
  },
  {
    "id": "basic-conversation-006",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 6,
    "expression": "in (time) '~후에'라고",
    "usage": "미래 시간을 나타낼 때",
    "heading": "in (time) '~후에'라고 미래 시간을 나타낼 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "I'll be ready in ten minutes.",
    "examples": [
      "Dinner will be ready in about twenty minutes.",
      "The next bus comes in eight minutes.",
      "She'll be back from her break in five minutes."
    ],
    "dialogue": {
      "a": "How long until the show starts?",
      "b": "It starts in about twenty minutes, so we still have time."
    },
    "tip": "in + 숫자 + 시간 단위는 '~후에'를 나타내는 가장 기본적인 미래 시간 표현입니다.",
    "coreId": "be"
  },
  {
    "id": "basic-conversation-007",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 7,
    "expression": "in (wearing)",
    "usage": "어떤 옷을 입고 있는 사람을 묘사할 때",
    "heading": "in (wearing) 어떤 옷을 입고 있는 사람을 묘사할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "She looks great in that red coat.",
    "examples": [
      "The man in the gray hat is my neighbor.",
      "You always look so sharp in a suit.",
      "Is that your friend in the striped shirt?"
    ],
    "dialogue": {
      "a": "Which one is Jake at the party?",
      "b": "He's the tall one in the green hoodie."
    },
    "tip": "in + 옷·색으로 사람의 복장을 간단하게 묘사할 수 있습니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-008",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 8,
    "expression": "for (meal)",
    "usage": "특정 끼니에 무엇을 먹는지 표현할 때",
    "heading": "for (meal) 특정 끼니에 무엇을 먹는지 표현할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "What did you have for breakfast?",
    "examples": [
      "We usually have rice and soup for breakfast.",
      "I only had a banana for lunch today.",
      "Let's have pasta for dinner tonight."
    ],
    "dialogue": {
      "a": "Are you hungry? You look a little tired.",
      "b": "A little. I only had fruit for breakfast this morning."
    },
    "tip": "for + 식사명은 '아침/점심/저녁으로 ~을 먹다'고 표현할 때 씁니다.",
    "coreId": "have"
  },
  {
    "id": "basic-conversation-009",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 9,
    "expression": "for (purpose)",
    "usage": "어떤 목적을 위해 머무르거나 오도록 권유할 때",
    "heading": "for (purpose) 어떤 목적을 위해 머무르거나 오도록 권유할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "Why don't you stay for dessert?",
    "examples": [
      "She came over for a quick visit.",
      "We stopped at the store for some milk.",
      "He stayed after class for extra practice."
    ],
    "dialogue": {
      "a": "Are you leaving already? It's still early.",
      "b": "Not yet — I'm staying for the second half of the game."
    },
    "tip": "for + 명사는 어떤 목적이나 이유를 나타낼 때 쓰는 기본 전치사 표현입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-010",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 10,
    "expression": "before/after",
    "usage": "일의 순서를 '전'과 '후'로 표현할 때",
    "heading": "before/after 일의 순서를 '전'과 '후'로 표현할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "Let's grab coffee before the movie.",
    "examples": [
      "Please read the instructions before you start.",
      "I always stretch after I exercise.",
      "She likes to take a short walk after dinner."
    ],
    "dialogue": {
      "a": "When do you want to eat?",
      "b": "Let's eat after we finish shopping — maybe around seven."
    },
    "tip": "before/after 뒤에 명사나 -ing 동사를 붙여 순서를 쉽게 표현합니다.",
    "coreId": "let"
  },
  {
    "id": "basic-conversation-011",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 11,
    "expression": "pay for",
    "usage": "무언가의 비용을 자신이 낼 때",
    "heading": "pay for 무언가의 비용을 자신이 낼 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "Let me pay for this one.",
    "examples": [
      "Don't worry — I'll pay for dinner tonight.",
      "He insisted on paying for everyone's tickets.",
      "Did you already pay for the parking?"
    ],
    "dialogue": {
      "a": "How much do I owe you for the coffee?",
      "b": "Nothing! I already paid for it. It's on me today."
    },
    "tip": "pay for + 대상으로 무언가의 값을 지불한다고 표현합니다.",
    "coreId": "let"
  },
  {
    "id": "basic-conversation-012",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 12,
    "expression": "over",
    "usage": "특정 기간 동안 일어난 일을 표현할 때",
    "heading": "over 특정 기간 동안 일어난 일을 표현할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "I watched a lot of movies over the break.",
    "examples": [
      "We visited three cities over the long weekend.",
      "She read five novels over the summer.",
      "Over the past week, I've been really busy with work."
    ],
    "dialogue": {
      "a": "Did you do anything fun over the holiday?",
      "b": "Yes! I visited my grandparents over the long weekend."
    },
    "tip": "over + 기간은 그 기간 전체에 걸쳐 일어난 일을 이야기할 때 씁니다.",
    "coreId": "break"
  },
  {
    "id": "basic-conversation-013",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 13,
    "expression": "both",
    "usage": "두 사람이나 두 가지 모두에 해당할 때",
    "heading": "both 두 사람이나 두 가지 모두에 해당할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "We both love hiking on the weekends.",
    "examples": [
      "Both of my brothers play the guitar.",
      "They both ordered the same meal by accident.",
      "I like both options — it's really hard to choose."
    ],
    "dialogue": {
      "a": "Do you and Maya enjoy cooking together?",
      "b": "Yes, we both love trying new recipes every weekend."
    },
    "tip": "both는 두 가지나 두 사람 모두에 적용될 때 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-014",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 14,
    "expression": "Me neither",
    "usage": "상대방의 부정적인 말에 '나도 그래요'라고 동의할 때",
    "heading": "Me neither 상대방의 부정적인 말에 '나도 그래요'라고 동의할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "A: I don't like loud places. B: Me neither!",
    "examples": [
      "A: I've never tried durian. B: Me neither, actually.",
      "A: I don't enjoy horror movies. B: Me neither.",
      "A: I can't handle very spicy food. B: Me neither!"
    ],
    "dialogue": {
      "a": "I don't like staying up past midnight on weekdays.",
      "b": "Me neither. I really need at least eight hours of sleep."
    },
    "tip": "Me neither는 상대방이 부정문을 쓸 때 '나도요'라고 동의하는 표현입니다.",
    "coreId": "like"
  },
  {
    "id": "basic-conversation-015",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 15,
    "expression": "again",
    "usage": "이미 말했던 정보를 다시 확인할 때",
    "heading": "again 이미 말했던 정보를 다시 확인할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "Sorry, what's your name again?",
    "examples": [
      "What time is the appointment again?",
      "Where did you say you were from again?",
      "Sorry, what was the Wi-Fi password again?"
    ],
    "dialogue": {
      "a": "What was the name of that new restaurant again?",
      "b": "It's called Green Garden. It's on Fifth Avenue."
    },
    "tip": "문장 끝에 again?을 붙이면 이미 들었던 정보를 자연스럽게 다시 물어볼 수 있습니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-016",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 16,
    "expression": "Not really '그다지 ~않다'고",
    "usage": "부드럽게 부정하거나 거절할 때",
    "heading": "Not really '그다지 ~않다'고 부드럽게 부정하거나 거절할 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "Not really — I'm just looking around.",
    "examples": [
      "A: Did you enjoy the film? B: Not really. It was a bit slow.",
      "A: Are you hungry right now? B: Not really, I just ate.",
      "A: Do you need any help? B: Not really, thanks — I'm just browsing."
    ],
    "dialogue": {
      "a": "Can I help you find something today?",
      "b": "Not really — I'm just looking around. But thank you!"
    },
    "tip": "Not really는 '아니요'보다 부드럽게 거절하거나 부정할 때 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-017",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 17,
    "expression": "a lot",
    "usage": "행동의 빈도나 양이 많음을 나타낼 때",
    "heading": "a lot 행동의 빈도나 양이 많음을 나타낼 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "She travels a lot for her job.",
    "examples": [
      "He's been calling me a lot lately.",
      "We've changed a lot since we were in school.",
      "I really appreciate your help a lot."
    ],
    "dialogue": {
      "a": "Do you exercise often?",
      "b": "Yeah, I run a lot — usually about four times a week."
    },
    "tip": "a lot은 동사 뒤에서 '많이, 자주'를 뜻하며 일상 회화에서 매우 자주 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-018",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 18,
    "expression": "yet '벌써/아직 ~했나요?'라고",
    "usage": "완료 여부를 물어볼 때",
    "heading": "yet '벌써/아직 ~했나요?'라고 완료 여부를 물어볼 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "Have you eaten yet?",
    "examples": [
      "Is the package here yet?",
      "Have you finished your homework yet?",
      "They haven't decided yet — they're still thinking."
    ],
    "dialogue": {
      "a": "Did you call the dentist yet?",
      "b": "Not yet. I'll do it right after lunch."
    },
    "tip": "yet은 의문문에서 '벌써/이미', 부정문에서 '아직'의 의미로 씁니다.",
    "coreId": "have"
  },
  {
    "id": "basic-conversation-019",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 19,
    "expression": "not that '그렇게 ~하지는",
    "usage": "않다'고 정도를 낮출 때",
    "heading": "not that '그렇게 ~하지는 않다'고 정도를 낮출 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "The test wasn't that hard, actually.",
    "examples": [
      "The walk wasn't that long — maybe twenty minutes.",
      "It's not that cold outside today.",
      "The movie wasn't that interesting, but it was okay."
    ],
    "dialogue": {
      "a": "Was it hard to find parking near here?",
      "b": "Not that hard. I found a spot in about five minutes."
    },
    "tip": "not that + 형용사는 '그렇게 ~하지는 않아요'라고 정도를 부드럽게 낮출 때 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-020",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 20,
    "expression": "quick",
    "usage": "무언가가 짧고 빠르게 이루어짐을 나타낼 때",
    "heading": "quick 무언가가 짧고 빠르게 이루어짐을 나타낼 때",
    "chapterKo": "기본 반응과 짧은 표현",
    "chapterEn": "Basic Reactions & Short Phrases",
    "model": "Can we have a quick chat?",
    "examples": [
      "Do you have time for a quick lunch today?",
      "I just need to make a quick phone call first.",
      "Let's take a quick break before we continue."
    ],
    "dialogue": {
      "a": "Hey, do you have a second?",
      "b": "Sure! I just need a quick moment to finish this email."
    },
    "tip": "a quick + 명사는 '잠깐의, 간단한'이라는 뜻으로 일상 회화에서 자주 씁니다.",
    "coreId": "have"
  },
  {
    "id": "basic-conversation-021",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 21,
    "expression": "busy ~ing '~하느라",
    "usage": "바쁘다'고 표현할 때",
    "heading": "busy ~ing '~하느라 바쁘다'고 표현할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "She's busy preparing for her big presentation.",
    "examples": [
      "I've been busy studying for finals all week.",
      "He's busy helping his mom move to a new apartment.",
      "We were busy planning the event all morning."
    ],
    "dialogue": {
      "a": "Why didn't you come to the party last night?",
      "b": "I was busy finishing a big project at work. Sorry about that!"
    },
    "tip": "busy + -ing는 '~하느라 바쁘다'는 뜻으로, 최근 바쁜 이유를 말할 때 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-022",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 22,
    "expression": "number + unit + adj '몇",
    "usage": "개월/살 ~한' 상태를 표현할 때",
    "heading": "number + unit + adj '몇 개월/살 ~한' 상태를 표현할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "The baby is only three weeks old.",
    "examples": [
      "She's about six months pregnant.",
      "He's been two years sober — everyone is so proud.",
      "Our cat is twelve years old but still very playful."
    ],
    "dialogue": {
      "a": "How old is your puppy? She's so cute!",
      "b": "She's four months old. Still very energetic and a little wild!"
    },
    "tip": "'숫자 + 단위 + 형용사' 구조로 나이나 기간 상태를 자연스럽게 표현합니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-023",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 23,
    "expression": "mood",
    "usage": "현재 기분이나 감정 상태를 표현할 때",
    "heading": "mood 현재 기분이나 감정 상태를 표현할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "I'm in a great mood today!",
    "examples": [
      "He's been in a bad mood all morning.",
      "She's in such a good mood after that phone call.",
      "Are you in the mood for some pizza tonight?"
    ],
    "dialogue": {
      "a": "You seem really happy today. What's going on?",
      "b": "I am! I'm in such a good mood. I just got some great news."
    },
    "tip": "in a ~ mood는 지금 어떤 기분이나 감정 상태인지 나타낼 때 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-024",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 24,
    "expression": "fun '정말",
    "usage": "재미있었다'고 표현할 때 (fun을 명사로)",
    "heading": "fun '정말 재미있었다'고 표현할 때 (fun을 명사로)",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "That was a lot of fun!",
    "examples": [
      "We had so much fun at the beach yesterday.",
      "Learning to skateboard is a lot of fun.",
      "It was fun to see everyone again at the reunion."
    ],
    "dialogue": {
      "a": "How was the game last night?",
      "b": "It was a lot of fun! We actually won in the last minute."
    },
    "tip": "fun은 명사로 쓸 때 a lot of fun, so much fun 등과 함께 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-025",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 25,
    "expression": "occasion",
    "usage": "특별한 이유나 행사가 있는지 물어볼 때",
    "heading": "occasion 특별한 이유나 행사가 있는지 물어볼 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "What's the occasion? You look so nice!",
    "examples": [
      "He only wears a tie on special occasions.",
      "Is there a particular occasion for this dinner?",
      "We're celebrating my mom's birthday — any special occasion calls for cake!"
    ],
    "dialogue": {
      "a": "You brought flowers! What's the occasion?",
      "b": "No big reason — I just wanted to say thank you for everything."
    },
    "tip": "What's the occasion?은 상대방이 특별해 보이거나 이벤트가 있을 때 이유를 묻는 표현입니다.",
    "coreId": "look"
  },
  {
    "id": "basic-conversation-026",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 26,
    "expression": "have (trait)",
    "usage": "사람이나 사물의 특성·특징을 표현할 때",
    "heading": "have (trait) 사람이나 사물의 특성·특징을 표현할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "She has a great sense of humor.",
    "examples": [
      "He has a really calm personality — nothing seems to upset him.",
      "This restaurant has a very cozy atmosphere.",
      "My neighbor has a beautiful garden out front."
    ],
    "dialogue": {
      "a": "What's your new boss like?",
      "b": "She has a very easygoing personality. I really enjoy working with her."
    },
    "tip": "have + 특성·특징으로 사람이나 사물의 성질을 자연스럽게 묘사합니다.",
    "coreId": "have"
  },
  {
    "id": "basic-conversation-027",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 27,
    "expression": "had + adj + period",
    "usage": "지난 기간이 어떠했는지 표현할 때",
    "heading": "had + adj + period 지난 기간이 어떠했는지 표현할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "I had such a long week.",
    "examples": [
      "We had a really busy month at the office.",
      "She had a rough day — let's be extra kind to her tonight.",
      "I had a great summer. I traveled to three different countries."
    ],
    "dialogue": {
      "a": "You look a little tired. Are you okay?",
      "b": "Yeah, I had a long day. Three back-to-back meetings with no break."
    },
    "tip": "had a + 형용사 + 시간 명사로 지난 기간에 대한 간단한 소감을 표현합니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-028",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 28,
    "expression": "they (place/business)",
    "usage": "가게나 음식점을 'they'로 지칭할 때",
    "heading": "they (place/business) 가게나 음식점을 'they'로 지칭할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "They don't have that flavor at this store.",
    "examples": [
      "They open at nine on weekdays.",
      "Do they deliver to this area?",
      "They have really good ramen at that new place on Oak Street."
    ],
    "dialogue": {
      "a": "Is the café on the corner still open this late?",
      "b": "I think so. They usually stay open until around nine."
    },
    "tip": "가게나 식당을 주어로 쓸 때 they를 자연스럽게 씁니다.",
    "coreId": "have"
  },
  {
    "id": "basic-conversation-029",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 29,
    "expression": "ask for '~을",
    "usage": "요청하다'고 표현할 때",
    "heading": "ask for '~을 요청하다'고 표현할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "Don't be afraid to ask for help.",
    "examples": [
      "She asked for extra napkins at the counter.",
      "Can I ask for a discount? I'm a regular customer.",
      "He asked for more time to finish the report."
    ],
    "dialogue": {
      "a": "What should I do if I need more sauce?",
      "b": "Just ask for it — the staff here is very friendly."
    },
    "tip": "ask for + 명사는 '~을 달라고 요청하다'는 뜻입니다.",
    "coreId": "ask"
  },
  {
    "id": "basic-conversation-030",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 30,
    "expression": "study (major)",
    "usage": "대학에서 어떤 전공을 공부했는지 표현할 때",
    "heading": "study (major) 대학에서 어떤 전공을 공부했는지 표현할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "She studied environmental science in college.",
    "examples": [
      "He studied business administration at a university in Seoul.",
      "I studied graphic design, but I work in marketing now.",
      "What did you study in school?"
    ],
    "dialogue": {
      "a": "What did you major in?",
      "b": "I studied communications. What about you?"
    },
    "tip": "study + 전공명으로 학교에서 무엇을 공부했는지 간단히 표현합니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-031",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 31,
    "expression": "how did ~ go",
    "usage": "어떤 일이 어떻게 진행됐는지 물어볼 때",
    "heading": "how did ~ go 어떤 일이 어떻게 진행됐는지 물어볼 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "How did your interview go?",
    "examples": [
      "How did the presentation go? Did everyone like it?",
      "How did the first date go? Tell me everything!",
      "How did your doctor's appointment go?"
    ],
    "dialogue": {
      "a": "How did the team meeting go this afternoon?",
      "b": "Really well! Everyone loved the new proposal."
    },
    "tip": "How did + 주어 + go?로 어떤 일의 결과나 진행이 어땠는지 자연스럽게 물을 수 있습니다.",
    "coreId": "go"
  },
  {
    "id": "basic-conversation-032",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 32,
    "expression": "go with '~와",
    "usage": "잘 어울린다'고 표현할 때",
    "heading": "go with '~와 잘 어울린다'고 표현할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "This sauce goes really well with grilled chicken.",
    "examples": [
      "White wine goes well with seafood.",
      "Do you think this scarf goes with my jacket?",
      "I'll go with the soup and salad combo."
    ],
    "dialogue": {
      "a": "Which tie should I wear with this shirt?",
      "b": "The blue one. It goes really well with that color."
    },
    "tip": "go with는 두 가지가 잘 어울린다거나 어떤 것을 선택할 때 씁니다.",
    "coreId": "go"
  },
  {
    "id": "basic-conversation-033",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 33,
    "expression": "go + ~ing",
    "usage": "어떤 활동을 하러 가자고 제안할 때",
    "heading": "go + ~ing 어떤 활동을 하러 가자고 제안할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "Do you want to go hiking this Sunday?",
    "examples": [
      "Let's go shopping after work today.",
      "They went camping near the lake last month.",
      "She goes jogging every morning before breakfast."
    ],
    "dialogue": {
      "a": "What are your plans for the weekend?",
      "b": "I'm thinking of going cycling along the river trail."
    },
    "tip": "go + -ing는 스포츠나 여가 활동을 하러 간다는 표현으로 자주 씁니다.",
    "coreId": "go"
  },
  {
    "id": "basic-conversation-034",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 34,
    "expression": "afford",
    "usage": "무언가를 살 형편이 안 된다고 표현할 때",
    "heading": "afford 무언가를 살 형편이 안 된다고 표현할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "I can't afford a new laptop right now.",
    "examples": [
      "We couldn't afford to eat out every day on our trip.",
      "Can you afford to take a whole week off work?",
      "She finally saved enough to afford a new bike."
    ],
    "dialogue": {
      "a": "Are you going to upgrade your phone soon?",
      "b": "I'd love to, but I really can't afford one right now."
    },
    "tip": "can't afford는 비용이나 시간적으로 여유가 없다는 뜻입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-035",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 35,
    "expression": "it says ~",
    "usage": "앱·표지판·안내문에 ~라고 나와 있다고 전달할 때",
    "heading": "it says ~ 앱·표지판·안내문에 ~라고 나와 있다고 전달할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "It says the café opens at eight.",
    "examples": [
      "It says on the app that there's a twenty-minute wait.",
      "The sign says parking is free on weekends.",
      "It says here you need to reserve a table in advance."
    ],
    "dialogue": {
      "a": "Is the restaurant open right now?",
      "b": "Let me check the app. Yeah, it says it closes at ten."
    },
    "tip": "It says ~는 앱, 안내판, 메뉴판 등에 적혀 있는 내용을 전달할 때 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-036",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 36,
    "expression": "sounds ~",
    "usage": "상대방의 말에 반응하거나 의견을 나타낼 때",
    "heading": "sounds ~ 상대방의 말에 반응하거나 의견을 나타낼 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "That sounds like a great idea!",
    "examples": [
      "Sounds good to me — let's go at noon.",
      "That sounds really fun. Can I join you?",
      "Hmm, that sounds a little complicated to me."
    ],
    "dialogue": {
      "a": "How about we meet at the café at two o'clock?",
      "b": "That sounds perfect. See you then!"
    },
    "tip": "Sounds + 형용사로 상대방의 제안이나 이야기에 자연스럽게 반응할 수 있습니다.",
    "coreId": "like"
  },
  {
    "id": "basic-conversation-037",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 37,
    "expression": "join",
    "usage": "어떤 활동에 함께 참여하도록 권유할 때",
    "heading": "join 어떤 활동에 함께 참여하도록 권유할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "Do you want to join us for lunch?",
    "examples": [
      "Feel free to join us if you're free on Friday.",
      "Can your roommate join for the game night?",
      "Why don't you join us for the morning walk?"
    ],
    "dialogue": {
      "a": "We're going to the park later. Do you want to join?",
      "b": "Sure! What time are you all leaving?"
    },
    "tip": "join + us/me for + 활동으로 '같이 ~하자'는 초대 표현을 만들 수 있습니다.",
    "coreId": "do"
  },
  {
    "id": "basic-conversation-038",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 38,
    "expression": "take (transport)",
    "usage": "교통수단을 이용한다고 표현할 때",
    "heading": "take (transport) 교통수단을 이용한다고 표현할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "Let's take the subway — it's faster.",
    "examples": [
      "I usually take the bus to work in the morning.",
      "Should we take a taxi or just walk?",
      "He took the last train home last night."
    ],
    "dialogue": {
      "a": "How do you get to the city center from here?",
      "b": "I take the subway. It only takes about fifteen minutes."
    },
    "tip": "take + 교통수단으로 어떤 교통수단을 이용한다고 표현합니다.",
    "coreId": "take"
  },
  {
    "id": "basic-conversation-039",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 39,
    "expression": "catch (transport)",
    "usage": "교통수단을 제때 탄다고 표현할 때",
    "heading": "catch (transport) 교통수단을 제때 탄다고 표현할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "Hurry! We need to catch the last bus.",
    "examples": [
      "I ran to catch the train but missed it by a second.",
      "If we leave now, we can catch the seven o'clock bus.",
      "Did you catch the last ferry to the island?"
    ],
    "dialogue": {
      "a": "What time should we head out?",
      "b": "Soon — I really want to catch the 6:30 train."
    },
    "tip": "catch + 교통수단은 교통수단을 제때 타다는 뜻으로, 시간이 촉박할 때 자주 씁니다.",
    "coreId": "need"
  },
  {
    "id": "basic-conversation-040",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 40,
    "expression": "take (a class)",
    "usage": "강의나 수업을 수강한다고 표현할 때",
    "heading": "take (a class) 강의나 수업을 수강한다고 표현할 때",
    "chapterKo": "일상 묘사와 동사 표현",
    "chapterEn": "Everyday Descriptions & Verbs",
    "model": "I'm taking a yoga class on Tuesday evenings.",
    "examples": [
      "She's taking a beginner cooking class this month.",
      "He took a photography class and absolutely loved it.",
      "Are you taking any classes this semester?"
    ],
    "dialogue": {
      "a": "Have you ever tried pottery?",
      "b": "Not yet, but I'm thinking of taking a pottery class soon."
    },
    "tip": "take a + 수업명 + class로 어떤 강좌나 수업을 수강한다고 표현합니다.",
    "coreId": "take"
  },
  {
    "id": "basic-conversation-041",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 41,
    "expression": "take (time)",
    "usage": "어떤 일에 시간이 얼마나 걸리는지 표현할 때",
    "heading": "take (time) 어떤 일에 시간이 얼마나 걸리는지 표현할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "How long does it take to get there by train?",
    "examples": [
      "It takes about an hour to drive to the airport.",
      "How long did it take you to finish the whole book?",
      "The download only took a few seconds."
    ],
    "dialogue": {
      "a": "How long does the hike take?",
      "b": "It takes about two hours if you go at a normal pace."
    },
    "tip": "It takes + 시간 + to + 동사로 어떤 일에 시간이 얼마나 걸리는지 표현합니다.",
    "coreId": "take"
  },
  {
    "id": "basic-conversation-042",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 42,
    "expression": "spend (time)",
    "usage": "시간을 얼마나 ~하는 데 보냈는지 표현할 때",
    "heading": "spend (time) 시간을 얼마나 ~하는 데 보냈는지 표현할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "I spent three hours cleaning my room.",
    "examples": [
      "She spends a lot of time reading every evening.",
      "We spent the whole afternoon at the museum.",
      "How much time do you spend on social media each day?"
    ],
    "dialogue": {
      "a": "What did you do all day?",
      "b": "I spent most of the day helping my parents move to their new place."
    },
    "tip": "spend + 시간 + -ing로 어떤 일에 얼마나 시간을 쏟는지 표현합니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-043",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 43,
    "expression": "what brings you",
    "usage": "상대방이 여기 온 이유를 정중하게 물을 때",
    "heading": "what brings you 상대방이 여기 온 이유를 정중하게 물을 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "What brings you to this part of town?",
    "examples": [
      "So, what brings you to our shop today?",
      "What brings you to Seoul? Business or vacation?",
      "What brought you to this field of work?"
    ],
    "dialogue": {
      "a": "What brings you here today?",
      "b": "I'm looking for a birthday gift for my sister."
    },
    "tip": "What brings you to ~?는 '어쩐 일로 ~에 오셨나요?'라는 부드러운 표현입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-044",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 44,
    "expression": "head (to) '~로",
    "usage": "향하다'고 표현할 때",
    "heading": "head (to) '~로 향하다'고 표현할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "Where are you headed after work today?",
    "examples": [
      "I'm heading to the gym right now.",
      "We're heading home — want to share a cab?",
      "He headed to the airport as soon as he finished the meeting."
    ],
    "dialogue": {
      "a": "Are you leaving already?",
      "b": "Yeah, I'm heading over to pick up my sister from school."
    },
    "tip": "head to/for + 장소는 '~로 향하다, 가다'는 뜻입니다.",
    "coreId": "work"
  },
  {
    "id": "basic-conversation-045",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 45,
    "expression": "try",
    "usage": "무언가를 먹어보거나 경험해 보라고 권유할 때",
    "heading": "try 무언가를 먹어보거나 경험해 보라고 권유할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "You should try this green tea ice cream!",
    "examples": [
      "Have you tried the new ramen place near the station?",
      "Try the kimchi fried rice — it's absolutely amazing.",
      "I tried making bread for the first time. It actually turned out okay!"
    ],
    "dialogue": {
      "a": "I've never had matcha before.",
      "b": "Really? You have to try it! Here, taste some of mine."
    },
    "tip": "try + 명사/-ing는 어떤 것을 경험해 보거나 시도할 때 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-046",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 46,
    "expression": "cost",
    "usage": "가격이나 비용을 물어볼 때",
    "heading": "cost 가격이나 비용을 물어볼 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "How much does it cost to get in?",
    "examples": [
      "The tickets cost forty dollars each.",
      "How much does it cost to ship this package?",
      "It doesn't cost anything — the entry is completely free!"
    ],
    "dialogue": {
      "a": "Is it expensive to park here?",
      "b": "It costs about two dollars an hour, I think."
    },
    "tip": "How much does it cost?는 가장 기본적인 가격 문의 표현입니다.",
    "coreId": "get"
  },
  {
    "id": "basic-conversation-047",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 47,
    "expression": "can't stand",
    "usage": "어떤 것이 정말 싫거나 견딜 수 없을 때",
    "heading": "can't stand 어떤 것이 정말 싫거나 견딜 수 없을 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "I can't stand the smell of cigarette smoke.",
    "examples": [
      "She can't stand being late to anything.",
      "I can't stand it when people talk loudly on the phone in public.",
      "He can't stand horror movies — they scare him too much."
    ],
    "dialogue": {
      "a": "Do you want to watch the big game tonight?",
      "b": "Not really. I can't stand watching sports, to be honest."
    },
    "tip": "can't stand + 명사/-ing는 '정말 참을 수 없다'는 강한 표현입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-048",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 48,
    "expression": "quit '~을",
    "usage": "그만두다'고 표현할 때",
    "heading": "quit '~을 그만두다'고 표현할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "He quit his job to travel the world.",
    "examples": [
      "She quit drinking coffee and switched to herbal tea.",
      "I quit the gym because it was too far from my apartment.",
      "Are you thinking of quitting your part-time job?"
    ],
    "dialogue": {
      "a": "Did you hear? Jake quit the soccer team.",
      "b": "Really? I had no idea he was even thinking about quitting."
    },
    "tip": "quit + -ing/명사로 무언가를 그만두거나 중단한다고 표현합니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-049",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 49,
    "expression": "come over",
    "usage": "상대방을 자신의 집으로 초대할 때",
    "heading": "come over 상대방을 자신의 집으로 초대할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "I'm making homemade pizza tonight. Want to come over?",
    "examples": [
      "Come over whenever you're free this week.",
      "She came over to help me set up my new furniture.",
      "My friends are coming over on Saturday night for a movie."
    ],
    "dialogue": {
      "a": "I'm making homemade pasta tonight. Want to come over?",
      "b": "I'd love to! What time should I be there?"
    },
    "tip": "come over는 자신의 집에 상대방을 초대할 때 쓰는 구어 표현입니다.",
    "coreId": "come"
  },
  {
    "id": "basic-conversation-050",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 50,
    "expression": "book (reserve) '예약하다'",
    "usage": "또는 '예약이 꽉 찼다'고 표현할 때",
    "heading": "book (reserve) '예약하다' 또는 '예약이 꽉 찼다'고 표현할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "The hotel is fully booked this weekend.",
    "examples": [
      "I booked a table for two at the new Italian place.",
      "The flights are almost fully booked — you should hurry.",
      "Can I book a room for three nights?"
    ],
    "dialogue": {
      "a": "Let's eat at Sakura tonight.",
      "b": "I called already. They're fully booked — let's try somewhere else."
    },
    "tip": "book은 동사로 '예약하다', fully booked는 '예약이 꽉 찼다'는 뜻입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-051",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 51,
    "expression": "finish '~을",
    "usage": "끝내다'고 표현할 때",
    "heading": "finish '~을 끝내다'고 표현할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "I need to finish this report by five o'clock.",
    "examples": [
      "Did you finish reading that book yet?",
      "She finished cooking dinner just in time.",
      "I can't go out until I finish all my homework."
    ],
    "dialogue": {
      "a": "Are you almost done?",
      "b": "Almost! I just need to finish this last section."
    },
    "tip": "finish + -ing/명사로 어떤 일을 다 마쳤다거나 마쳐야 한다고 표현합니다.",
    "coreId": "need"
  },
  {
    "id": "basic-conversation-052",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 52,
    "expression": "consider",
    "usage": "무언가를 진지하게 고려 중임을 표현할 때",
    "heading": "consider 무언가를 진지하게 고려 중임을 표현할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "I'm considering moving to a new neighborhood.",
    "examples": [
      "Have you considered taking a gap year?",
      "She's considering going back to school for a master's degree.",
      "We're considering adopting a cat from the shelter."
    ],
    "dialogue": {
      "a": "Are you still at the same company?",
      "b": "For now, but I'm considering looking for a new job."
    },
    "tip": "consider + -ing는 어떤 일을 진지하게 고려 중이라는 뜻입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-053",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 53,
    "expression": "expecting '~을",
    "usage": "기다리고 있다'고 표현할 때",
    "heading": "expecting '~을 기다리고 있다'고 표현할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "I'm expecting a delivery this afternoon.",
    "examples": [
      "Are you expecting any guests tonight?",
      "He was expecting a call from the doctor.",
      "I'm expecting my brother to arrive around noon."
    ],
    "dialogue": {
      "a": "Are you waiting for someone?",
      "b": "Yes, I'm expecting my friend. She should be here any minute."
    },
    "tip": "be expecting + 명사는 무언가나 누군가를 기다리고 예상할 때 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-054",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 54,
    "expression": "present continuous (future)",
    "usage": "이미 정해진 가까운 미래 계획을 표현할 때",
    "heading": "present continuous (future) 이미 정해진 가까운 미래 계획을 표현할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "We're having dinner with the Kims on Friday.",
    "examples": [
      "I'm flying to Jeju Island next week.",
      "They're moving into their new place this Saturday.",
      "She's starting her new job on Monday morning."
    ],
    "dialogue": {
      "a": "Any plans for the long weekend?",
      "b": "We're driving to the coast on Saturday morning. It'll be great!"
    },
    "tip": "확정된 미래 계획은 현재진행형(be + -ing)으로도 자연스럽게 표현할 수 있습니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-055",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 55,
    "expression": "past continuous '~하는",
    "usage": "중이었다'는 과거 진행 상황 표현하기",
    "heading": "past continuous '~하는 중이었다'는 과거 진행 상황 표현하기",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "While I was cooking, the phone rang.",
    "examples": [
      "He called while I was taking a shower.",
      "She was studying when the power suddenly went out.",
      "What were you doing when I texted you earlier?"
    ],
    "dialogue": {
      "a": "Why didn't you pick up my call?",
      "b": "Sorry! I was washing the dishes when you called."
    },
    "tip": "was/were + -ing로 과거에 진행 중이던 행동을 표현합니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-056",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 56,
    "expression": "be done '~을",
    "usage": "다 마쳤다'고 표현할 때",
    "heading": "be done '~을 다 마쳤다'고 표현할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "Let me know when you're done.",
    "examples": [
      "I'm almost done with the dishes.",
      "Call me when you're done with the meeting.",
      "Are you done eating? Should I clear the table?"
    ],
    "dialogue": {
      "a": "Are you almost done in the bathroom?",
      "b": "Just one more minute! I'm almost done."
    },
    "tip": "be done (with)는 finish와 비슷하게 '다 끝났다'고 표현할 때 씁니다.",
    "coreId": "be"
  },
  {
    "id": "basic-conversation-057",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 57,
    "expression": "get together",
    "usage": "친구나 지인들이 모이자고 제안할 때",
    "heading": "get together 친구나 지인들이 모이자고 제안할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "We should get together soon.",
    "examples": [
      "It's been so long! Let's get together this week.",
      "The whole family gets together every Thanksgiving.",
      "Are we still getting together this Saturday?"
    ],
    "dialogue": {
      "a": "I feel like we haven't seen each other in forever.",
      "b": "I know! We should get together for dinner sometime soon."
    },
    "tip": "get together는 '만나다, 모이다'의 뜻으로, 사람들이 함께 시간을 보낼 때 씁니다.",
    "coreId": "get"
  },
  {
    "id": "basic-conversation-058",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 58,
    "expression": "feel free to",
    "usage": "자유롭게 ~해도 된다고 허락하거나 권유할 때",
    "heading": "feel free to 자유롭게 ~해도 된다고 허락하거나 권유할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "Feel free to ask me any questions.",
    "examples": [
      "Feel free to use my laptop while yours is charging.",
      "If you need anything, feel free to call me anytime.",
      "Feel free to help yourself to some snacks on the table."
    ],
    "dialogue": {
      "a": "Is it okay if I look around the store?",
      "b": "Of course! Feel free to browse as long as you like."
    },
    "tip": "feel free to + 동사는 '자유롭게 ~해도 됩니다'라는 친절한 허락 표현입니다.",
    "coreId": "ask"
  },
  {
    "id": "basic-conversation-059",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 59,
    "expression": "adjective + to-infinitive '기꺼이 ~할",
    "usage": "수 있다'고 감정과 함께 표현할 때",
    "heading": "adjective + to-infinitive '기꺼이 ~할 수 있다'고 감정과 함께 표현할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "I'm happy to help you with that.",
    "examples": [
      "She was surprised to hear the news.",
      "We're excited to start the new project next week.",
      "He was relieved to finally get some rest."
    ],
    "dialogue": {
      "a": "Would you mind explaining that part again?",
      "b": "Not at all! I'm glad to explain it as many times as you need."
    },
    "tip": "형용사 + to + 동사원형으로 어떤 감정의 이유나 반응을 나타낼 수 있습니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-060",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 60,
    "expression": "wh- + to-infinitive '무엇을/어떻게/어디서 ~할지'를",
    "usage": "표현할 때",
    "heading": "wh- + to-infinitive '무엇을/어떻게/어디서 ~할지'를 표현할 때",
    "chapterKo": "동사·시제 활용",
    "chapterEn": "Verbs & Tenses in Action",
    "model": "I'm not sure what to order.",
    "examples": [
      "Could you show me how to use this machine?",
      "I didn't know where to sit, so I waited by the door.",
      "She wasn't sure when to leave the party."
    ],
    "dialogue": {
      "a": "Have you decided where to go for vacation?",
      "b": "Not yet. I honestly can't decide where to go this year!"
    },
    "tip": "의문사 + to + 동사원형으로 선택이나 방법에 대한 불확실함을 표현합니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-061",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 61,
    "expression": "went + to-infinitive '~하기",
    "usage": "위해 ~에 갔다'고 표현할 때",
    "heading": "went + to-infinitive '~하기 위해 ~에 갔다'고 표현할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "I went to the market to buy some vegetables.",
    "examples": [
      "She went to the library to return some books.",
      "We went to the store to get a birthday cake.",
      "He went to the gym to work out after a stressful day."
    ],
    "dialogue": {
      "a": "Where did you go this morning?",
      "b": "I went to the post office to send a package to my sister."
    },
    "tip": "went to + 장소 + to + 동사원형으로 어디에 왜 갔는지 표현합니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-062",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 62,
    "expression": "I just wanted to",
    "usage": "무언가를 하려는 목적을 부드럽게 밝힐 때",
    "heading": "I just wanted to 무언가를 하려는 목적을 부드럽게 밝힐 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "I just wanted to say thank you.",
    "examples": [
      "I just wanted to let you know I'll be a little late.",
      "I just wanted to check if you got my message.",
      "I just wanted to apologize for what happened yesterday."
    ],
    "dialogue": {
      "a": "I just wanted to drop by and say hi.",
      "b": "Oh, that's so sweet! Come on in and sit down."
    },
    "tip": "I just wanted to + 동사는 어떤 행동의 부드러운 이유나 목적을 나타냅니다.",
    "coreId": "say"
  },
  {
    "id": "basic-conversation-063",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 63,
    "expression": "had to",
    "usage": "어떤 일을 꼭 해야 했다고 표현할 때",
    "heading": "had to 어떤 일을 꼭 해야 했다고 표현할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "I had to cancel my plans at the last minute.",
    "examples": [
      "We had to wait for over an hour at the restaurant.",
      "She had to take a taxi because she missed the bus.",
      "Did you have to work on the weekend again?"
    ],
    "dialogue": {
      "a": "Why weren't you at the party last night?",
      "b": "I had to stay home and take care of my sick dog."
    },
    "tip": "had to + 동사원형은 '~해야 했다'는 과거의 의무나 필요를 나타냅니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-064",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 64,
    "expression": "be about to",
    "usage": "곧 무언가를 하려 한다고 표현할 때",
    "heading": "be about to 곧 무언가를 하려 한다고 표현할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "We're about to start — are you ready?",
    "examples": [
      "The movie is about to start, so let's find our seats.",
      "I was about to call you when you texted me first.",
      "She's about to leave — call her quickly if you need her."
    ],
    "dialogue": {
      "a": "Wait! Don't leave yet.",
      "b": "I was just about to head out. What is it?"
    },
    "tip": "be about to + 동사원형은 '막 ~하려던 참이다'는 뜻입니다.",
    "coreId": "be"
  },
  {
    "id": "basic-conversation-065",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 65,
    "expression": "won't be able to '~을",
    "usage": "할 수 없을 것이다'고 정중하게 표현할 때",
    "heading": "won't be able to '~을 할 수 없을 것이다'고 정중하게 표현할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "I won't be able to come on Thursday.",
    "examples": [
      "He won't be able to attend the meeting tomorrow.",
      "I'm afraid I won't be able to stay for the whole event.",
      "She won't be able to pick you up — her car is in the shop."
    ],
    "dialogue": {
      "a": "Can you make it to the dinner on Friday?",
      "b": "I'm really sorry, but I won't be able to make it."
    },
    "tip": "won't be able to는 미래에 ~할 수 없다는 정중한 표현입니다.",
    "coreId": "be"
  },
  {
    "id": "basic-conversation-066",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 66,
    "expression": "why don't we/you just",
    "usage": "간단한 제안을 부드럽게 할 때",
    "heading": "why don't we/you just 간단한 제안을 부드럽게 할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "Why don't we just take a break?",
    "examples": [
      "Why don't you just call them and ask directly?",
      "Why don't we just order in tonight instead of cooking?",
      "Why don't you just tell her how you honestly feel?"
    ],
    "dialogue": {
      "a": "I can't decide what to make for dinner.",
      "b": "Why don't we just get some takeout? It's easier."
    },
    "tip": "Why don't we/you just + 동사원형?은 '그냥 ~하는 게 어떨까요?'라는 부드러운 제안입니다.",
    "coreId": "take"
  },
  {
    "id": "basic-conversation-067",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 67,
    "expression": "how do you like",
    "usage": "새로운 것이나 경험에 대해 어떻게 생각하는지 물을 때",
    "heading": "how do you like 새로운 것이나 경험에 대해 어떻게 생각하는지 물을 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "How do you like your new neighborhood?",
    "examples": [
      "How do you like working from home so far?",
      "How do you like your new job? Is it going well?",
      "How did you like the food at that restaurant?"
    ],
    "dialogue": {
      "a": "How do you like living in Busan so far?",
      "b": "I love it! The food and the beachside views are amazing."
    },
    "tip": "How do you like ~?는 새로운 경험이나 상황에 대한 의견을 묻는 표현입니다.",
    "coreId": "do"
  },
  {
    "id": "basic-conversation-068",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 68,
    "expression": "what is ~ like",
    "usage": "사람, 장소, 상황이 어떤지 물을 때",
    "heading": "what is ~ like 사람, 장소, 상황이 어떤지 물을 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "What's the weather like there today?",
    "examples": [
      "What's the new teacher like? Is she strict?",
      "What was the food like at the wedding reception?",
      "What's it like to live alone for the very first time?"
    ],
    "dialogue": {
      "a": "What's your new apartment like?",
      "b": "It's small but really cozy. I absolutely love it."
    },
    "tip": "What is ~ like?는 사람, 장소, 경험이 어떤지를 묻는 표현입니다.",
    "coreId": "like"
  },
  {
    "id": "basic-conversation-069",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 69,
    "expression": "feel like '~하고",
    "usage": "싶다/싶지 않다'고 기분과 의향을 표현할 때",
    "heading": "feel like '~하고 싶다/싶지 않다'고 기분과 의향을 표현할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "I don't feel like cooking tonight.",
    "examples": [
      "Do you feel like watching a movie tonight?",
      "I feel like something warm — maybe some soup.",
      "I don't feel like going out. Can we just stay in?"
    ],
    "dialogue": {
      "a": "What do you feel like for dinner tonight?",
      "b": "I feel like something light, like a salad or rice bowl."
    },
    "tip": "feel like + 명사/-ing는 지금 ~하고 싶다는 기분이나 욕구를 나타냅니다.",
    "coreId": "like"
  },
  {
    "id": "basic-conversation-070",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 70,
    "expression": "I'm glad",
    "usage": "어떤 일이 잘 되어서 기쁘다고 표현할 때",
    "heading": "I'm glad 어떤 일이 잘 되어서 기쁘다고 표현할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "I'm glad you could make it.",
    "examples": [
      "I'm glad the meeting went well.",
      "I'm so glad you enjoyed the dinner I made.",
      "I'm glad to hear that everything worked out in the end."
    ],
    "dialogue": {
      "a": "Thank you so much for all your help today.",
      "b": "Of course! I'm glad I could be there for you."
    },
    "tip": "I'm glad + 절은 어떤 상황에 대해 '다행이다, 기쁘다'고 표현할 때 씁니다.",
    "coreId": "make"
  },
  {
    "id": "basic-conversation-071",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 71,
    "expression": "if that's OK",
    "usage": "상대방의 동의를 부드럽게 구할 때",
    "heading": "if that's OK 상대방의 동의를 부드럽게 구할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "I'd like to leave a little early, if that's OK.",
    "examples": [
      "I'll bring a friend along, if that's OK with you.",
      "I'd like to change our reservation time, if that's OK.",
      "I'll sit here, if that's OK with everyone."
    ],
    "dialogue": {
      "a": "I was thinking of inviting a couple more people, if that's OK.",
      "b": "Of course! The more the merrier."
    },
    "tip": "if that's OK를 문장 끝에 붙이면 상대방에게 동의를 구하는 공손한 표현이 됩니다.",
    "coreId": "like"
  },
  {
    "id": "basic-conversation-072",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 72,
    "expression": "do you mind if '제가 ~해도",
    "usage": "될까요?'라고 정중하게 허락을 구할 때",
    "heading": "do you mind if '제가 ~해도 될까요?'라고 정중하게 허락을 구할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "Do you mind if I open the window?",
    "examples": [
      "Do you mind if I use your charger for a few minutes?",
      "Do you mind if I bring my dog along?",
      "Do you mind if we switch to different seats?"
    ],
    "dialogue": {
      "a": "Do you mind if I turn down the music a bit?",
      "b": "Go ahead — it was getting a little loud anyway."
    },
    "tip": "Do you mind if + 주어 + 동사?는 '~해도 괜찮으신가요?'라는 정중한 허락 요청입니다.",
    "coreId": "do"
  },
  {
    "id": "basic-conversation-073",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 73,
    "expression": "keep ~ing '계속해서 ~한다'고",
    "usage": "반복되는 행동을 표현할 때",
    "heading": "keep ~ing '계속해서 ~한다'고 반복되는 행동을 표현할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "My computer keeps crashing. It's so frustrating!",
    "examples": [
      "He kept checking his phone during the entire meeting.",
      "She kept asking me for advice but never seemed to take it.",
      "Don't give up — just keep trying and you'll get it!"
    ],
    "dialogue": {
      "a": "Have you finished that jigsaw puzzle yet?",
      "b": "Not yet. I keep putting the wrong pieces together!"
    },
    "tip": "keep + -ing는 '계속 ~하다'는 뜻으로, 반복되는 동작을 나타낼 때 씁니다.",
    "coreId": "keep"
  },
  {
    "id": "basic-conversation-074",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 74,
    "expression": "end up ~ing",
    "usage": "결국 어떻게 되었는지 표현할 때",
    "heading": "end up ~ing 결국 어떻게 되었는지 표현할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "We ended up staying at the party until midnight.",
    "examples": [
      "I ended up ordering the pasta — it was delicious.",
      "He missed his flight and ended up taking the next one.",
      "We ended up watching three episodes in a row."
    ],
    "dialogue": {
      "a": "Did you go to the beach yesterday?",
      "b": "No, it started raining, so we ended up going to a museum instead."
    },
    "tip": "end up + -ing는 처음 계획과 달리 '결국 ~하게 되었다'고 할 때 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-075",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 75,
    "expression": "have trouble ~ing '~하는",
    "usage": "데 어려움이 있다'고 부드럽게 표현할 때",
    "heading": "have trouble ~ing '~하는 데 어려움이 있다'고 부드럽게 표현할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "I have trouble falling asleep on Sunday nights.",
    "examples": [
      "She has trouble remembering new vocabulary.",
      "Do you have trouble getting up in the morning?",
      "He had a little trouble with the last question on the exam."
    ],
    "dialogue": {
      "a": "How are your English studies going?",
      "b": "Good overall, but I have trouble with pronunciation sometimes."
    },
    "tip": "have trouble + -ing는 '~하는 데 어려움을 겪다'는 뜻으로, 완곡하게 어려움을 표현합니다.",
    "coreId": "have"
  },
  {
    "id": "basic-conversation-076",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 76,
    "expression": "have ~ in mind",
    "usage": "이미 마음속에 특정 생각이나 계획이 있을 때",
    "heading": "have ~ in mind 이미 마음속에 특정 생각이나 계획이 있을 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "Do you have a specific place in mind for dinner?",
    "examples": [
      "I had a gift in mind, but I wasn't sure she'd like it.",
      "Do you have anyone in mind for the open position?",
      "We have a new project in mind for next quarter."
    ],
    "dialogue": {
      "a": "Do you have anything in mind for the weekend?",
      "b": "I was thinking of a picnic, if the weather is nice enough."
    },
    "tip": "have ~ in mind는 '~을 생각하고 있다, 염두에 두고 있다'는 표현입니다.",
    "coreId": "have"
  },
  {
    "id": "basic-conversation-077",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 77,
    "expression": "not used to '아직 ~에",
    "usage": "익숙하지 않다'고 표현할 때",
    "heading": "not used to '아직 ~에 익숙하지 않다'고 표현할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "I'm not used to eating breakfast so early.",
    "examples": [
      "She's not used to living in such a big city yet.",
      "I'm not used to driving on the right side of the road.",
      "He's not used to working night shifts — he's still adjusting."
    ],
    "dialogue": {
      "a": "How are you adapting to your new schedule?",
      "b": "It's okay, but I'm still not used to waking up at six."
    },
    "tip": "not used to + 명사/-ing는 '아직 ~에 익숙하지 않다'는 표현입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-078",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 78,
    "expression": "get + person + thing",
    "usage": "누군가를 위해 무언가를 가져다주었을 때",
    "heading": "get + person + thing 누군가를 위해 무언가를 가져다주었을 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "I got you a small souvenir from my trip.",
    "examples": [
      "Can you get me a cup of coffee while you're up?",
      "She got her dad a nice watch for his birthday.",
      "Let me get you a chair so you can sit down."
    ],
    "dialogue": {
      "a": "Oh, you didn't have to bring anything!",
      "b": "I saw it and thought of you. I just had to get you something."
    },
    "tip": "get + 사람 + 사물은 '~에게 ~을 사주다/가져다주다'는 뜻입니다.",
    "coreId": "get"
  },
  {
    "id": "basic-conversation-079",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 79,
    "expression": "owe + person + noun",
    "usage": "상대방에게 빚진 게 있다고 표현할 때",
    "heading": "owe + person + noun 상대방에게 빚진 게 있다고 표현할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "I owe you one for covering my shift.",
    "examples": [
      "You owe me ten dollars from last week, remember?",
      "I owe her a big apology — I completely forgot her birthday.",
      "Thanks for your help. I owe you a coffee!"
    ],
    "dialogue": {
      "a": "I paid for your parking this morning.",
      "b": "Really? Thank you so much! I owe you lunch for sure."
    },
    "tip": "owe + 사람 + 명사는 '~에게 ~을 빚지고 있다'는 표현입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-080",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 80,
    "expression": "let me + verb",
    "usage": "내가 무언가를 해주겠다고 자원할 때",
    "heading": "let me + verb 내가 무언가를 해주겠다고 자원할 때",
    "chapterKo": "제안·요청·완곡 표현",
    "chapterEn": "Suggestions, Requests & Softening",
    "model": "Let me carry that bag for you.",
    "examples": [
      "Let me check the menu and order for both of us.",
      "Let me know if you need anything else at all.",
      "Let me think about it and I'll get back to you soon."
    ],
    "dialogue": {
      "a": "This box is really heavy!",
      "b": "Let me help you with that — I'll carry it up the stairs."
    },
    "tip": "let me + 동사원형은 '내가 ~할게요'라고 도움을 자원하는 표현입니다.",
    "coreId": "let"
  },
  {
    "id": "basic-conversation-081",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 81,
    "expression": "let + person + verb '~가 ~하도록",
    "usage": "허락하다'고 표현할 때",
    "heading": "let + person + verb '~가 ~하도록 허락하다'고 표현할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "Let her make her own decision.",
    "examples": [
      "Will you let us stay for one more hour?",
      "Don't let the kids eat too much candy before dinner.",
      "Let him finish speaking before you respond."
    ],
    "dialogue": {
      "a": "Can Jake come with us tonight?",
      "b": "Of course! Let him come — I'd love that."
    },
    "tip": "let + 사람 + 동사원형은 '~가 ~하게 허락하다'는 사역 표현입니다.",
    "coreId": "let"
  },
  {
    "id": "basic-conversation-082",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 82,
    "expression": "perception verb + obj + ~ing",
    "usage": "감각동사 뒤에 목적어와 '-ing'로 경험 표현하기",
    "heading": "perception verb + obj + ~ing 감각동사 뒤에 목적어와 '-ing'로 경험 표현하기",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "I heard someone singing in the next room.",
    "examples": [
      "She could smell the cookies baking from down the hall.",
      "I felt a cold breeze coming through the open window.",
      "He noticed his neighbor's cat sleeping on his car."
    ],
    "dialogue": {
      "a": "Did you notice anything strange earlier tonight?",
      "b": "Yes! I heard the door opening by itself. It was a little creepy."
    },
    "tip": "see, hear, feel, smell 같은 지각동사 뒤에 목적어 + -ing를 써서 동작을 생생하게 표현합니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-083",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 83,
    "expression": "I can't believe + clause",
    "usage": "놀랍거나 믿기 어려운 일에 반응할 때",
    "heading": "I can't believe + clause 놀랍거나 믿기 어려운 일에 반응할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "I can't believe how fast this year went by!",
    "examples": [
      "I can't believe you finished the whole pizza by yourself!",
      "I can't believe they're closing that old bookstore downtown.",
      "I can't believe it's already December."
    ],
    "dialogue": {
      "a": "The concert tickets sold out in two minutes.",
      "b": "I can't believe it! We should have booked sooner."
    },
    "tip": "I can't believe + 절은 놀라움이나 믿기 어렵다는 감정을 강조할 때 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-084",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 84,
    "expression": "I'm sure + clause",
    "usage": "자신 있게 어떤 일이 그럴 것이라고 말할 때",
    "heading": "I'm sure + clause 자신 있게 어떤 일이 그럴 것이라고 말할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "I'm sure she'll feel better soon.",
    "examples": [
      "I'm sure you'll do great on the exam tomorrow.",
      "I'm sure they have a good reason for being late.",
      "Don't worry — I'm sure everything will work out just fine."
    ],
    "dialogue": {
      "a": "I'm a little nervous about my presentation.",
      "b": "Don't be! I'm sure you'll do an amazing job."
    },
    "tip": "I'm sure + 절은 확신을 가지고 상대방을 격려하거나 안심시킬 때 씁니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-085",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 85,
    "expression": "I'm not sure if",
    "usage": "확실하지 않다고 부드럽게 표현할 때",
    "heading": "I'm not sure if 확실하지 않다고 부드럽게 표현할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "I'm not sure if she's coming tonight.",
    "examples": [
      "I'm not sure if the café is still open at this hour.",
      "I'm not sure if I can make it there by seven.",
      "I'm not sure if this is the right way — let me check the map."
    ],
    "dialogue": {
      "a": "Is the museum free on Sundays?",
      "b": "I'm not sure if it's free, but I think there's a discount."
    },
    "tip": "I'm not sure if + 절은 불확실함을 정중하게 표현하는 방식입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-086",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 86,
    "expression": "talk to + person +",
    "usage": "특정 사람에게 어떤 주제로 이야기해야 한다고 표현",
    "heading": "talk to + person + about + topic 특정 사람과 어떤 주제로 이야기해야 한다고 표현",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "I really need to talk to my boss about this.",
    "examples": [
      "Have you talked to your doctor about your sleep issues?",
      "She wants to talk to her parents about her new plans.",
      "Let me talk to the manager about getting a full refund."
    ],
    "dialogue": {
      "a": "Are you still having problems with your neighbor?",
      "b": "Yeah. I think I really need to talk to him about it directly."
    },
    "tip": "talk to + 사람 + about + 주제로 특정 사람에게 특정 주제를 이야기하는 표현을 만듭니다.",
    "coreId": "talk"
  },
  {
    "id": "basic-conversation-087",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 87,
    "expression": "too + adj + for '~하기엔",
    "usage": "너무 ~하다'고 표현할 때",
    "heading": "too + adj + for '~하기엔 너무 ~하다'고 표현할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "This soup is too hot for me to eat right now.",
    "examples": [
      "That coat is too expensive for my budget.",
      "This box is too heavy for one person to carry alone.",
      "Is this movie too scary for the younger kids?"
    ],
    "dialogue": {
      "a": "Can you read this tiny print on the menu?",
      "b": "It's too small for me. Do you have a larger menu?"
    },
    "tip": "too + 형용사 + for는 '~에게는/~하기에는 너무 ~하다'는 표현입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-088",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 88,
    "expression": "adj + enough '충분히 ~하다'고",
    "usage": "표현할 때",
    "heading": "adj + enough '충분히 ~하다'고 표현할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "Is it warm enough outside to go for a walk?",
    "examples": [
      "The coffee isn't hot enough — can you heat it up a bit?",
      "She's confident enough to speak in front of a large crowd.",
      "Is this bag big enough for a three-day trip?"
    ],
    "dialogue": {
      "a": "Do you think the light in here is good enough to read?",
      "b": "For me it's fine, but you can turn on the lamp if you need."
    },
    "tip": "형용사 + enough는 '충분히 ~하다'는 뜻으로, 어떤 기준을 충족하는지 표현합니다.",
    "coreId": "go"
  },
  {
    "id": "basic-conversation-089",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 89,
    "expression": "less '더",
    "usage": "적게 ~하다'고 비교 표현하기",
    "heading": "less '더 적게 ~하다'고 비교 표현하기",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "I'm trying to spend less money on eating out.",
    "examples": [
      "She's been sleeping less since she started her new job.",
      "Let's try to use less plastic packaging this year.",
      "He spends less time on his phone now than he did before."
    ],
    "dialogue": {
      "a": "Have you been working out lately?",
      "b": "A bit. I'm also trying to eat less junk food these days."
    },
    "tip": "less + 명사/동사는 '더 적게 ~하다'는 비교 표현입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-090",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 90,
    "expression": "when was the last time",
    "usage": "마지막으로 무언가를 한 것이 언제였는지 물을 때",
    "heading": "when was the last time 마지막으로 무언가를 한 것이 언제였는지 물을 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "When was the last time you saw a movie in the theater?",
    "examples": [
      "When was the last time you took a real vacation?",
      "I can't even remember the last time I slept in past nine.",
      "When was the last time you cooked a full meal at home?"
    ],
    "dialogue": {
      "a": "This place brings back so many good memories!",
      "b": "Right? When was the last time we all hung out together like this?"
    },
    "tip": "When was the last time + 주어 + 동사?로 마지막으로 그 일을 한 게 언제였는지 자연스럽게 물어 봅니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-091",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 91,
    "expression": "I think + clause",
    "usage": "의견을 부드럽고 겸손하게 표현할 때",
    "heading": "I think + clause 의견을 부드럽고 겸손하게 표현할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "I think we should leave a bit earlier.",
    "examples": [
      "I think there's a café nearby — let me check the map.",
      "I don't think this is the right bus stop.",
      "I think she's already on her way here right now."
    ],
    "dialogue": {
      "a": "What do you think of this color for the walls?",
      "b": "I think it looks a bit too dark. Maybe something lighter?"
    },
    "tip": "I think + 절은 '~라고 생각해요'라며 의견을 부드럽게 표현합니다.",
    "coreId": "think"
  },
  {
    "id": "basic-conversation-092",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 92,
    "expression": "do you think + clause",
    "usage": "상대방의 의견을 정중하게 물을 때",
    "heading": "do you think + clause 상대방의 의견을 정중하게 물을 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "Do you think it'll rain this afternoon?",
    "examples": [
      "Do you think this gift is appropriate for the occasion?",
      "Do you think she'll like the surprise party?",
      "Do you think we have enough time to stop for lunch?"
    ],
    "dialogue": {
      "a": "Do you think the new café will be crowded on weekends?",
      "b": "Probably! Let's go early to make sure we get a seat."
    },
    "tip": "Do you think + 절?은 상대방의 생각이나 판단을 정중하게 묻는 표현입니다.",
    "coreId": "do"
  },
  {
    "id": "basic-conversation-093",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 93,
    "expression": "what makes you think",
    "usage": "상대방의 판단이나 생각의 근거를 물을 때",
    "heading": "what makes you think 상대방의 판단이나 생각의 근거를 물을 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "What makes you think she's upset?",
    "examples": [
      "What makes you think the store is already closed?",
      "What makes you think he doesn't like the plan?",
      "What made you think it was going to be so easy?"
    ],
    "dialogue": {
      "a": "I think the traffic will be really bad tonight.",
      "b": "What makes you think that? Is there something going on?"
    },
    "tip": "What makes you think ~?는 상대방의 생각의 이유나 근거를 묻는 표현입니다.",
    "coreId": "think"
  },
  {
    "id": "basic-conversation-094",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 94,
    "expression": "that explains why",
    "usage": "어떤 상황의 이유를 깨달았을 때 표현하기",
    "heading": "that explains why 어떤 상황의 이유를 깨달았을 때 표현하기",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "Oh, that explains why the road was so busy!",
    "examples": [
      "The café was closed — that explains why nobody was inside.",
      "She studied abroad! That explains why her English is so natural.",
      "Oh, that explains why he looked so exhausted this morning."
    ],
    "dialogue": {
      "a": "There was a big outdoor concert downtown last night.",
      "b": "Oh! That explains why I couldn't find parking anywhere."
    },
    "tip": "That explains why + 절은 어떤 상황의 이유를 깨달았을 때 쓰는 표현입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-095",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 95,
    "expression": "if you want",
    "usage": "상대방이 원하면 기꺼이 도와주겠다고 제안할 때",
    "heading": "if you want 상대방이 원하면 기꺼이 도와주겠다고 제안할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "I can come with you, if you want.",
    "examples": [
      "You can borrow my umbrella, if you want.",
      "We can stop and get coffee first, if you want.",
      "I can show you around the neighborhood, if you want."
    ],
    "dialogue": {
      "a": "I need to carry these boxes upstairs.",
      "b": "I can help you with that, if you want."
    },
    "tip": "if you want를 문장 끝에 붙이면 부드럽고 부담 없는 제안이 됩니다.",
    "coreId": "want"
  },
  {
    "id": "basic-conversation-096",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 96,
    "expression": "if you ever '혹시라도 ~하면'이라고",
    "usage": "미래 상황을 열어두며 표현할 때",
    "heading": "if you ever '혹시라도 ~하면'이라고 미래 상황을 열어두며 표현할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "If you ever need a place to stay, just call me.",
    "examples": [
      "If you ever visit Seoul, you absolutely have to try the street food.",
      "If you ever change your mind, just let me know.",
      "If you ever feel lonely, I'm just a phone call away."
    ],
    "dialogue": {
      "a": "I might be in your city sometime next month.",
      "b": "If you ever come, let's definitely meet up for coffee!"
    },
    "tip": "if you ever + 동사는 '언젠가 ~하게 되면'이라는 열린 가정을 만드는 표현입니다.",
    "coreId": "need"
  },
  {
    "id": "basic-conversation-097",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 97,
    "expression": "do you want me to",
    "usage": "상대방을 위해 무언가를 해주겠다고 제안할 때",
    "heading": "do you want me to 상대방을 위해 무언가를 해주겠다고 제안할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "Do you want me to pick you up from the station?",
    "examples": [
      "Do you want me to call and make a reservation?",
      "Do you want me to translate that for you?",
      "Do you want me to wait outside while you change?"
    ],
    "dialogue": {
      "a": "I need to return these books to the library.",
      "b": "Do you want me to drop them off? I'm heading that way."
    },
    "tip": "Do you want me to + 동사원형?은 '제가 ~해 드릴까요?'라는 자연스러운 제안 표현입니다.",
    "coreId": "do"
  },
  {
    "id": "basic-conversation-098",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 98,
    "expression": "present perfect negative",
    "usage": "한동안 무언가를 하지 못했다고 표현할 때",
    "heading": "present perfect negative 한동안 무언가를 하지 못했다고 표현할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "I haven't eaten ramen in a while.",
    "examples": [
      "She hasn't called me in a few weeks.",
      "We haven't had a good long rain in a very long time.",
      "I haven't seen that TV show in ages — is it still good?"
    ],
    "dialogue": {
      "a": "Let's go bowling this weekend!",
      "b": "Yes! I haven't gone bowling in forever. I'm in!"
    },
    "tip": "haven't + 과거분사 + in a while/ages는 '한동안 ~하지 않았다'는 표현입니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-099",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 99,
    "expression": "second conditional",
    "usage": "현재 사실과 다른 가정을 할 때",
    "heading": "second conditional 현재 사실과 다른 가정을 할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "If I had more free time, I'd learn to play the piano.",
    "examples": [
      "If I lived near the ocean, I'd go swimming every single day.",
      "What would you do if you won a free trip abroad?",
      "If she knew the answer, she'd tell us right away."
    ],
    "dialogue": {
      "a": "What would you do if you had a whole week off?",
      "b": "If I had a week off, I'd definitely travel somewhere new!"
    },
    "tip": "If + 주어 + 과거동사, 주어 + would + 동사원형으로 현재 상황과 다른 가정을 만듭니다.",
    "coreId": null
  },
  {
    "id": "basic-conversation-100",
    "sourceId": "basic-conversation",
    "sourceType": "basic-conversation",
    "sourceTitle": "기초 영어회화 100",
    "sourceLabel": "BASIC CONV",
    "no": 100,
    "expression": "I wish",
    "usage": "현재 사실과 달리 그랬으면 좋겠다고 표현할 때",
    "heading": "I wish 현재 사실과 달리 그랬으면 좋겠다고 표현할 때",
    "chapterKo": "문장 패턴·구문",
    "chapterEn": "Sentence Patterns & Structures",
    "model": "I wish I could speak three languages.",
    "examples": [
      "I wish I had studied harder back in high school.",
      "She wishes she lived a little closer to the beach.",
      "I wish the weekend were just a little bit longer!"
    ],
    "dialogue": {
      "a": "Doesn't this park look absolutely stunning in the fall?",
      "b": "It really does. I wish we could come here more often."
    },
    "tip": "I wish + 주어 + 과거동사로 현재 실현되지 않는 바람이나 아쉬움을 나타냅니다.",
    "coreId": null
  },
  {
    "id": "basic-001",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 1,
    "expression": "have",
    "usage": "소유하다 (possess/own)",
    "heading": "have 소유하다 (possess/own)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "I have a small blue notebook in the top drawer of my desk.",
    "examples": [
      "She has a cozy little apartment just two blocks from the park.",
      "He has three older sisters and one younger brother.",
      "Our office has a rooftop terrace with a fantastic view of the city."
    ],
    "dialogue": {
      "a": "Do you have a pen I can borrow for a minute?",
      "b": "Sure, I have a couple of extras right here in my bag."
    },
    "tip": "have는 소유를 나타낼 때 진행형을 쓰지 않아요. ✗ I am having a car. ✓ I have a car.",
    "coreId": "have"
  },
  {
    "id": "basic-002",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 2,
    "expression": "have",
    "usage": "경험하다 (have an experience)",
    "heading": "have 경험하다 (have an experience)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "We had such a relaxing time at the cabin by the lake last weekend.",
    "examples": [
      "I had a terrible headache for most of the afternoon yesterday.",
      "They had a long, meaningful conversation over dinner.",
      "She had a scary dream and woke up at three in the morning."
    ],
    "dialogue": {
      "a": "How was the concert last night?",
      "b": "Amazing — we had the best time. The band played for over two hours straight."
    },
    "tip": "have a good time, have fun, have a bad day처럼 have + 경험 명사 조합을 통째로 익혀 두세요.",
    "coreId": "have"
  },
  {
    "id": "basic-003",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 3,
    "expression": "have",
    "usage": "먹다·마시다 (eat/drink)",
    "heading": "have 먹다·마시다 (eat/drink)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "Let's have lunch together before you head out this afternoon.",
    "examples": [
      "I usually have a cup of coffee and toast in the morning.",
      "Would you like to have dinner with us at our place tonight?",
      "She had a salad and sparkling water for lunch."
    ],
    "dialogue": {
      "a": "Are you hungry? I'm about to have a snack.",
      "b": "I'd love that — I haven't had anything since breakfast."
    },
    "tip": "식사나 음료를 표현할 때 eat/drink 대신 have를 쓰면 더 자연스럽게 들려요. have a meal, have a coffee가 대표적이에요.",
    "coreId": "have"
  },
  {
    "id": "basic-004",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 4,
    "expression": "have ~해야",
    "usage": "한다 (have to — obligation)",
    "heading": "have ~해야 한다 (have to — obligation)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "I have to finish this report before I can leave the office today.",
    "examples": [
      "You have to show your ID at the entrance to get in.",
      "We have to leave by seven if we want to catch the early flight.",
      "He has to take his medication every morning with a full glass of water."
    ],
    "dialogue": {
      "a": "Can you hang out this evening?",
      "b": "I wish I could, but I have to study for my exam tomorrow."
    },
    "tip": "have to는 외부 규칙이나 상황에 의한 의무를 나타내요. must보다 덜 강하고 일상 대화에서 훨씬 자 주 쓰여요.",
    "coreId": "have"
  },
  {
    "id": "basic-005",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 5,
    "expression": "have",
    "usage": "개최하다·열다 (hold an event)",
    "heading": "have 개최하다·열다 (hold an event)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "They had a big family gathering at the house last Thanksgiving.",
    "examples": [
      "We're having a small going-away party for our colleague on Friday evening.",
      "The company has a staff picnic every summer in the local park.",
      "She had a birthday dinner at a rooftop restaurant with close friends."
    ],
    "dialogue": {
      "a": "What's the plan for Saturday evening?",
      "b": "We're having a little get-together at our place — maybe ten or twelve people."
    },
    "tip": "have a party / have a meeting처럼 'have + 행사 명사' 형태는 ~을 열다·개최하다는 뜻이에요.",
    "coreId": "have"
  },
  {
    "id": "basic-006",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 6,
    "expression": "have ~을 (남이)",
    "usage": "하게 하다 (causative: have sth done)",
    "heading": "have ~을 (남이) 하게 하다 (causative: have sth done)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "She had her apartment repainted a fresh shade of white before moving in.",
    "examples": [
      "I need to have my eyes tested — everything looks a bit blurry lately.",
      "They had the old tree in the backyard removed last spring.",
      "He had his suit dry-cleaned the night before the wedding."
    ],
    "dialogue": {
      "a": "Did you fix the roof yourself?",
      "b": "No way — I had it done by a licensed contractor."
    },
    "tip": "'have + 목적어 + 과거분사' 구조로 남에게 무언가를 시키거나 맡길 때 써요. get sth done도 같은 의미예요.",
    "coreId": "have"
  },
  {
    "id": "basic-007",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 7,
    "expression": "have",
    "usage": "특성을 지니다 (have a feature/quality)",
    "heading": "have 특성을 지니다 (have a feature/quality)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "My new neighbor has a remarkably warm and welcoming personality.",
    "examples": [
      "This little café has a cozy atmosphere that's perfect for studying.",
      "The old train station has beautiful stained-glass windows.",
      "She has an incredible eye for detail in her design work."
    ],
    "dialogue": {
      "a": "What's the new director like?",
      "b": "She has a calm leadership style and a sharp sense of strategy."
    },
    "tip": "사람이나 장소의 특성을 묘사할 때도 have를 써요. have a good personality, have a great view처 럼 추상·구체적 특성 모두에 쓸 수 있어요.",
    "coreId": "have"
  },
  {
    "id": "basic-008",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 8,
    "expression": "have",
    "usage": "진행하다·하다 (have a meeting/discussion)",
    "heading": "have 진행하다·하다 (have a meeting/discussion)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "We're having our weekly team check-in this afternoon at three o'clock.",
    "examples": [
      "The professors have a department seminar every other Friday.",
      "Let's have a quick call before we send the proposal out.",
      "They had a long discussion about the project timeline and priorities."
    ],
    "dialogue": {
      "a": "Are you free at two tomorrow?",
      "b": "I have a meeting until two-thirty, but I'm free right after that."
    },
    "tip": "have a meeting / have a discussion / have a chat처럼 have + 활동 명사는 어떤 활동을 진행하다 는 뜻이에요.",
    "coreId": "have"
  },
  {
    "id": "basic-009",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 9,
    "expression": "get",
    "usage": "받다·얻다 (receive/obtain)",
    "heading": "get 받다·얻다 (receive/obtain)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "I got an unexpected message from my old college roommate this morning.",
    "examples": [
      "She got a scholarship to study at a university abroad.",
      "Did you get the email I sent you earlier this afternoon?",
      "He got a well-deserved promotion after leading the big project."
    ],
    "dialogue": {
      "a": "Did you get the package I shipped last week?",
      "b": "Yes, I got it yesterday afternoon — thank you so much!"
    },
    "tip": "get은 receive보다 구어적이에요. 편지·이메일·선물·급여 등 다양한 것을 받을 때 폭넓게 쓸 수 있어 요.",
    "coreId": "get"
  },
  {
    "id": "basic-010",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 10,
    "expression": "get",
    "usage": "되다·변하다 (become — get + adjective)",
    "heading": "get 되다·변하다 (become — get + adjective)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "It gets really hot and humid here in the middle of summer.",
    "examples": [
      "He got frustrated when the internet kept cutting out.",
      "She got really excited when she heard about the surprise trip.",
      "The room gets very noisy around lunchtime every day."
    ],
    "dialogue": {
      "a": "How are things going with the new job?",
      "b": "It was rough at first, but I'm getting more comfortable with it every day."
    },
    "tip": "get + 형용사는 상태 변화를 나타내요. get tired, get nervous, get ready처럼 일상에서 매우 자주 쓰이는 패턴이에요.",
    "coreId": "get"
  },
  {
    "id": "basic-011",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 11,
    "expression": "get",
    "usage": "도착하다 (arrive at a place)",
    "heading": "get 도착하다 (arrive at a place)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "What time did you get to the hotel last night?",
    "examples": [
      "We got to the trailhead just as the sun was rising over the hills.",
      "She got home late because her connecting train was delayed.",
      "Call me when you get there so I know you arrived safely."
    ],
    "dialogue": {
      "a": "Did you get to the venue okay?",
      "b": "Yes, we got there about twenty minutes before the doors opened."
    },
    "tip": "get to + 장소는 arrive at + 장소보다 구어적이에요. get home, get here, get there는 to 없이 쓰 인다는 점 기억하세요.",
    "coreId": "get"
  },
  {
    "id": "basic-012",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 12,
    "expression": "get",
    "usage": "이해하다 (understand)",
    "heading": "get 이해하다 (understand)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "I didn't quite get what the instructor explained in the last slide.",
    "examples": [
      "Now I get it — you were talking about the second option, not the first.",
      "He still doesn't get why she was upset about that comment.",
      "It took me a while, but I finally got the joke at the end."
    ],
    "dialogue": {
      "a": "So the formula uses a negative exponent — does that make sense?",
      "b": "I think I get the idea, but could you show me one more example?"
    },
    "tip": "get = understand는 구어체에서 매우 자주 써요. I get it. / I don't get it. / Got it! 이 세 표현은 꼭 기억하세요.",
    "coreId": "get"
  },
  {
    "id": "basic-013",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 13,
    "expression": "get",
    "usage": "가져다 주다·가져오다 (fetch/bring)",
    "heading": "get 가져다 주다·가져오다 (fetch/bring)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "Could you get me a bottle of water from the fridge, please?",
    "examples": [
      "I'll get the umbrella from the closet before we head out.",
      "Can someone get a chair for the guest waiting in the hallway?",
      "She got a clean towel from the cabinet and handed it to him."
    ],
    "dialogue": {
      "a": "I'm way too comfortable on this couch to move.",
      "b": "I'll get you a blanket from the bedroom — you look cold."
    },
    "tip": "get = fetch는 가서 가져오다는 뜻이에요. bring과 비슷하지만 get은 가서 가져오는 행위 자체를 더 강조해요.",
    "coreId": "get"
  },
  {
    "id": "basic-014",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 14,
    "expression": "get ~되게",
    "usage": "하다 (get sth done)",
    "heading": "get ~되게 하다 (get sth done)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "I need to get my bicycle fixed before the weekend group ride.",
    "examples": [
      "She got her hair cut really short for the summer heat.",
      "We should get the furnace checked before the cold season starts.",
      "He got his resume reviewed by a professional career coach."
    ],
    "dialogue": {
      "a": "Is your car still in the shop?",
      "b": "Yeah, I'm getting the brakes replaced — should be done by Thursday."
    },
    "tip": "'get + 목적어 + 과거분사' 구조로 남에게 무언가를 맡기거나 시킬 때 써요. have sth done과 같은 뜻이지만 더 구어적이에요.",
    "coreId": "get"
  },
  {
    "id": "basic-015",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 15,
    "expression": "get ~할",
    "usage": "기회를 갖다 (get to + verb)",
    "heading": "get ~할 기회를 갖다 (get to + verb)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "We rarely get to visit family on the other side of the country.",
    "examples": [
      "Did you get to try the new taco place that just opened downtown?",
      "She finally got to meet her favorite author at a book signing event.",
      "I hope you get to see the northern lights while you're in Iceland."
    ],
    "dialogue": {
      "a": "You've been working so hard lately.",
      "b": "I know — I barely get to sleep eight hours on most nights."
    },
    "tip": "get to + 동사원형은 어떤 것을 할 기회나 특권을 갖다는 뜻이에요. 행운이나 특별한 경험을 표현할 때 자주 써요.",
    "coreId": "get"
  },
  {
    "id": "basic-016",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 16,
    "expression": "get",
    "usage": "시작하다·출발하다 (get going/started)",
    "heading": "get 시작하다·출발하다 (get going/started)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "Let's get started — we have a lot to cover before noon.",
    "examples": [
      "You'd better get moving or you'll definitely miss the bus.",
      "It's getting late — we really should get going soon.",
      "I couldn't get the conversation started because everyone seemed nervous."
    ],
    "dialogue": {
      "a": "Traffic is going to be terrible if we leave after five.",
      "b": "Then let's get going now and beat the rush hour."
    },
    "tip": "get going, get moving, get started는 모두 출발하다·시작하다는 뜻이에요. 일상 대화에서 가볍게 재촉할 때 쓰는 표현이에요.",
    "coreId": "get"
  },
  {
    "id": "basic-017",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 17,
    "expression": "get",
    "usage": "병에 걸리다 (catch an illness)",
    "heading": "get 병에 걸리다 (catch an illness)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "She got a really nasty cold the week before her big presentation.",
    "examples": [
      "I always seem to get sick right at the start of exam season.",
      "He got food poisoning after eating at that street stall.",
      "A lot of people get the flu every January when the weather turns cold."
    ],
    "dialogue": {
      "a": "You sound terrible — are you coming down with something?",
      "b": "I think so. I got a sore throat and a fever overnight."
    },
    "tip": "get a cold / get the flu / get sick처럼 병에 걸리다는 의미로 get을 써요. catch a cold와 같은 의미 이지만 get이 더 구어적이에요.",
    "coreId": "get"
  },
  {
    "id": "basic-018",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 18,
    "expression": "get",
    "usage": "설득하여 ~하게 하다 (get sb to + verb)",
    "heading": "get 설득하여 ~하게 하다 (get sb to + verb)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "I finally got my neighbor to return the power drill he borrowed.",
    "examples": [
      "She got the kids to clean their rooms before the guests arrived.",
      "How did you get him to agree to the new schedule so quickly?",
      "The teacher got the whole class to participate in the group discussion."
    ],
    "dialogue": {
      "a": "Did your dad say he'd come to the graduation ceremony?",
      "b": "It took some convincing, but I got him to agree to fly in for it."
    },
    "tip": "'get + 사람 + to + 동사원형' 구조로 설득하거나 요청해서 하게 만들다는 뜻이에요. make sb do와 달리 강제성이 없어요.",
    "coreId": "get"
  },
  {
    "id": "basic-019",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 19,
    "expression": "get",
    "usage": "잘 지내다 (get along with)",
    "heading": "get 잘 지내다 (get along with)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "My two cats get along surprisingly well with each other.",
    "examples": [
      "Do you get along well with your new roommates in the apartment?",
      "He gets along with almost everyone he meets — very easygoing.",
      "At first they argued a lot, but they get along much better now."
    ],
    "dialogue": {
      "a": "How's it going with the new team at the office?",
      "b": "Really well — I get along with everyone, and the manager is great."
    },
    "tip": "get along (with) = ~와 잘 지내다·사이가 좋다는 뜻의 구동사예요. get on (with)도 같은 의미로 쓰 여요.",
    "coreId": "get"
  },
  {
    "id": "basic-020",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 20,
    "expression": "get",
    "usage": "극복하다·회복하다 (get over)",
    "heading": "get 극복하다·회복하다 (get over)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "It took him a full week to get over the flu he caught on the trip.",
    "examples": [
      "She's still trying to get over the disappointment of losing the competition.",
      "I can't get over how stunning the coastline looked at sunrise.",
      "It's not easy to get over a difficult breakup, but time really does help."
    ],
    "dialogue": {
      "a": "Are you feeling any better after that stomach bug?",
      "b": "Finally, yes — it took about five days to fully get over it."
    },
    "tip": "get over = 극복하다·회복하다는 뜻이에요. 질병 회복뿐 아니라 감정적 어려움을 극복하는 상황에도 폭넓게 쓰여요.",
    "coreId": "get"
  },
  {
    "id": "basic-021",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 21,
    "expression": "get",
    "usage": "없애다·처분하다 (get rid of)",
    "heading": "get 없애다·처분하다 (get rid of)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "It's past time to get rid of these boxes piled up in the hallway.",
    "examples": [
      "She got rid of old clothes she hadn't worn in over two years.",
      "How do I get rid of this stubborn stain on my favorite jacket?",
      "They got rid of the old sofa to make room for a proper dining table."
    ],
    "dialogue": {
      "a": "Your garage looks so clean — what happened to all that stuff?",
      "b": "I spent the whole weekend getting rid of things I didn't need anymore."
    },
    "tip": "get rid of = 없애다·제거하다는 뜻이에요. 물건뿐 아니라 나쁜 습관이나 문제를 없앨 때도 쓸 수 있어 요.",
    "coreId": "get"
  },
  {
    "id": "basic-022",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 22,
    "expression": "make",
    "usage": "만들다·제작하다 (create/produce)",
    "heading": "make 만들다·제작하다 (create/produce)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "She makes incredible sourdough bread completely from scratch every weekend.",
    "examples": [
      "He makes his own furniture out of reclaimed wood from old barns.",
      "Let's make a playlist for the long road trip this weekend.",
      "She made a beautiful scrapbook of their travels as a gift for him."
    ],
    "dialogue": {
      "a": "That necklace is gorgeous — where did you get it?",
      "b": "I actually made it myself out of recycled silver wire."
    },
    "tip": "make는 재료와 노력으로 직접 만들다는 의미예요. cook과 달리 음식 외 모든 사물과 작품에도 쓸 수 있어요.",
    "coreId": "make"
  },
  {
    "id": "basic-023",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 23,
    "expression": "make ~하게",
    "usage": "만들다 (cause sb to feel/do)",
    "heading": "make ~하게 만들다 (cause sb to feel/do)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "The surprise ending of the film made me feel completely speechless.",
    "examples": [
      "The comedian's perfect timing made the entire audience burst out laughing.",
      "Heavy traffic always makes me feel anxious about being late.",
      "Her kind words made him feel so much better about the whole situation."
    ],
    "dialogue": {
      "a": "Why were you crying during the documentary?",
      "b": "It just made me feel so moved — I didn't expect the ending to be that emotional."
    },
    "tip": "'make + 목적어 + 형용사/동사원형' 구조예요. make me happy, make me laugh처럼 감정이나 행 동의 원인을 나타낼 때 써요.",
    "coreId": "make"
  },
  {
    "id": "basic-024",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 24,
    "expression": "make",
    "usage": "수입을 올리다 (earn/make money)",
    "heading": "make 수입을 올리다 (earn/make money)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "He makes a comfortable living as a freelance web developer.",
    "examples": [
      "She makes about a thousand dollars a month from her online shop.",
      "You can make extra income by renting out your spare bedroom.",
      "That small festival makes a surprising amount of money for the local economy."
    ],
    "dialogue": {
      "a": "Is it really possible to make good money from a food blog?",
      "b": "Absolutely — a friend of mine makes enough to cover rent just from sponsored posts."
    },
    "tip": "make money / make a living / make a profit처럼 'make + 돈 관련 명사' 구조로 수입과 이익을 표 현해요.",
    "coreId": "make"
  },
  {
    "id": "basic-025",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 25,
    "expression": "make",
    "usage": "해내다·도달하다 (make it — reach/manage)",
    "heading": "make 해내다·도달하다 (make it — reach/manage)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "We barely made it to the theater before the curtain went up.",
    "examples": [
      "I'm not sure I'll make it to dinner — my meeting might run very late.",
      "She trained for months and finally made it to the national finals.",
      "Did everyone make it home safely after the storm last night?"
    ],
    "dialogue": {
      "a": "I thought you weren't going to make it to the party!",
      "b": "I almost didn't — my earlier appointment ran way over time."
    },
    "tip": "make it = 제시간에 도착하다·해내다는 관용 표현이에요. Can you make it? / I'll try to make it.는 약속·참석 여부를 말할 때 자주 써요.",
    "coreId": "make"
  },
  {
    "id": "basic-026",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 26,
    "expression": "make",
    "usage": "결정·계획을 세우다 (make a decision/plan)",
    "heading": "make 결정·계획을 세우다 (make a decision/plan)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "They finally made a decision to relocate the whole team to the new building.",
    "examples": [
      "We need to make a solid plan before we start any renovation work.",
      "She made a promise to call her grandmother every Sunday evening.",
      "He made an appointment with the dentist for the following Tuesday."
    ],
    "dialogue": {
      "a": "Have you decided where you're going for summer vacation?",
      "b": "Not yet — we really need to make a decision by the end of this week."
    },
    "tip": "make a decision, make a plan, make a promise, make an appointment처럼 'make + 추상 명사' 덩어리 표현을 통째로 익혀 두세요.",
    "coreId": "make"
  },
  {
    "id": "basic-027",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 27,
    "expression": "make",
    "usage": "꾸며내다·화해하다 (make up — invent/reconcile)",
    "heading": "make 꾸며내다·화해하다 (make up — invent/reconcile)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "He made up a whole story about missing the bus, but no one believed him.",
    "examples": [
      "They had a huge argument last week but made up by the weekend.",
      "She made up a fun guessing game to keep the kids busy on the long drive.",
      "Stop making up excuses and just tell me what really happened."
    ],
    "dialogue": {
      "a": "Is that story about the lost trail actually true?",
      "b": "No, he totally made it up — he just wanted to sound adventurous."
    },
    "tip": "make up에는 이야기를 꾸며내다와 싸운 후 화해하다는 두 가지 뜻이 있어요. 문맥으로 구분할 수 있 어요.",
    "coreId": "make"
  },
  {
    "id": "basic-028",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 28,
    "expression": "take",
    "usage": "가져가다·지참하다 (take sth along)",
    "heading": "take 가져가다·지참하다 (take sth along)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "Don't forget to take your umbrella — the sky looks really grey today.",
    "examples": [
      "I always take a small notebook wherever I go, just in case.",
      "She took her guitar to the campfire and played a few songs.",
      "Make sure to take enough water on the hike — it's a long trail."
    ],
    "dialogue": {
      "a": "I'm leaving for the airport in about an hour.",
      "b": "Did you take your passport out of the drawer? Double-check before you leave!"
    },
    "tip": "take는 화자로부터 멀어지는 방향으로 가져가다는 뜻이에요. bring은 반대로 가져오다이니 방향을 헷갈리지 마세요.",
    "coreId": "take"
  },
  {
    "id": "basic-029",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 29,
    "expression": "take",
    "usage": "교통수단을 이용하다 (take a bus/train/taxi)",
    "heading": "take 교통수단을 이용하다 (take a bus/train/taxi)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "I usually take the express train to get to the city center faster.",
    "examples": [
      "She took a cab to the airport because her flight was very early.",
      "We decided to take the ferry instead of driving all the way around the bay.",
      "He takes the same subway line to commute every single morning."
    ],
    "dialogue": {
      "a": "How are you planning to get to the conference?",
      "b": "I'll take the train — it's faster and I can read on the way."
    },
    "tip": "take the bus/train/subway처럼 'take + 교통수단'은 그 수단을 이용한다는 뜻이에요. 미국 영어에 서는 ride the bus로도 쓸 수 있어요.",
    "coreId": "take"
  },
  {
    "id": "basic-030",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 30,
    "expression": "take",
    "usage": "약을 복용하다 (take medicine/pills)",
    "heading": "take 약을 복용하다 (take medicine/pills)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "The doctor told me to take two of these capsules every morning with food.",
    "examples": [
      "Have you been taking your vitamins regularly this winter?",
      "He forgot to take his blood pressure medication again this morning.",
      "You should take the antibiotic with food, not on an empty stomach."
    ],
    "dialogue": {
      "a": "This headache just won't go away.",
      "b": "Try taking an aspirin with a full glass of water — it usually helps."
    },
    "tip": "약을 복용하다는 뜻으로 take를 써요. drink medicine이 아니라 take medicine이 올바른 표현이에 요.",
    "coreId": "take"
  },
  {
    "id": "basic-031",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 31,
    "expression": "take",
    "usage": "시간·노력이 걸리다 (take time/effort)",
    "heading": "take 시간·노력이 걸리다 (take time/effort)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "It takes about thirty minutes to drive from my apartment to downtown.",
    "examples": [
      "Learning to play the drums takes real dedication and a lot of patience.",
      "How long does it take to get a response from customer support?",
      "Building truly meaningful relationships takes time and consistent effort."
    ],
    "dialogue": {
      "a": "How long did it take you to finish the whole design project?",
      "b": "It took about three weeks — there were quite a few revisions along the way."
    },
    "tip": "'It takes + 시간 + to + 동사원형' 구조로 ~하는 데 시간이 걸리다를 표현해요. It took me two hours to write this처럼 사람 목적어를 넣어도 돼요.",
    "coreId": "take"
  },
  {
    "id": "basic-032",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 32,
    "expression": "take",
    "usage": "받다·수락하다 (accept reservations/payments/criticism/responsibility)",
    "heading": "take 받다·수락하다 (accept reservations/payments/criticism/responsibility)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "The café on the corner doesn't take online reservations anymore.",
    "examples": [
      "This vending machine only takes coins, not paper bills.",
      "She took the criticism gracefully and promised to work on it.",
      "The company takes full responsibility for the delay in shipping."
    ],
    "dialogue": {
      "a": "Do you take credit cards here?",
      "b": "We take all major cards, and we also take contactless payments."
    },
    "tip": "take = accept의 의미로 결제 수단, 비판, 책임 등을 받아들이다는 뜻으로 폭넓게 쓰여요.",
    "coreId": "take"
  },
  {
    "id": "basic-033",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 33,
    "expression": "take",
    "usage": "사진을 찍다 (take a photo/picture)",
    "heading": "take 사진을 찍다 (take a photo/picture)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "He took some stunning photos of the city skyline at dusk.",
    "examples": [
      "Would you mind taking a photo of us in front of the fountain?",
      "She takes pictures of her meals and shares them on social media.",
      "They took dozens of photos at the wedding to remember every moment."
    ],
    "dialogue": {
      "a": "This view from the rooftop is absolutely incredible!",
      "b": "Let me take a few shots before the light fades — it's perfect right now."
    },
    "tip": "사진 찍는 행위는 take a photo / take a picture라고 해요. shoot a photo나 snap a photo도 같은 의미로 쓸 수 있어요.",
    "coreId": "take"
  },
  {
    "id": "basic-034",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 34,
    "expression": "do",
    "usage": "하다·수행하다 (perform/carry out an activity)",
    "heading": "do 하다·수행하다 (perform/carry out an activity)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "I need to do a few things before the grocery store closes tonight.",
    "examples": [
      "She does yoga and meditation every single morning before work.",
      "What did you do over the long holiday weekend?",
      "He does a fantastic job of managing his team under pressure."
    ],
    "dialogue": {
      "a": "You look completely exhausted — have you been busy?",
      "b": "Incredibly so. I've been doing three different projects at the same time."
    },
    "tip": "do는 다양한 활동을 수행할 때 폭넓게 쓰이는 동사예요. do the dishes / do homework / do a favor처럼 일상 활동에 자주 쓰여요.",
    "coreId": "do"
  },
  {
    "id": "basic-035",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 35,
    "expression": "like",
    "usage": "좋아하다·즐기다 (like/enjoy)",
    "heading": "like 좋아하다·즐기다 (like/enjoy)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "I really like hiking in the mountains on cool, crisp autumn days.",
    "examples": [
      "She likes reading historical novels before she goes to sleep.",
      "Do you like spicy food, or would you prefer something a bit milder?",
      "He likes to cook elaborate Sunday meals for his family."
    ],
    "dialogue": {
      "a": "What do you like to do in your free time?",
      "b": "I like playing board games with friends — it's a great way to relax."
    },
    "tip": "like + -ing와 like + to부정사는 모두 좋아하다는 뜻이에요. 미국 영어에서 두 형태 모두 자연스럽게 쓰여요.",
    "coreId": "like"
  },
  {
    "id": "basic-036",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 36,
    "expression": "see",
    "usage": "보다·관람하다·이해하다 (see/watch/understand)",
    "heading": "see 보다·관람하다·이해하다 (see/watch/understand)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "Did you see that documentary about the Amazon rainforest?",
    "examples": [
      "I can see why you're frustrated — the situation really isn't fair.",
      "We saw a live jazz band perform at the park last Sunday afternoon.",
      "Let me see if I can find that file you're looking for in the system."
    ],
    "dialogue": {
      "a": "Have you seen the new comedy at the theater downtown?",
      "b": "Not yet, but I'm planning to see it this weekend with my sister."
    },
    "tip": "see는 눈에 들어오다(수동적 인식)의 뜻이에요. watch는 의도적으로 지켜보다는 뜻이에요. I saw a bird. vs. I watched the game.으로 구분해요.",
    "coreId": "see"
  },
  {
    "id": "basic-037",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 37,
    "expression": "know",
    "usage": "알다·알고 있다 (know a fact/person/place)",
    "heading": "know 알다·알고 있다 (know a fact/person/place)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "I know a really wonderful sushi restaurant not far from the station.",
    "examples": [
      "Do you know how to get to the art museum from the city center?",
      "She knows five languages, including Arabic and Japanese.",
      "He knew right away that something was off about the whole situation."
    ],
    "dialogue": {
      "a": "I'm looking for a good mechanic in this area — any ideas?",
      "b": "I know someone great — he's honest and his prices are very fair."
    },
    "tip": "know는 상태 동사라 보통 진행형을 쓰지 않아요. ✗ I am knowing the answer. ✓ I know the answer.를 꼭 기억하세요.",
    "coreId": "know"
  },
  {
    "id": "basic-038",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 38,
    "expression": "work",
    "usage": "일하다 (do a job/work at a place)",
    "heading": "work 일하다 (do a job/work at a place)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "She works at a private clinic downtown as a physical therapist.",
    "examples": [
      "He worked as a barista for three years while finishing his degree.",
      "I work from home on Wednesdays and Fridays every week.",
      "My parents work incredibly hard every day to support the family."
    ],
    "dialogue": {
      "a": "Where do you work these days?",
      "b": "I work at a small nonprofit downtown — it's not glamorous, but I love the mission."
    },
    "tip": "work at + 회사·장소, work as + 직업·직책, work for + 고용주처럼 전치사에 따라 의미가 달라져요.",
    "coreId": "work"
  },
  {
    "id": "basic-039",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 39,
    "expression": "work",
    "usage": "작동하다·효과가 있다 (function/operate)",
    "heading": "work 작동하다·효과가 있다 (function/operate)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "The coffee machine in the break room stopped working again this morning.",
    "examples": [
      "The new sleep routine worked really well — I feel so much more rested.",
      "Does the Wi-Fi work in the conference room on the third floor?",
      "The strategy didn't work as planned, so they tried a completely different approach."
    ],
    "dialogue": {
      "a": "I can't figure out why the app keeps crashing on my phone.",
      "b": "Try uninstalling and reinstalling it — that usually works for me."
    },
    "tip": "work = 작동하다·효과가 있다는 뜻이에요. 기기·전략·방법 모두에 쓸 수 있어요. Does this work? / It's not working.은 아주 유용한 표현이에요.",
    "coreId": "work"
  },
  {
    "id": "basic-040",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 40,
    "expression": "go",
    "usage": "가다·이동하다 (go to a place)",
    "heading": "go 가다·이동하다 (go to a place)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "Let's go to the night market this Saturday and try some street food.",
    "examples": [
      "We went to a rooftop concert last weekend and it was truly amazing.",
      "She goes to the gym every single morning before work.",
      "Are you planning to go to the conference in Austin this year?"
    ],
    "dialogue": {
      "a": "Any plans for the long holiday weekend?",
      "b": "We're thinking about going to the coast for a couple of days."
    },
    "tip": "go + to + 장소, go + -ing는 영어에서 가장 기본적인 패턴이에요. go swimming / go shopping / go hiking처럼 레저 활동 앞에도 go를 써요.",
    "coreId": "go"
  },
  {
    "id": "basic-041",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 41,
    "expression": "go",
    "usage": "상태가 변하다 (go + adjective — go bad/wrong)",
    "heading": "go 상태가 변하다 (go + adjective — go bad/wrong)",
    "chapterKo": "가장 많이 쓰는 핵심 기본 동사",
    "chapterEn": "Core Everyday Verbs",
    "model": "The milk went sour because I forgot to put it back in the fridge.",
    "examples": [
      "Everything went quiet as the speaker walked up to the podium.",
      "The project went smoothly from start to finish — no major issues.",
      "His hair started to go grey when he was in his mid-thirties."
    ],
    "dialogue": {
      "a": "The leftovers in the back of the fridge smell really strange.",
      "b": "Yeah, I think they went bad a couple of days ago — just toss them."
    },
    "tip": "go + 형용사는 주로 나쁜 방향의 상태 변화를 나타내요. go bad, go wrong, go quiet처럼 사용해요.",
    "coreId": "go"
  },
  {
    "id": "basic-042",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 42,
    "expression": "go",
    "usage": "어울리다·잘 맞다 (go with — match)",
    "heading": "go 어울리다·잘 맞다 (go with — match)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "That bright yellow tie doesn't really go with your navy suit.",
    "examples": [
      "Do you think this brown belt goes with these black shoes?",
      "Lemon goes really well with grilled fish — it brightens the whole dish.",
      "The modern lamp doesn't quite go with the vintage furniture in that room."
    ],
    "dialogue": {
      "a": "What do you think — red scarf or blue?",
      "b": "Definitely the blue — it goes much better with your coat."
    },
    "tip": "go with = ~와 어울리다·잘 맞다는 뜻이에요. match와 비슷하지만 일상 대화에서는 go with이 훨씬 더 자연스럽게 들려요.",
    "coreId": "go"
  },
  {
    "id": "basic-043",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 43,
    "expression": "want",
    "usage": "원하다·바라다 (want/desire)",
    "heading": "want 원하다·바라다 (want/desire)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "I want to learn how to throw pottery on a wheel this year.",
    "examples": [
      "She wants a quieter lifestyle and has decided to move to a smaller town.",
      "Do you want some more coffee, or are you all set for now?",
      "He just wants to be heard and understood — that's all he's asking for."
    ],
    "dialogue": {
      "a": "What do you want to do after we finish washing the dishes?",
      "b": "I want to watch that new series everyone at work has been talking about."
    },
    "tip": "want은 상태 동사라 진행형을 잘 쓰지 않아요. ✗ I am wanting. ✓ I want. 단, 비격식 구어에서 I'm wanting to...를 가끔 쓰기도 해요.",
    "coreId": "want"
  },
  {
    "id": "basic-044",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 44,
    "expression": "say",
    "usage": "말하다·전달하다 (say/state)",
    "heading": "say 말하다·전달하다 (say/state)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "The weather app says it's going to be cloudy and cool tomorrow.",
    "examples": [
      "She said she'd call back as soon as her meeting was over.",
      "What did the doctor say about the results from your checkup?",
      "The sign on the door says the shop opens at ten in the morning."
    ],
    "dialogue": {
      "a": "What did the instructor say about the final exam format?",
      "b": "She said it'll be open-book, but we still need to know all the formulas."
    },
    "tip": "say는 전달된 말의 내용을 강조해요. tell과 달리 say는 사람 목적어 앞에 to가 필요해요. She said to me. (not: She said me.)를 기억하세요.",
    "coreId": "say"
  },
  {
    "id": "basic-045",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 45,
    "expression": "let",
    "usage": "허락하다·허용하다 (let sb do sth)",
    "heading": "let 허락하다·허용하다 (let sb do sth)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "My parents let me stay out until midnight on weekend nights.",
    "examples": [
      "The security guard didn't let us in without a valid photo ID.",
      "Could you let the dog out into the yard before you leave?",
      "She let her students choose their own topics for the final essay."
    ],
    "dialogue": {
      "a": "Did your roommate let you use his car for the day?",
      "b": "Yeah, he was kind enough to let me borrow it for the whole afternoon."
    },
    "tip": "'let + 목적어 + 동사원형' 구조예요. allow to와 같은 뜻이지만 let 다음에는 to 없이 동사원형이 바로 와요. ✓ Let me go. ✗ Let me to go.",
    "coreId": "let"
  },
  {
    "id": "basic-046",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 46,
    "expression": "let ~하도록",
    "usage": "내버려 두다 (let sb + verb — give freedom)",
    "heading": "let ~하도록 내버려 두다 (let sb + verb — give freedom)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "She let her little cousin pick whatever toppings he wanted on the pizza.",
    "examples": [
      "Just let the bread dough rest for an hour — don't rush the process.",
      "He let the conversation go in whatever direction felt most natural.",
      "They let the kids run around freely in the park all afternoon."
    ],
    "dialogue": {
      "a": "Should I jump in and help with that section of the project?",
      "b": "Let her handle it — she's been wanting to take the lead on something like this."
    },
    "tip": "let은 허락뿐 아니라 방해하지 않고 ~하도록 두다는 뜻도 있어요. let it go / let things happen naturally처럼 자유롭게 내버려 두는 상황에 써요.",
    "coreId": "let"
  },
  {
    "id": "basic-047",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 47,
    "expression": "let",
    "usage": "알리다 (let sb know)",
    "heading": "let 알리다 (let sb know)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "Please let me know if you need any help setting up the equipment.",
    "examples": [
      "Let me know when you arrive and I'll come downstairs to meet you.",
      "She let us know about the schedule change as soon as she found out.",
      "If anything urgent comes up, just let your supervisor know right away."
    ],
    "dialogue": {
      "a": "I'm not sure yet if I can make it to dinner on Saturday.",
      "b": "That's totally fine — just let me know either way before Friday evening."
    },
    "tip": "let sb know = ~에게 알리다는 매우 자주 쓰이는 표현이에요. inform과 같은 의미이지만 훨씬 구어 적이에요.",
    "coreId": "let"
  },
  {
    "id": "basic-048",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 48,
    "expression": "give",
    "usage": "주다·건네다 (give/hand over)",
    "heading": "give 주다·건네다 (give/hand over)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "She gave me her old cookbook because she knew how much I love to cook.",
    "examples": [
      "He gave the cashier exact change to avoid getting coins back.",
      "Could you give me a hand moving this heavy bookshelf?",
      "She gave a short but heartfelt speech at the retirement party."
    ],
    "dialogue": {
      "a": "I really don't know how to thank you for everything last week.",
      "b": "Please — give me a call anytime you need help. That's what friends are for."
    },
    "tip": "'give + 사람 + 사물' 또는 'give + 사물 + to + 사람' 형태로 써요. give me a call / give it a try처럼 추상적인 것을 건네다는 의미로도 자주 쓰여요.",
    "coreId": "give"
  },
  {
    "id": "basic-049",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 49,
    "expression": "give",
    "usage": "포기하다 (give up — stop trying)",
    "heading": "give 포기하다 (give up — stop trying)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "Don't give up on your goal just because it's taking longer than you expected.",
    "examples": [
      "She nearly gave up during the marathon but pushed through and crossed the finish line.",
      "He gave up eating sugar entirely after his doctor's strong advice.",
      "Never give up on the things in life that make you feel truly alive."
    ],
    "dialogue": {
      "a": "I've been working on this puzzle for three days and I'm losing my mind.",
      "b": "Don't give up — you're so close! The edges are almost done."
    },
    "tip": "give up = 포기하다는 뜻이에요. give up on someone/something처럼 구체적인 대상을 추가하면 ~을 포기하다는 의미가 돼요.",
    "coreId": "give"
  },
  {
    "id": "basic-050",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 50,
    "expression": "keep",
    "usage": "보관하다·간직하다 (keep = retain/hold onto)",
    "heading": "keep 보관하다·간직하다 (keep = retain/hold onto)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "Please keep your boarding pass and ID with you until you reach the gate.",
    "examples": [
      "I always keep a spare key under a pot on the back porch.",
      "She keeps all her old letters in a shoebox under her bed.",
      "The restaurant keeps a list of regulars and their dietary preferences."
    ],
    "dialogue": {
      "a": "Should I throw away these old receipts?",
      "b": "Keep them for at least a month — just in case you need to return something."
    },
    "tip": "keep = 보관하다·간직하다는 뜻이에요. keep a secret (비밀을 지키다)처럼 추상적인 것을 지키는 의미로도 자주 써요.",
    "coreId": "keep"
  },
  {
    "id": "basic-051",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 51,
    "expression": "keep",
    "usage": "계속 ~하다 (keep + -ing — continue doing)",
    "heading": "keep 계속 ~하다 (keep + -ing — continue doing)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "He kept checking his phone throughout the lecture because he had another class right after.",
    "examples": [
      "She keeps forgetting to reply to emails — it drives her coworkers a little crazy.",
      "The neighbor's dog kept barking all night and woke everyone up.",
      "Keep practicing your scales every day and you'll improve much faster."
    ],
    "dialogue": {
      "a": "You look annoyed — what's going on?",
      "b": "This app keeps crashing every time I try to open it. So frustrating."
    },
    "tip": "'keep + 동사-ing' = 계속 ~하다는 뜻이에요. 반복이나 지속적인 행동을 표현하며, 때로는 짜증이나 불편함의 뉘앙스를 담기도 해요.",
    "coreId": "keep"
  },
  {
    "id": "basic-052",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 52,
    "expression": "keep ~한",
    "usage": "상태로 유지하다 (keep + object + adjective)",
    "heading": "keep ~한 상태로 유지하다 (keep + object + adjective)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "Keep the soup warm on low heat until everyone is ready to sit down and eat.",
    "examples": [
      "She keeps her bedroom very tidy — everything always has its own place.",
      "Keep the wound dry and clean to help it heal as fast as possible.",
      "He always keeps his phone charged so he's never caught with a dead battery."
    ],
    "dialogue": {
      "a": "The plants look a little droopy — should I do something?",
      "b": "Just keep the soil moist — not soaking wet, just lightly moist — and they'll perk right up."
    },
    "tip": "'keep + 목적어 + 형용사' = ~을 ~한 상태로 유지하다는 뜻이에요. keep it warm / keep the door open처럼 상태 유지를 나타내요.",
    "coreId": "keep"
  },
  {
    "id": "basic-053",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 53,
    "expression": "leave",
    "usage": "떠나다·출발하다 (leave = depart)",
    "heading": "leave 떠나다·출발하다 (leave = depart)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "What time does the last express train leave for the city center?",
    "examples": [
      "She left early to avoid the heavy morning rush on the highway.",
      "The ferry leaves from the east dock every hour on the half hour.",
      "We should leave by eight if we want to get there before the crowd."
    ],
    "dialogue": {
      "a": "When are you leaving for the airport?",
      "b": "I'm leaving around noon — my flight isn't until four, but I like to be early."
    },
    "tip": "leave for + 목적지 = ~을 향해 출발하다는 뜻이에요. leave home, leave early처럼 장소나 시간 부 사와 함께 자주 쓰여요.",
    "coreId": null
  },
  {
    "id": "basic-054",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 54,
    "expression": "leave",
    "usage": "두고 오다·남기다 (leave sth somewhere)",
    "heading": "leave 두고 오다·남기다 (leave sth somewhere)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "I think I left my phone on the kitchen counter this morning.",
    "examples": [
      "He left a short note on the fridge for his roommate before heading out.",
      "She accidentally left her umbrella on the subway again.",
      "Please don't leave dirty dishes in the sink overnight."
    ],
    "dialogue": {
      "a": "Have you seen my glasses anywhere? I can't find them.",
      "b": "You left them on the coffee table last night — they're right there."
    },
    "tip": "leave sth somewhere = ~에 무언가를 두다·놓고 오다는 뜻이에요. 실수로 두고 올 때도, 의도적으 로 남길 때도 모두 leave를 써요.",
    "coreId": "think"
  },
  {
    "id": "basic-055",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 55,
    "expression": "leave",
    "usage": "내버려 두다·혼자 있게 하다 (leave alone)",
    "heading": "leave 내버려 두다·혼자 있게 하다 (leave alone)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "Just leave her alone — she needs a bit of quiet time to herself.",
    "examples": [
      "Leave the cat alone when she's eating — she really doesn't like to be bothered.",
      "I wish people would just leave me alone when I'm working in a café.",
      "Sometimes the best thing you can do is leave a situation alone and let it resolve itself."
    ],
    "dialogue": {
      "a": "Should I go check on him? He's been in his room for a while.",
      "b": "I'd leave him alone for now — he said he needed a bit of space."
    },
    "tip": "leave sb alone = ~를 내버려 두다·혼자 있게 하다는 뜻이에요. 상대방을 귀찮게 하지 말라는 표현으 로 자주 쓰여요.",
    "coreId": null
  },
  {
    "id": "basic-056",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 56,
    "expression": "bring",
    "usage": "가져오다·데려오다 (bring)",
    "heading": "bring 가져오다·데려오다 (bring)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "Can you bring some snacks for our study session tonight?",
    "examples": [
      "She brought homemade cookies to the office and everyone absolutely loved them.",
      "He brought a friend along to the outdoor movie screening in the park.",
      "Remember to bring your own towel to the pool — they don't provide them."
    ],
    "dialogue": {
      "a": "What should I bring to the dinner party on Friday?",
      "b": "Just bring yourself — but if you'd like, a bottle of wine would be lovely."
    },
    "tip": "bring은 화자 쪽으로 가져오다는 뜻이에요. take는 반대 방향으로 가져가다예요. Bring it here / Take it there로 방향을 기억하세요.",
    "coreId": null
  },
  {
    "id": "basic-057",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 57,
    "expression": "head",
    "usage": "향하다·출발하다 (head to/for — move toward)",
    "heading": "head 향하다·출발하다 (head to/for — move toward)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "We headed straight to the beach right after work on Friday afternoon.",
    "examples": [
      "It's getting late — I should head home before it starts raining.",
      "They headed for the mountains as soon as the snow report looked promising.",
      "He headed straight to the kitchen the moment he got home from work."
    ],
    "dialogue": {
      "a": "The party is winding down — are you thinking about leaving soon?",
      "b": "Yeah, I'm about to head out — I have an early meeting tomorrow morning."
    },
    "tip": "head to/for + 장소 = ~을 향해 가다·출발하다는 뜻이에요. go보다 방향성이 강하고 이동을 시작하 는 순간을 강조해요.",
    "coreId": "work"
  },
  {
    "id": "basic-058",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 58,
    "expression": "come",
    "usage": "오다·방문하다 (come to a place)",
    "heading": "come 오다·방문하다 (come to a place)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "Come by anytime this weekend — we're always happy to have visitors.",
    "examples": [
      "Can you come over this evening and help me put together this bookshelf?",
      "She came home to find a lovely birthday surprise waiting for her.",
      "A package came for you while you were out — I signed for it."
    ],
    "dialogue": {
      "a": "We're having a small barbecue on Sunday — can you come?",
      "b": "I'd love to! What time should I be there?"
    },
    "tip": "come은 화자 또는 상대방이 있는 곳 쪽으로 이동할 때 써요. go와 반대로, 상대방의 위치로 이동할 때 come을 써요.",
    "coreId": "come"
  },
  {
    "id": "basic-059",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 59,
    "expression": "put",
    "usage": "놓다·두다 (put = place)",
    "heading": "put 놓다·두다 (put = place)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "Put the fresh flowers in a vase and place them on the dining room table.",
    "examples": [
      "She put her bag down on the bench and sat down beside it.",
      "Could you put these books back on the shelf once you're done with them?",
      "He always puts his keys on the hook by the front door so he never loses them."
    ],
    "dialogue": {
      "a": "Where should I put the extra chairs for tonight?",
      "b": "Just put them in the corner by the window — they'll be out of the way there."
    },
    "tip": "put은 항상 위치 정보(전치사구)와 함께 쓰여요. ✗ Put it. ✓ Put it on the table.처럼 어디에 놓는지 가 반드시 있어야 해요.",
    "coreId": "put"
  },
  {
    "id": "basic-060",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 60,
    "expression": "put",
    "usage": "미루다 (put off = postpone)",
    "heading": "put 미루다 (put off = postpone)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "I keep putting off that dentist appointment — I really need to just book it already.",
    "examples": [
      "Don't put off replying to important emails — it only makes things more stressful.",
      "She put the team meeting off until next Thursday to give everyone more time.",
      "He's been putting off clearing out the garage for months now."
    ],
    "dialogue": {
      "a": "Have you called the landlord about the broken heater yet?",
      "b": "Not yet — I keep putting it off, but I really should do it today."
    },
    "tip": "put off = 미루다·연기하다는 뜻이에요. delay와 같은 의미이지만 put off이 훨씬 구어적이에요. Don't put things off!는 일상에서 자주 들리는 표현이에요.",
    "coreId": "put"
  },
  {
    "id": "basic-061",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 61,
    "expression": "feel",
    "usage": "느끼다·기분이 ~하다 (feel — sense/emotion)",
    "heading": "feel 느끼다·기분이 ~하다 (feel — sense/emotion)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "I feel a little uneasy about presenting in front of such a large audience.",
    "examples": [
      "She feels really comfortable speaking in front of groups since joining the debate club.",
      "He felt a sudden rush of relief when he heard the good news.",
      "Do you feel like going for a walk? The weather outside is perfect."
    ],
    "dialogue": {
      "a": "How do you feel about the outcome of today's meeting?",
      "b": "Honestly, I feel pretty good about it — I think we made real progress."
    },
    "tip": "feel like + 명사/-ing는 ~가 하고 싶다는 뜻이에요. I feel like pizza / I feel like going out처럼 원하 는 것을 가볍게 표현할 때 아주 자주 써요.",
    "coreId": null
  },
  {
    "id": "basic-062",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 62,
    "expression": "turn",
    "usage": "변하다·바뀌다 (turn + color/state)",
    "heading": "turn 변하다·바뀌다 (turn + color/state)",
    "chapterKo": "기본기를 다지는 필수 동사",
    "chapterEn": "Essential Building-Block Verbs",
    "model": "The leaves turn a brilliant orange and red every autumn in New England.",
    "examples": [
      "His face turned bright red when everyone in the room started clapping for him.",
      "The sky turned dark grey just minutes before the storm moved in.",
      "She turned very quiet after the phone call, which worried everyone."
    ],
    "dialogue": {
      "a": "What happened to the milk I put in the back of the fridge?",
      "b": "It turned sour — I think it was a day past the expiration date."
    },
    "tip": "turn + 형용사 = (색·상태가) 변하다는 뜻이에요. go + 형용사와 비슷하지만, turn은 색깔이나 눈에 보이는 변화에 더 자주 쓰여요.",
    "coreId": "turn"
  },
  {
    "id": "basic-063",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 63,
    "expression": "move",
    "usage": "이사하다·이동하다 (move — relocate/shift)",
    "heading": "move 이사하다·이동하다 (move — relocate/shift)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "They moved to a quieter neighborhood when their first child started elementary school.",
    "examples": [
      "Can you help me move this heavy couch a little to the left?",
      "She moved her office from the ground floor up to the third floor.",
      "The whole company headquarters moved from Chicago to Austin last year."
    ],
    "dialogue": {
      "a": "I heard you're moving — is that true?",
      "b": "Yes! We're moving to a bigger place across town — we really need more space."
    },
    "tip": "move는 이동하다와 이사하다 두 가지 뜻이에요. move to + 장소 = ~로 이사하다, move sth = 무언 가를 움직이다로 구분해서 써요.",
    "coreId": null
  },
  {
    "id": "basic-064",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 64,
    "expression": "run",
    "usage": "운영하다·관리하다 (run a business/organization)",
    "heading": "run 운영하다·관리하다 (run a business/organization)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "She runs a small but very successful online tutoring business from home.",
    "examples": [
      "He runs the entire IT department with a lean team of only four people.",
      "They run a popular food truck at the weekend farmers' market.",
      "Her aunt has been running that flower shop downtown for over twenty years."
    ],
    "dialogue": {
      "a": "Is this your shop? You seem so young to be a business owner.",
      "b": "I've been running it for two years now — started right after I finished college."
    },
    "tip": "run a business / run a program처럼 'run + 명사'로 운영·관리하다를 표현해요. manage와 바꿔 쓸 수 있지만 run이 더 구어적이에요.",
    "coreId": "run"
  },
  {
    "id": "basic-065",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 65,
    "expression": "try",
    "usage": "해 보다·시도하다 (try = attempt/taste)",
    "heading": "try 해 보다·시도하다 (try = attempt/taste)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "Try the lemon tart — it's honestly the best thing on the menu today.",
    "examples": [
      "I tried calling her three times but never managed to get an answer.",
      "He tried a new route to work and it was actually ten minutes faster.",
      "Have you ever tried rock climbing? It's way more fun than it looks."
    ],
    "dialogue": {
      "a": "I can't figure out how to open this jar — it's stuck tight.",
      "b": "Try running the lid under warm water first — that usually loosens it."
    },
    "tip": "try + -ing는 시험 삼아 해 보다, try + to부정사는 ~하려고 노력하다는 뜻으로 미묘하게 달라요. Try calling him. vs. Try to be on time.으로 비교해 보세요.",
    "coreId": null
  },
  {
    "id": "basic-066",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 66,
    "expression": "stand",
    "usage": "참다·견디다 (can't stand = can't tolerate)",
    "heading": "stand 참다·견디다 (can't stand = can't tolerate)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "I simply cannot stand waiting in line for more than ten minutes.",
    "examples": [
      "She can't stand the smell of cigarette smoke in enclosed spaces.",
      "How do you stand the noise from the construction site every single morning?",
      "He won't stand for rude behavior toward any member of his staff."
    ],
    "dialogue": {
      "a": "Can't you just ignore the noise from next door?",
      "b": "I've tried, but I really can't stand it when it goes past midnight."
    },
    "tip": "can't stand + 명사/-ing = ~을 참을 수 없다는 뜻이에요. can't bear, can't tolerate와 같은 의미이 지만 can't stand이 구어에서 가장 자연스럽게 쓰여요.",
    "coreId": null
  },
  {
    "id": "basic-067",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 67,
    "expression": "break",
    "usage": "어기다·깨다 (break a promise/rule)",
    "heading": "break 어기다·깨다 (break a promise/rule)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "He broke his promise to call every week, and she was truly hurt by that.",
    "examples": [
      "Please don't break the rules — they exist to keep everyone safe.",
      "She accidentally broke her favorite mug while washing the dishes.",
      "The startup broke records by reaching a million users in under two weeks."
    ],
    "dialogue": {
      "a": "We agreed to always be honest with each other — no exceptions.",
      "b": "I know, and I'm really sorry I broke that trust. I should have told you sooner."
    },
    "tip": "break은 깨뜨리다는 물리적 의미 외에 break a promise, break the rules, break a record처럼 추 상적 의미로도 매우 자주 쓰여요.",
    "coreId": "break"
  },
  {
    "id": "basic-068",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 68,
    "expression": "hurt",
    "usage": "아프다·상처 주다 (hurt — physical/emotional pain)",
    "heading": "hurt 아프다·상처 주다 (hurt — physical/emotional pain)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "My shoulders and neck hurt after sitting at my desk for eight straight hours.",
    "examples": [
      "She hurt her knee during the basketball game and had to sit out.",
      "His harsh comment really hurt her feelings, even if he didn't mean it that way.",
      "Does it hurt when I press here on your lower back?"
    ],
    "dialogue": {
      "a": "You seem to be limping — is everything okay?",
      "b": "I twisted my ankle during my run this morning. It hurts a bit when I walk."
    },
    "tip": "hurt은 신체 부위가 주어로 올 수도 있고(My back hurts.), 'hurt + 목적어'로 상처를 주는 경우(It hurt my feelings.)도 가능해요.",
    "coreId": null
  },
  {
    "id": "basic-069",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 69,
    "expression": "notice",
    "usage": "알아채다·주목하다 (notice = observe/become aware)",
    "heading": "notice 알아채다·주목하다 (notice = observe/become aware)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "Did you notice how clean and well-organized the new office layout is?",
    "examples": [
      "She noticed a strange noise coming from the engine while driving on the highway.",
      "I didn't notice you'd cut your hair until you turned around just now.",
      "He noticed that the deadline had been moved up and informed the team immediately."
    ],
    "dialogue": {
      "a": "You seem really cheerful today — what's going on?",
      "b": "Ha! I'm surprised you noticed — I just got some really good news this morning."
    },
    "tip": "notice = 알아채다·인식하다는 뜻이에요. see보다 더 의식적인 인지(awareness)를 강조해요. notice + that절 또는 notice + 명사 형태로 써요.",
    "coreId": null
  },
  {
    "id": "basic-070",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 70,
    "expression": "expect",
    "usage": "예상하다·기대하다 (expect)",
    "heading": "expect 예상하다·기대하다 (expect)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "I expect the weather to improve significantly by the end of this week.",
    "examples": [
      "She didn't expect the exam to be quite so challenging at all.",
      "We're expecting around fifty guests at the reception this Saturday.",
      "He expects punctuality from everyone on his team — absolutely no exceptions."
    ],
    "dialogue": {
      "a": "When do you think the client will send their feedback?",
      "b": "I'd expect it sometime tomorrow — they said they'd review everything today."
    },
    "tip": "expect = 예상하다이고, hope와 달리 실제로 그럴 가능성이 높을 때 써요. I expect rain tomorrow. vs. I hope it doesn't rain.처럼 구분해요.",
    "coreId": null
  },
  {
    "id": "basic-071",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 71,
    "expression": "lose",
    "usage": "잃다·잃어버리다·지다 (lose)",
    "heading": "lose 잃다·잃어버리다·지다 (lose)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "Try not to lose the key card — getting a replacement is a real hassle.",
    "examples": [
      "She lost her wallet on the subway and spent the whole afternoon trying to recover it.",
      "Our team lost the championship game by just a single point.",
      "He tends to lose focus when there are too many distractions around him."
    ],
    "dialogue": {
      "a": "I cannot find my passport anywhere in the apartment.",
      "b": "Don't panic — just think back to where you last had it. You probably didn't lose it."
    },
    "tip": "lose는 잃어버리다 외에도 lose a game (경기에서 지다), lose weight (살이 빠지다), lose focus (집 중력을 잃다) 등 다양하게 쓰여요.",
    "coreId": null
  },
  {
    "id": "basic-072",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 72,
    "expression": "catch",
    "usage": "잡다·따라잡다·(시간 맞춰) 타다 (catch)",
    "heading": "catch 잡다·따라잡다·(시간 맞춰) 타다 (catch)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "If we leave right now, we can still catch the seven-thirty train.",
    "examples": [
      "She caught the ball with one hand just before it hit the ground.",
      "I caught the waiter's eye across the room and asked for the check.",
      "He managed to catch a cab right as the rain started coming down hard."
    ],
    "dialogue": {
      "a": "What time is your bus?",
      "b": "At six-fifteen — I need to hurry or I'm going to miss it."
    },
    "tip": "catch a bus/train/flight = 버스·기차·비행기를 시간 맞춰 타다는 뜻이에요. miss (놓치다)의 반대말 로 함께 기억해 두세요.",
    "coreId": null
  },
  {
    "id": "basic-073",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 73,
    "expression": "cost",
    "usage": "비용이 들다·가격이 ~이다 (cost)",
    "heading": "cost 비용이 들다·가격이 ~이다 (cost)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "How much does it cost to rent a scooter for the whole afternoon?",
    "examples": [
      "The repairs ended up costing far more than the original estimate.",
      "Studying abroad can cost a lot, but the experience is truly priceless.",
      "That designer bag costs more than my entire monthly rent — unbelievable."
    ],
    "dialogue": {
      "a": "I'd love to take a pottery class, but I'm on a tight budget.",
      "b": "The one at the community center only costs about thirty dollars — very reasonable."
    },
    "tip": "cost는 자동사로 수동태를 만들지 않아요. ✗ It was costed... ✓ It cost twenty dollars.로 써야 해요.",
    "coreId": null
  },
  {
    "id": "basic-074",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 74,
    "expression": "offer",
    "usage": "제안하다·제공하다 (offer)",
    "heading": "offer 제안하다·제공하다 (offer)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "She offered to proofread my cover letter before I sent it to the company.",
    "examples": [
      "The hotel offers free airport shuttle service for all registered guests.",
      "He offered me the very last piece of cake, but I was already too full.",
      "Can I offer you something cold to drink while you wait?"
    ],
    "dialogue": {
      "a": "I'm really struggling to carry all these bags by myself.",
      "b": "Let me help — I should have offered sooner. I'll take the two heavy ones."
    },
    "tip": "offer + to부정사 = 자발적으로 ~하겠다고 하다, offer + 명사 = ~을 제공하다예요. suggest와 달리 offer는 화자가 직접 무언가를 하겠다는 의미예요.",
    "coreId": null
  },
  {
    "id": "basic-075",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 75,
    "expression": "require",
    "usage": "필요로 하다·요구하다 (require)",
    "heading": "require 필요로 하다·요구하다 (require)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "This recipe requires fresh dill and a generous squeeze of lemon juice.",
    "examples": [
      "The visa application requires two recent passport-sized photographs.",
      "This position requires strong written communication skills and attention to detail.",
      "Completing a marathon requires months of dedicated, consistent training."
    ],
    "dialogue": {
      "a": "What do I need to register for the weekend workshop?",
      "b": "It requires a valid student ID and a deposit of twenty dollars upfront."
    },
    "tip": "require = 공식적으로 필요로 하다·요구하다는 뜻이에요. need보다 격식체이며 규정이나 조건을 설 명할 때 자주 써요.",
    "coreId": null
  },
  {
    "id": "basic-076",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 76,
    "expression": "gain",
    "usage": "얻다·늘다 (gain experience/knowledge/weight)",
    "heading": "gain 얻다·늘다 (gain experience/knowledge/weight)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "He gained a great deal of confidence from completing such a difficult project.",
    "examples": [
      "She gained really useful insight into the industry through her internship.",
      "The documentary has been gradually gaining attention from audiences worldwide.",
      "I tend to gain a little weight during the winter if I'm not careful about my diet."
    ],
    "dialogue": {
      "a": "Do you feel like the training program was really worth the time?",
      "b": "Absolutely — I gained so many practical skills that I'm already using at work."
    },
    "tip": "gain은 노력이나 과정을 통해 긍정적인 무언가를 얻다는 뜻이에요. gain experience / gain confidence / gain weight / gain popularity처럼 다양한 명사와 어울려요.",
    "coreId": null
  },
  {
    "id": "basic-077",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 77,
    "expression": "mention",
    "usage": "언급하다·말하다 (mention)",
    "heading": "mention 언급하다·말하다 (mention)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "You never mentioned that your best friend is a professional pastry chef!",
    "examples": [
      "Did she mention what time she'd be arriving at the station?",
      "He mentioned in passing that he was thinking about a career change.",
      "Please don't mention the surprise party to anyone — it's a complete secret."
    ],
    "dialogue": {
      "a": "By the way, I mentioned your name to my manager this morning.",
      "b": "Oh really? What exactly did you mention, if you don't mind me asking?"
    },
    "tip": "mention = 가볍게 언급하다는 뜻이에요. discuss와 달리 짧게 한 번 말하는 경우에 써요. mention + that절, mention + -ing 모두 가능해요.",
    "coreId": null
  },
  {
    "id": "basic-078",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 78,
    "expression": "handle",
    "usage": "처리하다·다루다 (handle)",
    "heading": "handle 처리하다·다루다 (handle)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "She handles last-minute customer complaints with incredible patience and grace.",
    "examples": [
      "He handles all of the company's social media accounts completely on his own.",
      "I trust her to handle the contract negotiations — she's very experienced.",
      "Could you handle the check-in process while I get the room set up?"
    ],
    "dialogue": {
      "a": "There's been a complaint from the client about the delayed shipment.",
      "b": "I'll handle it — give me their contact info and I'll reach out right away."
    },
    "tip": "handle = 처리하다·다루다는 뜻이에요. deal with과 비슷하지만 handle은 능숙하게 감당하다는 뉘 앙스가 조금 더 강해요.",
    "coreId": null
  },
  {
    "id": "basic-079",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 79,
    "expression": "sell",
    "usage": "팔다·판매하다 (sell)",
    "heading": "sell 팔다·판매하다 (sell)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "The bakery sells all its cinnamon rolls by nine every Saturday morning.",
    "examples": [
      "She started selling handmade jewelry online and it really took off quickly.",
      "Does this convenience store sell international calling cards?",
      "The company sold more units in the first quarter than in all of last year."
    ],
    "dialogue": {
      "a": "I'm thinking about selling my old camera — I barely use it anymore.",
      "b": "You could sell it on a secondhand app — cameras like yours tend to go fast."
    },
    "tip": "sell out = 다 팔리다·매진되다는 뜻이에요. be sold out (품절 상태)와 sell out (다 팔아버리다)는 형 태가 조금 달라요.",
    "coreId": null
  },
  {
    "id": "basic-080",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 80,
    "expression": "suit",
    "usage": "어울리다·맞다 (suit = look good on / be appropriate for)",
    "heading": "suit 어울리다·맞다 (suit = look good on / be appropriate for)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "That shade of dusty blue really suits your complexion — you should wear it more.",
    "examples": [
      "Does this time slot suit you, or would you prefer something a bit earlier?",
      "The casual office culture really suits him — he's never liked formality.",
      "Working from home doesn't suit everyone, but it works absolutely perfectly for her."
    ],
    "dialogue": {
      "a": "I'm not sure about this new haircut — what do you honestly think?",
      "b": "It suits you perfectly — it really brings out your eyes."
    },
    "tip": "suit = 어울리다·잘 맞다는 뜻이에요. 외모·스타일에 어울린다는 의미뿐 아니라 상황이나 일정이 잘 맞는다는 의미로도 써요.",
    "coreId": null
  },
  {
    "id": "basic-081",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 81,
    "expression": "miss",
    "usage": "그리워하다·놓치다 (miss)",
    "heading": "miss 그리워하다·놓치다 (miss)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "I really miss the slow, quiet weekend mornings at my parents' house.",
    "examples": [
      "She missed the morning bus and had to take a taxi to get to work.",
      "He misses his old colleagues now that he's transferred to a different team.",
      "Don't miss the cherry blossom festival — it only lasts about a week each year."
    ],
    "dialogue": {
      "a": "How's it going living abroad — are you enjoying it?",
      "b": "I love it here, but I really miss home-cooked food and my whole family."
    },
    "tip": "miss = 그리워하다와 놓치다 두 가지 뜻이 있어요. miss my family (그리워하다) vs. miss the bus (버스를 놓치다)로 문맥에 따라 구분해요.",
    "coreId": null
  },
  {
    "id": "basic-082",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 82,
    "expression": "finish",
    "usage": "끝내다·완료하다 (finish a task)",
    "heading": "finish 끝내다·완료하다 (finish a task)",
    "chapterKo": "회화·작문 빈출 동사",
    "chapterEn": "High-Frequency Verbs",
    "model": "She finished the entire proposal well before the deadline and even had time to review it.",
    "examples": [
      "I finally finished reading that 600-page novel over the long holiday weekend.",
      "He finished the repair work in half the time the original estimate suggested.",
      "Have you finished your homework yet, or do you need a bit more time?"
    ],
    "dialogue": {
      "a": "Are you done with the presentation slides yet?",
      "b": "Almost — I need about twenty more minutes to finish the last section."
    },
    "tip": "finish = 끝내다·완료하다는 뜻이에요. finish + -ing (finish eating) 또는 finish + 명사 (finish the work) 형태로 써요. ✗ finish to eat로는 쓰지 않아요.",
    "coreId": null
  },
  {
    "id": "basic-083",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 83,
    "expression": "finish",
    "usage": "다 ~하다·~하기를 마치다 (finish + -ing)",
    "heading": "finish 다 ~하다·~하기를 마치다 (finish + -ing)",
    "chapterKo": "상황별 실전 동사",
    "chapterEn": "Practical Situational Verbs",
    "model": "Have you finished reading the novel you borrowed from the library last month?",
    "examples": [
      "She finished unpacking all of her boxes just three days after moving in.",
      "Let's wait until he finishes speaking before we start asking any questions.",
      "I need to finish writing this section before my brain completely shuts down tonight."
    ],
    "dialogue": {
      "a": "Are you still working on the quarterly report?",
      "b": "Just finishing up the very last paragraph — give me about five minutes."
    },
    "tip": "'finish + 동사-ing' = 다 ~하다·~을 마치다는 뜻이에요. finish + to부정사는 쓰지 않아요. ✓ I finished eating. ✗ I finished to eat.",
    "coreId": "have"
  },
  {
    "id": "basic-084",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 84,
    "expression": "belong",
    "usage": "속하다·~의 것이다 (belong to)",
    "heading": "belong 속하다·~의 것이다 (belong to)",
    "chapterKo": "상황별 실전 동사",
    "chapterEn": "Practical Situational Verbs",
    "model": "Does this blue scarf belong to you, or did someone leave it behind?",
    "examples": [
      "This vintage guitar belongs to my grandfather — he played in a jazz band.",
      "That team belongs to the operations division, not the marketing department.",
      "Where do these files belong? I'll put them in the correct folder for you."
    ],
    "dialogue": {
      "a": "I found a set of keys on the break room table.",
      "b": "Those might belong to the new intern — she was looking for her keys earlier today."
    },
    "tip": "belong to = ~에 속하다·~의 것이다는 뜻이에요. 상태 동사라 진행형을 쓰지 않아요. ✗ It is belonging to me. ✓ It belongs to me.",
    "coreId": null
  },
  {
    "id": "basic-085",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 85,
    "expression": "afford",
    "usage": "여유가 되다·감당하다 (can/can't afford)",
    "heading": "afford 여유가 되다·감당하다 (can/can't afford)",
    "chapterKo": "상황별 실전 동사",
    "chapterEn": "Practical Situational Verbs",
    "model": "I really can't afford to eat out every night on my current budget.",
    "examples": [
      "She finally saved enough to afford a long trip to Europe next spring.",
      "We couldn't afford to hire additional staff at that point in time.",
      "You can't afford to miss this meeting — the client is coming in person."
    ],
    "dialogue": {
      "a": "Have you seen the price tag on that new laptop?",
      "b": "I know — I really want it, but I honestly just can't afford it right now."
    },
    "tip": "afford은 주로 can / can't와 함께 써요. 돈이나 시간이 충분하지 않아 감당하기 어렵다는 의미예요. afford to + 동사원형 형태가 가장 일반적이에요.",
    "coreId": null
  },
  {
    "id": "basic-086",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 86,
    "expression": "grab",
    "usage": "잡다·빠르게 챙기다 (grab)",
    "heading": "grab 잡다·빠르게 챙기다 (grab)",
    "chapterKo": "상황별 실전 동사",
    "chapterEn": "Practical Situational Verbs",
    "model": "Grab a seat near the window — the view from there is really lovely.",
    "examples": [
      "I'll grab a coffee on my way to the office — do you want one too?",
      "She grabbed her jacket and rushed out the door when she heard the news.",
      "Can you grab some napkins from the counter while you're up?"
    ],
    "dialogue": {
      "a": "I'm absolutely starving — I skipped lunch again today.",
      "b": "Let's grab something to eat before the next session starts."
    },
    "tip": "grab은 빠르게 집다·챙기다는 캐주얼한 표현이에요. grab a bite (간단히 먹다), grab a seat (자리 잡다), grab a coffee (커피 마시다)처럼 일상에 자주 쓰여요.",
    "coreId": null
  },
  {
    "id": "basic-087",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 87,
    "expression": "fix",
    "usage": "고치다·수리하다 (fix = repair)",
    "heading": "fix 고치다·수리하다 (fix = repair)",
    "chapterKo": "상황별 실전 동사",
    "chapterEn": "Practical Situational Verbs",
    "model": "My dad fixed the dripping bathroom faucet in less than fifteen minutes.",
    "examples": [
      "Can you fix the typo on the second slide before the big presentation?",
      "She fixed the broken zipper on her backpack with a safety pin.",
      "We need to fix this bug before the app goes live next week."
    ],
    "dialogue": {
      "a": "My laptop screen has been flickering on and off for about a week now.",
      "b": "Take it to the tech desk — they can usually fix those pretty quickly."
    },
    "tip": "fix = repair와 같은 의미이지만 더 구어적이에요. 물건 수리뿐 아니라 fix a problem / fix a mistake처럼 문제를 해결하다는 뜻으로도 자주 써요.",
    "coreId": null
  },
  {
    "id": "basic-088",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 88,
    "expression": "deserve",
    "usage": "받을 자격이 있다·~을 받아 마땅하다 (deserve)",
    "heading": "deserve 받을 자격이 있다·~을 받아 마땅하다 (deserve)",
    "chapterKo": "상황별 실전 동사",
    "chapterEn": "Practical Situational Verbs",
    "model": "You've been working nonstop all month — you really deserve a proper vacation.",
    "examples": [
      "She deserves a lot of credit for holding the entire team together under pressure.",
      "He didn't deserve that harsh response — he was only trying to help.",
      "After all your hard work, you definitely deserve the recognition you're getting."
    ],
    "dialogue": {
      "a": "I don't know if I should apply for the senior role — I'm still relatively new.",
      "b": "You deserve it more than anyone — you've been doing senior-level work for months."
    },
    "tip": "deserve = ~을 받을 만하다·~을 받아 마땅하다는 뜻이에요. deserve to + 동사원형 또는 deserve + 명사 형태로 써요.",
    "coreId": null
  },
  {
    "id": "basic-089",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 89,
    "expression": "mind",
    "usage": "꺼리다·신경 쓰다 (mind = object to)",
    "heading": "mind 꺼리다·신경 쓰다 (mind = object to)",
    "chapterKo": "상황별 실전 동사",
    "chapterEn": "Practical Situational Verbs",
    "model": "Do you mind if I turn on the overhead light? It's a bit dark in here.",
    "examples": [
      "He doesn't mind helping out with extra tasks if it means the team succeeds.",
      "Would you mind lowering your voice? I'm on an important call right now.",
      "She didn't mind the long commute because she loved the podcast she listened to."
    ],
    "dialogue": {
      "a": "I'm going to grab the last chocolate croissant — do you mind?",
      "b": "Not at all! Go right ahead — I was actually hoping you'd take it."
    },
    "tip": "Do you mind + -ing? = ~해도 될까요?는 정중한 부탁이에요. 대답할 때 Not at all. / Of course not.이 상관없다는 뜻이에요. 헷갈리기 쉬우니 주의하세요.",
    "coreId": "do"
  },
  {
    "id": "basic-090",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 90,
    "expression": "book",
    "usage": "예약하다 (book = reserve)",
    "heading": "book 예약하다 (book = reserve)",
    "chapterKo": "상황별 실전 동사",
    "chapterEn": "Practical Situational Verbs",
    "model": "I booked a table for two at the new French restaurant for our anniversary.",
    "examples": [
      "We booked our flights and hotel six months in advance to save a significant amount.",
      "He books a haircut appointment at the same place every six weeks.",
      "You should book early — this guided tour sells out months ahead of time."
    ],
    "dialogue": {
      "a": "Did you manage to get tickets for the comedy show this weekend?",
      "b": "Yes! I booked two seats online this morning just before they sold out."
    },
    "tip": "book = reserve와 같은 의미예요. 미국 영어에서는 reserve가 더 격식체이고, book은 일상에서 훨 씬 더 자주 쓰여요.",
    "coreId": null
  },
  {
    "id": "basic-091",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 91,
    "expression": "seem ~처럼",
    "usage": "보이다·~인 것 같다 (seem)",
    "heading": "seem ~처럼 보이다·~인 것 같다 (seem)",
    "chapterKo": "상황별 실전 동사",
    "chapterEn": "Practical Situational Verbs",
    "model": "You seem a little distracted today — is everything going okay?",
    "examples": [
      "It seems like a great opportunity — you should definitely go for it.",
      "She seemed genuinely surprised when they announced her name as the winner.",
      "That plan doesn't seem very realistic given our current timeline and resources."
    ],
    "dialogue": {
      "a": "I'm not totally sure — does the proposal seem doable to you?",
      "b": "It seems pretty ambitious, but I think we can pull it off with the right team."
    },
    "tip": "seem은 겉으로 보기에 ~인 것 같다는 뜻이에요. seem + 형용사 또는 seem like + 명사 형태로 써요. look과 달리 seem은 시각에만 국한되지 않아요.",
    "coreId": null
  },
  {
    "id": "basic-092",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 92,
    "expression": "bother",
    "usage": "귀찮게 하다·짜증나게 하다 (bother = annoy/disturb)",
    "heading": "bother 귀찮게 하다·짜증나게 하다 (bother = annoy/disturb)",
    "chapterKo": "상황별 실전 동사",
    "chapterEn": "Practical Situational Verbs",
    "model": "The loud conversation in the next cubicle has been bothering me all morning.",
    "examples": [
      "Does the flickering light in the hallway bother you as much as it bothers me?",
      "He never lets small everyday problems bother him — he's very easygoing.",
      "What's bothering you? You've barely said a word since you arrived here."
    ],
    "dialogue": {
      "a": "Why do you keep checking your phone like that?",
      "b": "Sorry — something from this morning is bothering me and I just can't shake it."
    },
    "tip": "bother = 괴롭히다·신경 쓰이게 하다는 뜻이에요. What's bothering you?는 무슨 일 있어? 뭐가 걸 려?는 뜻으로 매우 자연스러운 표현이에요.",
    "coreId": null
  },
  {
    "id": "basic-093",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 93,
    "expression": "bother",
    "usage": "수고를 들이다·굳이 ~하다 (bother to do sth)",
    "heading": "bother 수고를 들이다·굳이 ~하다 (bother to do sth)",
    "chapterKo": "생활 속 표현 동사",
    "chapterEn": "Useful Expressive Verbs",
    "model": "Don't bother wrapping it — I'll just put it straight into my bag.",
    "examples": [
      "He didn't even bother to read the instructions before putting it together.",
      "She bothered to learn a few local phrases before her trip, and people loved it.",
      "Why bother arguing? You're both essentially saying the exact same thing."
    ],
    "dialogue": {
      "a": "Should I print out a hard copy for everyone at the meeting?",
      "b": "Don't bother — everyone has a laptop, so just share it digitally."
    },
    "tip": "bother to do는 주로 부정문(don't bother / didn't bother)으로 써요. 굳이 ~할 필요 없다는 뜻으로 캐주얼한 표현이에요.",
    "coreId": "put"
  },
  {
    "id": "basic-094",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 94,
    "expression": "spare",
    "usage": "시간·돈을 내주다 (spare time/money/resources)",
    "heading": "spare 시간·돈을 내주다 (spare time/money/resources)",
    "chapterKo": "생활 속 표현 동사",
    "chapterEn": "Useful Expressive Verbs",
    "model": "Could you spare a few minutes to go over this draft with me before the meeting?",
    "examples": [
      "I don't have much to spare right now, but here's twenty dollars for the cab.",
      "She always spares a few moments to chat with the interns — they really appreciate it.",
      "Can you spare an extra pen? Mine just ran completely out of ink."
    ],
    "dialogue": {
      "a": "I know you're really busy, but could you spare ten minutes to look at my cover letter?",
      "b": "Of course — send it over and I'll spare some time after my two o'clock call."
    },
    "tip": "spare = 여유 있는 것을 나눠 주다·시간을 내다는 뜻이에요. spare time (여가 시간)과 can you spare...? (~좀 내줄 수 있어?)는 모두 자주 쓰이는 표현이에요.",
    "coreId": "go"
  },
  {
    "id": "basic-095",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 95,
    "expression": "ruin",
    "usage": "망치다·엉망으로 만들다 (ruin)",
    "heading": "ruin 망치다·엉망으로 만들다 (ruin)",
    "chapterKo": "생활 속 표현 동사",
    "chapterEn": "Useful Expressive Verbs",
    "model": "The unexpected downpour completely ruined our outdoor graduation celebration.",
    "examples": [
      "Don't tell me the ending — you'll completely ruin the whole movie for me.",
      "He accidentally ruined the surprise by mentioning the party in front of her.",
      "Leaving the cheese out overnight ruined it — it smelled terrible by morning."
    ],
    "dialogue": {
      "a": "I accidentally spilled red wine on her light beige sofa.",
      "b": "Oh no — blot it immediately before it ruins the fabric for good."
    },
    "tip": "ruin = 완전히 망치다는 뜻이에요. spoil과 비슷하지만 ruin은 더 심각하고 돌이킬 수 없는 피해를 강 조해요.",
    "coreId": null
  },
  {
    "id": "basic-096",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 96,
    "expression": "owe",
    "usage": "빚지다·신세를 지다 (owe)",
    "heading": "owe 빚지다·신세를 지다 (owe)",
    "chapterKo": "생활 속 표현 동사",
    "chapterEn": "Useful Expressive Verbs",
    "model": "I owe you one for covering my shift on such incredibly short notice.",
    "examples": [
      "He still owes me twenty dollars from our road trip two months ago.",
      "You don't owe anyone an explanation for your own personal decisions.",
      "She feels like she owes her mentor so much for all the guidance over the years."
    ],
    "dialogue": {
      "a": "I really don't know how to properly thank you for all your help last week.",
      "b": "You don't owe me a thing — I was genuinely happy to help."
    },
    "tip": "owe = 빚지다·신세를 지다는 뜻이에요. owe + 사람 + 사물 형태로 써요. I owe you an apology처 럼 감사나 사과를 빚지다는 표현으로도 자주 쓰여요.",
    "coreId": null
  },
  {
    "id": "basic-097",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 97,
    "expression": "quit",
    "usage": "그만두다·포기하다 (quit)",
    "heading": "quit 그만두다·포기하다 (quit)",
    "chapterKo": "생활 속 표현 동사",
    "chapterEn": "Useful Expressive Verbs",
    "model": "She quit her corporate job to open a cozy little bookstore in her hometown.",
    "examples": [
      "He finally quit smoking after years of trying — we're all really proud of him.",
      "Don't quit the class just because it's difficult — you're making genuine progress.",
      "The entire development team quit after the unexpected management changes."
    ],
    "dialogue": {
      "a": "I'm thinking of quitting the gym — I never actually seem to go.",
      "b": "Don't quit yet — just switch to a plan that better fits your daily schedule."
    },
    "tip": "quit + -ing = ~을 그만하다는 뜻이에요. stop과 비슷하지만 quit은 완전히 그만두는 뉘앙스가 더 강 해요. quit a job / quit smoking처럼 명사나 -ing형과 함께 써요.",
    "coreId": null
  },
  {
    "id": "basic-098",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 98,
    "expression": "arrange",
    "usage": "준비하다·정리하다·마련하다 (arrange)",
    "heading": "arrange 준비하다·정리하다·마련하다 (arrange)",
    "chapterKo": "생활 속 표현 동사",
    "chapterEn": "Useful Expressive Verbs",
    "model": "Can you arrange the tables in a U-shape before the workshop begins?",
    "examples": [
      "She arranged a lovely surprise lunch for her colleague's very last day at the office.",
      "He arranged all the files alphabetically so they'd be easy to find later.",
      "We need to arrange transportation for the guest speakers flying in from out of town."
    ],
    "dialogue": {
      "a": "How did everything come together so beautifully for the event?",
      "b": "Maya arranged everything — the catering, the venue, the whole schedule — all of it."
    },
    "tip": "arrange = 준비·계획·정리하다는 뜻이에요. organize와 비슷하지만 arrange는 계획을 마련하고 조 율하다는 뉘앙스가 조금 더 강해요.",
    "coreId": null
  },
  {
    "id": "basic-099",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 99,
    "expression": "skip",
    "usage": "건너뛰다·빠지다 (skip)",
    "heading": "skip 건너뛰다·빠지다 (skip)",
    "chapterKo": "생활 속 표현 동사",
    "chapterEn": "Useful Expressive Verbs",
    "model": "I decided to skip my morning jog since it was absolutely pouring rain outside.",
    "examples": [
      "She skipped breakfast and deeply regretted it by ten in the morning.",
      "Can we skip the lengthy introduction and get straight to the main topic?",
      "He skipped a grade in elementary school because of his advanced reading level."
    ],
    "dialogue": {
      "a": "Are you coming to the optional orientation session this afternoon?",
      "b": "I think I'll skip it — I already went through everything online last night."
    },
    "tip": "skip = 건너뛰다·빠지다는 뜻이에요. skip class / skip a meal / skip a page처럼 의도적으로 무언가 를 건너뛰거나 빠지다는 캐주얼한 표현이에요.",
    "coreId": null
  },
  {
    "id": "basic-100",
    "sourceId": "basic-verb",
    "sourceType": "basic",
    "sourceTitle": "기본 동사 100",
    "sourceLabel": "BASIC VERB",
    "no": 100,
    "expression": "spoil",
    "usage": "망치다·버릇없이 키우다·상하다 (spoil)",
    "heading": "spoil 망치다·버릇없이 키우다·상하다 (spoil)",
    "chapterKo": "생활 속 표현 동사",
    "chapterEn": "Useful Expressive Verbs",
    "model": "Please don't tell me how it ends — you'll completely spoil the whole thing for me!",
    "examples": [
      "The fish will spoil very quickly if you don't refrigerate it right away.",
      "Her grandparents absolutely spoil her with gifts and treats during every single visit.",
      "I don't want to spoil the mood, but we probably need to head out fairly soon."
    ],
    "dialogue": {
      "a": "I'm only halfway through that new mystery thriller novel.",
      "b": "I won't say a single word — I'd never spoil a book for someone. That would be cruel."
    },
    "tip": "spoil에는 망치다(ruin과 유사), 버릇없이 키우다, (음식이) 상하다는 세 가지 뜻이 있어요. ruin보다 가벼운 뉘앙스이고 음식이 상할 때도 쓰여요.",
    "coreId": "tell"
  },
  {
    "id": "phrasal-001",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 1,
    "expression": "add up",
    "usage": "합산되다; (논리적으로) 말이 되다",
    "heading": "add up 합산되다; (논리적으로) 말이 되다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "The numbers on this receipt don't add up — someone made a mistake.",
    "examples": [
      "Her excuse just doesn't add up.",
      "Small daily expenses really add up over a month.",
      "If you add up all the hours, we worked over sixty this week."
    ],
    "dialogue": {
      "a": "Something about his story doesn't add up.",
      "b": "I know — he said he was home all night, but his car wasn't in the driveway."
    },
    "tip": "자동사로 쓰면 '말이 되다', 타동사로 쓰면 '합산하다'입니다. 대명사 목적어는 add it up처럼 사이에 넣어야 합니다.",
    "coreId": null
  },
  {
    "id": "phrasal-002",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 2,
    "expression": "blow away",
    "usage": "압도적으로 감동시키다, 완전히 놀라게 하다",
    "heading": "blow away 압도적으로 감동시키다, 완전히 놀라게 하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "The closing act completely blew the audience away.",
    "examples": [
      "I was blown away by the quality of the photography in that exhibition.",
      "This documentary blew me away from the very first scene.",
      "The team's performance blew everyone away at the regional finals."
    ],
    "dialogue": {
      "a": "What did you think of the new album?",
      "b": "It blew me away — every single track is incredible."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어(me, us 등)는 반드시 blow와 away 사이에 씁니다: blew me away.",
    "coreId": null
  },
  {
    "id": "phrasal-003",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 3,
    "expression": "break up (연인",
    "usage": "(연인 관계를) 끝내다, 헤어지다",
    "heading": "break up (연인 관계를) 끝내다, 헤어지다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "They broke up after dating for nearly three years.",
    "examples": [
      "She broke up with him over text, which surprised everyone.",
      "It's never easy to break up with someone you still care about.",
      "The couple finally broke up after months of constant arguments."
    ],
    "dialogue": {
      "a": "Did you hear that Tom and Lisa broke up?",
      "b": "Yeah — honestly, I saw it coming. They argued constantly."
    },
    "tip": "'헤어지다'의 뜻으로 쓸 때는 break up with + 사람처럼 씁니다. 자동사 구동사이므로 분리하지 않습 니다.",
    "coreId": "break"
  },
  {
    "id": "phrasal-004",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 4,
    "expression": "brush up on (기술·지식을)",
    "usage": "다시 익히다, 복습하다",
    "heading": "brush up on (기술·지식을) 다시 익히다, 복습하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "I need to brush up on my Spanish before the trip to Mexico.",
    "examples": [
      "She spent the weekend brushing up on her grammar rules.",
      "He brushed up on his presentation skills before the big pitch.",
      "It's a good idea to brush up on basic first aid every few years."
    ],
    "dialogue": {
      "a": "The client report needs to be written in French. Are you comfortable with that?",
      "b": "I'll be fine — I've been brushing up on my French all week."
    },
    "tip": "삼중 구동사(three-word phrasal verb)입니다. 목적어는 항상 on 뒤에 오며, 분리할 수 없습니다.",
    "coreId": "need"
  },
  {
    "id": "phrasal-005",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 5,
    "expression": "care for",
    "usage": "돌보다; 좋아하다",
    "heading": "care for 돌보다; 좋아하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "She cared for her elderly father throughout his long illness.",
    "examples": [
      "He cared for his younger siblings while their parents were at work.",
      "I don't really care for overly sweet desserts, but I'll try a bite.",
      "The staff at the facility cares for dozens of residents every day."
    ],
    "dialogue": {
      "a": "Would you care for some more tea?",
      "b": "Yes, please — it's absolutely lovely."
    },
    "tip": "목적어를 for 뒤에 씁니다. 부정·의문문에서는 '좋아하다', 긍정문에서는 '돌보다'의 의미로 자주 씁니 다. 분리 불가능입니다.",
    "coreId": null
  },
  {
    "id": "phrasal-006",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 6,
    "expression": "catch on",
    "usage": "이해하다; 유행하다",
    "heading": "catch on 이해하다; 유행하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "It took me a few tries to catch on, but now I really enjoy it.",
    "examples": [
      "The new social media trend caught on faster than anyone expected.",
      "Once the teacher explains it twice, most students catch on quickly.",
      "Reusable coffee cups really caught on after the environmental campaigns."
    ],
    "dialogue": {
      "a": "Do you think the new subscription model will catch on?",
      "b": "Definitely — it solves a problem everyone's been complaining about."
    },
    "tip": "자동사 구동사입니다. '이해하다'의 뜻으로 쓸 때는 catch on to something처럼 to를 추가합니다.",
    "coreId": null
  },
  {
    "id": "phrasal-007",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 7,
    "expression": "catch up (뒤처진",
    "usage": "(뒤처진 것을) 따라잡다; 안부를 나누다",
    "heading": "catch up (뒤처진 것을) 따라잡다; 안부를 나누다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "She stayed late to catch up on the work she missed last week.",
    "examples": [
      "Let's grab coffee soon and catch up.",
      "He had to catch up with the rest of the class after missing a week.",
      "I've spent all morning catching up on emails from the holiday."
    ],
    "dialogue": {
      "a": "I haven't seen you in months — we really need to catch up!",
      "b": "I know! Let's meet for dinner this weekend."
    },
    "tip": "자동사이며, 누군가를 따라잡을 때는 catch up with/on을 씁니다. 분리할 수 없습니다.",
    "coreId": "work"
  },
  {
    "id": "phrasal-008",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 8,
    "expression": "check on (상태를)",
    "usage": "확인하다, 살피다",
    "heading": "check on (상태를) 확인하다, 살피다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "Can you check on the pasta? It's been boiling for ten minutes.",
    "examples": [
      "She called to check on her parents after the heavy storm.",
      "The manager stopped by to check on the new hire's progress.",
      "I'll check on the delivery status online in a moment."
    ],
    "dialogue": {
      "a": "Jake seemed really stressed today. I'm a little worried.",
      "b": "Why don't you check on him? Even a quick message would help."
    },
    "tip": "목적어를 on 뒤에 씁니다. 사람에게도 음식·물건에도 모두 사용할 수 있으며 분리할 수 없습니다.",
    "coreId": null
  },
  {
    "id": "phrasal-009",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 9,
    "expression": "check in (공항·호텔에서)",
    "usage": "체크인하다; 보고하다",
    "heading": "check in (공항·호텔에서) 체크인하다; 보고하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "We need to check in at the airport at least two hours before departure.",
    "examples": [
      "She checked in at the hotel and went straight to her room to freshen up.",
      "Please check in with me once you arrive at the conference venue.",
      "I checked in online to skip the long counter queue at the airport."
    ],
    "dialogue": {
      "a": "What time does check-in start at the hotel?",
      "b": "Usually at 3 p.m., but we can leave our bags there earlier."
    },
    "tip": "자동사이며, 장소 앞에는 at, 사람 앞에는 with를 씁니다. 분리하지 않습니다.",
    "coreId": "need"
  },
  {
    "id": "phrasal-010",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 10,
    "expression": "check out (호텔을)",
    "usage": "체크아웃하다; (흥미로운 것을) 살펴보다",
    "heading": "check out (호텔을) 체크아웃하다; (흥미로운 것을) 살펴보다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "We need to check out of the hotel by noon or we'll be charged extra.",
    "examples": [
      "Have you checked out that new ramen spot on Oak Street yet?",
      "We checked out of the hotel early to catch the morning train.",
      "Check out this video — it's the funniest thing I've seen all week."
    ],
    "dialogue": {
      "a": "Did you check out the new gallery exhibit downtown?",
      "b": "Not yet, but I'm planning to go this Sunday."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 반드시 check it out처럼 사이에 씁니다.",
    "coreId": "be"
  },
  {
    "id": "phrasal-011",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 11,
    "expression": "come across",
    "usage": "우연히 발견하다, 마주치다",
    "heading": "come across 우연히 발견하다, 마주치다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "I came across a beautiful old bookstore while wandering downtown.",
    "examples": [
      "She came across an old diary hidden in her grandmother's attic.",
      "He came across some useful research data while browsing the web.",
      "We came across a tiny café tucked in an alley and stopped for coffee."
    ],
    "dialogue": {
      "a": "Where did you find that vintage jacket?",
      "b": "I came across it at a thrift store last weekend. Total steal!"
    },
    "tip": "목적어를 across 뒤에 씁니다. 항상 '우연히'라는 뉘앙스가 포함되며 분리할 수 없습니다.",
    "coreId": "come"
  },
  {
    "id": "phrasal-012",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 12,
    "expression": "come along",
    "usage": "함께 오다; 나아가다, 발전하다",
    "heading": "come along 함께 오다; 나아가다, 발전하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "You're welcome to come along when we head to the flea market.",
    "examples": [
      "How is your new novel coming along?",
      "Feel free to come along — we'd love the extra company.",
      "The intern is really coming along well in her first month on the job."
    ],
    "dialogue": {
      "a": "We're heading to the farmers market. Want to come along?",
      "b": "Sure! I need to pick up some fresh herbs anyway."
    },
    "tip": "자동사로 목적어를 취하지 않습니다. '진행되다'의 의미로 쓸 때는 How is ~ coming along?처럼 진 행형 의문문으로 자주 씁니다.",
    "coreId": "come"
  },
  {
    "id": "phrasal-013",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 13,
    "expression": "come around",
    "usage": "생각을 바꾸다; 의식을 되찾다; 들르다",
    "heading": "come around 생각을 바꾸다; 의식을 되찾다; 들르다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "He was strongly against the idea at first, but he finally came around.",
    "examples": [
      "The doctor said she should come around within a couple of hours.",
      "My dad finally came around and said we could get a dog.",
      "Why don't you come around for dinner on Saturday night?"
    ],
    "dialogue": {
      "a": "My boss still doesn't support the new proposal.",
      "b": "Give it some time. I think she'll come around once she sees the results."
    },
    "tip": "자동사이며 '들르다'의 뜻으로 쓸 때는 come around to + 장소처럼 씁니다. 문맥으로 세 가지 의미 를 구별하세요.",
    "coreId": "come"
  },
  {
    "id": "phrasal-014",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 14,
    "expression": "come off",
    "usage": "성공하다; (물건이) 떨어지다",
    "heading": "come off 성공하다; (물건이) 떨어지다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "The surprise party came off perfectly — she had absolutely no idea.",
    "examples": [
      "One of the buttons came off my coat on the subway this morning.",
      "The joke didn't quite come off — the audience stayed completely silent.",
      "Did the launch event come off as planned?"
    ],
    "dialogue": {
      "a": "How did the school fundraiser come off?",
      "b": "It was a huge success — we raised twice what we expected."
    },
    "tip": "자동사 구동사로 목적어를 취하지 않습니다. '성공하다'와 '(물건이) 떨어지다' 두 가지 뜻을 문맥으로 구별하세요.",
    "coreId": "come"
  },
  {
    "id": "phrasal-015",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 15,
    "expression": "come across as ~한",
    "usage": "인상을 주다, ~처럼 보이다",
    "heading": "come across as ~한 인상을 주다, ~처럼 보이다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "She came across as very calm and well-prepared during the interview.",
    "examples": [
      "He came across as rude, even though he didn't intend to be.",
      "If you avoid eye contact, you might come across as disinterested.",
      "The speaker came across as knowledgeable and genuinely passionate."
    ],
    "dialogue": {
      "a": "Did I come across as too eager in that meeting?",
      "b": "A little, but I think they appreciated your enthusiasm."
    },
    "tip": "삼중 구동사입니다. 뒤에 형용사나 명사를 써서 인상을 표현합니다. 분리할 수 없으며, come across as rude처럼 씁니다.",
    "coreId": "come"
  },
  {
    "id": "phrasal-016",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 16,
    "expression": "come up with (아이디어·해결책을)",
    "usage": "생각해내다",
    "heading": "come up with (아이디어·해결책을) 생각해내다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "She came up with a brilliant solution to the budget problem overnight.",
    "examples": [
      "We need to come up with a new strategy before Monday's meeting.",
      "How did he come up with such an original concept on short notice?",
      "The team came up with three creative campaign ideas by morning."
    ],
    "dialogue": {
      "a": "We're stuck. Nobody has any idea how to fix this bug.",
      "b": "Give me a few minutes — I'll come up with something."
    },
    "tip": "삼중 구동사입니다. 목적어를 항상 with 뒤에 쓰며, 분리할 수 없습니다.",
    "coreId": "come"
  },
  {
    "id": "phrasal-017",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 17,
    "expression": "cut off",
    "usage": "끊다; 말을 가로막다; 고립시키다",
    "heading": "cut off 끊다; 말을 가로막다; 고립시키다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "The storm cut off electricity to the entire neighborhood for six hours.",
    "examples": [
      "Don't cut me off when I'm trying to explain my point.",
      "The bank cut off his credit card because of suspicious activity.",
      "Heavy snow cut the village off from the rest of the region."
    ],
    "dialogue": {
      "a": "She kept cutting me off during the whole presentation.",
      "b": "That's so frustrating. Just stay confident and keep going."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 반드시 cut me/him/her off처럼 사이에 씁니다.",
    "coreId": null
  },
  {
    "id": "phrasal-018",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 18,
    "expression": "figure out",
    "usage": "이해하다, 파악하다",
    "heading": "figure out 이해하다, 파악하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "I finally figured out why the app kept crashing.",
    "examples": [
      "Can you figure out what this symbol on the map means?",
      "It took her an hour to figure out how the new software works.",
      "Nobody could figure out how he disappeared so quickly."
    ],
    "dialogue": {
      "a": "I can't figure out this math problem at all.",
      "b": "Let me take a look — a fresh pair of eyes always helps."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 반드시 figure it out처럼 사이에 씁니다. DAY 19와 같 은 형태지만 의미가 다릅니다.",
    "coreId": null
  },
  {
    "id": "phrasal-019",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 19,
    "expression": "figure out",
    "usage": "계산하다, 산출하다",
    "heading": "figure out 계산하다, 산출하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "Can you figure out how much we each owe for the dinner?",
    "examples": [
      "He figured out the total cost including tax and tip.",
      "Let me figure out exactly how many servings we need for thirty guests.",
      "She figured out the mileage for the entire road trip in advance."
    ],
    "dialogue": {
      "a": "How many tiles will we need for the bathroom floor?",
      "b": "I'm trying to figure out the area now — give me a second."
    },
    "tip": "DAY 18의 '이해하다'와 달리, 이 용법은 수량·비용·크기를 '계산하다'를 의미합니다. 보통 how much/many 절이 뒤따릅니다.",
    "coreId": null
  },
  {
    "id": "phrasal-020",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 20,
    "expression": "fill in for (임시로)",
    "usage": "대신하다, 대리하다",
    "heading": "fill in for (임시로) 대신하다, 대리하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "Could you fill in for me at tomorrow's meeting? I have a doctor's appointment.",
    "examples": [
      "He filled in for the receptionist while she was on vacation.",
      "I'll need someone to fill in for the coach during next week's practice.",
      "Thanks for filling in for me last week — I really appreciate it."
    ],
    "dialogue": {
      "a": "Who's going to run the Thursday morning class?",
      "b": "Ms. Johnson is going to fill in for Mr. Davis while he's away."
    },
    "tip": "삼중 구동사입니다. 대리하는 사람을 for 뒤에 씁니다. 분리할 수 없습니다.",
    "coreId": "have"
  },
  {
    "id": "phrasal-021",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 21,
    "expression": "find out (사실을)",
    "usage": "알아내다, 발견하다",
    "heading": "find out (사실을) 알아내다, 발견하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "I just found out that the concert has been rescheduled to next month.",
    "examples": [
      "How did you find out about the job opening so early?",
      "She found out the truth about the accident much later.",
      "Let me find out when the next available appointment is."
    ],
    "dialogue": {
      "a": "When did you find out you got the promotion?",
      "b": "My manager called me this morning. I was completely shocked!"
    },
    "tip": "분리 가능하지만, 목적어가 that절이나 wh-절이면 분리 없이 씁니다. 예: find out that ~, find out when ~.",
    "coreId": null
  },
  {
    "id": "phrasal-022",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 22,
    "expression": "fit in",
    "usage": "어울리다, 속하다; 시간을 내다",
    "heading": "fit in 어울리다, 속하다; 시간을 내다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "It took him a few weeks to fit in at his new school.",
    "examples": [
      "She was trying hard to fit in with the rest of the team.",
      "Can we fit in a quick call before the lunch break?",
      "He never quite fit in with the strict corporate culture there."
    ],
    "dialogue": {
      "a": "How's the new office going?",
      "b": "It's been a bit slow. I'm still trying to fit in with everyone."
    },
    "tip": "'어울리다'는 자동사로 목적어 없이, 또는 fit in with someone으로 씁니다. '시간을 내다'는 분리형 fit someone/something in도 가능합니다.",
    "coreId": null
  },
  {
    "id": "phrasal-023",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 23,
    "expression": "get around (이곳저곳을)",
    "usage": "돌아다니다, 이동하다",
    "heading": "get around (이곳저곳을) 돌아다니다, 이동하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "It's really easy to get around the city by bike or subway.",
    "examples": [
      "She gets around town mostly on foot.",
      "Without a car, it was hard to get around in the suburbs.",
      "The new bus route makes it much easier to get around without driving."
    ],
    "dialogue": {
      "a": "Do you need a ride to the event?",
      "b": "Thanks, but I'll manage — I'm pretty good at getting around on public transit."
    },
    "tip": "'이동하다'의 의미로 쓰는 get around는 자동사입니다. 이동 수단 앞에 by나 on을 씁니다. DAY 24 와 같은 형태지만 의미가 다릅니다.",
    "coreId": "get"
  },
  {
    "id": "phrasal-024",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 24,
    "expression": "get around (규칙·문제를)",
    "usage": "피하다, 우회하다",
    "heading": "get around (규칙·문제를) 피하다, 우회하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "He found a clever way to get around the strict new policy.",
    "examples": [
      "There's really no way to get around the required paperwork.",
      "She tried to get around the rule, but the supervisor caught on.",
      "Some people try to get around paying full price by using old coupons."
    ],
    "dialogue": {
      "a": "This new compliance policy is really inconvenient.",
      "b": "I know, but I don't think there's any way to get around it."
    },
    "tip": "'피하다·우회하다'의 의미로 쓸 때 get around + 목적어로 씁니다. 분리할 수 없습니다. DAY 23의 '이동하다'와 비교하세요.",
    "coreId": "get"
  },
  {
    "id": "phrasal-025",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 25,
    "expression": "get around to (미뤄오다가)",
    "usage": "드디어 ~을 하다",
    "heading": "get around to (미뤄오다가) 드디어 ~을 하다",
    "chapterKo": "일상생활 구동사",
    "chapterEn": "Everyday Life",
    "model": "I keep meaning to call her back, but I never seem to get around to it.",
    "examples": [
      "He finally got around to fixing the leaky faucet after months.",
      "She hasn't gotten around to reading that book yet.",
      "We really should get around to repainting the kitchen this summer."
    ],
    "dialogue": {
      "a": "Did you ever watch that show I recommended?",
      "b": "Not yet, but I'll get around to it this weekend — I promise!"
    },
    "tip": "get around to 뒤에는 명사 또는 동명사(-ing)가 옵니다. 무언가를 계속 미뤄오다가 드디어 한다는 뉘앙스가 강합니다.",
    "coreId": "get"
  },
  {
    "id": "phrasal-026",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 26,
    "expression": "get away with (나쁜",
    "usage": "(나쁜 일을 하고도) 들키지 않다, 처벌을 피하다",
    "heading": "get away with (나쁜 일을 하고도) 들키지 않다, 처벌을 피하다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "He got away with copying the homework because the teacher didn't check carefully.",
    "examples": [
      "Don't think you can get away with lying — the truth always comes out.",
      "She got away with arriving late because the boss was stuck in a meeting.",
      "Some drivers get away with speeding because there are no cameras on that road."
    ],
    "dialogue": {
      "a": "Did anyone notice you were late to the meeting?",
      "b": "Luckily I got away with it — I slipped in just as the intro was finishing."
    },
    "tip": "get away with 뒤에는 명사 또는 동명사(-ing)가 옵니다. 부정적인 행동에도 결과가 없을 때 씁니다. 분리 불가능합니다.",
    "coreId": "get"
  },
  {
    "id": "phrasal-027",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 27,
    "expression": "get by (어렵게)",
    "usage": "살아가다, 그럭저럭 해내다",
    "heading": "get by (어렵게) 살아가다, 그럭저럭 해내다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "During college, she got by on ramen and a part-time job.",
    "examples": [
      "We don't have much savings, but we get by just fine.",
      "My Spanish isn't perfect, but it's enough to get by on a trip to Mexico.",
      "He's been getting by on just five hours of sleep lately."
    ],
    "dialogue": {
      "a": "How are you managing after the pay cut?",
      "b": "It's tough, but we're getting by. We've just cut back on extras."
    },
    "tip": "get by는 자동사이며, 수단·방법 앞에 on을 씁니다. '화려하지는 않지만 충분히 해낸다'는 뉘앙스입 니다.",
    "coreId": "get"
  },
  {
    "id": "phrasal-028",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 28,
    "expression": "get into ~에",
    "usage": "빠지다, 관심을 갖게 되다",
    "heading": "get into ~에 빠지다, 관심을 갖게 되다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "She got into yoga after her doctor recommended it for stress relief.",
    "examples": [
      "My brother recently got into collecting vintage stamps.",
      "Once you get into the habit of journaling, it becomes addictive.",
      "He got into rock climbing after watching a documentary about it."
    ],
    "dialogue": {
      "a": "You seem really into cooking lately.",
      "b": "Yeah, I totally got into it after watching a cooking competition show."
    },
    "tip": "get into + 취미·활동은 '~에 빠지다'를 뜻합니다. 목적어를 into 바로 뒤에 씁니다. DAY 29와 같은 형태지만 의미가 다릅니다.",
    "coreId": "get"
  },
  {
    "id": "phrasal-029",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 29,
    "expression": "get into (학교·프로그램",
    "usage": "(학교·프로그램 등에) 합격하다, 들어가다",
    "heading": "get into (학교·프로그램 등에) 합격하다, 들어가다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "She worked incredibly hard and got into her first-choice university.",
    "examples": [
      "He applied to six law schools and got into three of them.",
      "Not everyone who applies gets into the program — competition is fierce.",
      "Congratulations! I heard you got into the graduate school."
    ],
    "dialogue": {
      "a": "Did you hear back from the internship program?",
      "b": "Yes! I got into it — I start in June. I'm so excited!"
    },
    "tip": "get into가 '합격하다'의 의미일 때 목적어는 학교나 프로그램입니다. DAY 28의 '~에 빠지다'와 구별 할 때 목적어 유형을 확인하세요.",
    "coreId": "get"
  },
  {
    "id": "phrasal-030",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 30,
    "expression": "get over (병·슬픔·충격에서)",
    "usage": "회복하다, 극복하다",
    "heading": "get over (병·슬픔·충격에서) 회복하다, 극복하다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "It took her several months to get over the breakup.",
    "examples": [
      "He still hasn't gotten over losing the championship game last year.",
      "She got over the cold pretty quickly this time around.",
      "I can't get over how beautiful the scenery in Iceland was."
    ],
    "dialogue": {
      "a": "Are you still upset about what he said?",
      "b": "I'm trying to get over it, but it really stung."
    },
    "tip": "분리할 수 없는 구동사입니다. 목적어를 항상 over 뒤에 씁니다. I can't get over it!은 '너무 놀랍 다!'는 감탄 표현으로도 쓰입니다.",
    "coreId": "get"
  },
  {
    "id": "phrasal-031",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 31,
    "expression": "get past (장애물·감정을)",
    "usage": "극복하다, 지나쳐 나아가다",
    "heading": "get past (장애물·감정을) 극복하다, 지나쳐 나아가다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "I can't seem to get past the first chapter of this book.",
    "examples": [
      "She found it hard to get past her fear of public speaking.",
      "Once you get past the slow beginning, the novel gets really compelling.",
      "He couldn't get past the fact that she had lied to him."
    ],
    "dialogue": {
      "a": "I keep making the same mistake at the start of my presentation.",
      "b": "You just need to get past that initial nervousness — it gets easier after that."
    },
    "tip": "목적어를 past 뒤에 씁니다. 물리적 장애물과 감정적 장벽 모두에 사용할 수 있는 구동사입니다.",
    "coreId": "get"
  },
  {
    "id": "phrasal-032",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 32,
    "expression": "get something over with (하기",
    "usage": "(하기 싫은 일을) 빨리 끝내 버리다",
    "heading": "get something over with (하기 싫은 일을) 빨리 끝내 버리다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "Let's just get this meeting over with so we can all go home.",
    "examples": [
      "I hate going to the dentist, but let's get it over with today.",
      "She wanted to get the difficult conversation over with as soon as possible.",
      "He decided to get the paperwork over with before the weekend."
    ],
    "dialogue": {
      "a": "I'm really dreading my performance review.",
      "b": "I know, but let's just get it over with. I'm sure it'll go fine."
    },
    "tip": "목적어(thing)가 get과 over 사이에 고정됩니다. 구조: get + 목적어 + over with. 분리 형태가 필수 입니다.",
    "coreId": "get"
  },
  {
    "id": "phrasal-033",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 33,
    "expression": "get through (과제를)",
    "usage": "끝내다; 연락이 되다; 버텨내다",
    "heading": "get through (과제를) 끝내다; 연락이 되다; 버텨내다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "She finally got through all the reports by staying late at the office.",
    "examples": [
      "I tried calling three times but couldn't get through to customer service.",
      "We'll get through this tough period together — don't worry.",
      "It took him two hours to get through his inbox after the long weekend."
    ],
    "dialogue": {
      "a": "I've been trying to reach customer service all morning.",
      "b": "I know — it's really hard to get through. Try calling after noon."
    },
    "tip": "문맥에 따라 '끝내다', '연락이 되다', '버텨내다' 세 가지 의미로 쓰입니다. '연락하다'는 자동사, '끝내 다'는 get through something처럼 목적어를 취합니다.",
    "coreId": "get"
  },
  {
    "id": "phrasal-034",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 34,
    "expression": "give away",
    "usage": "공짜로 주다; (비밀을) 누설하다",
    "heading": "give away 공짜로 주다; (비밀을) 누설하다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "The store was giving away free samples of their new ice cream flavor.",
    "examples": [
      "Don't give away the ending of the movie — I haven't seen it yet!",
      "She gave away most of her old clothes to a local charity.",
      "His nervous laugh gave away the fact that he was hiding something."
    ],
    "dialogue": {
      "a": "Did you tell anyone about the surprise birthday party?",
      "b": "Of course not. I was very careful not to give anything away."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 반드시 give it away처럼 사이에 씁니다. '누설하다'와 '무료로 주다' 두 가지 의미가 있습니다.",
    "coreId": "give"
  },
  {
    "id": "phrasal-035",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 35,
    "expression": "go along with",
    "usage": "동의하다, 따르다",
    "heading": "go along with 동의하다, 따르다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "I didn't fully agree, but I went along with the group's decision.",
    "examples": [
      "She tends to go along with whatever her friends suggest.",
      "He went along with the plan even though he had serious doubts.",
      "Sometimes you have to go along with a decision even if it's not your first choice."
    ],
    "dialogue": {
      "a": "Do you actually like the new open-office layout?",
      "b": "Not really, but I'm just going along with it for now."
    },
    "tip": "삼중 구동사로 분리할 수 없습니다. 목적어를 with 뒤에 씁니다.",
    "coreId": "go"
  },
  {
    "id": "phrasal-036",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 36,
    "expression": "go by (시간이)",
    "usage": "흐르다; (이름으로) 통하다; (규칙을) 따르다",
    "heading": "go by (시간이) 흐르다; (이름으로) 통하다; (규칙을) 따르다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "The afternoon went by so fast — I can't believe it's already 5 o'clock.",
    "examples": [
      "He goes by the nickname 'Ace' among his close friends.",
      "As the weeks went by, she started to feel more confident.",
      "We need to go by the company guidelines on this particular issue."
    ],
    "dialogue": {
      "a": "What should I call you? Your full name is a bit of a mouthful.",
      "b": "Just go by 'Max.' Everyone does."
    },
    "tip": "'시간이 흐르다'는 자동사, '이름으로 통하다'는 go by + 이름, '따르다'는 go by + 규칙입니다. 문맥으 로 구분하세요.",
    "coreId": "go"
  },
  {
    "id": "phrasal-037",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 37,
    "expression": "go into (직업·분야에)",
    "usage": "뛰어들다",
    "heading": "go into (직업·분야에) 뛰어들다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "After finishing her degree, she decided to go into marketing.",
    "examples": [
      "He always wanted to go into medicine but changed his mind in college.",
      "More young people are going into tech-related fields these days.",
      "Why did you decide to go into teaching instead of law?"
    ],
    "dialogue": {
      "a": "Have you decided on a major yet?",
      "b": "I'm seriously thinking about going into environmental science."
    },
    "tip": "go into + 직업·분야는 그 분야에 진입하거나 종사하는 것을 나타냅니다. 분리할 수 없습니다. DAY 38과 같은 형태지만 의미가 다릅니다.",
    "coreId": "go"
  },
  {
    "id": "phrasal-038",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 38,
    "expression": "go into (세부",
    "usage": "(세부 사항을) 자세히 설명하다",
    "heading": "go into (세부 사항을) 자세히 설명하다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "She went into great detail about how the experiment was conducted.",
    "examples": [
      "I don't want to go into all the reasons right now — it's complicated.",
      "He went into a long explanation of why he was late to the meeting.",
      "The report goes into the financial impact of the change in depth."
    ],
    "dialogue": {
      "a": "Can you explain the new policy change?",
      "b": "Sure — do you want me to go into all the details, or just the main points?"
    },
    "tip": "go into detail/explanation처럼 쓰이며 설명의 깊이를 나타냅니다. DAY 37의 '분야에 들어가다'와 형태가 같으니 문맥을 잘 확인하세요.",
    "coreId": "go"
  },
  {
    "id": "phrasal-039",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 39,
    "expression": "go off (알람이)",
    "usage": "울리다; 폭발하다; (음식이) 상하다",
    "heading": "go off (알람이) 울리다; 폭발하다; (음식이) 상하다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "My alarm went off at 6 a.m., but I hit snooze three times.",
    "examples": [
      "The milk went off because I forgot to close the fridge properly.",
      "The fireworks went off right at midnight on New Year's Eve.",
      "A car alarm went off outside and woke everyone in the building up."
    ],
    "dialogue": {
      "a": "What's that smell coming from the kitchen?",
      "b": "I think the leftovers went off. They've been in the fridge for over a week."
    },
    "tip": "자동사입니다. 알람·경보가 '울리다', 음식이 '상하다', 폭발물이 '폭발하다'처럼 문맥에 따라 의미가 달 라집니다.",
    "coreId": "go"
  },
  {
    "id": "phrasal-040",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 40,
    "expression": "go on",
    "usage": "계속되다; (일이) 일어나다",
    "heading": "go on 계속되다; (일이) 일어나다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "What's going on? I can hear shouting from down the hall.",
    "examples": [
      "The meeting went on for two hours longer than anyone expected.",
      "She went on talking even after the bell rang.",
      "Something weird is going on with my computer — it keeps freezing."
    ],
    "dialogue": {
      "a": "Why is everyone crowded outside the building?",
      "b": "I'm not sure. Something must be going on."
    },
    "tip": "자동사입니다. be going on은 '(일이) 벌어지다', go on + -ing는 '계속 ~하다'를 나타냅니다.",
    "coreId": "go"
  },
  {
    "id": "phrasal-041",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 41,
    "expression": "go over",
    "usage": "검토하다, 복습하다",
    "heading": "go over 검토하다, 복습하다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "Let's go over the key points one more time before the exam tomorrow.",
    "examples": [
      "She went over her notes one last time before the big interview.",
      "Can we go over the contract together? I want to make sure I understand everything.",
      "The teacher went over all the homework corrections at the start of class."
    ],
    "dialogue": {
      "a": "Are you ready for the presentation?",
      "b": "Almost — I just need to go over my slides one more time."
    },
    "tip": "분리할 수 없는 구동사입니다. 목적어를 항상 over 뒤에 씁니다.",
    "coreId": "go"
  },
  {
    "id": "phrasal-042",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 42,
    "expression": "go through (힘든",
    "usage": "(힘든 일을) 겪다, 경험하다",
    "heading": "go through (힘든 일을) 겪다, 경험하다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "She went through a really tough time after losing her job.",
    "examples": [
      "No one should have to go through that kind of heartbreak alone.",
      "He went through a rough patch after moving to a new city.",
      "We all go through hard times — what matters is how we come out the other side."
    ],
    "dialogue": {
      "a": "You seem different lately. Is everything okay?",
      "b": "I've been going through some personal stuff, but I'm managing."
    },
    "tip": "go through + 힘든 경험은 분리할 수 없습니다. 주로 부정적이거나 도전적인 경험을 묘사합니다. DAY 43과 같은 형태지만 의미가 다릅니다.",
    "coreId": "go"
  },
  {
    "id": "phrasal-043",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 43,
    "expression": "go through (내용을)",
    "usage": "꼼꼼히 살펴보다, 검토하다",
    "heading": "go through (내용을) 꼼꼼히 살펴보다, 검토하다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "He went through every page of the report before submitting it.",
    "examples": [
      "Can you go through my essay and flag any grammar mistakes?",
      "The customs officer went through all our bags very carefully.",
      "She went through her contact list and deleted numbers she no longer needed."
    ],
    "dialogue": {
      "a": "Did you check the application before sending it?",
      "b": "Yes — I went through it twice. Everything looks good."
    },
    "tip": "go through가 '검토하다'의 뜻일 때도 분리할 수 없습니다. DAY 42의 '겪다'와 구별하려면 목적어가 경험인지 문서·물건인지 확인하세요.",
    "coreId": "go"
  },
  {
    "id": "phrasal-044",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 44,
    "expression": "hang out (친구들과)",
    "usage": "어울리다, 시간을 보내다",
    "heading": "hang out (친구들과) 어울리다, 시간을 보내다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "We used to hang out at the park every weekend when we were kids.",
    "examples": [
      "Do you want to hang out this Friday? We could watch a movie.",
      "She's been hanging out with a new group of people from her gym.",
      "They hung out at the coffee shop for hours without noticing how late it was."
    ],
    "dialogue": {
      "a": "What are your plans for the weekend?",
      "b": "Nothing big — just hanging out with some friends from work."
    },
    "tip": "자동사입니다. '누구와'라고 할 때 hang out with someone을 씁니다. 비격식 표현으로 격식체 상황 에서는 spend time with를 씁니다.",
    "coreId": null
  },
  {
    "id": "phrasal-045",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 45,
    "expression": "hold back",
    "usage": "억제하다; 망설이다, 숨기다",
    "heading": "hold back 억제하다; 망설이다, 숨기다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "She held back her tears during the emotional farewell speech.",
    "examples": [
      "Don't hold back — just tell me how you really feel.",
      "Something seems to be holding him back from applying for the promotion.",
      "He held back a laugh when she mispronounced the word."
    ],
    "dialogue": {
      "a": "You seem hesitant. Is there something you're not telling me?",
      "b": "I've been holding back because I didn't want to upset you."
    },
    "tip": "분리 가능한 구동사입니다. 감정을 숨길 때는 자동사(hold back)로, 사람을 억제할 때는 hold someone back처럼 씁니다.",
    "coreId": null
  },
  {
    "id": "phrasal-046",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 46,
    "expression": "hold off",
    "usage": "미루다; 잠시 기다리다",
    "heading": "hold off 미루다; 잠시 기다리다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "Let's hold off on making a decision until we have more information.",
    "examples": [
      "Can you hold off sending the email until I review it?",
      "She held off buying the laptop, hoping the price would drop.",
      "Hold off on signing the contract — we're still in negotiations."
    ],
    "dialogue": {
      "a": "Should I tell the team about the changes right now?",
      "b": "Hold off for a bit — let's wait until everything is confirmed."
    },
    "tip": "뒤에 동명사(-ing)나 명사가 올 때 on을 씁니다: hold off on something. '잠시 기다리다'라는 뜻도 있습니다.",
    "coreId": "have"
  },
  {
    "id": "phrasal-047",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 47,
    "expression": "hold up",
    "usage": "지연시키다, 늦추다",
    "heading": "hold up 지연시키다, 늦추다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "An accident on the highway held up traffic for nearly three hours.",
    "examples": [
      "What's holding up the delivery? It was supposed to arrive yesterday.",
      "Sorry I'm late — I got held up at the office with an urgent call.",
      "The missing paperwork is holding up the entire approval process."
    ],
    "dialogue": {
      "a": "Why hasn't the shipment arrived yet?",
      "b": "There's a customs issue holding it up. It should clear by tomorrow."
    },
    "tip": "분리 가능한 구동사입니다. 피동형 be held up도 자주 쓰입니다: I got held up = '나 발이 묶였어.' DAY 48과 형태가 같으니 의미를 비교하세요.",
    "coreId": null
  },
  {
    "id": "phrasal-048",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 48,
    "expression": "hold up (품질·상태가)",
    "usage": "유지되다, 견디다",
    "heading": "hold up (품질·상태가) 유지되다, 견디다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "These shoes have really held up well despite all the hiking I've done.",
    "examples": [
      "How is the old roof holding up in all this rain?",
      "The theory doesn't hold up when you look at the data more carefully.",
      "That bridge has held up remarkably well for over a hundred years."
    ],
    "dialogue": {
      "a": "Is that old laptop still working?",
      "b": "Surprisingly, yes. It's really held up well over the years."
    },
    "tip": "'버티다·유지되다'의 의미일 때는 자동사로 분리하지 않습니다. DAY 47의 '지연시키다'와 달리 주어 가 물건·이론일 때 이 의미로 자주 씁니다.",
    "coreId": "have"
  },
  {
    "id": "phrasal-049",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 49,
    "expression": "keep up with (속도·변화를)",
    "usage": "따라잡다, 따라가다",
    "heading": "keep up with (속도·변화를) 따라잡다, 따라가다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "It's hard to keep up with all the rapid changes happening in technology.",
    "examples": [
      "She runs so fast — I can barely keep up with her.",
      "He reads the news every morning to keep up with current events.",
      "It's exhausting trying to keep up with everyone's social media posts."
    ],
    "dialogue": {
      "a": "This class is moving so fast.",
      "b": "I know — I'm struggling to keep up with all the reading assignments."
    },
    "tip": "삼중 구동사로 분리할 수 없습니다. '꾸준히 연락하다'의 뜻으로도 씁니다: keep up with an old friend.",
    "coreId": "keep"
  },
  {
    "id": "phrasal-050",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 50,
    "expression": "leave out",
    "usage": "빠뜨리다, 제외하다",
    "heading": "leave out 빠뜨리다, 제외하다",
    "chapterKo": "일·문제 해결 구동사",
    "chapterEn": "Getting Things Done",
    "model": "You left out an important step in the installation instructions.",
    "examples": [
      "Don't leave anyone out when you send out the invitations.",
      "She left out the most critical part of her summary.",
      "Double-check that you haven't left any key details out of the report."
    ],
    "dialogue": {
      "a": "The recipe looks different from what we made before.",
      "b": "Oh no — I think I left out the baking powder!"
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 leave it/them out처럼 사이에 씁니다.",
    "coreId": null
  },
  {
    "id": "phrasal-051",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 51,
    "expression": "let go of (물건을)",
    "usage": "놓다; (감정·과거를) 놓아주다",
    "heading": "let go of (물건을) 놓다; (감정·과거를) 놓아주다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "You need to let go of that anger if you want to move forward.",
    "examples": [
      "She let go of his hand as the elevator doors opened.",
      "It's surprisingly hard to let go of old habits.",
      "He finally let go of his resentment and reached out to apologize."
    ],
    "dialogue": {
      "a": "I still feel terrible about what happened at the party.",
      "b": "You've got to let go of it. Everyone has moved on."
    },
    "tip": "삼중 구동사입니다. 목적어를 of 뒤에 씁니다. '포기하다'가 아닌 '(쥐고 있던 것을) 풀어주다'는 뉘앙 스입니다.",
    "coreId": "go"
  },
  {
    "id": "phrasal-052",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 52,
    "expression": "look at",
    "usage": "살펴보다; 고려하다",
    "heading": "look at 살펴보다; 고려하다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "Can you look at this contract and tell me if anything seems off?",
    "examples": [
      "Let's look at all our options carefully before making a final decision.",
      "The doctor looked at the X-ray and said everything looked fine.",
      "We need to look at the numbers more carefully before we launch."
    ],
    "dialogue": {
      "a": "The engine is making a strange noise again.",
      "b": "Let me look at it after work — I've done some basic car repairs before."
    },
    "tip": "분리할 수 없는 구동사입니다. '눈으로 보다'부터 '분석적으로 살펴보다'까지 폭넓게 사용됩니다.",
    "coreId": "look"
  },
  {
    "id": "phrasal-053",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 53,
    "expression": "look down on",
    "usage": "무시하다, 낮게 보다",
    "heading": "look down on 무시하다, 낮게 보다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "Nobody enjoys working with someone who looks down on their coworkers.",
    "examples": [
      "He used to look down on people who didn't go to college.",
      "Don't look down on someone just because they have a different background.",
      "She felt that her wealthy neighbors were looking down on her family."
    ],
    "dialogue": {
      "a": "He acts like he's better than everyone else on the team.",
      "b": "I know. It's really off-putting when people look down on others like that."
    },
    "tip": "삼중 구동사로 분리할 수 없습니다. 반대 표현은 look up to (존경하다)입니다.",
    "coreId": "look"
  },
  {
    "id": "phrasal-054",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 54,
    "expression": "look into",
    "usage": "조사하다, 알아보다",
    "heading": "look into 조사하다, 알아보다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "The company is looking into the complaints about the new product.",
    "examples": [
      "I'll look into the issue and get back to you by end of day.",
      "She looked into several graduate programs before making a final decision.",
      "Police are actively looking into the cause of the warehouse fire."
    ],
    "dialogue": {
      "a": "I'm not sure why the system crashed this morning.",
      "b": "I'll look into it first thing tomorrow and let you know."
    },
    "tip": "분리할 수 없는 구동사입니다. 목적어를 into 뒤에 씁니다. investigate보다 덜 공식적인 표현입니다.",
    "coreId": "look"
  },
  {
    "id": "phrasal-055",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 55,
    "expression": "look over",
    "usage": "훑어보다, 빠르게 검토하다",
    "heading": "look over 훑어보다, 빠르게 검토하다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "Can you look over my resume before I send it out?",
    "examples": [
      "She quickly looked over the agenda before the meeting started.",
      "He looked over the contract one more time just to be safe.",
      "The supervisor looked over the finished report and signed off on it."
    ],
    "dialogue": {
      "a": "Is my essay ready to hand in?",
      "b": "Let me look it over first — I'll be done in about ten minutes."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 look it over처럼 사이에 씁니다. go over보다 가볍게 훑어보는 느낌입니다.",
    "coreId": "look"
  },
  {
    "id": "phrasal-056",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 56,
    "expression": "look up (정보를)",
    "usage": "찾아보다; (상황이) 나아지다",
    "heading": "look up (정보를) 찾아보다; (상황이) 나아지다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "If you don't know what a word means, just look it up in a dictionary.",
    "examples": [
      "Things are really starting to look up since she got the new position.",
      "Can you look up the address for the venue and send it to me?",
      "I looked up his old articles and was genuinely impressed by his writing."
    ],
    "dialogue": {
      "a": "Business has been really slow this quarter.",
      "b": "Don't worry — things are starting to look up. We just landed a big client."
    },
    "tip": "'찾아보다'의 의미일 때 분리 가능: look it up. '상황이 나아지다'의 의미일 때는 자동사로 분리 없이 씁니다.",
    "coreId": "look"
  },
  {
    "id": "phrasal-057",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 57,
    "expression": "loosen up",
    "usage": "긴장을 풀다; 덜 엄격해지다",
    "heading": "loosen up 긴장을 풀다; 덜 엄격해지다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "Take a deep breath and loosen up — this is just a casual get-together.",
    "examples": [
      "She loosened up after the first few minutes of the presentation.",
      "The new manager has started to loosen up the office's strict dress code.",
      "He takes everything so seriously — I really wish he'd loosen up a little."
    ],
    "dialogue": {
      "a": "You seem really tense around the new team members.",
      "b": "I know. I just need to loosen up and stop overthinking everything."
    },
    "tip": "자동사('긴장이 풀리다')로도, 타동사(loosen someone up = '~를 편하게 해주다')로도 씁니다. 타동 사일 때 분리 가능합니다.",
    "coreId": "get"
  },
  {
    "id": "phrasal-058",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 58,
    "expression": "make do with",
    "usage": "있는 것으로 때우다, 그럭저럭 쓰다",
    "heading": "make do with 있는 것으로 때우다, 그럭저럭 쓰다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "We ran out of butter, so I'll just make do with olive oil.",
    "examples": [
      "They made do with basic supplies during the camping trip.",
      "I didn't have the right tool, but I made do with what I had.",
      "When the power went out, we made do with candles for light."
    ],
    "dialogue": {
      "a": "We only have three chairs for four guests.",
      "b": "That's fine — I'll make do with a stool from the other room."
    },
    "tip": "삼중 구동사로 분리할 수 없습니다. 목적어를 with 뒤에 씁니다. '최선을 다하다'가 아닌 '있는 것으로 버티다'의 뉘앙스입니다.",
    "coreId": "do"
  },
  {
    "id": "phrasal-059",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 59,
    "expression": "make out (뜻을)",
    "usage": "이해하다; 알아보다; 해나가다",
    "heading": "make out (뜻을) 이해하다; 알아보다; 해나가다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "I could barely make out what he was saying over all the background noise.",
    "examples": [
      "Can you make out that sign from here? I forgot my glasses.",
      "How are you making out in the new apartment so far?",
      "She made out that everything was fine, but I could tell she was upset."
    ],
    "dialogue": {
      "a": "I can't make out this handwriting at all.",
      "b": "Yeah, the doctor's notes are always nearly impossible to read."
    },
    "tip": "분리 가능한 구동사입니다. '이해하다·알아보다'는 make something out, '해나가다'는 How are you making out?처럼 자동사로 씁니다.",
    "coreId": "make"
  },
  {
    "id": "phrasal-060",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 60,
    "expression": "make up for",
    "usage": "보충하다, 만회하다",
    "heading": "make up for 보충하다, 만회하다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "He worked extra hours on Saturday to make up for the days he missed.",
    "examples": [
      "No amount of money can truly make up for lost time.",
      "She baked a cake to make up for forgetting their anniversary.",
      "A strong fourth quarter made up for the company's slow start to the year."
    ],
    "dialogue": {
      "a": "I'm so sorry I missed your recital.",
      "b": "Don't worry — you can make up for it by coming to the next one."
    },
    "tip": "삼중 구동사로 분리할 수 없습니다. 목적어를 for 뒤에 씁니다. '보상·만회'의 뉘앙스입니다.",
    "coreId": "make"
  },
  {
    "id": "phrasal-061",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 61,
    "expression": "mess around",
    "usage": "빈둥거리다; 장난치다; 만지작거리다",
    "heading": "mess around 빈둥거리다; 장난치다; 만지작거리다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "Stop messing around and focus — the deadline is tomorrow morning.",
    "examples": [
      "The kids were messing around in the backyard all afternoon.",
      "He likes to mess around on the guitar when he has free time.",
      "Don't mess around with that old wiring — it could be really dangerous."
    ],
    "dialogue": {
      "a": "Have you started the assignment yet?",
      "b": "Not really. I've just been messing around online all evening."
    },
    "tip": "자동사입니다. '만지작거리다'의 뜻일 때 mess around with something을 씁니다. 구어체 표현입니 다.",
    "coreId": null
  },
  {
    "id": "phrasal-062",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 62,
    "expression": "mess up",
    "usage": "망치다; 엉망으로 만들다",
    "heading": "mess up 망치다; 엉망으로 만들다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "I totally messed up the presentation — I'd loaded the wrong slides.",
    "examples": [
      "Don't mess up the kitchen right after I cleaned it.",
      "He messed up the order and had to start everything over.",
      "She was so nervous that she messed up her lines during the audition."
    ],
    "dialogue": {
      "a": "How did the job interview go?",
      "b": "Not great. I totally messed up one of the technical questions."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 messed it up처럼 사이에 씁니다. 구어체로 실수나 실 패를 표현할 때 자주 씁니다.",
    "coreId": null
  },
  {
    "id": "phrasal-063",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 63,
    "expression": "mess with",
    "usage": "건드리다; 귀찮게 하다; 장난하다",
    "heading": "mess with 건드리다; 귀찮게 하다; 장난하다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "Don't mess with those settings — you might break the whole system.",
    "examples": [
      "He's not someone you want to mess with — he has a terrible temper.",
      "Are you messing with me right now? That story cannot be true.",
      "Don't mess with her head — she's been through enough already."
    ],
    "dialogue": {
      "a": "Someone changed all my desktop icons as a joke.",
      "b": "Seriously? Who would mess with your computer like that?"
    },
    "tip": "분리할 수 없는 구동사입니다. '건드리다'는 물리적·감정적 의미 모두 가능합니다. Don't mess with me!는 경고 표현으로 자주 씁니다.",
    "coreId": "break"
  },
  {
    "id": "phrasal-064",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 64,
    "expression": "miss out on (좋은",
    "usage": "(좋은 기회·경험을) 놓치다",
    "heading": "miss out on (좋은 기회·경험을) 놓치다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "If you leave the party early, you'll miss out on the birthday cake.",
    "examples": [
      "I missed out on a great deal because I didn't check my email in time.",
      "She doesn't want to miss out on any part of the travel experience.",
      "Don't miss out on this limited-time offer — it ends tonight."
    ],
    "dialogue": {
      "a": "Are you coming to the class reunion?",
      "b": "I really should go. I don't want to miss out on seeing everyone."
    },
    "tip": "삼중 구동사입니다. 목적어를 on 뒤에 씁니다. 분리할 수 없습니다. '아쉽게 놓쳤다'는 뉘앙스가 강합 니다.",
    "coreId": null
  },
  {
    "id": "phrasal-065",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 65,
    "expression": "move on",
    "usage": "앞으로 나아가다; (과거를) 털어버리다",
    "heading": "move on 앞으로 나아가다; (과거를) 털어버리다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "It's time to move on and start fresh somewhere new.",
    "examples": [
      "She moved on from her old job and found something much more fulfilling.",
      "Let's move on to the next agenda item — we're running short on time.",
      "He found it really hard to move on after the divorce."
    ],
    "dialogue": {
      "a": "Do you still think about the mistakes you made?",
      "b": "Less and less. I've learned to move on and focus on what's ahead."
    },
    "tip": "자동사입니다. '다음으로 넘어가다'는 move on to something으로 씁니다. 감정적·상황적 맥락 모두 에 사용 가능합니다.",
    "coreId": null
  },
  {
    "id": "phrasal-066",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 66,
    "expression": "pass for ~로",
    "usage": "통하다, ~처럼 보이다",
    "heading": "pass for ~로 통하다, ~처럼 보이다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "With that accent, she could easily pass for a native English speaker.",
    "examples": [
      "The replica was so well done it could pass for the original painting.",
      "He's so tall and mature-looking that he easily passes for someone in his thirties.",
      "Do you think this outfit could pass for business casual at a Friday meeting?"
    ],
    "dialogue": {
      "a": "Do I look professional enough for the interview?",
      "b": "Definitely. You could pass for someone with ten years of experience."
    },
    "tip": "분리할 수 없는 구동사입니다. 주로 외모·언어·특성이 다른 것처럼 보일 때 씁니다.",
    "coreId": null
  },
  {
    "id": "phrasal-067",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 67,
    "expression": "pass up (기회를)",
    "usage": "거절하다, 포기하다",
    "heading": "pass up (기회를) 거절하다, 포기하다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "She passed up a major promotion because it required too much travel.",
    "examples": [
      "Don't pass up this chance — opportunities like this are rare.",
      "He passed up a full scholarship to stay close to his family.",
      "I can't believe you passed up a free ticket to the championship game."
    ],
    "dialogue": {
      "a": "Why didn't you apply for the research grant?",
      "b": "I know — I shouldn't have passed it up. I just didn't think I was qualified enough."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 passed it up처럼 사이에 씁니다. 항상 기회·제안에 사 용됩니다.",
    "coreId": null
  },
  {
    "id": "phrasal-068",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 68,
    "expression": "pick up",
    "usage": "들어올리다; (자연스럽게) 익히다; 데리러 가다; 나아지다",
    "heading": "pick up 들어올리다; (자연스럽게) 익히다; 데리러 가다; 나아지다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "Can you pick me up from the airport on Friday evening?",
    "examples": [
      "She picked up a few useful phrases in Japanese during her trip.",
      "Business really picked up after they launched the redesigned website.",
      "He picked up the package from the front desk on his way to the office."
    ],
    "dialogue": {
      "a": "Your French has gotten so much better lately!",
      "b": "Thanks! I picked it up from living in Montreal for a year."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 반드시 사이에 씁니다: pick it up. 매우 다양한 의미가 있으므로 문맥이 중요합니다.",
    "coreId": null
  },
  {
    "id": "phrasal-069",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 69,
    "expression": "pick up on (미묘한",
    "usage": "(미묘한 것을) 알아채다, 감지하다",
    "heading": "pick up on (미묘한 것을) 알아채다, 감지하다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "She's incredibly good at picking up on other people's emotions.",
    "examples": [
      "Did you pick up on how nervous he was during the interview?",
      "Kids often pick up on tension between adults even when nothing is said.",
      "I picked up on a few inconsistencies in his story right away."
    ],
    "dialogue": {
      "a": "I think something is bothering her, but she won't say what.",
      "b": "I picked up on that too — she's been unusually quiet all day."
    },
    "tip": "삼중 구동사로 분리할 수 없습니다. '암시·기분·분위기를 감지하다'는 뉘앙스가 있습니다.",
    "coreId": null
  },
  {
    "id": "phrasal-070",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 70,
    "expression": "pull off (어려운",
    "usage": "(어려운 일을) 해내다, 성공시키다",
    "heading": "pull off (어려운 일을) 해내다, 성공시키다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "I can't believe they pulled off a surprise party for over fifty people!",
    "examples": [
      "She pulled off a perfect score on the most difficult exam of the semester.",
      "He wasn't sure he could pull it off, but the pitch went beautifully.",
      "The team pulled off an incredible comeback in the final minutes of the game."
    ],
    "dialogue": {
      "a": "Do you think we can plan the whole event in under a week?",
      "b": "It'll be tight, but I think we can pull it off."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 pull it off처럼 사이에 씁니다. 주로 어렵거나 인상적인 성취에 씁니다.",
    "coreId": null
  },
  {
    "id": "phrasal-071",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 71,
    "expression": "put away (제자리에)",
    "usage": "치우다; (돈을) 저축하다",
    "heading": "put away (제자리에) 치우다; (돈을) 저축하다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "Could you put away the dishes once they finish drying?",
    "examples": [
      "She puts away a portion of every paycheck into her savings account.",
      "The kids never put their toys away after they're done playing.",
      "He put away his laptop and called it a night at ten."
    ],
    "dialogue": {
      "a": "The living room looks so much cleaner today!",
      "b": "Thanks — I finally put everything away instead of leaving it on the couch."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 put it away처럼 사이에 씁니다. '저축하다'의 뜻으로도 자주 씁니다.",
    "coreId": "put"
  },
  {
    "id": "phrasal-072",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 72,
    "expression": "put down (내려)놓다;",
    "usage": "깎아내리다; 기록하다",
    "heading": "put down (내려)놓다; 깎아내리다; 기록하다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "Once I started the thriller novel, I honestly couldn't put it down.",
    "examples": [
      "He has a habit of putting others down to make himself look better.",
      "Just put down your name and email address on the sign-up form.",
      "She gently put the sleeping baby down in the crib and stepped out."
    ],
    "dialogue": {
      "a": "My coworker keeps making little digs about my work.",
      "b": "That's awful — no one should put you down like that."
    },
    "tip": "분리 가능한 구동사입니다. '깎아내리다'는 put someone down, '내려놓다'는 put something down처럼 씁니다.",
    "coreId": "put"
  },
  {
    "id": "phrasal-073",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 73,
    "expression": "put off",
    "usage": "미루다; 거리감을 주다, 마음을 돌리다",
    "heading": "put off 미루다; 거리감을 주다, 마음을 돌리다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "She kept putting off the difficult conversation, hoping things would improve.",
    "examples": [
      "Don't put off until tomorrow what you can do today.",
      "His arrogant attitude put a lot of people off right away.",
      "The meeting was put off by a week due to a scheduling conflict."
    ],
    "dialogue": {
      "a": "Have you made the dentist appointment yet?",
      "b": "I keep putting it off. I really don't like going."
    },
    "tip": "분리 가능한 구동사입니다. '미루다'의 의미로 대명사를 썼을 때 반드시 put it off처럼 사이에 씁니다. '거리감을 주다'도 중요한 의미입니다.",
    "coreId": "put"
  },
  {
    "id": "phrasal-074",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 74,
    "expression": "put on",
    "usage": "입다; 꾸미다; (행사를) 개최하다",
    "heading": "put on 입다; 꾸미다; (행사를) 개최하다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "Put on a jacket — it's a lot chillier outside than it looks.",
    "examples": [
      "She put on a brave face even though she was incredibly scared.",
      "The school is putting on a big musical production this spring.",
      "He put on a bit of weight over the holiday season."
    ],
    "dialogue": {
      "a": "Are you nervous about hosting the dinner party?",
      "b": "A little, but I'm just going to put on my best smile and enjoy it."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 반드시 put it on처럼 사이에 씁니다. '입다·착용하다'는 take off의 반대 표현입니다.",
    "coreId": "put"
  },
  {
    "id": "phrasal-075",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 75,
    "expression": "put together",
    "usage": "조립하다; 구성하다; 준비하다",
    "heading": "put together 조립하다; 구성하다; 준비하다",
    "chapterKo": "사람·관계·태도 구동사",
    "chapterEn": "People & Perception",
    "model": "It took us nearly three hours to put together the bookshelf from the kit.",
    "examples": [
      "She put together a polished presentation in under an hour.",
      "They put together a detailed proposal and sent it to the client.",
      "He put together a great playlist for the long road trip."
    ],
    "dialogue": {
      "a": "Who put together this quarterly report? It's really thorough.",
      "b": "Amy did — she spent the whole week on it."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 put it together처럼 사이에 씁니다.",
    "coreId": "put"
  },
  {
    "id": "phrasal-076",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 76,
    "expression": "put up (구조물을)",
    "usage": "세우다; 숙소를 제공하다",
    "heading": "put up (구조물을) 세우다; 숙소를 제공하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "The city put up new traffic signs at every major intersection.",
    "examples": [
      "Can you put up our visiting friends for the weekend?",
      "We put up a tent on the campsite before it got dark.",
      "They put up a large banner to welcome the incoming class."
    ],
    "dialogue": {
      "a": "Where will your cousin stay when she visits next month?",
      "b": "We'll put her up in the guest room — it's no trouble at all."
    },
    "tip": "분리 가능한 구동사입니다. '숙소를 제공하다'는 put someone up, '세우다'는 put something up처 럼 씁니다.",
    "coreId": "put"
  },
  {
    "id": "phrasal-077",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 77,
    "expression": "put up with",
    "usage": "참다, 견디다",
    "heading": "put up with 참다, 견디다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "I don't know how she puts up with all that noise from the neighbors.",
    "examples": [
      "He's put up with that horrible commute for over five years.",
      "You really shouldn't have to put up with that kind of treatment.",
      "I can put up with a lot, but this situation has gone too far."
    ],
    "dialogue": {
      "a": "Your neighbor plays loud music past midnight?",
      "b": "Every single night. I've been putting up with it for months."
    },
    "tip": "삼중 구동사로 분리할 수 없습니다. 목적어를 with 뒤에 씁니다. tolerate보다 더 구어체적인 표현입 니다.",
    "coreId": "put"
  },
  {
    "id": "phrasal-078",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 78,
    "expression": "run into",
    "usage": "우연히 만나다; 문제에 부딪히다",
    "heading": "run into 우연히 만나다; 문제에 부딪히다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "I ran into my old college professor at the grocery store yesterday.",
    "examples": [
      "The project ran into unexpected delays because of supply shortages.",
      "She ran into an old childhood friend while traveling through Europe.",
      "We ran into some serious technical problems right before the launch."
    ],
    "dialogue": {
      "a": "You won't believe who I ran into at the gym this morning — my old boss!",
      "b": "No way! That must have been so awkward."
    },
    "tip": "분리할 수 없는 구동사입니다. '사람을 우연히 만나다'와 '문제에 부딪히다' 두 가지 의미가 있습니다.",
    "coreId": "run"
  },
  {
    "id": "phrasal-079",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 79,
    "expression": "settle for (이상적이지",
    "usage": "(이상적이지 않은 것에) 만족하다, 타협하다",
    "heading": "settle for (이상적이지 않은 것에) 만족하다, 타협하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "Don't settle for a job you hate just because it pays well.",
    "examples": [
      "She refused to settle for anything less than her best.",
      "When the restaurant was fully booked, we settled for takeout.",
      "You deserve better — don't settle for someone who doesn't appreciate you."
    ],
    "dialogue": {
      "a": "The apartment is a bit small, but it's in a great location.",
      "b": "Let's keep looking a bit longer. I don't want us to settle for something we'll regret."
    },
    "tip": "분리할 수 없는 구동사입니다. 목적어를 for 뒤에 씁니다. 원하는 것을 못 얻어서 차선을 택하는 뉘앙 스입니다.",
    "coreId": null
  },
  {
    "id": "phrasal-080",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 80,
    "expression": "show off",
    "usage": "자랑하다; 과시하다",
    "heading": "show off 자랑하다; 과시하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "He was showing off his new sports car to everyone in the parking lot.",
    "examples": [
      "She designed the garden herself and loves showing it off to guests.",
      "Stop showing off — nobody likes someone who brags all the time.",
      "The kids were showing off their new dance moves for their parents."
    ],
    "dialogue": {
      "a": "Did you see Mark's new watch?",
      "b": "Yes — he kept showing it off during the entire meeting."
    },
    "tip": "분리 가능한 구동사입니다. 자동사로 쓰면 '잘난 척하다', 타동사로 show something off을 쓰면 '~을 자랑하다'입니다.",
    "coreId": null
  },
  {
    "id": "phrasal-081",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 81,
    "expression": "slack off",
    "usage": "태만해지다, 느슨해지다",
    "heading": "slack off 태만해지다, 느슨해지다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "He started to slack off noticeably after getting a comfortable raise.",
    "examples": [
      "Don't slack off this semester — final exams are just around the corner.",
      "The whole team slacked off when the manager was traveling.",
      "She had been slacking off on her workouts and really noticed the difference."
    ],
    "dialogue": {
      "a": "You seem less focused than usual lately.",
      "b": "I know. I've been slacking off and really need to get back on track."
    },
    "tip": "자동사입니다. 분리하지 않으며 목적어를 취하지 않습니다. 격식 없는 표현으로 직장이나 학업 상황 에서 자주 씁니다.",
    "coreId": null
  },
  {
    "id": "phrasal-082",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 82,
    "expression": "sort out",
    "usage": "해결하다; 정리하다",
    "heading": "sort out 해결하다; 정리하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "We need to sort out the scheduling conflict before the project kicks off.",
    "examples": [
      "She spent all Saturday sorting out her cluttered closet.",
      "They sorted out their differences and shook hands like professionals.",
      "Can you sort out which files are duplicates and delete them?"
    ],
    "dialogue": {
      "a": "There's a mix-up with the hotel reservation.",
      "b": "Don't worry — let me call them and sort it out right now."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 sort it out처럼 사이에 씁니다. 영국 영어에서 특히 자 주 쓰이는 표현입니다.",
    "coreId": "need"
  },
  {
    "id": "phrasal-083",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 83,
    "expression": "stick around",
    "usage": "근처에 머물다; 기다리다",
    "heading": "stick around 근처에 머물다; 기다리다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "Stick around after the event — we're all going out for pizza.",
    "examples": [
      "He stuck around after the meeting to ask the speaker a few questions.",
      "If you stick around, the band usually plays an encore.",
      "She didn't stick around long enough to see how the story ended."
    ],
    "dialogue": {
      "a": "Are you leaving already?",
      "b": "I was thinking about it — should I stick around a bit longer?"
    },
    "tip": "자동사이며 목적어를 취하지 않습니다. '근처에 머물다'라는 의미가 이미 around에 포함되어 있습니 다.",
    "coreId": null
  },
  {
    "id": "phrasal-084",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 84,
    "expression": "stick it out (힘든",
    "usage": "(힘든 일을) 끝까지 버티다",
    "heading": "stick it out (힘든 일을) 끝까지 버티다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "The first few weeks were rough, but she decided to stick it out.",
    "examples": [
      "Sticking it out through the long training program was definitely worth it.",
      "Stick it out — the hardest part is almost over.",
      "They had a tough year but stuck it out and the business gradually improved."
    ],
    "dialogue": {
      "a": "I'm thinking about quitting the certification course.",
      "b": "You're almost done — just stick it out for two more weeks!"
    },
    "tip": "목적어가 항상 it으로 고정된 관용 표현입니다. 구조: stick + it + out. 이 분리 형태가 고정되어 있습 니다.",
    "coreId": null
  },
  {
    "id": "phrasal-085",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 85,
    "expression": "stop by",
    "usage": "잠깐 들르다",
    "heading": "stop by 잠깐 들르다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "I'll stop by the pharmacy on my way home and pick up your prescription.",
    "examples": [
      "Feel free to stop by anytime — the door is always open.",
      "She stopped by the office just to say hello and drop off cookies.",
      "Can you stop by the store and grab some milk on your way home?"
    ],
    "dialogue": {
      "a": "Will I see you at the conference tomorrow?",
      "b": "I can't stay long, but I'll stop by during the morning session."
    },
    "tip": "자동사입니다. 보통 stop by + 장소로 써요: stop by the café / stop by my office. 짧게 들르는 방문을 나타냅니다.",
    "coreId": null
  },
  {
    "id": "phrasal-086",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 86,
    "expression": "take away",
    "usage": "가져가다; 제거하다; (교훈을) 얻다",
    "heading": "take away 가져가다; 제거하다; (교훈을) 얻다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "The biggest thing I took away from that seminar was the power of clear communication.",
    "examples": [
      "They took away his driver's license after the accident.",
      "All the construction noise really takes away from the neighborhood's charm.",
      "What did you take away from the leadership training session?"
    ],
    "dialogue": {
      "a": "Did the workshop change your perspective at all?",
      "b": "Definitely. The main thing I took away was that I need to delegate more."
    },
    "tip": "분리 가능한 구동사입니다. '교훈을 얻다'의 뜻일 때는 take away from something처럼 from을 추 가합니다.",
    "coreId": "take"
  },
  {
    "id": "phrasal-087",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 87,
    "expression": "take back (말을)",
    "usage": "취소하다; (물건을) 반납하다",
    "heading": "take back (말을) 취소하다; (물건을) 반납하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "I shouldn't have said that — I take it back completely.",
    "examples": [
      "She took the broken blender back to the store and got a full refund.",
      "He took back everything he said once he heard the full story.",
      "I take back what I said earlier — you were absolutely right."
    ],
    "dialogue": {
      "a": "You said my idea was completely unrealistic!",
      "b": "I know, and I take it back — it actually has a lot of potential."
    },
    "tip": "분리 가능한 구동사입니다. '말을 취소하다'는 주로 take it back, '물건을 반납하다'는 take something back처럼 씁니다.",
    "coreId": "take"
  },
  {
    "id": "phrasal-088",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 88,
    "expression": "take off (옷을)",
    "usage": "벗다; 이륙하다; 급성장하다",
    "heading": "take off (옷을) 벗다; 이륙하다; 급성장하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "The business really started to take off after their social media campaign went viral.",
    "examples": [
      "Take off your shoes before you come inside, please.",
      "Our flight takes off at 7 a.m., so we need to leave the hotel by 5.",
      "Her acting career took off after her first major studio role."
    ],
    "dialogue": {
      "a": "I heard their new product is selling incredibly well.",
      "b": "It's taken off completely — they can barely keep it in stock."
    },
    "tip": "'옷을 벗다'는 분리 가능: take it off. '이륙하다·급성장하다'는 자동사로 분리 없이 씁니다. 의미별로 자동사/타동사가 다릅니다.",
    "coreId": "take"
  },
  {
    "id": "phrasal-089",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 89,
    "expression": "take on (책임을)",
    "usage": "맡다; 고용하다",
    "heading": "take on (책임을) 맡다; 고용하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "She took on an extra project even though her schedule was already packed.",
    "examples": [
      "The company is taking on twenty new interns this summer.",
      "He doesn't like to take on more than he can realistically handle.",
      "Don't take on too many commitments at once — you'll burn out."
    ],
    "dialogue": {
      "a": "They offered me the team lead position.",
      "b": "That's wonderful! Are you going to take it on?"
    },
    "tip": "분리 가능한 구동사입니다. '책임을 받아들이다'는 take on + 책임, '고용하다'는 take on + 사람으로 씁니다.",
    "coreId": "take"
  },
  {
    "id": "phrasal-090",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 90,
    "expression": "take out",
    "usage": "꺼내다; 데리고 나가다; (허가를) 받다",
    "heading": "take out 꺼내다; 데리고 나가다; (허가를) 받다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "He took her out to a fancy restaurant for their anniversary dinner.",
    "examples": [
      "She took out her notebook and started jotting down ideas.",
      "You'll likely need to take out a loan to cover the full renovation cost.",
      "Can you take out the trash on your way out this morning?"
    ],
    "dialogue": {
      "a": "What are you doing for your mom's birthday?",
      "b": "I'm going to take her out to her absolute favorite restaurant."
    },
    "tip": "분리 가능한 구동사입니다. 대명사 목적어는 take it/her out처럼 사이에 씁니다. 문맥에 따라 의미가 매우 다양합니다.",
    "coreId": "take"
  },
  {
    "id": "phrasal-091",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 91,
    "expression": "take up (취미를)",
    "usage": "시작하다; (시간·공간을) 차지하다",
    "heading": "take up (취미를) 시작하다; (시간·공간을) 차지하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "She took up photography after retiring and absolutely fell in love with it.",
    "examples": [
      "That sofa takes up way too much space in the living room.",
      "He took up running to help manage his anxiety.",
      "She decided to take the company up on their generous offer."
    ],
    "dialogue": {
      "a": "I'm looking for something new to do with my spare time.",
      "b": "You should take up a hobby — maybe watercolor painting or gardening."
    },
    "tip": "분리 가능한 구동사입니다. '취미를 시작하다'는 take up + 취미, '공간을 차지하다'는 take up + 공간 으로 씁니다.",
    "coreId": "take"
  },
  {
    "id": "phrasal-092",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 92,
    "expression": "tell off",
    "usage": "야단치다, 꾸짖다",
    "heading": "tell off 야단치다, 꾸짖다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "The teacher told him off for talking during the exam.",
    "examples": [
      "She finally told off her coworker for constantly interrupting her in meetings.",
      "He got told off by his manager for missing yet another deadline.",
      "I almost told off that rude customer, but I managed to stay professional."
    ],
    "dialogue": {
      "a": "Did you say anything to the neighbor about the late-night noise?",
      "b": "I did — I finally told him off. He had no idea how loud he was being."
    },
    "tip": "분리 가능한 구동사입니다. 야단맞는 사람을 tell과 off 사이에 씁니다: told him off. 직접 맞닥뜨려 꾸짖는 느낌입니다.",
    "coreId": "tell"
  },
  {
    "id": "phrasal-093",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 93,
    "expression": "top off",
    "usage": "마무리하다; (음료 등을) 가득 채우다",
    "heading": "top off 마무리하다; (음료 등을) 가득 채우다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "Let me top off your glass — it's looking almost empty.",
    "examples": [
      "She topped off the meal with a homemade tiramisu.",
      "The warm weather and great company perfectly topped off a wonderful day.",
      "Can you top off my coffee? I need one more cup to get through the afternoon."
    ],
    "dialogue": {
      "a": "Would you like a little more water?",
      "b": "Just a touch, thanks — go ahead and top it off."
    },
    "tip": "분리 가능한 구동사입니다. 음료나 연료처럼 물리적으로 채울 때와 경험의 마지막을 장식할 때 모두 씁니다.",
    "coreId": "let"
  },
  {
    "id": "phrasal-094",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 94,
    "expression": "turn out ~로",
    "usage": "판명되다; 결과가 나오다",
    "heading": "turn out ~로 판명되다; 결과가 나오다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "The party turned out far better than anyone had expected.",
    "examples": [
      "It turned out that she was the CEO's college roommate.",
      "How did the job interview turn out in the end?",
      "The cookies didn't turn out well — they came out way too dry."
    ],
    "dialogue": {
      "a": "I was so worried the trip would be a total disaster.",
      "b": "It turned out great! Honestly, everyone had an amazing time."
    },
    "tip": "주로 자동사로 씁니다. turn out to be + 명사/형용사, 또는 turn out that + 절의 형태가 많습니다.",
    "coreId": "turn"
  },
  {
    "id": "phrasal-095",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 95,
    "expression": "wake up",
    "usage": "잠에서 깨다; (현실을) 직시하다",
    "heading": "wake up 잠에서 깨다; (현실을) 직시하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "She woke up to the sound of birds singing just outside her window.",
    "examples": [
      "Wake up! We're going to miss the train if we don't leave now!",
      "It took him a while to wake up to the fact that he needed professional help.",
      "I usually wake up at 6 a.m. on weekdays and a bit later on weekends."
    ],
    "dialogue": {
      "a": "You look completely exhausted today.",
      "b": "I woke up at 4 a.m. and just couldn't get back to sleep."
    },
    "tip": "분리 가능한 구동사입니다. 자동사('잠에서 깨다')로도, 타동사(wake someone up = '~를 깨우다')로 도 씁니다.",
    "coreId": null
  },
  {
    "id": "phrasal-096",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 96,
    "expression": "walk through (단계별로)",
    "usage": "설명하다, 안내하다",
    "heading": "walk through (단계별로) 설명하다, 안내하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "Can you walk me through how to set up the new software step by step?",
    "examples": [
      "The technician walked us through the entire installation process patiently.",
      "She walked her new colleague through the onboarding procedures on day one.",
      "Let me walk you through the main features of the app before you start."
    ],
    "dialogue": {
      "a": "I'm not sure how to file an expense report correctly.",
      "b": "No problem — I'll walk you through it step by step right now."
    },
    "tip": "분리 가능한 구동사입니다. walk someone through something의 구조로 씁니다: walk me through it.",
    "coreId": null
  },
  {
    "id": "phrasal-097",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 97,
    "expression": "work on (무언가를)",
    "usage": "개선하거나 만드는 데 노력하다",
    "heading": "work on (무언가를) 개선하거나 만드는 데 노력하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "She's been working on her debut novel for the past two years.",
    "examples": [
      "He works on his fitness by going to the gym three times a week.",
      "The team is currently working on a fix for the software bug.",
      "She worked on her public speaking skills by joining a local club."
    ],
    "dialogue": {
      "a": "Is the new dashboard feature ready to ship yet?",
      "b": "Not quite — the team is still working on it."
    },
    "tip": "분리할 수 없는 구동사입니다. 목적어를 on 뒤에 씁니다. '완성·개선을 위해 꾸준히 노력하다'는 뉘앙 스입니다. DAY 98과 같은 형태지만 의미가 다릅니다.",
    "coreId": "work"
  },
  {
    "id": "phrasal-098",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 98,
    "expression": "work on (사람을)",
    "usage": "설득하려고 노력하다",
    "heading": "work on (사람을) 설득하려고 노력하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "Let me work on him — I'm pretty sure I can convince him to come.",
    "examples": [
      "She's been working on her boss to approve the new remote work policy.",
      "I've been working on my parents for months about studying abroad.",
      "He tried to work on the committee to reconsider their initial decision."
    ],
    "dialogue": {
      "a": "My manager still won't approve the budget increase.",
      "b": "Keep working on her — bring more solid data to support your case."
    },
    "tip": "work on + 사람은 '~를 설득하려 하다'라는 뜻입니다. DAY 97의 '노력하다'와 형태는 같지만 목적어 가 사람이면 의미가 달라집니다.",
    "coreId": "work"
  },
  {
    "id": "phrasal-099",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 99,
    "expression": "work out",
    "usage": "운동하다",
    "heading": "work out 운동하다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "She works out at the gym every morning before heading to the office.",
    "examples": [
      "He's been working out consistently lately and looks noticeably healthier.",
      "We worked out for an hour together and then went for smoothies.",
      "Working out regularly can do wonders for reducing daily stress."
    ],
    "dialogue": {
      "a": "You seem so much more energetic lately.",
      "b": "I've been working out every morning. It makes a huge difference."
    },
    "tip": "'운동하다'의 의미일 때 work out은 자동사입니다. 분리하지 않으며, work out at + 장소처럼 씁니 다. DAY 100과 같은 형태지만 의미가 다릅니다.",
    "coreId": "work"
  },
  {
    "id": "phrasal-100",
    "sourceId": "phrasal",
    "sourceType": "phrasal",
    "sourceTitle": "구동사 100",
    "sourceLabel": "PHRASAL",
    "no": 100,
    "expression": "work out",
    "usage": "잘 해결되다; 잘 되다",
    "heading": "work out 잘 해결되다; 잘 되다",
    "chapterKo": "행동·결과 구동사",
    "chapterEn": "Action & Outcomes",
    "model": "I'm sure everything will work out in the end — just stay positive.",
    "examples": [
      "The plan didn't work out exactly as expected, but we learned a great deal.",
      "They worked out their differences and became close friends again.",
      "It's stressful right now, but things tend to work out if you stay focused."
    ],
    "dialogue": {
      "a": "I'm really anxious about the negotiation tomorrow.",
      "b": "Just stay calm and be honest. Things will work out."
    },
    "tip": "'잘 되다'의 의미일 때는 자동사. '(문제를) 해결하다'는 work out + 문제(타동사): work it out. 문맥 으로 구별하세요.",
    "coreId": "work"
  }
];

const workbookTranslations = {
  "basic-conversation": basicConversationWorkbookTranslations,
  "basic-verb": basicVerbWorkbookTranslations,
  conversation: conversationWorkbookTranslations,
  phrasal: phrasalWorkbookTranslations,
};

export const workbookTextCorrections = [
  ["자 주", "자주"],
  ["나타냅 니다", "나타냅니다"],
  ["모 두에", "모두에"],
  ["줍니 다", "줍니다"],
  ["씁니 다", "씁니다"],
  ["표현입니 다", "표현입니다"],
  ["자연스 럽습니다", "자연스럽습니다"],
  ["캐주얼합니 다", "캐주얼합니다"],
  ["옵니 다", "옵니다"],
  ["표현합니 다", "표현합니다"],
  ["반응입니 다", "반응입니다"],
  ["because보 다", "because보다"],
  ["나타 냅니다", "나타냅니다"],
  ["합 니다", "합니다"],
  ["구 문입니다", "구문입니다"],
  ["의미입 니다", "의미입니다"],
  ["표 현입니다", "표현입니다"],
  ["감정적으 로", "감정적으로"],
  ["표현 입니다", "표현입니다"],
  ["표현입 니다", "표현입니다"],
  ["연 결어입니다", "연결어입니다"],
  ["전달 합니다", "전달합니다"],
  ["재확 인하는", "재확인하는"],
  ["배려 있 는", "배려 있는"],
  ["쓰입 니다", "쓰입니다"],
  ["씁 니다", "씁니다"],
  ["만들 어 줍니다", "만들어 줍니다"],
  ["정 확하게", "정확하게"],
  ["가깝습니 다", "가깝습니다"],
  ["그래도로", "'그래도'로"],
  ["여부 를", "여부를"],
  ["용법 과", "용법과"],
  ["타다는", "탄다는"],
  ["view처 럼", "view처럼"],
  ["진행하다 는", "진행한다는"],
  ["있어 요", "있어요"],
  ["쓰 인다는", "쓰인다는"],
  ["가져오다는", "가져온다는"],
  ["갖다는", "갖는다는"],
  ["걸리다는", "걸린다는"],
  ["만들다는", "만든다는"],
  ["쓰 여요", "쓰여요"],
  ["제거하다는", "제거한다는"],
  ["행 동의", "행동의"],
  ["표 현해요", "표현해요"],
  ["가져가다는", "가져간다는"],
  ["가져오다이니", "가져온다는 뜻이니"],
  ["영어에 서는", "영어에서는"],
  ["표현이에 요", "표현이에요"],
  ["받아들이다는", "받아들인다는"],
  ["구어 적이에요", "구어적이에요"],
  ["건네다는", "건넨다는"],
  ["포기하다는", "포기한다는"],
  ["부 사와", "부사와"],
  ["놓고 오다는", "놓고 온다는"],
  ["의도적으 로", "의도적으로"],
  ["표현으 로", "표현으로"],
  ["시작하 는", "시작하는"],
  ["놓는지 가", "놓는지가"],
  ["원하 는", "원하는"],
  ["변하다는", "변한다는"],
  ["무언 가를", "무언가를"],
  ["의미이 지만", "의미이지만"],
  ["추 상적", "추상적"],
  ["집 중력을", "집중력을"],
  ["반대말 로", "반대말로"],
  ["설 명할", "설명할"],
  ["뉘 앙스", "뉘앙스"],
  ["형 태가", "형태가"],
  ["훨 씬", "훨씬"],
  ["걸 려", "걸려"],
  ["강 조해요", "강조해요"],
  ["apology처 럼", "apology처럼"],
  ["강 해요", "강해요"],
  ["조 율하다는", "조율한다는"],
  ["무언가 를", "무언가를"],
  ["않습 니다", "않습니다"],
  ["진 행형", "진행형"],
  ["의미 를", "의미를"],
  ["같 은", "같은"],
  ["뉘앙스입 니다", "뉘앙스입니다"],
  ["놀랍 다", "놀랍다"],
  ["필수 입니다", "필수입니다"],
  ["끝내 다", "끝내다"],
  ["문맥으 로", "문맥으로"],
  ["달 라집니다", "달라집니다"],
  ["상황 에서는", "상황에서는"],
  ["주어 가", "주어가"],
  ["뉘앙 스", "뉘앙스"],
  ["타동 사일", "타동사일"],
  ["실 패를", "실패를"],
  ["강합 니다", "강합니다"],
  ["모두 에", "모두에"],
  ["사 용됩니다", "사용됩니다"],
  ["up처 럼", "up처럼"],
  ["있습니 다", "있습니다"],
  ["있습 니다", "있습니다"],
  ["추 가합니다", "추가합니다"],
  ["공간 으로", "공간으로"],
  ["로 도", "로도"],
  ["목적어 가", "목적어가"],
  ["문맥 으로", "문맥으로"],
];

const cleanWorkbookText = (text) =>
  workbookTextCorrections.reduce(
    (cleaned, [incorrect, correct]) => cleaned.replaceAll(incorrect, correct),
    text,
  );

export const workbookUnits = rawWorkbookUnits.map((unit) => ({
  ...unit,
  ko: workbookTranslations[unit.sourceId]?.[unit.no - 1] ?? "",
  usage: cleanWorkbookText(unit.usage),
  heading: cleanWorkbookText(unit.heading),
  model: cleanWorkbookText(unit.model),
  examples: unit.examples.map(cleanWorkbookText),
  dialogue: {
    a: cleanWorkbookText(unit.dialogue.a),
    b: cleanWorkbookText(unit.dialogue.b),
  },
  tip: cleanWorkbookText(unit.tip),
}));

export const workbookReferenceItems = workbookUnits.map((unit) => ({
  id: unit.id,
  day: unit.no,
  term: unit.expression,
  meaning: unit.usage,
  type: unit.sourceType,
  source: unit.sourceTitle,
  sourceId: unit.sourceId,
  sourceLabel: unit.sourceLabel,
  coreId: unit.coreId,
  focus: unit.coreId ? null : unit.expression,
  category: unit.chapterKo,
  categoryEn: unit.chapterEn,
  heading: unit.heading,
  model: unit.model,
  modelKo: unit.ko,
  examples: unit.examples,
  dialogue: unit.dialogue,
  tip: unit.tip,
}));

export const workbookPracticeCards = workbookUnits.map((unit) => ({
  id: `workbook-${unit.sourceId}-${String(unit.no).padStart(3, "0")}`,
  verbId: unit.coreId,
  verb: unit.expression,
  ko: unit.ko,
  answer: unit.model,
  hint: unit.expression,
  meaning: unit.usage,
  context: unit.sourceTitle,
  sourceId: unit.sourceId,
  workbookNo: unit.no,
  kind: "workbook",
}));
