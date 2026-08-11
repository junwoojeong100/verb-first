const usageRows = `
be|be + adjective|상태를 말하다|I'm exhausted after that meeting.|그 회의 끝나고 완전히 지쳤어.
be|be + noun|정체나 역할을 말하다|She's my new manager.|그분이 제 새 매니저예요.
be|be + place|위치를 말하다|We're at the main entrance.|우리 정문에 있어.
be|be from + place|출신을 말하다|I'm from Busan originally.|저는 원래 부산 출신이에요.
be|be about to + verb|막 ~하려고 하다|I'm about to head out.|나 지금 막 나가려던 참이야.
be|be supposed to + verb|~하기로 되어 있다|You're supposed to sign here.|여기에 서명하게 되어 있어요.
be|be into + noun|~에 푹 빠져 있다|I'm really into podcasts lately.|요즘 팟캐스트에 푹 빠졌어.
be|be good at + -ing|~을 잘하다|She's good at explaining things.|그분은 설명을 잘해요.
be|be up to + noun / question|무엇을 하는 중인지 말하다|What are you up to tonight?|오늘 밤 뭐 해?
be|there + be|무언가의 존재를 말하다|There might be a short delay.|조금 지연될 수도 있어요.
have|have + noun|가지고 있거나 떠오른 것이 있다|I have an idea.|아이디어가 하나 있어요.
have|have + meal / drink|먹거나 마시다|Let's have lunch together.|같이 점심 먹자.
have|have a good time|즐거운 시간을 보내다|We had a great time.|우리 정말 즐거웠어.
have|have trouble + -ing|~하는 데 어려움을 겪다|I'm having trouble logging in.|로그인하는 데 문제가 있어요.
have|have + event|일정이나 행사가 있다|We have a call at two.|2시에 통화가 있어요.
have|have someone over|누군가를 집에 초대하다|We're having friends over tonight.|오늘 밤 친구들이 집에 와.
have|have got + noun|가지고 있다|I've got a minute if you want to talk.|이야기하고 싶으면 잠깐 시간 있어요.
have|have been + -ing|계속 ~해 오고 있다|I've been waiting for your reply.|계속 답장을 기다리고 있었어요.
have|have to + verb|~해야 한다|I have to head out now.|나 이제 나가야 해.
have|have + object + p.p.|남에게 맡겨 ~하게 하다|I had my hair cut yesterday.|어제 미용실에서 머리를 잘랐어.
do|do + chore / task|일이나 집안일을 하다|I need to do the laundry.|빨래해야 해.
do|do the rest|나머지를 처리하다|You start it, and I'll do the rest.|네가 시작하면 나머지는 내가 할게.
do|do one's best|최선을 다하다|I'll do my best to finish today.|오늘 끝내도록 최선을 다할게요.
do|do well|잘 해내다|You're doing really well.|너 정말 잘하고 있어.
do|do someone a favor|누군가의 부탁을 들어주다|Could you do me a favor?|부탁 하나 들어줄래?
do|do without + noun|~ 없이 지내거나 해내다|We can do without the extra feature.|그 추가 기능 없이도 할 수 있어요.
do|do with + object|무엇을 처리하다|What should I do with this box?|이 상자는 어떻게 할까?
do|do damage|피해를 주다|The delay did some damage.|그 지연으로 피해가 좀 생겼어요.
do|do the trick|효과를 내다|That should do the trick.|그거면 효과가 있을 거예요.
do|how are you doing?|안부나 상태를 묻다|Hey, how are you doing?|안녕, 어떻게 지내?
get|get + noun|받다|I got your text this morning.|오늘 아침에 네 문자 받았어.
get|get + item / opportunity|구하거나 얻다|Did you get the tickets?|표 구했어?
get|get + place|도착하다|What time did you get home?|몇 시에 집에 도착했어?
get|get + adjective|어떤 상태가 되다|It's getting cold outside.|밖이 추워지고 있어.
get|get + idea / point|이해하다|I get what you're saying.|무슨 말인지 알겠어요.
get|get + person + object|가져다주다|Can I get you some water?|물 좀 가져다드릴까요?
get|get + person + to + verb|설득해 ~하게 하다|I got him to call the client.|그를 설득해서 고객에게 전화하게 했어요.
get|get + object + p.p.|~을 처리되게 하다|I need to get my screen fixed.|화면을 수리 맡겨야 해요.
get|get to + verb|~할 기회를 얻다|I finally got to meet her.|드디어 그분을 만나 봤어요.
get|get going|출발하거나 시작하다|We should get going.|우리 이제 출발해야겠다.
make|make + food / drink|음식이나 음료를 만들다|I'll make some coffee.|커피 좀 만들게.
make|make plans|계획을 세우다|Let's make plans for the weekend.|주말 계획 세우자.
make|make a decision|결정하다|We need to make a decision today.|오늘 결정을 내려야 해요.
make|make a mistake|실수하다|I made the same mistake again.|또 같은 실수를 했어.
make|make money|돈을 벌다|Does this business make money?|이 사업은 수익이 나나요?
make|make + object + adjective|~을 어떤 상태로 만들다|This will make things easier.|이렇게 하면 일이 더 쉬워질 거예요.
make|make + person + verb|누군가를 ~하게 만들다|That movie made me cry.|그 영화 때문에 울었어.
make|make it|해내거나 제시간에 가다|I can't make it tonight.|오늘 밤은 못 갈 것 같아.
make|make sure + clause|반드시 확인하다|Make sure the door is locked.|문이 잠겼는지 꼭 확인해.
make|make up one's mind|마음을 정하다|I haven't made up my mind yet.|아직 마음을 못 정했어.
take|take + object|가져가거나 챙기다|Take an umbrella with you.|우산 챙겨 가.
take|take + transport|교통수단을 이용하다|Let's take a taxi.|택시 타자.
take|it takes + time|시간이 걸리다|It takes about twenty minutes.|20분 정도 걸려요.
take|take medicine|약을 복용하다|Did you take your medicine?|약 먹었어?
take|take a photo|사진을 찍다|Could you take a photo of us?|우리 사진 좀 찍어 주실래요?
take|take your time|서두르지 않고 천천히 하다|Take your time. There's no rush.|천천히 해. 서두를 필요 없어.
take|take care of + noun|돌보거나 처리하다|I'll take care of the booking.|예약은 제가 처리할게요.
take|take responsibility|책임을 지다|I'll take responsibility for the mistake.|그 실수는 제가 책임질게요.
take|take place|열리거나 발생하다|The event takes place on Friday.|행사는 금요일에 열려요.
take|take someone's advice|조언을 받아들이다|I'm glad I took your advice.|네 조언을 듣길 잘했어.
give|give + person + object|누구에게 무언가를 주다|Can you give me the key?|열쇠 좀 줄래?
give|give someone a second|잠깐 시간을 주다|Give me a second to check.|확인할 테니 잠깐만 기다려 주세요.
give|give someone a call|전화하다|I'll give you a call later.|나중에 전화할게.
give|give someone a hand|도와주다|Can you give me a hand with this?|이것 좀 도와줄래?
give|give it a try|한번 시도하다|Let's give it a try.|한번 해 보자.
give|give advice|조언하다|She gave me some useful advice.|그분이 유용한 조언을 해 줬어요.
give|give an update|진행 상황을 알리다|Let me give you a quick update.|진행 상황을 간단히 알려드릴게요.
give|give someone a chance|기회를 주다|Just give him a chance.|그에게 기회를 한번 줘.
give|give up|포기하다|Don't give up yet.|아직 포기하지 마.
give|give something back|돌려주다|I'll give it back tomorrow.|내일 돌려줄게.
go|go + place|어딘가로 가다|I need to go home.|집에 가야 해.
go|go + adjective|어떤 상태로 변하다|The screen suddenly went blank.|화면에 갑자기 아무것도 안 보였어요.
go|go + -ing|활동하러 가다|Do you want to go shopping?|쇼핑하러 갈래?
go|go with + noun|어울리거나 선택하다|This shirt goes with everything.|이 셔츠는 어디에나 잘 어울려.
go|how did it go?|진행 결과를 묻다|How did your interview go?|면접 어땠어?
go|go ahead|먼저 하거나 진행하다|Go ahead and start without me.|나 없이 먼저 시작해.
go|go over + noun|검토하다|Let's go over the numbers again.|수치를 다시 검토해 보죠.
go|go through + noun|하나씩 살피거나 겪다|We'll go through each option.|선택지를 하나씩 살펴볼게요.
go|go on|계속하다|Sorry to interrupt. Please go on.|끼어들어서 미안해요. 계속하세요.
go|go back|돌아가다|I need to go back to the office.|사무실로 돌아가야 해.
come|come + direction|화자 쪽으로 오다|Can you come here for a second?|잠깐 이리 와 줄래?
come|come in|안으로 들어오다|Come in and have a seat.|들어와서 앉으세요.
come|come with + person|함께 오다|Do you want to come with us?|우리랑 같이 갈래?
come|come up|일이나 화제가 생기다|Something urgent came up.|급한 일이 생겼어요.
come|come up with + noun|생각해내다|We need to come up with a better plan.|더 나은 계획을 생각해내야 해요.
come|come back|돌아오다|When are you coming back?|언제 돌아와?
come|come over|집에 들르다|Why don't you come over tonight?|오늘 밤 우리 집에 올래?
come|come true|현실이 되다|I hope your dream comes true.|네 꿈이 이루어지길 바라.
come|come across + noun|우연히 발견하다|I came across an old photo.|오래된 사진을 우연히 발견했어.
come|come to mind|문득 떠오르다|Nothing comes to mind right now.|지금은 딱히 떠오르는 게 없어요.
put|put + object + place|특정 위치에 놓다|Just put it on the table.|그냥 탁자 위에 둬.
put|put on + clothing|옷이나 장비를 착용하다|Put on your jacket.|재킷 입어.
put|put off + noun / -ing|미루다|Let's not put this off any longer.|이걸 더 이상 미루지 맙시다.
put|put away + object|치우거나 보관하다|Please put your phone away.|휴대폰을 치워 주세요.
put|put down + object|내려놓거나 적다|Put your name down here.|여기에 이름을 적어 주세요.
put|put together + noun|조립하거나 구성하다|I put together a short summary.|짧은 요약을 만들어 봤어요.
put|put up with + noun|참다|I can't put up with the noise.|그 소음을 더는 못 참겠어.
put|put out + fire / statement|불을 끄거나 발표하다|They put out a statement this morning.|그쪽에서 오늘 아침 성명을 냈어요.
put|put back + object|제자리에 돌려놓다|Put it back when you're done.|다 쓰면 제자리에 돌려놔.
put|put into words|말로 표현하다|It's hard to put into words.|말로 표현하기가 어려워.
keep|keep + object|보관하거나 계속 가지다|You can keep the receipt.|영수증은 가지고 계셔도 돼요.
keep|keep + -ing|계속 ~하다|Keep trying. You're almost there.|계속해. 거의 다 왔어.
keep|keep + object + adjective|어떤 상태를 유지하다|Keep the window open.|창문을 열어 둬.
keep|keep in touch|계속 연락하다|Let's keep in touch.|계속 연락하고 지내자.
keep|keep an eye on + noun|주의 깊게 지켜보다|Can you keep an eye on my bag?|내 가방 좀 봐 줄래?
keep|keep up with + noun|속도나 흐름을 따라가다|I can't keep up with all these changes.|이 모든 변화를 따라가기 힘들어요.
keep|keep someone from + -ing|~하지 못하게 막다|I won't keep you from your work.|일하시는 데 방해하지 않을게요.
keep|keep to + plan / rule|계획이나 규칙을 지키다|Let's keep to the original plan.|원래 계획대로 갑시다.
keep|keep a promise|약속을 지키다|He always keeps his promises.|그는 항상 약속을 지켜.
keep|keep someone posted|계속 상황을 알려주다|I'll keep you posted.|계속 상황 알려드릴게요.
let|let + person + verb|누군가가 ~하게 허락하다|Let her finish.|그분이 끝까지 말하게 두세요.
let|let me + verb|내가 하겠다고 나서다|Let me check that for you.|제가 확인해 볼게요.
let|let's + verb|함께 하자고 제안하다|Let's talk after lunch.|점심 후에 이야기하죠.
let|let someone know|누군가에게 알리다|Let me know what you decide.|결정하면 알려 줘.
let|let me see|생각하거나 확인할 시간을 벌다|Let me see if I'm free.|제가 시간이 되는지 볼게요.
let|let go of + noun|놓아주거나 집착을 버리다|You need to let go of the past.|과거는 이제 놓아야 해.
let|let someone in|안으로 들이거나 비밀을 알려주다|Can you let me in?|문 좀 열어 줄래?
let|let someone down|실망시키다|I don't want to let the team down.|팀을 실망시키고 싶지 않아요.
let|let alone|~은커녕|I can't cook, let alone bake.|요리는커녕 베이킹도 못 해.
let|let it be|그대로 두다|Just let it be for now.|지금은 그냥 그대로 둬.
want|want + noun|무언가를 원하다|I want a window seat.|창가 자리를 원해요.
want|want to + verb|~하고 싶다|I want to leave early today.|오늘은 일찍 가고 싶어.
want|want + person + to + verb|누군가가 ~하길 원하다|I want you to be honest with me.|나한테 솔직했으면 좋겠어.
want|do you want to + verb?|상대의 의향을 묻다|Do you want to grab coffee?|커피 한잔할래?
want|I wanted to + verb|조심스럽게 용건을 꺼내다|I wanted to ask you something.|뭐 하나 물어보고 싶었어요.
want|don't want to + verb|~하고 싶지 않다|I don't want to rush this.|이걸 서두르고 싶지 않아요.
want|all I want is + noun|원하는 핵심을 강조하다|All I want is a little peace and quiet.|난 그저 조금 조용히 쉬고 싶어.
want|want me to + verb?|내가 해 주길 원하는지 묻다|Do you want me to send it now?|제가 지금 보낼까요?
want|what do you want to + verb?|원하는 행동을 묻다|What do you want to do next?|다음에 뭐 하고 싶어?
want|have always wanted to + verb|오랫동안 바라 왔다|I've always wanted to visit New York.|뉴욕에 늘 가 보고 싶었어.
need|need + noun|무언가가 필요하다|I need a little more time.|시간이 조금 더 필요해요.
need|need to + verb|~해야 한다|We need to talk.|우리 이야기 좀 해야 해.
need|need + person + to + verb|누군가가 ~해야 한다|I need you to focus for a minute.|잠깐 집중해 줬으면 해요.
need|don't need to + verb|~할 필요가 없다|You don't need to apologize.|사과할 필요 없어.
need|need a hand|도움이 필요하다|Do you need a hand with those boxes?|그 상자들 옮기는 거 도와줄까?
need|all you need is + noun|필요한 것은 이것뿐이라고 말하다|All you need is a valid ID.|유효한 신분증만 있으면 돼요.
need|need time to + verb|~할 시간이 필요하다|I need time to think.|생각할 시간이 필요해.
need|need + person / thing for + noun|특정 목적에 필요하다|We need one more person for the project.|프로젝트에 한 명이 더 필요해요.
need|need to know|꼭 알아야 하다|Here's what you need to know.|꼭 알아야 할 내용은 이거예요.
need|if you need anything|도움을 제안하다|Call me if you need anything.|필요한 게 있으면 전화해.
like|like + noun|무언가를 좋아하다|I like your new haircut.|새 머리 정말 마음에 들어.
like|like + -ing|어떤 활동을 즐기다|I like walking after dinner.|저녁 먹고 걷는 걸 좋아해.
like|like to + verb|평소 선호하는 행동을 말하다|I like to plan ahead.|나는 미리 계획하는 편이야.
like|would like + noun|정중하게 원하다|I'd like a table for two.|두 명 자리 부탁드립니다.
like|would like to + verb|정중하게 하고 싶다고 말하다|I'd like to make a reservation.|예약하고 싶습니다.
like|would you like + noun / to?|정중하게 권하거나 묻다|Would you like some more coffee?|커피 더 드릴까요?
like|would like + person + to + verb|정중하게 상대의 행동을 요청하다|I'd like you to take a look at this.|이것을 한번 봐 주셨으면 합니다.
like|like it when + clause|특정 상황을 좋아한다고 말하다|I like it when we can be honest.|서로 솔직하게 말할 수 있을 때가 좋아.
like|like + object + better|둘 중 하나를 더 좋아하다|I like this version better.|나는 이 버전이 더 마음에 들어.
like|how do you like + noun?|소감이나 만족도를 묻다|How do you like your new job?|새 직장은 어때?
think|think + clause|의견이나 판단을 말하다|I think we're ready.|우리 준비된 것 같아요.
think|don't think + clause|부드럽게 반대하다|I don't think that's a good idea.|그건 좋은 생각이 아닌 것 같아요.
think|think about + noun / -ing|고려하거나 곰곰이 생각하다|I'll think about your offer.|제안을 생각해 볼게요.
think|think of + noun|떠올리거나 평가하다|What do you think of the design?|그 디자인 어떻게 생각해요?
think|think so|그렇다고 생각하다|I think so, but I'm not sure.|그런 것 같지만 확실하진 않아.
think|what do you think?|상대의 의견을 묻다|What do you think we should do?|우리가 어떻게 해야 한다고 생각해요?
think|let me think|생각할 시간을 벌다|Let me think for a second.|잠깐 생각해 볼게.
think|think it over|충분히 생각하다|Can I think it over?|좀 더 생각해 봐도 될까요?
think|think ahead|미리 내다보고 준비하다|We need to think ahead.|우리는 앞을 내다봐야 해요.
think|think back to + noun|과거를 되돌아보다|Think back to your first day here.|여기서의 첫날을 떠올려 보세요.
know|know + noun / clause|사실이나 정보를 알다|I know what happened.|무슨 일이 있었는지 알아.
know|know how to + verb|방법을 알다|Do you know how to use this?|이거 사용하는 법 알아?
know|know + person|누군가와 알고 지내다|I've known her for years.|그분을 여러 해 알고 지냈어요.
know|get to know + person|사람을 알아 가다|I'd like to get to know you better.|당신을 더 알아 가고 싶어요.
know|let someone know|알려주다|Let me know when you arrive.|도착하면 알려 줘.
know|you know|말을 잇거나 공감을 구하다|It's complicated, you know?|그게 좀 복잡하잖아, 알지?
know|I know, right?|강하게 공감하다|I know, right? It's so expensive.|그러니까. 너무 비싸지?
know|you know what?|새 생각이나 결정을 꺼내다|You know what? Let's just go.|있잖아, 그냥 가자.
know|as far as I know|아는 범위에서 말하다|As far as I know, nothing has changed.|제가 알기로는 바뀐 게 없어요.
know|who knows?|아무도 모른다고 말하다|Who knows? It might work.|누가 알겠어? 잘될 수도 있지.
see|see + object|눈으로 보다|Did you see that?|방금 그거 봤어?
see|see + person|만나거나 진료받다|I'm seeing my dentist tomorrow.|내일 치과에 가요.
see|see + point / meaning|상대의 요지를 이해하다|I see your point.|말씀하신 요지는 알겠어요.
see|see + clause|상황을 알아보다|I can see why you're upset.|왜 화가 났는지 알겠어.
see|see + person + verb|누군가가 ~하는 것을 보다|I saw him leave early.|그가 일찍 나가는 걸 봤어.
see|see if + clause|~인지 확인하다|Let me see if she's available.|그분이 시간이 되는지 확인해 볼게요.
see|see about + noun / -ing|처리하거나 알아보다|I'll see about getting us a table.|자리를 구할 수 있는지 알아볼게.
see|see to it that + clause|반드시 처리하다|I'll see to it that this gets done.|이 일이 끝나도록 제가 챙길게요.
see|let's see|생각하거나 결과를 지켜보다|Let's see what happens.|어떻게 되는지 보자.
see|see you + time|헤어질 때 다음 만남을 말하다|See you next week.|다음 주에 봐요.
look|look at + noun|의도적으로 보다|Look at this photo.|이 사진 좀 봐.
look|look + adjective|~해 보이다|You look tired today.|오늘 피곤해 보여.
look|look for + noun|찾다|I'm looking for my keys.|열쇠를 찾고 있어.
look|look like + noun / clause|~처럼 보이다|It looks like rain.|비가 올 것 같아.
look|look into + noun|조사하다|I'll look into the problem.|그 문제를 조사해 볼게요.
look|look over + noun|빠르게 검토하다|Could you look over this email?|이 이메일 좀 검토해 줄래요?
look|look after + noun|돌보다|Can you look after the kids?|아이들 좀 봐 줄래?
look|look forward to + noun / -ing|기대하다|I'm looking forward to seeing you.|만날 날을 기대하고 있어요.
look|look out for + noun|주의하거나 챙겨 보다|Look out for an email from me.|제가 보내는 이메일을 잘 확인해 주세요.
look|look up + noun|정보를 찾아보다|I'll look up the address.|주소를 찾아볼게.
watch|watch + object|움직이는 것을 지켜보다|We watched a movie last night.|어젯밤에 영화 봤어.
watch|watch + person + verb|누군가가 ~하는 것을 보다|Watch me do it first.|먼저 내가 하는 걸 봐.
watch|watch for + noun|나타나는 것을 주의 깊게 기다리다|Watch for the confirmation email.|확인 이메일이 오는지 잘 보세요.
watch|watch out|위험을 경고하다|Watch out! The floor is wet.|조심해! 바닥이 젖었어.
watch|watch + object + closely|면밀히 관찰하다|We're watching the situation closely.|상황을 면밀히 지켜보고 있어요.
watch|watch the time|시간을 살피다|We should watch the time.|회의가 길어지지 않도록 시간을 살펴야 해요.
watch|watch your step|발밑이나 행동을 조심하다|Watch your step on the stairs.|계단에서 발밑 조심해.
watch|watch what you say|말을 조심하다|You need to watch what you say.|말조심해야 해.
watch|watch + person|잠시 돌보거나 봐주다|Can you watch the kids for a minute?|잠깐 아이들 좀 봐 줄래?
watch|watch something happen|일이 벌어지는 과정을 지켜보다|We watched the sun come up.|우리는 해가 뜨는 걸 지켜봤어.
mean|mean + clause|~라는 뜻이다|This means we have more time.|이건 우리에게 시간이 더 있다는 뜻이에요.
mean|mean to + verb|~할 의도이다|I meant to call you yesterday.|어제 전화하려고 했어.
mean|be meant to + verb|~하도록 의도되다|This button is meant to reset the device.|이 버튼은 기기를 초기화하는 용도예요.
mean|mean by + noun|말의 뜻을 가리키다|What do you mean by "soon"?|곧이라는 게 정확히 무슨 뜻이에요?
mean|I mean it|진심임을 강조하다|You did a great job. I mean it.|정말 잘했어. 진심이야.
mean|didn't mean to + verb|일부러 한 것이 아님을 말하다|I didn't mean to interrupt.|일부러 끼어든 건 아니에요.
mean|mean well|좋은 의도를 가지다|I know you mean well.|좋은 뜻으로 그러는 거 알아.
mean|mean a lot to + person|매우 소중하거나 중요하다|Your support means a lot to me.|당신의 응원이 제게 큰 힘이 돼요.
mean|that means + clause|결과를 설명하다|That means we can leave early.|그러면 우리 일찍 갈 수 있다는 뜻이네.
mean|what I mean is + clause|말을 다시 분명히 하다|What I mean is, we need a backup plan.|제 말은 예비 계획이 필요하다는 뜻이에요.
say|say + content|말의 내용을 전하다|What did he say?|그분이 뭐라고 했어요?
say|say something to + person|누군가에게 말을 건네다|I need to say something to you.|너한테 할 말이 있어.
say|say that + clause|~라고 말하다|She said that she'd be late.|그분이 늦는다고 했어요.
say|I'd say + clause|의견을 부드럽게 말하다|I'd say we're about halfway done.|제 생각엔 절반 정도 끝난 것 같아요.
say|say that again|다시 말해 달라고 하다|Could you say that again?|다시 말씀해 주시겠어요?
say|say no to + noun|요청이나 제안을 거절하다|It's okay to say no to extra work.|추가 업무는 거절해도 괜찮아.
say|let's say + clause|가정하다|Let's say we start on Monday.|월요일에 시작한다고 해 보죠.
say|say hi to + person|안부를 전하다|Say hi to your family for me.|가족에게 내 안부 전해 줘.
say|have something to say|할 말이나 의견이 있다|Do you have anything to say?|할 말 있어?
say|easier said than done|말은 쉽지만 실행은 어렵다|Saving money is easier said than done.|돈을 모으는 건 말처럼 쉽지 않아.
tell|tell + person + content|누구에게 정보를 말하다|Tell me what happened.|무슨 일이 있었는지 말해 줘.
tell|tell + person + to + verb|누구에게 ~하라고 말하다|I told him to wait outside.|그에게 밖에서 기다리라고 했어요.
tell|tell from + noun|근거를 보고 판단하다|It's hard to tell from this photo.|이 사진만으로는 판단하기 어려워요.
tell|tell the truth|사실대로 말하다|To tell the truth, I'm nervous.|솔직히 말하면 긴장돼요.
tell|tell apart|서로 구별하다|I can't tell the twins apart.|그 쌍둥이를 구별 못 하겠어.
tell|tell someone about + noun|~에 대해 알려주다|Let me tell you about my trip.|내 여행 이야기 들려줄게.
tell|tell me more|더 자세히 말해 달라고 하다|That sounds interesting. Tell me more.|흥미롭네요. 더 말해 주세요.
tell|I'll tell you what|제안이나 결론을 꺼내다|I'll tell you what, let's split the bill.|이렇게 하자. 계산은 나눠 내자.
tell|can't tell|확실히 알거나 판단할 수 없다|I can't tell if she's joking.|그분이 농담하는 건지 모르겠어.
tell|tell a story / joke|이야기나 농담을 들려주다|He tells the best stories.|그는 이야기를 정말 재미있게 해.
ask|ask + person + question|누구에게 질문하다|Can I ask you a question?|질문 하나 해도 될까요?
ask|ask for + noun|무언가를 요청하다|I asked for a refund.|환불을 요청했어요.
ask|ask + person + to + verb|누구에게 부탁하다|She asked me to wait.|그분이 기다려 달라고 했어요.
ask|ask about + noun|~에 대해 묻다|They asked about the deadline.|그쪽에서 마감일을 물었어요.
ask|ask around|여러 사람에게 물어보다|I'll ask around and let you know.|주변에 물어보고 알려줄게.
ask|ask someone a favor|부탁하다|Can I ask you a favor?|부탁 하나 해도 될까요?
ask|ask permission|허락을 구하다|You should ask permission first.|먼저 허락을 구해야 해.
ask|ask the price|가격을 묻다|I forgot to ask the price.|가격 묻는 걸 깜빡했어.
ask|ask someone out|데이트를 신청하다|He finally asked her out.|그가 드디어 그분에게 데이트 신청을 했어.
ask|ask yourself + question|스스로 자문하다|Ask yourself what you really want.|네가 정말 원하는 게 뭔지 스스로 물어봐.
talk|talk to / with + person|누구와 대화하다|Can I talk to you for a minute?|잠깐 이야기할 수 있을까요?
talk|talk about + topic|주제에 대해 이야기하다|Let's talk about the budget.|예산에 대해 이야기해 보죠.
talk|talk through + issue|차근차근 논의하다|We need to talk through the details.|세부 사항을 차근차근 논의해야 해요.
talk|talk it over|충분히 상의하다|Let's talk it over tonight.|오늘 밤 충분히 이야기해 보자.
talk|talk someone through + noun|과정을 단계별로 설명하다|Can you talk me through the setup?|설정 과정을 차근차근 설명해 줄래요?
talk|talk someone into + -ing|설득해서 ~하게 하다|She talked me into going.|그분이 나를 설득해서 가게 했어.
talk|talk someone out of + -ing|설득해서 못 하게 하다|I talked him out of quitting.|그가 그만두지 않도록 설득했어요.
talk|talk business|업무 이야기를 하다|Let's eat first and talk business later.|먼저 먹고 업무 이야기는 나중에 하죠.
talk|talk over + person|상대가 말하는 중에 겹쳐 말하다|Let's try not to talk over each other.|서로의 말을 끊지 않도록 해요.
talk|talk to you later|나중에 다시 이야기하다|I have to go. Talk to you later.|가봐야 해. 나중에 이야기하자.
turn|turn + direction|방향을 바꾸다|Turn right at the next light.|다음 신호에서 우회전하세요.
turn|turn + adjective|상태가 변하다|The sky turned dark.|하늘이 어두워졌어.
turn|turn + object + on / off|기기를 켜거나 끄다|Could you turn the lights off?|불을 꺼 줄래?
turn|turn out + adjective / clause|결과가 ~로 드러나다|It turned out fine in the end.|결국 잘 풀렸어.
turn|turn down + noun|거절하거나 소리를 낮추다|I turned down the offer.|그 제안을 거절했어요.
turn|turn up|나타나거나 소리를 높이다|He turned up an hour late.|그가 한 시간 늦게 나타났어.
turn|turn around|방향이나 상황을 반전시키다|We can still turn this around.|아직 이 상황을 반전시킬 수 있어요.
turn|turn into + noun|~로 변하다|The discussion turned into an argument.|토론이 말다툼으로 변했어요.
turn|turn to + person|도움이나 조언을 구하다|She's the person I turn to for advice.|그분은 제가 조언을 구하는 사람이에요.
turn|it's someone's turn|누군가의 차례이다|It's your turn to choose.|네가 고를 차례야.
run|run|달리다|I run every morning.|나는 매일 아침 달려.
run|run + business / team|운영하거나 관리하다|She runs a small design studio.|그분은 작은 디자인 회사를 운영해요.
run|machine / program + runs|기계나 프로그램이 작동하다|The app runs much faster now.|앱이 이제 훨씬 빠르게 돌아가요.
run|run + test / check|검사나 프로그램을 실행하다|Let's run one more test.|테스트를 한 번 더 돌려보죠.
run|run late|예정보다 늦다|Sorry, I'm running late.|미안해, 나 늦고 있어.
run|run out of + noun|다 써서 없어지다|We're running out of milk.|우유가 거의 다 떨어졌어.
run|run into + person / problem|우연히 만나거나 문제에 부딪히다|I ran into an old friend yesterday.|어제 옛 친구를 우연히 만났어.
run|run through + noun|빠르게 검토하거나 연습하다|Can we run through it once more?|한 번만 더 빠르게 맞춰 볼 수 있을까요?
run|run something by + person|의견을 구하다|I'd like to run an idea by you.|아이디어 하나 의견을 여쭙고 싶어요.
run|run errands|여러 볼일을 보다|I need to run a few errands.|볼일을 몇 가지 봐야 해.
work|work + place / time|일하다|I work from home on Fridays.|금요일에는 재택근무해요.
work|work on + noun|무언가를 작업하거나 개선하다|I'm working on the report.|보고서를 작업 중이에요.
work|work for + company / person|소속되어 일하다|She works for a tech company.|그분은 기술 회사에서 일해요.
work|device + works|기기가 작동하다|My camera isn't working.|카메라가 작동하지 않아요.
work|plan / method + works|방법이 효과가 있다|This approach might work.|이 접근법이 효과가 있을지도 몰라요.
work|time + works for + person|일정이 괜찮다|Does three o'clock work for you?|3시 괜찮으세요?
work|work out|잘 해결되거나 운동하다|I'm sure everything will work out.|분명 다 잘 해결될 거예요.
work|work around + problem|문제를 우회해서 해결하다|We found a way to work around it.|우회해서 해결할 방법을 찾았어요.
work|work with + person / tool|함께 일하거나 도구를 다루다|I enjoy working with this team.|이 팀과 일하는 게 좋아요.
work|work toward + goal|목표를 향해 노력하다|We're working toward the same goal.|우리는 같은 목표를 향해 노력하고 있어요.
call|call + person|전화하다|I'll call you after work.|퇴근 후에 전화할게.
call|call + name|큰 소리로 부르다|I heard someone call my name.|누군가 내 이름을 부르는 걸 들었어.
call|call + object + noun|~라고 이름 붙이다|We call this the testing phase.|이걸 테스트 단계라고 부릅니다.
call|call for + noun|~을 필요로 하다|This calls for a different approach.|이건 다른 접근이 필요해요.
call|call back|다시 전화하다|Can I call you back in ten minutes?|10분 뒤에 다시 전화해도 될까요?
call|call it a day|그날 일을 마치다|Let's call it a day.|오늘은 여기까지 하죠.
call|call off + event|취소하다|They called off the meeting.|그들이 회의를 취소했어요.
call|call in sick|아프다고 연락하고 쉬다|I had to call in sick today.|오늘 아프다고 연락하고 쉬어야 했어요.
call|call someone out|잘못을 공개적으로 지적하다|She called him out for being rude.|그분은 그의 무례함을 공개적으로 지적했어요.
call|call on + person|발언이나 도움을 요청하다|The teacher called on me first.|선생님이 저를 먼저 지목했어요.
break|break + object|깨뜨리거나 망가뜨리다|Be careful not to break it.|그거 깨뜨리지 않게 조심해.
break|break a rule / promise|규칙이나 약속을 어기다|I never meant to break my promise.|약속을 어길 생각은 없었어.
break|break down|고장 나거나 감정이 무너지다|My car broke down this morning.|오늘 아침 차가 고장 났어.
break|break + noun + into parts|작은 부분으로 나누다|Let's break the task into smaller steps.|일을 더 작은 단계로 나눠 봅시다.
break|break the news|소식을 조심스럽게 전하다|How should we break the news to her?|그분에게 그 소식을 어떻게 전해야 할까요?
break|break the ice|어색한 분위기를 풀다|A quick game helped break the ice.|짧은 게임이 어색한 분위기를 푸는 데 도움이 됐어요.
break|break a habit|습관을 끊다|It's hard to break an old habit.|오래된 습관을 고치기는 어려워.
break|break up|헤어지거나 흩어지다|They broke up last month.|그들은 지난달에 헤어졌어.
break|break even|손익분기점을 맞추다|We expect to break even this year.|올해 손익분기점을 맞출 것으로 예상해요.
break|break free from + noun|속박에서 벗어나다|She finally broke free from the routine.|그분은 마침내 반복되는 일상에서 벗어났어요.
`;

export const verbConversationUsages = usageRows
  .trim()
  .split("\n")
  .reduce((groups, row) => {
    const [verbId, frame, meaning, example, ko] = row.split("|");
    const usage = {
      frame: frame.trim(),
      meaning: meaning.trim(),
      example: example.trim(),
      ko: ko.trim(),
    };

    if (!groups[verbId]) groups[verbId] = [];
    groups[verbId].push(usage);
    return groups;
  }, {});
