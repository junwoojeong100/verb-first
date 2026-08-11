import { extraVerbs } from "./extraVerbs.js";
import { verbConversationUsages } from "./verbConversationUsages.js";

const foundationalVerbs = [
  {
    id: "be",
    word: "BE",
    korean: "이다 · 있다 · 상태",
    image: "주어와 정체·상태·장소를 잇는 등호",
    summary: "한국어의 '~이다, ~하다, 있다'를 한 번에 연결하는 가장 기본적인 엔진입니다.",
    forms: "am / is / are · was / were · been",
    accent: "#f7d46a",
    tint: "#fff8dc",
    patterns: [
      { frame: "be + adjective", meaning: "상태를 말하다", example: "I'm ready.", ko: "준비됐어." },
      { frame: "be + noun / place", meaning: "정체·위치를 말하다", example: "I'm in sales.", ko: "저는 영업팀이에요." },
      { frame: "there + be", meaning: "존재를 말하다", example: "There's a problem.", ko: "문제가 있어." },
    ],
    chunks: [
      { phrase: "be ready", meaning: "준비되다", example: "I'll be ready by six.", ko: "6시까지 준비할게." },
      { phrase: "be right", meaning: "맞다", example: "You might be right.", ko: "네 말이 맞을지도 몰라." },
      { phrase: "be worth it", meaning: "가치가 있다", example: "It'll be worth it.", ko: "그럴 만한 가치가 있을 거야." },
      { phrase: "be on time", meaning: "제시간이다", example: "Please be on time.", ko: "제시간에 와 줘." },
    ],
    prompts: [
      { ko: "지금 바빠.", answer: "I'm busy right now.", hint: "be + busy", context: "일상" },
      { ko: "거의 다 했어.", answer: "I'm almost done.", hint: "be + done", context: "업무" },
      { ko: "별일 아니야.", answer: "It's not a big deal.", hint: "It + be", context: "반응" },
    ],
  },
  {
    id: "have",
    word: "HAVE",
    korean: "가지다 · 먹다 · 겪다",
    image: "내 쪽에 무언가를 지니고 있는 상태",
    summary: "소유뿐 아니라 식사, 경험, 일정, 의무까지 명사와 결합해 폭넓게 표현합니다.",
    forms: "have / has · had · had",
    accent: "#ff9f7a",
    tint: "#fff0e9",
    patterns: [
      { frame: "have + noun", meaning: "가지다·하다·먹다", example: "I have a question.", ko: "질문 있어요." },
      { frame: "have to + verb", meaning: "~해야 한다", example: "I have to leave.", ko: "가야 해." },
      { frame: "have + object + p.p.", meaning: "남에게 맡기다", example: "I had it fixed.", ko: "그거 수리 맡겼어." },
    ],
    chunks: [
      { phrase: "have a look", meaning: "한번 보다", example: "Let me have a look.", ko: "내가 한번 볼게." },
      { phrase: "have time", meaning: "시간이 있다", example: "Do you have time?", ko: "시간 있어?" },
      { phrase: "have a meeting", meaning: "회의가 있다", example: "We have a meeting at three.", ko: "3시에 회의가 있어." },
      { phrase: "have a good one", meaning: "좋은 하루 보내다", example: "Have a good one!", ko: "좋은 하루 보내!" },
    ],
    prompts: [
      { ko: "질문 하나 있어요.", answer: "I have a question.", hint: "have + a question", context: "업무" },
      { ko: "지금 가야 해.", answer: "I have to go now.", hint: "have to + go", context: "일상" },
      { ko: "점심 같이 먹자.", answer: "Let's have lunch together.", hint: "have + lunch", context: "일상" },
    ],
  },
  {
    id: "do",
    word: "DO",
    korean: "하다 · 수행하다",
    image: "결과물보다 행동 자체에 초점을 두는 동사",
    summary: "구체적인 동사가 바로 떠오르지 않을 때도 do it, do this로 먼저 말문을 열 수 있습니다.",
    forms: "do / does · did · done",
    accent: "#7fd5ff",
    tint: "#eaf8ff",
    patterns: [
      { frame: "do + task", meaning: "일·행동을 수행하다", example: "I'll do the work.", ko: "그 일은 내가 할게." },
      { frame: "do + one's best", meaning: "최선을 다하다", example: "I'll do my best.", ko: "최선을 다할게." },
      { frame: "have to do with", meaning: "~와 관련 있다", example: "It has to do with timing.", ko: "타이밍과 관련 있어." },
    ],
    chunks: [
      { phrase: "do it", meaning: "그것을 하다", example: "I'll do it right now.", ko: "지금 바로 할게." },
      { phrase: "do a good job", meaning: "잘 해내다", example: "You did a good job.", ko: "정말 잘했어." },
      { phrase: "do the dishes", meaning: "설거지하다", example: "I'll do the dishes.", ko: "설거지는 내가 할게." },
      { phrase: "that'll do", meaning: "그거면 되다", example: "That'll do for now.", ko: "일단은 그거면 돼." },
    ],
    prompts: [
      { ko: "그 일은 내가 할게.", answer: "I'll do it.", hint: "do + it", context: "일상" },
      { ko: "최선을 다했어.", answer: "I did my best.", hint: "do one's best", context: "반응" },
      { ko: "할 일이 많아.", answer: "I have a lot to do.", hint: "a lot to do", context: "업무" },
    ],
  },
  {
    id: "get",
    word: "GET",
    korean: "받다 · 되다 · 도착하다 · 이해하다",
    image: "없던 상태에서 새로운 상태로 이동",
    summary: "물건, 상태, 장소, 이해를 모두 '도달'의 이미지로 묶는 회화의 만능 동사입니다.",
    forms: "get / gets · got · got / gotten",
    accent: "#d9ff66",
    tint: "#f4ffd5",
    patterns: [
      { frame: "get + noun", meaning: "받다·구하다", example: "I got your message.", ko: "메시지 받았어." },
      { frame: "get + adjective", meaning: "~해지다", example: "It's getting late.", ko: "시간이 늦어지고 있어." },
      { frame: "get + place", meaning: "도착하다", example: "I just got here.", ko: "방금 도착했어." },
    ],
    chunks: [
      { phrase: "get it", meaning: "이해하다", example: "Now I get it.", ko: "이제 알겠어." },
      { phrase: "get ready", meaning: "준비하다", example: "I need to get ready.", ko: "준비해야 해." },
      { phrase: "get back to", meaning: "다시 연락하다", example: "I'll get back to you.", ko: "다시 연락드릴게요." },
      { phrase: "get along", meaning: "잘 지내다", example: "We get along well.", ko: "우리는 잘 지내." },
    ],
    prompts: [
      { ko: "이제 이해했어.", answer: "Now I get it.", hint: "get + it", context: "반응" },
      { ko: "9시까지 도착할게.", answer: "I'll get there by nine.", hint: "get + there", context: "이동" },
      { ko: "시작합시다.", answer: "Let's get started.", hint: "get + started", context: "회의" },
    ],
  },
  {
    id: "make",
    word: "MAKE",
    korean: "만들다 · ~하게 만들다",
    image: "없던 결과나 변화를 밖으로 만들어 냄",
    summary: "계획·결정·실수 같은 결과물을 만들고, 사람이나 상황을 특정 상태로 바꿉니다.",
    forms: "make / makes · made · made",
    accent: "#c9a7ff",
    tint: "#f4edff",
    patterns: [
      { frame: "make + noun", meaning: "결과물을 만들다", example: "Let's make a plan.", ko: "계획을 세우자." },
      { frame: "make + object + adjective", meaning: "~하게 만들다", example: "It makes me nervous.", ko: "그게 날 긴장하게 해." },
      { frame: "make it", meaning: "해내다·시간 맞추다", example: "I can make it by noon.", ko: "정오까지 갈 수 있어." },
    ],
    chunks: [
      { phrase: "make sure", meaning: "확실히 하다", example: "Make sure to check it.", ko: "꼭 확인해." },
      { phrase: "make sense", meaning: "말이 되다", example: "That makes sense.", ko: "그거 말이 되네." },
      { phrase: "make progress", meaning: "진전하다", example: "We made good progress.", ko: "진전이 꽤 있었어." },
      { phrase: "make a decision", meaning: "결정하다", example: "We need to make a decision.", ko: "결정해야 해." },
    ],
    prompts: [
      { ko: "내가 실수했어.", answer: "I made a mistake.", hint: "make + a mistake", context: "반응" },
      { ko: "그거 말이 되네.", answer: "That makes sense.", hint: "make + sense", context: "회의" },
      { ko: "금요일 약속에 참석할 수 있어?", answer: "Can you make it on Friday?", hint: "make it", context: "약속" },
    ],
  },
  {
    id: "take",
    word: "TAKE",
    korean: "가져가다 · 타다 · 걸리다",
    image: "밖의 것을 잡아 내 쪽이나 다른 곳으로 옮김",
    summary: "물건, 교통수단, 시간, 책임을 내 쪽으로 받아들이는 방향을 기억하면 쉽습니다.",
    forms: "take / takes · took · taken",
    accent: "#72e6ca",
    tint: "#e7fbf6",
    patterns: [
      { frame: "take + object", meaning: "가져가다·받다", example: "Take an umbrella.", ko: "우산 챙겨." },
      { frame: "take + transport", meaning: "교통수단을 타다", example: "I'll take the bus.", ko: "버스 탈게." },
      { frame: "it takes + time", meaning: "시간이 걸리다", example: "It takes time.", ko: "시간이 걸려." },
    ],
    chunks: [
      { phrase: "take a look", meaning: "한번 보다", example: "Take a look at this.", ko: "이것 좀 봐." },
      { phrase: "take a break", meaning: "쉬다", example: "Let's take a break.", ko: "잠깐 쉬자." },
      { phrase: "take care of", meaning: "돌보다·처리하다", example: "I'll take care of it.", ko: "제가 처리할게요." },
      { phrase: "take over", meaning: "인계받다", example: "Can you take over?", ko: "네가 이어서 맡아 줄래?" },
    ],
    prompts: [
      { ko: "이것 좀 봐.", answer: "Take a look at this.", hint: "take a look", context: "일상" },
      { ko: "얼마나 걸려?", answer: "How long does it take?", hint: "does it take", context: "이동" },
      { ko: "제가 그 보고서를 맡을게요.", answer: "I'll take care of the report.", hint: "take care of", context: "업무" },
    ],
  },
  {
    id: "give",
    word: "GIVE",
    korean: "주다 · 건네다 · 제공하다",
    image: "내 쪽의 것을 상대 쪽으로 보내는 방향",
    summary: "물건뿐 아니라 도움, 기회, 정보, 연락처럼 보이지 않는 것도 상대에게 건넵니다.",
    forms: "give / gives · gave · given",
    accent: "#ffb0cc",
    tint: "#fff0f6",
    patterns: [
      { frame: "give + person + noun", meaning: "누구에게 주다", example: "Give me a second.", ko: "잠깐만." },
      { frame: "give + activity noun", meaning: "행동을 제공하다", example: "I'll give you a call.", ko: "전화할게." },
      { frame: "give + object + a try", meaning: "시도해 보다", example: "Let's give it a try.", ko: "한번 해 보자." },
    ],
    chunks: [
      { phrase: "give a hand", meaning: "도와주다", example: "Can you give me a hand?", ko: "좀 도와줄래?" },
      { phrase: "give an update", meaning: "진행 상황을 알리다", example: "Let me give you an update.", ko: "진행 상황을 말씀드릴게요." },
      { phrase: "give up", meaning: "포기하다", example: "Don't give up.", ko: "포기하지 마." },
      { phrase: "give it back", meaning: "돌려주다", example: "I'll give it back tomorrow.", ko: "내일 돌려줄게." },
    ],
    prompts: [
      { ko: "잠깐만 기다려 줘.", answer: "Give me a second.", hint: "give + me", context: "일상" },
      { ko: "전화할게.", answer: "I'll give you a call.", hint: "give a call", context: "약속" },
      { ko: "한번 해 보자.", answer: "Let's give it a try.", hint: "give it a try", context: "회의" },
    ],
  },
  {
    id: "go",
    word: "GO",
    korean: "가다 · 진행되다 · 변하다",
    image: "지금 있는 곳이나 상태에서 멀어져 감",
    summary: "장소로 이동하고, 일이 진행되며, 상태가 바뀌는 흐름을 한 방향으로 표현합니다.",
    forms: "go / goes · went · gone",
    accent: "#8eb6ff",
    tint: "#edf3ff",
    patterns: [
      { frame: "go + place", meaning: "가다", example: "I have to go home.", ko: "집에 가야 해." },
      { frame: "go + adjective", meaning: "상태가 변하다", example: "The milk went bad.", ko: "우유가 상했어." },
      { frame: "how did it go?", meaning: "진행 결과를 묻다", example: "How did the meeting go?", ko: "회의 어땠어?" },
    ],
    chunks: [
      { phrase: "go ahead", meaning: "먼저 하다·진행하다", example: "Go ahead, please.", ko: "먼저 하세요." },
      { phrase: "go over", meaning: "검토하다", example: "Let's go over the plan.", ko: "계획을 검토하죠." },
      { phrase: "go on", meaning: "계속하다", example: "Please go on.", ko: "계속 말씀하세요." },
      { phrase: "go through", meaning: "살펴보다·겪다", example: "Let's go through it.", ko: "하나씩 살펴보죠." },
    ],
    prompts: [
      { ko: "저보다 먼저 진행하세요.", answer: "Go ahead, please.", hint: "go + ahead", context: "반응" },
      { ko: "계획을 검토하죠.", answer: "Let's go over the plan.", hint: "go over", context: "회의" },
      { ko: "회의 어땠어?", answer: "How did the meeting go?", hint: "How did ... go?", context: "업무" },
    ],
  },
  {
    id: "come",
    word: "COME",
    korean: "오다 · 생기다 · 떠오르다",
    image: "화자나 기준점 쪽으로 가까워짐",
    summary: "사람의 이동뿐 아니라 아이디어, 문제, 기회가 내 앞에 나타나는 흐름에도 씁니다.",
    forms: "come / comes · came · come",
    accent: "#ffcc7a",
    tint: "#fff6e4",
    patterns: [
      { frame: "come + direction", meaning: "오다", example: "Come in, please.", ko: "들어오세요." },
      { frame: "come + adjective", meaning: "~한 상태가 되다", example: "The button came loose.", ko: "단추가 느슨해졌어." },
      { frame: "how come + clause?", meaning: "왜 그런지 묻다", example: "How come you're late?", ko: "왜 늦었어?" },
    ],
    chunks: [
      { phrase: "come back", meaning: "돌아오다", example: "I'll come back soon.", ko: "곧 돌아올게." },
      { phrase: "come up", meaning: "일이 생기다", example: "Something came up.", ko: "일이 좀 생겼어." },
      { phrase: "come up with", meaning: "생각해내다", example: "I came up with an idea.", ko: "아이디어를 생각해냈어." },
      { phrase: "come along", meaning: "함께 가다·진전되다", example: "The project is coming along.", ko: "프로젝트가 잘 진행 중이야." },
    ],
    prompts: [
      { ko: "일이 좀 생겼어.", answer: "Something came up.", hint: "come up", context: "약속" },
      { ko: "아이디어를 생각해냈어.", answer: "I came up with an idea.", hint: "come up with", context: "업무" },
      { ko: "곧 돌아올게.", answer: "I'll come back soon.", hint: "come back", context: "일상" },
    ],
  },
  {
    id: "put",
    word: "PUT",
    korean: "놓다 · 두다 · 상태에 넣다",
    image: "무언가를 특정 위치나 상태에 정확히 놓음",
    summary: "작은 전치사 하나를 붙이면 입다, 미루다, 치우다, 조립하다로 의미가 크게 확장됩니다.",
    forms: "put / puts · put · put",
    accent: "#a8d58c",
    tint: "#f0f9e9",
    patterns: [
      { frame: "put + object + place", meaning: "놓다", example: "Put it here.", ko: "여기 둬." },
      { frame: "put + object + state", meaning: "특정 상태에 두다", example: "Put your phone on silent.", ko: "휴대폰을 무음으로 해." },
      { frame: "put it + particle", meaning: "대명사는 가운데", example: "Put it away.", ko: "그거 치워." },
    ],
    chunks: [
      { phrase: "put on", meaning: "입다·착용하다", example: "Put on your coat.", ko: "코트 입어." },
      { phrase: "put off", meaning: "미루다", example: "Don't put it off.", ko: "미루지 마." },
      { phrase: "put together", meaning: "조립·구성하다", example: "I'll put together a report.", ko: "보고서를 정리해 볼게." },
      { phrase: "put down", meaning: "내려놓다·적다", example: "Put it down here.", ko: "여기 내려놔." },
    ],
    prompts: [
      { ko: "그거 여기 둬.", answer: "Put it here.", hint: "put + it + here", context: "일상" },
      { ko: "그 일을 미루지 마.", answer: "Don't put it off.", hint: "put it off", context: "업무" },
      { ko: "보고서를 정리해 볼게.", answer: "I'll put together a report.", hint: "put together", context: "업무" },
    ],
  },
  {
    id: "keep",
    word: "KEEP",
    korean: "유지하다 · 계속하다 · 보관하다",
    image: "지금 상태가 끊기지 않게 붙잡아 둠",
    summary: "물건을 간직하고, 상태를 유지하며, 같은 행동을 계속 이어갈 때 쓰는 동사입니다.",
    forms: "keep / keeps · kept · kept",
    accent: "#9edbd1",
    tint: "#ebfaf7",
    patterns: [
      { frame: "keep + object", meaning: "보관하다", example: "You can keep it.", ko: "그거 가져도 돼." },
      { frame: "keep + -ing", meaning: "계속하다", example: "Keep going.", ko: "계속해." },
      { frame: "keep + object + adjective", meaning: "상태를 유지하다", example: "Keep the door open.", ko: "문을 열어 둬." },
    ],
    chunks: [
      { phrase: "keep going", meaning: "계속 나아가다", example: "You're doing well. Keep going.", ko: "잘하고 있어. 계속해." },
      { phrase: "keep in touch", meaning: "연락하고 지내다", example: "Let's keep in touch.", ko: "계속 연락하자." },
      { phrase: "keep up with", meaning: "따라가다", example: "It's hard to keep up.", ko: "따라가기 힘들어." },
      { phrase: "keep an eye on", meaning: "지켜보다", example: "Keep an eye on the time.", ko: "시간을 잘 봐 둬." },
    ],
    prompts: [
      { ko: "계속해.", answer: "Keep going.", hint: "keep + -ing", context: "격려" },
      { ko: "계속 연락하자.", answer: "Let's keep in touch.", hint: "keep in touch", context: "약속" },
      { ko: "문을 열어 둬.", answer: "Keep the door open.", hint: "keep + object + adjective", context: "일상" },
    ],
  },
  {
    id: "let",
    word: "LET",
    korean: "~하게 두다 · 제안하다",
    image: "상대나 상황이 움직이도록 길을 열어 줌",
    summary: "허락뿐 아니라 Let me, Let's처럼 내가 나서거나 함께 하자고 제안할 때 매우 자주 씁니다.",
    forms: "let / lets · let · let",
    accent: "#ffb978",
    tint: "#fff3e8",
    patterns: [
      { frame: "let + person + verb", meaning: "~하게 두다", example: "Let him speak.", ko: "그가 말하게 둬." },
      { frame: "let me + verb", meaning: "제가 ~할게요", example: "Let me check.", ko: "제가 확인할게요." },
      { frame: "let's + verb", meaning: "우리 ~하자", example: "Let's get started.", ko: "시작합시다." },
    ],
    chunks: [
      { phrase: "let me know", meaning: "알려주다", example: "Please let me know.", ko: "알려 주세요." },
      { phrase: "let me think", meaning: "생각해 보다", example: "Let me think about it.", ko: "생각해 볼게." },
      { phrase: "let it go", meaning: "그냥 넘기다", example: "Just let it go.", ko: "그냥 넘어가." },
      { phrase: "let's see", meaning: "어디 보자", example: "Let's see what happens.", ko: "어떻게 되는지 보자." },
    ],
    prompts: [
      { ko: "제가 확인할게요.", answer: "Let me check.", hint: "let me + verb", context: "업무" },
      { ko: "준비되면 알려 줘.", answer: "Let me know when you're ready.", hint: "let me know", context: "약속" },
      { ko: "시작합시다.", answer: "Let's get started.", hint: "let's + get", context: "회의" },
    ],
  },
  {
    id: "want",
    word: "WANT",
    korean: "원하다 · 하고 싶다",
    image: "마음이 원하는 대상이나 행동을 향함",
    summary: "원하는 것을 직접 말하고, 상대의 의향을 자연스럽게 묻는 가장 간단한 의사 표현입니다.",
    forms: "want / wants · wanted · wanted",
    accent: "#ff8f8f",
    tint: "#fff0f0",
    patterns: [
      { frame: "want + noun", meaning: "무언가를 원하다", example: "I want some coffee.", ko: "커피 좀 마시고 싶어." },
      { frame: "want to + verb", meaning: "~하고 싶다", example: "I want to go home.", ko: "집에 가고 싶어." },
      { frame: "want + person + to", meaning: "~가 하길 원하다", example: "I want you to check it.", ko: "네가 확인해 줬으면 해." },
    ],
    chunks: [
      { phrase: "do you want to", meaning: "~할래?", example: "Do you want to join?", ko: "같이 할래?" },
      { phrase: "I don't want to", meaning: "~하고 싶지 않다", example: "I don't want to be late.", ko: "늦고 싶지 않아." },
      { phrase: "what do you want", meaning: "무엇을 원하는지 묻다", example: "What do you want to do?", ko: "뭐 하고 싶어?" },
      { phrase: "all I want is", meaning: "내가 원하는 건 오직", example: "All I want is a quiet evening.", ko: "난 조용한 저녁이면 돼." },
    ],
    prompts: [
      { ko: "집에 가고 싶어.", answer: "I want to go home.", hint: "want to + go", context: "일상" },
      { ko: "같이 할래?", answer: "Do you want to join?", hint: "Do you want to", context: "제안" },
      { ko: "늦고 싶지 않아.", answer: "I don't want to be late.", hint: "don't want to", context: "이동" },
    ],
  },
  {
    id: "need",
    word: "NEED",
    korean: "필요하다 · 해야 한다",
    image: "목표를 위해 반드시 채워야 하는 빈칸",
    summary: "필요한 사물, 도움, 행동을 분명하게 말하면서 have to보다 내적 필요에 초점을 둡니다.",
    forms: "need / needs · needed · needed",
    accent: "#7bc8ff",
    tint: "#edf8ff",
    patterns: [
      { frame: "need + noun", meaning: "무언가가 필요하다", example: "I need some help.", ko: "도움이 좀 필요해." },
      { frame: "need to + verb", meaning: "~해야 한다", example: "I need to check this.", ko: "이걸 확인해야 해." },
      { frame: "don't need to", meaning: "~할 필요 없다", example: "You don't need to worry.", ko: "걱정할 필요 없어." },
    ],
    chunks: [
      { phrase: "need a hand", meaning: "도움이 필요하다", example: "Do you need a hand?", ko: "도와줄까?" },
      { phrase: "need more time", meaning: "시간이 더 필요하다", example: "We need more time.", ko: "시간이 더 필요해." },
      { phrase: "need to know", meaning: "알아야 하다", example: "Here's what you need to know.", ko: "이건 꼭 알아야 해." },
      { phrase: "all you need", meaning: "필요한 전부", example: "That's all you need.", ko: "그거면 충분해." },
    ],
    prompts: [
      { ko: "도움이 좀 필요해.", answer: "I need some help.", hint: "need + noun", context: "일상" },
      { ko: "이걸 확인해야 해.", answer: "I need to check this.", hint: "need to + verb", context: "업무" },
      { ko: "걱정할 필요 없어.", answer: "You don't need to worry.", hint: "don't need to", context: "격려" },
    ],
  },
  {
    id: "like",
    word: "LIKE",
    korean: "좋아하다 · 원하다",
    image: "마음이 편하게 끌리는 대상이나 선택",
    summary: "취향을 말하고, would like로 원하는 것을 한층 부드럽고 정중하게 표현합니다.",
    forms: "like / likes · liked · liked",
    accent: "#e7a0d8",
    tint: "#fff0fb",
    patterns: [
      { frame: "like + noun / -ing", meaning: "좋아하다", example: "I like working here.", ko: "여기서 일하는 게 좋아." },
      { frame: "would like + noun", meaning: "정중히 원하다", example: "I'd like a coffee.", ko: "커피 한 잔 주세요." },
      { frame: "would like to + verb", meaning: "정중히 하고 싶다", example: "I'd like to order.", ko: "주문하고 싶어요." },
    ],
    chunks: [
      { phrase: "I really like it", meaning: "정말 마음에 들다", example: "I really like this idea.", ko: "이 아이디어 정말 마음에 들어." },
      { phrase: "would you like", meaning: "~하시겠어요?", example: "Would you like some coffee?", ko: "커피 드릴까요?" },
      { phrase: "like to", meaning: "평소 ~하기를 좋아하다", example: "I like to plan ahead.", ko: "나는 미리 계획하는 편이야." },
      { phrase: "like it when", meaning: "~할 때가 좋다", example: "I like it when we can be honest.", ko: "서로 솔직하게 말할 수 있을 때가 좋아." },
    ],
    prompts: [
      { ko: "커피 한 잔 주세요.", answer: "I'd like a coffee.", hint: "I'd like + noun", context: "카페" },
      { ko: "주문하고 싶어요.", answer: "I'd like to order.", hint: "I'd like to + verb", context: "식당" },
      { ko: "이 아이디어 정말 마음에 들어.", answer: "I really like this idea.", hint: "really like", context: "회의" },
    ],
  },
  {
    id: "think",
    word: "THINK",
    korean: "생각하다 · 의견을 말하다",
    image: "단정하지 않고 내 판단을 한 겹 덧붙임",
    summary: "의견을 부드럽게 꺼내고, 즉답을 피하며, 상대와 생각의 거리를 조절하는 동사입니다.",
    forms: "think / thinks · thought · thought",
    accent: "#b6a6ff",
    tint: "#f2efff",
    patterns: [
      { frame: "I think + clause", meaning: "의견을 말하다", example: "I think it's ready.", ko: "준비된 것 같아." },
      { frame: "I don't think + clause", meaning: "부드럽게 부정하다", example: "I don't think it'll work.", ko: "그건 안 될 것 같아." },
      { frame: "think about + noun", meaning: "고려하다", example: "I'll think about it.", ko: "생각해 볼게." },
    ],
    chunks: [
      { phrase: "I think so", meaning: "그런 것 같다", example: "Yes, I think so.", ko: "응, 그런 것 같아." },
      { phrase: "let me think", meaning: "생각할 시간을 벌다", example: "Let me think for a second.", ko: "잠깐 생각해 볼게." },
      { phrase: "think it over", meaning: "곰곰이 생각하다", example: "I need to think it over.", ko: "좀 더 생각해 봐야 해." },
      { phrase: "what do you think", meaning: "의견을 묻다", example: "What do you think?", ko: "어떻게 생각해?" },
    ],
    prompts: [
      { ko: "제 생각엔 그게 좋은 것 같아요.", answer: "I think it's good.", hint: "I think + clause", context: "의견" },
      { ko: "그건 안 될 것 같아.", answer: "I don't think it'll work.", hint: "I don't think", context: "회의" },
      { ko: "좀 더 생각해 볼게.", answer: "I'll think about it.", hint: "think about", context: "반응" },
    ],
  },
  {
    id: "know",
    word: "KNOW",
    korean: "알다 · 알고 지내다",
    image: "정보나 사람을 이미 내 머릿속에 가지고 있음",
    summary: "사실을 안다고 말하는 것부터 상대에게 알려 달라고 부탁하는 표현까지 확장됩니다.",
    forms: "know / knows · knew · known",
    accent: "#79d7bb",
    tint: "#e9faf5",
    patterns: [
      { frame: "know + noun / clause", meaning: "사실을 알다", example: "I know the answer.", ko: "답을 알아." },
      { frame: "know how to + verb", meaning: "방법을 알다", example: "I know how to fix it.", ko: "그거 고치는 법 알아." },
      { frame: "get to know", meaning: "알아 가다", example: "I'd like to get to know the team.", ko: "팀을 더 알아 가고 싶어요." },
    ],
    chunks: [
      { phrase: "I don't know", meaning: "모르다", example: "Sorry, I don't know.", ko: "미안하지만 모르겠어." },
      { phrase: "you know", meaning: "말을 잇다·공감 확인", example: "It's hard, you know?", ko: "그거 어렵잖아, 알지?" },
      { phrase: "let me know", meaning: "알려 달라", example: "Let me know anytime.", ko: "언제든 알려 줘." },
      { phrase: "as far as I know", meaning: "내가 알기로는", example: "As far as I know, we're on schedule.", ko: "내가 알기로는 일정대로야." },
    ],
    prompts: [
      { ko: "저도 잘 모르겠어요.", answer: "I don't really know.", hint: "don't really know", context: "반응" },
      { ko: "준비되면 알려 줘.", answer: "Let me know when you're ready.", hint: "let me know", context: "약속" },
      { ko: "그거 고치는 법 알아.", answer: "I know how to fix it.", hint: "know how to", context: "문제 해결" },
    ],
  },
];

export const coreVerbs = [...foundationalVerbs, ...extraVerbs].map((verb) => ({
  ...verb,
  usages: verbConversationUsages[verb.id] ?? [],
}));

export const sentenceFrames = [
  { id: "want-to", frame: "I want to + 동사", ko: "~하고 싶다", example: "I want to get there early." },
  { id: "need-to", frame: "I need to + 동사", ko: "~해야 한다", example: "I need to check this." },
  { id: "have-to", frame: "I have to + 동사", ko: "~해야 한다", example: "I have to leave now." },
  { id: "can-you", frame: "Can you + 동사?", ko: "~해 줄래요?", example: "Can you help me with this?" },
  { id: "can-i", frame: "Can I + 동사?", ko: "~해도 될까요?", example: "Can I sit here?" },
  { id: "id-like", frame: "I'd like to + 동사", ko: "~하고 싶어요", example: "I'd like to order." },
  { id: "lets", frame: "Let's + 동사", ko: "우리 ~하자", example: "Let's go over the plan." },
  { id: "let-me", frame: "Let me + 동사", ko: "제가 ~할게요", example: "Let me check." },
  { id: "want-question", frame: "Do you want to + 동사?", ko: "~할래요?", example: "Do you want to join?" },
  { id: "going-to", frame: "I'm going to + 동사", ko: "~할 거예요", example: "I'm going to make some coffee." },
  { id: "how-do-i", frame: "How do I + 동사?", ko: "어떻게 ~하나요?", example: "How do I get there?" },
  { id: "i-think", frame: "I think + 문장", ko: "~인 것 같아요", example: "I think we should start." },
  { id: "looks-like", frame: "It looks like + 문장", ko: "~인 것 같아요", example: "It looks like we're ready." },
  { id: "that-gives", frame: "That gives me + 명사", ko: "그 덕분에 ~이 생기다", example: "That gives me enough time." },
  { id: "this-makes", frame: "This makes it + 형용사", ko: "이것이 ~하게 만들다", example: "This makes it easier to compare." },
  { id: "it-takes", frame: "It takes + 시간", ko: "시간이 걸리다", example: "It takes about twenty minutes." },
  { id: "that-works", frame: "That works for + 사람", ko: "그 일정·방법이 괜찮다", example: "That works for me." },
  { id: "this-helps", frame: "This helps + 사람 + 동사", ko: "이것이 ~하는 데 돕다", example: "This helps us stay on track." },
];

export const scenarioPacks = [
  {
    id: "daily",
    title: "하루 혼잣말",
    subtitle: "아침부터 퇴근까지 내 하루를 영어로 중계",
    color: "#d9ff66",
    cards: [
      { verbId: "have", ko: "이제 일어나야 해.", answer: "I have to get up now.", hint: "have to + get up" },
      { verbId: "make", ko: "커피 좀 만들 거야.", answer: "I'm going to make some coffee.", hint: "going to + make" },
      { verbId: "take", ko: "버스 탈 거야.", answer: "I'm going to take the bus.", hint: "take + the bus" },
      { verbId: "do", ko: "이걸 먼저 해야 해.", answer: "I have to do this first.", hint: "have to + do" },
      { verbId: "have", ko: "이제 점심 먹고 싶어.", answer: "I'd like to have lunch now.", hint: "would like to + have" },
      { verbId: "think", ko: "오늘 꽤 잘한 것 같아.", answer: "I think I did a good job today.", hint: "think + do a good job" },
    ],
  },
  {
    id: "meeting",
    title: "업무 회의",
    subtitle: "시작·의견·담당·마무리까지 한 흐름으로",
    color: "#a8b8ff",
    cards: [
      { verbId: "let", ko: "시작합시다.", answer: "Let's get started.", hint: "Let's + get started" },
      { verbId: "go", ko: "먼저 안건을 살펴보죠.", answer: "Let's go over the agenda first.", hint: "go over" },
      { verbId: "give", ko: "진행 상황을 말씀드릴게요.", answer: "Let me give you an update.", hint: "give an update" },
      { verbId: "think", ko: "이 부분에 집중해야 할 것 같아요.", answer: "I think we should focus on this part.", hint: "I think we should" },
      { verbId: "take", ko: "제가 보고서를 맡을게요.", answer: "I'll take care of the report.", hint: "take care of" },
      { verbId: "let", ko: "마무리합시다.", answer: "Let's wrap up.", hint: "Let's + wrap up" },
    ],
  },
  {
    id: "cafe",
    title: "카페 · 식당",
    subtitle: "주문하고 요청하고 자연스럽게 반응하기",
    color: "#ffbd89",
    cards: [
      { verbId: "like", ko: "커피 한 잔 부탁드립니다.", answer: "I'd like a coffee, please.", hint: "I'd like + noun" },
      { verbId: "have", ko: "샐러드로 할게요.", answer: "I'll have the salad.", hint: "have + food" },
      { verbId: "get", ko: "물 한 잔 받을 수 있을까요?", answer: "Can I get a glass of water?", hint: "Can I get" },
      { verbId: "take", ko: "이건 포장해서 가져갈게요.", answer: "I'll take it to go.", hint: "take + it" },
      { verbId: "give", ko: "잠깐만 시간 주세요.", answer: "Give me a second, please.", hint: "give me a second" },
      { verbId: "like", ko: "정말 마음에 들어요.", answer: "I really like it.", hint: "really like" },
    ],
  },
  {
    id: "problem",
    title: "문제 해결",
    subtitle: "확인·설명·결정·후속 조치에 필요한 문장",
    color: "#8fe1cc",
    cards: [
      { verbId: "let", ko: "제가 확인할게요.", answer: "Let me check.", hint: "Let me + verb" },
      { verbId: "get", ko: "무슨 말인지 이해가 안 돼요.", answer: "I don't get it.", hint: "get it" },
      { verbId: "go", ko: "다시 한번 설명해 주시겠어요?", answer: "Can you go over that again?", hint: "go over" },
      { verbId: "make", ko: "오늘 결정해야 해요.", answer: "We need to make a decision today.", hint: "make a decision" },
      { verbId: "take", ko: "제가 처리할게요.", answer: "I'll take care of it.", hint: "take care of" },
      { verbId: "get", ko: "다시 연락드릴게요.", answer: "I'll get back to you.", hint: "get back to" },
    ],
  },
  {
    id: "blueprint",
    title: "영어 뇌 설계도",
    subtitle: "It·That·This 상황 주어와 의미 단위로 말하기",
    color: "#8fb8ff",
    cards: [
      { verbId: "give", ko: "그 덕분에 점심 먹을 시간이 충분해요.", answer: "That gives me enough time to grab lunch.", hint: "That gives me + time" },
      { verbId: "make", ko: "이렇게 하면 선택지를 비교하기가 더 쉬워요.", answer: "This makes it easier to compare the options.", hint: "This makes it + adjective" },
      { verbId: "take", ko: "생각보다 시간이 더 오래 걸렸어요.", answer: "It took longer than I expected.", hint: "It took + time" },
      { verbId: "work", ko: "그 일정이면 저는 괜찮아요.", answer: "That works for me.", hint: "That works for + person" },
      { verbId: "make", ko: "이렇게 하면 우리가 일정대로 가기가 더 쉬워져요.", answer: "This makes it easier for us to stay on track.", hint: "This makes it easier for + person + to + verb" },
      { verbId: "work", ko: "저는 5년 동안 마케팅 분야에서 일했어요.", answer: "I worked in marketing for five years.", hint: "work in + field" },
      { verbId: "have", ko: "그분은 소통 능력이 뛰어나요.", answer: "He has great communication skills.", hint: "have + quality" },
      { verbId: "have", ko: "어제 아침은 정말 이상하게 흘러갔어요.", answer: "I had a weird morning yesterday.", hint: "have + experience" },
      { verbId: "have", ko: "정말 필요한 경우가 아니면 운전하지 않아요.", answer: "I don't drive unless I really have to.", hint: "meaning chunks" },
      { verbId: "get", ko: "어제 그 식당을 예약하지 못했어요.", answer: "I couldn't get a reservation at that restaurant yesterday.", hint: "my story + get" },
    ],
  },
];

const basicVerbRows = `
001|have|소유하다
002|have|경험하다
003|have|먹다·마시다
004|have to|~해야 한다
005|have|행사를 열다
006|have something done|남에게 맡겨 하게 하다
007|have|특성을 지니다
008|have|회의·대화를 진행하다
009|get|받다·얻다
010|get + adjective|~해지다
011|get|도착하다
012|get it|이해하다
013|get|가져오다
014|get something done|~을 처리되게 하다
015|get to + verb|~할 기회를 갖다
016|get started|시작하다
017|get sick|병에 걸리다
018|get someone to + verb|설득해 ~하게 하다
019|get along with|잘 지내다
020|get over|극복하다·회복하다
021|get rid of|없애다·처분하다
022|make|만들다·제작하다
023|make + object + adjective|~하게 만들다
024|make money|수입을 올리다
025|make it|해내다·도달하다
026|make a decision|결정·계획을 세우다
027|make up|꾸며내다·화해하다
028|take|가져가다·지참하다
029|take a bus / train|교통수단을 이용하다
030|take medicine|약을 복용하다
031|take time / effort|시간·노력이 들다
032|take responsibility|받아들이다·책임지다
033|take a photo|사진을 찍다
034|do|하다·수행하다
035|like|좋아하다·즐기다
036|see|보다·관람하다·이해하다
037|know|알다·알고 있다
038|work|일하다
039|work|작동하다·효과가 있다
040|go|가다·이동하다
041|go + adjective|상태가 변하다
042|go with|어울리다·잘 맞다
043|want|원하다·바라다
044|say|말하다·전달하다
045|let someone + verb|허락하다
046|let someone + verb|내버려 두다
047|let someone know|알리다
048|give|주다·건네다
049|give up|포기하다
050|keep|보관하다·간직하다
051|keep + -ing|계속 ~하다
052|keep + object + adjective|~한 상태로 유지하다
053|leave|떠나다·출발하다
054|leave something|두고 오다·남기다
055|leave alone|내버려 두다
056|bring|가져오다·데려오다
057|head to / for|~로 향하다
058|come|오다·방문하다
059|put|놓다·두다
060|put off|미루다
061|feel|느끼다·기분이 ~하다
062|turn + adjective|변하다·바뀌다
063|move|이사하다·이동하다
064|run|운영하다·관리하다
065|try|해 보다·시도하다
066|can't stand|참을 수 없다
067|break|규칙·약속을 어기다
068|hurt|아프다·상처 주다
069|notice|알아채다·주목하다
070|expect|예상하다·기대하다
071|lose|잃다·지다
072|catch|잡다·따라잡다·타다
073|cost|비용이 들다
074|offer|제안하다·제공하다
075|require|필요로 하다·요구하다
076|gain|얻다·늘다
077|mention|언급하다
078|handle|처리하다·다루다
079|sell|팔다
080|suit|어울리다·맞다
081|miss|그리워하다·놓치다
082|finish|끝내다·완료하다
083|finish + -ing|~하기를 마치다
084|belong to|~에 속하다
085|afford|여유가 되다·감당하다
086|grab|빠르게 잡다·챙기다
087|fix|고치다·수리하다
088|deserve|받을 자격이 있다
089|mind|꺼리다·신경 쓰다
090|book|예약하다
091|seem|~처럼 보이다
092|bother|귀찮게 하다
093|bother to + verb|수고를 들여 ~하다
094|spare|시간·돈을 내주다
095|ruin|망치다
096|owe|빚지다·신세를 지다
097|quit|그만두다
098|arrange|준비하다·정리하다
099|skip|건너뛰다·빠지다
100|spoil|망치다·상하다
`;

const phrasalVerbRows = `
001|add up|합산되다·말이 되다
002|blow away|완전히 감동시키다
003|break up|헤어지다
004|brush up on|복습하다
005|care for|돌보다·좋아하다
006|catch on|이해하다·유행하다
007|catch up|따라잡다·안부를 나누다
008|check on|상태를 확인하다
009|check in|체크인하다·보고하다
010|check out|체크아웃하다·살펴보다
011|come across|우연히 발견하다
012|come along|함께 오다·진전되다
013|come around|생각을 바꾸다·들르다
014|come off|성공하다·떨어지다
015|come across as|~한 인상을 주다
016|come up with|생각해내다
017|cut off|끊다·말을 가로막다
018|figure out|이해하다·파악하다
019|figure out|계산하다·산출하다
020|fill in for|대신하다
021|find out|알아내다
022|fit in|어울리다·시간을 내다
023|get around|이곳저곳 이동하다
024|get around|규칙·문제를 우회하다
025|get around to|미루다 드디어 하다
026|get away with|처벌을 피하다
027|get by|그럭저럭 해내다
028|get into|관심을 갖게 되다
029|get into|학교·프로그램에 들어가다
030|get over|회복하다·극복하다
031|get past|장애물·감정을 넘다
032|get it over with|싫은 일을 빨리 끝내다
033|get through|끝내다·연락되다·버티다
034|give away|공짜로 주다·누설하다
035|go along with|동의하다·따르다
036|go by|시간이 흐르다·규칙을 따르다
037|go into|분야에 뛰어들다
038|go into|자세히 설명하다
039|go off|알람이 울리다·상하다
040|go on|계속되다·일어나다
041|go over|검토하다·복습하다
042|go through|힘든 일을 겪다
043|go through|꼼꼼히 살펴보다
044|hang out|어울려 시간을 보내다
045|hold back|억제하다·숨기다
046|hold off|미루다·기다리다
047|hold up|지연시키다
048|hold up|상태가 유지되다
049|keep up with|속도·변화를 따라가다
050|leave out|빠뜨리다·제외하다
051|let go of|놓다·감정을 놓아주다
052|look at|살펴보다·고려하다
053|look down on|무시하다
054|look into|조사하다
055|look over|훑어보다
056|look up|찾아보다·상황이 나아지다
057|loosen up|긴장을 풀다
058|make do with|있는 것으로 때우다
059|make out|이해하다·알아보다
060|make up for|보충하다·만회하다
061|mess around|빈둥거리다·장난치다
062|mess up|망치다
063|mess with|건드리다·귀찮게 하다
064|miss out on|기회·경험을 놓치다
065|move on|앞으로 나아가다
066|pass for|~로 통하다
067|pass up|기회를 거절하다
068|pick up|익히다·데리러 가다·나아지다
069|pick up on|미묘한 것을 알아채다
070|pull off|어려운 일을 해내다
071|put away|치우다·저축하다
072|put down|내려놓다·기록하다
073|put off|미루다·마음을 돌리다
074|put on|입다·행사를 열다
075|put together|조립하다·준비하다
076|put up|세우다·숙소를 제공하다
077|put up with|참다·견디다
078|run into|우연히 만나다·문제에 부딪히다
079|settle for|타협하다
080|show off|자랑하다
081|slack off|태만해지다
082|sort out|해결하다·정리하다
083|stick around|근처에 머물다
084|stick it out|끝까지 버티다
085|stop by|잠깐 들르다
086|take away|가져가다·교훈을 얻다
087|take back|말을 취소하다·반납하다
088|take off|벗다·이륙하다·급성장하다
089|take on|책임을 맡다·고용하다
090|take out|꺼내다·데리고 나가다
091|take up|취미를 시작하다·차지하다
092|tell off|야단치다
093|top off|마무리하다·가득 채우다
094|turn out|~로 판명되다
095|wake up|잠에서 깨다·현실을 직시하다
096|walk through|단계별로 설명하다
097|work on|개선·제작에 노력하다
098|work on|사람을 설득하려 하다
099|work out|운동하다
100|work out|잘 해결되다
`;

const parseReferenceRows = (rows, type, source) =>
  rows
    .trim()
    .split("\n")
    .map((row) => {
      const [day, term, meaning] = row.split("|");
      const base = term.trim().split(/\s|\+/)[0].toLowerCase();
      return {
        id: `${type}-${day}`,
        day: Number(day),
        term: term.trim(),
        meaning: meaning.trim(),
        type,
        source,
        coreId: coreVerbs.some((verb) => verb.id === base) ? base : null,
      };
    });

export const referenceItems = [
  ...parseReferenceRows(basicVerbRows, "basic", "기본 동사 100"),
  ...parseReferenceRows(phrasalVerbRows, "phrasal", "구동사 100"),
];

export const practiceCards = [
  ...coreVerbs.flatMap((verb) =>
    verb.prompts.map((prompt, index) => ({
      id: `${verb.id}-prompt-${index + 1}`,
      verbId: verb.id,
      verb: verb.word,
      ...prompt,
      meaning: prompt.meaning ?? `${prompt.context}에서 '${prompt.hint}' 틀로 말하기`,
      kind: "core-prompt",
    })),
  ),
  ...coreVerbs.flatMap((verb) =>
    verb.usages.map((usage, index) => ({
      id: `${verb.id}-usage-${index + 1}`,
      verbId: verb.id,
      verb: verb.word,
      ko: usage.ko,
      answer: usage.example,
      hint: usage.frame,
      meaning: usage.meaning,
      context: "실전 회화",
      kind: "conversation-usage",
    })),
  ),
  ...scenarioPacks.flatMap((scenario) =>
    scenario.cards.map((card, index) => ({
      id: `scenario-${scenario.id}-${index + 1}`,
      verb: coreVerbs.find((verb) => verb.id === card.verbId)?.word ?? "",
      context: scenario.title,
      scenarioId: scenario.id,
      ...card,
      meaning: card.meaning ?? `${scenario.title}에서 '${card.hint}' 틀로 말하기`,
      kind: "scenario",
    })),
  ),
];

export const sourceMaterials = [
  { title: "동사를 먼저 던져라", detail: "영어 어순과 핵심 기본동사 훈련" },
  { title: "기본 동사 100 연습 워크북", detail: "100가지 기본동사 쓰임" },
  { title: "구동사 100 연습 워크북", detail: "100가지 실전 구동사" },
  { title: "기초 영어회화 100 연습 워크북", detail: "초급 핵심 회화 패턴" },
  { title: "영어회화 100 연습 워크북", detail: "일상 회화와 자연스러운 반응" },
  { title: "쉬운 동사로 바로 말하는 영어", detail: "기본동사 15개와 문장 틀" },
  { title: "회의에서 바로 쓰는 영어 완전문장 100", detail: "업무 회의 문장" },
  { title: "Native Speaking Blueprint", detail: "말하기 훈련 참고 자료" },
];
