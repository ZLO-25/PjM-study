---
title: 一頁速查
---

# 一頁速查（公式、定義、句型）

**把全站最常被翻的東西壓成一頁：計算公式、燈號與名詞的判準、PM 每天用得到的句型、以及一週的工作節奏。看不懂某一格時，點旁邊的單元連結。**

## 公式

```text
 三點估算（PERT）                      [W-06]
   期望值 E = (O + 4M + P) ÷ 6
   標準差 σ = (P − O) ÷ 6
   O 樂觀、M 最可能、P 悲觀

 實獲值（EVM）                         [W-07]
   SV = EV − PV      SPI = EV ÷ PV   (進度)
   CV = EV − AC      CPI = EV ÷ AC   (成本)
   EAC ≈ BAC ÷ CPI   (假設效率不變)
   ETC = EAC − AC    VAC = BAC − EAC
   > 1 好、< 1 壞；差異為負是壞消息

 要徑                                  [W-05]
   總浮時 = 最晚開始 − 最早開始
   浮時為 0 的工作串起來就是要徑

 回退決策點                            [W-11]
   最晚決策時間 = 窗口結束 − 回退實測時間
```

單元：[W-06 三點估算](practice/W-06-three-point-estimation.md)、[W-07 EVM 試算](practice/W-07-budget-tracking-evm.md)、[W-05 排時程、找要徑](practice/W-05-schedule-critical-path.md)、[W-11 割接與回退](practice/W-11-cutover-rollback.md)。

## 判準

| 要分辨的東西 | 判準 | 單元 |
|---|---|---|
| 綠燈 | 照計畫走，偏差在容忍範圍內，PM 不需要任何人幫忙 | [T-22](theory/T-22-status-reporting.md) |
| 黃燈 | 有偏差或明確威脅，PM 已有對策並寫出「若 X 則變紅」的觸發條件 | [T-22](theory/T-22-status-reporting.md) |
| 紅燈 | PM 在自己的權限內解決不了，需要主管做決定或給資源 | [T-22](theory/T-22-status-reporting.md) |
| 風險 | 還沒發生、可能發生；要寫觸發條件與對策 | [T-16](theory/T-16-risk-issue-assumption.md) |
| 議題 | 已經發生；要有負責人與解決期限 | [T-16](theory/T-16-risk-issue-assumption.md) |
| 假設 | 當成真的在用，但沒驗證；要排驗證日期 | [T-16](theory/T-16-risk-issue-assumption.md) |
| 變更 | 動到核准的範疇、時程或成本基準；要走變更請求 | [T-23](theory/T-23-change-control.md) |
| 範疇蔓延 | 範疇變大了，但沒有人正式評估與核准 | [T-10](theory/T-10-scope-creep.md) |
| RACI 的 A | 一件事只能有一個 A（當責者），可以有多個 R（執行者） | [T-19](theory/T-19-raci.md) |
| 專案 vs 維運 | 有明確的開始與結束、交付獨特成果的是專案 | [T-01](theory/T-01-project-program-product.md) |
| 預測式 vs 敏捷 | 需求穩定、改動代價高 → 預測式；需求會變、要邊做邊學 → 敏捷 | [T-26](theory/T-26-hybrid-tailoring.md) |

## 句型

這些句子不是公式，是在壓力下幫你爭取思考時間、把對話拉回事實的工具。

| 場合 | 可以這樣說 | 背後的單元 |
|---|---|---|
| 有人要加需求 | 「好，我先記下來，評估一下對時程的影響，明天回你。」 | [T-10](theory/T-10-scope-creep.md)、[P-06](psychology/P-06-saying-no.md) |
| 被要求給日期 | 「最快 X、最可能 Y，前提是 Z 成立。Z 不成立我會提前說。」 | [T-12](theory/T-12-estimation.md)、[P-07](psychology/P-07-planning-fallacy.md) |
| 報壞消息第一句 | 「有一件可能影響上線日的事要讓您知道，可能需要您決定……」 | [P-05](psychology/P-05-managing-up.md)、[W-15](practice/W-15-escalation.md) |
| 有人帶來壞消息 | 「謝謝你現在就告訴我。我們一起看最壞情況是什麼。」 | [P-11](psychology/P-11-psychological-safety.md)、[P-15](psychology/P-15-mum-effect.md) |
| 被要求砍時程 | 「可以，那我們一起看範疇和人力哪一個可以動。」 | [P-04](psychology/P-04-principled-negotiation.md) |
| 跟別部門借人 | 「這件事對你們的好處是……；如果這週借不到，替代方案是……」 | [P-03](psychology/P-03-influence-without-authority.md)、[P-04](psychology/P-04-principled-negotiation.md) |
| 會議上有人吵起來 | 「我們先回到判準：這個決定要滿足哪三件事？」 | [P-13](psychology/P-13-conflict-modes.md) |
| 大家都說沒問題 | 「如果三個月後這個專案失敗了，最可能的原因是什麼？」 | [P-14](psychology/P-14-groupthink.md)、[T-15](theory/T-15-risk-management.md) |
| 割接時有人要再試 | 「決策點是 00:00，不延後。這 20 分鐘你盡力排查，到時沒過就回退。」 | [W-11](practice/W-11-cutover-rollback.md)、[C-08](cases/C-08-sim-network-cutover.md) |
| 自己不知道答案 | 「這個我不確定，我今天下午前確認後回你。」 | [P-16](psychology/P-16-rookie-pm-traps.md) |

## 報告順序

```text
 任何口頭或書面報告，都照這個順序

 1 結論 / 燈號      一句話：健康嗎？
 2 影響             對時程、成本、範疇的影響
 3 原因             三句以內
 4 選項             至少兩個，附代價
 5 建議             你選哪一個、為什麼
 6 需要對方做什麼   決定？資源？出面？
 7 下次更新時間     「週三前我會再回報」
```

單元：[T-22 狀態報告](theory/T-22-status-reporting.md)、[W-14 週報](practice/W-14-status-report.md)、[W-15 升級上報信](practice/W-15-escalation.md)。

## 一週節奏

新手 PM 最常問「我每天到底該做什麼」。下面是一個可以直接套用的預測式或混合式專案週節奏，依你的專案調整頻率。

```text
 週一   看 RAID 日誌、更新要徑、確認本週里程碑
 週二   團隊同步會（30 分）、追行動項目
 週三   利害關係人一對一（輪流）、處理變更請求
 週四   風險檢視（15 分）、準備週報草稿
 週五   寄出週報、更新行動項目、記下本週學到的事

 每天   10 分鐘：行動項目有沒有人到期？
 每月   資源負荷、預算（CPI）、里程碑趨勢
 每階段 關卡審查、復盤
```

單元：[W-09 RAID 日誌](practice/W-09-raid-log.md)、[W-21 會議紀錄與行動項目](practice/W-21-meeting-notes-action-items.md)、[W-14 週報](practice/W-14-status-report.md)、[T-24 階段關卡](theory/T-24-governance-stage-gates.md)。

## 開會前 60 秒檢查

- [ ] 這場會要產出什麼決定？如果沒有要決定的事，改成一封信。
- [ ] 誰是能做這個決定的人？他在嗎？
- [ ] 資料在會前 24 小時寄出了嗎？
- [ ] 誰負責記錄行動項目？
- [ ] 預計幾分鐘結束？

單元：[W-21 會議紀錄與行動項目](practice/W-21-meeting-notes-action-items.md)、[W-13 專案啟動會議](practice/W-13-kickoff-meeting.md)。

## 相關頁面

- [遇到問題查這裡](troubleshoot.md)：依症狀找單元。
- [術語表](glossary.md)：名詞的中英對照。
- [對照矩陣](matrix.md)：理論 × 案例。
