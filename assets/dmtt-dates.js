/* ==================================================================
   UAE DMTT — shared Fiscal Year date utilities

   Loaded by module4-compliance-calendar.html and
   module2-safe-harbour.html. Both collect a Fiscal Year start/end pair
   and auto-fill the END date from the START, and this is the one
   implementation of that arithmetic.

   NOT loaded by index.html, and it must not be. Module 1's only date
   pair is prStart/prEnd in the Step A pro-ration sub-step, which
   captures the boundaries of a Fiscal Year the user has just declared
   is SHORTER than twelve months. Auto-filling a twelve-month default
   there would pre-fill the one value that cannot be correct, and would
   compute an "adjusted" EUR 750m threshold identical to the unadjusted
   one — then record that plausible-looking but wrong figure into the
   assessment trail. Symmetry would be a bug there, not a consistency
   win.

   All dates are UTC-midnight Date objects, to avoid timezone drift
   between an <input type=date> value and anything computed from it.

   This is the only external script either tool loads. Everything else
   in those pages is inlined, so if a caller stops working on dates,
   check this file loaded before assuming the caller is at fault.
   ================================================================== */

function parseDateInput(value){
  // value: "YYYY-MM-DD" from <input type=date>, or falsy.
  if(!value) return null;
  const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if(!m) return null;
  return new Date(Date.UTC(+m[1],+m[2]-1,+m[3]));
}

function addMonthsUTC(date,n){
  // Deliberately NOT date.setUTCMonth(getUTCMonth()+n) — that overflows past
  // month-end whenever the target month is shorter than the source day-of-
  // month (e.g. 31 Dec + 6 -> 1 Jul instead of 30 Jun, since June has only
  // 30 days). Clamp to the target month's actual last day instead, which is
  // the standard "same day N months later, or month-end if that day doesn't
  // exist" convention for statutory deadline math.
  const y=date.getUTCFullYear(),m=date.getUTCMonth(),day=date.getUTCDate();
  const targetFirst=new Date(Date.UTC(y,m+n,1));
  const daysInTargetMonth=new Date(Date.UTC(targetFirst.getUTCFullYear(),targetFirst.getUTCMonth()+1,0)).getUTCDate();
  return new Date(Date.UTC(targetFirst.getUTCFullYear(),targetFirst.getUTCMonth(),Math.min(day,daysInTargetMonth)));
}

// Exact day subtraction, safe as plain millisecond arithmetic (unlike month
// arithmetic — see addMonthsUTC above) because every day is exactly
// 86,400,000ms on a UTC-midnight Date with no DST to account for.
function addDaysUTC(date,n){ return new Date(date.getTime()+n*86400000); }

// Standard 12-month Fiscal Year period convention for the END-date auto-
// fill: start + 1 year, minus 1 day (1 Jan 2025 -> 31 Dec 2025; 1 Apr
// 2025 -> 31 Mar 2026). Deliberately built from the SAME addMonthsUTC used
// throughout the deadline math (12 months, not a fixed 365/366-day
// offset) rather than new ad hoc arithmetic, so this can't reintroduce the
// month-end overflow class of bug already found and fixed once.
// Edge case, worth being explicit about: a start date of 29 February in a
// leap year has no exact anniversary in a non-leap year, so this composes
// exactly like the rest of the month math already does — addMonthsUTC
// clamps 29 Feb to 28 Feb of the following (non-leap) year, then -1 day
// gives 27 Feb. Not the only defensible convention, but the direct, honest
// result of reusing the one utility that already exists.
function computeAutoFilledEndDate(startDate){ return addDaysUTC(addMonthsUTC(startDate,12),-1); }

function toDateInputValue(date){
  const y=date.getUTCFullYear(),m=String(date.getUTCMonth()+1).padStart(2,'0'),d=String(date.getUTCDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}

/* Shared END-date auto-fill.

   A DEFAULT, not a lock. Callers own a one-way "touched" flag that they
   set from the END field's own `input` listener; once set, this never
   writes again, so a manual edit survives any later change to START.

   The flag is safe precisely because setting `.value` from script does
   NOT fire an `input` event — which is exactly how this function writes
   the field — so the auto-fill can never mistake itself for a manual
   edit. Callers that re-render on input must therefore call their own
   refresh AFTER this, since writing the value fires nothing.

   Returns true if it wrote, false if it stood down. */
function autoFillEndDate(startEl,endEl,touched){
  if(touched) return false;
  const start=parseDateInput(startEl.value);
  endEl.value = start ? toDateInputValue(computeAutoFilledEndDate(start)) : '';
  return true;
}
