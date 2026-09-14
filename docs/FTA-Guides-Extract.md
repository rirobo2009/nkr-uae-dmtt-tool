# TTGREG1 + TTGEIE1 — Cover-to-Cover Extract (Pass 4)
**Sources:** Top-up Tax Guide | Scope and Registration (TTGREG1) and Top-up Tax Guide | Excluded Entities and Investment Entities (TTGEIE1), both FTA, first versions, **August 2026** (dated 26 August 2026).
**Status:** Both read in full. Earlier passes covered only targeted sections; this pass closes the remainder.

---

## ⚠️ FINDINGS AFFECTING THE LIVE MODULE 1

### Finding A — Location rules are entirely absent from Module 1 (real gap)

TTGREG1 Chapter 6 sets out detailed rules determining **where an Entity is located**, and location is decisive: CD 142 Art 2.1 charges only Constituent Entities/JVs/JV Subsidiaries **located in the UAE**. Module 1 currently never asks about location — it implicitly assumes the user's entity is UAE-located.

The rules (TTGREG1 §6.2–6.6, from CD 142 Art 18.3):
- **Non-Flow-through Entity:** located where tax resident (place of management, creation, or similar); otherwise where created. In the UAE, this means a **Resident Person** under CT Law Art 11(3) — incorporated/established in the UAE (incl. Free Zone Person), OR foreign-incorporated but **effectively managed and controlled in the UAE**
- **Flow-through Entity:** located where created **only if** it is the UPE or required to apply an IIR; **otherwise treated as stateless**
- **Dual-located Entity** (CD 142 Art 18.3.4) — tie-breakers:
  1. If a Tax Treaty applies → located where deemed resident under the treaty
  2. If no treaty, or treaty doesn't resolve (no competent-authority agreement, or no relief given) → located where it **paid the greater amount of Covered Taxes** (excluding CFC-regime taxes)
  3. If Covered Taxes equal or zero → further tie-breaker applies
- **Unincorporated Partnership** treated as a separate Taxable Person under CT Law Art 16(8) (per Cabinet Decision No. 63 of 2025) → Resident Person → UAE-located

**Assessment:** For most users (a UAE-incorporated subsidiary of a foreign MNE), the implicit assumption is correct and Module 1's answers are sound. But a foreign-incorporated entity managed from the UAE, or a dual-resident entity, could reach a wrong conclusion. **Recommend a location confirmation step in Module 1**, at minimum a checkpoint question, rather than silent assumption. Worth discussing priority — this is a correctness gap, but affects a narrower population than the SWF gap did.

### Finding B — Excluded/Investment Entity revenue still counts toward the €750m threshold (verify Module 1)

TTGEIE1 §10 states explicitly: **the revenue of an Excluded Entity and an Investment Entity must still be taken into account when applying the consolidated revenue threshold**, to the extent consolidated in the UPE's Consolidated Financial Statements.

This is counterintuitive — an entity can be Excluded (no charge, no obligations) while its revenue still pulls the *Group* into scope. **Module 1's Step A wording should be checked** to confirm it doesn't imply Excluded Entity revenue is stripped out before the threshold test. Cheap to verify, potentially material.

### Finding C — Three practical effects, usable as Module 1 output content (TTGEIE1 §10)
For an Excluded Entity or Investment Entity located in the UAE:
1. **Not subject to the charging provision** (CD 142 Art 2.3; Commentary Art 1 ¶37.a)
2. **Excluded Entity:** its profits, losses, taxes accrued, tangible assets and payroll are **removed from all QDMTT computations** (¶37.b). **Investment Entity:** attributes *may* be included in its Constituent Entity-owners' calculations if an election is made under CD 142 Art 7.3/7.4
3. **No administrative obligations** — no FTA registration, no Top-up Tax Return, no Pillar Two Information Return. **But** the Group's GIR must still report the overall corporate structure including Excluded/Investment Entities — while *excluding* their income, taxes and assets data (CD 142 Art 15.2)

**This is directly usable as enriched conclusion text in Module 1's out-of-scope PDF output.** Currently Module 1 states the conclusion; this would tell the user what it actually means for them.

---

## TTGREG1 — Full structure and key content

| § | Topic | Covered in earlier pass? |
|---|---|---|
| 3 | Background; UAE implementation | — |
| 4.2 | MNE Group condition; Group; UPE; **SWF structures**; MNE Group meaning | ✅ (SWF fix built) |
| 4.3 | Consolidated Revenue Threshold; revenue meaning; recently created Entities; **Excluded Entity revenue**; short/long Fiscal Year; **Currency Conversion** | ✅ (pro-ration + currency built) |
| **4.4** | **Mergers and Demergers** | **NEW — this pass** |
| 5 | Entity meaning; Constituent Entity; PEs of a Main Entity; Minority-Owned CEs; JV and JV Subsidiary; Flow-through; Hybrid Entity | Partial |
| **6** | **Location of an Entity and PE; dual-located tie-breakers; change of location mid-year** | **NEW — this pass** |
| 7 | Entities not subject to Top-up Tax; Excluded Entity; Election; Investment Entity; Stateless CE | ✅ |
| 8 | Registration: who must register; **deemed-zero cases (→TTGSHO1)**; TRN; DDFE; timeline; AED 10,000 penalty | ✅ (Module 4 built) |
| 9 | EmaraTax; documentation | ✅ |

### Mergers (TTGREG1 §4.4.1, CD 142 Art 6.1.2)
**Definition:** either (1) all or substantially all Group Entities of two or more separate Groups brought under common control into a combined Group, or (2) a non-Group Entity brought under common control with another Entity/Group.

- **Two Groups merging (§4.4.1.1, Art 6.1.1(a)):** for any pre-merger Fiscal Year in the 4-year lookback, the threshold is **deemed met** if the **sum** of revenues in each Group's Consolidated Financial Statements ≥ €750m. **No elimination of inter-Group transactions** for pre-merger years, despite post-merger consolidation eliminating them.
  - *Worked Example 16:* Group P + Group Q → Group R from 1 Jan 2025. Sums: 2021 = 820m, 2022 = 600m, 2023 = 600m, 2024 = 800m. Two of four years exceed €750m (2021, 2024) ⇒ **in scope for FY2025**.
- **Entity merged/acquired (§4.4.1.2, Art 6.1.1(b)):** where Acquirer or Target had no Consolidated Financial Statements in a lookback year because it wasn't in a Group, sum the revenue in each one's Financial Statements or Consolidated Financial Statements.

### Demergers (TTGREG1 §4.4.2, CD 142 Art 6.1.3)
**Definition:** Group Entities of a single Group separated into two or more Groups no longer consolidated by the same UPE.
- A disposal of a **single** Constituent Entity is **not** a demerger (it becomes standalone, not a Group) — **unless** it has a PE in another Jurisdiction, in which case entity + PE constitute a Group and a demerger occurs
- Disposal to an existing MNE Group = the Entities *join* that Group (may be a **merger** for the acquirer, §4.4.1.2), not a demerger
- **Threshold rule for each demerged Group (Art 6.1.3):**
  - **1st tested Fiscal Year ending after demerger:** threshold met if that Group has annual revenue ≥ €750m **in that year** (no lookback)
  - **2nd–4th tested Fiscal Years:** met if ≥ €750m in **at least two** of the Fiscal Years following the demerger
  - Applies separately to each demerged Group, and **overrides** the ordinary 4-year lookback

---

## TTGEIE1 — Full structure and key content

| § | Topic | Covered earlier? |
|---|---|---|
| 3 | Excluded Entities / Investment Entities overview | ✅ |
| 4 | **Primary Excluded Entities:** International Organisation · Non-profit Organisation · Pension Fund + Pension Services Entity · Investment Fund that is a UPE · REIV that is a UPE | ✅ |
| **5** | **Secondary Excluded Entities** — 1st type (95% ownership + activities test) · 2nd type (85% ownership + income test) | **NEW — this pass** |
| 6 | PEs of primary vs secondary Excluded Entities | Partial |
| 7 | Entities held by a Non-profit Organisation — ownership · non-Excluded revenue · percentage conditions | Partial |
| 8 | Election to not be an Excluded Entity | ✅ |
| 9 | **Investment Entities** — primary (Investment Fund, REIV, **Insurance Investment Entity**) · secondary (two types) | ✅ |
| **10** | **Practical effects** | **NEW — see Finding C** |

### Secondary Excluded Entity — first type (TTGEIE1 §5.1, CD 142 Art 1.5.2(a))
Two cumulative tests:
1. **Ownership test:** ≥95% of the **value** of the Entity owned, directly or through a chain of Excluded Entities, by one or more **primary** Excluded Entities — **excluding Pension Services Entities**. Entities owned by a Pension Services Entity therefore fail this test.
2. **Activities test:** operates exclusively/almost exclusively to hold assets or invest funds for the Excluded Entity's benefit, and/or only carries out ancillary activities.

**"Value of the Entity" mechanics (§5.1.1.1):** measured by total value of **Ownership Interests** issued. Note a definitional divergence flagged by the guide: under the QDMTT Legislation, an Ownership Interest is any equity interest carrying rights to **profits, capital OR reserves** — broader than the Corporate Tax Law's "ownership interest," which requires rights to **both** profits and liquidation proceeds. Which specific right the holder has is irrelevant to the percentage calculation.

### Secondary Excluded Entity — second type (§5.2, Art 1.5.2(b))
Ownership test (≥85% of value held by primary Excluded Entities) + income test (substantially all income is Excluded Dividends or Excluded Equity Gain or Loss).

---

## Confirmed consistent with what's already built
- Module 1's Excluded Entity tile tests, Five-Year Election scope, Governmental Entity treatment (TTGEIE1 explicitly does **not** define Governmental Entity — Art 18 remains the only source), Investment Entity three-part test
- Module 4's registration/deregistration deadlines, DDFE mechanics, TRN structure, AED 10,000 penalty
- Pro-ration formula and currency-conversion hierarchy

## Open items from this pass
1. **Location step for Module 1** (Finding A) — decide priority
2. **Verify Module 1 Step A wording** on Excluded Entity revenue (Finding B)
3. **Consider adding TTGEIE1 §10 "practical effects"** to Module 1's out-of-scope output (Finding C)
4. **Mergers/Demergers** (TTGREG1 §4.4) belongs in the future Special Situations module, and also potentially as a Module 1 sub-branch, since it changes the *threshold test itself* rather than being a downstream computation concern
