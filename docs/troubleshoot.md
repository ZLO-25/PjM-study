---
title: 遇到問題查這裡
---

# 遇到問題查這裡（情境索引）

**這一頁不教理論，只回答一件事：「我現在遇到的狀況，該先做什麼、該翻哪一頁？」用你眼前的症狀找進去，每一列都給你第一步動作與對應單元。**

```text
 先替問題貼一個標籤，再往下找

 眼前的狀況是……
 ├─ 有人要改東西、加東西      → ① 範疇與變更
 ├─ 時間或錢不夠               → ② 時程與成本
 ├─ 事情可能出錯 / 已經出錯    → ③ 風險與危機
 ├─ 某個「人」不配合或在生氣   → ④ 利害關係人
 ├─ 主管那邊有問題             → ⑤ 向上管理
 ├─ 團隊內部卡住               → ⑥ 團隊
 ├─ 我自己撐不住、不確定       → ⑦ PM 自己
 └─ 專案要開始 / 要結束        → ⑧ 啟動與收尾
```

!!! tip "怎麼用這一頁"
    1. 用瀏覽器的搜尋（Ctrl+F / ⌘+F）輸入一個關鍵字，例如「加班」「借人」「廠商」。
    2. 先做「第一步」那一欄，它通常只要 10 分鐘。
    3. 有空再讀「查哪裡」的單元，理解為什麼。
    4. 找不到你的狀況？退一步看 [T-16 風險、議題與假設](theory/T-16-risk-issue-assumption.md)，先判斷它是風險、議題還是變更，大多數問題就會落到下面某一格。

## ① 範疇與變更

| 你遇到的狀況 | 第一步 | 查哪裡 |
|---|---|---|
| 有人說「順便加一個，只要兩天」 | 回一句：「好，我先記下來，評估影響後明天回你。」不要當場答應或拒絕 | [T-10](theory/T-10-scope-creep.md)、[W-16](practice/W-16-change-request.md)、[引導練習](exercises/guide-scope-creep.md) |
| 需求一直變，團隊做白工 | 找出需求的「決定者」是誰，把每個需求對應到一個來源與一個驗收方式 | [T-08](theory/T-08-requirements.md)、[W-03](practice/W-03-requirements-traceability.md) |
| 大家對「做完」的定義不同 | 把驗收標準寫成可以打勾的句子，請驗收方簽認 | [T-18](theory/T-18-acceptance-criteria.md)、[W-10](practice/W-10-test-acceptance-plan.md) |
| 不知道專案到底包含什麼、不包含什麼 | 拆一份 WBS，在章程寫下「明確排除的項目」 | [T-09](theory/T-09-wbs-scope-baseline.md)、[W-04](practice/W-04-wbs.md) |
| 變更已經發生了，沒人核准 | 補一張變更請求單，把事實與影響寫下來，交給有權的人追認 | [T-23](theory/T-23-change-control.md)、[W-16](practice/W-16-change-request.md) |
| 團隊自己加了「比較完整」的功能 | 感謝用心，然後說明：沒被要求的東西也會產生測試、文件與維運成本 | [T-10](theory/T-10-scope-creep.md)（鍍金） |

## ② 時程與成本

| 你遇到的狀況 | 第一步 | 查哪裡 |
|---|---|---|
| 主管問「什麼時候好」，你心裡沒底 | 不要給單一日期；給範圍與假設：「最快 X、最可能 Y，前提是 Z」 | [T-12](theory/T-12-estimation.md)、[W-06](practice/W-06-three-point-estimation.md)、[P-07](psychology/P-07-planning-fallacy.md) |
| 進度落後，不知道先救哪一項 | 找出要徑，只有要徑上的延誤才會延誤專案 | [T-11](theory/T-11-critical-path.md)、[W-05](practice/W-05-schedule-critical-path.md) |
| 被要求「時程砍一半，範疇不變」 | 畫出三角形：時間、範疇、資源，問對方願意動哪一個 | [T-11](theory/T-11-critical-path.md)、[P-04](psychology/P-04-principled-negotiation.md)、[P-06](psychology/P-06-saying-no.md) |
| 預算快用完，但工作沒做完一半 | 算 CPI 與 EAC，把「照目前效率會超支多少」講成一個數字 | [T-13](theory/T-13-cost-baseline-evm.md)、[W-07](practice/W-07-budget-tracking-evm.md) |
| 第一個被講出來的數字變成大家的目標 | 察覺錨定；用由下而上的估算重新開一個錨 | [P-10](psychology/P-10-anchoring.md)、[T-12](theory/T-12-estimation.md) |
| 同一個工程師被三個專案排滿 | 做資源負荷表，拿去和職能經理談，不要自己扛 | [T-14](theory/T-14-resource-planning.md)、[T-20](theory/T-20-matrix-organization.md)、[C-12](cases/C-12-sim-resource-conflict.md) |

## ③ 風險與危機

| 你遇到的狀況 | 第一步 | 查哪裡 |
|---|---|---|
| 總覺得會出事，但說不出是什麼 | 開一份風險登錄表，先寫 10 條，每條都要有「觸發條件」 | [T-15](theory/T-15-risk-management.md)、[W-08](practice/W-08-risk-register.md) |
| 分不清這是風險還是議題 | 已經發生的是議題，還沒發生的是風險；議題要人解決，風險要人準備 | [T-16](theory/T-16-risk-issue-assumption.md)、[W-09](practice/W-09-raid-log.md) |
| 廠商說交期要延 | 先問三件事：確定日期、替代方案、合約條款；再算對要徑的影響 | [C-11](cases/C-11-sim-vendor-delay.md)、[P-04](psychology/P-04-principled-negotiation.md) |
| 割接 / 上線前心裡不踏實 | 用檢核表走一遍：回退時間測過了嗎？決策點誰說了算？ | [W-11](practice/W-11-cutover-rollback.md)、[自我檢核](exercises/check-cutover-risk.md) |
| 割接中有人說「再試 20 分鐘」 | 守住事先寫好的決策點，那是為了這一刻設計的 | [C-08](cases/C-08-sim-network-cutover.md)、[P-08](psychology/P-08-escalation-of-commitment.md) |
| 專案明顯不對勁，但沒人敢說停 | 把「繼續」與「停止」各自的未來成本並排寫出來，不算已經花掉的 | [P-08](psychology/P-08-escalation-of-commitment.md)、[T-24](theory/T-24-governance-stage-gates.md) |
| 剛接手一個已經出狀況的專案 | 前兩週只做三件事：弄清楚現況、找出決策者、建立一份誠實的報告 | [W-20](practice/W-20-first-30-days.md)、[自我檢核](exercises/check-project-rescue.md) |

## ④ 利害關係人

| 你遇到的狀況 | 第一步 | 查哪裡 |
|---|---|---|
| 某個部門一直不配合 | 先問自己：這件事對他們有什麼好處、什麼損失？你還沒回答出來，不要再催 | [P-01](psychology/P-01-stakeholder-motives.md)、[P-02](psychology/P-02-resistance-to-change.md)、[引導練習](exercises/guide-resistant-stakeholder.md) |
| 對方不歸你管，但你需要他做事 | 找出你能交換的東西：資訊、曝光、減少他的麻煩 | [P-03](psychology/P-03-influence-without-authority.md)、[T-03](theory/T-03-pm-role-and-power.md) |
| 不知道該找誰、誰說了算 | 畫一張利害關係人方格，標出權力與關注度 | [T-06](theory/T-06-stakeholder-analysis.md)、[W-02](practice/W-02-stakeholder-register.md) |
| 兩個部門互推責任 | 填 RACI，一件事只能有一個 A | [T-19](theory/T-19-raci.md)、[W-12](practice/W-12-raci-matrix.md) |
| 跟職能經理借人借不到 | 帶著資源負荷表與替代方案去談利益，不要去談立場 | [P-04](psychology/P-04-principled-negotiation.md)、[T-20](theory/T-20-matrix-organization.md) |
| 利害關係人太多，顧不過來 | 依方格分三種溝通頻率；不是每個人都要每週收到報告 | [T-07](theory/T-07-stakeholder-engagement.md)、[T-21](theory/T-21-communication-planning.md) |
| 跨廠區、跨時區的團隊各做各的 | 定一份溝通計畫：誰、何時、用什麼管道、收到什麼 | [T-21](theory/T-21-communication-planning.md)、[C-10](cases/C-10-sim-multi-site-buildout.md) |

## ⑤ 向上管理

| 你遇到的狀況 | 第一步 | 查哪裡 |
|---|---|---|
| 有壞消息，不知道怎麼開口 | 先口頭、再書面；第一句話講「影響」與「需要你決定什麼」 | [引導練習](exercises/guide-bad-news.md)、[P-15](psychology/P-15-mum-effect.md)、[W-15](practice/W-15-escalation.md) |
| 週報寫了沒人看 | 改成「結論先行」：燈號、三個重點、需要主管做的事 | [T-22](theory/T-22-status-reporting.md)、[W-14](practice/W-14-status-report.md) |
| 主管每次都問細節，會議開不完 | 給他一頁摘要加附件，讓他自己選要不要看細節 | [P-05](psychology/P-05-managing-up.md) |
| 主管直接答應客戶一個做不到的日期 | 不要當場反駁；私下帶著估算與選項去談 | [P-05](psychology/P-05-managing-up.md)、[P-06](psychology/P-06-saying-no.md) |
| 該亮紅燈，但怕被罰 | 紅燈的定義是「我需要幫忙」；寫出需要哪一種幫忙 | [T-22](theory/T-22-status-reporting.md)、[P-15](psychology/P-15-mum-effect.md) |
| 專案該不該做，沒人說得清楚 | 回到商業論證：效益是什麼、量不量得出來 | [T-04](theory/T-04-business-case.md)、[W-01](practice/W-01-project-charter.md) |

## ⑥ 團隊

| 你遇到的狀況 | 第一步 | 查哪裡 |
|---|---|---|
| 會議開完沒人動 | 每一條行動項目寫上一個人名與一個日期，24 小時內寄出 | [W-21](practice/W-21-meeting-notes-action-items.md) |
| 團隊成員不說問題，出事才知道 | 下一次有人帶來壞消息，第一句話說「謝謝你告訴我」 | [P-11](psychology/P-11-psychological-safety.md)、[P-15](psychology/P-15-mum-effect.md) |
| 新團隊互相不熟、各懷心思 | 這是正常的形成與風暴期；開一場有結構的啟動會議 | [P-12](psychology/P-12-team-development-stages.md)、[W-13](practice/W-13-kickoff-meeting.md) |
| 兩個資深工程師在會議上吵起來 | 先分清楚：是在吵「事」還是吵「人」；把討論拉回判準 | [P-13](psychology/P-13-conflict-modes.md) |
| 會議上大家都同意，私下都反對 | 指定一個人唱反調，或先匿名收集意見再討論 | [P-14](psychology/P-14-groupthink.md) |
| 團隊一直加班 | 加班是把成本藏起來；把負荷攤在時程上，讓決策者看到 | [T-14](theory/T-14-resource-planning.md)、[P-09](psychology/P-09-pm-stress.md) |
| 不知道該用敏捷還是傳統做法 | 不用二選一；看哪些部分需求穩定、哪些部分要邊做邊學 | [T-26](theory/T-26-hybrid-tailoring.md)、[W-17](practice/W-17-hybrid-cadence.md) |

## ⑦ PM 自己

| 你遇到的狀況 | 第一步 | 查哪裡 |
|---|---|---|
| 覺得自己不配當 PM，怕被看穿 | 這是新手幾乎都有的感覺；把「我不知道」改成「我去確認」 | [P-16](psychology/P-16-rookie-pm-traps.md) |
| 什麼都答應，然後自己扛不完 | 練一句話：「我需要先看一下影響，明天回你。」 | [P-06](psychology/P-06-saying-no.md)、[P-16](psychology/P-16-rookie-pm-traps.md) |
| 責任很大、權力很小，很累 | 列出你的權力來源，正式的只是其中一種 | [T-03](theory/T-03-pm-role-and-power.md)、[P-03](psychology/P-03-influence-without-authority.md)、[P-09](psychology/P-09-pm-stress.md) |
| 每次估算都太樂觀 | 用過去類似專案的實際數字當基準，不要用「這次應該會順」 | [P-07](psychology/P-07-planning-fallacy.md)、[W-06](practice/W-06-three-point-estimation.md) |
| 專案結束了，但沒人記得學到什麼 | 開一場不究責的復盤，產出三條「下次會改的做法」 | [T-29](theory/T-29-lessons-learned.md)、[W-18](practice/W-18-retrospective.md) |

## ⑧ 啟動與收尾

| 你遇到的狀況 | 第一步 | 查哪裡 |
|---|---|---|
| 剛被指派一個新專案，不知道從哪開始 | 前 30 天照清單走：讀文件、見人、寫章程、開啟動會議 | [W-20](practice/W-20-first-30-days.md) |
| 專案沒有章程，大家目標不同 | 寫一頁章程，重點是「目標、範疇、排除、發起人簽名」 | [T-05](theory/T-05-project-charter.md)、[W-01](practice/W-01-project-charter.md) |
| 專案「做完了」但一直收不了尾 | 用結案清單逐條確認：驗收簽了嗎？維運接了嗎？ | [T-28](theory/T-28-closure-handover.md)、[W-19](practice/W-19-closure-checklist.md) |
| 不確定這算專案、專案集還是日常維運 | 看它有沒有明確的結束，以及是否由多個專案組成 | [T-01](theory/T-01-project-program-product.md) |

## 還是找不到？

- 看一個和你最像的模擬案例：[C-07 資料中心遷移](cases/C-07-sim-datacenter-migration.md)、[C-08 核心網路割接](cases/C-08-sim-network-cutover.md)、[C-09 老舊系統汰換](cases/C-09-sim-legacy-replacement.md)、[C-10 跨廠區建置](cases/C-10-sim-multi-site-buildout.md)、[C-11 供應商交期延誤](cases/C-11-sim-vendor-delay.md)、[C-12 跨部門資源爭奪](cases/C-12-sim-resource-conflict.md)。
- 查 [一頁速查](cheatsheet.md) 看公式、燈號定義與常用句型。
- 從 [對照矩陣](matrix.md) 反查：哪個案例用到你在意的理論。
