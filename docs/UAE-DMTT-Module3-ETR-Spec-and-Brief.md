# UAE DMTT Tool — Module 3: ETR & Top-up Tax Calculation — Spec + Handoff Brief

**Single self-contained document.** Everything needed to build Module 3 in one pass.

**Legal basis:** CD 142/2024 Annexure **Article 5** (5.1–5.6) · **Article 9.2** (transitional SBIE rates) · **Article 9.3** (Initial Phase) · **Article 10.6** (currency) · 2026 OECD Consolidated Commentary Art 5.1–5.6, adopted by MD 96/2026.

**All figures below are verified verbatim against the source in this session.** If you hit a provision not covered here, stop and ask — do not infer from general Pillar Two knowledge.

---

## 1. What this module is, and what it is not

This produces **the number** — the estimated UAE Top-up Tax liability. It is deliberately a **simplified estimate**, using aggregate inputs rather than the full line-by-line Article 3 (income adjustments) and Article 4 (covered taxes) computations, which are separate future modules.

**Label it as an estimate throughout.** The user supplies aggregate Pillar Two Income and Adjusted Covered Taxes figures; the tool does not derive them. Every output must be clear that a full Article 3/4 computation is required for a filing position.

**Positioning:** reached from Module 2's "no safe harbour available" conclusion, and linked from Module 1's IN SCOPE conclusion alongside the existing Safe Harbour and Compliance Calendar links.

---

## 2. ⚠️ Three things a general Pillar Two implementation would get wrong here

**2.1 There is NO QDMTT deduction in CD 142's Art 5.2.3.** The OECD Model Rules' Top-up Tax formula subtracts QDMTT. CD 142's does not — verbatim:

> Top-up Tax = (Top-up Tax Percentage × Excess Profit) + Additional Current Top-up Tax

That is the complete formula. The UAE *is* the QDMTT jurisdiction, so there is nothing to deduct. Do not add a QDMTT term. (An earlier project scope map wrongly listed "− QDMTT"; it is wrong.)

**2.2 The SBIE rate is NOT 5% for any year the tool will realistically handle.** Art 5.3.3/5.3.4 state 5%, but **Art 9.2 overrides this with transitional rates through FY2032**. Use the table in §5.3. Using 5% would materially understate the carve-out and overstate the tax.

**2.3 ETR is rounded to four decimal places** (Commentary Art 5.1.1 ¶3: "expressed as a percentage rounded to the fourth decimal place (e.g. 14.12346% = 14.1235%)"). Not two. This matters near the 15% boundary.

---

## 3. Inputs required

Open with a **"what you'll need"** panel, as Module 2 does. Required:

| Input | Notes |
|---|---|
| Fiscal Year start date | Drives the Art 9.2 transitional SBIE rate and the Art 10.6 currency rule |
| Fiscal Year end date | Auto-filled from start (+1 year −1 day) via `assets/dmtt-dates.js` — reuse, do not reimplement |
| Aggregate Pillar Two Income of all UAE Constituent Entities | Art 5.1.2(a) |
| Aggregate Pillar Two Losses of all UAE Constituent Entities | Art 5.1.2(b) |
| Aggregate Adjusted Covered Taxes of UAE Constituent Entities | Art 5.1.1 |
| Eligible Payroll Costs (UAE) | For SBIE payroll carve-out |
| Carrying value of Eligible Tangible Assets (UAE) | For SBIE tangible carve-out |
| Additional Current Top-up Tax, if any | Art 5.2.3(c) |
| Pillar Two Revenue (current + 2 preceding FYs) | Only if testing De Minimis |
| Pillar Two Income/Loss (current + 2 preceding FYs) | Only if testing De Minimis |

**Currency (Art 10.6):** all EUR thresholds require conversion using the average of daily reference rates for December prior to the FY start — ECB first, Central Bank of the UAE second, another FTA-acceptable source third. Surface the same way Module 2 does.

---

## 4. Computation sequence

### Step 1 — Net Pillar Two Income (Art 5.1.2)
```
Net Pillar Two Income = Pillar Two Income of all CEs − Pillar Two Losses of all CEs
```
**Positive amount only.** If the result is zero or negative, there is a Net Pillar Two Loss.

**Art 5.1.3 — exclude Investment Entities** from both this and the ETR computation. Ask whether any UAE Constituent Entities are Investment Entities and, if so, instruct the user to exclude their figures. (Their separate treatment under Art 7.3/7.4 is out of scope for this module.)

**Art 5.1.1 — Stateless Constituent Entities** subject to the Decision are treated as if a single Constituent Entity located in the UAE.

### Step 2 — Short-circuit on a loss
Per Commentary Art 5.1.1 ¶3: **no ETR is computed for a jurisdiction with a Net Pillar Two Loss.** If Step 1 yields no positive Net Pillar Two Income:
- No ETR, no Top-up Tax Percentage, no Excess Profit
- **But Additional Current Top-up Tax may still arise** (Art 5.2.3(c) via Art 4.1.5 or 5.4.1), and Art 5.2.5 provides a special rule for that case
- Output: "No Top-up Tax arises from current-year profit. Additional Current Top-up Tax may still apply — this requires a full Article 4 computation."

### Step 3 — Effective Tax Rate (Art 5.1.1)
```
ETR = Σ Adjusted Covered Taxes of UAE CEs ÷ Net Pillar Two Income
```
Round to **four decimal places**. Display as a percentage.

### Step 4 — Top-up Tax Percentage (Art 5.2.1)
```
Top-up Tax Percentage = Minimum Rate (15%) − ETR
```
**Positive difference only.** If ETR ≥ 15%, there is no Top-up Tax Percentage and no Constituent Entity is low-taxed — short-circuit to a nil result (subject to Additional Current Top-up Tax).

**Edge case — negative Adjusted Covered Taxes (Commentary ¶15.1–15.5):** where the UAE has Pillar Two Income but *negative* Adjusted Covered Taxes, the Top-up Tax Percentage **exceeds** 15% (e.g. ETR −4% → 19%). The Commentary then mandates the **Negative Tax Expense administrative procedure**: exclude the Negative Tax Expense from aggregate Adjusted Covered Taxes and establish an **Excess Negative Tax Expense Carry-forward**, used in all subsequent jurisdictional ETR computations.

**Do not implement the carry-forward mechanics.** Detect the condition (Adjusted Covered Taxes < 0 while Net Pillar Two Income > 0), display a clear flag explaining that this mandatory procedure applies, cite Commentary Art 5.2.1 ¶15.2–15.5, and recommend professional review. Computing it needs multi-year state this tool does not hold.

### Step 5 — Substance-based Income Exclusion (Art 5.3, Art 9.2)
```
SBIE = payroll carve-out + tangible asset carve-out
```
- **Payroll carve-out** = rate × Eligible Payroll Costs of Eligible Employees performing activities for the MNE Group in the UAE
- **Tangible asset carve-out** = rate × carrying value of Eligible Tangible Assets located in the UAE

**Art 9.2 transitional rates — use these, keyed to the calendar year the FY BEGINS in:**

| FY begins in | Payroll (Art 5.3.3) | Tangible (Art 5.3.4) |
|---|---|---|
| 2025 | **9.6%** | **7.6%** |
| 2026 | **9.4%** | **7.4%** |
| 2027 | **9.2%** | **7.2%** |
| 2028 | **9.0%** | **7.0%** |
| 2029 | **8.2%** | **6.6%** |
| 2030 | **7.4%** | **6.2%** |
| 2031 | **6.6%** | **5.8%** |
| 2032 | **5.8%** | **5.4%** |
| 2033 onwards | 5% | 5% |

**Exclusions to surface (Art 5.3.3/5.3.4):** payroll costs capitalised into Eligible Tangible Assets carrying value, and payroll/assets attributable to International Shipping Income excluded under Art 3.3.5, are excluded. Art 5.3.2 excludes Investment Entities from SBIE entirely.

**Art 5.3.1 — Annual Election not to apply SBIE.** Offer this as an explicit choice. If elected, Excess Profit = Net Pillar Two Income (Commentary ¶17).

**Eligible Tangible Assets (Art 5.3.4)** are: (a) property, plant and equipment in the UAE; (b) natural resources in the UAE; (c) a lessee's right-of-use of tangible assets located in the UAE; (d) licences/similar arrangements for use of immovable property in the UAE. Tooltip this.

### Step 6 — Excess Profit (Art 5.2.2)
```
Excess Profit = Net Pillar Two Income − SBIE
```
**Positive amount only.** Per Commentary ¶17: if SBIE ≥ Net Pillar Two Income, there is **no Excess Profit and no Top-up Tax** for the year (absent Additional Current Top-up Tax). Short-circuit and say so plainly — this is a common and favourable outcome for substance-heavy UAE operations.

### Step 7 — Top-up Tax (Art 5.2.3)
```
Top-up Tax = (Top-up Tax Percentage × Excess Profit) + Additional Current Top-up Tax
```
**Positive amount only. No QDMTT term** (see §2.1).

### Step 8 — De Minimis Exclusion (Art 5.5) — offer as an alternative route
**Annual Election.** If both conditions hold, Top-up Tax is **deemed zero** regardless of Steps 3–7:
- **Average Pillar Two Revenue < EUR 10 million**, AND
- **Average Pillar Two Income or Loss is a loss, or < EUR 1 million**

**Average = current + two preceding Fiscal Years** (Art 5.5.2). Where there were no Constituent Entities with Pillar Two Revenue or Losses in the first or second preceding year, **exclude that year from the average**.

Definitions (Art 5.5.3): Pillar Two Revenue is the sum of revenue of all UAE Constituent Entities **including Minority-Owned Constituent Entities**, with Article 3 adjustments. Pillar Two Income or Loss is the Net Pillar Two Income or Loss of the UAE, also including Minority-Owned Constituent Entities.

**Art 5.5.4:** the election does **not** apply to a Stateless Constituent Entity.

Present this **before** or alongside the main computation, since passing it ends the enquiry — similar to Module 2's structure.

### Step 9 — Initial Phase of International Activity (Art 9.3) — offer as an alternative route
Top-up Tax is **reduced to zero** if all hold:
- Constituent Entities in **no more than six Jurisdictions**, AND
- Sum of Net Book Values of Tangible Assets of all Constituent Entities in all Jurisdictions **other than the reference Jurisdiction** does **not exceed EUR 50 million**, AND
- **No** ownership interests of UAE Constituent Entities are held by a Parent Entity subject to a Qualified IIR in another Jurisdiction

Reference Jurisdiction (Art 9.3.3) = where the MNE Group has the highest total value of Tangible Assets in the Fiscal Year it first met the Art 1.1.1 threshold.

### Step 10 — Minority-Owned Constituent Entities (Art 5.6)
If the user indicates the UAE has Minority-Owned Constituent Entities forming a Minority-Owned Subgroup, **a separate ETR and Top-up Tax computation is required for that subgroup**, distinct from the main computation (Art 5.6.1/5.6.2; Commentary Art 5.1 ¶2).

Do not attempt to run two parallel computations in one pass. Detect the condition, explain that a separate computation is required, and offer the user the option to run the tool again for the subgroup. Flag clearly in the output.

---

## 5. Output

Show the **full working**, not just the final number — this is a professional tool and the workings are the value:

1. Net Pillar Two Income (with the income/loss components)
2. ETR (4 dp) — and whether it is at or above 15%
3. Top-up Tax Percentage
4. SBIE — payroll and tangible components separately, with the rate applied and the FY it was keyed to
5. Excess Profit
6. **Top-up Tax** — the headline figure
7. Any short-circuit reached (loss, ETR ≥ 15%, SBIE ≥ income, De Minimis, Initial Phase) stated explicitly with its citation

Plus a prominent estimate caveat, and any flags triggered (negative covered taxes, Minority-Owned Subgroup, Investment Entities present).

PDF output, lead capture (new `source_tool`, e.g. `dmtt_etr_calc`), `.tool-nav`, brand tokens and tooltip patterns all follow the established Module 1/2/4 conventions.

---

## 6. Build instructions

- **New standalone file**, e.g. `module3-etr-topup-tax.html`, served automatically at `dmtt.nkr.ae/module3-etr-topup-tax.html`.
- **Reuse `assets/dmtt-dates.js`** for the FY end auto-fill. Do not reimplement date logic.
- Link from Module 2's "no safe harbour available" conclusion, and from Module 1's IN SCOPE conclusion alongside the existing links.
- Direct-to-main commits, small logical chunks, auto-pushed.
- Input fields for figures; click tiles for elections and yes/no questions, per the established preference.

## 7. Testing — extend `test.html`

- Each short-circuit path: Net Pillar Two Loss · ETR ≥ 15% · SBIE ≥ Net Pillar Two Income · De Minimis passing · Initial Phase passing
- The full computation path end to end, with a worked example verified by hand
- **All nine Art 9.2 transitional SBIE rate rows**, keyed by FY start year, plus the 2033-onwards 5% fallback
- ETR four-decimal rounding, including a value that rounds differently at 2 dp vs 4 dp near the 15% boundary
- Negative Adjusted Covered Taxes → flag raised, no computed carry-forward
- De Minimis averaging with a missing preceding year excluded from the average
- PDF consistency for every conclusion type
- **Deliberate-break checks** on: the 15% Minimum Rate, each Art 9.2 rate pair, the EUR 10m/1m/50m thresholds, and an assertion that **no QDMTT term exists** in the Top-up Tax formula (mirroring the successful negative assertion used in Module 2)

Report real pass/fail output, not a claim.

## 8. Explicit non-goals

- Do **not** build the full Article 3 (income) or Article 4 (covered taxes) computations — those are separate future modules. This module accepts aggregate figures as input.
- Do **not** implement the Excess Negative Tax Expense Carry-forward mechanics — detect and flag only.
- Do **not** implement Investment Entity ETR computation under Art 7.4 — exclude and flag.
- Do **not** run a parallel Minority-Owned Subgroup computation — detect and flag.

## 9. One thing to flag back rather than decide

Art 5.4 (Additional Current Top-up Tax) arises from prior-year recalculations under Art 5.4.1 and from Art 4.1.5. This module accepts it as a **user-supplied input** rather than computing it. If you think that is wrong — for example if some part of Art 5.4 can reasonably be computed from inputs already collected — say so before building rather than either computing it silently or omitting it.
