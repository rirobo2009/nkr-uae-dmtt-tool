# UAE DMTT Tool — Module 2: Safe Harbour Screening — Functional Spec v1
**Legal basis:** CD 142/2024 Annexure **Article 8.2** (8.2.1 Transitional CbCR Safe Harbour · 8.2.2 Simplified Calculations Safe Harbour · 8.2.3 Disapplication) · 2026 OECD Consolidated Commentary **Annex A** (adopted by MD 96/2026)
**Status:** Draft for review — no build started

---

## 0. Why this module matters

For many in-scope UAE entities, a safe harbour **is** the answer — Top-up Tax deemed zero, no full Article 3/4/5 computation required. This module sits between Module 1 (Applicability) and any future computation module, and for a large share of users it ends the enquiry.

**Positioning:** reached from Module 1's IN SCOPE conclusion, alongside the existing link to Module 4.

---

## ⚠️ 1. Critical divergences — use CD 142, not the OECD Commentary

The Commentary is adopted interpretive material, but where CD 142 states its own figures or conditions, **CD 142 governs**. Three places where a build from the Commentary alone would be wrong:

### 1.1 Transition Period and Transition Rate
| | **CD 142 (USE THIS)** | OECD Commentary (generic) |
|---|---|---|
| Transition Period | FYs beginning **before 1 Jan 2027** AND ending **before 1 July 2028** | FYs beginning on/before 31/12/2027, not ending after 30/6/2029 |
| Transition Rate | **16%** (FY begins 2025)<br>**17%** (FY begins 2026) | 15% (2023–24) · 16% (2025) · 17% (2026–27) |

The UAE omits the 15% tier (no 2023/24 start) and runs a shorter window.

### 1.2 Exclusions — CD 142 Art 8.2.1.4 differs materially from Commentary ¶10
CD 142's list is **UAE-specific** and not a copy of the OECD's:

| CD 142 Art 8.2.1.4 | OECD Annex A ¶10 |
|---|---|
| (a) UAE is UPE Jurisdiction and UPE is a Flow-through Entity, unless all Ownership Interests held by Qualified Persons | *(not in OECD list — OECD handles via Tax Neutral UPE rules)* |
| (b) Top-up Tax arising from **Stateless Reverse Hybrid Entities** | (a) Stateless Constituent Entities |
| (c) Multi-parented MNE Groups where a single Qualified CbC Report doesn't include combined groups | (b) same |
| (d) **Once-out, always-out** — see 1.3 | (d) same |
| (e) MNE Group uses data from **different sources of Qualified Financial Statements for the same Entity or PE** | *(not in OECD list)* |
| *(not in CD 142)* | (c) Jurisdictions with CEs electing Eligible Distribution Tax Systems under Art 7.3 — **N/A: CD 142 has no Eligible Distribution Tax Systems provision** (see CD142 extract, Art 7 numbering note) |

### 1.3 De minimis test differs between 8.2.1 and 8.2.2
- **8.2.1 (Transitional):** **current year only** — Total Revenue and Profit (Loss) before Income Tax as reported in the Qualified CbC Report. Commentary ¶17 confirms this deliberately avoids multi-year computation.
- **8.2.2 (Simplified Calculations):** **three-year average** — Average Pillar Two Revenue / Average Pillar Two Income per Art 5.5.

Getting these the wrong way round would produce wrong answers in both directions.

---

## 2. Module structure — three sequential gates

### Gate 1 — Is the Transition Period still open? (CD 142 Art 8.2.1, Transition Period definition)
**Input already available:** Fiscal Year start and end dates (Module 4 collects both; this module should collect them too, or accept hand-off).

Test: FY begins **before 1 Jan 2027** AND ends **before 1 July 2028**.
- **Yes** → Transitional CbCR Safe Harbour available → Gate 2
- **No** → skip to Gate 3 (Simplified Calculations Safe Harbour — permanent, no time limit)

Display the computed Transition Rate for the user's FY (16% or 17%) once determined.

### Gate 2 — Transitional CbCR Safe Harbour (Art 8.2.1)

**Step 2a — Disqualification screen (Art 8.2.1.4).** Ask these **before** any test, since any one is fatal. Multi-select tile grid, same pattern as Module 1's Step E:
1. UAE is the UPE Jurisdiction **and** the UPE is a Flow-through Entity — *unless all Ownership Interests are held by Qualified Persons* (sub-question if selected)
2. The Top-up Tax in question arises from a **Stateless Reverse Hybrid Entity**
3. **Multi-parented MNE Group** where a single Qualified CbC Report doesn't include the combined groups' information
4. **Once-out, always-out:** the UAE Constituent Entities did **not** benefit from Art 8.2.1.1 (or an equivalent foreign provision) in a previous Fiscal Year in which the MNE Group was subject to Pillar Two — *unless the MNE Group had no UAE Constituent Entities in the previous year* (sub-question if selected)
5. The MNE Group uses data from **different sources of Qualified Financial Statements** for the same Entity or Permanent Establishment

Any selected (after sub-question resolution) → **not eligible** for the Transitional Safe Harbour → route to Gate 3.

**Judgment flag on #4:** this is a one-way door. A jurisdiction that fails to claim the safe harbour in an eligible year cannot claim it later. Worth an explicit warning callout, not just a question — it is the single most consequential planning point in this module.

**Step 2b — Qualified Financial Statements check.** The safe harbour requires a **Qualified CbC Report**, i.e. one prepared using Qualified Financial Statements. Ask:
- Are the figures drawn from (a) the accounts used to prepare the UPE's Consolidated Financial Statements (the reporting package), (b) separate financial statements of each Constituent Entity prepared under an Acceptable or Authorised Financial Accounting Standard with reliable information, or (c) for entities unconsolidated on size/materiality grounds only, the same accounts used for the CbC Report?
- **PPA trap (Commentary ¶9.2–9.5):** if purchase price accounting adjustments have been pushed down into the acquired entity's reporting package or separate financial statements, those statements are **not** Qualified Financial Statements **unless**:
  - **Consistent reporting condition:** the MNE Group has not submitted a CbC Report for a FY beginning after 31 Dec 2022 based on that entity's statements *without* the PPA adjustments (except where required by law/regulation to change), **and**
  - **Goodwill impairment adjustment:** any reduction in income from goodwill impairment relating to transactions entered into after **30 November 2021** is added back to PBT — for the routine profits test, and for the simplified ETR test *only if* the accounts do not also show a reversal of a DTL or recognition/increase of a DTA in respect of that impairment
- **Art 8.2.1.8:** where the MNE Group is **not required** to file a Qualified CbC Report, the safe harbour may still apply provided the Top-up Tax Return includes the Qualified Financial Statement data that *would have been* reported as Total Revenue and PBT.

**Step 2c — Run the three tests (Art 8.2.1.1).** Any one passing ⇒ UAE Top-up Tax deemed zero. Present as three parallel cards, each independently testable; user may attempt whichever they have data for.

**(a) De Minimis Test** — current year only
- Total Revenue in the UAE **< EUR 10 million**, AND
- Profit (Loss) before Income Tax in the UAE **< EUR 1 million** (condition met if a loss)
- **Held-for-sale exclusion (Art 8.2.1.6):** cannot rely on this test where the UPE controls UAE entities not consolidated line-by-line because held for sale, and the sum of their revenue plus UAE Total Revenue **≥ EUR 10 million**

**(b) Simplified ETR Test**
- Simplified ETR = **Simplified Covered Taxes ÷ Profit (Loss) before Income Tax** (per Qualified CbC Report)
- *Simplified Covered Taxes* = income tax expense per Qualified Financial Statements, **less** taxes that are not Covered Taxes and **less** uncertain tax positions
- Pass if Simplified ETR **≥ Transition Rate** (16% or 17% per Gate 1)
- **Important consequence to display (Commentary ¶20):** if the test fails, the computed ETR is **disregarded** for GloBE purposes — it cannot be reused as the Art 5.2.1 ETR. A 10% Simplified ETR does not become a 10% ETR for Top-up Tax Percentage purposes; full computation (or the Permanent Safe Harbour) is required.

**(c) Routine Profits Test**
- Pass if UAE **Profit (Loss) before Income Tax ≤ SBIE** computed under CD 142 Arts 5.3 **and 9.2** (i.e. using the transitional SBIE rates — 9.6%/7.6% for FY2025, 9.4%/7.4% for FY2026 etc., per the CD142 extract table)
- **Automatic pass (Commentary ¶22):** a jurisdiction with a **loss or zero profits** always meets this test — no SBIE computation needed. Tool should short-circuit here.
- **SBIE exclusions (Art 8.2.1.7):** exclude payroll and tangible assets of (a) entities not reported in the UAE in the CbC Report, (b) Excluded Entities, (c) Constituent Entities located in different jurisdictions under CD 142 vs the CbC Report

**Art 8.2.1.2 — JV treatment:** JVs and JV Subsidiaries are tested as if a **separate MNE Group**, using Qualified Financial Statements figures. Per Commentary ¶35, this means **separate parallel computations** — e.g. two CEs and a JV in the UAE require two distinct safe-harbour computations, including two separate de minimis tests.

**Art 8.2.1.5:** Art 8.2.1.1 applies to UAE Constituent Entities **irrespective of whether an Investment Entity is reported in the UAE** in the CbC Report — notwithstanding Art 2.3.

### Gate 3 — Simplified Calculations Safe Harbour (Art 8.2.2) — permanent

Available regardless of Transition Period. **Note the scope limit:** deems zero the Top-up Tax **other than Additional Current Top-up Tax**.

Three tests (any one passing ⇒ deemed zero), per Art 8.2.2.3:
- **(a) Routine Profits Test:** Pillar Two Income in UAE under the **Simplified Income Calculation** ≤ SBIE computed under Art 5.3
- **(b) De Minimis Test:** Average Pillar Two Revenue under **Simplified Revenue Calculation** < EUR 10m, AND Average Pillar Two Income under **Simplified Income Calculation** < EUR 1m or a loss — averages per Art 5.5 (three-year)
- **(c) Effective Tax Rate Test:** ETR under Simplified Income + Simplified Tax Calculations **≥ 15%** (per Art 5.1.1) — note **15%, not the Transition Rate**

**The Simplified Calculations are available only for Non-material Constituent Entities** (Art 8.2.2.2, 8.2.2.4–8.2.2.6). Each is an **Annual Election**:
- Simplified Revenue Calculation: NMCE's Pillar Two Revenue = Total Revenue per Relevant CbC Regulations
- Simplified Income Calculation: NMCE's Pillar Two Income or Loss = Total Revenue per Relevant CbC Regulations *(note: CD 142 text says "Total Revenue" here — appears deliberate, mirrors the OECD's NMCE simplification; flag for confirmation before build)*
- Simplified Tax Calculation: NMCE's Adjusted Covered Taxes = Income Tax Accrued (current year) per Relevant CbC Regulations

**Non-material Constituent Entity definition (Art 8.2.2.7(a))** — all must hold:
- Not consolidated line-by-line in the UPE's Consolidated Financial Statements **solely** on size or materiality grounds, and is a Constituent Entity under Art 1.2.2
- Those Consolidated Financial Statements are those described in paragraph (a) or (c) of the Art 18.1 definition
- Those Consolidated Financial Statements are **externally audited**
- If the Entity's Total Revenue **exceeds EUR 50 million**, its CbC Report accounts are prepared under an Acceptable or Authorised Financial Accounting Standard

**Relevant CbC Regulations (Art 8.2.2.7(b)):** the CbC regulations of the UPE Jurisdiction, or the surrogate parent entity's jurisdiction if no CbC Report is filed in the UPE Jurisdiction. If neither has CbC legislation, the **OECD BEPS Action 13 Final Report** and **OECD Guidance on the Implementation of Country-by-Country Reporting** apply.

**Key structural point (Art 8.2.2.2):** simplified figures for NMCEs are **combined with full Pillar Two computations** for Constituent Entities that are *not* NMCEs, to determine whether the UAE meets any test. So this safe harbour does **not** avoid computation entirely where the group has material UAE entities — it only simplifies the non-material ones. **This should be stated plainly**, as users may expect it to be a full escape hatch.

### Gate 4 — Disapplication warning (Art 8.2.3) — always displayed

Not a test; a standing caution shown whenever a safe harbour is claimed. All three conditions must be met for the FTA to disapply:
1. Top-up Tax could have been charged if the Art 5 ETR for the UAE was below 15%; **and**
2. The FTA notifies the Liable Constituent Entity/Entities **within 36 months** of the Top-up Tax Return filing, of specific facts and circumstances that may have materially affected eligibility, and invites clarification **within six months**; **and**
3. The entity **fails to demonstrate** within that six-month response period that those facts did not materially affect eligibility

Art 8.2.3.2: the FTA may notify **some** rather than all Liable Constituent Entities where notifying all is difficult.

**Practical framing:** claiming a safe harbour is not final for 36 months. Record-keeping matters. This deserves the same visual weight as Module 4's Joint & Several Liability callout.

---

## 3. Outputs

| Outcome | Conclusion |
|---|---|
| Any Art 8.2.1 test passes | **UAE Top-up Tax deemed zero for the Fiscal Year** under the Transitional CbCR Safe Harbour (Art 8.2.1.1) |
| Any Art 8.2.2 test passes | **UAE Top-up Tax (other than Additional Current Top-up Tax) deemed zero** under the Simplified Calculations Safe Harbour (Art 8.2.2.1) |
| Neither | **No safe harbour available** — full Article 3/4/5 computation required. Route forward to the computation module when built; for now, state this plainly |
| Disqualified at 2a | State which disqualification applied and route to Gate 3 |

PDF output, lead capture (`source_tool` distinct value), navigation, and brand treatment all follow the established Module 1/4 pattern.

---

## 4. Open items for review

1. **Art 8.2.2.5 — RESOLVED, not a drafting error.** CD 142 states the Simplified Income Calculation sets an NMCE's Pillar Two Income or Loss equal to its Total Revenue. Verified against Commentary Annex A Ch.2 §2 (Box 2.2 ¶3(a)), which states independently: *"under the Simplified Income Calculation, the GloBE Income of a Non-Material Constituent Entity is equal to the Total Revenue as determined in accordance with the Relevant CbC Regulations."* CD 142 mirrors the OECD design exactly. **Rationale:** it is deliberately conservative — proxying income by gross revenue (no expense deduction) overstates income, making the tests harder to pass, which is the correct direction for a simplification available without full computation. Build as written.

   **Two further NMCE conditions found in the Commentary and worth adding to the tool's tests (Annex A Ch.2 ¶21–23):**
   - The NMCE definition is **not met** where the MNE Group's Consolidated Financial Statements fall under paragraph **(b)** of the Art 18.1 definition (a Main Entity with its foreign PEs) — so **an MNE Group composed exclusively of a Main Entity and its Permanent Establishments has no NMCEs and cannot use these calculations at all**
   - Nor where they fall under paragraph **(d)** (the deeming provision where no consolidated accounts were prepared) — the definition requires actual consolidated, externally audited statements
   - The external audit condition requires the auditor's opinion to contain **no objections/qualifications regarding the exclusion of the Entity from the consolidation perimeter**
2. **Substance-based Tax Incentive Safe Harbour** — present in Commentary Annex A Ch.2 §3 with no CD 142 counterpart. Recommend **excluding** from this build; flag for later verification.
3. **QDMTT Safe Harbour** (Commentary Annex A Ch.3) — this is a safe harbour *other jurisdictions* apply in respect of the UAE's QDMTT, not one a UAE entity claims. **Out of scope for this module**, but worth a brief informational note given the UAE's confirmed qualified status in the Central Record.
4. **Data burden — CONFIRMED APPROACH.** This module needs CbC Report figures and Qualified Financial Statement data most users won't have to hand in a browser session. Build as a **structured eligibility assessment with input fields**, not a quick questionnaire, and state explicitly up front what data is required so users can gather it before starting. A "what you'll need" panel at the entry point is recommended.
5. Confirm the Gate 1–4 structure before I draft the Claude Code handoff brief.
