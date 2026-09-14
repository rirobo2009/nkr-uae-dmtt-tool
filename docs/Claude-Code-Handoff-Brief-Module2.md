# UAE DMTT Tool — Module 2: Safe Harbour Screening — Claude Code Handoff Brief v1

Build kickoff brief. Everything agreed in planning is packaged here so the build session doesn't re-derive settled decisions.

---

## 1. What we're building

A new standalone page implementing **Safe Harbour Screening** per `docs/UAE-DMTT-Module2-SafeHarbour-Spec.md`. For many in-scope UAE entities a safe harbour ends the enquiry — Top-up Tax deemed zero, no full Article 3/4/5 computation needed.

**Legal grounding:** CD 142/2024 Annexure **Article 8.2** (8.2.1, 8.2.2, 8.2.3) + 2026 OECD Consolidated Commentary **Annex A** (adopted by MD 96/2026). All operative figures, conditions and citations are in the spec. If you hit a provision not covered there, **stop and ask** — do not infer from general Pillar Two knowledge. Same standing rule as Modules 1 and 4.

**Reference docs already in the repo** (`docs/`): `CD142-Complete-Extract.md`, `Commentary-2026-Extract.md`, `Master-Build-Roadmap.md`. Note the Art 7 numbering warning in the CD142 extract — it is relevant here (see §4 below).

## 2. File structure and navigation

- New standalone file, e.g. `module2-safe-harbour.html`, same pattern as `module4-compliance-calendar.html`. Azure serves it automatically at `dmtt.nkr.ae/module2-safe-harbour.html`.
- Link it from **Module 1's IN SCOPE conclusion**, alongside the existing Compliance Calendar link. Present both as parallel next steps — Safe Harbour Screening first, since it may end the enquiry.
- Reuse the existing `.tool-nav` pattern (Home / Start over), brand tokens, tooltip pattern, PDF generation, and lead capture (new `source_tool` value, e.g. `dmtt_safe_harbour`).

## 3. Structure — four gates, sequential

Confirmed design: try the more generous transitional safe harbour first, fall through to the permanent one only if needed, never ask questions that can't change the outcome.

- **Gate 1** — Transition Period check from Fiscal Year start/end dates. Open → Gate 2. Closed → skip to Gate 3.
- **Gate 2** — Transitional CbCR Safe Harbour (Art 8.2.1): disqualification screen → Qualified Financial Statements check → three tests. Any test passing ends the enquiry.
- **Gate 3** — Simplified Calculations Safe Harbour (Art 8.2.2): permanent, own three tests. Reached if the window closed, or the user was disqualified, or all Gate 2 tests failed.
- **Gate 4** — Disapplication warning (Art 8.2.3): not a test, a standing callout shown whenever a safe harbour is claimed.

Full detail per gate is in the spec — follow it precisely.

## 4. ⚠️ Three places where CD 142 overrides the Commentary

The Commentary is adopted interpretive material, but where CD 142 states its own figures or conditions, **CD 142 governs**. Building from the Commentary alone would give wrong answers:

1. **Transition Period / Transition Rate** — UAE: FYs beginning before 1 Jan 2027 and ending before 1 July 2028; rate **16%** (FY begins 2025), **17%** (FY begins 2026). The OECD's generic figures (15% tier, longer window) do **not** apply.
2. **Exclusion lists differ.** Use CD 142 Art 8.2.1.4's five exclusions. Note the OECD list includes one that **cannot** apply here — jurisdictions electing *Eligible Distribution Tax Systems under Art 7.3* — because **CD 142 has no Eligible Distribution Tax Systems provision at all** (its Art 7.3 is the Investment Entity Tax Transparency Election; see the Art 7 warning block in `docs/CD142-Complete-Extract.md`). Do not include it.
3. **The de minimis test differs between the two safe harbours.** Art 8.2.1 = **current year only**. Art 8.2.2 = **three-year average** per Art 5.5. Do not conflate.

## 5. Two traps to surface prominently to users

- **"Once-out, always-out" (Art 8.2.1.4(d)):** if the UAE Constituent Entities did not benefit from the Transitional CbCR Safe Harbour in a previous Fiscal Year in which the MNE Group was subject to Pillar Two, they cannot claim it now (unless there were no UAE Constituent Entities that year). A one-way door and the most consequential planning point in the module — give it a distinct warning callout, not just a question.
- **A failed Simplified ETR test yields no usable ETR (Commentary ¶20):** the computed figure is *disregarded* for GloBE purposes and cannot be reused as the Art 5.2.1 ETR. Say this explicitly where the test fails.

## 6. One thing users will likely misunderstand

The **Simplified Calculations Safe Harbour is not a full escape hatch.** The simplified figures apply only to **Non-material Constituent Entities**, and are *combined with full Pillar Two computations* for Constituent Entities that are not NMCEs (Art 8.2.2.2). State this plainly at the top of Gate 3.

Also note (Commentary Annex A Ch.2 ¶21–23): an MNE Group composed **exclusively of a Main Entity and its Permanent Establishments has no NMCEs at all** and cannot use these calculations; nor can a group relying on deemed Consolidated Financial Statements; and the external audit opinion must carry **no qualification regarding the entity's exclusion from the consolidation perimeter**.

## 7. UI approach — structured assessment, not a quick questionnaire

Confirmed: this module needs CbC Report figures and Qualified Financial Statement data that users won't have to hand in a browser session.

- Open with a **"what you'll need"** panel listing the required data before the user starts.
- Use **input fields** for figures (Total Revenue, PBT, Simplified Covered Taxes, payroll/tangible asset values) alongside the established click-tile pattern for yes/no and multi-select questions.
- Keep the click-first preference wherever a question is genuinely categorical — tiles for disqualifiers, elections and entity characteristics; fields only where a number is genuinely required.
- Multi-select tile grid for the Gate 2 disqualification screen, same pattern as Module 1's Step E.

## 8. Currency note

All thresholds are in EUR (EUR 10m / EUR 1m / EUR 50m). Module 1 already surfaces the TTGREG1 §4.3 currency-conversion hierarchy for the EUR 750m threshold. Consider whether the same guidance belongs here — flag back rather than assuming; the spec does not settle it.

## 9. Explicit non-goals

- Do **not** build the QDMTT Safe Harbour (Commentary Annex A Ch.3) as a user-testable path — it is a safe harbour *other* jurisdictions apply in respect of the UAE's QDMTT, not one a UAE entity claims. A brief informational note is fine, given the UAE's confirmed qualified status in the Central Record.
- Do **not** build the Substance-based Tax Incentive Safe Harbour (Annex A Ch.2 §3) — no CD 142 counterpart; flagged for later verification.
- Do **not** build the Article 3/4/5 computation modules. Where no safe harbour is available, state that full computation is required and stop.

## 10. Testing

Extend `test.html` with real, persistent coverage:
- Gate 1 both branches (window open / closed), including boundary dates (FY beginning 31 Dec 2026 vs 1 Jan 2027; FY ending 30 June 2028 vs 1 July 2028)
- Each of the five Art 8.2.1.4 disqualifiers individually, plus the two sub-question reversals
- Each of the three Art 8.2.1 tests passing and failing, including the loss/zero-profit automatic pass on routine profits, and the held-for-sale exclusion on de minimis
- Transition Rate selection (16% vs 17%) by Fiscal Year
- Each of the three Art 8.2.2 tests, and the NMCE definition conditions
- PDF consistency for every conclusion type

Report the actual pass/fail output, not a claim. Where a new figure or threshold is hard-coded, consider a deliberate-break check as you did for the GIR 15-month figure.

---

## Attachments
1. `docs/UAE-DMTT-Module2-SafeHarbour-Spec.md` (the build spec)
2. `docs/CD142-Complete-Extract.md`, `docs/Commentary-2026-Extract.md` (reference)
