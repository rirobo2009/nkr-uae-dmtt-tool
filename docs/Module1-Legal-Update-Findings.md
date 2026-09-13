# Module 1 — Legal Update Review: Findings Report
**Basis:** Full read-through of MD 96/2026, MD 133/2026, TTGREG1 (Scope & Registration Guide, Aug 2026), and TTGEIE1 (Excluded Entities & Investment Entities Guide, Aug 2026), cross-checked against Module 1's live decision tree (Steps A–F) as currently built and deployed on dmtt.nkr.ae.
**CD 142's own text is unchanged** — nothing here stems from a statutory amendment, only from newly available official interpretive guidance.

---

## Summary verdict

**No finding here breaks a conclusion Module 1 has already reached for a real user.** Everything the tool currently outputs for Steps A, B, D, E, F, and the standard UPE path is confirmed correct — in some cases confirmed almost word-for-word — by these new Guides. The findings are two genuine gaps (one citation, one logic) and one worked example that validates existing logic. Nothing here suggests panic; it suggests a clean, bounded fix list.

---

## Finding 1 — Citation update needed: MD 88 → MD 96 (cosmetic, no logic change)

**Confirmed current state (all source documents now verified present in Drive):** MD 96/2026 repeals MD 88/2025. MD 96's Annexure adopts exactly three OECD documents — the **2026 Consolidated Commentary**, the **Central Record** (current as at 1 May 2026, approved 11 May 2026), and the **GIR (January 2025, incl. January 2026 corrigendum)**. All three are now confirmed present in the Drive folder and match MD 96's list precisely.

**One thing worth noting, not a gap on your end:** MD 96's adopted list is narrower than MD 88's original six-item list — it does not separately re-adopt the June 2024 Administrative Guidance or the Article 8.1.4/8.1.5 and Article 9.1 Guidance documents that MD 88 had adopted individually. This is plausibly because the 2026 Consolidated Commentary has absorbed that prior standalone guidance into itself (consolidated commentaries typically do this), but that has **not been independently verified** — flagging as an open item rather than asserting it. Not a Module 1 concern (none of that content touches Article 1/2/18), but worth confirming before any Module 2/3 work that would need those provisions.

**Impact on Module 1:** None on the built decision tree itself — Article 1/2/18's text (which Module 1 is built from) hasn't changed, and nothing in this review surfaced a place where the 2023 vs 2026 Commentary diverges on Module 1's territory. But the tool's PDF output and legal-basis citations currently say "Ministerial Decision No. 88 of 2025" — that instrument is now repealed.

**Fix required:** Citation-only. Update every reference to "MD 88 of 2025" → "MD 96 of 2026" across the header legal-basis strip, PDF Provisions Relied Upon section, and any planning docs. No decision-tree logic changes.

**Forward note (not a Module 1 fix, but worth recording):** any future Module 2/3 build (the full GloBE Income and Covered Taxes computation engines) must ground itself in the **2026 Commentary**, not the 2023 version referenced in the original scope map — worth updating that doc too. The three OECD documents now sit in the Drive folder alongside the UAE instruments, so this grounding is ready when that work begins.

---

## Finding 2 — Genuine gap: SWF substitution chain, holding-company scenario not covered

**This is the substantive one.** TTGREG1 Section 4.2.3.1 confirms our Article 1.6.1/1.6.2 rebuild from a few sessions ago is directionally correct, but reveals it's **incomplete**. The Guide states explicitly:

> "Furthermore, where an SWF (that is a Governmental Entity) holds a Controlling Interest in an Entity **through a wholly owned holding company**, the SWF and the wholly owned holding company cannot be the UPE. Instead, the Entity in which the SWF holds a Controlling Interest (directly or indirectly) will be considered as the UPE of the Group provided either of the conditions mentioned above are met."

Module 1's current Step C / Step 5-of-8 flow only asks about a **single, direct** Controlling Interest holder beneath the SWF. It has no path to handle: SWF → wholly-owned HoldCo → (the real substitute UPE candidate, one level further down) → test the (a)/(b) conditions against *that* entity, not the HoldCo.

**Concrete consequence:** for any UAE group with this specific two-tier SWF-via-holding-company structure (the Guide's own Example 8 is exactly this shape — SWF → Company X (wholly-owned HoldCo/asset manager) → Company A/B), Module 1 as currently built would ask the (a)/(b) test against the wrong entity (the direct holding company) rather than walking one level further down to the entity the Guide says is actually the UPE candidate.

**Fix required:** Logic change, not cosmetic. Step C/Step 5-of-8 needs an additional branch: "Does the SWF hold this Controlling Interest directly, or through a wholly-owned holding company?" — if via a holding company, the tool needs to walk one further level down before applying the (a)/(b) test, per the Guide's stated mechanic.

**Severity:** Narrow user population (SWF-structured groups specifically), but for that population this is a real, not cosmetic, correctness issue on a tool whose entire purpose is compliance accuracy.

---

## Finding 3 — Genuine gap: currency conversion sub-step entirely missing

TTGREG1 Section 4.3 (Currency Conversion) sets out a specific, non-obvious rule: where the UPE's Consolidated Financial Statements are in a currency other than EUR (the Guide's own example uses AED — directly relevant to most of your likely UAE users), the €750m threshold comparison requires converting using **average daily reference rates for the December prior to the tested Fiscal Year**, sourced from the European Central Bank first, Central Bank of the UAE second, or another FTA-acceptable source third.

Module 1's Step A currently asks a bare Yes/No against "€750 million" with no currency-conversion sub-step at all — implicitly assuming the user has already done this conversion themselves, or works entirely in EUR (unlikely for most UAE-headquartered users working from AED-denominated accounts).

**Fix required:** New content, not a correction to existing logic. Recommend adding an informational sub-step or tooltip at Step A: if the user's Consolidated Financial Statements aren't in EUR, they need to convert using the specific rate-source hierarchy above before answering. Doesn't necessarily need the tool to *perform* the conversion (that would require live FX rate data, out of scope for a static tool) — but it should surface the requirement and the correct methodology rather than silently assuming EUR.

---

## Finding 4 — Confirmed correct, no change needed

- **Step A pro-ration mechanic** (Art 1.1.2): TTGREG1's Example 14 uses the exact formula already built (`€750m × months/12`), with a worked example matching our logic precisely (9-month year → €562.5m threshold).
- **Excluded Entity tile grid structure** (tiles 1–10): TTGEIE1's primary/secondary Excluded Entity categorisation matches Module 1's tile grid almost exactly, including the 95%/85% ownership tests, the NPO-ownership test, and PE-of-Excluded-Entity treatment.
- **Five-Year Election scope**: TTGEIE1 Section 8 confirms the election applies to exactly the population Module 1 already surfaces it for (secondary Excluded Entities + NPO-owned entities) — no expansion or narrowing needed.
- **Governmental Entity tile**: TTGEIE1 explicitly states it does *not* define Governmental Entity ("with the exception of a Governmental Entity") — confirming Article 18's bare text (which Module 1 already uses) is the correct and only available grounding; the Guide doesn't add anything here.
- **Investment Entity test (Step F)**: TTGEIE1 Section 9's three-part test matches the Art 18 text we already pulled and used verbatim for the tooltip.

---

## Finding 5 — New instrument noted, no Module 1 impact

**MD 133 of 2026** specifies who must file the Pillar Two Information Return (GIR) — this is Article 15/Module 7 territory (not yet built). No action needed on Module 1. Worth filing this away for whenever Module 7 planning begins.

---

## Document set confirmed (as of this update)

Full current Drive folder, all read and cross-checked: CD 142/2024, FDL 47/2022, CD 215/2025, MD 24/2026, MD 96/2026, MD 133/2026, TTGREG1 (Scope & Registration Guide, Aug 2026), TTGEIE1 (Excluded Entities & Investment Entities Guide, Aug 2026), plus the three OECD documents adopted by MD 96 (2026 Consolidated Commentary, Central Record, GIR Jan 2025). This is a complete, correctly-matched set against MD 96's actual adopted list.

**Status: all 3 findings agreed by Rohit. Ready to proceed to Claude Code fix prompt.**

---

## Recommended action plan

| # | Item | Type | Priority |
|---|---|---|---|
| 1 | MD 88 → MD 96 citation swap (header, PDF, planning docs) | Citation only | Do now — cheap, and currently citing a repealed instrument |
| 2 | SWF holding-company chain — add the missing branch | Logic change | Do now — genuine correctness gap, narrow but real population affected |
| 3 | Currency conversion — add informational sub-step/tooltip at Step A | New content | Do now — likely affects a large share of your actual UAE users |
| 4 | Update scope-map/planning docs to reflect 2026 Commentary as the live adopted text | Documentation | Do now — cheap, prevents future Module 2/3 work grounding in the wrong Commentary version |
| 5 | Note MD 133 for future Module 7 planning | Documentation | No urgency |

Nothing here requires reworking Module 1's overall architecture — this is three bounded, well-defined fixes plus documentation upkeep, not a rebuild.
