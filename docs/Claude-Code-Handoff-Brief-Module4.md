# UAE DMTT Tool — Module 4: Compliance Calendar — Claude Code Handoff Brief v1

This is the build kickoff brief for Module 4. It packages everything agreed in planning so the build session doesn't need to re-derive decisions already made.

---

## 1. What we're building (this phase)

A **dashboard/card-style** module — distinct from Module 1's sequential wizard — implementing the **Compliance Calendar**: registration, deregistration, in/out-of-scope notification, return filing, and payment obligations for UAE DMTT, per `UAE-DMTT-Module4-ComplianceCalendar-Spec.md`.

Legal grounding: **CD 142/2024 Annexure Articles 8.1, 11, 12, 13, 14, 15 · TTGREG1 (Scope & Registration Guide) Sections 8-9 · FTA Decision No. 12 of 2026 (Registration and Deregistration Timelines) · MD 133/2026 (GIR filer specification)**. All specific citations and exact figures (deadlines, penalty amounts) are already worked into the spec — no additional legal research needed for this phase. If any ambiguity is found during build that isn't resolved in the spec, flag it back rather than guessing, same standing instruction as Module 1.

## 2. Where this fits relative to Module 1

This is a **separate module**, not an extension of Module 1's wizard flow. It should be reachable from the "IN SCOPE" routing message at the end of Module 1 (currently a placeholder text message per Module 1's build) — this is the natural point to link into Module 4, alongside wherever Safe Harbour/computation modules will eventually attach. Confirm with Rohit exactly how navigation between modules should work in this codebase before wiring it up, if it's not already obvious from the existing structure.

## 3. Repo & Git workflow

- Same repo: `nkr-uae-dmtt-tool`, same subdomain: `dmtt.nkr.ae`.
- Direct-to-main commits, small logical chunks, auto-pushed — same workflow as Module 1 and all fixes since. No change to this process.

## 4. UI pattern — important departure from Module 1

**This module uses a dashboard/card layout, not a step-by-step wizard.** Per the spec:
- Minimal entry inputs: first in-scope Fiscal Year end date (date input — the one place this module needs an actual date field rather than click tiles), and a click choice between Entity-by-Entity vs. DDFE registration approach.
- Output: **five always-visible cards** (Registration, Return Filing & Payment, Deregistration, In/Out-of-Scope Notification, plus the two cross-cutting callouts for Penalty Relief and Joint & Several Liability sitting outside/alongside the cards, not nested inside them).
- Each card: obligation name, computed deadline (or general-rule template if the date hasn't been entered yet), one-line summary, expandable "Learn more" with full legal detail and citations.
- The Notification card is conditional in *wording* only ("Applies only if your group has fallen out of scope since a previous Fiscal Year") — it must always be visible in the dashboard, never hidden behind a gate, since every compliance requirement must be represented per Rohit's explicit instruction.

Reuse the brand palette (`NKR-design-tokens.md`) and general visual language established in Module 1 (colours, typography, header treatment) — the card/dashboard pattern is new, but the underlying design system is not.

## 5. Deadline computation logic — exact rules, already confirmed

Implement these precisely as stated in the spec (Section 2) — all figures below are confirmed from primary sources, not estimates:

- **Registration:** first in-scope FY end + 7 months, UNLESS that FY end is before 30 April 2026, in which case the deadline is a flat **30 November 2026** regardless of the 7-month calculation.
- **Deregistration:** 6 months from the earlier of (cessation date) or (end of FY in which entity leaves scope), UNLESS cessation occurred before 30 June 2026, in which case the deadline is a flat **31 December 2026**. Must display the hard gate: entity cannot be deregistered until all Top-up Tax/penalties are settled and all returns filed.
- **In/Out-of-Scope Notification:** 6 months from end of the tested Fiscal Year in which the group fell out of scope; valid for that FY plus 4 subsequent FYs.
- **Top-up Tax Return + Payment:** 15 months after Reporting FY end, extended to **18 months** if that FY is the entity's first Transition Year. Payment shares this exact deadline.
- **Pillar Two Information Return (GIR):** 15 months after Reporting FY end — **no stated 18-month extension for the first Transition Year**, confirmed by direct review of CD 142, TTGREG1, TTGEIE1, MD 133/2026, and the OECD GIR document itself. **This asymmetry must be displayed as a clear, standalone warning within the Return Filing card** — do not let it read as identical to the Top-up Tax Return's deadline treatment.

## 6. Cross-cutting callouts — exact content

- **Penalty Relief Window (Art 14.3):** for FYs beginning on/before 31 Dec 2026 and not ending after 30 June 2028, no penalties apply for Top-up Tax Return/GIR filing errors where the FTA considers the MNE Group took reasonable measures. Positive framing.
- **Joint & Several Liability (Art 12):** all Constituent Entities of a Domestic Main Group/Minority-owned Sub-Group in the UAE, and Reverse Hybrid Entities, are jointly/severally liable for their Group's full Top-up Tax; same for JV/JV Subsidiaries of a Domestic JV Group; individual partners/beneficiaries in non-legal-person Constituent Entities are liable to the extent of their Ownership Interest. Cautionary framing — surface this prominently wherever DDFE appointment is discussed, since appointing a DDFE does not reduce this liability.
- **Registration penalty (AED 10,000):** confirmed via TTGREG1 §8.5, applies per Entity for late registration (and per Entity a DDFE fails to register on behalf of). **Explicitly NOT covered by the Art 14.3 relief window** — that window is scoped to Return filing errors only. Do not conflate these two; word them as clearly distinct in the tool.

## 7. PDF output and lead capture

- Same pattern as Module 1: PDF download of the personalized calendar, same disclaimer/footer treatment (including the confirmed NKR Auditing LLC credit line), lead capture firing on download using the same webhook, with a distinguishing `source_tool` value (e.g. `"dmtt_compliance_calendar"`) separate from Module 1's tag.
- Reuse `qfzptool.html`/Module 1's PDF generation approach rather than reinventing it.

## 8. Testing

Extend `test.html` (the existing automated suite from Module 1) to cover this module's deadline computation logic — specifically:
- Both the general-rule and transitional-override paths for Registration and Deregistration dates.
- The Notification card's validity window (5-year span).
- Correct display of the 15-vs-18-month asymmetry for GIR vs. Top-up Tax Return.
- PDF-consistency checks (inputs shown match computed deadlines and citations).

Same discipline as Module 1: a real, persistent, re-runnable test file — not session-only manual verification.

## 9. Explicit non-goals for this build pass

- Do NOT build Module 4a (Safe Harbour Screening) — currently paused pending official publication of TTGSHO1.
- Do NOT build the actual GIR data-pack auto-population (Module 7) — this module only displays the filing *obligation and deadline*, not the return's content itself.
- Do NOT reference any non-UAE Pillar Two implementation or general web sources — grounding is exactly the documents listed in Section 1, as provided in the Drive folder.
- If a provision or figure isn't already covered in `UAE-DMTT-Module4-ComplianceCalendar-Spec.md`, stop and ask rather than inferring from general Pillar Two knowledge.

---

## Attachments to provide to Claude Code alongside this brief:
1. `UAE-DMTT-Module4-ComplianceCalendar-Spec.md`
2. Reference: existing repo state (index.html, test.html, assets/, NKR-design-tokens.md) — already in the project folder, no new files needed for these.
