import { SOURCES as S, type Source } from "@/lib/sources";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Display date (month and year) shown in the post list. */
  date: string;
  /** First published, ISO YYYY-MM-DD. Used for the byline, structured data, and sitemap. */
  datePublished: string;
  /**
   * Last editorial review, ISO YYYY-MM-DD (used as dateModified). Only bump this when the
   * content or sources were actually reviewed or changed; otherwise keep it equal to datePublished.
   */
  lastReviewed: string;
  /** Byline. Defaults to EDITORIAL_TEAM ("VaccineInjuries.org Editorial Team") when omitted. */
  author?: string;
  category: string;
  heroImage?: { src: string; alt: string };
  /** Official sources listed at the end of the post (and as `citation` in structured data). */
  sources: Source[];
  /**
   * Markdown-ish body. Blocks are separated by blank lines. Supports ##/### headings,
   * "- " and "1. " lists, simple pipe tables, [text](url) links, and **bold**.
   */
  content: string;
};

export const blogPosts: BlogPost[] = [
  // ─── JANUARY (3) ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-the-vaccine-injury-compensation-program",
    title: "What Is the National Vaccine Injury Compensation Program (VICP)?",
    excerpt:
      "The VICP is a federal no-fault program that compensates people injured by certain vaccines. Here's how it works and who it covers.",
    date: "January 2025",
    datePublished: "2025-01-01",
    lastReviewed: "2026-10-06",
    category: "Compensation Programs",
    sources: [S.hrsaVicp, S.hrsaVicpAbout, S.hrsaCoveredVaccines, S.injuryTable, S.hrsaWhoCanFile, S.usc300aa15, S.cfcOsm, S.vaccineAct],
    heroImage: {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      alt: "Medical professional reviewing documents at a desk",
    },
    content: `
## What Is the VICP?

The National Vaccine Injury Compensation Program (VICP) is a federal program created by the [National Childhood Vaccine Injury Act of 1986](https://www.law.cornell.edu/uscode/text/42/chapter-6A/subchapter-XIX/part-2). It was designed to ensure that people injured by covered vaccines have a fair, efficient system for seeking compensation — without having to sue vaccine manufacturers directly.

Claims are filed in the [U.S. Court of Federal Claims](https://www.uscfc.uscourts.gov/vaccine-claims-office-special-masters), sometimes called the "Vaccine Court." Unlike traditional lawsuits, the VICP operates under a no-fault standard for many injuries.

## Who Administers It?

The VICP is administered jointly by three federal agencies:
- The Department of Health and Human Services (HHS)
- The Department of Justice (DOJ)
- The U.S. Court of Federal Claims

## What Vaccines Are Covered?

The VICP covers vaccines that are routinely recommended for children by the Centers for Disease Control and Prevention (CDC), plus those recommended for pregnant women. Examples include:

- Influenza (flu)
- MMR (measles, mumps, rubella)
- Varicella (chickenpox)
- Hepatitis A and B
- HPV
- Tdap and DTaP
- Polio (IPV)
- Meningococcal
- And others listed on the Vaccine Injury Table

## The Vaccine Injury Table

The VICP maintains a [Vaccine Injury Table](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3) — a list of specific vaccines and the injuries or conditions presumed to be caused by them. If your injury appears on this table and meets the timeframe criteria, you may qualify for compensation without having to prove causation.

Off-table injuries can also be compensated, but require more evidence showing the vaccine more likely than not caused the condition.

## What Can You Be Compensated For?

Compensation under the VICP can include:
- Medical expenses (past and future)
- Lost earnings
- Pain and suffering (capped at $250,000 under [42 U.S.C. § 300aa-15](https://www.law.cornell.edu/uscode/text/42/300aa-15))
- Death benefits

## Filing Deadline

Claims must generally be filed within **36 months** of the first symptom of the vaccine injury. This deadline is strict — do not delay if you believe you may have a claim.

## Next Steps

If you believe a vaccine caused your injury, the first step is understanding whether your situation may qualify. Use our free eligibility form to get started.
    `.trim(),
  },
  {
    slug: "who-can-file-a-vaccine-injury-claim",
    title: "Who Can File a Vaccine Injury Claim?",
    excerpt:
      "Not every vaccine injury claim is filed by the injured person directly. Here is who may be able to file and what to sort out before you begin.",
    date: "January 2025",
    datePublished: "2025-01-01",
    lastReviewed: "2026-10-06",
    category: "Eligibility",
    sources: [S.hrsaWhoCanFile, S.hrsaHowToFile, S.usc300aa11, S.hrsaCicp, S.hrsaCicpVsVicp],
    heroImage: {
      src: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=1200&q=80",
      alt: "Two people in a professional consultation setting",
    },
    content: `
## Who Can File a Vaccine Injury Claim?

One of the first questions people ask is whether they are actually the person who is allowed to file.

In many cases, the answer is yes. But not always. HRSA's [Who Can File a Petition](https://www.hrsa.gov/vaccine-compensation/eligible) page lays out the official rules. Sometimes a vaccine injury claim is filed by a parent, a guardian, or a representative of someone who has died. That is one reason this process can feel confusing at the start.

## The injured person can often file

If you received a covered vaccine and believe you were seriously injured by it, you may be able to file a claim yourself.

That is the most straightforward situation: you received the vaccine, symptoms began afterward, and you want to understand whether your case may qualify.

## Parents and guardians may also file

Not every claim is brought by the person who received the vaccine directly.

For example, a claim may be filed by:
- A parent of a child who received the vaccine
- A legal guardian for a child or disabled adult
- A representative acting for someone who cannot manage the process alone

This matters because many families wait too long simply because they assume only the injured person can start the case.

## If someone has died, an estate representative may file

When a vaccine-related injury may have resulted in death, the claim is usually handled by the legal representative of the estate rather than by a family member informally acting on their own.

That does not mean the family has no options. It means the filing usually needs to be handled through the proper legal role and documentation.

## Filing eligibility is not the same as winning a claim

Being allowed to file is only the first step.

A claim still depends on things like:
- Whether the vaccine is covered by the right program
- Whether the injury is serious enough under the program rules
- Whether the medical records support the timeline and diagnosis
- Whether the filing deadline has already passed

In other words, "Can I file?" and "Will this qualify?" are two different questions.

## COVID-19 vaccine claims follow a different program

This is where many people get tripped up.

Claims involving most routine covered vaccines are generally analyzed under the VICP. COVID-19 vaccine claims are handled differently under the [CICP](https://www.hrsa.gov/cicp), which has its own rules, deadlines, and evidence requirements.

So before you do anything else, it is important to identify which program applies to your case.

## What to sort out before moving forward

If you are trying to figure out whether you or your family can file, start with these basics:

1. Which vaccine was involved?
2. Who received it?
3. When did symptoms begin?
4. Has the condition lasted long enough or been serious enough to qualify?
5. Do you have the core medical records?

Even getting those five questions answered can bring a lot of clarity.

## Bottom line

A vaccine injury claim is not always filed by the injured person alone. In some cases, a parent, guardian, or estate representative may be the right person to move things forward.

If you are unsure whether your situation may fit, the next useful step is usually a review of the vaccine involved, the timeline, and the records you already have.
    `.trim(),
  },
  {
    slug: "what-medical-records-do-i-need-for-a-vaccine-injury-claim",
    title: "What Medical Records Do I Need for a Vaccine Injury Claim?",
    excerpt:
      "In most vaccine injury cases, the records do a lot of the talking. Here is what to gather first and what people often forget.",
    date: "January 2025",
    datePublished: "2025-01-01",
    lastReviewed: "2026-10-06",
    category: "Filing & Evidence",
    sources: [S.hrsaHowToFile, S.usc300aa11, S.hrsaCicpFiling, S.cfcOsm],
    heroImage: {
      src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
      alt: "Medical professional reviewing patient records on a clipboard",
    },
    content: `
## What Medical Records Do I Need for a Vaccine Injury Claim?

In vaccine injury cases, records matter more than almost anything else.

People often start by focusing on the diagnosis alone. But in reality, a strong claim usually depends on whether the paperwork tells a clear story from the vaccination forward.

## Start with proof of vaccination

The first thing you need is simple: proof that the vaccine was given.

That may include:
- A vaccination card
- A pharmacy or clinic record
- A state immunization record
- Primary care records showing the vaccine and date

Without that basic proof, everything else gets harder.

## Gather records showing when symptoms began

Timing is a major issue in these cases.

Try to collect the earliest records that mention:
- The first symptoms
- When they started
- Which arm or body area was affected, if relevant
- Whether symptoms were getting worse
- Any early diagnosis or suspected cause

The closer the records are to the start of the problem, the more useful they usually are.

## Get all treatment records, not just the big ones

Do not stop at the emergency room or hospital summary.

In many cases, the most helpful records include:
- Primary care notes
- Urgent care records
- Emergency department records
- Hospital records
- Specialist records
- Imaging reports
- Lab results
- Physical therapy records
- Medication lists
- Follow-up visits documenting ongoing symptoms

A vaccine injury case is often built from the pattern across many records, not from one dramatic document.

## Records should show both the injury and the effect of the injury

A good file usually helps answer two different questions:

1. What happened medically?
2. How serious and lasting was it?

That means records about diagnosis are important, but so are records showing ongoing pain, reduced function, work limitations, repeated follow-ups, and long-term treatment.

## What if some records are missing?

Missing records do not always end a claim.

But they should be identified early. In some VICP cases, if certain required records cannot be obtained, the filing may need to explain what efforts were made to get them and why they are unavailable.

That is one reason it helps to start gathering records sooner rather than later.

## Special situations to keep in mind

Some claims require extra documentation.

For example:
- If a claim is filed by someone other than the injured person, proof of authority may be needed
- If the injured child was vaccinated before age five, additional early-life records may matter
- If there was a death, death records and related medical documentation become important
- If you are claiming lost income or major out-of-pocket costs, supporting financial documents may matter too

## COVID-19 claims usually require organized documentation

For COVID-19 vaccine claims under the CICP, documentation can be especially important. That often includes proof of vaccination, provider records, and signed authorization forms for each provider involved in treatment, as described on HRSA's [CICP filing process](https://www.hrsa.gov/cicp/filing-process) page.

Because the COVID-19 process is different, it helps to be unusually organized from the start.

## A simple checklist to begin with

If you are just getting started, try to gather:
- Vaccine record
- Earliest symptom records
- ER, hospital, and specialist records
- Imaging and lab results
- Medication records
- A simple timeline you create for yourself
- Work and expense records if the injury affected income or costs

That alone can put you in a much better position.

## Bottom line

The best vaccine injury claims are usually built on clear, complete records that connect the vaccine, the symptom timeline, the diagnosis, and the real-world impact of the condition.

If you think your case may qualify, one of the smartest first moves is to collect the records while they are still easier to find.
    `.trim(),
  },

  // ─── FEBRUARY (5) ────────────────────────────────────────────────────────────
  {
    slug: "what-are-the-severity-requirements-for-a-vicp-claim",
    title: "What Are the Severity Requirements for Filing a VICP Claim?",
    excerpt:
      "Not every vaccine reaction qualifies for compensation. Here is the seriousness threshold many people miss when they first start looking into the VICP.",
    date: "February 2025",
    datePublished: "2025-02-01",
    lastReviewed: "2026-10-06",
    category: "Eligibility",
    sources: [S.hrsaWhoCanFile, S.usc300aa11, S.injuryTable, S.hrsaCicpVsVicp],
    heroImage: {
      src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
      alt: "Doctor reviewing medical information with a patient",
    },
    content: `
## What Are the Severity Requirements for Filing a VICP Claim?

A lot of people assume that if they had a bad reaction after a vaccine, they automatically have a legal claim.

That is not how the VICP works.

The National Vaccine Injury Compensation Program (VICP) is meant for more serious injuries. So before you spend time gathering paperwork or talking to lawyers, it helps to know the basic threshold.

## Not every side effect qualifies

Vaccines can cause temporary side effects such as soreness, mild fever, fatigue, or short-term discomfort. Those reactions may be unpleasant, but they usually do not qualify for compensation.

The VICP is generally aimed at more significant injuries.

## The basic seriousness standard

In general, according to [HRSA](https://www.hrsa.gov/vaccine-compensation/eligible), a VICP claim must involve an injury whose effects:
- Lasted for more than six months after the vaccination, or
- Resulted in inpatient hospitalization and surgical intervention, or
- Resulted in death

That is the seriousness screen many people do not know about.

So even if your symptoms were real and disruptive, the claim may still depend on whether the condition meets one of those program-level requirements.

## Why this matters so early

This issue matters at the beginning because it shapes the whole case.

For example:
- A short-lived reaction may not meet the threshold
- A long-lasting condition might
- A hospitalization by itself may not be enough if it does not fit the program rule
- A serious diagnosis with ongoing limitations may be much more relevant

This is also why timing and documentation matter so much. The records need to show not only that symptoms happened, but that they were serious enough and lasted long enough to fit the program.

## Table injuries still have to meet the seriousness requirement

Some people hear that their condition may be a "Table injury" and assume that means the case automatically qualifies.

Not quite.

A Table injury may make causation easier to argue if the vaccine, injury, and timing fit the program table. But the case still has to satisfy the seriousness requirement for filing.

So these are separate questions:
- Is the injury on the Table?
- Did it happen within the right time window?
- Is it serious enough under the VICP rules?

All three can matter.

## COVID-19 claims are different

If the vaccine involved was a COVID-19 vaccine, you are generally not dealing with the VICP at all. Those claims are handled through the CICP, which uses a different framework and different standards.

That is one reason it is important not to assume the same rules apply across all vaccine cases.

## A practical way to think about it

Ask yourself:
- Did this condition resolve quickly, or has it continued?
- Was there inpatient hospitalization?
- Was surgery involved?
- Did the injury result in death?
- Do the records clearly show how serious the condition became?

Those questions often tell you very quickly whether it makes sense to look deeper.

## Bottom line

A VICP claim usually requires more than a temporary reaction. In general, the injury must have lasted more than six months, involved inpatient hospitalization and surgical intervention, or resulted in death.

If you are unsure whether your situation clears that threshold, the next step is usually to review the diagnosis, treatment history, and timeline in one place before deciding whether to move forward.
    `.trim(),
  },
  {
    slug: "difference-between-table-injury-and-off-table-injury",
    title: "What Is the Difference Between a Table Injury and an Off-Table Injury?",
    excerpt:
      "Many vaccine injury claims turn on one question: is this a Table injury or an off-Table injury? Here is what that means in plain English.",
    date: "February 2025",
    datePublished: "2025-02-01",
    lastReviewed: "2026-10-06",
    category: "Qualifying Injuries",
    sources: [S.hrsaCoveredVaccines, S.injuryTable, S.usc300aa14, S.usc300aa11],
    heroImage: {
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
      alt: "Person studying and reviewing documents at a desk",
    },
    content: `
## What Is the Difference Between a Table Injury and an Off-Table Injury?

If you have started researching vaccine injury claims, you have probably seen the term [Vaccine Injury Table](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3).

It sounds technical, but the basic idea is simple: some injuries are listed in a way that can make a claim easier to prove, while others are not.

## What is a Table injury?

A Table injury is an injury or condition that appears on the Vaccine Injury Table for a particular vaccine, with a specific time period in which symptoms must begin.

If the case fits the listed vaccine, the listed injury, and the listed timing, the law may presume the vaccine caused the injury unless the government shows another cause.

That is why Table injuries can be so important.

## Why timing matters so much

The Table is not just a list of diagnoses. It is also a list of time windows.

So it is not enough for someone to say, "I had this condition after a vaccine."

The case may also need to fit the required onset period. In some cases, a diagnosis that appears on the Table may still be treated as off-Table if the timing does not match.

That is one reason the first medical records after vaccination matter so much.

## What is an off-Table injury?

An off-Table injury is generally one that:
- Is not listed on the Table for that vaccine, or
- Did not occur within the required Table timeframe, or
- Does not otherwise satisfy the Table requirements

Off-Table does not mean impossible. It just means the case usually requires more proof.

Instead of receiving a presumption, the petitioner usually has to show that the vaccine more likely than not caused the injury.

## Why off-Table cases can be harder

In an off-Table case, stronger evidence is usually needed to connect the vaccine to the condition.

That may include:
- A clear medical timeline
- Treating records close to onset
- Expert opinions
- Medical literature, depending on the case
- Evidence ruling out other likely causes

So while off-Table cases can absolutely be valid, they often require a more developed record.

## A common example: shoulder injuries

Some shoulder injuries tied to vaccine administration are listed on the Table for many vaccines, but even then, the timing matters.

That is a good example of how a case can turn on details that seem small at first: exactly when symptoms began, how they were described, and whether the early records match the claim.

## Why this distinction matters for real people

The Table issue often changes:
- How much evidence the case may need
- How early records are evaluated
- Whether expert support becomes especially important
- How quickly an attorney can assess the strength of the claim

For many people, this is the point where a vague concern turns into a more realistic case assessment.

## Bottom line

A Table injury may benefit from a legal presumption when the vaccine, injury, and onset timing all fit the program rules. An off-Table injury can still qualify, but it usually requires more proof tying the vaccine to the condition.

That is why even small timeline details in the medical records can make a big difference.
    `.trim(),
  },
  {
    slug: "can-i-sue-for-covid-vaccine-side-effects",
    title: "Can I Sue for COVID-19 Vaccine Side Effects?",
    excerpt:
      "COVID-19 vaccine injury claims are handled differently than other vaccines. Here's what you need to know about the CICP and your legal options.",
    date: "February 2025",
    datePublished: "2025-02-01",
    lastReviewed: "2026-10-06",
    category: "COVID-19 Vaccines",
    sources: [S.hrsaCicp, S.hrsaCicpFiling, S.hrsaCicpVsVicp, S.hrsaCicpBenefits, S.hrsaCicpData, S.prepActCicp, S.cicpRegs, S.vaersReport],
    heroImage: {
      src: "https://images.unsplash.com/photo-1606206591513-adbfbf700690?auto=format&fit=crop&w=1200&q=80",
      alt: "COVID-19 vaccine being administered",
    },
    content: `
## COVID-19 Vaccines and the Legal Landscape

COVID-19 vaccines are not covered by the National Vaccine Injury Compensation Program (VICP). Instead, they fall under the [Countermeasures Injury Compensation Program (CICP)](https://www.hrsa.gov/cicp), a separate federal program with different — and generally stricter — rules.

## What Is the CICP?

The CICP was created under the Public Readiness and Emergency Preparedness (PREP) Act. It provides limited liability protection to vaccine manufacturers and, in exchange, offers a compensation pathway for injured individuals.

However, the CICP:
- Requires a higher standard of proof than the VICP
- Does not cover pain and suffering
- Has more limited compensation available
- Does not allow attorney fees to be paid by the government

## Can I Sue the Vaccine Manufacturer?

In most cases, no. The PREP Act provides broad immunity to COVID-19 vaccine manufacturers from injury lawsuits. There is a very narrow exception for "willful misconduct," but this is an extremely high bar to meet.

## What Injuries Are Recognized Under the CICP?

There is currently no COVID-19 injury table in the CICP, so each claim is reviewed on its own medical evidence. According to HRSA's [CICP data](https://www.hrsa.gov/cicp/cicp-data), most COVID-19 vaccine claims compensated so far have involved myocarditis or myopericarditis (heart inflammation). The landscape is still developing.

## Is There a Filing Deadline?

Yes. According to HRSA, a CICP Request for Benefits must generally be filed within **one year** of receiving the vaccine. A separate one-year window can apply if HHS creates or amends a countermeasure injury table in a way that newly allows a claim. See HRSA's [CICP filing process](https://www.hrsa.gov/cicp/filing-process) for details.

## What Should I Do If I Think I Was Injured?

1. Seek medical care and document your symptoms and diagnosis thoroughly.
2. Report the injury to [VAERS](https://vaers.hhs.gov/reportevent.html) (the Vaccine Adverse Event Reporting System).
3. Consult with an attorney who is familiar with the CICP and COVID-19 vaccine injury claims.
4. Submit your information through our eligibility form for a free review.

The COVID-19 vaccine injury space is evolving rapidly. Legal and regulatory guidance continues to develop, and the advice you receive today may change.
    `.trim(),
  },
  {
    slug: "what-injuries-qualify-for-vaccine-compensation",
    title: "What Injuries Qualify for Vaccine Compensation?",
    excerpt:
      "The Vaccine Injury Table lists conditions presumed to be caused by certain vaccines. Here's a plain-English overview of what qualifies.",
    date: "February 2025",
    datePublished: "2025-02-01",
    lastReviewed: "2026-10-06",
    category: "Qualifying Injuries",
    sources: [S.injuryTable, S.hrsaCoveredVaccines, S.usc300aa14, S.hrsaCicp, S.hrsaCicpData],
    heroImage: {
      src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80",
      alt: "Medical professional preparing a vaccine injection",
    },
    content: `
## The Vaccine Injury Table

The National Vaccine Injury Compensation Program maintains a [Vaccine Injury Table](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3) — a government-maintained list of specific vaccines paired with the injuries or conditions presumed to be caused by them.

If your injury appears on the table and occurred within the specified timeframe after vaccination, you may qualify for compensation without having to prove that the vaccine caused your injury.

## Common Table Injuries

The examples below are taken from the current Vaccine Injury Table (42 CFR § 100.3). Each listed injury also has to meet the Table's detailed definition, not just the time window.

### Seasonal Influenza Vaccine
- Anaphylaxis (severe allergic reaction) — within 4 hours
- SIRVA (Shoulder Injury Related to Vaccine Administration) — shoulder pain and limited range of motion starting within 48 hours, thought to result from the vaccine or needle reaching the structures around the shoulder joint
- Vasovagal syncope (fainting) — within 1 hour
- Guillain-Barré Syndrome (GBS), a rare neurological condition affecting the peripheral nerves — 3 to 42 days after vaccination

### MMR (Measles, Mumps, Rubella)
- Anaphylaxis — within 4 hours
- Encephalopathy or encephalitis (brain injury or inflammation) — 5 to 15 days
- Thrombocytopenic purpura (very low platelets), for measles-containing vaccines — 7 to 30 days
- Chronic arthritis, for rubella-containing vaccines — 7 to 42 days

### Hepatitis B Vaccine
- Anaphylaxis — within 4 hours
- SIRVA — within 48 hours
- Vasovagal syncope — within 1 hour

### Rotavirus Vaccine
- Intussusception (a type of bowel obstruction) — 1 to 21 days

### Varicella (Chickenpox)
- Anaphylaxis — within 4 hours
- Disseminated varicella vaccine-strain viral disease
- SIRVA — within 48 hours
- Vasovagal syncope — within 1 hour

### HPV Vaccine
- Anaphylaxis — within 4 hours
- SIRVA — within 48 hours
- Vasovagal syncope — within 1 hour

## Off-Table Injuries

Injuries not listed on the Vaccine Injury Table can still be compensated — but you'll need to provide medical and scientific evidence showing the vaccine more likely than not caused the condition. This requires expert testimony and can be more complex.

## What About COVID-19 Vaccine Injuries?

COVID-19 vaccine injuries are handled by the [CICP](https://www.hrsa.gov/cicp), not the VICP. There is currently no COVID-19 injury table, so each claim is reviewed on its own evidence. According to HRSA's [CICP data](https://www.hrsa.gov/cicp/cicp-data), most COVID-19 vaccine claims compensated so far have involved myocarditis or myopericarditis following vaccination.

## How to Find Out If Your Injury Qualifies

The best first step is a free case review. Submit your information and we can help you understand whether your situation may qualify — at no cost and with no obligation.
    `.trim(),
  },
  {
    slug: "should-i-report-my-vaccine-reaction-to-vaers",
    title: "Should I Report My Vaccine Reaction to VAERS?",
    excerpt:
      "Reporting a vaccine reaction to VAERS can be useful, but it is not the same thing as filing a compensation claim. Here is what the system does and does not do.",
    date: "February 2025",
    datePublished: "2025-02-01",
    lastReviewed: "2026-10-06",
    category: "Safety Reporting",
    sources: [S.vaers, S.vaersReport, S.cdcVaers, S.hrsaWhoCanFile, S.hrsaCicpFiling],
    heroImage: {
      src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
      alt: "Person submitting information on a laptop",
    },
    content: `
## Should I Report My Vaccine Reaction to VAERS?

If you think you had a serious reaction after a vaccine, you may have heard that you should report it to VAERS.

That is often true. But it is important to understand what VAERS does — and what it does not do.

## What is VAERS?

VAERS stands for the [Vaccine Adverse Event Reporting System](https://vaers.hhs.gov/).

It is a national safety reporting system that accepts reports of health problems that happen after vaccination. Its purpose is to help detect possible safety signals.

In plain English, VAERS is part of vaccine safety monitoring. It is not a compensation program.

## Who can report to VAERS?

Many people assume only doctors can file a report.

That is not the case.

Reports can be submitted by:
- Patients
- Parents
- Caregivers
- Healthcare providers
- Others with knowledge of the event

You do not need to wait for absolute certainty before a report is made.

## Reporting does not prove causation

This is one of the most misunderstood parts of VAERS.

A VAERS report does not mean the vaccine caused the event. The system accepts reports without first deciding whether the vaccine was actually responsible.

That is intentional. VAERS is designed to collect reports broadly so safety experts can look for patterns.

## Filing a VAERS report is separate from a compensation claim

This is another major point of confusion.

Submitting a VAERS report is not the same thing as filing a claim with the VICP or the CICP.

A person can report to VAERS and never file a compensation claim. A person can also pursue a compensation claim and still need to separately handle any VAERS reporting.

The systems are different and serve different purposes.

## Why reporting can still be helpful

Even though VAERS is not a compensation program, reporting may still matter.

It can:
- Contribute to safety monitoring
- Create a dated record that a concern was raised
- Encourage more complete documentation of what happened
- Prompt follow-up in some cases

But it should not be treated as a substitute for medical care or legal action.

## Do not assume a VAERS report preserves deadlines

This is important.

If you think you may have a vaccine injury claim, do not assume that submitting a VAERS report protects your filing deadline. It does not.

The VICP and CICP have their own rules, deadlines, and procedures. Missing a filing deadline can end a claim even if a VAERS report was submitted.

## So should you report?

In many situations, yes — especially when the reaction was serious, unexpected, or required medical attention.

Reports can be submitted online through the official [VAERS reporting page](https://vaers.hhs.gov/reportevent.html). But reporting to VAERS should be seen as one step, not the only step.

## Bottom line

VAERS is a safety reporting system, not a compensation program. Anyone can report, and a report does not by itself prove causation or start a legal compensation claim.

If you had a serious reaction after vaccination, it may make sense to think about both sides of the issue: reporting the event and separately evaluating whether your case may qualify under the correct compensation program.
    `.trim(),
  },

  // ─── MARCH (7) ───────────────────────────────────────────────────────────────
  {
    slug: "what-happens-after-you-file-a-vicp-petition",
    title: "What Happens After You File a VICP Petition?",
    excerpt:
      "Filing the petition is only the beginning. Here is what usually happens next in a vaccine injury case and why the process can take time.",
    date: "March 2025",
    datePublished: "2025-03-01",
    lastReviewed: "2026-10-06",
    category: "Claim Process",
    sources: [S.cfcOsm, S.hrsaHowToFile, S.hrsaVicpAbout, S.hrsaVicpData, S.usc300aa15],
    heroImage: {
      src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
      alt: "Legal professional reviewing case documents",
    },
    content: `
## What Happens After You File a VICP Petition?

Many people think filing the petition is the main hurdle.

In reality, filing is just the start of the process.

Once a vaccine injury petition is submitted, the case moves into a federal process that involves medical records, legal review, and often a long period of waiting.

## The case is filed in federal court

VICP claims are filed in the U.S. Court of Federal Claims, sometimes called the Vaccine Court.

A petition is the legal document that starts the case. It is typically filed with supporting records and other required materials.

Because this is a formal legal process, many petitioners choose to work with a lawyer who handles vaccine injury matters.

## A special master is assigned

After filing, the case is handled through the court's [Office of Special Masters](https://www.uscfc.uscourts.gov/vaccine-claims-office-special-masters).

The special master plays a central role in managing the case, reviewing the evidence, and eventually issuing a decision if the matter is not resolved another way.

## The records get reviewed closely

After the case begins, the medical records become the core of the review.

The government will evaluate issues such as:
- Whether the vaccine is covered
- Whether the injury may be a Table injury or off-Table claim
- Whether the seriousness requirement is met
- Whether the timing in the records makes sense
- Whether more evidence is needed

This stage can involve requests for additional records, updated treatment information, or expert support.

## Settlement discussions may happen

Not every case goes straight to a final decision after a full fight.

Some cases are resolved through a negotiated settlement. That does not automatically mean the government admitted the vaccine caused the injury. In many cases, settlement is simply a way to resolve a case without extended litigation.

For families, settlement discussions can be one of the more confusing parts of the process because they may happen even when the medical issues are still disputed.

## A decision may be issued if the case is not resolved

If the case is not settled, the special master may issue a decision on whether compensation should be awarded and, if so, in what amount.

There are rules meant to move cases forward, but real-world timelines can still be lengthy because records, expert review, suspensions, and negotiations can all affect how long the process takes.

## Why these cases often take longer than people expect

Even strong cases can move slowly.

That is usually because the process involves:
- Collecting complete medical records
- Reviewing complex medical questions
- Waiting for updated treatment records
- Evaluating expert opinions
- Discussing settlement possibilities
- Resolving procedural issues along the way

So a long timeline does not automatically mean something has gone wrong.

## Attorney fees work differently here

One important difference between VICP and ordinary personal injury litigation is that the program may pay reasonable attorney fees and costs in many cases, even when compensation is not ultimately awarded, as long as the claim was filed in good faith and had a reasonable basis.

That fee structure is one reason many people seek counsel sooner rather than later.

## Bottom line

After a VICP petition is filed, the case moves into a structured federal review process. Records are examined, more evidence may be requested, settlement may be discussed, and a special master may eventually issue a decision.

Filing is a big step, but it is really the beginning of the case rather than the end of it.
    `.trim(),
  },
  {
    slug: "how-much-compensation-is-available-in-a-vaccine-injury-case",
    title: "How Much Compensation Is Available in a Vaccine Injury Case?",
    excerpt:
      "Compensation depends on which program applies to your case. Here is the plain-English difference between what the VICP may cover and what the CICP may cover.",
    date: "March 2025",
    datePublished: "2025-03-01",
    lastReviewed: "2026-10-06",
    category: "Cost & Compensation",
    sources: [S.usc300aa15, S.hrsaVicpFaq, S.hrsaCicpBenefits, S.hrsaCicpVsVicp],
    heroImage: {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
      alt: "Financial documents and paperwork on a desk",
    },
    content: `
## How Much Compensation Is Available in a Vaccine Injury Case?

One of the biggest questions people have is simple: what could actually be paid if a claim succeeds?

The answer depends first on which program applies.

That matters because the compensation rules under the VICP and the CICP are not the same.

## VICP compensation can include several categories

For covered vaccines handled through the VICP, compensation may include:
- Medical expenses
- Lost wages or lost earning capacity
- Pain and suffering, subject to a $250,000 cap set by [42 U.S.C. § 300aa-15](https://www.law.cornell.edu/uscode/text/42/300aa-15)
- A death benefit in qualifying death cases

In many VICP cases, the program may also pay reasonable attorney fees and costs under the program rules.

That fee structure is a major difference from many ordinary legal claims.

## CICP compensation is narrower

For COVID-19 vaccine claims and certain other covered countermeasures handled through the CICP, the compensation categories are more limited.

The CICP may provide:
- Unreimbursed medical expenses
- Lost employment income
- Survivor death benefits in qualifying cases

But unlike the VICP, the CICP generally does not provide pain and suffering damages, and it does not reimburse attorney fees.

That difference alone changes how many people approach these cases.

## Program differences matter more than people expect

A person may read about vaccine compensation online and assume the same payment rules apply to every vaccine case.

They do not.

That is why it is so important to identify early whether the case belongs in the VICP or the CICP. Two people with serious injuries may be looking at very different compensation rules depending on which vaccine was involved.

## Compensation is not automatic

Even if a case involves a serious diagnosis, payment is not guaranteed.

The amount, if any, depends on things like:
- Whether the claim qualifies
- How strong the medical evidence is
- How severe and lasting the injury is
- What treatment was required
- Whether there was wage loss or long-term impairment
- Whether the matter resolves by settlement or decision

So it is better to think of compensation as fact-driven, not automatic.

## Documentation matters for compensation too

People sometimes focus only on proving the injury happened. But a compensation claim also depends on proving the impact of that injury.

That may include records and documents showing:
- Medical bills and treatment history
- Time missed from work
- Ongoing restrictions
- Future care needs
- Out-of-pocket costs

The more clearly the records show the real-world effect of the injury, the easier it is to understand the potential value of the case.

## Why people are often surprised by the COVID rules

Many people assume a COVID-19 vaccine injury claim will work like a traditional VICP claim.

That is usually not the case.

The narrower compensation categories and the lack of attorney fee reimbursement are part of why COVID-related claims often feel more restrictive.

## Bottom line

Compensation in a vaccine injury case depends heavily on which program applies. The VICP may allow broader recovery, including pain and suffering and attorney fees under the program rules. The CICP is generally narrower and does not reimburse attorney fees.

Before worrying about dollar amounts, it usually makes sense to confirm the right program, the filing deadline, and whether the records support the claim in the first place.
    `.trim(),
  },
  {
    slug: "what-is-sirva-and-can-it-qualify-for-compensation",
    title: "What Is SIRVA and Can It Qualify for Compensation?",
    excerpt:
      "Shoulder pain after a vaccine is common. SIRVA is different. Here is what the term means and why early records matter so much.",
    date: "March 2025",
    datePublished: "2025-03-01",
    lastReviewed: "2026-10-06",
    category: "Qualifying Injuries",
    sources: [S.injuryTable, S.hrsaCoveredVaccines, S.hrsaWhoCanFile],
    heroImage: {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
      alt: "Person experiencing shoulder discomfort",
    },
    content: `
## What Is SIRVA and Can It Qualify for Compensation?

A sore arm after a vaccine is common.

But SIRVA is not just ordinary arm soreness.

SIRVA stands for Shoulder Injury Related to Vaccine Administration, and in the right circumstances, it may be relevant in a vaccine injury claim.

## SIRVA is different from normal short-term soreness

Most people who get a shot have some temporary pain where the needle went in. That is normal and usually goes away on its own.

SIRVA generally refers to a more significant shoulder problem that begins after vaccination and does not behave like routine soreness.

People often describe things like:
- Ongoing shoulder pain
- Reduced range of motion
- Trouble lifting the arm
- Symptoms that start quickly after the shot and do not just fade away

That is why early documentation matters.

## Why SIRVA comes up so often in vaccine claims

SIRVA is important because it appears on the [Vaccine Injury Table](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3) for many covered vaccines, with a short onset window: under the current Table, shoulder pain must begin within 48 hours of the shot.

That does not mean every shoulder complaint qualifies. But it does mean shoulder-injury claims after vaccination are taken seriously and evaluated under a recognized framework.

## The first records matter a lot

In many SIRVA cases, some of the most important evidence includes the earliest records showing:
- Which shoulder was affected
- When the pain began
- How quickly symptoms started after the shot
- Whether movement became limited
- Whether symptoms continued instead of resolving normally

If the first medical notes clearly document early shoulder pain and reduced use after vaccination, that can matter a great deal.

## Not every painful shoulder is a SIRVA case

This is the part people sometimes miss.

A shoulder problem after vaccination is not automatically a compensable claim.

Questions that often matter include:
- Did symptoms begin in the expected timeframe?
- Was the problem more than routine soreness?
- Did it last long enough or become serious enough to meet program rules?
- Do the records support the story from the beginning?

A case may look strong to a patient but much weaker on paper if the early medical notes are vague or delayed.

## What kinds of records help

If you think a shoulder injury after vaccination may be significant, helpful records often include:
- The vaccine record itself
- Early doctor or urgent care notes
- Orthopedic evaluations
- Physical therapy records
- Imaging reports
- Notes showing ongoing functional limitation

The goal is not just to show pain, but to show a documented shoulder injury pattern.

## Why people should not wait too long

SIRVA claims often depend heavily on timing. Waiting too long can create two problems at once:

1. The filing deadline may continue running
2. The earliest symptom documentation may become harder to prove clearly

That is why people with persistent shoulder symptoms should not assume it is "too minor" to look into.

## Bottom line

SIRVA is not the same as ordinary post-shot soreness. In the right circumstances, a shoulder injury after vaccination may fit a compensation claim, especially when the timing and medical records line up clearly.

If the pain started quickly, limited your shoulder function, and did not resolve normally, it may be worth having the timeline and records reviewed carefully.
    `.trim(),
  },
  {
    slug: "how-long-do-i-have-to-file-a-vaccine-injury-claim",
    title: "How Long Do I Have to File a Vaccine Injury Claim?",
    excerpt:
      "Missing the filing deadline can bar your claim entirely. Here's what you need to know about VICP and CICP deadlines.",
    date: "March 2025",
    datePublished: "2025-03-01",
    lastReviewed: "2026-10-06",
    category: "Filing & Deadlines",
    sources: [S.hrsaWhoCanFile, S.usc300aa16, S.hrsaCicpFiling],
    heroImage: {
      src: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80",
      alt: "Calendar with pen marking an important deadline",
    },
    content: `
## Deadlines Are Critical in Vaccine Injury Cases

Unlike many personal injury cases where you have years to file, vaccine injury claims have specific and strict deadlines. Missing them can permanently bar your ability to seek compensation.

## VICP Deadline: 36 Months

For claims filed under the National Vaccine Injury Compensation Program (VICP), you must generally file within **36 months of the date of the first symptom** of the vaccine injury.

If the injury resulted in death, a claim must be filed within **24 months of the death** and within **48 months of the first symptom** of the injury that led to the death. These limits come from the Vaccine Act, [42 U.S.C. § 300aa-16](https://www.law.cornell.edu/uscode/text/42/300aa-16), and are summarized on HRSA's [Who Can File a Petition](https://www.hrsa.gov/vaccine-compensation/eligible) page.

## CICP Deadline: 1 Year

For COVID-19 vaccine injury claims under the Countermeasures Injury Compensation Program (CICP), the deadline is generally **one year** from the date the vaccine was administered. A separate one-year window can apply if HHS creates or amends a countermeasure injury table in a way that newly allows a claim. See HRSA's [CICP filing process](https://www.hrsa.gov/cicp/filing-process).

## Why Deadlines Are So Strict

Congress set these deadlines to ensure that claims are brought while evidence is still available, memories are fresh, and medical records are accessible. HRSA notes that the Court may extend a VICP deadline through "equitable tolling" only in very limited circumstances.

## What If My Deadline Has Already Passed?

In rare circumstances, legal arguments may exist for why a late filing should be accepted. However, these situations are uncommon. If you're concerned your deadline may have passed, consult with a vaccine injury attorney as soon as possible — do not assume it's too late without getting advice.

## Practical Guidance

- Do not wait. If you experienced a serious reaction after a vaccine, start the process now.
- Document everything. Keep all medical records related to your symptoms and treatment.
- Talk to an attorney. A specialist can confirm which deadline applies to your specific vaccine and injury.

Use our free eligibility form to get started — knowing your situation doesn't cost anything.
    `.trim(),
  },
  {
    slug: "does-a-vaccine-injury-settlement-mean-the-vaccine-caused-the-injury",
    title: "Does a Vaccine Injury Settlement Mean the Vaccine Caused the Injury?",
    excerpt:
      "Many people assume a settlement proves the government admitted causation. That is usually not how these cases work.",
    date: "March 2025",
    datePublished: "2025-03-01",
    lastReviewed: "2026-10-06",
    category: "Claim Basics",
    sources: [S.hrsaVicpData, S.cfcOsm, S.hrsaVicpAbout],
    heroImage: {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      alt: "Professional in formal attire reviewing case materials",
    },
    content: `
## Does a Vaccine Injury Settlement Mean the Vaccine Caused the Injury?

This is one of the most misunderstood parts of vaccine injury law.

When people hear that a case settled, they often assume that means the government officially admitted the vaccine caused the injury.

That is not necessarily true.

## A settlement is a way to resolve a case

In general, a settlement is an agreement to resolve a petition without taking the case all the way through a final litigated decision.

That can happen for many reasons.

A settlement may reflect practical decisions about cost, timing, uncertainty, litigation risk, or case management. It is not always a statement about scientific certainty.

## Why this matters in vaccine injury cases

In the vaccine context, a settlement can be especially misunderstood because people often treat compensation and causation as the same thing.

But they are not always the same thing.

A case may settle even when there is still disagreement about whether the vaccine actually caused the alleged injury.

## Settlements are not the same as a formal causation ruling

A formal causation ruling comes from a decision-maker after evaluating the evidence and deciding whether the legal standard has been met.

A settlement is different. It resolves the case without requiring that same kind of final merits determination.

That is why it is a mistake to treat every settlement as proof of an official conclusion about vaccine causation.

## Why would a case settle if causation is disputed?

There are a number of possible reasons, including:
- To avoid the time and expense of continued litigation
- To reduce risk for both sides
- To account for uncertainty in how the evidence may be viewed
- To resolve a case more efficiently

This is not unique to vaccine cases. It is a common reality across many legal systems.

## What a settlement does mean

A settlement still matters.

It means the case was resolved in a way that involved payment rather than a straight dismissal. For the person affected, that can be meaningful and helpful.

But it should be described accurately. It is usually better to say a case was resolved by settlement rather than to overstate what the settlement proves.

## Bottom line

A vaccine injury settlement does not automatically mean there was a formal finding that the vaccine caused the injury. Settlements are often a practical way to resolve a case without a final causation ruling.

That distinction matters, especially for people trying to understand what [compensation data](https://www.hrsa.gov/vaccine-compensation/data) or prior case outcomes actually mean.
    `.trim(),
  },
  {
    slug: "what-documents-help-a-covid-19-vaccine-injury-claim",
    title: "What Documents Help a COVID-19 Vaccine Injury Claim?",
    excerpt:
      "COVID-19 vaccine claims usually turn on documentation. Here is what to gather early if you think you may need to file under the CICP.",
    date: "March 2025",
    datePublished: "2025-03-01",
    lastReviewed: "2026-10-06",
    category: "COVID-19 Vaccines",
    sources: [S.hrsaCicpFiling, S.hrsaCicp, S.hrsaCicpBenefits, S.cicpRegs],
    heroImage: {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
      alt: "COVID-19 vaccine documentation and medical records",
    },
    content: `
## What Documents Help a COVID-19 Vaccine Injury Claim?

COVID-19 vaccine injury claims are handled differently from many other vaccine cases.

Instead of going through the VICP, these claims are generally handled through the Countermeasures Injury Compensation Program (CICP). That makes documentation especially important from the start.

## Start with proof of vaccination

You should first gather clear proof that the vaccine was administered and when.

Helpful proof may include:
- A CDC COVID-19 vaccination record card
- A screenshot of a mobile vaccine record
- A pharmacy or clinic vaccination record
- A state immunization registry record

The key is that the documentation should clearly identify the recipient and the date of administration.

## Gather complete medical records from the beginning

The CICP process is highly document-driven.

That usually means collecting records that show:
- When symptoms began
- What diagnosis was considered or confirmed
- What treatment was provided
- Whether emergency care, hospitalization, or specialist treatment was required
- Whether symptoms continued over time

Try to collect the earliest records first, then the follow-up records that show how the condition developed.

## Include records from every provider involved

One common mistake is gathering only the hospital records and forgetting the rest.

In many COVID-19 vaccine injury cases, useful records may come from:
- Primary care
- Emergency care
- Cardiology
- Neurology
- Urgent care
- Imaging centers
- Physical therapy or rehabilitation
- Follow-up specialists

A complete picture is usually much more helpful than a partial one.

## Authorization forms may be required

The CICP process may require a separate authorization form for each healthcare provider who treated you. HRSA's [CICP filing process](https://www.hrsa.gov/cicp/filing-process) page lists the required forms and records.

That means organization matters. It helps to make a provider list early so nothing gets missed.

## Financial records may matter too

If the injury caused out-of-pocket medical costs or affected your ability to work, supporting financial records may also matter.

That can include:
- Bills
- Receipts
- Insurance explanations of benefits
- Employer records
- Pay records showing lost income

Do not assume the medical records alone tell the full compensation story.

## The filing deadline is short

This is one of the biggest reasons to get organized early.

The CICP generally has a one-year filing deadline. Waiting too long to gather records can make an already strict process even harder.

In some situations, a letter of intent may help preserve the deadline, but it should not be treated as a reason to delay the full filing any longer than necessary.

## Why documentation matters even more in COVID claims

COVID-19 vaccine claims can be especially evidence-heavy. There is no COVID-19 countermeasure injury table in place, so cases may depend heavily on medical and scientific proof connecting the injury to the vaccine.

That does not mean valid claims do not exist. It means the paperwork matters even more.

## Bottom line

If you think you may have a COVID-19 vaccine injury claim, the smartest early move is to build a clean document file: proof of vaccination, complete medical records, provider information, and financial records where relevant.

Because the CICP deadline is short and the process is strict, good documentation is not just helpful — it can shape the entire claim.
    `.trim(),
  },
  {
    slug: "how-to-find-a-vaccine-injury-attorney",
    title: "How to Find a Vaccine Injury Attorney",
    excerpt:
      "Vaccine injury law is specialized. Here's what to look for in an attorney, how fees work, and what questions to ask before you hire.",
    date: "March 2025",
    datePublished: "2025-03-01",
    lastReviewed: "2026-10-06",
    category: "Legal Help",
    sources: [S.cfcOsm, S.hrsaHowToFile, S.usc300aa15, S.hrsaCicpVsVicp],
    heroImage: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      alt: "Attorney consulting with a client across a desk",
    },
    content: `
## Why You Need a Specialist

Vaccine injury cases — especially those filed in the National Vaccine Injury Compensation Program (VICP) — are highly specialized. The process involves the [U.S. Court of Federal Claims](https://www.uscfc.uscourts.gov/vaccine-claims-office-special-masters), specific evidentiary standards, and a body of case law that only practitioners in this niche know well.

A general personal injury attorney, even a good one, may not be the right fit for a vaccine injury claim.

## How Attorney Fees Work in VICP Cases

One of the most favorable aspects of the VICP is how it handles attorney fees. If your case is successful — or even if it is dismissed on the merits — you may be entitled to have your attorneys' fees and costs paid by the federal government, separate from any compensation you receive.

This means you should never pay out-of-pocket upfront to a vaccine injury attorney for a VICP claim. If an attorney asks for a large retainer fee before filing, that may be a red flag.

## What to Look For

When evaluating vaccine injury attorneys:

1. VICP experience — Ask how many cases they have filed in the Vaccine Court and what their outcomes have been.
2. Medical knowledge — Vaccine cases require understanding complex medical evidence. Good attorneys work with medical experts.
3. Communication — These cases can take time. You want someone who keeps you informed.
4. No upfront costs — Verify their fee arrangement before signing anything.

## Questions to Ask a Potential Attorney

- Have you handled cases like mine before?
- What is your assessment of my claim?
- How do you handle expert witnesses?
- How long do cases like mine typically take?
- What are the chances my claim qualifies under the Vaccine Injury Table?

## How We Can Help

We connect people who may have vaccine injury claims with experienced legal professionals. Submit your information for a free review, and if your case looks like it may qualify, we'll help connect you with an appropriate attorney.
    `.trim(),
  },

  // ─── APRIL (2) ───────────────────────────────────────────────────────────────
  {
    slug: "understanding-vaccine-injury-claims-legal-rights-and-options",
    title: "Understanding Vaccine Injury Claims: Your Legal Rights and Options",
    excerpt:
      "Vaccines rarely cause serious harm, but when they do, you have options. Here is a plain-English overview of vaccine injury claims, the VICP, and when traditional litigation may apply.",
    date: "April 2025",
    datePublished: "2025-04-01",
    lastReviewed: "2026-10-06",
    category: "Claim Basics",
    sources: [S.hrsaVicp, S.hrsaCoveredVaccines, S.injuryTable, S.hrsaWhoCanFile, S.usc300aa15, S.usc300aa16, S.cfcOsm],
    heroImage: {
      src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
      alt: "Legal professional reviewing case documents",
    },
    content: `
Vaccines rarely cause serious harm. But when they do, you have options.

If you or a family member experienced a real injury after a vaccine, it helps to know what counts as a vaccine injury, which compensation program applies, and how the process works.

## What counts as a vaccine injury?

A vaccine injury is a harmful reaction following vaccination. These can range from short-term reactions to severe, long-lasting complications.

Common examples include:
- Severe allergic reactions like anaphylaxis
- Shoulder injury related to vaccine administration (SIRVA)
- Guillain-Barré Syndrome
- Brachial neuritis
- Thrombocytopenia
- Seizures
- Ongoing pain or autoimmune conditions

## Normal reactions are not the same thing

Most people who get a shot have some mild side effects: soreness, low-grade fever, fatigue, achy muscles. These usually resolve within a few days and do not qualify for compensation.

A vaccine injury is generally more severe, lasts longer, or requires significant medical treatment.

## The National Vaccine Injury Compensation Program

The VICP is a federal no-fault program created by the National Childhood Vaccine Injury Act of 1986. It is administered by the U.S. Department of Health and Human Services and adjudicated through the U.S. Court of Federal Claims.

It covers most routinely recommended vaccines, including:
- DTaP
- MMR
- Polio
- Hepatitis A and B
- Influenza
- HPV
- Pneumococcal

## The Vaccine Injury Table

The VICP maintains a [Vaccine Injury Table](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3) that lists specific injuries presumed to be caused by certain vaccines, along with the timeframe in which symptoms must appear.

If your injury is on the table and the timing fits, the law presumes the vaccine caused it. That makes the case easier to prove.

Off-table injuries can still qualify, but you have to show the vaccine more likely than not caused the condition. That usually means medical records, expert opinions, and sometimes scientific literature.

## Filing deadlines

The VICP statute of limitations is strict:
- Three years from the first symptom of the injury
- Two years from the date of death for wrongful death claims
- Four years from the first symptom for injuries that resulted in death

If you think you may have a claim, do not wait.

## What you need to file

A successful claim usually requires:
- Medical records before and after the vaccination
- Vaccination records showing dates, lot numbers, and vaccine type
- Records of all treatment for the injury
- Medical expert opinions linking the vaccine to the condition
- Records of lost wages and other economic damages

## How the process works

1. Petition filing — submit a formal petition to the U.S. Court of Federal Claims
2. Medical review — government medical experts review the case
3. Discovery — exchange of medical records and expert reports
4. Hearing — if needed, a hearing before a Special Master
5. Decision — the Special Master rules on compensation
6. Appeal — either side may appeal

## What you may be compensated for

The VICP can cover:
- Past and future medical expenses related to the injury
- Rehabilitation, equipment, and home modifications
- Lost wages and lost earning capacity
- Pain and suffering, capped at $250,000 (for injuries after October 1, 1988)
- Death benefits up to $250,000 in qualifying death cases

## Why these cases are hard

Causation is often the hardest part, especially for off-table injuries. Experts have to show:
- The timing fits
- The vaccine could plausibly cause the condition
- Other likely causes can be ruled out

The medical evidence in vaccine cases gets technical fast. Working with attorneys who handle these cases regularly makes a real difference.

## When traditional litigation may apply

The VICP is the main path. In narrow cases, a traditional product liability claim against the manufacturer may be possible:
- Design defect claims, where a safer alternative design was feasible
- Manufacturing defect claims, like contaminated vaccine lots
- Failure to warn claims about known risks
- Vaccines not covered by the VICP

These cases are harder than VICP claims and usually require specialized counsel.

## What to do if you think you have a claim

1. Get medical care and a clear diagnosis
2. Save everything: records, vaccine cards, bills, communications
3. Talk to a vaccine injury attorney before the deadline runs
4. Do not wait — the timeline matters more than people realize

## Bottom line

Vaccine injuries are rare, but the compensation system exists for the people who experience them. Filing a claim does not make you anti-vaccine. It is how the program is supposed to work.

If you suspect you or a family member has a vaccine injury, the most important thing is to act before the filing deadline passes.
    `.trim(),
  },
  {
    slug: "salt-lake-city-vaccine-injury-attorney",
    title: "Salt Lake City Vaccine Injury Attorney: What Utah Residents Should Know",
    excerpt:
      "Vaccine injury law is mostly federal, so the same program covers Utah cases. But local context still matters in real ways. Here is what to know if you are looking for help in Salt Lake City.",
    date: "April 2025",
    datePublished: "2025-04-01",
    lastReviewed: "2026-10-06",
    category: "Legal Help",
    sources: [S.hrsaVicp, S.hrsaWhoCanFile, S.cfcOsm, S.injuryTable, S.usc300aa11],
    heroImage: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      alt: "Attorney consulting with a client across a desk",
    },
    content: `
If you live in Utah and think a vaccine caused a serious injury, you may be wondering whether you need a local attorney or one who specializes in this area of law.

The honest answer: vaccine injury law is mostly federal, so most cases run through the same federal program no matter where you live. But local context still matters.

## Most claims go through the federal VICP

The majority of vaccine injury claims in Utah, like everywhere else in the U.S., are handled through the National Vaccine Injury Compensation Program. The VICP was created by the National Childhood Vaccine Injury Act of 1986. It is a no-fault system, which means you do not have to prove anyone was negligent.

A few things to know:
- It covers medical expenses, lost wages, pain and suffering, and death benefits
- The statute of limitations is three years from the first symptom
- Cases are filed in the [U.S. Court of Federal Claims](https://www.uscfc.uscourts.gov/vaccine-claims-office-special-masters), regardless of state
- You generally have to file here before pursuing traditional litigation

## Where Utah law can come in

Utah state law may apply in narrower situations.

Utah follows a modified comparative negligence standard, which can affect cases that move beyond the federal system. And if a claim involves negligent administration of the vaccine itself, Utah's medical malpractice statute of limitations (two years from discovery) may apply.

## Why local matters even in federal cases

VICP cases are filed in Washington, D.C., not Salt Lake City. So why does it help to have someone local?

A few reasons come up over and over:
- Familiarity with how Utah providers document treatment
- Working relationships with regional medical experts
- Knowing the major systems like Intermountain Healthcare and the University of Utah Hospital
- Better access to specialists who can evaluate complex injuries

This matters especially when records come from rural clinics, smaller facilities, or tribal health services, where documentation can be less detailed than these cases need.

## Common injuries in Utah cases

### SIRVA

Shoulder injury related to vaccine administration is one of the most common claims. It usually happens when a vaccine is injected too high on the arm, leading to inflammation, persistent pain, and limited range of motion.

People often need physical therapy. In some cases, surgery.

### Neurological complications

Rarer but more serious. Examples include:
- Guillain-Barré Syndrome after a flu vaccine
- Seizure disorders after certain childhood vaccines
- Encephalitis in rare cases

### Severe allergic reactions

Anaphylaxis is uncommon, but when it happens it can mean emergency care, ongoing monitoring, and concerns about future vaccinations.

## How a Utah vaccine injury case usually moves

A qualified attorney will start with the basics:
- Reviewing vaccination records, treatment notes, and expert opinions
- Building a timeline that connects the vaccine and the symptom onset
- Calculating medical expenses, lost wages, and pain and suffering

From there, the case moves through the federal VICP process: petition, discovery, expert work, and either settlement or a hearing before a Special Master.

If the VICP does not result in adequate compensation, a state court action may be possible in narrow cases — for example, if a manufacturer failed to warn about a known risk or a provider was negligent in administering the vaccine.

## What to look for in an attorney

This is a niche field. Many personal injury lawyers, even good ones, have never filed a VICP petition.

Reasonable questions to bring to a first call:
- How many vaccine injury cases have you handled?
- What is your experience with VICP claims specifically?
- How do you handle expert witnesses?
- How do attorney fees and case expenses work?
- What kind of timeline should I expect?

Note on fees: in most successful VICP cases, reasonable attorney fees and costs are paid through the program. You should not be paying a large retainer up front for a VICP petition.

## Why timing matters

The three-year deadline runs from the first symptom, not from when you realize the vaccine caused the issue. Waiting often costs people the case before it ever gets reviewed.

Early legal involvement also helps preserve evidence. Records get pulled before they get harder to find. Witnesses are easier to talk to while events are recent. Expert evaluations can happen while the condition is current.

## Bottom line

Most Utah vaccine injury cases run through the same federal program as cases anywhere else. But having representation that knows the local medical landscape, the records environment, and the relevant experts can make the case stronger.

If you think you may have a claim, the most important step is talking to someone before the filing deadline passes.
    `.trim(),
  },
  {
    slug: "hpv-vaccine-vicp-coverage",
    title: "Is the HPV Vaccine (Gardasil) Covered by the VICP?",
    excerpt:
      "Yes. HRSA lists human papillomavirus (HPV) vaccines as covered by the VICP. Learn which Vaccine Injury Table conditions apply, what happens if your injury isn't on the Table, and which records to gather.",
    date: "October 2026",
    datePublished: "2026-10-05",
    lastReviewed: "2026-10-06",
    category: "Compensation Programs",
    sources: [S.hrsaCoveredVaccines, S.injuryTable, S.hrsaWhoCanFile, S.cdcFainting, S.vaers],
    content: `
The HPV vaccine is usually given to preteens, but many teens and adults get it too. If you or your child had a serious reaction after an HPV shot, one of the first questions is whether the federal vaccine compensation program even applies.

The short answer is yes. The Health Resources and Services Administration (HRSA), which runs the National Vaccine Injury Compensation Program (VICP), lists human papillomavirus vaccines as [covered vaccines](https://www.hrsa.gov/vaccine-compensation/covered-vaccines). That means a serious injury after an HPV shot may be eligible for a VICP claim, as long as the other program requirements are met.

This guide explains what the coverage means in plain English, which conditions are on the federal Vaccine Injury Table for HPV vaccines, what happens if an injury isn't on the Table, and what records tend to matter. It is general education, not medical or legal advice.

## What "covered" means

A vaccine is covered by the VICP when the CDC recommends that category of vaccine for routine use in children or pregnant women and Congress has placed a federal excise tax on it. HPV vaccines meet both requirements, and HRSA includes "Human papillomavirus (e.g., HPV)" on its covered vaccines list.

Being covered does not mean every claim is accepted. It means the VICP is the right place for the claim to start. A claim still has to show a qualifying injury, meet the severity requirement, and be filed on time.

One detail matters for adults. HRSA says the Table's presumptions apply even if a covered vaccine was given "off-label" or outside CDC recommendations. So an adult who got an HPV shot is not automatically shut out just because the vaccine is mostly recommended for younger people.

## Vaccine Injury Table conditions for HPV vaccines

The Vaccine Injury Table lists specific conditions and time windows for each covered vaccine. If a listed condition meets the Table's definition and the first symptom shows up inside the listed window, the law presumes the vaccine caused it, unless another cause is shown.

For HPV vaccines, the Table currently lists three conditions:

| Condition | First symptom must appear within |
|---|---|
| Anaphylaxis | 4 hours |
| Shoulder injury related to vaccine administration (SIRVA) | 48 hours |
| Vasovagal syncope (fainting) | 1 hour |

HPV vaccines have been on the Table since February 1, 2007, according to the regulation.

### Anaphylaxis

Anaphylaxis is a sudden, severe allergic reaction involving two or more body systems. Under the Table, symptoms must begin within four hours of the shot. We cover it in more depth in our [anaphylaxis guide](/blog/anaphylaxis-after-vaccine-vicp).

### SIRVA

SIRVA is shoulder pain and limited motion that starts within 48 hours of a shot given in the upper arm. It is generally linked to how and where the injection was given, not to the vaccine ingredients. Our post on [what SIRVA is and whether it can qualify](/blog/what-is-sirva-and-can-it-qualify-for-compensation) walks through it in detail.

### Fainting (vasovagal syncope)

Fainting after injected vaccines is fairly common among teens, and it is usually harmless on its own. The Table includes it because a faint can lead to a fall and a real injury, like a head injury, a broken tooth, or a fracture.

Under the Table, the loss of consciousness must happen within one hour of the shot. The Table definition also excludes fainting caused by things like heart rhythm problems, seizures, or other neurological or metabolic conditions. If a child fainted after an HPV shot and was hurt in the fall, the records from that day can be important.

## What if the injury isn't on the Table?

Some people report health problems after an HPV vaccine that are not on the Table for this vaccine. That does not automatically rule out a claim.

The VICP also handles off-Table claims. In those cases, the person filing has to prove the vaccine caused the injury, usually with medical records and expert medical opinion. HRSA describes this directly: if an injury isn't on the Table, or doesn't meet the Table requirements, you must prove causation with evidence such as expert testimony, medical records, or medical opinion.

Off-Table claims are usually harder and take more medical evidence. Our explainer on [Table vs. off-Table injuries](/blog/difference-between-table-injury-and-off-table-injury) covers the difference.

## The basic VICP requirements still apply

Whether a claim is on or off the Table, the usual program rules still apply:

- Severity. In general, the effects must have lasted more than six months, or led to inpatient hospitalization and surgery, or resulted in death. See [what the severity requirements are](/blog/what-are-the-severity-requirements-for-a-vicp-claim).
- Deadlines. For an injury, a claim generally must be filed within three years of the first symptom. For a death, it is generally within two years of the death and within four years of the first symptom of the injury that led to it. See [how long you have to file](/blog/how-long-do-i-have-to-file-a-vaccine-injury-claim).
- Who can file. Parents or legal guardians usually file for minors. See [who can file a vaccine injury claim](/blog/who-can-file-a-vaccine-injury-claim).

Because HPV shots are often given in a series, people sometimes lose track of which dose came before the first symptom. Dates matter for both the Table windows and the filing deadline, so it helps to pin them down early.

## Records that often matter

If you think an HPV shot caused a serious problem, these records are often useful:

- The vaccination record, including the date, the arm, the dose number in the series, and the lot number if it's available
- Notes from the clinic or pharmacy visit, including any observation period afterward
- Emergency room, urgent care, or EMS records if there was a reaction, a faint, or a fall
- Follow-up records from your doctor, specialists, imaging, and physical therapy
- A simple timeline you write down yourself: when symptoms started, how they changed, and how they affect school, work, or daily life

Our guide to [the medical records you may need](/blog/what-medical-records-do-i-need-for-a-vaccine-injury-claim) goes deeper. Reporting the reaction to VAERS is separate from filing a claim; [this post explains the difference](/blog/should-i-report-my-vaccine-reaction-to-vaers).

## Can you sue the manufacturer directly?

For covered vaccines like HPV, federal law generally requires injury claims to go through the VICP first before any lawsuit against a vaccine maker or provider. The rules about what happens after that are technical, so this is a good question to bring to a lawyer who handles vaccine cases.

## When to talk with a vaccine injury lawyer

VICP claims are heard in the U.S. Court of Federal Claims, and the process has its own rules, deadlines, and medical evidence standards. Lawyers who focus on these cases know how the Table works and how off-Table claims are built.

The program may pay reasonable attorney fees and costs in many cases, including some that don't win, as long as the claim was filed in good faith with a reasonable basis. That's one reason people often talk with a lawyer before deciding whether to file. See [how to find a vaccine injury attorney](/blog/how-to-find-a-vaccine-injury-attorney).

## Bottom line

HPV vaccines are covered by the VICP. The Table lists anaphylaxis, SIRVA, and fainting with specific time windows. Other injuries may still be claimed off-Table, but they need stronger medical proof. Either way, the severity rule and filing deadlines apply.

Not sure where you stand? Our free eligibility review asks a few quick questions and can connect you with an independent attorney who handles vaccine injury claims. We are not a law firm and do not give legal advice. We help people understand their options and find the right help.

This article is for general education only and is not medical or legal advice.
    `.trim(),
  },
  {
    slug: "rsv-vaccine-vicp-coverage",
    title: "Is the RSV Vaccine Covered by the VICP?",
    excerpt:
      "As of HRSA’s covered-vaccines list (reviewed September 2026), RSV vaccines are not in the VICP. Learn what that means, how new vaccine categories get covered, and how CICP PREP Act declarations currently treat RSV.",
    date: "October 2026",
    datePublished: "2026-10-05",
    lastReviewed: "2026-10-06",
    category: "Compensation Programs",
    sources: [S.hrsaCoveredVaccines, S.hrsaVicpFaq, S.hrsaCicpCovered, S.hrsaCicpFiling, S.hrsaWhoCanFile, S.cdcRsv],
    content: `
RSV vaccines are newer options for older adults and, in some cases, for pregnant people. When someone has a serious problem after an RSV shot, a natural next question is whether the National Vaccine Injury Compensation Program (VICP) applies.

According to the Health Resources and Services Administration (HRSA) [covered-vaccines page](https://www.hrsa.gov/vaccine-compensation/covered-vaccines) (date last reviewed: September 2026), RSV vaccines are not listed among VICP-covered vaccine categories.

That answer matters because the VICP only covers vaccine categories that meet specific federal requirements and appear on HRSA’s covered list. This article explains that rule in plain English, how new categories get added, how that compares with another common “not covered” example (shingles), what official CICP materials currently say about PREP Act declarations, and what practical steps often help if you believe you were seriously hurt. It is educational information, not medical or legal advice.

## What HRSA’s covered list includes — and does not

HRSA’s National Vaccine Injury Compensation Program covers most vaccines routinely given in the United States. For a vaccine category to be covered, HRSA states that the Centers for Disease Control and Prevention (CDC) must recommend the category for routine administration to children or pregnant women, and it must be subject to an excise tax by federal law. The category must also be added to the VICP by the Secretary of Health and Human Services.

HRSA’s public covered-vaccines page lists categories such as diphtheria, Hib, hepatitis A and B, HPV, seasonal influenza, measles, mumps, meningococcal, pertussis, pneumococcal conjugate, polio, rotavirus, rubella, tetanus, and varicella (chickenpox). RSV does not appear on that list.

HRSA also notes explicitly that herpes zoster (shingles) vaccine is not a VICP-covered vaccine. RSV sits in a similar place from a coverage standpoint: it is a licensed, recommended product for certain groups, but it is not currently on the VICP covered-vaccines list.

So if the only shot in question is an RSV vaccine, a VICP petition is generally not the federal path described for covered vaccines. This is a coverage rule about which categories the program includes. It is not a statement that RSV vaccines never cause problems, or that every reaction after an RSV shot is unrelated to vaccination. Coverage and medical causation are different questions.

## RSV products people usually mean

For everyday context only (not a recommendation and not a side-effect catalog), CDC materials describe several FDA-licensed RSV vaccines used in the United States, including:

- Abrysvo (Pfizer)
- Arexvy (GSK)
- mResvia (Moderna)

CDC recommends RSV vaccination for certain adults (including all adults ages 75 and older, and adults ages 50–74 at increased risk of severe RSV). CDC also recommends a single dose of maternal Abrysvo for pregnant people at 32 through 36 weeks’ gestation during seasonal windows, to help protect infants. Arexvy and mResvia are not approved for use during pregnancy.

Separately, CDC discusses RSV monoclonal antibodies given to infants (for example, products used after birth). Those are antibody immunizations, not the adult/maternal RSV vaccines named above. Program coverage questions still turn on official VICP and CICP materials for the specific product involved — not on brand familiarity alone.

Product names on a vaccination record matter. If you are unsure which product you received, ask the clinic or pharmacy for the vaccine name and, if available, the lot number.

## How a new vaccine category gets into the VICP

HRSA’s FAQ explains that coverage depends on whether the vaccine falls within a category already covered:

- If a new product is in a category already covered (for example, a new hepatitis B vaccine), it is generally already covered under that category.
- If the product is in a category not covered (HRSA’s example is yellow fever), it is not covered until the general category becomes covered.

For a category of vaccines to be covered, HRSA states that the category must be:

1. Recommended by the CDC for routine administration to children or pregnant women,
2. Subject to a federal excise tax, and
3. Added to the VICP by the Secretary of Health and Human Services.

Maternal Abrysvo is recommended by CDC for routine use in pregnancy. That is one of the three conditions HRSA describes — but recommendation alone is not enough. Until a category meets the full set of requirements and appears on HRSA’s covered list, it is not a VICP-covered vaccine. As of the September 2026 review of HRSA’s covered-vaccines page, RSV is still not listed.

Coverage rules can change over time if federal requirements are met and the Secretary adds a category. Anyone checking eligibility should look at the current HRSA covered-vaccines page rather than assuming yesterday’s list still applies.

## What about the CICP?

The Countermeasures Injury Compensation Program (CICP) is a different federal program from the VICP. It covers certain “countermeasures” identified in declarations under the Public Readiness and Emergency Preparedness Act (PREP Act) — products used against declared public health emergencies or security threats.

HRSA’s CICP covered-countermeasures page (date last reviewed: June 2026) lists PREP Act declarations for medical countermeasures against:

- Acute Radiation Syndrome
- Anthrax
- Botulinum toxin
- COVID-19
- Ebola
- Hantavirus
- Marburg
- Nerve agents and certain insecticides
- Pandemic influenza
- Smallpox and other orthopoxviruses (for example, mpox)
- Zika

RSV is not among those listed declarations. On the materials HRSA publishes for the public, RSV vaccines are therefore not shown as CICP-covered countermeasures the way COVID-19 vaccines are.

Be precise about what that means: official pages do not currently put routine RSV vaccines (Abrysvo, Arexvy, mResvia) on the VICP covered list or on the CICP PREP Act declaration list HRSA summarizes. If a declaration or coverage rule changed after those review dates, the live HRSA pages would be the place to confirm. This article does not invent a pathway that those pages do not describe.

COVID-19 vaccines remain the common example of products handled under the CICP rather than the VICP. That contrast is useful — and it does not, by itself, place RSV into the CICP.

## What this means if you were seriously hurt after an RSV shot

If your only vaccination at issue is an RSV vaccine, do not assume a VICP petition is available. HRSA’s covered-vaccine list is the starting point. Based on current public HRSA materials, do not assume a CICP claim is available either.

That does not mean you have no options, and it does not mean you should ignore symptoms. It means the pathway may be different from the federal no-fault petition process many vaccine-injury articles describe for covered shots.

A few practical points:

- Get medical care first. Serious or worsening symptoms deserve prompt evaluation. Tell clinicians what vaccine you received and when symptoms began, and ask that the timeline be recorded clearly.
- Keep the vaccination record. Product name, date, location, and lot number (if available) help sort out which program — if any — might apply, and help a lawyer review the facts accurately.
- Do not mix up programs. The VICP covers listed routine vaccine categories. The CICP covers certain PREP Act countermeasures such as COVID-19 vaccines. RSV vaccines are not on HRSA’s VICP covered list; they also do not appear on HRSA’s summary list of CICP PREP Act declaration categories.
- If more than one shot was given. Write down each product and date. Coverage can differ shot by shot. For example, a seasonal flu vaccine is generally VICP-covered, while an RSV vaccine given the same day is not on the VICP list. HRSA notes in other contexts that when both a VICP-covered vaccine and a CICP-covered countermeasure are involved, a person may be able to explore either program or both, depending on the facts — but that still depends on which products were actually given.
- Talk with someone who knows this area. Vaccine injury and product-liability questions are specialized. An eligibility conversation with a lawyer who handles these cases can help you understand what does and does not fit — without you having to decode federal coverage charts alone.

## Soft checklist if you are sorting this out

1. Confirm the exact vaccine name on your record (Abrysvo, Arexvy, mResvia, or another product).
2. Note the date of vaccination and when symptoms first appeared.
3. Gather related medical records and a simple symptom timeline.
4. Ask a clinician about ongoing care needs.
5. If the injury was serious or lasting, consider a free eligibility review with counsel familiar with vaccine-related claims so you can learn whether any compensation pathway fits your facts.

Deadlines matter in federal programs that do apply. For VICP injury petitions involving covered vaccines, HRSA materials state that petitions generally must be filed within three years after the first symptom or significant aggravation of the injury. Death claims follow different timing rules. For the CICP, HRSA states that a Request for Benefits generally must be filed within one year of receiving or using the countermeasure. Those clocks are not a substitute for advice about an RSV-only case; they are a reminder that waiting can close doors when a covered product is involved.

Reporting a reaction to VAERS (the Vaccine Adverse Event Reporting System) can help public health monitoring. It does not start a VICP or CICP claim, and it does not stop filing clocks on programs that apply.

## A calm next step

No — according to HRSA’s covered-vaccines list as reviewed in September 2026, RSV vaccines are not covered by the VICP. HRSA’s public CICP materials also do not list RSV among current PREP Act declaration categories. Shingles vaccines are another well-known example of products HRSA states are outside the VICP. If you believe you were seriously injured after an RSV shot, focus on medical care, accurate records, and getting case-specific guidance rather than assuming either federal no-fault program automatically applies.

VaccineInjuries.org is not a law firm and does not represent clients. The site exists to help people understand these programs in plain English and, when appropriate, connect with lawyers who handle vaccine injury cases.

If you want help sorting whether your situation may fit any available path, you can use the free eligibility review on VaccineInjuries.org. There is no obligation to move forward before you are ready.

## Disclaimer

This article is for informational purposes only and is not legal or medical advice. Vaccine injury claims involve specific rules, programs, and deadlines that depend on the facts of each case. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney. For medical concerns, contact a licensed clinician or emergency services.
    `.trim(),
  },
  {
    slug: "anaphylaxis-after-vaccine-vicp",
    title: "Anaphylaxis After a Vaccine: What the VICP Table Says",
    excerpt:
      "Anaphylaxis is listed on the federal Vaccine Injury Table for many covered vaccines, with a short onset window. Learn what that means for VICP claims, records to keep, and how COVID-19 claims differ.",
    date: "October 2026",
    datePublished: "2026-10-05",
    lastReviewed: "2026-10-06",
    category: "Qualifying Injuries",
    sources: [S.injuryTable, S.hrsaCoveredVaccines, S.hrsaWhoCanFile, S.hrsaCicpVsVicp, S.medlineAnaphylaxis, S.vaers],
    content: `
A severe allergic reaction after a shot is frightening. Most vaccine side effects are mild. Anaphylaxis is different: it is a sudden, whole-body emergency that needs immediate medical care.

This article explains, in plain English, how anaphylaxis appears on the federal Vaccine Injury Table, what the National Vaccine Injury Compensation Program (VICP) generally looks for, which program usually applies to COVID-19 vaccines, and which documents often matter most. It is educational information, not medical or legal advice. Only a clinician can diagnose anaphylaxis.

## What anaphylaxis means in everyday terms

Anaphylaxis is an acute, severe allergic reaction. It can involve breathing problems, swelling of the throat or airway, a sharp drop in blood pressure, hives or widespread skin changes, and other signs that more than one body system is affected at once. It usually starts minutes to a few hours after exposure to a trigger.

If you or someone with you may be having anaphylaxis, treat it as an emergency. Call emergency services and follow medical guidance. Compensation programs come later; safety comes first.

## How the Vaccine Injury Table treats anaphylaxis

The [Vaccine Injury Table](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3) is a federal list of certain vaccines and associated injuries. When Table requirements are met — including the listed time window for first symptoms and the Table’s clinical definition — causation may be presumed unless another cause is proven.

For many vaccines covered by the VICP, anaphylaxis is listed with a first-symptom onset of 4 hours or less after vaccination. The Health Resources and Services Administration (HRSA) uses a similar example in its program materials: a severe allergic reaction (anaphylaxis) within four hours after a tetanus vaccine, when the Table’s definition is met and no other cause is proven, may receive that presumption.

The Table’s Qualification and Aids to Interpretation describe anaphylaxis as an acute, severe, and potentially lethal systemic reaction that occurs as a single discrete event with simultaneous involvement of two or more organ systems. Signs and symptoms begin minutes to a few hours after exposure. There are no specific pathological findings that alone confirm the diagnosis; the medical record and clinical picture drive the analysis.

Meeting a Table listing is not automatic compensation. The injury still has to fit the definition and other program rules, and petitions are decided through the U.S. Court of Federal Claims process.

## Table injury vs. off-Table claim

If anaphylaxis is on the Table for the vaccine you received, symptoms started within the listed window, and the clinical definition is satisfied, the Table’s presumption can simplify the causation question. That does not mean every severe reaction is a Table case, and it does not guarantee an award.

If the timing falls outside the Table window, the vaccine is not covered by the VICP, or the facts do not meet the Table definition, a claim may still be possible in some situations as an “off-Table” petition. Those usually require stronger medical proof that the vaccine caused the injury. Program rules and deadlines still apply either way.

## Seriousness thresholds still apply

Not every uncomfortable reaction after a vaccine is what these programs are designed to address. Under the VICP, a petition generally must involve an injury that:

- lasted more than six months after the vaccination; or
- resulted in inpatient hospitalization and surgical intervention; or
- resulted in death.

A brief scare that fully resolved may not meet those thresholds even when the experience felt severe in the moment. Hospital records, follow-up notes, and how long symptoms persisted are often central to that question. Only the facts of a specific case — reviewed under program rules — determine eligibility.

## COVID-19 vaccines usually follow a different path

COVID-19 vaccines are generally handled under the Countermeasures Injury Compensation Program (CICP), not the VICP. If the reaction followed a COVID-19 vaccine or another covered countermeasure, the filing path, standards, and deadlines are different from a typical VICP Table claim.

If someone received both a VICP-covered vaccine (for example, a seasonal flu shot) and a COVID-19 vaccine around the same time, HRSA notes that a person may be able to file with either program or both, depending on the facts. Eligibility for compensation under either program still depends on the specifics of the claim.

## Deadlines and VAERS are not the same thing

For a VICP injury petition, the usual filing window is three years after the first symptom or manifestation of onset (or significant aggravation) of the injury. Death claims follow different timing rules.

You do not have to file the same day as the reaction. But vaccination time, onset time, and emergency-visit timestamps are the anchors that show whether a Table window and a filing deadline may still be open. Missing a filing deadline can bar a claim even when the injury was serious.

Reporting a reaction to VAERS (the Vaccine Adverse Event Reporting System) can help public health monitoring. It does not start a VICP or CICP claim, and it does not stop the clock on filing deadlines.

## Records that often help after a severe reaction

Helpful materials often include:

- Vaccination record (date, time if available, product name, clinic or pharmacy, lot number if available)
- Emergency department and ambulance records from the day of the reaction
- Hospital admission or observation notes, discharge summaries, and medication lists (including epinephrine if given)
- Follow-up visits with allergy, primary care, or other specialists
- A simple timeline: when the shot was given, when symptoms started, and how they changed

Ask for copies while events are fresh. It is usually easier than reconstructing a file months later.

## A calm next step

Anaphylaxis after vaccination is uncommon, but when it happens, people deserve clear information about federal options. For many VICP-covered vaccines, anaphylaxis appears on the Vaccine Injury Table with a short onset window. COVID-19 vaccine claims usually go through the CICP instead. Records, timing, and seriousness rules matter in every case.

VaccineInjuries.org is not a law firm and does not represent clients. The site exists to help people understand these programs in plain English and, when appropriate, connect with lawyers who handle vaccine injury cases.

If you want help sorting whether your situation may fit a federal program, you can use the free eligibility review on VaccineInjuries.org. There is no obligation to move forward before you are ready.

## Disclaimer

This article is for informational purposes only and is not legal or medical advice. Vaccine injury claims involve specific rules, programs, and deadlines that depend on the facts of each case. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney. For medical concerns, contact a licensed clinician or emergency services.
    `.trim(),
  },
  {
    slug: "brachial-neuritis-vaccine-injury",
    title: "What Is Brachial Neuritis After a Vaccine?",
    excerpt:
      "Brachial neuritis is a Vaccine Injury Table condition for some tetanus-toxoid vaccines. Learn how it differs from SIRVA, the Table timing window, and what records often matter.",
    date: "October 2026",
    datePublished: "2026-10-05",
    lastReviewed: "2026-10-06",
    category: "Qualifying Injuries",
    sources: [S.injuryTable, S.hrsaCoveredVaccines, S.hrsaWhoCanFile, S.medlineBrachial],
    content: `
Shoulder and arm pain after a shot are common. Most of the time that discomfort is mild and short-lived. Brachial neuritis is different. It refers to a problem in the network of nerves that supply the shoulder and arm — not just soreness at the injection site.

This guide explains, in plain English, what brachial neuritis means under the federal Vaccine Injury Table, which vaccines list it as a Table condition, how it differs from shoulder injury related to vaccine administration (SIRVA), and what practical steps often help if you are dealing with serious arm or shoulder symptoms after vaccination. It is educational information, not medical or legal advice.

## What brachial neuritis means

Brachial neuritis (sometimes discussed with terms such as brachial plexopathy) involves dysfunction of the upper-extremity nerve plexus — the trunks, divisions, or cords that carry signals to the shoulder and arm.

According to the federal Vaccine Injury Table’s qualifications and aids to interpretation ([42 CFR § 100.3](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3)), onset often involves a deep, steady, often severe aching pain in the shoulder and upper arm. That pain is typically followed in days or weeks by weakness in muscles of the affected arm. Sensory loss may occur, but motor weakness is usually the more prominent feature. Muscle atrophy can develop later. The problem may appear on the same side as the injection, on the opposite side, or on both sides.

That last point matters. Unlike some other post-vaccine shoulder problems, Table brachial neuritis is not limited to the arm that received the shot.

## When it appears on the Vaccine Injury Table

The Vaccine Injury Table is a federal list of certain vaccines and associated injuries. When Table requirements are met — including the listed time window and the Table’s clinical definition — causation may be presumed unless another cause is proven. Claims that do not meet Table criteria may still be pursued in some cases as “off-Table” claims, but those typically require proof that the vaccine caused the injury.

Under the current Table, brachial neuritis is listed for vaccines containing tetanus toxoid, such as DTaP, DTP, DT, Td, or TT.

The Table time period for first symptom or manifestation of onset (or significant aggravation) is not less than 2 days and not more than 28 days after vaccination.

In other words, for Table purposes the presenting pain window starts after the first day and runs through day 28. Timing that falls outside that window does not automatically end every possible claim, but it usually means the case would not qualify as a Table brachial neuritis injury and would need a different theory of proof.

## What the Table definition requires

The Table does more than name the condition and set a clock. It also sets clinical criteria. Under 42 CFR § 100.3, a vaccine recipient is considered to have suffered brachial neuritis as a Table injury if all of the following are shown:

- Pain in the affected arm and shoulder is a presenting symptom and occurs within the specified time-frame
- Weakness is present, with rules that depend on how the weakness is distributed and whether nerve studies were done
- Motor, sensory, and reflex findings — and nerve conduction study (NCS) and electromyography (EMG) results if performed — are consistent with dysfunction attributable to the brachial plexus
- No other condition or abnormality explains the symptoms

On the weakness rules specifically: if there are no NCS/EMG studies, a clinical diagnosis requires weakness in muscles supplied by more than one peripheral nerve. If weakness is limited to muscles supplied by a single peripheral nerve, NCS and EMG studies that localize the injury to the brachial plexus are required before the diagnosis can be made for Table purposes.

You do not need to memorize these rules on your own. The practical takeaway is that detailed exam notes and, when ordered, nerve studies can matter a great deal.

## How brachial neuritis differs from SIRVA

People often search for “shoulder pain after a vaccine” and find information about [SIRVA](/blog/what-is-sirva-and-can-it-qualify-for-compensation). The two conditions are not the same.

SIRVA is framed on the Table as a musculoskeletal injury related to intramuscular vaccine administration in the upper arm — involving structures such as tendons, ligaments, or bursae. Table SIRVA criteria include pain within 48 hours, pain and reduced range of motion limited to the shoulder that received the injection, and no other explaining condition. The Table definition also states that SIRVA is not a neurological injury, and that abnormalities on neurological examination or NCS/EMG would not support SIRVA as a diagnosis.

Brachial neuritis, by contrast, is a neurological injury involving the brachial plexus. Its Table window for tetanus-toxoid vaccines is 2–28 days, and it can affect the same side, the opposite side, or both sides. The Table’s SIRVA definition even lists brachial neuritis among examples of other conditions that would explain symptoms and therefore cut against a SIRVA Table finding.

If you have shoulder or arm pain after a vaccine, do not assume the label yourself. Tell your clinicians the vaccination date, which vaccine you received if you know it, when pain started, whether weakness appeared, and which arm is affected. Accurate records help whoever later reviews the case sort among possible explanations.

## Serious reactions are uncommon — but documentation still helps

Most people who receive tetanus-toxoid vaccines do not develop brachial neuritis. Serious problems after vaccination are uncommon. When symptoms are severe, lasting, or include weakness, the sensible first step is medical care — not online self-diagnosis.

Helpful early steps often include:

- Seeking evaluation promptly and describing the vaccination date and symptom timeline clearly
- Asking that onset timing and weakness findings be noted in the chart
- Keeping the vaccine record (product name, date, location, lot number if available)
- Saving visit summaries, specialist notes, imaging, and any NCS/EMG reports
- Writing a simple dated symptom log (pain location, weakness, sensory changes, work or activity limits)

Reporting a reaction to VAERS (the Vaccine Adverse Event Reporting System) can create a dated safety report. It does not start a VICP claim or preserve filing deadlines.

## How this fits into the VICP

The National Vaccine Injury Compensation Program (VICP) is a federal no-fault program. Many routinely recommended vaccines that are subject to a federal excise tax — including tetanus-toxoid vaccines — are covered under the VICP when other program rules are met.

Petitions are filed with the U.S. Court of Federal Claims. According to HRSA, an injury petition generally must be filed within three years after the first symptom or manifestation of onset (or significant aggravation) of the injury. Death claims have different timing rules. Missing a deadline can bar a claim even if the injury was serious.

You do not have to decide in the first week whether your case is “Table” or “off-Table.” Focus on care, clear records, and the dates that may affect filing windows. COVID-19 vaccine claims are generally handled under the Countermeasures Injury Compensation Program (CICP), which is a different program with different rules.

## When it may make sense to talk with a specialized attorney

Vaccine injury law is specialized. Most personal injury lawyers do not regularly handle VICP matters.

It may make sense to speak with an experienced attorney if you have lasting pain and weakness after a tetanus-toxoid vaccine, nerve studies or specialist notes raise brachial plexus concerns, you are unsure whether your symptoms sound more like SIRVA or a neurological injury, you are approaching a possible filing deadline, or you missed significant work or medical expenses.

An early conversation does not mean you must file immediately. It can simply help you understand whether your situation may fit the VICP and what records still need to be gathered.

VaccineInjuries.org is not a law firm and does not represent clients. The site exists to help people understand options in plain English and, when appropriate, connect with lawyers who handle these cases.

## A calm next step

If you are dealing with serious shoulder or arm symptoms after a vaccine — especially weakness that developed days to a few weeks later — start with medical care and clear documentation of the timeline. Keep your vaccine record and any nerve-study results together.

When you are ready, you can use the free eligibility review on VaccineInjuries.org to better understand whether your situation may fit federal compensation programs and, if appropriate, get connected to legal help. There is no obligation to move forward before you are ready.

## Disclaimer

This article is for informational purposes only and is not legal advice. Vaccine injury claims involve specific rules, programs, and deadlines that depend on the facts of each case. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
  {
    slug: "tdap-td-vaccine-vicp-coverage",
    title: "Are Tdap and Td Vaccines Covered by the VICP?",
    excerpt:
      "HRSA covers Tdap, DTaP, Td, DT, and TT under the VICP. Learn which Vaccine Injury Table conditions may apply, how tetanus and pertussis categories differ, and what to do after a serious reaction.",
    date: "October 2026",
    datePublished: "2026-10-05",
    lastReviewed: "2026-10-06",
    category: "Compensation Programs",
    sources: [S.hrsaCoveredVaccines, S.injuryTable, S.hrsaWhoCanFile, S.hrsaVicpFaq, S.cdcVis],
    content: `
Tdap and Td shots are common for teens and adults — boosters, wound care, travel, and pregnancy. When someone has a serious problem afterward, a natural next question is whether the National Vaccine Injury Compensation Program (VICP) applies.

According to the Health Resources and Services Administration (HRSA), vaccines in the diphtheria, tetanus, and pertussis family — including Tdap, DTaP, DT, Td, and TT — are covered by the VICP when other eligibility rules are met.

This guide explains that coverage in plain English, which Vaccine Injury Table conditions often come up for these shots, how Table and off-Table claims differ at a high level, and what practical steps often help if you are sorting through a serious reaction. It is educational information, not medical or legal advice.

## What HRSA says about these vaccines

HRSA’s [covered-vaccines materials](https://www.hrsa.gov/vaccine-compensation/covered-vaccines) list:

- Diphtheria vaccines (examples include DTP, DTaP, Tdap, DT, Td, TT)
- Pertussis vaccines (examples include DTP, DTaP, Tdap)
- Tetanus vaccines (examples include Td)

So adult Tdap boosters, pregnancy Tdap, childhood DTaP series doses, and tetanus-containing products used for wound care generally sit inside the VICP coverage category when the product is one of these covered vaccines.

That is different from some adult-only products. For example, HRSA states that herpes zoster (shingles) vaccine is not covered by the VICP. COVID-19 vaccines are generally handled under the Countermeasures Injury Compensation Program (CICP), not the VICP.

If your record says Tdap, Td, DTaP, DT, or TT, the first coverage question usually points toward the VICP rather than assuming the program does not apply.

## Product names matter on your record

People often say “tetanus shot,” “whooping cough booster,” or “the pregnancy shot.” Clinics may use brand names as well. For sorting out coverage and Table categories, the antigen content on the vaccination record matters more than everyday nicknames.

Common labels you may see:

- Tdap — tetanus, diphtheria, and acellular pertussis (often used for adolescents, adults, and during pregnancy)
- Td — tetanus and diphtheria (often used as an adult booster)
- DTaP — diphtheria, tetanus, and acellular pertussis (primarily childhood series)
- DT — diphtheria and tetanus (used in some childhood situations)
- TT — tetanus toxoid

Ask the clinic or pharmacy for the vaccine name, date, and lot number if available. Keep the Vaccine Information Statement (VIS) and your card or electronic record. Those details help later if you explore compensation options.

## How the Vaccine Injury Table treats these shots

The Vaccine Injury Table lists certain injuries that, if the first symptom appears within a defined time window and the injury meets the Table’s definitions, are presumed to be caused by the vaccine unless another cause is proven. HRSA notes that this Table presumption can apply even when a covered vaccine was given “off-label” or contrary to CDC or Advisory Committee on Immunization Practices recommendations.

For these products, the Table is organized by antigen content. Two rows often matter:

### Vaccines containing tetanus toxoid

Examples in the Table include DTaP, DTP, DT, Td, and TT. Listed Table injuries and timing windows include:

- Anaphylaxis — first symptom within 4 hours
- Brachial neuritis — first symptom not less than 2 days and not more than 28 days after vaccination
- Shoulder Injury Related to Vaccine Administration (SIRVA) — first symptom within 48 hours
- Vasovagal syncope — first symptom within 1 hour

### Vaccines containing pertussis antigens

Examples in the Table include DTP, DTaP, and other pertussis-containing formulations. Listed Table injuries and timing windows include:

- Anaphylaxis — within 4 hours
- Encephalopathy or encephalitis — within 72 hours (with additional Table definitions that must be met)
- SIRVA — within 48 hours
- Vasovagal syncope — within 1 hour

A product like Tdap contains both tetanus toxoid and pertussis antigens. Depending on the injury and timing, more than one Table category may be relevant. A clinician’s diagnosis and the full medical record still matter; Table labels are not a do-it-yourself checklist.

## Table injury vs. off-Table injury

Not every serious problem after a Tdap or Td shot is on the Table, and not every problem that appears after vaccination is presumed to be vaccine-caused.

- Table injury: If the condition and timing match the Table (and the definitions in the regulations), causation is presumed unless another cause is proven.
- Off-Table injury: If the injury is not listed, or the timing or definition does not match, a petitioner generally must prove causation with evidence such as medical records, medical opinion, or expert testimony.

HRSA also explains that any acute complication or sequela (including death) of a listed Table condition can qualify as a Table injury in many situations, subject to the Table’s definitions and exclusions.

Coverage of the vaccine and proof of causation are different questions. Being covered by the VICP does not mean every claim succeeds. Missing the Table does not automatically mean a claim is impossible.

## Conditions people often ask about after these shots

A few Table concepts come up often in educational materials. This is not a diagnosis guide.

SIRVA involves shoulder pain and limited range of motion after an intramuscular upper-arm injection, with onset within the Table window and other definitional requirements. It is framed as a musculoskeletal injury related to administration, not as a neurological diagnosis. Our [SIRVA explainer](/blog/what-is-sirva-and-can-it-qualify-for-compensation) goes deeper.

Brachial neuritis is defined on the Table as dysfunction limited to the upper-extremity nerve plexus. Onset often involves deep aching pain in the shoulder and upper arm, followed by weakness. The Table definition includes specific clinical and (in some situations) nerve-study requirements, and it notes the problem can appear on the same side as the injection, the opposite side, or both sides. Our [brachial neuritis guide](/blog/brachial-neuritis-vaccine-injury) covers it in more detail.

Anaphylaxis on the Table means an acute, severe systemic reaction involving two or more organ systems, with onset in the short window after vaccination.

Vasovagal syncope means fainting related to a transient drop in blood flow to the brain after an injected vaccine, within one hour. It is usually brief, but falls can cause injury.

Encephalopathy or encephalitis after pertussis-containing vaccines has detailed Table definitions and exclusion criteria. Seizures alone, fussiness, or short-lived irritability do not automatically meet those definitions.

Only a clinician can diagnose these conditions. Timing alone is not proof. Other medical explanations may matter.

## What to do if you were seriously hurt after a Tdap or Td shot

1. Get medical care first. Serious, sudden, or worsening symptoms deserve prompt evaluation. Tell the clinician which vaccine you received (if you know), the date, and when symptoms began. Ask that the timeline be noted clearly.
2. Keep records. Save the vaccination record, VIS, appointment notes, imaging or nerve studies if done, work or school absences, and a simple symptom log.
3. Note other vaccines given the same day. Coverage and programs can differ by product. Seasonal flu shots are generally VICP-covered; COVID-19 vaccines usually fall under the CICP; shingles vaccines are not VICP-covered per HRSA.
4. Understand reporting vs. filing. Reporting a reaction to VAERS is not the same as filing a VICP petition. Both can matter for different reasons.
5. Watch deadlines. For VICP injury petitions involving covered vaccines, HRSA materials and related educational explainers commonly note that petitions generally must be filed within three years after the first symptom or significant aggravation of the injury. Death claims follow different timing rules. Missing a filing deadline can bar a claim entirely.
6. Consider a specialized eligibility conversation. Vaccine injury petitions are filed in the U.S. Court of Federal Claims. Most people use a lawyer. HRSA notes that the Court generally may award reasonable attorneys’ fees and costs when a petition is filed in good faith and has a reasonable basis — including, in many situations, even when compensation is not awarded to the petitioner. That fee structure is one reason an early eligibility review can be lower-risk than people expect.

## Soft checklist

1. Confirm the exact product on your record (Tdap, Td, DTaP, DT, TT, or something else).
2. Write down the vaccination date and the date symptoms first appeared.
3. Gather medical records and a short timeline.
4. Ask your clinician about ongoing care.
5. If the injury was serious or lasting, consider a free eligibility review so you can learn whether a VICP pathway may fit your facts.

## Bottom line

Yes — according to HRSA, Tdap, DTaP, Td, DT, TT, and related diphtheria/tetanus/pertussis vaccines are covered by the VICP when other program rules are met. The Vaccine Injury Table lists specific conditions and timing windows for tetanus-toxoid and pertussis-containing products, including anaphylaxis, brachial neuritis, SIRVA, vasovagal syncope, and (for pertussis-containing vaccines) encephalopathy or encephalitis under defined criteria. Off-Table claims may still be possible with proof. If you believe you were seriously injured after one of these shots, focus on medical care, accurate records, and timely guidance rather than waiting to see whether symptoms resolve on their own.

## About VaccineInjuries.org

VaccineInjuries.org is an educational resource for people trying to understand vaccine injury compensation programs and find help. We are not a law firm and do not provide legal advice. If you want to see whether connecting with a lawyer who handles these cases makes sense for your situation, you can start with a free eligibility review through our site.
    `.trim(),
  },
  {
    slug: "pneumococcal-vaccine-vicp-coverage",
    title: "Are Pneumococcal Vaccines Covered by the VICP?",
    excerpt:
      "HRSA covers pneumococcal conjugate (PCV) vaccines under the VICP, but not pneumococcal polysaccharide (PPSV/PPV) shots. Learn how to tell which you received and what to do next.",
    date: "October 2026",
    datePublished: "2026-10-05",
    lastReviewed: "2026-10-06",
    category: "Compensation Programs",
    sources: [S.hrsaCoveredVaccines, S.hrsaVicpFaq, S.hrsaWhoCanFile, S.injuryTable],
    content: `
Pneumococcal vaccines protect against infections caused by Streptococcus pneumoniae, including some forms of pneumonia, bloodstream infection, and meningitis. Adults and children get these shots for different reasons, and the brand names on a card can look similar.

If you were seriously hurt after a pneumococcal vaccine, one of the first practical questions is whether the National Vaccine Injury Compensation Program (VICP) applies. According to the Health Resources and Services Administration (HRSA), the answer depends on which type of pneumococcal vaccine you received.

This guide explains that distinction in plain English, how to check your record, and what to do next. It is educational information, not medical or legal advice.

## The short answer from HRSA

HRSA’s [covered-vaccines materials](https://www.hrsa.gov/vaccine-compensation/covered-vaccines) draw a clear line:

- Pneumococcal conjugate vaccines (often labeled PCV) are covered by the VICP when other eligibility rules are met.
- Pneumococcal polysaccharide vaccines (often labeled PPSV or PPV) are not covered by the VICP.

So “pneumococcal” or “pneumonia shot” on a discharge note is not enough by itself. Coverage turns on whether the product was a conjugate vaccine or a polysaccharide vaccine.

## Why the two types matter

In everyday conversation, people often lump all pneumococcal shots together. From a VICP standpoint, they are different categories.

HRSA’s FAQ explains the practical split this way:

- Pneumococcal conjugate vaccines (for example, products commonly abbreviated PCV) are the type that has been covered under the VICP. HRSA notes these vaccines have been covered since December 18, 1999, and they are routinely given to infants and young children. Adults may receive conjugate products as well, depending on age and medical history.
- Pneumococcal polysaccharide vaccines (for example, products commonly abbreviated PPSV or PPV, including the 23-valent polysaccharide vaccine often discussed for adults age 65 and older and for some people with higher-risk conditions) are not VICP-covered vaccines.

Product names, abbreviations, and lot numbers on the vaccination record are the reliable way to sort this out. Asking the clinic or pharmacy which exact product was given is often faster than guessing from memory.

## How coverage rules work in general

HRSA explains that for a vaccine category to be covered by the VICP, it generally must be:

1. Recommended by the Centers for Disease Control and Prevention (CDC) for routine administration to children or pregnant women, and
2. Subject to a federal excise tax, and
3. Added to the VICP by the Secretary of Health and Human Services.

That policy design helps explain why some adult vaccines sit outside the program even when related products are inside it. The same pattern shows up elsewhere on HRSA’s list: seasonal flu vaccines are covered, while herpes zoster (shingles) vaccines are not; COVID-19 vaccines are handled under the separate Countermeasures Injury Compensation Program (CICP), not the VICP.

For pneumococcal products, HRSA’s published distinction is specific: conjugate yes, polysaccharide no.

## What this means if you were seriously hurt

If your only vaccination at issue was a pneumococcal polysaccharide (PPSV/PPV) vaccine, do not assume a VICP petition is available. HRSA states that those products are not covered.

If you received a pneumococcal conjugate (PCV) vaccine and believe you were seriously injured, the VICP may be the federal program to look at — again depending on timing, severity, medical evidence, and other eligibility rules.

Coverage is not the same thing as causation. Being covered means the program’s pathway can apply. It does not mean every problem after a shot was caused by the vaccine, and it does not mean every covered case is compensated.

A few practical points:

- Get medical care first. Serious or worsening symptoms deserve prompt evaluation. Tell clinicians which vaccine you received and when symptoms began, and ask that the timeline be recorded clearly.
- Keep the vaccination record. Product name, date, location, and lot number (if available) help determine whether a conjugate or polysaccharide product was given.
- Do not mix up programs. The VICP covers many routine vaccines, including pneumococcal conjugate vaccines. The CICP covers certain countermeasures such as COVID-19 vaccines. Pneumococcal polysaccharide vaccines are not covered by the VICP according to HRSA.
- Talk with someone who knows this area. Vaccine injury questions are specialized. An eligibility conversation with a lawyer who handles these cases can help you understand what does and does not fit.

If you received more than one vaccine around the same time (for example, a pneumococcal shot and a seasonal flu shot), write down each product and date. Coverage can differ shot by shot. HRSA notes in related contexts that when both a VICP-covered vaccine and a CICP-covered countermeasure are involved, a person may be able to explore either program or both, depending on the facts — but that still depends on which products were actually given.

## Soft checklist if you are sorting this out

1. Confirm the exact vaccine name on your record (PCV / conjugate versus PPSV or PPV / polysaccharide).
2. Note the date of vaccination and when symptoms first appeared.
3. Gather related medical records and a simple symptom timeline.
4. Ask a clinician about ongoing care needs.
5. If the injury was serious or lasting, consider a free eligibility review with counsel familiar with vaccine-related claims so you can learn whether any compensation pathway fits your facts.

Deadlines matter in federal programs that do apply. For VICP injury petitions involving covered vaccines, HRSA states that petitions generally must be filed within three years after the first symptom or significant aggravation of the injury. Death claims follow different timing rules. Those clocks are a reminder that waiting can close doors when a covered vaccine is involved.

## Bottom line

It depends on the product. According to HRSA, pneumococcal conjugate (PCV) vaccines are covered by the VICP; pneumococcal polysaccharide (PPSV/PPV) vaccines are not. If you believe you were seriously injured after a pneumococcal shot, start with medical care, confirm which product you received, and get case-specific guidance rather than assuming every “pneumonia vaccine” follows the same path.

## About VaccineInjuries.org

VaccineInjuries.org is an educational resource for people trying to understand vaccine injury compensation programs and find help. We are not a law firm and do not provide legal advice. If you want to see whether connecting with a lawyer who handles these cases makes sense for your situation, you can start with a free eligibility review through our site.
    `.trim(),
  },
  {
    slug: "shingles-vaccine-vicp-coverage",
    title: "Is the Shingles Vaccine Covered by the VICP?",
    excerpt:
      "HRSA states herpes zoster (shingles) vaccines are not covered by the VICP. Learn how that differs from chickenpox (varicella) vaccines, why coverage rules work that way, and what to do if you were seriously hurt after a shot.",
    date: "October 2026",
    datePublished: "2026-10-05",
    lastReviewed: "2026-10-06",
    category: "Compensation Programs",
    sources: [S.hrsaCoveredVaccines, S.hrsaVicpFaq, S.hrsaWhoCanFile, S.hrsaCicp],
    content: `
Shingles vaccines are common for adults, especially people age 50 and older. When someone has a serious problem after a shingles shot, a natural next question is whether the National Vaccine Injury Compensation Program (VICP) applies.

According to the Health Resources and Services Administration (HRSA), herpes zoster (shingles) vaccine is not a VICP-covered vaccine.

That answer surprises many people, in part because chickenpox (varicella) vaccines are listed among covered vaccines. This guide explains the distinction in plain English, why the coverage line exists, what it does and does not mean for someone who was hurt, and what practical steps often help next. It is educational information, not medical or legal advice.

## What HRSA says about shingles vaccines

HRSA’s [covered-vaccines materials](https://www.hrsa.gov/vaccine-compensation/covered-vaccines) list many routinely given vaccines in the United States. Near the end of that list, HRSA notes that herpes zoster (shingles) vaccine is not covered by the VICP.

So if the only shot in question is a shingles (zoster) vaccine, the VICP is generally not the federal program that applies. Filing a VICP petition for a vaccine that is not covered is not a useful path.

This is a coverage rule about which vaccines the program includes. It is not a statement that shingles vaccines never cause problems, or that every reaction after a shingles shot is unrelated to vaccination. Coverage and medical causation are different questions.

## Why chickenpox coverage does not automatically include shingles

Varicella (chickenpox) vaccine — often abbreviated VAR — appears on HRSA’s list of covered vaccines. Shingles vaccine does not.

Both involve the varicella-zoster virus family in everyday conversation, which is why the labels get mixed up. From a VICP standpoint, they are treated as different vaccine categories:

- Varicella (chickenpox) vaccines are covered under the VICP when other eligibility rules are met.
- Herpes zoster (shingles) vaccines are not covered under the VICP, per HRSA.

Product names on a vaccination record matter. “Shingles,” “zoster,” “Shingrix,” or similar wording usually points to a zoster product. “Varicella,” “chickenpox,” or “VAR” points to a different category. If you are unsure which product you received, ask the clinic or pharmacy for the vaccine name and, if available, the lot number.

## Why some vaccines are in the VICP and others are not

HRSA explains that for a vaccine category to be covered by the VICP, it generally must be:

1. Recommended by the Centers for Disease Control and Prevention (CDC) for routine administration to children or pregnant women, and
2. Subject to a federal excise tax, and
3. Added to the VICP by the Secretary of Health and Human Services.

Shingles vaccines are primarily adult vaccines. They are not framed the same way as childhood or pregnancy-routine categories that sit at the center of VICP coverage. That policy design is a major reason zoster products sit outside the program even though related childhood varicella products are inside it.

Other common adults shots can still be covered when they fall into a covered category. Seasonal flu vaccines, for example, are covered by the VICP even when given to adults. COVID-19 vaccines are handled under a different program, the Countermeasures Injury Compensation Program (CICP), not the VICP.

## What this means if you were seriously hurt after a shingles shot

If your only vaccination at issue is a shingles vaccine, do not assume a VICP petition is available. HRSA’s covered-vaccine list is the starting point.

That does not mean you have no options, and it does not mean you should ignore symptoms. It means the pathway may be different from the VICP process many vaccine-injury articles describe.

A few practical points:

- Get medical care first. Serious or worsening symptoms deserve prompt evaluation. Tell clinicians what vaccine you received and when symptoms began, and ask that the timeline be recorded clearly.
- Keep the vaccination record. Product name, date, location, and lot number (if available) help sort out which program — if any — might apply.
- Do not mix up programs. The VICP covers many routine vaccines. The CICP covers certain countermeasures such as COVID-19 vaccines. Shingles vaccines are not covered by the VICP according to HRSA; whether any other pathway applies depends on the facts of your situation.
- Talk with someone who knows this area. Vaccine injury and product-liability questions are specialized. An eligibility conversation with a lawyer who handles these cases can help you understand what does and does not fit — without you having to decode federal coverage charts alone.

If you received more than one vaccine around the same time (for example, a shingles shot and a seasonal flu shot), write down each product and date. Coverage can differ shot by shot. HRSA notes in other contexts that when both a VICP-covered vaccine and a CICP-covered countermeasure are involved, a person may be able to explore either program or both, depending on the facts — but that still depends on which products were actually given.

## Soft checklist if you are sorting this out

1. Confirm the exact vaccine name on your record (zoster/shingles versus varicella/chickenpox versus something else).
2. Note the date of vaccination and when symptoms first appeared.
3. Gather related medical records and a simple symptom timeline.
4. Ask a clinician about ongoing care needs.
5. If the injury was serious or lasting, consider a free eligibility review with counsel familiar with vaccine-related claims so you can learn whether any compensation pathway fits your facts.

Deadlines matter in federal programs that do apply. For VICP injury petitions involving covered vaccines, HRSA states that petitions generally must be filed within three years after the first symptom or significant aggravation of the injury. Death claims follow different timing rules. Those VICP clocks are not a substitute for advice about a shingles-only case; they are a reminder that waiting can close doors when a covered vaccine is involved.

## Bottom line

No — according to HRSA, herpes zoster (shingles) vaccines are not covered by the VICP. Chickenpox (varicella) vaccines are covered; shingles vaccines are not. If you believe you were seriously injured after a shingles shot, focus on medical care, accurate records, and getting case-specific guidance rather than assuming the VICP petition process applies.

## About VaccineInjuries.org

VaccineInjuries.org is an educational resource for people trying to understand vaccine injury compensation programs and find help. We are not a law firm and do not provide legal advice. If you want to see whether connecting with a lawyer who handles these cases makes sense for your situation, you can start with a free eligibility review through our site.
    `.trim(),
  },
  {
    slug: "flu-shot-injury-vicp-compensation",
    title: "Can a Flu Shot Injury Qualify for VICP Compensation?",
    excerpt:
      "Seasonal flu vaccines are covered by the VICP. Learn which Vaccine Injury Table conditions may apply, how seasonal and pandemic flu shots differ, and what to do if you were seriously hurt after a flu shot.",
    date: "October 2026",
    datePublished: "2026-10-05",
    lastReviewed: "2026-10-06",
    category: "Compensation Programs",
    sources: [S.hrsaCoveredVaccines, S.injuryTable, S.hrsaWhoCanFile, S.hrsaCicp, S.cdcGbs],
    content: `
Most people who get a seasonal flu shot have only mild, short-lived side effects — a sore arm, low-grade fever, or feeling off for a day or two. Serious problems after vaccination are uncommon. When they do happen, people often wonder whether a federal compensation program might apply.

This guide explains, in plain English, how seasonal flu vaccines fit into the National Vaccine Injury Compensation Program (VICP), which conditions appear on the Vaccine Injury Table for flu vaccines, how seasonal flu coverage differs from pandemic or COVID-19 vaccines, and what practical steps often help if you are sorting through a serious reaction. It is educational information, not medical or legal advice.

## Seasonal flu vaccines are covered by the VICP

The VICP is a federal no-fault program. It covers most vaccines that the Centers for Disease Control and Prevention (CDC) recommends for routine administration to children or pregnant women and that are subject to a federal excise tax.

According to the Health Resources and Services Administration (HRSA), the VICP covers all seasonal influenza vaccines, including trivalent and quadrivalent formulations — the yearly flu shot most people receive in the fall and winter. Children and adults who receive a seasonal flu vaccine and believe they were seriously injured may file a petition with the VICP, even if a particular product is licensed only for adults.

That coverage is why flu-shot injury questions usually point first to the VICP rather than to a traditional lawsuit against a manufacturer or clinic.

## Seasonal flu is not the same as every “flu” or COVID vaccine

Not every vaccine with “influenza” or “flu” in the conversation is treated the same way.

HRSA states that the VICP covers seasonal influenza vaccines. It does not cover other non-seasonal influenza vaccines used in connection with a pandemic — for example, the monovalent H1N1 vaccine used during the 2009 outbreak. Some of those non-seasonal products may instead fall under the Countermeasures Injury Compensation Program (CICP).

COVID-19 vaccines are also generally handled under the CICP, not the VICP.

If someone received both a seasonal flu vaccine and a countermeasure vaccine around the same time and then had a serious injury, HRSA notes that a person may be able to file with either program or both, depending on the facts. Eligibility for compensation under either program still depends on the specifics of the claim.

The practical takeaway: write down which vaccine you received, the date, and where it was given. Product name and lot number (if available) help sort out which program may apply.

## What the Vaccine Injury Table lists for seasonal flu vaccines

The Vaccine Injury Table is a federal list of certain vaccines and associated injuries. When Table requirements are met — including the listed time window for first symptoms and the Table’s clinical definitions — causation may be presumed unless another cause is proven. That can make some cases easier to present than “off-Table” claims, which typically require proof that the vaccine caused the injury.

For seasonal influenza vaccines, the Table currently lists these conditions and onset windows (as set out in the federal [Vaccine Injury Table](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3)):

- Anaphylaxis — first symptom within 4 hours or less after vaccination
- Shoulder injury related to vaccine administration (SIRVA) — first symptom within 48 hours or less
- Vasovagal syncope (fainting related to the shot) — within 1 hour or less
- Guillain-Barré syndrome (GBS) — first symptom not less than 3 days and not more than 42 days after vaccination

Meeting a Table listing is not automatic compensation. The injury still has to fit the Table’s definitions and other program requirements, and the case is decided in the U.S. Court of Federal Claims process. Injuries that are not on the Table, or that fall outside the listed timing, may still be pursued in some situations as off-Table claims, but those usually need stronger medical proof of causation.

Mild soreness that resolves quickly is not what these programs are designed to address. The VICP has seriousness thresholds; not every post-shot discomfort is a compensable injury.

## Common situations people ask about after a flu shot

Shoulder pain that does not go away. SIRVA involves shoulder pain and limited range of motion after an intramuscular vaccine in the upper arm. It is treated as a musculoskeletal problem related to how the shot was administered into or around the shoulder structures, not as a neurological injury. Early medical notes that capture when pain started and how it limited movement matter a great deal.

Sudden progressive weakness weeks later. GBS is a rare neurological condition. It can follow infections and, in some contexts, appears in vaccine-injury discussions. For seasonal flu vaccines, the Table window for GBS is roughly 3 to 42 days after vaccination. Timing alone does not prove causation, and only a clinician can diagnose GBS. Progressive weakness needs prompt medical care. Our [Guillain-Barré syndrome guide](/blog/guillain-barre-vaccine-injury-claims) explains more.

A severe allergic reaction right after the shot. Anaphylaxis is a medical emergency. The Table lists a short onset window (within 4 hours). Emergency records and the vaccination timeline are the core documents.

None of these labels replace a doctor’s evaluation. The Table is a legal framework for certain petitions; it is not a self-diagnosis checklist.

## Deadlines still matter

Under the VICP, an injury petition generally must be filed within three years after the first symptom or manifestation of onset (or significant aggravation) of the injury. Death claims follow different timing rules.

You do not have to file the week after a flu shot. But vaccination date, symptom onset, and first medical visit dates are the anchors that determine how much time may remain. Missing a filing deadline can bar a claim even when the injury was serious.

Reporting a reaction to VAERS (the Vaccine Adverse Event Reporting System) can be useful for safety monitoring. It does not start a VICP claim or stop the clock on filing deadlines.

## What to gather if you are exploring options

Helpful materials often include:

- Vaccination record (date, product, clinic or pharmacy, lot number if available)
- Visit notes from the days and weeks after the shot
- Specialist records, imaging, labs, and hospital discharge summaries if any
- A simple timeline of when symptoms started and how they changed
- Work-absence or disability paperwork, if relevant

Ask for copies as you go. It is usually easier than reconstructing a file months later.

## A calm next step

Serious problems after a flu shot are uncommon, but when they happen, people deserve clear information about federal options. Seasonal flu vaccines are covered under the VICP. Some conditions appear on the Vaccine Injury Table with specific timing rules. Pandemic flu products and COVID-19 vaccines often follow different program paths.

VaccineInjuries.org is not a law firm and does not represent clients. The site exists to help people understand these programs in plain English and, when appropriate, connect with lawyers who handle vaccine injury cases.

If you want help sorting whether your situation may fit a federal program, you can use the free eligibility review on VaccineInjuries.org. There is no obligation to move forward before you are ready.

## Disclaimer

This article is for informational purposes only and is not legal advice. Vaccine injury claims involve specific rules, programs, and deadlines that depend on the facts of each case. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney.

    `.trim(),
  },
  {
    slug: "guillain-barre-vaccine-injury-claims",
    title: "Guillain-Barré Syndrome and Vaccine Injury Claims: A Plain-English Guide",
    excerpt:
      "A plain-English guide to Guillain-Barré syndrome (GBS) in vaccine injury discussions: what GBS is, how it may relate to VICP and the Vaccine Injury Table, documentation that often matters, and when to talk with specialized counsel.",
    date: "October 2026",
    datePublished: "2026-10-05",
    lastReviewed: "2026-10-06",
    category: "Qualifying Injuries",
    sources: [S.injuryTable, S.nindsGbs, S.cdcGbs, S.hrsaWhoCanFile, S.hrsaCicp],
    content: `
Guillain-Barré syndrome (often shortened to GBS) is a rare neurological condition. For many people, the first time they hear the name is after sudden weakness, tingling, or trouble walking — sometimes weeks after an illness or, in some cases, after a vaccination.

This guide covers what GBS is in plain English, why it comes up in vaccine injury discussions, how it may relate to VICP and Vaccine Injury Table concepts at a high level, what documentation often matters, and when to talk with specialized counsel. It is not medical or legal advice.

## What Guillain-Barré syndrome is

GBS is an autoimmune disorder that affects the peripheral nerves — the nerves outside the brain and spinal cord. The immune system mistakenly attacks the myelin sheath or the nerve fibers themselves. That interference can slow or block signals that control muscle movement and sensation.

Common early signs can include tingling or numbness in the feet or hands, progressive weakness in the legs or arms, difficulty walking, and, in more serious cases, trouble with breathing, swallowing, or facial muscles. Symptoms often worsen over days to weeks. Many people need hospital care; some require intensive monitoring or breathing support.

Most people with GBS improve over time with treatment and rehabilitation, though recovery can take months. Some have lasting weakness, fatigue, or pain. Severity varies widely.

Only a clinician can diagnose GBS. Workups often include a neurological exam and may involve nerve conduction studies, electromyography (EMG), or cerebrospinal fluid analysis. Sudden progressive weakness warrants prompt medical care.

## Why GBS comes up in vaccine injury conversations

GBS is rare. It can follow certain infections, and it has also been studied in connection with vaccination in some contexts. That is why it appears in public health literature and vaccine injury compensation discussions.

A few important caveats:

- Timing alone is not proof. Developing GBS after a vaccine does not automatically mean the vaccine caused it. Other triggers, including recent infections, may be relevant.
- No vaccine "always" causes GBS. Public discussion of a possible link for a given vaccine does not mean every case is vaccine-related, or that a claim will succeed.
- Programs have specific rules. Whether a GBS case may fit a federal compensation pathway depends on the vaccine, symptom timing, medical evidence, and which program applies.

GBS belongs in these conversations because it is a serious condition programs take seriously — not because every post-vaccination case is the same.

## How GBS may relate to the VICP and the Vaccine Injury Table

Many routinely recommended vaccines are covered under the National Vaccine Injury Compensation Program (VICP), a federal no-fault program. COVID-19 vaccine injury claims are generally handled under the Countermeasures Injury Compensation Program (CICP), which has its own rules and process.

Within the VICP, the Vaccine Injury Table lists certain injuries that may be presumed to be vaccine-related when specific timing and other Table requirements are met. Under the current [Vaccine Injury Table](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3), Guillain-Barré syndrome is listed for seasonal influenza vaccines, with a first symptom 3 to 42 days after vaccination and a detailed clinical definition that must be met. When Table criteria are met, the petitioner may not need to prove causation the same way as for a non-Table injury.

If a GBS case does not meet Table requirements — for example, timing outside the listed window, or a vaccine not listed for GBS that way — an "off-Table" claim may still be possible in some situations. Those cases typically require evidence that the vaccine more likely than not caused the injury.

You do not need to classify your own case. That analysis is fact-specific. The takeaway: GBS is a recognized category in these discussions, and framing can affect what proof matters most.

Filing deadlines also matter. Under the VICP, an injury petition generally must be filed within three years after the first symptom or manifestation of onset (or significant aggravation) of the injury. Death claims follow different timing rules. Missing a deadline can bar a claim even when the injury was serious. COVID-19 vaccine claims under the CICP follow separate procedures and deadlines.

## Documentation that often matters in GBS-related claims

Strong records help medical care first and any later compensation review second. People exploring a possible vaccine injury claim involving GBS often gather:

- Vaccination details — date, vaccine name or type, provider or pharmacy, and lot number if available
- Symptom timeline — when weakness, tingling, pain, or other neurological symptoms began, how they progressed, and when care was sought
- Hospital and specialist records — emergency visits, neurology notes, ICU records if applicable, and discharge summaries
- Diagnostic testing — nerve conduction studies, EMG reports, lumbar puncture / CSF results, imaging, and related lab work
- Treatment and rehab records — medications, intravenous immunoglobulin (IVIG) or plasma exchange if used, and therapy notes
- Functional impact — work absence, disability paperwork, assistive devices, and lasting limitations after the acute phase
- Other medical context — recent infections, illnesses, or other events around the same time, which clinicians often consider when evaluating GBS

Ask for copies as care unfolds. Contemporaneous notes — made close in time to events — are often more useful than reconstructions months later.

A [VAERS](https://vaers.hhs.gov/) report (Vaccine Adverse Event Reporting System) can create a dated safety record. It does not start a compensation claim, prove causation, or preserve VICP or CICP deadlines.

## When to talk with specialized counsel

Vaccine injury law is specialized. Most general personal injury lawyers do not regularly handle VICP or CICP matters.

It may make sense to speak with an experienced attorney if you or a loved one was diagnosed with GBS after a covered vaccination, symptoms were serious or lasting, you faced significant medical costs or lost income, you are unsure which program applies, or you are approaching a possible filing deadline.

An early conversation does not require you to file immediately. It can clarify whether your facts may fit a federal program, what records you still need, and how Table versus off-Table concepts might apply.

VaccineInjuries.org is not a law firm and does not represent clients. The site helps people understand options in plain English and, when appropriate, connect with lawyers who handle these cases.

## A calm next step

If GBS is part of your story after vaccination, start with care and records: follow your medical team's guidance, keep a clear timeline, and assemble vaccination and neurological records in one place. Note the dates that may affect filing windows.

When you are ready, you can use the free eligibility review on VaccineInjuries.org to better understand whether your situation may fit federal compensation programs and, if appropriate, get connected to legal help. There is no obligation to move forward before you are ready.

## Disclaimer

This article is for informational purposes only and is not legal or medical advice. Guillain-Barré syndrome requires individual medical evaluation. Vaccine injury claims involve specific rules, programs, and deadlines that depend on the facts of each case. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified clinician and, for legal questions, a qualified attorney.
    `.trim(),
  },
  {
    slug: "first-30-days-suspected-vaccine-injury",
    title: "What To Do in the First 30 Days After a Suspected Vaccine Injury",
    excerpt:
      "A practical guide to the first month after a suspected vaccine injury: getting care, documenting symptoms, keeping records, reporting vs. filing a claim, and when to talk with a lawyer.",
    date: "October 2026",
    datePublished: "2026-10-05",
    lastReviewed: "2026-10-06",
    category: "Claim Basics",
    sources: [S.vaersReport, S.hrsaWhoCanFile, S.hrsaCoveredVaccines, S.injuryTable, S.hrsaCicpFiling],
    content: `
If you think a vaccine caused a serious reaction, the first month can feel overwhelming. You may be dealing with pain, new symptoms, medical appointments, and a lot of unanswered questions.

You do not need to figure out every legal detail right away. But a few practical steps early on can protect your health and preserve information that may matter later.

This guide covers what many people find helpful in the first 30 days: getting care, documenting what happened, keeping records, understanding the difference between reporting and filing a claim, and knowing when it may make sense to talk with a lawyer who handles vaccine injury cases.

## Put medical care first

The most important step is to get appropriate medical attention.

If symptoms are severe, sudden, or worsening, seek care right away. Tell the clinician when you were vaccinated, which vaccine you received if you know it, and when symptoms began. Ask that the timeline be noted clearly in your chart.

Early visits do more than help you feel better. They also create contemporaneous records — notes made close in time to the event — that can be useful later if you explore compensation options.

Do not wait for certainty that the vaccine "caused" the problem before seeing a doctor. Your job in the first days is to get evaluated and treated, not to prove causation on your own.

## Write down your symptoms as they happen

Memory fades quickly when you are sick, stressed, or in pain. A simple symptom log can help.

In the first 30 days, try to note:

- The date and time symptoms started
- What you felt (pain, weakness, numbness, swelling, fever, rash, breathing issues, and so on)
- How severe the symptoms were and whether they changed
- What made them better or worse
- Any missed work, school, or daily activities

You do not need a formal template. A notebook, phone notes app, or dated emails to yourself can work. Dated photos of visible swelling, rash, or limited range of motion can also help.

Be factual. Stick to what you experienced and when.

## Keep vaccine and medical records together

Keep a copy of your vaccination record in one place. Helpful items often include the vaccine name and date, the clinic or pharmacy location, the lot number if available, and any after-visit summaries from related care.

If you do not have the record, request it from the provider who administered the vaccine or from your state immunization registry if applicable. Getting this early is usually easier than hunting for it months later.

Also start a folder — paper or digital — for visit summaries, specialist notes, imaging and lab results, medication lists, bills and receipts, and any work-absence paperwork. Ask for copies after each visit rather than waiting until you need a complete file.

## Consider reporting to VAERS — but know what it is not

VAERS is the [Vaccine Adverse Event Reporting System](https://vaers.hhs.gov/). It is a national safety monitoring system. Patients, parents, caregivers, and healthcare providers can submit reports.

Reporting a reaction to VAERS can be useful. It creates a dated record and contributes to safety monitoring. It does not, however:

- Start a compensation claim
- Prove the vaccine caused the injury
- Preserve filing deadlines under federal compensation programs

Think of VAERS as separate from the National Vaccine Injury Compensation Program (VICP) and the Countermeasures Injury Compensation Program (CICP). You can report to VAERS and still need to evaluate whether a compensation claim makes sense. A VAERS report alone is not a claim.

## Note deadlines early, even if you are not ready to file

Deadlines are one of the most important — and most overlooked — parts of vaccine injury compensation.

Under the VICP, an injury petition generally must be filed within three years after the first symptom or manifestation of onset (or significant aggravation) of the injury. Death claims have different timing rules. COVID-19 vaccine claims are generally handled under the CICP, which has its own procedures and deadlines.

You do not have to file in the first 30 days. But write down the vaccination date, when symptoms began, and when you first sought care. Those dates help you understand how much time may remain. Missing a filing deadline can bar a claim even if the injury was serious.

## Programs differ — and the Vaccine Injury Table matters

Many routinely recommended vaccines are covered under the VICP, a federal no-fault program. COVID-19 vaccine injury claims are generally handled under the CICP.

Within the VICP, the Vaccine Injury Table lists certain injuries that may be presumed to be caused by specific vaccines when timing and other Table requirements are met. Injuries that are not on the Table — or that do not meet Table timing — may still be pursued in some cases, but they typically require proof that the vaccine caused the injury.

You do not need to classify your case as "Table" or "off-Table" in the first month. Just know that the program and the nature of the injury can affect what evidence matters most.

## When to talk with a specialized attorney

Vaccine injury law is specialized. Most personal injury lawyers do not regularly handle VICP or CICP matters.

It may make sense to speak with an experienced attorney if symptoms were serious or lasting, you missed work or incurred significant medical costs, you are unsure which program applies, you are approaching a possible deadline, or a loved one died after a covered vaccination.

An early conversation does not mean you must file immediately. It can simply help you understand whether your situation may fit a federal program and what records still need to be gathered.

VaccineInjuries.org is not a law firm and does not represent clients. The site exists to help people understand options in plain English and, when appropriate, connect with lawyers who handle these cases.

## What you do not need to decide yet

In the first month, you usually do not need to prove causation on your own, estimate a dollar value for any claim, or file a petition before you have basic records and medical clarity.

Focus on care, documentation, and timelines. Legal decisions can follow once the immediate medical picture is clearer.

## A calm next step

If you are still sorting through what happened, start with the basics: get care, write down the timeline, keep vaccine and medical records, consider VAERS as a safety report (not a claim), and note the dates that may affect filing windows.

When you are ready, you can use the free eligibility review on VaccineInjuries.org to better understand whether your situation may fit federal compensation programs and, if appropriate, get connected to legal help. There is no obligation to move forward before you are ready.

## Disclaimer

This article is for informational purposes only and is not legal advice. Vaccine injury claims involve specific rules, programs, and deadlines that depend on the facts of each case. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
];
