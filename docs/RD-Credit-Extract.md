# R&D Tax Credit — Complete Extract (Pass 3)
**Sources:** CD 215 of 2025 (issued 31 Dec 2025, effective 1 Jan 2026) + MD 24 of 2026 (issued/effective 18 Mar 2026). Both read in full.
**Applies to:** Tax Periods or Fiscal Years commencing **on or after 1 January 2026** (CD 215 Art 13; MD 24 Art 17).

---

## ⚠️ ASSESSMENT CORRECTION

I previously told Rohit this was "small and self-contained — essentially one eligibility check plus one offset step," and recommended it as the safest next build. **Having now read both documents in full, that was wrong.** This is a substantial regime in its own right — roughly comparable in complexity to Module 1, not a small add-on.

**Why it's bigger than assessed:**
- Multi-tier rate table with **dual thresholds** (expenditure AND staff count) that interact
- Five categories of Qualifying R&D Expenditure, each with its own detailed definitional article
- A five-condition activity test plus an OECD Frascati Manual reference
- Separate, differing utilisation regimes for Tax Groups (Art 13) vs Domestic Groups (Art 14)
- Ordering rules, carry-forward restrictions with ownership-continuity tests, transfer rules
- Three separate anti-abuse/claw-back mechanisms

**Practical consequence:** the "R&D Credit offset" originally scoped in the roadmap as a small step attached to Module 4 (ETR/Top-up computation) is really **two things**: (a) a small offset step in the computation module, and (b) a potentially standalone eligibility/quantification module. These should be planned separately.

---

## 1. Rate table (MD 24 Art 2.1) — dual-threshold, marginal application

| Qualifying R&D Expenditure band (AED) | Min. average R&D Staff | Credit rate |
|---|---|---|
| First 1,000,000 | At least 2 | **15%** |
| Portion > 1m and ≤ 2m | At least 6 | **35%** |
| Portion > 2m and ≤ 5m | At least 14 | **50%** |

**Critical mechanics:**
- Rate applies **marginally to the portion within each band**, not a single rate to the whole (MD 24 Art 2.1 final sentence)
- **Both** thresholds must be met for a band's rate (MD 24 Art 2.7). If staff count falls short, the rate is **adjusted downward to the highest rate for which both thresholds are satisfied**
- **Non-refundable** (MD 24 Art 2.2) — despite CD 215 Art 2.2 contemplating possible refundability, MD 24 settles it as non-refundable
- Implied cap: the table stops at AED 5 million of Qualifying R&D Expenditure
- Average R&D Staff = sum of monthly staff counts ÷ number of months R&D activities were undertaken (MD 24 Art 2.4)

---

## 2. Eligibility — Qualifying Entity (CD 215 Art 1, Art 4)

**Qualifying Entity:** a juridical person (incl. Free Zone Person) established in the State, subject to Corporate Tax **and/or Top-up Tax**, carrying on Qualifying R&D Activities; OR a foreign juridical person carrying on such activities through a UAE PE and subject to CT/Top-up Tax on attributable income.

**Excluded (CD 215 Art 4):** entities subject to neither CT nor Top-up Tax; entities that elected Art 21 CT Law (small business relief); others per Ministerial decision.

**Additional condition for Qualifying Free Zone Persons (CD 215 Art 3.2):** must either be subject to CT at 9% on Taxable Income derived from the R&D activities, **or** be subject to Top-up Tax for the Fiscal Year.

---

## 3. Conditions to claim (CD 215 Art 3.1) — six cumulative conditions
(a) Meets minimum R&D Staff count · (b) **Obtains Council pre-approval** (Emirates Research and Development Council) and meets ongoing compliance · (c) Bears the financial burden · (d) Beneficially entitled to a share of returns from exploiting results · (e) Project has a specified knowledge-advancement objective · (f) Complies with all implementing decisions

---

## 4. Qualifying R&D Activity test (MD 24 Art 3) — five cumulative conditions
(a) **Novel** · (b) **Creative** · (c) **Uncertain** · (d) **Systematic** · (e) **Transferable/reproducible**

Assessed with regard to the **OECD Frascati Manual** (MD 24 Art 3.2).
- Only activities **conducted within the State** qualify (Art 3.3)
- **Excludes** social sciences, humanities and the arts (Art 3.4)

---

## 5. Qualifying R&D Expenditure (CD 215 Art 5; MD 24 Arts 8–11)

**Five categories:** (a) Staff costs · (b) Consumable costs · (c) Subcontracting fees · (d) Arm's length share of Cost Contribution Arrangement contributions · (e) others per Ministerial decision · (f) capitalised versions of (a)–(e) for internally generated intangibles

**Threshold: at least AED 500,000 per R&D Project per Tax Period/Fiscal Year** (CD 215 Art 5.3(b)) — excluding the staff cost uplift.

**Other conditions (CD 215 Art 5.3):** wholly and exclusively for R&D (apportion if mixed) · must be Deductible Expenditure (except capitalised intangibles) · not Grant-funded · **not subject to any other incentive, credit, exemption or relief**

### Staff Costs (MD 24 Art 8)
- **30% uplift** applied to Staff Costs for overheads (Art 8.3)
- Staff must be **located in the State** and under the entity's supervision/direction/control
- Includes: salaries, wages, allowances, medical insurance, pension contributions, end-of-service gratuity, bonuses, benefits in kind, training
- **Excludes: employee stock option plans** (Art 8.5)
- Part-time on R&D → apportion (Art 8.7)
- **Intra-Tax-Group recharges excluded** (Art 8.11)

### Consumable Costs (MD 24 Art 9)
Materials directly used and no longer usable in original form. Includes water, fuel, power; non-capital licence fees; clinical trial participant payments. Excluded if disposed of for consideration in the ordinary course. Intra-Tax-Group acquisitions excluded.

### Subcontracting Fees (MD 24 Art 10)
Six conditions: subcontractor based in State · activities in State · not itself subcontracted to the Qualifying Entity · not further subcontracted · not attributable to a Foreign PE · Related-Party subcontractors must maintain audited financial statements. Intra-Tax-Group subcontracting excluded.

### Cost Contribution Arrangements (MD 24 Art 11)
Arm's length contribution corresponding to expected benefit share; only the in-State portion qualifies.

---

## 6. Utilisation ordering — **the part that matters most for the DMTT tool**

**CD 215 Art 6:** credit must be utilised against CT and/or Top-up Tax liability for the relevant period **before** carry-forward or transfer. Earlier-year credits applied before later-year credits. Unutilised amounts may be carried forward.

### Domestic Groups (MD 24 Art 14) — the Top-up Tax pathway
1. Credit arising to a Qualifying Entity that is a Constituent Entity / JV / JV Subsidiary of a Domestic Group is utilised **against the Top-up Tax liability of that Domestic Group** (Art 14.1)
2. **Art 14.2 — the precise hook into CD 142:** for purposes of CD 142 **Art 5.2.4(a)**, the Top-up Tax determined under **Art 5.2.3** is **reduced by** the R&D Tax Credit utilised
3. **Critical ordering rule (Art 14.4):** the credit must be used against **Corporate Tax** liability (of the entity, or its Tax Group, or a transferee under Art 6) **BEFORE** being used against Top-up Tax
4. Where the Qualifying Entity is not subject to CT and the Domestic Group has appointed a **DDFE**, the DDFE handles pre-approval and claims via the Top-up Tax Return (Art 14.8)
5. Joint and several liability across Constituent Entities/JVs/JV Subsidiaries for clawed-back amounts (Art 14.6)

### Tax Groups (MD 24 Art 13) — CT pathway, feeds the above
Credit used against the Tax Group's CT liability first; pre-Grouping credits used before Tax Group credits; must exhaust CT before Top-up Tax (Art 13.3).

---

## 7. Carry-forward restrictions (MD 24 Art 5)
Carry-forward permitted only if **either**:
(a) the same Person(s) continuously owned ≥50% ownership interest from the start of the year the credit arose to the end of the year it's utilised; **or**
(b) on >50% ownership change, the entity continues the same or similar Business (by reference to CT Law Art 39(2))

**Does not apply** to entities listed on a Recognised Stock Exchange (Art 5.2).

---

## 8. Transfer of credits (MD 24 Art 6)
- Transferor and transferee must be **≥75% commonly owned** (or one owns the other), maintained from start of the year the credit arose to end of the year utilised
- Transferee must use it in the relevant period; capped at transferee's remaining CT/Top-up Tax liability after using its own credits
- **Transferred credits cannot be further carried forward or transferred**

---

## 9. Claw-back and anti-abuse — three separate mechanisms
1. **CD 215 Art 8** — conditions not continuously met → repay utilised amounts; unutilised portion forfeited; **no other credits, reliefs, Tax Losses or Pillar Two Losses may offset the claw-back liability**
2. **MD 24 Art 15** — artificial separation of business → treated as CT Law Art 50 GAAR arrangement
3. **MD 24 Art 16** — general anti-abuse; plus **a 5-year rule**: if within 5 years of the last claim the entity ceases to be a Taxable Person, becomes a QFZP, applies small business relief, liquidates, or redomiciles outside the State → full claw-back (unless a qualifying Art 7 business restructuring)

**Business restructuring (MD 24 Art 7):** credits can follow a transferred business if the transferee continues it (incl. the R&D activities) for **≥2 years** and CT Law Art 27(2) conditions (excl. paras (c),(d)) are met. Discontinuation within 2 years → claw-back.

---

## 10. Claims and records
- Claim submitted **as part of the Tax Return or Top-up Tax Return** for the relevant period (CD 215 Art 9.2)
- Late claims not considered unless the Authority accepts in exceptional circumstances (Art 9.3)
- Required documents: Council pre-approval proof · signed senior management declaration · expenditure breakdown · **audited financial statements** · others per Ministerial decision
- **Records retained 7 years** (MD 24 Art 12)

---

## 11. Known gap
CD 215 Art 2.3 and Art 10, and several MD 24 articles, contemplate **further Ministerial decisions** (e.g. on additional expenditure categories, special cases). None are in the Drive folder. Nothing observed suggests a *pending* decision blocks a build — MD 24 already supplies the operative rates, definitions and mechanics — but this should be re-checked before any build, and re-verified periodically, as with TTGSHO1.
