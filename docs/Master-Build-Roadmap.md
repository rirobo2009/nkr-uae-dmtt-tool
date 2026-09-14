# UAE DMTT Tool — Master Build Roadmap (Pass 6 · Synthesis)
**Purpose:** The single sequencing document for the remainder of this project. Supersedes the original `UAE-DMTT-Tool-Scope-Map.md` where they conflict.
**Basis:** Complete study of all 11 source documents across Passes 1–5. No module below is scoped from unread material.

---

## A. Source documents — complete inventory and status

| # | Document | Read | Notes |
|---|---|---|---|
| 1 | CD 142 of 2024 (outer + 18-article Annexure) | ✅ Full | Core law |
| 2 | FDL 47 of 2022 | ✅ Relevant arts | Arts 50, 56, 59, 60 imported by CD 142 Art 14 |
| 3 | MD 96 of 2026 | ✅ Full | Repealed MD 88; adopts 3 OECD documents |
| 4 | MD 133 of 2026 | ✅ Full | GIR filer specification |
| 5 | FTA Decision No. 12 of 2026 | ✅ Full | Registration/deregistration timelines + notification |
| 6 | CD 215 of 2025 | ✅ Full | R&D Tax Credit |
| 7 | MD 24 of 2026 | ✅ Full | R&D rates and mechanics |
| 8 | TTGREG1 (Aug 2026) | ✅ Full | Scope & Registration |
| 9 | TTGEIE1 (Aug 2026) | ✅ Full | Excluded/Investment Entities |
| 10 | OECD Consolidated Commentary (2026) | ✅ Targeted to UAE QDMTT | 456pp; incl. **Annex A Safe Harbours** |
| 11 | OECD GIR (Jan 2025, rev. Jan 2026) | ✅ Structure + Annex C | Template + penalty relief |
| 12 | OECD Central Record (as at 1 May 2026) | ✅ Full | UAE qualified status confirmed |

**Only genuinely missing:** TTGSHO1 (FTA Safe Harbour guide) — referenced in TTGREG1 fn.163, not yet published. **No longer a blocker** (see §C).

---

## B. Accumulated fix list for LIVE modules

These emerged from the study passes and affect code already deployed. **Recommend clearing these before starting new modules** — they are correctness issues in live output.

### Module 1 (Applicability Gate)
| # | Finding | Type | Source |
|---|---|---|---|
| M1-1 | **Location rules entirely absent.** CD 142 Art 2.1 charges only UAE-*located* entities. Module 1 assumes UAE location silently. Affects foreign-incorporated entities managed from the UAE, and dual-resident entities (treaty / Covered-Taxes tie-breakers) | **Correctness** | TTGREG1 §6 |
| M1-2 | **Verify Step A wording:** Excluded/Investment Entity revenue **still counts** toward the €750m threshold. Confirm the tool doesn't imply otherwise | **Verify** | TTGEIE1 §10 |
| M1-3 | **Enrich out-of-scope output** with TTGEIE1 §10's three practical effects (no charge · attributes stripped from computations · no registration/filing obligations, but Group's GIR still reports structure) | Enhancement | TTGEIE1 §10 |
| M1-4 | **Mergers/demergers change the threshold test itself** (different rule, no 4-year lookback in demerger year 1). Arguably belongs in Module 1, not only a later Special Situations module | Scope gap | TTGREG1 §4.4 |

### Module 4 (Compliance Calendar)
| # | Finding | Type | Source |
|---|---|---|---|
| M4-1 | **Penalty Relief callout is materially incomplete.** Missing two limits: relief does NOT apply to avoidance/fraud/abuse; and does NOT remove the obligation to correct errors and pay unpaid tax **plus interest** | **Correctness** | GIR Annex C |
| M4-2 | Enrich same callout with Annex C's concrete "reasonable measures" examples | Enhancement | GIR Annex C |
| M4-3 | Consider surfacing **UAE's QDMTT qualified status** (Central Record) — genuinely reassuring, currently absent from the whole tool | Enhancement | Central Record |

---

## C. ⚠️ Safe Harbours are UNBLOCKED — decision reversal

Module 4a was paused pending TTGSHO1, on the assumption CD 142 Art 8.2's bare text was the only grounding available. **That was wrong.** The 2026 Commentary — legally adopted by MD 96 — contains **Annex A: Safe Harbours, ~120 pages**, covering exactly the mechanisms in Art 8.2:

- Ch.1 Transitional CbCR Safe Harbour (pp. 323–344)
- Ch.2 Permanent Safe Harbours (pp. 345–420): Simplified Calculations Framework · NMCE · Substance-based Tax Incentive · **Simplified ETR Safe Harbour** (~58pp)
- Ch.3 QDMTT Safe Harbour (pp. 421–433)

**TTGSHO1, when published, becomes a refinement layer** (UAE examples, FTA administrative positions) — not the foundation.

**⚠️ CRITICAL — UAE figures differ from OECD's. Use CD 142's:**
| | **CD 142 (USE)** | OECD Commentary |
|---|---|---|
| Transition Period | FYs beginning before **1 Jan 2027**, ending before **1 July 2028** | Beginning on/before 31/12/2027, not ending after 30/6/2029 |
| Transition Rate | **16%** (FY2025) · **17%** (FY2026) | 15% (2023–24) · 16% (2025) · 17% (2026–27) |

A tool built on OECD figures would give wrong answers to UAE users.

---

## D. Revised module sequence

### ✅ Shipped
| Module | Status |
|---|---|
| **1 — Applicability Gate** | Live, 261/261 tests. Fix list at §B |
| **4 — Compliance Calendar** | Live. Fix list at §B |

### Tier 1 — Next (independent, fully grounded, high value)

**Step 1 · Clear the §B fix list** — correctness issues in live output should not sit behind new features. Est. small-to-medium; M1-1 (location) is the largest piece.

**Step 2 · Module 2 — Safe Harbour Screening** *(was 4a)*
- **Grounding:** CD 142 Art 8.2 + Commentary Annex A Ch.1–3
- **Scope:** three mechanisms — Transitional CbCR (3 tests, 6 adjustments, JV treatment) · Simplified Calculations (permanent; NMCE concept) · Disapplication clawback (36-month FTA window)
- **Why next:** for many mid-sized UAE entities this *is* the practical answer — resolves liability without full computation. Highest value-per-effort remaining
- **Size:** Medium-large. Simplified ETR Safe Harbour alone is ~58pp of Commentary
- **Watch:** use CD 142's Transition Period/Rate, not OECD's · verify whether UAE adopted the Substance-based Tax Incentive Safe Harbour (Annex A Ch.2 §3 has no obvious CD 142 counterpart)

**Step 3 · Module 3 — ETR & Top-up Tax Calculation (simplified)**
- **Grounding:** CD 142 Art 5 (fully extracted) + Commentary Art 5.1–5.6 + Art 9.2 transitional SBIE tables
- **Scope:** ETR = Adjusted Covered Taxes ÷ Net Pillar Two Income · Top-up Tax % = 15% − ETR · SBIE (5% payroll + 5% tangible, with the full 2025–2032 transitional tables) · De Minimis election (€10m/€1m, 3-year average) · Minority-Owned CEs · Initial Phase of International Activity (≤6 jurisdictions, ≤€50m tangible assets)
- **Aggregate inputs**, not line-by-line Art 3/4 adjustments — a genuine estimate, clearly labelled
- **Size:** Medium. All figures already extracted

### Tier 2 — Substantial, independent

**Step 4 · Module 5 — Special Situations**
- CD 142 Arts 6 & 7 + Commentary + TTGREG1 §4.4 (mergers/demergers, with worked examples already extracted)
- Note overlap with M1-4 — decide whether merger/demerger threshold logic lives here or in Module 1

**Step 5 · Module 6 — R&D Tax Credit**
- **Reassessed: this is Module 1-sized, not a small add-on** (see `RD-Credit-Extract.md`)
- Two separable pieces: **(a)** eligibility + quantification (large — dual-threshold marginal rates, 5 expenditure categories, Frascati activity test, carry-forward/transfer rules, 3 claw-back mechanisms) and **(b)** the offset step into Module 3, which is genuinely small
- **Precise hook:** MD 24 Art 14.2 — for CD 142 Art 5.2.4(a), Top-up Tax under Art 5.2.3 is reduced by the credit utilised. **Ordering rule: Corporate Tax first, Top-up Tax second** (MD 24 Art 14.4)
- **Different applicability date: FYs commencing on/after 1 Jan 2026** (vs DMTT's 2025)

### Tier 3 — The heavy computation engines

**Step 6 · Module 7 — Pillar Two Income or Loss (CD 142 Art 3)**
- 11 mandatory adjustments (a)–(k) + 13 sub-articles of elections/special rules + shipping exclusion + PE and flow-through allocation
- **Commentary Art 3.2 is 160k characters (~40pp) — the single largest article-level commentary.** Needs its own dedicated extraction pass before spec-writing
- **Size: largest remaining build**

**Step 7 · Module 8 — Adjusted Covered Taxes (CD 142 Art 4)**
- Covered Taxes definition/allocation · **Art 4.4 deferred tax engine** (DTL Recapture, Aggregate DTL Category, Unclaimed Accrual, Recapture Exception Accrual, Disallowed Accrual) · Pillar Two Loss Election · post-filing adjustments
- **Commentary Art 4.4 is 115k characters.** Technically the hardest part of the regime
- Depends on nothing, but only *useful* alongside Module 7
- **Size: second-largest; highest error risk in the project**

**Step 8 · Module 9 — Transition Year Adjustments (CD 142 Art 9)**
- Art 9.1 tax attributes on transition (Commentary 44k) · Art 9.2 SBIE tables (already extracted) · Art 9.3 initial phase
- Small once Modules 7/8 exist; attaches to them

### Tier 4 — Final

**Step 9 · Module 10 — GIR Data Pack**
- Auto-populate from Modules 7/8 output
- **Use the January 2026 revised GIR numbering** (corrigenda changed cross-references)
- **The UAE receives only Section 1 minus Section 1.4** as a QDMTT-only Jurisdiction — significantly narrows what a UAE-facing pack needs
- MD 133/2026 governs who files; note the competent-authority-agreement exemption still requires notification

---

## E. Dependency map

```
Module 1 (live) ──┬─> Module 2 (Safe Harbour) ──> Module 3 (ETR/Top-up)
                  │                                      ^
                  └─> Module 4 (Compliance, live)         │
                                                          │
  Module 7 (Income) ──┐                                   │
                      ├──> feed full computation ─────────┤
  Module 8 (Covered Taxes) ─┘                             │
                                                          │
  Module 6b (R&D offset) ─────────────────────────────────┘
  Module 6a (R&D eligibility) — independent
  Module 5 (Special Situations) — independent
  Module 9 (Transition) — attaches to 7/8
  Module 10 (GIR pack) — requires 7/8
```

**Only hard dependencies:** Module 10 requires 7/8. Module 6b attaches to Module 3. Everything else can be built in any order.

---

## F. Standing maintenance watch-list
| Item | Why | Cadence |
|---|---|---|
| **TTGSHO1** | Will refine Module 2 | Check periodically |
| **Central Record** | Rolling document; UAE status could change | Periodic |
| **Further Ministerial Decisions** | CD 215 Arts 2.3/10 and several MD 24 articles contemplate more | Periodic |
| **FTA guide series** | Only TTGREG1/TTGEIE1 published; more may follow | Periodic |

**No forthcoming guide is referenced for Arts 3, 4 or 5** — the two published guides mention "GloBE Income" and "Effective Tax Rate" zero times. Modules 7/8 carry no known pending-guidance risk.

---

## G. Recommended immediate next action

**Clear the §B fix list first** — M1-1 (location) and M4-1 (penalty relief limits) are live correctness issues. Then **Module 2 (Safe Harbour Screening)** as the next new build: highest value-per-effort, now fully grounded, and genuinely resolves the practical question for a large share of users.
