---
title: "我現在看 AI 導入，已經不問「可不可以」，而是問「誰要負責」"
date: "2026-05-14"
excerpt: "I no longer ask whether AI can be adopted. I ask who owns it."
tags: ["AI", "Management", "Startup", "Leadership"]
---

最近我越來越少問「這件事能不能用 AI 做」。

這個問題太容易了。大部分時候，答案都是「可以」。可以寫文案，可以整理會議紀錄，可以做客服初稿，可以生程式碼，可以分析資料，可以幫忙想產品方向。你願意多包幾層 workflow、多加幾個 fallback、多接一點工具，它什麼都可以碰一下。

但「可以」不代表「值得」。更不代表「可以放進公司流程裡」。

我現在真正會問的是另一個問題：如果 AI 做錯了，誰負責？

這聽起來很掃興。但公司不是 demo day。產品也不是一段漂亮的影片。真的把 AI 放進營運裡，最麻煩的地方通常不是模型不夠聰明，而是責任邊界不清楚。

一開始導入 AI 的時候，大家很容易被速度騙到。以前一個人要花兩小時整理的東西，現在五分鐘有初稿。以前工程師要花半天查文件，現在 assistant 直接吐一段 solution。以前 PM 要翻十份客戶訪談，現在可以叫模型先分群。

很爽。真的很爽。

但過一陣子你會發現，速度只是第一層。第二層才是成本。

AI 產出的東西不是免費的。它會把成本轉移到別的地方：審稿、驗證、debug、風險控管、版本管理、權限管理，還有最討厭的那種成本，就是「大家以為有人檢查過，但其實沒有」。

這是我看過最危險的狀態。

人類自己做事的時候，通常知道自己哪裡心虛。你熬夜寫一份 proposal，你知道哪一段是硬湊的。工程師趕一個 hotfix，他知道哪裡先欠著 technical debt。BD 回客戶時，他知道哪個承諾是有點緊的。

但 AI 產出的東西很可怕的一點是，它沒有心虛感。它可以用很穩的語氣講一個錯誤的結論。格式漂亮，語氣專業，甚至還會貼心地幫你分段。結果整個團隊被那種「看起來已經整理好了」的感覺催眠。

所以我現在對 AI 導入的態度比較冷血：不要先問能省多少時間，先問這個流程裡最貴的錯誤是什麼。

如果錯一個字只是重寫，那可以放膽試。如果錯一次會影響客戶信任、法務風險、財務數字、系統安全，那就不要把它包裝成「AI 提升效率」然後丟給一個沒被授權的人去承擔。

AI 導入不是買工具，是重新設計責任鏈。

---

## 在新創裡特別明顯

這件事在新創裡尤其明顯。

新創最缺的是時間，也最容易過度相信工具。因為每個人都太忙了，任何看起來能省時間的東西都像救命繩。尤其是 AI 產品，demo 很容易做得驚艷。三天做一個 prototype，一週接 API，兩週跑出一個好像可以賣的版本。投影片上寫起來也很好看。

可是產品不是「能跑」就算產品。

我看一個 AI 產品，現在會先看三件事。

**第一，這個產品有沒有處理「使用者不信任它」的那一刻。**

很多 AI 產品只設計 happy path。使用者問問題，AI 回答，畫面很順，轉場很漂亮。但真實世界裡，使用者不是每次都會被你感動。使用者會懷疑。會追問。會覺得「你是不是亂講」。會想知道資料從哪裡來。會想改掉 AI 的建議。會在最關鍵的時候不敢按送出。

這不是使用者不懂 AI。這是使用者很正常。

如果一個產品沒有設計「我不相信你」的路徑，那它通常還只是 demo，不是產品。

**第二，這個產品有沒有明確知道自己不該做什麼。**

AI 產品最容易犯的錯，就是什麼都想碰。因為模型本身看起來什麼都會，所以產品團隊也跟著膨脹。今天做客服，明天做銷售，後天做知識庫，再加 agent，再加自動寄信，再加 CRM 更新。聽起來很完整，實際上常常是把風險攤得到處都是。

好的產品邊界反而很窄。它知道自己服務誰，在哪個場景裡省下哪一段痛苦。它也知道什麼時候該停下來叫人類接手。

我越來越喜歡會說「這裡不要自動化」的產品團隊。這種克制很值錢。

**第三，這個產品有沒有讓使用者變得更會判斷，而不是更依賴。**

這點我自己也還在想。

很多 AI 產品的短期價值，是幫人跳過思考。這當然有市場。人類本來就很累，沒有人想每天從零開始。但如果一個產品長期讓使用者更不理解自己的工作，只是更會按按鈕，那這個產品會有天花板。

我比較相信另一種方向：AI 幫你處理雜訊，但保留你的判斷位置。它可以幫你整理選項、指出矛盾、提醒風險、把資訊壓縮到你能決策的大小。可是最後那一下，還是要讓人知道自己為什麼選。

---

## 對技術團隊管理的影響

這也是我管理技術團隊時很在意的事。

AI 進來之後，工程管理會變得更難，不是更簡單。至少短期內是這樣。

以前你看一個工程師的能力，可以看他怎麼拆問題、怎麼讀 code、怎麼處理 bug、怎麼跟產品討論 tradeoff。現在多了一層：他怎麼使用 AI。

有人用 AI 變得更強，因為他本來就有判斷力。AI 幫他加速查資料、補樣板、測假設。他問得準，也看得出答案哪裡怪。

也有人用 AI 變得更弱，因為他把思考外包掉了。遇到問題先貼給工具，拿到答案就貼回專案，出了事再說「可是 AI 這樣建議」。這種不是效率提升，是責任稀釋。

所以技術團隊導入 AI，不能只發工具帳號。那太偷懶了。

你要重新定義 code review。以前 review 主要看人寫的 code，現在也要看人怎麼接受 AI 寫的 code。你要問：這段邏輯誰驗過？測試覆蓋哪裡？這個 dependency 為什麼加？這個 pattern 是符合我們系統，還是模型從網路某個角落撿來的？

你也要重新定義 junior 的訓練方式。

這點比較微妙。AI 對 junior 很有幫助，也很危險。它可以降低入門門檻，讓新人比較快進入狀況。但如果新人每次卡住都直接問 AI，他可能跳過了最痛苦也最重要的訓練：在腦中建立系統模型。

工程師不是只會產 code 的人。工程師要知道為什麼這段 code 應該存在，為什麼不該用另一種方式，為什麼今天的 shortcut 會變成三個月後的坑。

這些東西 AI 可以輔助，但不能代替。

我最近對團隊的要求反而更老派：寫清楚、講清楚、驗清楚。

用 AI 可以，甚至應該用。但你要能解釋。你要能負責。你不能把一段你不懂的東西 merge 進去，然後期待公司替你承擔後果。

聽起來嚴格，但我覺得這才是 AI 時代比較健康的管理方式。

我不想管理一群假裝沒有用 AI 的人。那很荒謬，也不實際。我想管理的是一群知道怎麼用 AI、也知道什麼時候不要用 AI 的人。

這兩者差很多。

前者追求看起來很快。後者追求真的可靠。

---

## 快不等於亂

對新創來說，快當然重要。我們沒有大公司的資源，不能慢慢開十個委員會再決定要不要做一個按鈕。但快不等於亂。真正好的速度，是你知道哪些地方可以賭，哪些地方不能賭。

AI 導入也是一樣。

你可以用 AI 加速產品探索，但不要讓它替你假裝有 product insight。你可以用 AI 幫工程師省時間，但不要讓它替你決定架構。你可以用 AI 整理客戶資料，但不要讓它替你理解客戶。你可以讓 agent 自動跑任務，但要有人知道它跑了什麼、改了什麼、如果出事要去哪裡關掉它。

這些聽起來不性感。沒有「十倍效率」那麼好賣。

但公司真的會死在這種不性感的地方。

我自己現在的判斷標準很簡單：如果導入 AI 之後，團隊更清楚、更快驗證、更敢面對問題，那就是好導入。如果導入之後，大家只是產出更多文件、更多 code、更多看起來像進度的東西，但沒有人更理解現況，那只是把混亂自動化。

自動化混亂，還是混亂。只是比較快。

---

## 結論：保留判斷力，而不是堆工具

所以我對 AI 還是樂觀的。非常樂觀。只是這種樂觀不是「AI 會解決一切」那種懶人樂觀。

我相信 AI 會讓小團隊有以前不可能有的槓桿。兩三個人可以做出以前十幾個人才做得動的東西。產品迭代會更快，技術實驗成本會更低，很多以前被行政雜事吃掉的時間會被釋放出來。

但前提是，人不能退位。

人要更會問問題，更會設邊界，更會判斷風險。管理者也不能只喊「大家多用 AI」。那句話跟「大家提高效率」一樣，聽起來正確，實際上沒有用。

你要說清楚：哪些流程可以用，哪些資料不能丟，哪些結果一定要人工確認，哪種錯誤可以接受，哪種錯誤一次都不行。你要讓團隊知道，AI 是工具，不是背鍋的人。

如果這篇文章要有一個結論，大概是這樣：

**AI 導入的成熟度，不是看你用了多少工具，而是看你保留了多少判斷力。**

工具會越來越強。這件事不用懷疑。

比較值得擔心的是，我們會不會因為工具太方便，就偷偷把自己最重要的能力交出去。判斷、責任、品味、對人的理解，這些東西沒有 dashboard，也不好量化，但它們才是公司真正的底層系統。

AI 可以幫我們跑得更快。

但方向，還是要自己看路。

---

## English Version

**I no longer ask whether AI can be adopted. I ask who owns it.**

Lately, I rarely ask, "Can we use AI for this?"

That question has become too easy. Most of the time, the answer is yes. AI can draft copy, summarize meetings, write customer support replies, generate code, analyze data, and brainstorm product directions. If you wrap it in enough workflow, add enough fallback logic, and connect enough tools, it can touch almost anything.

But "can" does not mean "should." It definitely does not mean "this belongs inside company operations."

The question I ask now is different: if AI gets it wrong, who owns the mistake?

That sounds boring. Maybe even pessimistic. But a company is not a demo day. A product is not a polished screen recording. Once AI enters real operations, the hard part is usually not model intelligence. The hard part is unclear responsibility.

When teams first adopt AI, speed is seductive. Something that used to take two hours now has a draft in five minutes. An engineer who used to spend half a day reading docs can ask an assistant for a starting point. A PM can feed ten customer interviews into a model and get rough clusters immediately.

It feels great. Honestly, it does.

Then after a while, you realize speed is only the first layer. The second layer is cost.

AI output is not free. It moves cost somewhere else: review, verification, debugging, risk control, versioning, permissions, and the worst cost of all, the quiet assumption that "someone must have checked this."

That is the dangerous part.

When humans do work themselves, they usually know where they are bluffing. If you write a proposal at 2 a.m., you know which paragraph is weak. If an engineer rushes a hotfix, they know where the technical debt is hiding. If BD replies to a customer, they know which promise is a little tight.

AI has no sense of embarrassment. It can state a wrong conclusion in a calm, confident voice. The format looks clean. The tone sounds professional. It even breaks the answer into neat sections. Then the whole team gets hypnotized by the feeling that something has already been handled.

So my attitude toward AI adoption has become colder: do not start by asking how much time it saves. Start by asking what the most expensive mistake in this workflow would be.

If a mistake means rewriting one sentence, go ahead and experiment. If a mistake affects customer trust, legal exposure, financial numbers, or system security, do not call it "AI efficiency" and quietly hand the risk to someone without authority.

**AI adoption is not tool procurement. It is responsibility design.**

### Especially in startups

This is especially obvious in startups.

Startups are always short on time, which also makes them vulnerable to over-believing in tools. Everyone is busy. Anything that looks like it can save time feels like oxygen. AI products are especially dangerous here because the demo can look incredible. Three days for a prototype. One week to connect APIs. Two weeks for something that almost looks sellable. It looks great on a pitch deck.

But a product is not a product just because it runs.

When I look at an AI product now, I check three things first.

**First: does the product handle the moment when the user does not trust it?**

Too many AI products only design the happy path. The user asks a question, AI answers, the UI flows smoothly, the transition looks elegant. But in real life, users are not always impressed. They doubt. They ask follow up questions. They wonder if the model made something up. They want to know where the data came from. They want to edit the suggestion. At the most important moment, they may not feel safe clicking send.

That does not mean the user "doesn't understand AI." It means the user is normal.

If a product has no path for "I don't trust you," it is probably still a demo, not a product.

**Second: does the product know what it should not do?**

AI products often make the same mistake: they try to touch everything. Because the model appears to do everything, the product team starts expanding too. Today it is customer support. Tomorrow it is sales. Then knowledge base. Then agents. Then automated emails. Then CRM updates. It sounds complete. In practice, it often spreads risk everywhere.

Good product boundaries are usually narrower. The product knows who it serves, what situation it belongs in, and which specific pain it removes. It also knows when to stop and hand the task back to a human.

I increasingly respect product teams that can say, "We should not automate this part." That kind of restraint is expensive in a good way.

**Third: does the product make users better at judgment, or just more dependent?**

I am still thinking about this one.

Many AI products create short term value by helping people skip thinking. There is a market for that. People are tired. Nobody wants to start from zero every day. But if a product slowly makes users understand their own work less and merely click buttons better, that product has a ceiling.

I believe more in another direction: AI handles noise, but keeps the human in the judgment seat. It can organize options, point out contradictions, flag risks, and compress information into a size that a person can actually use. But the final decision should still leave the human knowing why they chose it.

### Managing engineering teams

This matters a lot in technical team management.

AI makes engineering management harder, not easier. At least in the short term.

Before, you could judge an engineer by how they break down problems, read code, debug issues, and discuss tradeoffs with product. Now there is another layer: how they use AI.

Some engineers become stronger with AI because they already have judgment. AI helps them search faster, fill in boilerplate, and test assumptions. They ask better questions, and they can tell when an answer smells wrong.

Others become weaker because they outsource the thinking. They paste every problem into a tool, paste the answer back into the project, and when something breaks, they say, "But AI suggested it." That is not efficiency. That is diluted responsibility.

So AI adoption in engineering teams cannot just mean handing out tool accounts. That is lazy.

You have to redefine code review. Before, review focused on code written by humans. Now review also has to examine how humans accept code written by AI. Who verified this logic? What does the test cover? Why was this dependency added? Does this pattern fit our system, or did the model pick it up from some random corner of the internet?

You also have to rethink how junior engineers are trained.

This part is tricky. AI can help juniors a lot, and it can hurt them badly. It lowers the barrier to entry and helps them get unstuck faster. But if a junior engineer asks AI every time they hit friction, they may skip the painful but necessary part: building a system model in their own head.

Engineers are not people who merely produce code. Engineers need to know why a piece of code should exist, why another approach is worse, and why today's shortcut may become a hole three months later.

AI can support that. It cannot replace it.

My expectations for teams have actually become more old fashioned: write clearly, explain clearly, verify clearly.

Use AI. In many cases, you should. But you need to be able to explain the result. You need to own it. You do not get to merge code you do not understand and expect the company to carry the consequences.

That may sound strict, but I think it is the healthier way to manage in the AI era.

I do not want to manage a team of people pretending they do not use AI. That is absurd and unrealistic. I want to manage people who know how to use AI and also know when not to use it.

Those are very different things.

One optimizes for looking fast. The other optimizes for being reliable.

### Speed is not the same as chaos

For startups, speed matters. Of course it does. We do not have the resources of large companies. We cannot create ten committees before deciding whether to build a button. But speed is not the same as chaos. Good speed means knowing where you can take a bet and where you cannot.

AI adoption works the same way.

Use AI to accelerate product exploration, but do not let it pretend to have product insight for you. Use AI to save engineering time, but do not let it decide your architecture. Use AI to organize customer data, but do not let it understand customers on your behalf. Let agents run tasks automatically if that helps, but someone must know what they ran, what they changed, and where to shut them down if something goes wrong.

None of this sounds very sexy. It does not sell as well as "10x efficiency."

But companies die in these unsexy places.

My current standard is simple: if AI adoption makes the team clearer, faster at validation, and more willing to face problems, it is good adoption. If it only produces more documents, more code, and more things that look like progress, while nobody understands the situation better, then you have automated confusion.

Automated confusion is still confusion. Just faster.

### Keep your judgment, not just your tools

So yes, I am still optimistic about AI. Very optimistic. Just not in the lazy "AI will solve everything" way.

I believe AI gives small teams leverage they never had before. Two or three people can build things that used to require a much larger team. Product iteration gets faster. Technical experiments get cheaper. A lot of time previously eaten by administrative work can be released.

But humans cannot step down.

Humans need to ask better questions, set better boundaries, and judge risk more clearly. Managers also cannot just say, "Everyone should use AI more." That sentence is like saying, "Everyone should be more efficient." It sounds correct and changes almost nothing.

You have to be specific. Which workflows can use AI? Which data cannot be uploaded? Which outputs require human review? Which mistakes are acceptable? Which mistakes are unacceptable even once? The team needs to understand that AI is a tool, not the person who takes the blame.

If this article has one conclusion, it is probably this:

**The maturity of AI adoption is not measured by how many tools you use. It is measured by how much judgment you keep.**

The tools will get stronger. I do not doubt that.

The thing worth worrying about is whether we slowly hand over our most important abilities because the tools feel convenient. Judgment, responsibility, taste, and understanding people do not have neat dashboards. They are hard to quantify. But they are the operating system underneath the company.

AI can help us move faster.

But we still have to watch the road.
