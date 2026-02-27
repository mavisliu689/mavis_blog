---
title: "一天搬四個服務上雲，我學到的不是技術"
date: "2026-02-27"
excerpt: "What Migrating Four Services to the Cloud Taught Me — and It Wasn't the Tech"
tags: ["Cloud", "DevOps", "Lessons Learned"]
---

老實說，那天我就是不想繼續忍了。

每次要看監控、確認部署、測翻譯功能，都要先連 VPN。有時候 VPN 又抽風。我是 RD，不是網管，我不應該把時間花在這上面。

所以我決定當天就解決。沒有排會議，沒有寫規格，直接開幹。

中間當然有炸。全部 502。原因是我在 container 裡用了 `localhost`，但 `localhost` 在 container 眼裡是它自己，不是我的機器。改一行，全通。

這種錯誤很蠢，但你不理解為什麼錯，你就只是猜，猜對了也不算真的會。

四個服務，一天，有 HTTPS，有域名，不用 VPN，不用開防火牆。

我不覺得這有多厲害。我覺得**很多事情之所以拖著，是因為你一直在等一個完美的時機去做它**。那個時機不會來。

---

*What Migrating Four Services to the Cloud Taught Me — and It Wasn't the Tech*

Honestly? I just got tired of tolerating it.

Every time I needed to check a dashboard, verify a deployment, or test a feature — I had to connect to VPN first. And sometimes the VPN decided not to cooperate.

I'm in product and engineering. I shouldn't be losing time to this.

So I fixed it that day. No meetings scheduled. No spec written. Just opened the terminal and started.

Things broke, of course. Every service returned 502. Turned out I was using `localhost` inside a container — but `localhost` in a container means the container itself, not the host machine. Changed one thing. Everything worked.

Dumb mistake. But if you don't understand *why* it failed, you're just guessing. And guessing right doesn't mean you actually know.

Four services. One day. HTTPS, custom domains, no VPN, no open firewall ports.

I don't think this is impressive. I think most things stay undone because people keep waiting for the perfect moment to do them. That moment doesn't come.
