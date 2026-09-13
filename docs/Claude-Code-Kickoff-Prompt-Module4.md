Read Claude-Code-Handoff-Brief-Module4.md and UAE-DMTT-Module4-ComplianceCalendar-Spec.md
in full before doing anything else. Also re-familiarize yourself with the existing
index.html, test.html, and NKR-design-tokens.md, since this module extends the
same codebase and must reuse the same PDF generation, lead capture, and brand
design patterns already established for Module 1.

Once you've read everything, do the following:

1. Confirm your understanding of the five compliance obligation cards (Registration,
   Return Filing & Payment, Deregistration, In/Out-of-Scope Notification, plus the
   two cross-cutting callouts) back to me in a short summary before writing code,
   so I can catch anything before build starts. Pay particular attention to
   confirming you understand the confirmed 15-vs-18-month asymmetry between the
   GIR and the Top-up Tax Return, and the AED 10,000 registration penalty NOT
   being covered by the Art 14.3 relief window — these are two easy-to-blur
   distinctions worth double-checking you have right.

2. Build this as a dashboard/card layout, distinct from Module 1's step-by-step
   wizard, per the spec. Minimal entry inputs (one date field, one click choice),
   then five always-visible cards plus two callouts.

3. Implement the deadline computation logic exactly as specified in Section 5 of
   the handoff brief — including both the general rule and the transitional
   override for Registration and Deregistration dates.

4. Commit directly to main, in small clearly-messaged logical chunks (one commit
   per card/feature area), auto-pushed, same workflow as before.

5. Extend test.html with real, persistent test coverage for this module's
   deadline logic — both computation paths for each date-based obligation, the
   GIR/Top-up Tax Return asymmetry display, and PDF-consistency checks. Show me
   the actual pass/fail output when done, not just a claim that it passes.

6. Do not build Module 4a (Safe Harbour) or Module 7 (GIR data pack) — out of
   scope for this pass, per Section 9 of the handoff brief.

7. If you hit any provision or figure not already covered in the spec, stop and
   ask me rather than inferring from general Pillar Two knowledge.

8. Module 4 will be a new standalone file (e.g. module4-compliance-calendar.html)
   in the same repo, which Azure Static Web Apps will automatically serve at
   dmtt.nkr.ae/module4-compliance-calendar.html once committed and deployed — no
   separate hosting setup needed. Given that, please also update Module 1's
   current "IN SCOPE" result screen: right now it just states the routing intent
   as placeholder text (per the original Module 1 build notes). Turn this into an
   actual working link/button that takes the user to Module 4's page. Confirm the
   exact filename you land on for Module 4 so this link stays accurate, and treat
   this link update as its own small, separate commit from the rest of Module 4's
   build.

Start with step 1 (confirm your understanding) before writing any code.
