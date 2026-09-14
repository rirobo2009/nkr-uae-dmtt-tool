A complete study of all source documents has surfaced several issues in the live
modules. None are build errors — all stem from source material we hadn't read when
those modules were specced. Two are correctness issues; the rest are enhancements.

Handle them in the order below. Commit each as its own logical commit.

═══════════════════════════════════════════════════════════════════════════
PART 1 — MODULE 4 · Penalty Relief callout is materially incomplete (CORRECTNESS)
═══════════════════════════════════════════════════════════════════════════

The Penalty Relief callout currently presents CD 142 Art 14.3 as unqualified good
news. The OECD GloBE Information Return's Annex C (Transitional Penalty Relief) —
adopted into UAE law via MD 96 of 2026, and expressly stated to apply to
"QDMTT-only Jurisdictions" like the UAE — sets out two material limits we omit.

ADD these two limits, clearly, to the callout:
1. Relief does NOT apply to cases of avoidance, fraud, or abuse.
2. Relief does NOT remove the obligation to correct any errors and pay any
   unpaid or underpaid Top-up Tax, INCLUDING INTEREST, for previous Fiscal Years
   in accordance with domestic law.

ALSO ADD (enhancement, same callout) — Annex C's guidance on what "reasonable
measures" actually means, since CD 142 Art 14.3 uses the term without defining it:
- The term is deliberately not defined; it is understood in light of the
  jurisdiction's own rules and practice, and assessed by the tax administration on
  the facts and circumstances of each case.
- An MNE demonstrates it by showing it has, in good faith, put in place
  appropriate systems to understand and comply with the rules.
- Examples where penalties may be waived: a mistake of fact reasonable in the
  circumstances; errors reasonably attributable to unfamiliarity with the rules in
  initial implementation years (e.g. isolated mathematical or transposition
  errors); the rule's requirements being unclear and the MNE acting on a
  reasonable interpretation; the MNE's actions not reducing Top-up Tax liability
  in the current or a future year; full disclosure of the computation to the tax
  administration.

Cite as: GloBE Information Return (January 2025, revised January 2026), Annex C,
adopted by Ministerial Decision No. 96 of 2026 — alongside the existing Art 14.3
citation.

Suggested structure: keep the headline relief statement positive, then a clearly
delineated "What 'reasonable measures' means" block, then a visually distinct
"Limits of this relief" block for the two carve-outs. The limits must not read as
fine print — they materially qualify the headline.

═══════════════════════════════════════════════════════════════════════════
PART 2 — MODULE 1 · Location of the Entity is never tested (CORRECTNESS)
═══════════════════════════════════════════════════════════════════════════

CD 142 Art 2.1 charges only Constituent Entities / JVs / JV Subsidiaries **located
in the UAE**. Module 1 refers to "the UAE Entity" throughout but never actually
tests location — it assumes it. For a UAE-incorporated subsidiary that assumption
holds, but it fails for a foreign-incorporated entity managed from the UAE, or a
dual-resident entity.

Add a new step, positioned AFTER the current Step D (Constituent Entity gateway)
and BEFORE Step E (Excluded Entity tile grid).

Question: "Where is this Entity located for UAE Top-up Tax purposes?"

Grounded in CD 142 Art 18.3 (verbatim rules below) and TTGREG1 §6. Note that
TTGREG1 §6.1 states these location rules are specific to the QDMTT Legislation and
do NOT apply for Corporate Tax Law or Tax Treaty purposes generally — worth a
tooltip note, as users may assume their CT residence position carries over.

Art 18.3.1 — Entity that is NOT a Flow-through Entity:
 (a) if tax resident in a Jurisdiction based on place of management, place of
     creation or similar criteria → located in that Jurisdiction;
 (b) otherwise → located in the Jurisdiction in which it was created.

TTGREG1 §6.2 elaborates that an Entity is UAE-resident if it is a Resident Person
under CT Law Art 11(3): incorporated/established/recognised under UAE legislation
(including a Free Zone Person), OR incorporated abroad but **effectively managed
and controlled in the UAE**. An entity need not be a legal person. An
Unincorporated Partnership treated as a separate Taxable Person under CT Law Art
16(8) (per Cabinet Decision No. 63 of 2025) is a Resident Person and so
UAE-located.

Art 18.3.2 — Flow-through Entity:
 (a) if it is the UPE, or is required to apply an IIR under an equivalent
     provision to Art 2.1 of the Pillar Two Model Rules → located where created;
 (b) otherwise → treated as a STATELESS Entity.

Art 18.3.4 — Dual-located Entity (located in more than one Jurisdiction under
18.3.1). Tie-breakers, in strict order:
 (a) Both Jurisdictions have an applicable Tax Treaty in force:
     (i)   located where deemed resident for Tax Treaty purposes;
     (ii)  if the treaty requires competent authorities to reach mutual agreement
           on deemed residence and no agreement exists → go to (b);
     (iii) if the treaty gives no relief/exemption because the entity is resident
           in both Contracting Parties → go to (b).
 (b) No applicable Tax Treaty (or (a)(ii)/(a)(iii) applies):
     (i)   located where it paid the GREATER amount of Covered Taxes for the
           Fiscal Year, excluding taxes paid under a Controlled Foreign Company
           Tax Regime;
     (ii)  if Covered Taxes are equal or zero in all Jurisdictions → located where
           it has the greater Substance-based Income Exclusion, computed on an
           entity basis under Art 5.3;
     (iii) if SBIE is also equal or zero → treated as a Stateless Constituent
           Entity, UNLESS it is the UPE, in which case located where created.

Suggested implementation — click options, not free text:
 A. "Incorporated or established in the UAE (including a Free Zone Person)"
    → UAE-located, proceed to Step E
 B. "Incorporated outside the UAE but effectively managed and controlled in the
    UAE" → UAE-located, proceed to Step E
 C. "Incorporated outside the UAE and not managed/controlled from the UAE"
    → not UAE-located → exit to a new conclusion: outside the charging provision
      of CD 142 Art 2.1 (note: a UAE Permanent Establishment of this entity could
      still be separately in scope — flag rather than resolve)
 D. "This Entity is a Flow-through Entity" → sub-branch applying Art 18.3.2: ask
    whether it is the UPE or required to apply an IIR. If yes → located where
    created (ask if that is the UAE). If no → STATELESS, which is outside Art 2.1
    unless it is a Stateless Reverse Hybrid Entity created under UAE law (which
    Art 2.1 does charge) — so ask that as the follow-up rather than assuming.
 E. "The Entity is tax resident in the UAE and also in another jurisdiction
    (dual-located)" → sub-branch walking Art 18.3.4's tie-breakers in order.

For the dual-located sub-branch, given it terminates in genuinely fact-heavy tests
(Covered Taxes comparison, entity-basis SBIE), it is acceptable — and preferable —
to resolve the treaty limb and then, where Art 18.3.4(b) is reached, present the
ordered tie-breaker rules as guidance with a professional-review flag, rather than
attempting to compute an answer from inputs the user is unlikely to have to hand
at this stage. Use the existing judgment-flag treatment.

Update the progress counter and add test.html coverage for every new path.

═══════════════════════════════════════════════════════════════════════════
PART 3 — MODULE 1 · Verify Step A wording on Excluded Entity revenue (VERIFY)
═══════════════════════════════════════════════════════════════════════════

TTGEIE1 §10 states explicitly that the revenue of an Excluded Entity and an
Investment Entity **must still be taken into account** when applying the EUR 750
million consolidated revenue threshold, to the extent consolidated in the UPE's
Consolidated Financial Statements. This is counterintuitive: an entity can be fully
Excluded (no charge, no obligations) while its revenue still pulls the Group into
scope.

Please check Step A's question text and tooltip. If they do not clearly convey
this, add a short clarifying line or tooltip note. Cite TTGEIE1 §10 and CD 142
Art 1.1.1. Report back what you found before changing anything — if the wording is
already neutral and correct, no change is needed.

═══════════════════════════════════════════════════════════════════════════
PART 4 — MODULE 1 · Enrich the out-of-scope conclusion (ENHANCEMENT)
═══════════════════════════════════════════════════════════════════════════

Where the conclusion is that the Entity is an Excluded Entity or an Investment
Entity, add TTGEIE1 §10's three practical effects, so the user learns what the
conclusion actually means for them:

1. The Entity is not subject to the charging provision of the QDMTT Legislation
   (CD 142 Art 2.3).
2. For an EXCLUDED ENTITY: its attributes — profits, losses, taxes accrued,
   tangible assets and payroll expenses — are removed from the various
   computations under the QDMTT Legislation.
   For an INVESTMENT ENTITY: it is not covered by the charging provision, but its
   attributes MAY be included in the calculations of its Constituent Entity-owners
   if an election is made by those owners under CD 142 Art 7.3 (Investment Entity
   Tax Transparency Election) or Art 7.4 (Taxable Distribution Method Election).
3. No administrative obligations: no FTA registration for Top-up Tax, no Top-up
   Tax Return, no Pillar Two Information Return. HOWEVER, a Pillar Two Information
   Return must still be filed by another Entity for the MNE Group, and it must
   report the overall corporate structure including Excluded and Investment
   Entities — while NOT reporting their income, taxes, assets etc.
   (CD 142 Art 15.2.)

Show this in both the on-screen conclusion and the PDF. Cite TTGEIE1 §10 and the
CD 142 articles above.

═══════════════════════════════════════════════════════════════════════════

Confirm your understanding of Parts 1 and 2 specifically before writing any code —
those are the two correctness fixes and Part 2 adds a genuinely new decision
branch. Re-run test.html after each part and report the pass count. Take
screenshots before committing each part.
