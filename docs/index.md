---
title: 首頁
hide:
  - navigation
---

# PjM 學習互動手冊

**一本把專案管理 (Project Management, PjM) 拆成「理論、心理、實作、案例」四層來學的手冊。每一頁都能單獨閱讀，所有練習都附答案與解析。**

## 這本手冊怎麼組成

```text
 理論 T ◄──────────────► 心理 P
 為什麼要這樣做           人為什麼會這樣反應
   ▲                        ▲
   │                        │
   ▼                        ▼
 實作 W ◄──────────────► 案例 C
 明天上班怎麼做           真實世界發生過什麼
```

| 層 | 代號 | 回答的問題 | 放在哪裡 |
|---|---|---|---|
| 理論 | T | 這個方法是什麼、什麼時候適用、什麼時候不適用 | `theory/` |
| 心理 | P | 利害關係人、團隊和 PM 自己會出現哪些反應 | `psychology/` |
| 實作 | W | 拿到工作時，表單怎麼填、會議怎麼開 | `practice/` |
| 案例 | C | 真實或模擬的專案，拆解哪裡做對、哪裡出錯 | `cases/` |

四層互相連結：讀一個理論單元時，頁尾會指向對應的心理單元、實作單元與案例；讀一個案例時，也能一路點回它用到的理論。

!!! info "工作上遇到狀況，現在就要答案？"
    去 [遇到問題查這裡](troubleshoot.md)：用你眼前的症狀（「有人要順便加功能」「廠商說要延」「會議開完沒人動」）找到第一步動作與對應單元。公式、燈號定義與常用句型在 [一頁速查](cheatsheet.md)。

!!! tip "編號怎麼看"
    `T-10` 是理論第 10 單元，`C-02` 是案例第 2 個。編號是固定的身分證，一個編號在全站只代表一件事；它**不是**閱讀順序。閱讀順序請看下面的學習地圖和三條路線。

## 學習地圖

專案管理的 13 個模組 (Module)，大致照「一個專案從生到死」的順序排列。

```text
 ── 階段 0：打地基 ─────────────────────────
 [M0] PjM 是什麼
   │
 ── 階段 1：啟動 ───────────────────────────
 [M1] 啟動與商業論證
   │
 [M2] 利害關係人
   │
 ── 階段 2：規劃 ───────────────────────────
 [M3] 範疇與需求
   │
 [M4] 時程 ◄──► [M5] 成本與資源
   │
 [M6] 風險與議題
   │
 ── 階段 3：執行與監控 ─────────────────────
 [M7] 品質與驗收
   │
 [M8] 團隊與衝突
   │
 [M9] 溝通與向上管理
   │
 [M10] 變更控制與治理
   │
 ── 階段 4：選擇做法 ───────────────────────
 [M11] 敏捷與混合式
   │
 ── 階段 5：收尾 ───────────────────────────
 [M12] 結案與復盤
```

!!! note "這張圖的限制"
    真實專案不會一條線走完。風險、溝通、變更控制從第一天到最後一天都在發生；M11 的敏捷做法也會讓「規劃 → 執行」變成一輪一輪的循環。這張圖只是幫你找到每個主題的「主要出場位置」。

### 心理主題貫穿每一個模組

```text
 M0 ─────────────────────────────── M12
 ═══════════════════════════════════  利害關係人心理
 ═══════════════════════════════════  溝通、談判與影響力
 ═══════════════════════════════════  PM 自身心理
 ═══════════════════════════════════  團隊動力
```

| 心理主題 | 單元 | 最常在哪些模組出現 |
|---|---|---|
| 利害關係人心理 | [P-01](psychology/P-01-stakeholder-motives.md)、[P-02](psychology/P-02-resistance-to-change.md) | M2、M7、M12 |
| 溝通、談判與影響力 | [P-03](psychology/P-03-influence-without-authority.md)、[P-04](psychology/P-04-principled-negotiation.md)、[P-05](psychology/P-05-managing-up.md)、[P-06](psychology/P-06-saying-no.md) | M0、M5、M9、M10 |
| PM 自身心理 | [P-07](psychology/P-07-planning-fallacy.md)、[P-08](psychology/P-08-escalation-of-commitment.md)、[P-09](psychology/P-09-pm-stress.md)、[P-10](psychology/P-10-anchoring.md)、[P-16](psychology/P-16-rookie-pm-traps.md) | M0、M1、M4、M5、M10 |
| 團隊動力 | [P-11](psychology/P-11-psychological-safety.md)、[P-12](psychology/P-12-team-development-stages.md)、[P-13](psychology/P-13-conflict-modes.md)、[P-14](psychology/P-14-groupthink.md)、[P-15](psychology/P-15-mum-effect.md) | M6、M8、M9、M12 |

## 模組總覽

| 模組 | 理論 T | 實作 W | 代表案例 C |
|---|---|---|---|
| M0 PjM 是什麼 | [T-01](theory/T-01-project-program-product.md) [T-02](theory/T-02-pmbok7-principles-domains.md) [T-03](theory/T-03-pm-role-and-power.md) | [W-20](practice/W-20-first-30-days.md) | [C-06](cases/C-06-nhs-npfit.md) |
| M1 啟動與商業論證 | [T-04](theory/T-04-business-case.md) [T-05](theory/T-05-project-charter.md) | [W-01](practice/W-01-project-charter.md) | [C-05](cases/C-05-berlin-brandenburg-airport.md) |
| M2 利害關係人 | [T-06](theory/T-06-stakeholder-analysis.md) [T-07](theory/T-07-stakeholder-engagement.md) | [W-02](practice/W-02-stakeholder-register.md) | [C-02](cases/C-02-healthcare-gov.md) [C-10](cases/C-10-sim-multi-site-buildout.md) |
| M3 範疇與需求 | [T-08](theory/T-08-requirements.md) [T-09](theory/T-09-wbs-scope-baseline.md) [T-10](theory/T-10-scope-creep.md) | [W-03](practice/W-03-requirements-traceability.md) [W-04](practice/W-04-wbs.md) | [C-03](cases/C-03-fbi-virtual-case-file.md) |
| M4 時程 | [T-11](theory/T-11-critical-path.md) [T-12](theory/T-12-estimation.md) | [W-05](practice/W-05-schedule-critical-path.md) [W-06](practice/W-06-three-point-estimation.md) | [C-04](cases/C-04-sydney-opera-house.md) [C-08](cases/C-08-sim-network-cutover.md) |
| M5 成本與資源 | [T-13](theory/T-13-cost-baseline-evm.md) [T-14](theory/T-14-resource-planning.md) | [W-07](practice/W-07-budget-tracking-evm.md) | [C-12](cases/C-12-sim-resource-conflict.md) |
| M6 風險與議題 | [T-15](theory/T-15-risk-management.md) [T-16](theory/T-16-risk-issue-assumption.md) | [W-08](practice/W-08-risk-register.md) [W-09](practice/W-09-raid-log.md) | [C-01](cases/C-01-denver-airport-baggage.md) [C-11](cases/C-11-sim-vendor-delay.md) |
| M7 品質與驗收 | [T-17](theory/T-17-quality-planning.md) [T-18](theory/T-18-acceptance-criteria.md) | [W-10](practice/W-10-test-acceptance-plan.md) [W-11](practice/W-11-cutover-rollback.md) | [C-02](cases/C-02-healthcare-gov.md) |
| M8 團隊與衝突 | [T-19](theory/T-19-raci.md) [T-20](theory/T-20-matrix-organization.md) | [W-12](practice/W-12-raci-matrix.md) [W-13](practice/W-13-kickoff-meeting.md) [W-21](practice/W-21-meeting-notes-action-items.md) | [C-12](cases/C-12-sim-resource-conflict.md) |
| M9 溝通與向上管理 | [T-21](theory/T-21-communication-planning.md) [T-22](theory/T-22-status-reporting.md) | [W-14](practice/W-14-status-report.md) [W-15](practice/W-15-escalation.md) | [C-06](cases/C-06-nhs-npfit.md) |
| M10 變更控制與治理 | [T-23](theory/T-23-change-control.md) [T-24](theory/T-24-governance-stage-gates.md) | [W-16](practice/W-16-change-request.md) | [C-01](cases/C-01-denver-airport-baggage.md) [C-03](cases/C-03-fbi-virtual-case-file.md) |
| M11 敏捷與混合式 | [T-25](theory/T-25-agile-scrum.md) [T-26](theory/T-26-hybrid-tailoring.md) [T-27](theory/T-27-kanban-flow.md) | [W-17](practice/W-17-hybrid-cadence.md) | [C-09](cases/C-09-sim-legacy-replacement.md) |
| M12 結案與復盤 | [T-28](theory/T-28-closure-handover.md) [T-29](theory/T-29-lessons-learned.md) | [W-18](practice/W-18-retrospective.md) [W-19](practice/W-19-closure-checklist.md) | [C-07](cases/C-07-sim-datacenter-migration.md) |

完整的理論 × 案例對照請看 [對照矩陣](matrix.md)，看不懂的名詞請查 [術語表](glossary.md)。

## 我該走哪一條路線？

先回答三個問題，用「是 / 否」記在心裡：

1. 你曾經負責過一個有時程、有預算、有多個部門參與的專案嗎？
2. 你能不看資料，向別人解釋「範疇基準」和「變更控制」是什麼、為什麼需要嗎？
3. 你曾經需要說服一個不歸你管的主管或部門配合你嗎？

??? success "看建議"
    - **三題都是「否」，或只有一題「是」**：走**新手路線**。你需要先建立整張地圖，再把細節補進去，否則看案例時會看不出問題在哪。
    - **第 1 題「是」、第 2 題「否」**：走**老手路線**。你已經有實戰手感，缺的是把經驗對應到框架的「語言」。這是從技術型 PM 轉到系統化專案管理最常見的狀態。
    - **三題都是「是」**：走**老手路線**，並且直接跳到最後一步「開始教人」。教別人是檢驗自己懂不懂最快的方法。
    - 第 3 題是在看你對「沒有職權的影響力」有沒有體感。答「否」的人，不論走哪條路線，都建議早點讀 [P-03](psychology/P-03-influence-without-authority.md)。

## 三條建議路線

=== "上工前速讀"

    **適合：** 下週就要上任 PjM，只有兩三個晚上可以讀。
    **原則：** 先學會「不要犯新手最貴的錯」，框架之後再補。總共 10 頁，每頁約 10 分鐘。

    ```text
     晚上 1：角色與心態        晚上 2：最常踩的雷
     T-03 PM 的權力來源        T-10 範疇蔓延
     P-03 沒有職權的影響力     P-06 說不與期望管理
     P-16 新手 PM 的心理陷阱   P-15 壞消息上報延遲
     W-20 接手的前 30 天       T-22 狀態報告與燈號

     晚上 3：第一週就要用的工具
     W-21 會議紀錄與行動項目   W-14 週報
     然後把「遇到問題查這裡」加入書籤
    ```

    | 晚上 | 讀這些 | 讀完要能回答 |
    |---|---|---|
    | 1 | [T-03](theory/T-03-pm-role-and-power.md)、[P-03](psychology/P-03-influence-without-authority.md)、[P-16](psychology/P-16-rookie-pm-traps.md)、[W-20](practice/W-20-first-30-days.md) | PM 沒有職權，那我靠什麼讓人配合？前 30 天我要做哪三件事？ |
    | 2 | [T-10](theory/T-10-scope-creep.md)、[P-06](psychology/P-06-saying-no.md)、[P-15](psychology/P-15-mum-effect.md)、[T-22](theory/T-22-status-reporting.md) | 有人要「順便加一個」時我第一句話說什麼？黃燈和紅燈的差別是什麼？ |
    | 3 | [W-21](practice/W-21-meeting-notes-action-items.md)、[W-14](practice/W-14-status-report.md)、[一頁速查](cheatsheet.md) | 一場會議要留下哪三樣東西？週報的第一行寫什麼？ |

    讀完後，請把 [遇到問題查這裡](troubleshoot.md) 加入書籤。上任後遇到狀況，先查那一頁，再回來走新手路線補框架。

=== "新手路線"

    **適合：** 第一次接觸專案管理，或只做過任務執行、沒有統籌過專案的人。
    **節奏：** 8 週，每週挑一個段落讀完、做完該週的練習。

    ```text
     週 1  M0       打地基
     週 2  M1–M2    啟動、利害關係人
     週 3  M3       範疇與需求
     週 4  M4–M5    時程、成本
     週 5  M6–M7    風險、品質
     週 6  M8–M9    團隊、溝通
     週 7  M10–M11  變更、敏捷
     週 8  M12      收尾與復盤
    ```

    | 週 | 先讀（理論） | 再讀（心理） | 動手做（實作） | 看案例 |
    |---|---|---|---|---|
    | 1 | [T-01](theory/T-01-project-program-product.md)、[T-03](theory/T-03-pm-role-and-power.md) | [P-03](psychology/P-03-influence-without-authority.md)、[P-16](psychology/P-16-rookie-pm-traps.md) | [W-20](practice/W-20-first-30-days.md) | [C-01](cases/C-01-denver-airport-baggage.md) |
    | 2 | [T-04](theory/T-04-business-case.md)、[T-05](theory/T-05-project-charter.md)、[T-06](theory/T-06-stakeholder-analysis.md) | [P-01](psychology/P-01-stakeholder-motives.md) | [W-01](practice/W-01-project-charter.md)、[W-02](practice/W-02-stakeholder-register.md) | [C-02](cases/C-02-healthcare-gov.md) |
    | 3 | [T-08](theory/T-08-requirements.md)、[T-09](theory/T-09-wbs-scope-baseline.md)、[T-10](theory/T-10-scope-creep.md) | [P-06](psychology/P-06-saying-no.md) | [W-04](practice/W-04-wbs.md) | [C-03](cases/C-03-fbi-virtual-case-file.md) |
    | 4 | [T-11](theory/T-11-critical-path.md)、[T-12](theory/T-12-estimation.md)、[T-13](theory/T-13-cost-baseline-evm.md) | [P-07](psychology/P-07-planning-fallacy.md) | [W-05](practice/W-05-schedule-critical-path.md)、[W-06](practice/W-06-three-point-estimation.md) | [C-04](cases/C-04-sydney-opera-house.md) |
    | 5 | [T-15](theory/T-15-risk-management.md)、[T-16](theory/T-16-risk-issue-assumption.md)、[T-18](theory/T-18-acceptance-criteria.md) | [P-14](psychology/P-14-groupthink.md) | [W-08](practice/W-08-risk-register.md)、[W-10](practice/W-10-test-acceptance-plan.md) | [C-07](cases/C-07-sim-datacenter-migration.md) |
    | 6 | [T-19](theory/T-19-raci.md)、[T-22](theory/T-22-status-reporting.md) | [P-11](psychology/P-11-psychological-safety.md)、[P-12](psychology/P-12-team-development-stages.md)、[P-15](psychology/P-15-mum-effect.md) | [W-12](practice/W-12-raci-matrix.md)、[W-14](practice/W-14-status-report.md)、[W-21](practice/W-21-meeting-notes-action-items.md) | [C-12](cases/C-12-sim-resource-conflict.md) |
    | 7 | [T-23](theory/T-23-change-control.md)、[T-25](theory/T-25-agile-scrum.md)、[T-26](theory/T-26-hybrid-tailoring.md) | [P-08](psychology/P-08-escalation-of-commitment.md) | [W-16](practice/W-16-change-request.md) | [C-09](cases/C-09-sim-legacy-replacement.md) |
    | 8 | [T-28](theory/T-28-closure-handover.md)、[T-29](theory/T-29-lessons-learned.md) | — | [W-18](practice/W-18-retrospective.md) | [C-06](cases/C-06-nhs-npfit.md)（綜合案例） |

    !!! warning "新手最容易卡住的地方"
        第 4 週的時程與成本有比較多計算。卡住時不要停下來，先往下讀；第 5 週以後的內容大多不依賴計算細節，之後再回頭補也可以。

=== "老手路線"

    **適合：** 已經帶過 IT 專案、有實戰經驗，但沒有系統學過專案管理框架的人。
    **原則：** 先診斷、再補洞。不用從頭讀，把時間花在自己最弱的地方。

    ```text
     ① 診斷 ──► ② 補框架 ──► ③ 補「人」──► ④ 用案例對答案
                                                  │
     ⑥ 開始教人 ◄──────── ⑤ 學會切換做法 ◄──────┘
    ```

    **① 診斷：用案例測自己**
    先讀 [C-03 FBI Virtual Case File](cases/C-03-fbi-virtual-case-file.md)，在看「對應理論」段落之前，自己寫下你認為的三個失敗原因，再和頁面比對。漏掉的部分就是你要補的洞。[練習總覽](exercises/index.md) 裡的自我檢核頁（例如 [接手一個出狀況的專案](exercises/check-project-rescue.md)），也可以拿來診斷。

    **② 補框架：把經驗翻成共通語言**
    技術背景的 PM 通常很會「把事做完」，比較少練習「說清楚為什麼值得做」和「誰有權決定」。

    - [T-02 PMBOK 7 原則與績效領域](theory/T-02-pmbok7-principles-domains.md)：整本手冊的地圖
    - [T-04 商業論證](theory/T-04-business-case.md)：用效益而不是技術規格來說服人
    - [T-24 治理與階段關卡](theory/T-24-governance-stage-gates.md)：決策權在哪裡
    - [T-23 整合變更控制](theory/T-23-change-control.md)：把「臨時加需求」變成有紀錄的決定

    **③ 補「人」：老手最常低估的部分**

    - [P-05 向上管理](psychology/P-05-managing-up.md)、[P-03 沒有職權的影響力](psychology/P-03-influence-without-authority.md)
    - [P-15 壞消息上報延遲](psychology/P-15-mum-effect.md)：為什麼專案總是「綠燈、綠燈、突然紅燈」
    - [P-08 沉沒成本與承諾升級](psychology/P-08-escalation-of-commitment.md)：為什麼該停的專案停不下來
    - [P-04 原則式談判](psychology/P-04-principled-negotiation.md)：跟職能經理借人、跟供應商談交期

    **④ 用案例對答案**
    讀 [C-06 NHS NPfIT](cases/C-06-nhs-npfit.md)、[C-05 Berlin Brandenburg 機場](cases/C-05-berlin-brandenburg-airport.md)，再讀和自己工作最接近的模擬案例：[C-07 資料中心遷移](cases/C-07-sim-datacenter-migration.md)、[C-08 核心網路割接](cases/C-08-sim-network-cutover.md)。每個案例都試著做「反事實推演」：如果你是 PM，會在哪一個決策點做不同的選擇？

    **⑤ 學會切換做法**
    [T-26 混合式與裁適](theory/T-26-hybrid-tailoring.md)、[W-17 混合式專案節奏設計](practice/W-17-hybrid-cadence.md)。重點不是「敏捷比較好」，而是判斷這個專案哪些部分適合先規劃好、哪些部分適合邊做邊調整。

    **⑥ 開始教人**
    [教學素材](teach/index.md) 中每個主題都有講義重點、討論題和講師筆記，有 15 分鐘與 45 分鐘兩種版本。

## 每個單元長什麼樣子

理論 (T)、心理 (P)、實作 (W) 單元都用同一個結構，讀熟一頁之後，其他頁都知道去哪裡找東西：

```text
 ┌─ 一句話定義
 ├─ ASCII 圖解
 ├─ [入門] [進階] 兩個分頁
 ├─ 明天上班可以怎麼用
 ├─ 對照案例 (C)
 ├─ 小測驗（點開看答案與解析）
 └─ 相關單元
```

案例 (C) 單元則用另一個結構：

```text
 背景 ─► 關鍵決策點 ─► 出了什麼事
                          │
   ┌──────────────────────┘
   ▼
 對應理論 (T) ─► 對應心理 (P) ─► 反事實推演 ─► 可帶走的教訓
```

## 互動元素怎麼用

這是靜態網站，沒有人會即時回答你，所以所有「互動」都事先寫好了。先試試看下面這兩個元素：

=== "入門"

    點上方的「入門」「進階」可以切換內容。入門分頁用白話和一個 IT 例子解釋概念，適合第一次讀。

=== "進階"

    進階分頁談取捨、兩難，以及資深 PM 怎麼判斷。你在任何一頁切換到「進階」，其他頁的分頁也會跟著切換。

**試答一題：** 專案進行到一半，業務單位要求「順便」加一個小功能，說只要兩天。最先該做的是什麼？

- A. 直接答應，兩天而已，維持關係比較重要
- B. 直接拒絕，範疇已經凍結
- C. 先評估這個變更對時程、成本、風險的影響，再交給有權決定的人決定
- D. 叫團隊加班做完，不要影響原本的時程

??? success "看答案與解析"
    **答案是 C。**

    - **A 錯：** 「只要兩天」是對方的估計，不是評估過的結果。小變更一個一個累積，就是範疇蔓延，見 [T-10 範疇蔓延](theory/T-10-scope-creep.md)。
    - **B 錯：** 範疇基準存在的目的不是「拒絕所有變更」，而是讓變更有一條被看見、被決定的路。直接拒絕可能錯過真正有價值的需求，也會傷害合作關係，見 [P-06 說不與期望管理](psychology/P-06-saying-no.md)。
    - **C 對：** 這就是變更控制的核心。PM 的工作是把影響講清楚，讓有權的人做有根據的決定，見 [T-23 整合變更控制](theory/T-23-change-control.md)、[W-16 變更請求單](practice/W-16-change-request.md)。
    - **D 錯：** 加班把變更的成本藏起來了。帳面上時程沒動，但團隊的負荷、品質風險都上升，而且決策者沒有機會知道真實代價。

練習頁還有兩種形式：

- **引導練習**：4–6 個循序漸進的問題，每題都可以先點開「提示」，再點開「參考思路」對照，最後看「總結」。
- **自我檢核**：給你一個情境，你自己寫答案，再用評分表（理論應用、心理面向、可行性、遺漏，各 1–5 分）替自己打分，最後才打開參考答案。

## 標籤說明

| 標籤 | 意思 |
|---|---|
| 【預測式】(Predictive) | 適合需求穩定、可以先規劃好再執行的專案，例如機房建置 |
| 【敏捷】(Agile) | 適合需求會變、需要邊做邊學的專案，例如內部工具開發 |
| 【混合式】(Hybrid) | 同一個專案裡，有些部分先規劃好、有些部分迭代進行 |
| 【模擬】 | 為了教學設計的虛構案例，不對應任何真實組織 |

每個方法都會標註適用情境，也會寫出「什麼時候不適用」。公開案例會分開標示「已知事實」與「推論詮釋」，不確定的細節會直接寫不確定。

## 給教學者

如果你要用這個網站教別人：

- [教學素材](teach/index.md) 中有每個主題的教案，包含常見誤解與破解方式、冷場時可以拋的問題、建議搭配的案例。
- 小組討論建議用案例頁的「反事實推演」段落當題目，它沒有標準答案，最容易引發討論。
- 學員自學時，請他們先做題、再點開答案；直接看答案的學習效果會差很多。

## 關於本站

- 內容由作者用自己的話整理改寫，不引用任何書籍原文。PMBOK® 是 Project Management Institute 的註冊商標，本站與該機構無關。
- 本站不包含任何組織的內部資訊；所有模擬案例都是虛構情境。
- 公開案例的內容以公開資料為準，來源列在各案例頁的頁尾。
