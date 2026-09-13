# UAE DMTT Tool — Module 4: Compliance Calendar — Functional Spec v1
**Legal basis:** CD 142/2024 Annexure Articles 8.1, 11, 12, 13, 14, 15 · TTGREG1 (Scope & Registration Guide, Aug 2026) Section 8-9 · FTA Decision No. 12 of 2026 (Registration and Deregistration Timelines) · MD 133/2026 (GIR filer specification)
**Status:** Draft for review — no build started

---

## 1. Purpose

Module 4 is an informational/checklist module: once a user's entity is confirmed **in scope** (Module 1 exit) — and regardless of what Safe Harbour or liability outcome later modules produce — this module tells them **what they must do, when, and what happens if they don't.** Unlike Module 1, this is not a branching decision tree; it's primarily a structured reference the user's inputs personalize (their Fiscal Year end, their entity type, whether a DDFE is in play) rather than a Yes/No gate.

---

## 2. Structure — four compliance obligations, each with its own timeline

### Obligation A — Registration (Art 13.1, FTAD 12/2026 Art 2)

**Who:** Any Entity subject to Top-up Tax (i.e., made it through Module 1 as "in scope"), and any Domestic Designated Filing Entity (DDFE) if one is appointed.

**Deadline logic (confirmed, FTAD 12/2026 Art 2):**
- **General rule:** within **7 months** from the end of the first Fiscal Year in which the Entity is in scope.
- **Transitional override:** if that first in-scope Fiscal Year **ends before 30 April 2026**, the deadline is a flat **30 November 2026**, regardless of what the 7-month calculation would otherwise give.

**Tool logic:** ask the user their first in-scope Fiscal Year end date (click: quarter/date picker or simple date input — this is the one place in the module that needs an actual date rather than a tile click, since deadlines are date-arithmetic). Tool computes: if that FY end < 30 April 2026 → show **30 November 2026** as the deadline. Otherwise → compute **FY end + 7 months** and display it.

**Two registration paths to explain (TTGREG1 §8.1), presented as a click-choice:**
- **Entity-by-Entity:** each in-scope Entity registers separately, each receiving its own Pillar Two Top-up Tax TRN.
- **DDFE approach:** one member of a Domestic Main Group / Domestic Minority-owned Subgroup / Domestic JV Group is appointed DDFE, registers on behalf of all members, and handles filing and payment for them too. A group-level TRN is issued to the DDFE in addition to each member's own TRN.

**Practical note to surface (TTGREG1 §8.1, "Interaction with Corporate Tax Law"):** Top-up Tax registration is **separate** from Corporate Tax registration — an entity must register for Top-up Tax regardless of its Corporate Tax registration status. If already registered for any UAE tax, the Pillar Two TRN uses the same first-10-digit Tax Identification Number as existing registrations.

**Where to register:** EmaraTax portal (TTGREG1 §9.1) — worth a simple informational line, not a workflow the tool itself performs.

### Obligation B — Deregistration (Art 13.3, FTAD 12/2026 Art 3)

**Who:** Any Entity that ceases to exist, or ceases to be in scope under Article 1.1.

**Deadline logic (confirmed, FTAD 12/2026 Art 3):**
- **General rule:** within **6 months** from the earlier of (a) the date it ceases to exist, or (b) the end of the Fiscal Year in which it leaves the MNE Group and is no longer in scope.
- **Transitional override:** if the entity ceased to exist **before 30 June 2026**, the deadline is a flat **31 December 2026**.

**Hard gate to surface clearly (FTAD 12/2026 Art 3.3):** an Entity **cannot** be deregistered until it has (a) settled in full all Top-up Tax and penalties payable, and (b) filed all Top-up Tax Returns and Pillar Two Information Returns due. This should be a prominent warning callout, not buried text — a common practical trap.

**FTA discretionary registration/deregistration (Art 13.2, FTAD 12/2026 Art 3.5):** worth one informational line — if an Entity fails to register or deregister on time, the FTA may do so on its own initiative based on available information, effective from the date the Entity was originally required to act.

### Obligation C — In-Scope / Out-of-Scope Notification (FTAD 12/2026 Art 4)

**This is a distinct, separate obligation from registration/deregistration** — genuinely new information not present in CD 142 itself or in what TTGREG1's excerpt covered; only surfaced by reading FTAD 12/2026 directly. Worth flagging to you as a finding: without sourcing this specific FTA Decision, this entire obligation would have been missing from the tool.

**Who:** An Entity that is a member of an MNE Group where that MNE Group **ceases to be in scope** under Article 1.1 for the tested Fiscal Year.

**Deadline:** within **6 months** from the end of the tested Fiscal Year.

**Duration of validity:** the out-of-scope notification remains valid for the tested Fiscal Year **and the subsequent 4 consecutive Fiscal Years**, unless an in-scope notification becomes required before then (i.e., the group re-enters scope).

**Tool logic:** this only becomes relevant to a user who previously registered (was in scope) and has now fallen out of scope — worth presenting as a conditional card ("Has your group fallen out of scope since a previous Fiscal Year? Here's what you need to notify the FTA of, and by when") rather than a universal step every user sees.

### Obligation D — Return Filing (Art 8.1, Art 15, MD 133/2026)

Two separate returns, both worth their own timeline card:

**Top-up Tax Return (Art 8.1.1-8.1.3):**
- Filed by the Constituent Entity/JV/JV Subsidiary itself, or by the DDFE on its behalf.
- **Deadline:** 15 months after the last day of the Reporting Fiscal Year — **18 months** for the Reporting Fiscal Year that is the entity's **first Transition Year**.
- Content requirement: equivalent information/reporting to the Pillar Two Information Return; may use the simplified jurisdictional reporting framework.

**Pillar Two Information Return / GIR (Art 15, MD 133/2026):**
- **Who must file (MD 133/2026 Art 2, confirmed):** each Constituent Entity (excluding Investment Entities) located in the UAE; each JV and JV Subsidiary located in the UAE; each Stateless Reverse Hybrid Entity created under UAE law.
- **Filing exemption (MD 133/2026 Art 2.3):** not required if a GIR meeting Article 15's requirements has already been filed by the UPE or a Designated Filing Entity located in a jurisdiction with a Qualifying Competent Authority Agreement in effect with the UAE for that Reporting Fiscal Year — but the UAE entity/DDFE must still **notify** the FTA of who is filing on their behalf (MD 133/2026 Art 2.4).
- **Deadline:** 15 months after the last day of the Reporting Fiscal Year (Art 15.4) — same as the Top-up Tax Return's general deadline. **Confirmed asymmetry (not a flagged uncertainty — dug into this directly):** unlike the Top-up Tax Return, Article 15.4 and MD 133/2026 do **not** state an 18-month extension for the first Transition Year. I checked CD 142, TTGREG1, TTGEIE1, MD 133/2026, and the OECD GIR document itself directly — none contain a Transition Year exception for the GIR's 15-month deadline. This appears to be exactly how CD 142 was drafted, not a gap in available sources. **This should be surfaced as a clear, standalone warning in the tool** — precisely because users may reasonably (but incorrectly) assume both returns share the same extended first-year deadline.
- Uses the OECD's standard GIR template (17 July 2023, as amended).

### Obligation E — Payment (Art 11.1)

**Who:** the Constituent Entity, JV, JV Subsidiary, or DDFE.
**What:** Top-up Tax must be paid in **UAE Dirhams**, by the **same date the Top-up Tax Return is due**. So this obligation's deadline is simply a mirror of Obligation D's Top-up Tax Return deadline — no separate calculation needed, just a clear note that payment and filing share a deadline.

---

## 3. Cross-cutting content — not entity-specific, shown once

### Joint and Several Liability (Art 12)
Informational only — no user input needed, just a clear disclosure:
- All Constituent Entities of a Domestic Main Group / Domestic Minority-owned Sub-Group in the UAE, and Reverse Hybrid Entities, are jointly and severally liable for the full Top-up Tax of their Group.
- Same for JV/JV Subsidiaries of a Domestic JV Group.
- Individual partners/beneficiaries holding an Ownership Interest in a non-legal-person Constituent Entity are jointly/severally liable to the extent of their Ownership Interest.

**This should be surfaced prominently wherever DDFE appointment is discussed** — a user considering the DDFE route should understand that appointing one doesn't dilute their own liability exposure.

### Penalty Relief Window (Art 14.3) — genuinely good news, worth prominent placement
For Fiscal Years beginning on or before **31 December 2026** and not ending after **30 June 2028**: **no penalties apply** for Top-up Tax Return or Pillar Two Information Return filing errors, where the FTA considers the MNE Group took **reasonable measures** to correctly apply the Decision. Worth its own visually distinct callout — this is genuinely reassuring, practical information for early-adopter compliance anxiety.

### Registration/Deregistration Penalty (FTAD 12/2026 via Art 14.1(d), confirmed via TTGREG1 §8.5)
**AED 10,000** Administrative Penalty applies where an Entity (or a DDFE on behalf of an Entity) fails to register within the applicable deadline. Note: this specific penalty is **not** covered by the Art 14.3 relief window above — the relief window is scoped to Return filing errors, not registration timeliness. Worth being precise about this distinction in the tool's wording, since conflating the two would understate real exposure.

### General Anti-Abuse Rule, Record Keeping, Clarifications (Art 14.1(a)-(c))
Brief informational note only — these FDL 47 provisions (Art 50, 56, 59) apply equally to Top-up Tax, with "Taxable Person" read as "Constituent Entity/Parent Entity," "Corporate Tax" read as including Top-up Tax, and "Tax Period" read as "Fiscal Year." Not something requiring a dedicated interactive step — a single expandable info card is enough.

---

## 4. Proposed tool structure

**Confirmed: dashboard/card layout, all five obligations always visible as cards within this one module** (not split across modules) — Registration, Deregistration, In/Out-of-Scope Notification, Return Filing & Payment, plus the two cross-cutting callouts (Penalty Relief, Joint & Several Liability). The Notification card is conditional in its *content* (worded to invite the user to check whether it applies to them) but not hidden behind a gate — every user sees all five cards, since every compliance requirement must be represented.

1. **Entry inputs (minimal, click + one date field):**
   - First in-scope Fiscal Year end date (date input)
   - Registration approach: Entity-by-Entity / DDFE (click choice)

2. **Output: five deadline cards, always shown:**
   - **Registration** — computed deadline per §2.A
   - **Return Filing & Payment** — computed deadline per §2.D/E, with the confirmed 15-vs-18-month asymmetry between the Top-up Tax Return and the GIR shown as its own clearly labelled warning within this card, not buried in fine print
   - **Deregistration** — computed deadline per §2.B, worded to make clear it only becomes active once the entity actually ceases to exist or falls out of scope
   - **In/Out-of-Scope Notification** — per §2.C, worded as "Applies only if your group has fallen out of scope since a previous Fiscal Year" so it's clear to users it doesn't apply to them yet, without hiding it from the dashboard entirely
   - Each card: obligation name, computed deadline (or general rule template if the date input is empty), one-line summary, expandable "Learn more" with full legal detail and citations

3. **Two always-visible callouts**, positioned prominently (e.g., above or beside the cards, not nested inside them): the Penalty Relief Window (positive framing) and the Joint & Several Liability disclosure (cautionary framing).
4. **PDF download** of the personalized calendar, same disclaimer/footer treatment as Module 1, with lead capture on download — consistent with the established pattern.

---

## 5. Status — all open items resolved

1. **UI pattern:** confirmed — dashboard/cards.
2. **Every compliance requirement included:** confirmed — all five obligations (Registration, Deregistration, Notification, Return Filing, Payment) are always-visible cards within this one module's dashboard.
3. **Art 15.4 vs Art 8.1.2 deadline asymmetry:** resolved by direct investigation — confirmed as a real, stated asymmetry in CD 142 itself (checked CD 142, TTGREG1, TTGEIE1, MD 133/2026, and the OECD GIR document directly; none state a Transition Year extension for the GIR). To be presented as a clear warning, not a caveat about uncertainty.

Ready for the Claude Code handoff brief.
