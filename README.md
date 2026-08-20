# NKR UAE DMTT Tool — Module 1: Applicability Gate

A static, client-side tool that walks a user through the UAE Domestic Minimum
Top-up Tax (DMTT) applicability decision tree (Steps A–F) and produces a
downloadable PDF conclusion: **In Scope**, **Out of Scope**, or **Not Directly
Liable (Investment Entity)**.

Deployed at [dmtt.nkr.ae](https://dmtt.nkr.ae).

## Legal basis

Cabinet Decision No. 142 of 2024 (Annexure), Article 1 (Scope of Application)
and Article 2.1–2.3 (Charging Provision), as interpreted per Ministerial
Decision No. 88 of 2025's adopted OECD Commentary/Guidance.

## Scope of this build

This is Module 1 only — the applicability gate. It determines whether an
entity/group is in scope of UAE DMTT; it does not compute Pillar Two Income,
Adjusted Covered Taxes, ETR, or Top-up Tax (those are later modules, not yet
built).

## Architecture

Single self-contained `index.html` — no build step, no external runtime
dependencies. Click-tile decision tree, tooltips on every defined term, and
browser-native print-to-PDF for the output document (`@media print` layout).

## Disclaimer

Not tax advice. Confirm any position against the primary legislation and a
qualified UAE tax adviser before filing.

Designed and verified by [NKR Auditing LLC](https://nkr.ae).
