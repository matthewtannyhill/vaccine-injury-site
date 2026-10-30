import { SOURCES as S, type Source } from "@/lib/sources";

export type BlogPost = {
  slug: string;
  /** H1, breadcrumb, and structured-data headline. */
  title: string;
  /**
   * Optional search-result <title>, rendered as-is without the site-name suffix. Keep under 60
   * characters and lead with the words people actually search (see Search Console).
   */
  seoTitle?: string;
  /** Meta description and post-card summary. Keep under 155 characters. */
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

If you believe a vaccine caused your injury, the first step is understanding your options. Submit your information free and we can connect you with an independent attorney.
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
4. Submit your information through our free form to be connected with an independent attorney who can evaluate your situation.

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

## Ready to Talk With an Attorney?

The best first step is to submit your information. We can connect you with an independent attorney who can evaluate whether your situation may fit a compensation program. It's free to submit, with no obligation.
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

Submit your information to get started — it's free, with no obligation.
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

We connect people who may have vaccine injury claims with experienced legal professionals. Submit your information for free, and we can connect you with an independent attorney who can evaluate your situation.
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

Not sure where you stand? Submit a few quick questions and we can connect you with an independent attorney who handles vaccine injury claims. We are not a law firm and do not give legal advice. We help people understand their options and find the right help.

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
- Talk with someone who knows this area. Vaccine injury and product-liability questions are specialized. A conversation with a lawyer who handles these cases can help you understand what does and does not fit — without you having to decode federal coverage charts alone.

## Soft checklist if you are sorting this out

1. Confirm the exact vaccine name on your record (Abrysvo, Arexvy, mResvia, or another product).
2. Note the date of vaccination and when symptoms first appeared.
3. Gather related medical records and a simple symptom timeline.
4. Ask a clinician about ongoing care needs.
5. If the injury was serious or lasting, consider talking with counsel familiar with vaccine-related claims so you can learn whether any compensation pathway fits your facts.

Deadlines matter in federal programs that do apply. For VICP injury petitions involving covered vaccines, HRSA materials state that petitions generally must be filed within three years after the first symptom or significant aggravation of the injury. Death claims follow different timing rules. For the CICP, HRSA states that a Request for Benefits generally must be filed within one year of receiving or using the countermeasure. Those clocks are not a substitute for advice about an RSV-only case; they are a reminder that waiting can close doors when a covered product is involved.

Reporting a reaction to VAERS (the Vaccine Adverse Event Reporting System) can help public health monitoring. It does not start a VICP or CICP claim, and it does not stop filing clocks on programs that apply.

## A calm next step

No — according to HRSA’s covered-vaccines list as reviewed in September 2026, RSV vaccines are not covered by the VICP. HRSA’s public CICP materials also do not list RSV among current PREP Act declaration categories. Shingles vaccines are another well-known example of products HRSA states are outside the VICP. If you believe you were seriously injured after an RSV shot, focus on medical care, accurate records, and getting case-specific guidance rather than assuming either federal no-fault program automatically applies.

VaccineInjuries.org is not a law firm and does not represent clients. The site exists to help people understand these programs in plain English and, when appropriate, connect with lawyers who handle vaccine injury cases.

If you want to talk with an independent attorney about whether your situation may fit any available path, you can submit your information for free on VaccineInjuries.org. There is no obligation to move forward before you are ready.

## Disclaimer

This article is for informational purposes only and is not legal or medical advice. Vaccine injury claims involve specific rules, programs, and deadlines that depend on the facts of each case. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney. For medical concerns, contact a licensed clinician or emergency services.
    `.trim(),
  },
  {
    slug: "anaphylaxis-after-vaccine-vicp",
    title: "Anaphylaxis After a Vaccine: What the VICP Table Says",
    seoTitle: "Anaphylaxis After a Vaccine: The 4-Hour VICP Table Rule",
    excerpt:
      "Severe allergic reaction after a shot? Anaphylaxis within 4 hours is on the Vaccine Injury Table for many covered vaccines. See the rules and records.",
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

For many vaccines covered by the VICP, anaphylaxis is listed with a first-symptom onset of 4 hours or less after vaccination. The Health Resources and Services Administration (HRSA) uses a similar example in its program materials: a severe allergic reaction (anaphylaxis) within four hours after a tetanus vaccine, when the Table’s definition is met and no other cause is proven, may receive that presumption. Our [anaphylaxis injury guide](/injuries/anaphylaxis) lists each vaccine category that carries this Table entry.

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

If you want to talk with an independent attorney about whether your situation may fit a federal program, you can submit your information for free on VaccineInjuries.org. There is no obligation to move forward before you are ready.

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

For a reference page with the exact Table wording, a side-by-side comparison with SIRVA, and summaries of real Court of Federal Claims decisions, see our [brachial neuritis injury guide](/injuries/brachial-neuritis).

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

When you are ready, you can submit your information for free on VaccineInjuries.org to get connected with an independent attorney who can evaluate whether your situation may fit federal compensation programs. There is no obligation to move forward before you are ready.

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
6. Consider talking with a specialized attorney. Vaccine injury petitions are filed in the U.S. Court of Federal Claims. Most people use a lawyer. HRSA notes that the Court generally may award reasonable attorneys’ fees and costs when a petition is filed in good faith and has a reasonable basis — including, in many situations, even when compensation is not awarded to the petitioner. That fee structure is one reason an early conversation with counsel can be lower-risk than people expect.

## Soft checklist

1. Confirm the exact product on your record (Tdap, Td, DTaP, DT, TT, or something else).
2. Write down the vaccination date and the date symptoms first appeared.
3. Gather medical records and a short timeline.
4. Ask your clinician about ongoing care.
5. If the injury was serious or lasting, consider talking with counsel familiar with vaccine-related claims so you can learn whether a VICP pathway may fit your facts.

## Bottom line

Yes — according to HRSA, Tdap, DTaP, Td, DT, TT, and related diphtheria/tetanus/pertussis vaccines are covered by the VICP when other program rules are met. The Vaccine Injury Table lists specific conditions and timing windows for tetanus-toxoid and pertussis-containing products, including anaphylaxis, brachial neuritis, SIRVA, vasovagal syncope, and (for pertussis-containing vaccines) encephalopathy or encephalitis under defined criteria. Off-Table claims may still be possible with proof. If you believe you were seriously injured after one of these shots, focus on medical care, accurate records, and timely guidance rather than waiting to see whether symptoms resolve on their own.

## About VaccineInjuries.org

VaccineInjuries.org is an educational resource for people trying to understand vaccine injury compensation programs and find help. We are not a law firm and do not provide legal advice. If you want to see whether connecting with a lawyer who handles these cases makes sense for your situation, you can submit your information for free through our site.
    `.trim(),
  },
  {
    slug: "pneumococcal-vaccine-vicp-coverage",
    title: "Are Pneumococcal Vaccines Covered by the VICP?",
    seoTitle: "Pneumonia Shot Injury: Is PCV or PPSV Covered by the VICP?",
    excerpt:
      "Hurt after a pneumonia shot? The VICP covers pneumococcal conjugate (PCV) vaccines but not polysaccharide (PPSV) shots. Here's how to tell which you got.",
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
- Talk with someone who knows this area. Vaccine injury questions are specialized. A conversation with a lawyer who handles these cases can help you understand what does and does not fit.

If you received more than one vaccine around the same time (for example, a pneumococcal shot and a seasonal flu shot), write down each product and date. Coverage can differ shot by shot. HRSA notes in related contexts that when both a VICP-covered vaccine and a CICP-covered countermeasure are involved, a person may be able to explore either program or both, depending on the facts — but that still depends on which products were actually given.

## Soft checklist if you are sorting this out

1. Confirm the exact vaccine name on your record (PCV / conjugate versus PPSV or PPV / polysaccharide).
2. Note the date of vaccination and when symptoms first appeared.
3. Gather related medical records and a simple symptom timeline.
4. Ask a clinician about ongoing care needs.
5. If the injury was serious or lasting, consider talking with counsel familiar with vaccine-related claims so you can learn whether any compensation pathway fits your facts.

Deadlines matter in federal programs that do apply. For VICP injury petitions involving covered vaccines, HRSA states that petitions generally must be filed within three years after the first symptom or significant aggravation of the injury. Death claims follow different timing rules. Those clocks are a reminder that waiting can close doors when a covered vaccine is involved.

## Bottom line

It depends on the product. According to HRSA, pneumococcal conjugate (PCV) vaccines are covered by the VICP; pneumococcal polysaccharide (PPSV/PPV) vaccines are not. If you believe you were seriously injured after a pneumococcal shot, start with medical care, confirm which product you received, and get case-specific guidance rather than assuming every “pneumonia vaccine” follows the same path.

## About VaccineInjuries.org

VaccineInjuries.org is an educational resource for people trying to understand vaccine injury compensation programs and find help. We are not a law firm and do not provide legal advice. If you want to see whether connecting with a lawyer who handles these cases makes sense for your situation, you can submit your information for free through our site.
    `.trim(),
  },
  {
    slug: "shingles-vaccine-vicp-coverage",
    title: "Is the Shingles Vaccine Covered by the VICP?",
    seoTitle: "Shingles Vaccine Injury: Is Shingrix Covered by the VICP?",
    excerpt:
      "HRSA says shingles (zoster) vaccines like Shingrix are not covered by the VICP, unlike chickenpox vaccines. What that means and what to look into next.",
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
- Talk with someone who knows this area. Vaccine injury and product-liability questions are specialized. A conversation with a lawyer who handles these cases can help you understand what does and does not fit — without you having to decode federal coverage charts alone.

If you received more than one vaccine around the same time (for example, a shingles shot and a seasonal flu shot), write down each product and date. Coverage can differ shot by shot. HRSA notes in other contexts that when both a VICP-covered vaccine and a CICP-covered countermeasure are involved, a person may be able to explore either program or both, depending on the facts — but that still depends on which products were actually given.

## Soft checklist if you are sorting this out

1. Confirm the exact vaccine name on your record (zoster/shingles versus varicella/chickenpox versus something else).
2. Note the date of vaccination and when symptoms first appeared.
3. Gather related medical records and a simple symptom timeline.
4. Ask a clinician about ongoing care needs.
5. If the injury was serious or lasting, consider talking with counsel familiar with vaccine-related claims so you can learn whether any compensation pathway fits your facts.

Deadlines matter in federal programs that do apply. For VICP injury petitions involving covered vaccines, HRSA states that petitions generally must be filed within three years after the first symptom or significant aggravation of the injury. Death claims follow different timing rules. Those VICP clocks are not a substitute for advice about a shingles-only case; they are a reminder that waiting can close doors when a covered vaccine is involved.

## Bottom line

No — according to HRSA, herpes zoster (shingles) vaccines are not covered by the VICP. Chickenpox (varicella) vaccines are covered; shingles vaccines are not. If you believe you were seriously injured after a shingles shot, focus on medical care, accurate records, and getting case-specific guidance rather than assuming the VICP petition process applies.

## About VaccineInjuries.org

VaccineInjuries.org is an educational resource for people trying to understand vaccine injury compensation programs and find help. We are not a law firm and do not provide legal advice. If you want to see whether connecting with a lawyer who handles these cases makes sense for your situation, you can submit your information for free through our site.
    `.trim(),
  },
  {
    slug: "flu-shot-injury-vicp-compensation",
    title: "Can a Flu Shot Injury Qualify for VICP Compensation?",
    seoTitle: "Flu Shot Injury? What the VICP Covers (SIRVA, GBS & More)",
    excerpt:
      "Seasonal flu shots are covered by the VICP. See which Table injuries apply, like SIRVA (48 hours) and GBS (3–42 days), plus deadlines and next steps.",
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

Shoulder pain that does not go away. SIRVA involves shoulder pain and limited range of motion after an intramuscular vaccine in the upper arm. It is treated as a musculoskeletal problem related to how the shot was administered into or around the shoulder structures, not as a neurological injury. Early medical notes that capture when pain started and how it limited movement matter a great deal. Our [SIRVA injury guide](/injuries/sirva) covers symptoms and the Table rule in more detail.

Sudden progressive weakness weeks later. GBS is a rare neurological condition. It can follow infections and, in some contexts, appears in vaccine-injury discussions. For seasonal flu vaccines, the Table window for GBS is roughly 3 to 42 days after vaccination. Timing alone does not prove causation, and only a clinician can diagnose GBS. Progressive weakness needs prompt medical care. Our [Guillain-Barré syndrome guide](/blog/guillain-barre-vaccine-injury-claims) explains more, and the [GBS injury guide](/injuries/guillain-barre-syndrome) walks through the Table definition.

A severe allergic reaction right after the shot. Anaphylaxis is a medical emergency. The Table lists a short onset window (within 4 hours). Emergency records and the vaccination timeline are the core documents. See our [anaphylaxis injury guide](/injuries/anaphylaxis) for more.

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

If you want to talk with an independent attorney about whether your situation may fit a federal program, you can submit your information for free on VaccineInjuries.org. There is no obligation to move forward before you are ready.

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

When you are ready, you can submit your information for free on VaccineInjuries.org to get connected with an independent attorney who can evaluate whether your situation may fit federal compensation programs. There is no obligation to move forward before you are ready.

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

When you are ready, you can submit your information for free on VaccineInjuries.org to get connected with an independent attorney who can evaluate whether your situation may fit federal compensation programs. There is no obligation to move forward before you are ready.

## Disclaimer

This article is for informational purposes only and is not legal advice. Vaccine injury claims involve specific rules, programs, and deadlines that depend on the facts of each case. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
  {
    slug: "how-long-does-a-vicp-claim-take",
    title: "How Long Does a VICP Claim Take?",
    excerpt:
      "HRSA says the average VICP petition takes 2 to 3 years to resolve. Here is what the law's 240-day timeline really means, why some cases move faster than others, and three real court decisions that show the range.",
    date: "October 2026",
    datePublished: "2026-10-08",
    lastReviewed: "2026-10-08",
    category: "Claim Process",
    sources: [
      S.hrsaVicpData,
      S.usc300aa12,
      S.usc300aa21,
      S.usc300aa16,
      S.osmGuidelines,
      S.hrsaCoveredVaccines,
      S.hrsaCicpVsVicp,
      S.caseStegall2023,
      S.caseHoover2021,
      S.caseChu2026,
    ],
    content: `
## The short answer

Most VICP claims take years, not months. The Health Resources and Services Administration (HRSA), the HHS agency that publishes official VICP statistics, says in its [VICP data report](https://www.hrsa.gov/vaccine-compensation/data): "On average, it takes 2 to 3 years to adjudicate a petition after it is filed."

That is an average. Some claims wrap up in about a year. Others take longer, especially when the medical questions are disputed or a decision is appealed.

It also helps to keep perspective. Vaccines are generally safe, and serious injuries are rare. HRSA estimates that for petitions filed from 2006 to 2024, about one person was compensated for every 1 million doses of covered vaccines distributed in the U.S. But if you are that one person, a long, uncertain wait is hard. Knowing what to expect can make it a little easier.

This post covers the VICP, which handles claims in the U.S. Court of Federal Claims. Claims involving COVID-19 vaccines go to a different program, the Countermeasures Injury Compensation Program (CICP), which HHS decides through an administrative process rather than a court case. The [CICP and VICP comparison from HRSA](https://www.hrsa.gov/cicp/cicp-vicp) explains the differences.

## What about the "240 days" in the law?

If you read the Vaccine Act, you may see a much shorter number. The law says a special master's decision should be issued "as expeditiously as practicable but not later than 240 days" after the petition is filed, not counting time when the case is formally suspended ([42 U.S.C. § 300aa-12](https://www.law.cornell.edu/uscode/text/42/300aa-12)).

In practice, that 240-day mark works more like a checkpoint than a deadline for finishing the case:

- If a special master has not decided the case within 240 days (not counting suspended time), the court has to notify the petitioner.
- The petitioner can then choose to keep the case going or withdraw it. The law gives 30 days from that notice to file the choice ([42 U.S.C. § 300aa-21](https://www.law.cornell.edu/uscode/text/42/300aa-21)).
- A similar notice applies if the court has not entered a judgment within 420 days.

Withdrawing is a serious legal decision with consequences for what you can do next, so it is something to talk through with a lawyer rather than decide on your own.

One special master put it plainly in a 2021 decision: "Given current caseloads, resolution of a claim within 240 days is very rare apart from facially defective petitions (i.e. non-covered vaccine)." (That case, Hoover, is discussed below.) Put that together with HRSA's 2-to-3-year average, and it is clear that most claims run well past the 240-day mark.

## The main stages of a VICP claim

Every case is different, but most move through the same basic stages. The Office of Special Masters describes them in its [Guidelines for Practice](https://www.uscfc.uscourts.gov/guidelines-practice-under-national-vaccine-injury-compensation-program).

1. **Filing the petition and medical records.** The case starts when a petition is filed with the U.S. Court of Federal Claims. The medical records are the backbone of the case.
2. **The government's review.** The Department of Health and Human Services (HHS), represented by Department of Justice lawyers, reviews the claim and files what is called a Rule 4(c) report, giving its position. Under the court's rules that report is due within 90 days of filing, but the court's own Guidelines say the deadline is "frequently extended," often because records are incomplete, an expert report is needed, or the parties are discussing settlement.
3. **Entitlement.** VICP cases are split into two phases. The first decides whether the person is entitled to compensation at all. If the government agrees, this can be quick. If it does not, this phase can involve expert reports, briefs, and sometimes a hearing.
4. **Damages.** If entitlement is found, the case moves to deciding the amount. Straightforward cases often settle on a number. More complex ones, such as injuries needing long-term care, can take longer.
5. **Possible review.** After a special master's decision, either side has 30 days to ask a judge of the Court of Federal Claims to review it. Either side can then appeal that judge's ruling to the U.S. Court of Appeals for the Federal Circuit. Each step adds time.
6. **Judgment and election.** After judgment, the petitioner has 90 days to file a written choice to accept the judgment or reject it and file a civil lawsuit instead ([42 U.S.C. § 300aa-21](https://www.law.cornell.edu/uscode/text/42/300aa-21)). The Guidelines note that in a settled case, the parties can speed up entry of judgment by giving up the right to seek review.

## Why some claims move faster

The court has a track built for speed. Its **Special Processing Unit (SPU)**, according to the Guidelines, "is designed to increase the Vaccine Program's ability to provide for the expedited and informal resolution of claims that appear reasonably likely to settle at the outset of the matter's filing." The Guidelines say cases involving Table injuries (injuries listed on the federal Vaccine Injury Table) may be good candidates for the SPU. If the parties cannot settle, the Chief Special Master decides the case or reassigns it to another special master.

Being placed in the SPU does not guarantee a quick result, or any result. It just means the court sees the case as one that may resolve without a long fight. (The Guidelines say the SPU also takes some cases that look likely to be dismissed early, such as a claim involving a vaccine the program does not cover.)

## Why some claims take much longer

Based on the court's Guidelines and the decisions below, common reasons include:

- **Missing or incomplete medical records.** This is one of the reasons the Guidelines give for extending the government's review.
- **A disputed diagnosis or timeline.** When the government contests whether the injury fits the Table, or whether the vaccine caused it, the case may need expert opinions and more briefing.
- **Settlement talks that stall.** Negotiations can take months. If they reach an impasse, the case goes back to litigation.
- **Complex damages.** The Guidelines note that more complex cases may need "life care planners" to document future care needs, which takes time.
- **Review and appeals.** A motion for review or an appeal can add many months.

## Three real cases that show the range

These are real decisions from the U.S. Court of Federal Claims. We include them only to show how long different paths can take. Each outcome depended on that case's specific facts and records. None of them predicts what will happen in another case, and none should be read as binding precedent.

### A faster path: Stegall v. Secretary of Health and Human Services

- **Docket:** No. 22-1737V
- **Decided:** December 6, 2023 (Chief Special Master Brian H. Corcoran)
- **Read it:** [Decision awarding damages (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_22-vv-01737/pdf/USCOURTS-cofc-1_22-vv-01737-1.pdf)

The petitioner filed on November 23, 2022, alleging a shoulder injury related to vaccine administration (SIRVA) after a flu shot. The case was assigned to the Special Processing Unit. On December 5, 2023, the government filed its Rule 4(c) report agreeing that the injury was consistent with SIRVA as defined by the Vaccine Injury Table and that the legal requirements were met. The next day, the Chief Special Master found the petitioner entitled to compensation and approved an award of $67,000 for pain and suffering, an amount the government proposed and the petitioner agreed to.

**Time from filing to decision:** a little over one year. That is about as smooth as a VICP case gets, and it still took more than 12 months.

### The 240-day notice in action: Hoover v. Secretary of Health and Human Services

- **Docket:** No. 20-1394V
- **Decided:** November 1, 2021 (Special Master Nora Beth Dorsey)
- **Read it:** [Decision on attorneys' fees and costs (U.S. Court of Federal Claims)](https://ecf.cofc.uscourts.gov/cgi-bin/show_public_doc?2020vv1394-34-0)

A parent filed a petition on October 14, 2020, on behalf of her child, alleging that the child developed a movement disorder and other symptoms after HPV vaccinations. The government's report, filed in April 2021, argued against compensation, and the special master ordered more records and an expert report. On June 11, 2021, the special master issued the statutory 240-day notice. The petitioner then chose to withdraw from the program, with the stated goal of suing the vaccine manufacturer in another court.

The decision we cite is about whether the program should pay the family's attorneys' fees after that withdrawal. The special master granted the request in part. Along the way, she wrote the line quoted above about how rarely claims are resolved within 240 days. The case shows that the 240-day notice is real, but that it marks a decision point, not the end of a typical claim.

### A long, contested path: Chu v. Secretary of Health and Human Services

- **Docket:** No. 21-1185V
- **Decided:** Opinion filed under seal January 13, 2026, and reissued publicly January 28, 2026 (Judge Ryan T. Holte, U.S. Court of Federal Claims)
- **Read it:** [Opinion and order (U.S. Court of Federal Claims)](https://ecf.cofc.uscourts.gov/cgi-bin/show_public_doc?2021vv1185-66-0)

The petitioner filed on April 12, 2021, alleging a Table SIRVA after a Tdap vaccine. According to the opinion, the parties discussed settlement until they reached an impasse in May 2024. The government then opposed compensation, both sides filed briefs, and on July 18, 2025, the Chief Special Master dismissed the claim. The petitioner asked a Court of Federal Claims judge to review that decision. In January 2026 the judge granted the review, vacated the dismissal, and sent the case back to the Chief Special Master for further proceedings.

The judge noted that the dismissal came "after four years of litigation." Nearly five years after filing, the case was not finished. Contested facts, stalled settlement talks, and a review can stretch a claim far beyond the average.

## What you can do while you wait

You cannot control the court's calendar, but a few things are within your reach:

- **Don't let the long timeline make you put off learning your options.** For most injuries, a VICP petition must be filed within 36 months (three years) of the first symptom ([42 U.S.C. § 300aa-16](https://www.law.cornell.edu/uscode/text/42/300aa-16)). That clock runs from when symptoms start, not from when you feel ready to deal with a court case. Our guide on [how long you have to file](/blog/how-long-do-i-have-to-file-a-vaccine-injury-claim) explains the deadlines.
- **Gather complete records early.** Incomplete records are one of the delays the court's Guidelines specifically mention. Our post on [what medical records you need](/blog/what-medical-records-do-i-need-for-a-vaccine-injury-claim) can help you get organized.
- **Keep track of ongoing costs and lost work.** If a case reaches the damages phase, this information matters.
- **Know how fees work.** According to HRSA, attorneys can be paid reasonable fees by the VICP directly, whether or not compensation is awarded, if certain minimal requirements are met. By law, they may not charge any other fee for VICP representation, including a contingency fee.

For a closer look at the steps after filing, see [what happens after you file a VICP petition](/blog/what-happens-after-you-file-a-vicp-petition).

## Get connected with an attorney

A lawyer who handles VICP cases can tell you which path your situation is likely to follow and what records matter most. VaccineInjuries.org is not a law firm and does not evaluate claims. We can connect you with an independent attorney who does.

[Get Connected With an Attorney](/intake). It is free to submit your information, and there is no obligation.

## Disclaimer

This article is for informational purposes only and is not legal advice. Court decisions are described in plain language for general education. Outcomes depend on the specific facts and records of each case, and a past decision does not predict the result of another claim. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
  {
    slug: "how-do-vicp-attorneys-get-paid",
    title: "How Do VICP Attorneys Get Paid? Fees and Costs, Explained",
    excerpt:
      "In a VICP case, the special master decides what the lawyer is paid, and the law bars any extra fee. Here is how fees and costs work, what can be cut, and three real fee decisions with the actual numbers.",
    date: "October 2026",
    datePublished: "2026-10-09",
    lastReviewed: "2026-10-09",
    category: "Cost & Compensation",
    sources: [
      S.usc300aa15,
      S.cfcOsm,
      S.cicpRegs,
      S.hrsaCicp,
      S.cdcVaccineSafety,
      S.caseTaing2024,
      S.caseDruery2024,
      S.caseHasanovic2025,
    ],
    content: `
## The short answer

In the National Vaccine Injury Compensation Program (VICP), you generally don't pay your lawyer out of your own pocket or out of your award. Instead, the lawyer asks the special master (the judicial officer who handles VICP cases at the U.S. Court of Federal Claims) to award reasonable attorneys' fees and costs. The special master reviews the billing records and decides the amount.

The law also says the lawyer can't charge you anything more. That's very different from a typical injury lawsuit, where a lawyer often takes a percentage of what you recover.

It helps to keep perspective. Vaccines are generally safe, and serious injuries are rare. But if you believe you were injured, knowing how lawyers are paid can make the first conversation with one a lot less stressful.

## What the law says

The rules are in the Vaccine Act, at [42 U.S.C. § 300aa-15(e)](https://www.law.cornell.edu/uscode/text/42/300aa-15). In plain words:

- **If you are awarded compensation,** the special master or court "shall also award" an amount to cover reasonable attorneys' fees and other costs.
- **If you are not awarded compensation,** the special master or court "may" still award reasonable fees and costs, if it finds "the petition was brought in good faith and there was a reasonable basis for the claim for which the petition was brought."
- **No extra fee is allowed.** The statute says: "No attorney may charge any fee for services in connection with a petition filed under section 300aa–11 of this title which is in addition to any amount awarded as compensation by the special master or court under paragraph (1)."

Two words in there matter a lot: **reasonable** and **may**. Fees are not automatic in a case that loses, and even in a winning case the special master can cut hours or rates that look too high.

## How the amount is figured

Special masters generally use what courts call the "lodestar" approach. As one decision below explains, the starting point is "multiplying the number of hours reasonably expended on the litigation times a reasonable hourly rate," and the special master can then adjust up or down based on specific findings.

In practice, that means:

1. **The lawyer files a fee application** with detailed, day-by-day billing records showing the work done and the time spent.
2. **The government responds.** In the three decisions below, the government said it was satisfied that the legal requirements for a fee award were met and left the amount to the special master's discretion.
3. **The special master decides.** The special master checks the hourly rates against what that lawyer has been awarded before and looks for time that is excessive, duplicated, or not legal work.

"Costs" are separate from fees. In one decision below, the costs were for getting medical records, postage, the court's filing fee, courier services, and translation. Costs have to be reasonable and documented too.

## What can get cut

The decisions below show a few common reasons a fee request gets reduced:

- **Clerical work billed as legal work.** Tasks like organizing files, filing documents, and calendaring deadlines are treated as office overhead. One decision quotes an earlier ruling: "[B]illing for clerical and other secretarial work is not permitted in the Vaccine Program."
- **Overlapping or excessive work.** If two lawyers do the same work, or a brief takes far more hours than it should, the special master can trim it.
- **Rates that don't fit.** A lawyer has to be admitted to practice in the U.S. Court of Federal Claims to work in the Vaccine Program. In one case, a lawyer's work from before her admission was paid at a paralegal rate.

Cuts like these come out of what the lawyer is paid. And because the law bars any extra fee, the lawyer can't make up the difference by billing you.

## Fees during a long case

VICP cases can take years. Our post on [how long a VICP claim takes](/blog/how-long-does-a-vicp-claim-take) explains why. In some long cases, a special master awards "interim" fees partway through, before the case ends. The Druery decision below is one example.

## Three real fee decisions

These are real decisions from the Office of Special Masters at the U.S. Court of Federal Claims. We include them only to show how fee decisions work in practice. Each outcome depended on that case's specific facts and billing records, none of them predicts what will happen in another case, and none should be read as binding precedent.

### A simple settled case: Taing v. Secretary of Health and Human Services

- **Docket:** No. 21-118V
- **Decided:** October 30, 2024 (Chief Special Master Brian H. Corcoran)
- **Read it:** [Decision on attorney's fees and costs (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-00118/pdf/USCOURTS-cofc-1_21-vv-00118-1.pdf)

The petitioner alleged a shoulder injury related to vaccine administration (SIRVA) after a flu shot and was awarded compensation in June 2024, based on an agreement (a "stipulation") between the parties. The lawyer then asked for $22,094.00 in fees and $539.11 in costs. The petitioner filed a signed statement saying he had no personal out-of-pocket expenses. The Chief Special Master found the request reasonable and awarded the full $22,633.11, with no reductions.

### Fees cut, but still far more than the award: Hasanovic v. Secretary of Health and Human Services

- **Docket:** No. 21-1828V
- **Decided:** March 13, 2025 (Special Master Jennifer A. Shah)
- **Read it:** [Decision on attorneys' fees and costs (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-01828/pdf/USCOURTS-cofc-1_21-vv-01828-1.pdf)

The petitioner alleged anaphylaxis and vasovagal syncope (fainting) with other effects after a Tdap vaccine. The case settled by stipulation, and she was awarded $9,500.00. Her lawyers then asked for $62,483.20 in fees and $1,579.96 in costs. The special master paid one lawyer's 2022 work at a paralegal rate because that lawyer wasn't yet admitted to the Court of Federal Claims bar, and cut the fees by 5% more for clerical and administrative entries. The final award for fees and costs was $59,909.11.

This case shows two things. Fee requests get real scrutiny, even in a case the government settled. And the fee award was its own separate amount, about six times the petitioner's compensation in this case.

### A case that lost, with fees still paid: Druery v. Secretary of Health and Human Services

- **Docket:** No. 17-1213V
- **Decided:** October 25, 2024 (Special Master Daniel T. Horner)
- **Read it:** [Decision awarding attorneys' fees and costs (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_17-vv-01213/pdf/USCOURTS-cofc-1_17-vv-01213-3.pdf)

The petitioner filed in 2017, alleging that a flu vaccine led to a heart event that required a defibrillator. Partway through, in 2020, she asked for interim fees, and the special master then handling the case awarded a reduced $51,962.10. In July 2023, the special master denied compensation. A judge of the Court of Federal Claims denied her request to review that decision, and judgment entered in January 2024.

Her lawyers then asked for $118,034.59 in final fees and costs. The government said the legal requirements for an award were met. The special master found the request "largely reasonable" but cut the fees for briefing by 25%, finding the 143.9 hours billed for that work excessive given how similar the filings were. The final award was $106,268.21. A footnote spells out that the Vaccine Act "prevents an attorney from charging or collecting fees (including costs) that would be in addition to the amount awarded herein."

This case shows that a claim that doesn't win can still have its reasonable fees paid, when the special master finds the legal requirements met. It doesn't mean every unsuccessful claim will.

## COVID-19 vaccine claims are different

Claims for COVID-19 vaccine injuries generally go to the Countermeasures Injury Compensation Program (CICP), not the VICP, and the fee rules are very different. The CICP regulations say: "The Act does not authorize the Secretary to pay for, or reimburse, any fees or costs associated with the requester's use of the services of a legal or personal representative under this Program, including those of an attorney." ([42 CFR 110.44(d)](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-110)). If you talk with a lawyer about a CICP claim, ask how they charge. Our post on [COVID-19 vaccine claims](/blog/can-i-sue-for-covid-vaccine-side-effects) explains the CICP.

## Questions worth asking a lawyer

- Will you be asking the special master for fees and costs at the end of my case, and possibly along the way?
- Will I need to pay for anything myself, such as medical records or the filing fee, and if so, can those be reimbursed?
- What would happen to fees if my claim isn't successful?
- Are you admitted to practice in the U.S. Court of Federal Claims?

For more on choosing a lawyer, see [how to find a vaccine injury attorney](/blog/how-to-find-a-vaccine-injury-attorney).

## Get connected with an attorney

VaccineInjuries.org is not a law firm and doesn't evaluate claims. We can connect you with an independent attorney who handles vaccine injury cases and can explain how fees would work in your situation.

[Get Connected With an Attorney](/intake). It's free to submit your information, and there's no obligation.

## Disclaimer

This article is for informational purposes only and is not legal advice. Court decisions are described in plain language for general education. Outcomes depend on the specific facts and records of each case, and a past decision doesn't predict the result of another claim. Reading this page doesn't create an attorney-client relationship. For advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
  {
    slug: "fainting-after-vaccine-syncope-claims",
    title: "Fainting After a Vaccine: A Plain-English Guide to Vasovagal Syncope Claims",
    seoTitle: "Injured in a Faint After a Shot? 3 Real VICP Syncope Cases",
    excerpt:
      "Fainting after a shot is usually harmless, but a fall can cause real injuries. Learn the 1-hour Table rule for vasovagal syncope and see 3 real decisions.",
    date: "October 2026",
    datePublished: "2026-10-12",
    lastReviewed: "2026-10-12",
    category: "Qualifying Injuries",
    sources: [
      S.injuryTable,
      S.cdcFainting,
      S.usc300aa11,
      S.usc300aa15,
      S.usc300aa16,
      S.hrsaCoveredVaccines,
      S.hrsaCicpVsVicp,
      S.osmGuidelines,
      S.caseSchrothEntitlement2024,
      S.caseSchrothDamages2025,
      S.caseMaupin2026,
      S.caseCampbellEntitlement2022,
      S.caseCampbellDamages2023,
    ],
    content: `
## The short answer

Fainting after a vaccine is usually brief and harmless. The CDC says in its page on [fainting and vaccines](https://www.cdc.gov/vaccine-safety/about/fainting.html) that people who faint after vaccination "generally recover within a few minutes." When fainting becomes part of a vaccine injury claim, it is usually because of what happened during the fall, such as a broken bone, a head injury, or damaged teeth.

Under the National Vaccine Injury Compensation Program (VICP), fainting has its own entry on the federal [Vaccine Injury Table](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3). It is listed as "vasovagal syncope" for covered vaccines that are injected, when the loss of consciousness happens within 1 hour of the shot.

It helps to keep this in perspective. Vaccines are generally safe, and serious injuries are rare. The CDC notes that fainting can be triggered by many types of medical procedures, and that scientists think fainting after a shot "is due to the vaccination process and not to the vaccines themselves," although the CDC adds that there is not yet a definite answer. Either way, a fall can still cause real harm.

## What vasovagal syncope is

The Vaccine Injury Table defines it this way: "Vasovagal syncope (also sometimes called neurocardiogenic syncope) means loss of consciousness (fainting) and postural tone caused by a transient decrease in blood flow to the brain occurring after the administration of an injected vaccine."

In plain words, blood flow to the brain drops for a moment, and the person passes out and loses muscle control. According to the Table:

- It may be preceded by nausea, lightheadedness, sweating, or looking pale.
- It may come with brief seizure-like movements, but awareness generally returns as the faint ends.
- It "is usually a benign condition but may result in falling and injury with significant sequela." (A sequela is a lasting effect or complication.)

The CDC says fainting after a vaccine is most commonly reported after three vaccines given to adolescents: HPV, meningococcal (MCV4), and Tdap. It also says one study of reports to the Vaccine Adverse Event Reporting System (VAERS) found that 62% of fainting reports involved people 11 to 18 years old, while cautioning that VAERS data cannot show how often fainting actually happens. The CDC's main concern is head injury from a fall.

## How the Vaccine Injury Table treats fainting

### Which vaccines

Vasovagal syncope is listed, with the same "≤1 hour" time window, for each of these covered vaccine categories in [42 CFR 100.3](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3):

- Tetanus-containing vaccines (for example DTaP, Tdap, and Td) and pertussis-containing vaccines
- Measles, mumps, and rubella (MMR) vaccines
- Inactivated polio vaccine (IPV)
- Hepatitis A and hepatitis B vaccines
- Haemophilus influenzae type b (Hib) vaccines
- Varicella (chickenpox) vaccines
- Pneumococcal conjugate vaccines
- Seasonal flu vaccines
- Meningococcal vaccines
- HPV vaccines
- Any new vaccine added to the program for routine use in children or pregnant women

It is not listed for rotavirus vaccines or oral polio vaccine, which are not injected.

### The 1-hour window and loss of consciousness

For a Table claim, the person must actually lose consciousness, and it must happen within 1 hour of vaccination. Feeling faint, dizzy, or "woozy" without passing out (sometimes called presyncope or near-fainting) does not meet the Table definition. The Campbell case below shows what that can mean in practice.

### What does not count

The Table says loss of consciousness caused by any of these will not be considered vasovagal syncope: organic heart disease, cardiac arrhythmias (heart rhythm problems), transient ischemic attacks (mini-strokes), hyperventilation, metabolic conditions, neurological conditions, and seizures. It also says repeated fainting episodes after the 1-hour window are not treated as part of the Table injury.

### Why the fall injuries matter

The Table's general rules say that an acute complication or sequela of a listed condition also qualifies as a Table injury, unless the condition's definition excludes it. Combined with the syncope definition's own mention of "falling and injury," this is why fainting claims usually center on the injuries from the fall.

Meeting the Table's requirements gives the petitioner a presumption that the vaccine caused the injury. In one of the cases below, the government's report described the Table as affording "a presumption of causation if the onset of vasovagal syncope occurs within one hour after a seasonal flu vaccination and there is no apparent alternative cause."

## The other rules still apply

Being on the Table does not replace the program's other requirements:

- **Severity.** The Vaccine Act ([42 U.S.C. § 300aa-11](https://www.law.cornell.edu/uscode/text/42/300aa-11)) requires that the injured person had residual effects for more than 6 months after the vaccine, or had inpatient hospitalization and surgical intervention, or died. A faint followed by a full recovery within minutes would not meet these thresholds on its own, so the question is usually whether the injuries from the fall do.
- **Deadline.** For most injuries, a VICP petition must be filed within 36 months (three years) after the first symptom ([42 U.S.C. § 300aa-16](https://www.law.cornell.edu/uscode/text/42/300aa-16)). A faint covered by the Table happens within an hour of the shot, so the clock can start on the day of vaccination. If you are unsure how the deadline applies to you, ask an attorney well before three years have passed.
- **COVID-19 vaccines are different.** HRSA, the federal agency that runs the VICP, directs claims involving COVID-19 vaccines to the separate Countermeasures Injury Compensation Program (CICP) ([HRSA covered vaccines page](https://www.hrsa.gov/vaccine-compensation/covered-vaccines)). The CICP has its own rules, including a one-year filing deadline ([HRSA comparison of the CICP and VICP](https://www.hrsa.gov/cicp/cicp-vicp)). Our post on [COVID-19 vaccine claims](/blog/can-i-sue-for-covid-vaccine-side-effects) explains more.

## Three real cases

These are real decisions from the U.S. Court of Federal Claims. We describe them in plain words to show how fainting claims have actually been handled. Each outcome depended on that case's specific facts and records. None of them predicts what will happen in another case, and none should be read as binding precedent. The dollar amounts below were awarded for pain and suffering, and each of those decisions says the award represents compensation for all damages that would be available under the Vaccine Act.

### A teenager's Table claim: Schroth v. Secretary of Health and Human Services

- **Docket:** No. 24-585V
- **Decided:** Ruling on entitlement December 6, 2024; decision awarding damages February 6, 2025 (Chief Special Master Brian H. Corcoran)
- **Read it:** [Ruling on entitlement (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-00585/pdf/USCOURTS-cofc-1_24-vv-00585-0.pdf) and [decision awarding damages (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-00585/pdf/USCOURTS-cofc-1_24-vv-00585-1.pdf)

On April 16, 2024, two parents filed a petition on behalf of their minor son, alleging that he suffered vasovagal syncope after receiving HPV, Tdap, and meningococcal conjugate vaccines on June 29, 2023. (Those are the same three adolescent vaccines the CDC names as most often linked to fainting reports.) The case was assigned to the court's Special Processing Unit, which, according to the court's [Guidelines for Practice](https://www.uscfc.uscourts.gov/guidelines-practice-under-national-vaccine-injury-compensation-program), is meant for claims that appear reasonably likely to settle early.

On December 5, 2024, the government filed its report conceding the claim. It agreed that the family had met the Table criteria and that the son had residual effects for more than six months. The next day, the Chief Special Master found the family entitled to compensation. In February 2025, the government proposed $55,000 for pain and suffering, used to buy an annuity that pays out in later years, and the parents agreed. The Chief Special Master awarded that amount.

**Time from filing to damages decision:** under 10 months. The published decisions do not describe the son's specific injuries.

### Serious fall injuries after a flu shot: Maupin v. Secretary of Health and Human Services

- **Docket:** No. 24-1813V
- **Decided:** Ruling on entitlement January 6, 2026, with the public copy filed February 10, 2026 (Chief Special Master Brian H. Corcoran)
- **Read it:** [Ruling on entitlement (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-01813/pdf/USCOURTS-cofc-1_24-vv-01813-0.pdf)

The petitioner filed on November 5, 2024, alleging that he suffered vasovagal syncope when he received a flu vaccine on November 15, 2021. According to the petition, the faint led to facial cuts, a broken nose, a concussion, a spinal cord injury in the neck, and neck surgery (a laminectomy and fusion), among other problems.

On September 2, 2025, the government filed its report conceding that the petitioner met the Table criteria for vasovagal syncope after a flu shot and that he had more than six months of residual effects. The Chief Special Master found him entitled to compensation. We did not find a published damages decision in this case when we wrote this post.

The case shows how a brief faint can be followed by very serious injuries. It is also a reminder about timing: the petition was filed about 10 days before the three-year anniversary of the vaccination. The ruling does not discuss the deadline, so we mention the dates only to show how close to the line some claims are filed.

### No loss of consciousness: Campbell v. Secretary of Health and Human Services

- **Docket:** No. 20-381V
- **Decided:** Ruling on entitlement March 9, 2022; decision awarding damages January 4, 2023 (Chief Special Master Brian H. Corcoran)
- **Read it:** [Ruling on entitlement (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_20-vv-00381/pdf/USCOURTS-cofc-1_20-vv-00381-0.pdf) and [decision awarding damages (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_20-vv-00381/pdf/USCOURTS-cofc-1_20-vv-00381-1.pdf)

A 64-year-old hospital employee received a flu shot at an outdoor clinic at work on September 17, 2018. Walking away, she became "woozy," fell down several stairs, and was taken to the emergency room with a serious fracture of her left leg near the knee.

She filed a Table claim for vasovagal syncope, but her medical records consistently showed that she had not lost consciousness. The Chief Special Master found that "the record clearly demonstrates that she did not experience loss of consciousness" and dismissed the Table claim.

She had also argued, in the alternative, that the vaccine caused a vasovagal reaction that led to her fall. That is an "off-Table" claim, which means there is no presumption and the petitioner has to prove the vaccine caused the injury. The government eventually stopped defending the case on entitlement, and the Chief Special Master found that she had proved this claim. He found that the flu vaccine can cause a vasovagal response, that her dizziness and weakness within minutes of the shot caused her fall, and that her injury led to inpatient hospitalization and surgery.

Her recovery was long. The damages decision describes three knee surgeries, ending in a total knee replacement, and about a year of medically excused time away from work. The two sides could not agree on pain and suffering. She asked for $250,000 (the most the Vaccine Act allows for pain and suffering under [42 U.S.C. § 300aa-15](https://www.law.cornell.edu/uscode/text/42/300aa-15)), and the government proposed $150,000. The Chief Special Master awarded $190,000.

The decision also explains why there are few court decisions like this one: "Because most vaccine injury claims involving syncope, presyncope, and vasovagal response are resolved informally, there are few reasoned decisions that can guide this outcome."

## Records that help

If you fainted after a shot and were hurt, records made at the time are often the most important evidence. Useful records can include:

- The vaccination record, including the vaccine and the time it was given
- Clinic or pharmacy notes about the faint, and any incident report
- Names of anyone who saw what happened
- EMS, emergency room, or urgent care records
- Imaging such as X-rays or CT scans, and dental records if teeth were injured
- Follow-up records showing how long the injury affected you

Whether you lost consciousness, and how soon after the shot it happened, can matter a great deal, as the Campbell case shows. Our post on [what medical records you need](/blog/what-medical-records-do-i-need-for-a-vaccine-injury-claim) can help you get organized, and our [fainting injury guide](/injuries/syncope-fainting) summarizes the Table rules on one page.

## Lowering the risk of a fall

The CDC says many falls from fainting can be prevented by having the person sit or lie down for the shot, and that patients should be observed for 15 minutes after vaccination. It also says that giving a drink, a snack, or some reassurance about the procedure has been shown to prevent some fainting.

## Get connected with an attorney

If you or your child fainted after a vaccine and were seriously hurt in the fall, a lawyer who handles VICP cases can explain whether the Table rules may fit your situation and what records matter most. VaccineInjuries.org is not a law firm and does not evaluate claims. We can connect you with an independent attorney who does.

[Get Connected With an Attorney](/intake). It is free to submit your information, and there is no obligation.

## Disclaimer

This article is for informational purposes only and is not legal or medical advice. Court decisions are described in plain language for general education. Outcomes depend on the specific facts and records of each case, and a past decision does not predict the result of another claim. Reading this page does not create an attorney-client relationship. For medical questions, speak with a qualified clinician; for advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
  {
    slug: "itp-after-mmr-vaccine-vicp",
    title: "Can ITP After the MMR Vaccine Qualify for VICP Compensation?",
    seoTitle: "ITP After the MMR Vaccine: The 7–30 Day Rule & 3 Real Cases",
    excerpt:
      "Low platelets 7 to 30 days after an MMR shot? ITP is on the Vaccine Injury Table, but the 6-month rule often decides these claims. See 3 real decisions.",
    date: "October 2026",
    datePublished: "2026-10-15",
    lastReviewed: "2026-10-15",
    category: "Qualifying Injuries",
    sources: [
      S.injuryTable,
      S.hrsaCoveredVaccines,
      S.hrsaWhoCanFile,
      S.usc300aa11,
      S.usc300aa16,
      S.nhlbiItp,
      S.caseWhite2023,
      S.caseFelix2024,
      S.caseVanLeerGreenberg2023,
    ],
    content: `
## The short answer

Yes, sometimes. Immune thrombocytopenia (often called ITP) after an MMR shot can be a VICP claim when the facts fit the federal rules. The Vaccine Injury Table lists **thrombocytopenic purpura** for vaccines that contain measles virus — including MMR and MMRV — when the first symptom begins **7 to 30 days** after vaccination ([42 CFR § 100.3](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3)). Meeting that Table definition creates a presumption that the vaccine caused the injury, unless another cause is shown.

That presumption is not the whole story. The Vaccine Act still requires a severity threshold: residual effects lasting more than six months after the vaccination, or inpatient hospitalization with surgical intervention, or death ([42 U.S.C. § 300aa-11](https://www.law.cornell.edu/uscode/text/42/300aa-11)). In ITP cases involving children, that six-month rule is often the make-or-break issue, because many pediatric cases resolve in weeks or months.

It also helps to keep perspective. Vaccines are generally safe, and serious injuries are rare. The National Heart, Lung, and Blood Institute (NHLBI) says vaccines such as MMR "rarely" raise the risk of ITP, especially in children, and lists infections, certain medicines, and other immune conditions among other risk factors ([NHLBI — Immune Thrombocytopenia](https://www.nhlbi.nih.gov/health/immune-thrombocytopenia)).

This post is about the VICP, which covers MMR. Claims involving COVID-19 vaccines go to a different program, the Countermeasures Injury Compensation Program (CICP).

## What ITP is, in plain English

ITP is a platelet disorder. Platelets help blood clot. When the count is too low, a person can bruise easily, develop tiny red or purple dots on the skin (petechiae), or have trouble stopping bleeding. NHLBI explains that ITP can be acute (short-term) or chronic (long-term), and that acute ITP in children often goes away on its own within a few weeks or months.

Doctors sometimes write "ITP," "immune thrombocytopenia," or "idiopathic thrombocytopenic purpura." The Vaccine Injury Table uses the term **thrombocytopenic purpura** and supplies its own definition, which is what the court applies for a Table claim.

## What the Vaccine Injury Table requires

Under [42 CFR § 100.3](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3), for vaccines containing measles virus (for example MMR, MM, or MMRV):

- **Injury listed:** thrombocytopenic purpura
- **Onset window:** 7 to 30 days after vaccination (not less than 7 days and not more than 30 days)

The Table's qualifications and aids to interpretation (QAIs) define thrombocytopenic purpura as clinical signs such as petechiae, significant bruising, or spontaneous bleeding, **and** a serum platelet count less than **50,000/mm³**, with normal red and white blood cell indices. The Table definition also excludes thrombocytopenia from other listed causes, including immune thrombocytopenic purpura mediated by viral or fungal infections, toxins, or drugs.

If the diagnosis, lab values, and timing fit, a petitioner can try to prove a **Table** injury. If they do not — for example, onset outside the 7-to-30-day window, or ITP after a vaccine that does not contain measles virus — the claim would be **off-Table** and would need proof that the vaccine caused the condition. Our guide to [Table vs. off-Table injuries](/blog/difference-between-table-injury-and-off-table-injury) explains the difference, and our [ITP injury guide](/injuries/itp-thrombocytopenic-purpura) summarizes the Table rules on one page.

MMR is a covered vaccine under the VICP according to HRSA's [covered vaccines page](https://www.hrsa.gov/vaccine-compensation/covered-vaccines).

## The six-month severity rule (and why it matters for ITP)

Even a well-documented Table injury can fail if it does not meet the Vaccine Act's severity requirement. In general, the petition must show that the injured person:

- suffered residual effects or complications for **more than six months after the vaccination**, or
- had inpatient hospitalization and surgical intervention, or
- died

([42 U.S.C. § 300aa-11(c)(1)(D)](https://www.law.cornell.edu/uscode/text/42/300aa-11); see also HRSA's [who can file](https://www.hrsa.gov/vaccine-compensation/eligible) page).

That timing starts from the vaccination date, not from when someone later decides to check a claim. NHLBI notes that acute ITP in children often resolves within weeks or months. When platelets return to normal relatively quickly, special masters have repeatedly asked whether ongoing blood tests or activity precautions alone count as "residual effects." The Federal Circuit addressed that question in *Wright v. Secretary of Health & Human Services*, 22 F.4th 999 (Fed. Cir. 2022), which the decisions below apply. We describe those cases only to show how the rule has played out; none of them predicts another claim's result, and none should be read as binding precedent for a different set of facts.

Our post on [severity requirements](/blog/what-are-the-severity-requirements-for-a-vicp-claim) covers the threshold in more detail.

## Filing deadlines

For most VICP injury claims, a petition must be filed within **36 months (three years)** of the first symptom ([42 U.S.C. § 300aa-16](https://www.law.cornell.edu/uscode/text/42/300aa-16)). For a death, the usual window is within two years of the death and within four years of the first symptom of the injury that led to it. Reporting a reaction to VAERS is not the same as filing a VICP petition and does not stop the clock. See [how long you have to file](/blog/how-long-do-i-have-to-file-a-vaccine-injury-claim).

## Three real VICP decisions involving ITP after MMR

These are real decisions from the U.S. Court of Federal Claims. We include them only to show how Table timing, medical records, and the six-month severity rule have been applied in ITP-after-MMR cases. Each outcome depended on that case's specific facts and records. None of them predicts what will happen in another case, and none should be read as binding precedent.

### A compensated Table claim: White v. Secretary of Health and Human Services

- **Docket:** No. 22-535V
- **Decided:** October 18, 2023 (Chief Special Master Brian H. Corcoran)
- **Read it:** [Decision awarding damages (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_22-vv-00535/pdf/USCOURTS-cofc-1_22-vv-00535-1.pdf)

Taylor White filed on May 13, 2022, on behalf of her minor child, T.J., alleging a Table ITP injury after an MMR vaccination on May 28, 2021. On May 10, 2023, the government filed its Rule 4(c) report and conceded the claim. According to the decision, HHS reviewed the petition and medical records and concluded that T.J. suffered ITP as a result of the MMR vaccine and that onset occurred within the appropriate timeframe. The Chief Special Master found entitlement the next day.

On October 18, 2023, the Chief Special Master adopted the government's proffer and awarded **$50,000.00** in pain and suffering for T.J.'s benefit, plus **$1,510.72** for past unreimbursable expenses — **$51,510.72** total under 42 U.S.C. § 300aa-15(a).

This case shows a path where the government agrees the Table criteria are met and the parties resolve damages by proffer. It does not describe every medical detail in the published damages decision, and it does not mean every similar-looking case will be conceded or paid the same amount.

### Dismissed for severity: Felix v. Secretary of Health and Human Services

- **Docket:** No. 21-1728V
- **Decided:** Opinion filed under seal July 30, 2024, and reissued publicly August 14, 2024 (Judge Armando O. Bonilla, U.S. Court of Federal Claims), sustaining the special master's April 29, 2024 dismissal
- **Read it:** [Opinion and order (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-01728/pdf/USCOURTS-cofc-1_21-vv-01728-1.pdf)

Parents of a child identified as E.A.F. alleged a Table injury after an MMR vaccination on August 6, 2018. About two weeks later, E.A.F. had severe bruising and was found to have a platelet count of 7,000/mm³. He was treated with IVIG and improved. The Office of Special Masters dismissed the petition for failure to meet the six-month severity requirement. On review, the Court of Federal Claims sustained that dismissal.

The court described platelet counts that returned to (and stayed in) a normal range well before six months after vaccination, and it applied the Federal Circuit's reasoning in *Wright*: ongoing platelet monitoring, without lingering or recurring signs of the blood disorder past the six-month mark, was not enough. The opinion notes that the acute disorder did not linger beyond that mark and that there were no recurring manifestations of the kind *Wright* discussed.

This case is a clear illustration of a common ITP pattern: a scary acute drop in platelets after MMR that improves with treatment, followed by a claim that fails because the statutory severity threshold is not met.

### Also dismissed for severity: Van Leer-Greenberg v. Secretary of Health and Human Services

- **Docket:** No. 20-1150V
- **Decided:** November 30, 2023 (Special Master Herbrina D. Sanders)
- **Read it:** [Decision on entitlement (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_20-vv-01150/pdf/USCOURTS-cofc-1_20-vv-01150-0.pdf)

Brett Van Leer-Greenberg filed on September 4, 2020, on behalf of his child, H.V.L., alleging Table thrombocytopenic purpura after an MMR vaccine on September 10, 2018 (and alternatively causation-in-fact from MMR, hepatitis A, and varicella given the same day). H.V.L. presented to the ER on October 1, 2018, with bruising and a platelet count of 7,000, received IVIG, and had follow-up platelet counts that rose over the following months, including 149,000 on February 4, 2019, and 150,000 on April 1, 2019.

The special master found that the petitioner had not provided preponderant evidence that the injury's residual effects lasted more than six months after the September 10, 2018 vaccinations, and denied compensation. The decision discusses *Wright* at length and concludes that ongoing monitoring and the activity-restriction evidence in the record did not meet the severity requirement.

Together with *Felix*, this decision shows why families whose child's ITP improves relatively quickly still need careful legal and medical review before assuming a VICP award is available — and why complete contemporaneous records matter.

## Records that often matter in these cases

- The vaccination record (vaccine, date, and lot if available)
- ER, hospital, and hematology notes from the acute episode
- Complete blood count (CBC) results over time, with dates
- Notes about petechiae, bruising, bleeding, IVIG or other treatment, and activity restrictions
- Follow-up visits showing how long low platelets or related precautions continued

Our post on [what medical records you need](/blog/what-medical-records-do-i-need-for-a-vaccine-injury-claim) can help you get organized.

## Get connected with an attorney

If your child (or you) developed ITP or thrombocytopenic purpura after an MMR vaccine, a lawyer who handles VICP cases can explain how the Table window and the six-month severity rule may apply to those records. VaccineInjuries.org is not a law firm and does not evaluate claims. We can connect you with an independent attorney who does.

[Get Connected With an Attorney](/intake). It is free to submit your information, and there is no obligation.

## Disclaimer

This article is for informational purposes only and is not legal or medical advice. Court decisions are described in plain language for general education. Outcomes depend on the specific facts and records of each case, and a past decision does not predict the result of another claim. Reading this page does not create an attorney-client relationship. For medical questions, speak with a qualified clinician; for advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
  {
    slug: "how-many-vicp-claims-compensated-each-year",
    title: "How Many VICP Claims Are Compensated Each Year?",
    excerpt:
      "In fiscal year 2025, HRSA’s statistics show 1,048 petitions found compensable and 259 dismissed. Here is what those program-wide numbers mean — including the settlement caveat — with three real court decisions.",
    date: "October 2026",
    datePublished: "2026-10-16",
    lastReviewed: "2026-10-16",
    category: "Claim Process",
    sources: [
      S.hrsaVicpData,
      S.hrsaVicpDataReportSep2026,
      S.usc300aa15,
      S.injuryTable,
      S.cdcVaccineSafety,
      S.caseCrawford2025,
      S.caseBickel2026,
      S.caseGrigsbyFees2026,
    ],
    content: `
## The short answer

In fiscal year 2025, the Health Resources and Services Administration (HRSA) reported **1,300** VICP petitions filed. Among **1,307** adjudications that year, **1,048** were found compensable and **259** were dismissed. Awards actually paid in fiscal year 2025 included about **$142.9 million** to petitioners ($142,867,925.42) and about **$206.6 million** in total outlays ($206,632,556.54), which also cover attorneys' fees and costs.

Those figures come from HRSA's [National Vaccine Injury Compensation Program Monthly Statistics Report updated September 1, 2026](https://web.archive.org/web/20260921183008/https://www.hrsa.gov/sites/default/files/hrsa/vicp/vicp-stats-09-01-26.pdf) (an Internet Archive copy of the official PDF). Fiscal year 2026 was still in progress when that report was updated. Through the September 1 report, HRSA showed **1,066** petitions filed in fiscal year 2026, and **1,059** adjudications (**893** compensable and **166** dismissed). Those are year-to-date counts in that report, not a finished year. HRSA's live [vaccine injury compensation data](https://www.hrsa.gov/vaccine-compensation/data) page now lists a newer statistics report updated October 1, 2026. We could not use that later file for the numbers in this article, so treat the September 1 figures as the latest ones we could verify. HRSA also notes that ongoing data validation can cause minor changes across fiscal years.

These are program-wide counts. They are not your personal odds of being compensated.

It also helps to keep perspective. Vaccines are generally safe, and serious injuries are rare. The [CDC's vaccine safety pages](https://www.cdc.gov/vaccine-safety/) describe how vaccines are monitored. HRSA, citing the CDC, says that from 2006 to 2024 over 5 billion doses of covered vaccines were distributed in the U.S. For petitions filed in that period, 15,108 were adjudicated and 11,152 of those were compensated — about one person compensated for every 1 million doses.

## What "compensated" means

HRSA's report states it directly: "Being awarded compensation for a petition does not necessarily mean that the vaccine caused the alleged injury."

The same page explains why. Approximately **60 percent** of all compensation awarded by the VICP comes from a negotiated settlement in which HHS has not concluded, based on its review of the evidence, that the vaccine caused the alleged injury. A settlement resolves the case. HRSA says it is not an admission by the United States or the Secretary of Health and Human Services that the vaccine caused the injury, and in settled cases the court does not decide causation. Our post on [whether a vaccine injury settlement means the vaccine caused the injury](/blog/does-a-vaccine-injury-settlement-mean-the-vaccine-caused-the-injury) walks through that distinction.

HRSA defines the two adjudication outcomes this way:

- **Compensable** means the person who filed was paid money by the VICP. That can happen through a concession by HHS, a decision on the merits by a special master or a judge of the U.S. Court of Federal Claims, or a settlement between the parties.
- **Dismissed** (HRSA also calls these non-compensable) means the person who filed was ultimately not paid. That includes a court decision finding the injury was not shown to be caused by a covered vaccine or did not meet the Vaccine Injury Table, a dismissal for another statutory requirement (such as the filing deadline, a vaccine the program does not cover, or the severity requirement), or a voluntary withdrawal.

"Compensable" in a given fiscal year is also not the same thing as "dollars paid" in that year. HRSA notes that petitioners' awards and attorneys' fees and costs are not necessarily paid in the same fiscal year as the decision that a petition is compensable. And adjudications in a fiscal year are generally not the same group of cases as the petitions filed that year. HRSA says it takes, on average, 2 to 3 years to adjudicate a petition after it is filed. Our post on [how long a VICP claim takes](/blog/how-long-does-a-vicp-claim-take) explains that timeline.

The amounts the program can pay, and the rules for attorneys' fees, are set out in the Vaccine Act at [42 U.S.C. § 300aa-15](https://www.law.cornell.edu/uscode/text/42/300aa-15). Reasonable fees can be awarded even when the petitioner is not compensated, if the petition was brought in good faith and there was a reasonable basis for the claim. By statute, the lawyer may not charge a separate fee, including a contingency fee. HRSA's report says the same thing: when the requirements are met, attorneys are paid by the VICP directly.

## A recent snapshot from HRSA's data report

The table below compares the two most recent complete fiscal years in the September 1, 2026 report. Petitions filed, adjudications, and awards paid are three different counts. A case filed in one year may be decided in another, and the check may go out in a third.

| | FY 2024 | FY 2025 |
|---|---|---|
| Petitions filed | 1,185 | 1,300 |
| Adjudications found compensable | 1,132 | 1,048 |
| Adjudications dismissed | 308 | 259 |
| Total adjudications | 1,440 | 1,307 |
| Paid to petitioners | $149,653,343.68 | $142,867,925.42 |
| Total outlays (petitioners plus attorneys' fees and costs) | $203,127,230.94 | $206,632,556.54 |

In fiscal year 2025, HRSA counted **1,037** compensated awards paid. That is close to, but not the same as, the **1,048** compensable adjudications that year. Total outlays were a bit higher in fiscal year 2025 than in fiscal year 2024 even though the amount paid to petitioners was a bit lower, because total outlays also include attorneys' fees and costs (including some fees in dismissed cases and interim fee payments).

Influenza accounts for a large share of the program's recent work. In the report's table of petitions filed from January 1, 2006, through December 31, 2024, influenza was the first vaccine listed on **9,771** of **15,108** adjudicated petitions, and **8,369** of those influenza petitions were compensable. HRSA notes that influenza vaccine "now is named in the majority of all VICP petitions." A petition can name more than one vaccine; the table counts the first vaccine listed. Those historical rows are not the same as the fiscal-year counts above.

The September 1, 2026 report is the source for every figure in this section. You can read it on the [Internet Archive copy of the official PDF](https://web.archive.org/web/20260921183008/https://www.hrsa.gov/sites/default/files/hrsa/vicp/vicp-stats-09-01-26.pdf), and HRSA's current data page is at [hrsa.gov/vaccine-compensation/data](https://www.hrsa.gov/vaccine-compensation/data). As of this writing, that live page points to a statistics report updated October 1, 2026. If that update revises a number, the September 1 figures here are the ones we were able to check.

## Three real cases

Yearly totals hide how different one petition can be from the next. These are real decisions from the U.S. Court of Federal Claims. We include them only to show a compensated Table claim, a denied claim, and a dismissed claim in which fees were still paid. Each outcome depended on that case's specific facts and records. None of them predicts what will happen in another case, and none should be read as binding precedent.

### A compensated Table claim: Crawford v. Secretary of Health and Human Services

- **Docket:** No. 25-148V
- **Decided:** November 7, 2025 (Chief Special Master Brian H. Corcoran)
- **Read it:** [Decision awarding damages (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_25-vv-00148/pdf/USCOURTS-cofc-1_25-vv-00148-1.pdf)

Deborah Crawford filed on January 27, 2025, alleging a Table shoulder injury related to vaccine administration (SIRVA) after a flu vaccine she received on September 28, 2023. The case was assigned to the Special Processing Unit. On August 5, 2025, the Secretary's report said the claim was appropriate for compensation as a SIRVA Table injury. The next day, the Chief Special Master ruled that she was entitled to compensation. On November 7, 2025, the government proffered **$40,000.00** for pain and suffering, she agreed, and the Chief Special Master awarded that lump sum. The decision says the amount represents compensation for all damages available under Section 15(a) of the Vaccine Act.

SIRVA is listed on the [Vaccine Injury Table](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3). Meeting a Table injury creates a legal presumption. This case shows one path where HHS reviews the records, agrees the Table criteria are met, and the parties resolve the amount by proffer. It does not mean every shoulder claim will be conceded or paid $40,000.

### Entitlement denied: Bickel v. Secretary of Health and Human Services

- **Docket:** No. 21-867V
- **Decided:** January 23, 2026 (Chief Special Master Brian H. Corcoran); the public copy on GovInfo was filed February 17, 2026
- **Read it:** [Entitlement decision (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-00867/pdf/USCOURTS-cofc-1_21-vv-00867-0.pdf)

Allen Bickel filed on February 4, 2021, alleging Guillain-Barré syndrome (GBS) after a Tdap vaccine he received on May 24, 2019. The Chief Special Master decided the case on the written record. He wrote: "I hereby deny entitlement." He found: "Petitioner has not preponderantly established that the Tdap vaccine can cause GBS, or did so to him." The conclusion states: "Petitioner is therefore not entitled to compensation."

The decision also notes that there is a Table claim for GBS after flu vaccine, and that there is no Table claim for GBS after a tetanus-containing vaccine such as Tdap. This petition was an off-Table claim, which means the petitioner had to prove causation. A denial is one of the outcomes inside HRSA's "dismissed" column. It is a reasoned decision on one record, not a rule for every GBS or Tdap claim.

### A dismissed claim, with fees still paid: Grigsby v. Secretary of Health and Human Services

- **Docket:** No. 24-1515V
- **Decided:** February 19, 2026 (Chief Special Master Brian H. Corcoran)
- **Read it:** [Decision granting award of attorney's fees and costs (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-01515/pdf/USCOURTS-cofc-1_24-vv-01515-1.pdf)

Michael Grigsby filed on September 27, 2024, alleging chronic inflammatory demyelinating polyneuropathy (CIDP) after a Tdap vaccine administered on January 30, 2023. The government opposed entitlement. On July 14, 2025, the Chief Special Master ordered the petitioner to show cause why the claim should not be dismissed. On September 19, 2025, the petitioner moved to dismiss, stating that further investigation would not show he was entitled to compensation. The claim was dismissed.

The February 19, 2026 decision is about fees, not about awarding compensation for the injury. The Chief Special Master found a reasonable basis for the claim and granted attorneys' fees and costs of **$33,625.76** ($31,868.40 in fees and $1,757.36 in costs), even though the petitioner was not compensated. That is the statute at work: [42 U.S.C. § 300aa-15](https://www.law.cornell.edu/uscode/text/42/300aa-15) allows reasonable fees in an unsuccessful case when the good-faith and reasonable-basis requirements are met. It does not mean every dismissed claim will have its fees paid. Our post on [how VICP attorneys get paid](/blog/how-do-vicp-attorneys-get-paid) explains the fee rules in more detail.

## What this means if you are considering a claim

Start with what the statistics do not say. A year with 1,048 compensable adjudications is not a promise that a particular injury will be paid, and a year with 259 dismissals is not a reason to assume a well-documented claim will fail. Settlements, concessions, and litigated decisions are all inside the compensable count, and HRSA is explicit that most compensation comes from settlements in which HHS has not concluded the vaccine caused the injury.

Timing still matters. Filing deadlines are short, and they run from the injury, not from when you read a statistics report. Our guide on [how long you have to file](/blog/how-long-do-i-have-to-file-a-vaccine-injury-claim) explains the deadlines. If you are gathering records while you decide, [what medical records you need](/blog/what-medical-records-do-i-need-for-a-vaccine-injury-claim) is a practical starting point.

A lawyer who handles VICP cases can tell you whether the Vaccine Injury Table may apply, what has to be proved if it does not, and how fees would work if the claim is paid, denied, or dismissed.

## Get connected with an attorney

VaccineInjuries.org is not a law firm and does not evaluate claims. We can connect you with an independent attorney who handles vaccine injury cases.

[Get Connected With an Attorney](/intake). It is free to submit your information, and there is no obligation.

## Disclaimer

This article is for informational purposes only and is not legal advice. Court decisions are described in plain language for general education. Outcomes depend on the specific facts and records of each case, and a past decision does not predict the result of another claim. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
  {
    slug: "transverse-myelitis-after-vaccine-vicp-claims",
    title: "Transverse Myelitis After a Vaccine: A Plain-English Guide to VICP Claims",
    excerpt:
      "Transverse myelitis is not on the Vaccine Injury Table, so a VICP claim has to prove the vaccine caused it. Here is what that takes, why the timing of the first symptoms often decides these cases, and three real court decisions.",
    date: "October 2026",
    datePublished: "2026-10-19",
    lastReviewed: "2026-10-19",
    category: "Qualifying Injuries",
    sources: [
      S.nindsTm,
      S.injuryTable,
      S.usc300aa11,
      S.usc300aa16,
      S.cicpRegs,
      S.caseSongero2025,
      S.caseGoodwin2026,
      S.caseVarughese2026,
    ],
    content: `
## The short answer

Transverse myelitis (TM) after a vaccine can be the basis of a VICP claim, but it is one of the harder kinds of claim. TM is **not listed on the Vaccine Injury Table for any vaccine** ([42 CFR § 100.3](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3)). That means there is no presumption that the vaccine caused it. Instead, the person filing (the petitioner) has to prove, with medical records, medical literature and usually expert opinion, that the vaccine more likely than not caused their TM.

It also helps to keep perspective. Vaccines are generally safe, and serious injuries like this are rare. The National Institute of Neurological Disorders and Stroke (NINDS) says transverse myelitis "is usually caused by other conditions," such as immune system disorders and infections. It lists a post-vaccine autoimmune reaction as one possible cause, describing it as happening "rarely" ([NINDS — Transverse Myelitis](https://www.ninds.nih.gov/health-information/disorders/transverse-myelitis)). In many cases, no cause is found.

This guide is about the VICP, which covers routinely recommended vaccines such as flu, Tdap and HPV. COVID-19 vaccine injury claims go to a different program, the Countermeasures Injury Compensation Program (CICP), which has a much shorter deadline. See [Can I sue for COVID-19 vaccine side effects?](/blog/can-i-sue-for-covid-vaccine-side-effects)

## What transverse myelitis is, in plain English

NINDS describes TM as a neurological disorder caused by inflammation of the spinal cord. The inflammation can damage myelin, the insulating material around nerve fibers. Which parts of the body are affected depends on where in the spinal cord the damage is, and usually it is the area at and below that spot. Many people feel a band-like sensation across the trunk.

According to NINDS, classic symptoms include:

- Weakness in the legs, and sometimes the arms, that can worsen quickly
- Pain, often in the lower back or as sharp, shooting pain down the legs or arms or around the torso
- Abnormal sensations such as burning, tingling or numbness
- Bladder and bowel problems

TM can develop over minutes to several days (acute) or over one to four weeks (subacute). Doctors usually confirm it with an MRI, and blood tests and a spinal tap help rule out other causes. NINDS says most people have at least partial recovery, with most of it in the first three months, though healing can take many months and some people have lasting effects.

Our [transverse myelitis injury guide](/injuries/transverse-myelitis) summarizes the basics on one page.

## Why TM is an "off-Table" claim

The Vaccine Injury Table lists specific injuries for specific vaccines, each with a time window. If an injury fits the Table, causation is presumed unless another cause is shown. TM does not appear on the Table at all, so every TM claim is an off-Table claim. Our guide to [Table vs. off-Table injuries](/blog/difference-between-table-injury-and-off-table-injury) explains the difference.

The final diagnosis matters, too. Guillain-Barré syndrome (GBS) *is* on the Table for seasonal flu vaccines, with onset 3 to 42 days after vaccination. But the Table's GBS definition lists **myelitis** among the diagnoses that rule out Table GBS. So when early records say "GBS versus a spinal cord problem," and the final diagnosis is TM, the claim is generally treated as off-Table.

## What an off-Table claim has to prove

Court decisions in TM cases apply a three-part test from a Federal Circuit case called *Althen*. As the Court of Federal Claims summarized it in the *Goodwin* opinion discussed below, a petitioner must show "(1) a medical theory causally connecting the vaccination and the injury; (2) a logical sequence of cause and effect showing that the vaccination was the reason for the injury; and (3) a showing of a proximate temporal relationship between vaccination and injury."

In plain words:

1. **Can it happen?** A reliable medical explanation of how this vaccine could cause TM.
2. **Did it happen here?** Evidence that the vaccine actually caused this person's TM, often including what treating doctors wrote.
3. **Does the timing fit?** The first symptoms started within a window that, medically, makes it reasonable to link them to the vaccine.

The third part, timing, comes up again and again in TM cases. The three decisions below show onset that was found acceptable, onset found too late, and onset found too soon.

## Three real VICP decisions involving transverse myelitis

These are real decisions from the U.S. Court of Federal Claims. We include them only to show how the rules have been applied. Each outcome depended on that case's own medical records, experts and evidence. None of them predicts what will happen in another case, and none should be read as binding precedent.

### Compensation found at 63 days: Songero v. Secretary of Health and Human Services

- **Docket:** No. 18-300V
- **Decided:** Ruling on entitlement filed October 3, 2025 (Special Master Mindy Michaels Roth)
- **Read it:** [Ruling on entitlement (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_18-vv-00300/pdf/USCOURTS-cofc-1_18-vv-00300-0.pdf)

Diana Songero received a flu vaccine on September 24, 2016, when she was 68. Sixty-three days later, on November 26, 2016, she went to the emergency room with numbness in both arms and weakness in both hands, and she was later diagnosed with TM. The government argued that 63 days was too long after the vaccine and that an undiagnosed urinary tract infection was the more likely trigger.

The special master found that, on the facts of this case, the records and the medical literature supported a 63-day onset as medically appropriate. The ruling noted that program decisions had found entitlement, "albeit rarely," in TM, ADEM and GBS cases with onset up to 65 days after vaccination. The special master also rejected the infection theory, pointing out that the urinalysis was negative for bacteria and that extensive testing found no bacterial or viral infection. The special master ruled that Ms. Songero was entitled to compensation, with damages to be decided separately. The ruling itself does not set an amount.

The special master was careful to say this was not a finding that there is no limit on how long after a vaccine these conditions can start.

### Too late at 68 days: Goodwin v. Secretary of Health and Human Services

- **Docket:** No. 19-503V
- **Decided:** Opinion and order filed under seal April 2, 2026, and reissued publicly April 23, 2026 (Judge Zachary N. Somers, U.S. Court of Federal Claims), sustaining Special Master Christian J. Moran's October 7, 2025 decision denying compensation
- **Read it:** [Opinion and order (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_19-vv-00503/pdf/USCOURTS-cofc-1_19-vv-00503-3.pdf)

Trenton Goodwin received an HPV vaccine on March 22, 2018, when he was a minor. On May 30, 2018, 68 days later, he was hospitalized with numbness, weakness, balance problems and trouble standing, and an MRI led to a TM diagnosis that both sides' neurologists agreed was correct. His mother filed the claim on April 4, 2019.

The case went back and forth. The special master first denied the claim in 2024 because of the timing. The Court of Federal Claims sent it back for a fuller explanation. After more expert reports and a multi-day hearing, the special master denied it again on October 7, 2025, this time finding that the claim failed all three parts of the *Althen* test. On review, the court explained that "the special master concluded that the medically accepted onset window for transverse myelitis following vaccination is up to 42 days," found that the special master's reasoning was not arbitrary, an abuse of discretion or contrary to law, and sustained the denial.

*Songero* and *Goodwin* involved different vaccines, different experts and different records, which is part of why a 63-day onset was accepted in one case and a 68-day onset was rejected in the other. They are a good illustration of why timing arguments in TM cases are so fact-specific.

### Too soon at about one day: Varughese v. Secretary of Health and Human Services

- **Docket:** No. 22-1408V
- **Decided:** Decision filed July 23, 2026, and posted publicly September 1, 2026 (Special Master Daniel T. Horner)
- **Read it:** [Decision (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_22-vv-01408/pdf/USCOURTS-cofc-1_22-vv-01408-0.pdf)

Annamma Varughese received a flu vaccine on September 21, 2021, at age 66. Her symptoms began the next day. On September 24 she went to the emergency department with chest pain radiating to her back and weakness and numbness in both legs. Doctors first considered GBS, but she was later diagnosed with TM and treated with a five-day course of IV steroids. A second-opinion neurologist called it idiopathic TM, meaning no cause was identified.

Her expert proposed that parts of the flu vaccine triggered an immune attack on neurofascin, a molecule found on nerve fibers. The government's experts said the immune response that theory depends on takes days to develop, not one day. The special master found that the theory was not shown to be reliable on this record and that the timing did not fit it. The decision acknowledged that symptoms the day after a flu shot can look like a "striking coincidence," but concluded that "the onset of petitioner’s TM occurred too soon after vaccination to be causally related" and denied compensation. A decision like this can be challenged with a motion for review; as of October 19, 2026, we did not find a later opinion in this case on GovInfo.

Taken together with *Songero*, this case also shows that two flu-vaccine TM claims can come out differently. The outcome turned on the specific theory, experts, timing and records in each case.

## The severity rule and filing deadlines

Even a strong causation case has to meet the Vaccine Act's severity requirement. In general, the injured person must have had residual effects for **more than six months after the vaccination**, or have been hospitalized and had surgery for the injury, or have died ([42 U.S.C. § 300aa-11(c)(1)(D)](https://www.law.cornell.edu/uscode/text/42/300aa-11)). See our post on [severity requirements](/blog/what-are-the-severity-requirements-for-a-vicp-claim).

For most VICP injury claims, the petition must be filed within **36 months of the first symptom** ([42 U.S.C. § 300aa-16](https://www.law.cornell.edu/uscode/text/42/300aa-16)). Because TM symptoms can start quickly and recovery can take a long time, it is easy to lose track of that clock. Reporting a reaction to VAERS is not the same as filing a claim. For COVID-19 vaccines, CICP rules require a request to be filed within one year of the vaccination ([42 CFR § 110.42](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-110)). See [how long you have to file](/blog/how-long-do-i-have-to-file-a-vaccine-injury-claim).

## Records that often matter in TM claims

Because there is no Table presumption, the records carry a lot of weight. In the decisions above, the exact date of the first symptom, the tests used to rule out other causes and what treating doctors wrote all played a part. Records that often matter include:

- The vaccination record (vaccine, date and lot number if available)
- A clear, dated timeline of the first symptoms, written as close to the time as possible
- ER, hospital and neurology notes, including early possible diagnoses
- MRI reports of the spine and brain
- Spinal tap (lumbar puncture) results, antibody tests and blood work used to rule out other causes
- Any notes from treating doctors about what they think caused the TM
- Rehabilitation, urology and follow-up records showing recovery or lasting effects

Our post on [what medical records you need](/blog/what-medical-records-do-i-need-for-a-vaccine-injury-claim) can help you get organized, and [what to do in the first 30 days](/blog/first-30-days-suspected-vaccine-injury) covers early steps.

## Get connected with an attorney

If you or a family member developed transverse myelitis after a vaccine, a lawyer who handles VICP cases can explain how the timing, the medical records and the six-month severity rule may apply. Off-Table claims usually depend on expert medical opinion, which is one reason many families work with an attorney. VaccineInjuries.org is not a law firm and does not evaluate claims. We can connect you with an independent attorney who does.

[Get Connected With an Attorney](/intake). It is free to submit your information, and there is no obligation.

## Disclaimer

This article is for informational purposes only and is not legal or medical advice. Court decisions are described in plain language for general education. Outcomes depend on the specific facts and records of each case, and a past decision does not predict the result of another claim. Reading this page does not create an attorney-client relationship. For medical questions, speak with a qualified clinician; for advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
  {
    slug: "do-i-need-a-lawyer-to-file-a-vicp-claim",
    title: "Do I Need a Lawyer to File a VICP Claim?",
    excerpt:
      "No, the law lets you file a VICP petition on your own, but HRSA says most people hire a lawyer. Here is what filing without one involves, how lawyers are paid in the VICP, and three real court decisions involving people who filed on their own.",
    date: "October 2026",
    datePublished: "2026-10-21",
    lastReviewed: "2026-10-21",
    category: "Legal Help",
    sources: [
      S.hrsaHowToFile,
      S.hrsaVicpFaq,
      S.cfcVaccineProSe,
      S.cfcVaccineAttorneysList,
      S.osmGuidelinesPdf,
      S.cfcFeeSchedule,
      S.usc300aa11,
      S.usc300aa15,
      S.usc300aa16,
      S.hrsaCicpVsVicp,
      S.casePartovi2024,
      S.caseFisher2025,
      S.caseWJCosts2025,
    ],
    content: `
## The short answer

No. You are not required to have a lawyer to file a claim with the National Vaccine Injury Compensation Program (VICP). The Health Resources and Services Administration (HRSA), the HHS agency that runs the program, says on its [How to File a Petition](https://www.hrsa.gov/vaccine-compensation/how-to-file) page: "The petition is a legal document that you can prepare yourself, or hire a lawyer to prepare and file on your behalf. Because this is a legal process, most people hire a lawyer."

The court that hears these claims says something similar. The Office of Special Masters at the U.S. Court of Federal Claims keeps a [list of vaccine attorneys](https://www.uscfc.uscourts.gov/vaccine-attorneys-list) and notes that people filing on their own "are not required, but are encouraged, to retain an attorney."

So the honest answer is: you can do it yourself, but most people don't, and the way lawyers are paid in this program is a big part of why.

A quick word of perspective first. Vaccines are generally safe, and serious vaccine injuries are rare. HRSA's [VICP FAQ](https://www.hrsa.gov/vaccine-compensation/faq) describes the program as "an alternative to the tort system" and "a no-fault compensation program" for the uncommon cases where someone may have been seriously hurt.

## What filing "pro se" means

Courts use the term **pro se** for a person who represents themselves without a lawyer. In a VICP case, the person filing is called the petitioner, and the other side is the Secretary of Health and Human Services, represented by lawyers from the U.S. Department of Justice. That is worth knowing up front: if you file on your own, government lawyers will still review and respond to your claim.

The court does try to make self-filing possible. Its [Vaccine Pro Se Information](https://www.uscfc.uscourts.gov/vaccine-pro-se-information) page offers sample petitions (one for Table claims and one for off-Table claims), a sample certificate of service, the petition cover sheet, and an application to proceed without paying the filing fee. The Office of Special Masters' [Guidelines for Practice](https://www.uscfc.uscourts.gov/sites/cfc/files/Vaccine%20Guidelines%203.03.2025.pdf) say they "were written to aid such attorneys and pro se litigants."

## What you would have to do on your own

Based on the Vaccine Act and the court's Guidelines, a person filing without a lawyer is responsible for things like:

- **Writing and signing the petition.** The Guidelines say the petition must be signed by the petitioner if appearing pro se.
- **Gathering and filing the records.** The Vaccine Act says a petition must include supporting documents, including medical records ([42 U.S.C. § 300aa-11(c)](https://www.law.cornell.edu/uscode/text/42/300aa-11)). The Guidelines say a pro se petitioner must also file an exhibit list, a kind of table of contents for the records, and follow the court's exhibit and page-numbering rules.
- **Showing the injury is serious enough.** The petition has to show, among other things, that the injury's effects lasted more than six months, or that it led to an inpatient hospital stay and surgery, or that it caused a death.
- **Meeting the deadline.** For most injuries, a petition must be filed within 36 months after the first symptom or manifestation of onset ([42 U.S.C. § 300aa-16](https://www.law.cornell.edu/uscode/text/42/300aa-16)). Our guide on [how long you have to file](/blog/how-long-do-i-have-to-file-a-vaccine-injury-claim) covers the deadlines, including the different rules for a death.
- **Paying the filing fee or asking to have it waived.** The court's [fee schedule](https://www.uscfc.uscourts.gov/fee-schedule) (effective July 28, 2025) lists a $405 filing fee for a complaint or petition. The fee schedule says all filing fees are waived for non-prisoner filers who are granted in forma pauperis status, which is the court's term for permission to proceed without paying because of limited income. HRSA says that if you are unable to pay the filing fee, you can call the court at 202-357-6400.
- **Sending a copy to HHS.** HRSA says that after you submit your petition to the court, you must also send a copy to HHS, either through the HRSA Injury Compensation Programs website or by mail.
- **Following separate filing procedures.** The Guidelines say people without lawyers cannot use the court's electronic case filing system and describe other ways for them to file, such as paper or email.

If the claim moves forward, it can also involve medical expert reports, legal briefs, a hearing, and negotiation over the amount of compensation. Our post on [what happens after you file a VICP petition](/blog/what-happens-after-you-file-a-vicp-petition) walks through those stages.

## Why most people hire a lawyer anyway

The main reason is how VICP lawyers are paid. Under the Vaccine Act ([42 U.S.C. § 300aa-15(e)](https://www.law.cornell.edu/uscode/text/42/300aa-15)):

- If you are awarded compensation, the special master or court must also award reasonable attorneys' fees and costs.
- If you are not awarded compensation, the special master or court may still award reasonable fees and costs if the petition was brought in good faith and there was a reasonable basis for the claim.
- An attorney may not charge any fee for work on a VICP petition beyond the amount the special master or court awards. That rules out a separate contingency fee on top of the award.

The court's Guidelines describe it this way: "Unlike the contingent fee system prevailing in most other tort litigation, petitioners' reasonable attorneys' fees and costs are paid by the Vaccine Program, including, in most cases, fees and costs for unsuccessful litigants."

In other words, the system is set up so that a VICP lawyer's pay is set by the special master and paid by the program, rather than taken as a percentage of your award. It is still smart to ask any lawyer, before you sign anything, exactly how fees and costs will be handled in your case. Our explainer on [how VICP attorneys get paid](/blog/how-do-vicp-attorneys-get-paid) goes into more detail.

Other reasons people hire a lawyer include knowing which records matter, finding and working with medical experts (especially for injuries that are not on the Vaccine Injury Table), and negotiating with government lawyers who handle these cases every day.

## Three real cases involving people who filed on their own

These are real decisions from the U.S. Court of Federal Claims involving petitioners who filed without a lawyer. We include them only to show what can happen in different situations. Each outcome depended on that case's specific facts and records, none of them predicts what will happen in another case, and none should be read as binding precedent.

### A self-filed claim that was compensated: Partovi v. Secretary of Health and Human Services

- **Docket:** No. 23-1094V
- **Decided:** February 29, 2024 (Special Master Thomas L. Gowen)
- **Read it:** [Decision on damages (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_23-vv-01094/pdf/USCOURTS-cofc-1_23-vv-01094-1.pdf)

The petitioner filed pro se on July 17, 2023, alleging a shoulder injury related to vaccine administration (SIRVA) after flu and HPV vaccinations on October 12, 2022. On February 29, 2024, the government filed a combined report and proffer conceding that he was entitled to compensation, and the special master issued a ruling on entitlement the same day. The petitioner agreed to the government's proffer, and the special master awarded a lump sum of $40,000 for pain and suffering.

This case shows that a person filing alone can be compensated, particularly when the government agrees the claim meets the requirements. Many claims are not that straightforward.

### A self-filed claim that missed the deadline: Fisher v. Secretary of Health and Human Services

- **Docket:** No. 24-1732V
- **Decided:** September 2025, reissued for public availability October 20, 2025 (Special Master Herbrina D. S. Young)
- **Read it:** [Decision on entitlement (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-01732/pdf/USCOURTS-cofc-1_24-vv-01732-0.pdf)

The petitioner filed pro se on October 23, 2024, alleging Guillain-Barré syndrome and/or chronic inflammatory demyelinating polyneuropathy (CIDP) after a flu vaccine given on September 7, 2021. The government opposed compensation and argued, among other things, that the claim was filed too late. The special master looked at when the first symptoms began, which the medical records and the petitioner's own account placed in October 2021. Whether the symptoms started as early as October 8 or as late as October 15, 2021, the special master found that the 36-month deadline had passed before the petition was filed. The petition was dismissed as time-barred.

This case shows how unforgiving the filing deadline is. The clock runs from the first symptom, not from the diagnosis or from when you decide to file.

### Costs repaid after a self-filed claim was dismissed: W.J. v. Secretary of Health and Human Services

- **Docket:** No. 21-1342V
- **Decided:** April 23, 2025, reissued for public availability May 23, 2025 (Special Master Nora Beth Dorsey)
- **Read it:** [Decision awarding petitioners' costs (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-01342/pdf/USCOURTS-cofc-1_21-vv-01342-3.pdf)

Parents filed a petition on their own on behalf of their child, alleging injuries after an MMR vaccination given in 2005. The special master dismissed the claim in 2022 as filed too late under the Vaccine Act's statute of limitations, a judge of the Court of Federal Claims denied review, the U.S. Court of Appeals for the Federal Circuit affirmed the dismissal, and the Supreme Court declined to hear the case. The parents then asked the program to repay their costs. The special master found that the claim appeared to have been brought in good faith and on a reasonable basis, and awarded $1,833.81 for filing fees in three courts, printing, and postage.

This case shows that the fees-and-costs rule can apply even to people without a lawyer, and even when the claim itself is not successful. Of course, with no lawyer there were no attorneys' fees to award, only the costs the family paid themselves.

## What about COVID-19 vaccine claims?

Claims involving COVID-19 vaccines do not go to the VICP. They go to the Countermeasures Injury Compensation Program (CICP), which HHS decides through an administrative process rather than a court case. According to HRSA's [comparison of the two programs](https://www.hrsa.gov/cicp/cicp-vicp), the CICP does not pay attorneys' fees and costs, and it generally has a one-year filing deadline. Our post on [COVID-19 vaccine claims and the CICP](/blog/can-i-sue-for-covid-vaccine-side-effects) explains more.

## If you decide to talk to a lawyer

Whether you file on your own or with help is your choice. If you want to explore working with a lawyer, a few practical tips:

- **Start early.** Because of the filing deadline, it helps to talk with someone well before the three-year mark.
- **Look for VICP experience.** Vaccine claims are heard in a specialized federal court with its own rules. The court's [Vaccine Attorneys List](https://www.uscfc.uscourts.gov/vaccine-attorneys-list) is one public starting point; the court notes that it does not endorse the attorneys on the list and that you are not limited to them.
- **Ask about fees and costs in writing.** Ask how fees are handled under the Vaccine Act and whether you will be expected to pay anything yourself.
- **Organize your records.** Our post on [what medical records you need](/blog/what-medical-records-do-i-need-for-a-vaccine-injury-claim) can help, whoever ends up filing.

## Get connected with an attorney

VaccineInjuries.org is not a law firm, does not give legal advice and does not evaluate claims. If you would like to talk with someone who handles VICP cases, we can connect you with an independent attorney who can explain your options.

[Get Connected With an Attorney](/intake). It is free to submit your information, and there is no obligation.

## Disclaimer

This article is for informational purposes only and is not legal advice. Court decisions are described in plain language for general education. Outcomes depend on the specific facts and records of each case, and a past decision does not predict the result of another claim. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
  {
    slug: "how-vicp-compensation-is-decided",
    title: "Settlement, Proffer, or Court Decision? How VICP Compensation Gets Decided",
    excerpt:
      "Most paid VICP claims never reach a trial. HRSA's data show most are resolved by settlement or by a government concession. Here is how each path works, what happens after the decision, and three real court decisions that show each one.",
    date: "October 2026",
    datePublished: "2026-10-23",
    lastReviewed: "2026-10-23",
    category: "Claim Process",
    sources: [
      S.hrsaVicpDataReportOct2026,
      S.hrsaVicpData,
      S.osmGuidelinesPdf,
      S.vaccineRules,
      S.usc300aa15,
      S.usc300aa21,
      S.caseEberling2024,
      S.caseGreeley2026,
      S.caseMarcillo2023,
    ],
    content: `
## The short answer

A National Vaccine Injury Compensation Program (VICP) claim that gets paid usually ends in one of three ways: the government concedes the claim, the two sides settle it, or a special master decides it after weighing the evidence. Most paid claims end in the first two ways, not with a judge picking a winner.

Whichever way it goes, the money is not paid until a special master at the U.S. Court of Federal Claims signs a written decision, the court enters judgment, and the person who filed accepts it in writing or lets the 90-day deadline for choosing pass.

A word of perspective first. Vaccines are generally safe, and serious vaccine injuries are rare. The Health Resources and Services Administration (HRSA), the HHS agency that runs the VICP, says in its [monthly statistics report](https://web.archive.org/web/20261015000519/https://www.hrsa.gov/sites/default/files/hrsa/vicp/vicp-stats-10-01-26.pdf) that from 2006 to 2024 over 5 billion doses of covered vaccines were distributed in the U.S., and that "for every 1 million doses of vaccine that were distributed, approximately 1 individual was compensated."

## Two questions every claim has to answer

It helps to know that a VICP case is really two questions:

1. **Entitlement.** Is the person entitled to compensation at all? This is where the government (formally, the Secretary of Health and Human Services, represented by U.S. Department of Justice lawyers) either agrees or fights about whether the injury fits the [Vaccine Injury Table](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3) or was caused by the vaccine.
2. **Damages.** If so, how much? This covers things like pain and suffering, medical expenses and lost wages.

The two questions can be resolved in different ways. A case can have entitlement conceded by the government and still end up with a fight over damages, as one of the cases below shows.

## The three ways a paid claim gets resolved

HRSA's statistics report defines three ways a claim can end up compensable:

- **Concession.** HHS reviews the evidence and concludes the petitioner is entitled to compensation, either because it is more likely than not that the vaccine caused the injury or because the evidence supports the criteria of the Vaccine Injury Table.
- **Court decision.** A special master or a judge of the Court of Federal Claims "issues a legal decision after weighing the evidence presented by both sides." HRSA says HHS abides by the final decision even if it still disagrees.
- **Settlement.** The two sides negotiate a resolution. HRSA is explicit that a settlement "is not an admission by the United States or the Secretary of Health and Human Services that the vaccine caused the petitioner's alleged injuries," and that in settled cases the court does not decide that the vaccine caused the injury.

Here is how compensated petitions broke down in HRSA's report updated October 1, 2026, for petitions filed from January 1, 2006 through December 31, 2024:

| How the paid petitions were resolved | Number | Share of paid petitions |
| --- | --- | --- |
| Settlement | 6,581 | about 59% |
| Concession | 4,103 | about 36% |
| Court decision | 564 | about 5% |
| **Total compensated** | **11,248** | 100% |

For the same group of petitions, HRSA counts 3,997 that were dismissed or found non-compensable, out of 15,245 adjudicated. (The percentages are our own arithmetic from HRSA's counts. HRSA's report separately says that "approximately 60 percent of all compensation awarded by the VICP comes as result of a negotiated settlement.")

One more note: HRSA counts each petition in one category, but real cases can mix paths. In the third case below, the government conceded entitlement, and the special master still had to decide part of the damages.

## Step one: the government's report

After a petition is filed and the medical records are in, the government has to take a position. Under [Vaccine Rule 4(c)](https://www.uscfc.uscourts.gov/sites/cfc/files/Vaccine%20Rules%207.27.26.pdf), within 90 days after the petition is filed, or on a schedule the special master sets once the required records are filed, the government must file a report giving "a full and complete statement of its position as to why an award should or should not be granted." The rule adds that "general denials are not sufficient."

That report, often called the Rule 4(c) report, is a fork in the road. If the government concedes, the special master usually issues a ruling that the petitioner is entitled to compensation, and the case moves to damages. If the government opposes, the case heads toward expert reports, briefs and possibly a hearing, unless the parties settle along the way.

## Path one: concession, then a proffer

When the government has conceded entitlement, damages are often resolved by a **proffer**. A proffer is the government's written statement of the amount it believes should be awarded. If the petitioner agrees, the special master adopts it in a decision.

The court's [Guidelines for Practice](https://www.uscfc.uscourts.gov/sites/cfc/files/Vaccine%20Guidelines%203.03.2025.pdf) explain why this path can be quicker: "If entitlement has been determined prior to the tentative settlement, a proffer is often used, resulting in faster processing."

## Path two: settlement by stipulation

When the government has not conceded, the parties can still agree to settle. The deal is written up as a **stipulation**, an agreement filed with the court that sets out the payment. In the stipulations we have read, the government keeps its position that the vaccine did not cause the injury and settles anyway.

HRSA lists reasons a petition might settle, including "consideration of prior U.S. Court of Federal Claims decisions," "a desire to minimize the risk, time, and expense of litigating a case," and "the desire to resolve a petition quickly." The Guidelines add that when entitlement has not been decided, the special master will issue a "15-Week Order" setting deadlines for finalizing and filing the signed settlement.

## Path three: the special master decides

When the two sides can't agree, the special master decides. That can happen on entitlement (did the vaccine cause the injury, or does it meet the Table?) or on damages (how much?), or both. The Guidelines say that "when a particular damages component is contested, the special master often will hold a hearing on the matter before deciding the issue."

For pain and suffering, the Vaccine Act caps the award at $250,000 ([42 U.S.C. § 300aa-15(a)(4)](https://www.law.cornell.edu/uscode/text/42/300aa-15)). Other items, like medical expenses and lost earnings, are covered under separate parts of the same section.

## Three real cases, one for each path

These are real decisions from the U.S. Court of Federal Claims. All three happen to involve fainting (vasovagal syncope) after a vaccine, which makes it easier to compare how the process played out. We include them only to show how each path works. Each outcome depended on that case's own facts and records, none predicts what would happen in another case, and none should be read as binding precedent.

### Concession and proffer: Eberling v. Secretary of Health and Human Services

- **Docket:** No. 22-778V
- **Decided:** October 8, 2024 (Chief Special Master Brian H. Corcoran)
- **Read it:** [Decision awarding damages, with the government's proffer attached (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_22-vv-00778/pdf/USCOURTS-cofc-1_22-vv-00778-1.pdf)

Andrew Eberling filed on July 18, 2022, alleging that he fainted after receiving an HPV vaccine on August 2, 2019, and suffered injuries including a broken nose and cuts to his face. The case was assigned to the court's Special Processing Unit. On September 10, 2024, the government filed a Rule 4(c) report saying the case was appropriate for compensation as a vasovagal syncope Table injury, and the Chief Special Master issued a ruling on entitlement the same day. On October 4, 2024, the government filed a proffer of $10,000 for pain and suffering, and the petitioner agreed. Four days later, the Chief Special Master awarded that amount.

This case shows how fast the last steps can move once the government concedes. Most of the time was spent before the concession.

### Settlement by stipulation: Greeley v. Secretary of Health and Human Services

- **Docket:** No. 24-319V
- **Decided:** January 22, 2026 (Special Master Mindy Michaels Roth)
- **Read it:** [Decision on joint stipulation, with the stipulation attached (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-00319/pdf/USCOURTS-cofc-1_24-vv-00319-0.pdf)

Joshua T. Greeley filed on February 29, 2024, alleging vasovagal syncope with residual effects lasting more than six months after Tdap and HPV vaccines on May 24, 2022. The government denied that he had a vasovagal syncope Table injury and denied that the vaccines caused his alleged injury. In the decision's words: "Nevertheless, the parties have agreed to settle the case." The special master adopted the stipulation and awarded a lump sum of $37,500.00. The stipulation said attorneys' fees and costs would be handled in later proceedings.

This case shows that a settlement can pay a claim without anyone deciding that the vaccine caused the injury.

### Conceded, but damages decided by the special master: Marcillo v. Secretary of Health and Human Services

- **Docket:** No. 20-2061V
- **Decided:** April 14, 2023 (Chief Special Master Brian H. Corcoran)
- **Read it:** [Decision awarding damages (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_20-vv-02061/pdf/USCOURTS-cofc-1_20-vv-02061-1.pdf)

Francisco Marcillo filed on December 30, 2020, alleging that he fainted after a Tdap vaccine on March 13, 2020, and was injured. According to the decision, his jaw and facial bones were badly fractured, and he went through multiple surgeries. The government conceded entitlement in its Rule 4(c) report in September 2021, but the parties could not agree on pain and suffering. He asked for $225,000 for past pain and suffering plus $25,000 for future pain and suffering. The government proposed $125,000. They agreed on $30,312.03 for past unreimbursable expenses and $5,999.88 for lost wages.

After a hearing on April 3, 2023, the Chief Special Master noted that "there is no precise formula for assigning a monetary value to a person's pain and suffering and emotional distress," weighed the severity and length of his treatment, and awarded $250,000 for pain and suffering, the statutory cap. The total award was $286,311.91.

This case shows that a concession doesn't always end the dispute. It also shows how long the damages stage alone can take: about a year and a half passed between the government's concession and the decision.

## After the decision: judgment, election and payment

Whichever path a case takes, the Guidelines say "the special master will issue a written decision awarding compensation," and even a settlement or proffer "must be formally approved by a decision of the special master." Then:

- **A 30-day window for review.** Under Vaccine Rule 11(a), if no motion for review is filed within 30 days after the decision, the clerk enters judgment. The parties can speed this up by each filing a notice that they won't seek review. The Guidelines mention this for situations like a settled case.
- **An election within 90 days.** After judgment, the Vaccine Act requires the petitioner to file a written election either to accept the compensation or to file a civil lawsuit instead ([42 U.S.C. § 300aa-21(a)](https://www.law.cornell.edu/uscode/text/42/300aa-21)). The election must be filed within 90 days, and a petitioner who doesn't file one is treated as having accepted the judgment.
- **Payment after the election.** The Guidelines say the government "cannot process an award until the election is filed or deemed filed at the close of 90 days, even if the judgment results from a settlement with respondent."
- **Fees decided separately.** Attorneys' fees and costs are often handled in a separate decision. Our explainer on [how VICP attorneys get paid](/blog/how-do-vicp-attorneys-get-paid) covers how that works.

## What this means if you're thinking about a claim

- **A settlement is not a finding about the vaccine.** HRSA says plainly that a settlement "cannot be characterized as a decision by HHS or by the Court that the vaccine caused an injury." It is still a real payment.
- **The government's report shapes the rest of the case.** Whether the government concedes or opposes largely decides which path a claim takes and how long it runs. Our post on [how long a VICP claim takes](/blog/how-long-does-a-vicp-claim-take) goes deeper on timing.
- **Amounts vary widely.** The three awards above ranged from $10,000 to $286,311.91 because the injuries and their effects were very different. No past award predicts another.
- **The paperwork matters at every step.** Medical records drive the government's report, the settlement talks and any damages decision. Our guide on [what medical records you need](/blog/what-medical-records-do-i-need-for-a-vaccine-injury-claim) is a good starting point.

COVID-19 vaccine claims work differently. They go to the Countermeasures Injury Compensation Program (CICP), an administrative program run by HRSA, not to the VICP or the Court of Federal Claims. Our post on [COVID-19 vaccine claims](/blog/can-i-sue-for-covid-vaccine-side-effects) explains more.

## Get connected with an attorney

VaccineInjuries.org is not a law firm, does not give legal advice and does not evaluate claims. If you would like to talk with someone who handles VICP cases about how these paths might apply to you, we can connect you with an independent attorney who can explain your options.

[Get Connected With an Attorney](/intake). It is free to submit your information, and there is no obligation.

## Disclaimer

This article is for informational purposes only and is not legal advice. Court decisions are described in plain language for general education. Outcomes depend on the specific facts and records of each case, and a past decision does not predict the result of another claim. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
  {
    slug: "intussusception-after-rotavirus-vaccine-vicp",
    title: "Intussusception After the Rotavirus Vaccine: A Plain-English Guide to VICP Claims",
    excerpt:
      "Intussusception is the one injury the Vaccine Injury Table lists for rotavirus vaccines. Here is what the 1-to-21-day rule covers, why the surgery question often decides these claims, and three real court decisions.",
    date: "October 2026",
    datePublished: "2026-10-26",
    lastReviewed: "2026-10-26",
    category: "Qualifying Injuries",
    sources: [
      S.cdcRotavirusSafety,
      S.cdcRotavirusVis,
      S.injuryTable,
      S.usc300aa11,
      S.usc300aa15,
      S.usc300aa16,
      S.caseBarton2025,
      S.caseWilliams2025,
      S.caseRamos2024,
    ],
    content: `
## The short answer

If a baby develops intussusception, a type of bowel blockage, within 1 to 21 days after a rotavirus vaccine, the injury can fit the Vaccine Injury Table ([42 CFR § 100.3](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3)). When an injury fits the Table, the law presumes the vaccine caused it unless something else is shown to be the cause. Intussusception is the only injury the Table lists for rotavirus vaccines.

Fitting the Table is not the whole story, though. Every VICP claim also has to meet a severity rule. For intussusception, that usually comes down to one question: did the baby need surgery while admitted to the hospital? The three court decisions below show how much that question matters.

It also helps to keep perspective. The CDC says almost all babies who get rotavirus vaccine will be protected from severe rotavirus diarrhea, and most babies who get the vaccine do not have any problems with it. Studies show a small increase in the risk of intussusception after rotavirus vaccination, and the CDC calls this side effect "very rare" ([CDC — Rotavirus Vaccine Safety](https://www.cdc.gov/vaccine-safety/vaccines/rotavirus.html)).

## What intussusception is, in plain English

Intussusception happens when one segment of the intestine slides into the next one, the way a telescope folds into itself. The Table's definition says this causes a bowel obstruction and reduces blood flow to that part of the bowel, and that it is marked by "a sudden onset of abdominal pain that may be manifested by anguished crying, irritability, vomiting, abdominal swelling, and/or passing of stools mixed with blood and mucus" (42 CFR § 100.3(c)(4)(i)).

The CDC's vaccine information statement for rotavirus explains that intussusception is treated in a hospital and could require surgery. It also says intussusception "happens naturally in some infants every year in the United States, and usually there is no known reason for it" ([CDC — Rotavirus Vaccine Information Statement](https://www.cdc.gov/vaccines/hcp/current-vis/rotavirus.html)).

According to the CDC, the added risk from the vaccine usually shows up within a week after the first or second dose. The CDC estimates it at about 1 in 20,000 to 1 in 100,000 U.S. infants who get the vaccine, which means that between 40 and 120 U.S. infants a year might develop intussusception related to the vaccine.

## Warning signs parents are told to watch for

The CDC's information statement tells parents to look for stomach pain along with severe crying. Early on, these episodes can last just a few minutes and come and go several times in an hour. Babies might pull their legs up to their chest, vomit several times, have blood in the stool, or seem weak or very irritable.

If you think your baby has intussusception, the CDC says to contact a health care provider right away, or go to a hospital if you can't reach one, and to tell them when your baby got the rotavirus vaccine. This is a medical emergency first. Any thought of a claim can wait until your child is safe.

## What the Vaccine Injury Table says

Rotavirus vaccines are item XI on the Table, and the only injury listed is intussusception, with onset "not less than 1 day and not more than 21 days" after the vaccine (42 CFR § 100.3(a)).

The Table's rules also list situations that **do not** count as a Table intussusception (42 CFR § 100.3(c)(4)(ii)). In plain words, these are:

- Onset with or after the **third dose** of a rotavirus vaccine
- Onset within 14 days after an infection that is linked to intussusception, such as certain viral, bacterial or parasitic infections
- A preexisting growth or structure in the bowel that is identified as the starting point (the "lead point") for the intussusception, such as a polyp or a Meckel's diverticulum
- Abnormalities of the bowel, including ones present at birth or caused by earlier abdominal surgery
- Underlying conditions linked to intussusception, such as cystic fibrosis, celiac disease or Kawasaki disease

A claim that falls outside the Table is not automatically over, but it becomes an off-Table claim. That means the family has to prove, usually with expert medical opinion, that the vaccine actually caused the intussusception. Our guide to [Table vs. off-Table injuries](/blog/difference-between-table-injury-and-off-table-injury) explains the difference.

## The severity rule, and why surgery matters so much

The Vaccine Act requires that the injured person either had effects from the injury for **more than six months** after the vaccine, died, or had an injury that "resulted in inpatient hospitalization and surgical intervention" ([42 U.S.C. § 300aa-11(c)(1)(D)](https://www.law.cornell.edu/uscode/text/42/300aa-11)).

As the *Williams* decision below explains, intussusception usually resolves well within six months, so the six-month path rarely works. That decision also explains that Congress added the hospitalization-and-surgery option in 2000 largely with rotavirus-related intussusception in mind. In practice, then, many of these claims turn on how the blockage was treated:

- **An enema** (air or contrast liquid used to push the bowel back into place) can often fix intussusception without an operation. Program decisions have treated an enema as **not** being surgery.
- **Surgery** while admitted to the hospital can meet the severity rule even if the baby recovers fully afterward.

Our post on [severity requirements](/blog/what-are-the-severity-requirements-for-a-vicp-claim) covers this rule in more detail.

## Three real VICP decisions involving intussusception

These are real decisions from the U.S. Court of Federal Claims. We include them only to show how the rules have been applied. Each outcome depended on that case's own medical records and evidence. None of them predicts what will happen in another case, and none should be read as binding precedent.

### Table injury with surgery, damages awarded: Barton v. Secretary of Health and Human Services

- **Docket:** No. 21-799V
- **Decided:** Ruling on damages filed August 22, 2025, and posted publicly March 12, 2026 (Special Master Thomas L. Gowen)
- **Read it:** [Ruling on damages (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-00799/pdf/USCOURTS-cofc-1_21-vv-00799-1.pdf)

A.B. received the second dose of the oral rotavirus vaccine on March 14, 2018, when he was about four months old. Two days later he was fussy, not eating and had diarrhea, then woke from a nap screaming, vomited and had a diaper full of bright red blood. He was transferred by air to a children's hospital, where three attempts to fix the intussusception with an air contrast enema did not work. The next day he had abdominal surgery that took more than four hours, and he stayed in the hospital until March 22, 2018.

The government's report agreed that the claim met the Table criteria, and the family was found entitled to compensation in February 2022. The parties could not agree on an amount. The family asked for $144,000 for past pain and suffering, and the government argued for $50,000. The special master noted that A.B. had years of follow-up visits for diarrhea and constipation and a permanent scar across his abdomen, and awarded $100,000 for past pain and suffering, $1,000 a year for the rest of A.B.'s life for future pain and suffering (paid through an annuity), and $1,170.32 for out-of-pocket expenses. The ruling directed the parties to file a proffer based on it, with a damages decision to follow.

The Vaccine Act caps pain and suffering at $250,000 ([42 U.S.C. § 300aa-15(a)(4)](https://www.law.cornell.edu/uscode/text/42/300aa-15)). This award was for one child's specific injury and recovery and does not say what another family might receive.

### Table timing met, but no surgery: Williams v. Secretary of Health and Human Services

- **Docket:** No. 24-80V
- **Decided:** Findings of fact and conclusions of law dismissing the Table claim, filed March 25, 2025 (Chief Special Master Brian H. Corcoran)
- **Read it:** [Ruling dismissing the Table claim (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-00080/pdf/USCOURTS-cofc-1_24-vv-00080-0.pdf)

A.I.W. received her second dose of rotavirus vaccine on February 22, 2021, at four months old. Ten days later she began vomiting and was taken to the emergency department, where an ultrasound showed intussusception. An air enema fixed it that same night. She was discharged home after about ten hours in the emergency department and was never formally admitted. Four days later her pediatrician noted she was doing much better.

The government acknowledged that the facts appeared to meet the Table definition of intussusception but argued the severity rule was not met. The Chief Special Master agreed. The ruling said that "prior Program cases have consistently determined that an enema is not a surgical intervention." It also found that a stay treated only in the emergency department did not appear to be an inpatient hospitalization. Because her intussusception also resolved well within six months, the Table claim was dismissed. The family was given a chance to show a different kind of claim, and the case was later dismissed on April 7, 2025, after a joint stipulation of dismissal ([order concluding proceedings](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-00080/pdf/USCOURTS-cofc-1_24-vv-00080-1.pdf)).

This case shows that a real and frightening injury that fits the Table's timing can still fall short of the Vaccine Act's severity rule.

### Surgery, but timing outside the window: Ramos v. Secretary of Health and Human Services

- **Docket:** No. 20-583V
- **Decided:** Entitlement decision filed June 3, 2024 (Chief Special Master Brian H. Corcoran)
- **Read it:** [Entitlement decision (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_20-vv-00583/pdf/USCOURTS-cofc-1_20-vv-00583-0.pdf)

T.R. received his first rotavirus vaccine at his two-month checkup on October 19, 2017. On November 18, 2017, thirty days later, he was brought to the emergency room, and he later had surgery that reduced a small-bowel intussusception and removed 8 to 10 centimeters of small bowel and his appendix. So the surgery part of the severity rule was not the problem. Timing was.

Because the emergency visit came after the Table's 21-day window, the family argued that T.R. had milder stomach symptoms starting in early November that were the true beginning of his intussusception. Family members described those symptoms in statements filed after the case began, but the medical records did not mention them. The Chief Special Master found that the records supported an onset within about two days of the hospital visit, and that the family had not shown that intussusception can build up over a couple of weeks of milder symptoms the way they described. Without a Table claim, the family had to prove the timing was medically reasonable, and the decision found they had not done so. Entitlement was denied.

A later decision in the same case noted that the entitlement decision was not appealed, and still awarded the family's attorneys $107,663.77 in fees and costs because the claim had a reasonable basis ([fees decision](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_20-vv-00583/pdf/USCOURTS-cofc-1_20-vv-00583-1.pdf)). Our post on [how VICP attorneys get paid](/blog/how-do-vicp-attorneys-get-paid) explains how fees can be paid even when a claim loses.

## Filing deadlines

For most VICP injury claims, the petition must be filed within **36 months of the first symptom** ([42 U.S.C. § 300aa-16](https://www.law.cornell.edu/uscode/text/42/300aa-16)). The clock starts with the first symptom, not with the diagnosis or the day you learn about the program. Reporting a reaction to VAERS is not the same as filing a claim. Parents or legal guardians can file on behalf of a child. See [how long you have to file](/blog/how-long-do-i-have-to-file-a-vaccine-injury-claim) and [who can file](/blog/who-can-file-a-vaccine-injury-claim).

## Records that often matter in intussusception claims

In the decisions above, the exact date and dose of the vaccine, the date of the first symptoms, and how the blockage was treated all played a part. Records that often matter include:

- The vaccination record, including which rotavirus dose it was (first, second or third)
- A clear, dated timeline of the first symptoms, written down as close to the time as possible
- Emergency department and pediatrician notes, especially any that describe when symptoms started
- Ultrasound and X-ray reports
- Records of how the intussusception was treated, such as an enema, surgery, or both
- Admission and discharge records showing whether your child was admitted as an inpatient
- Operative reports and any pathology reports
- Follow-up records showing recovery or lasting problems

Our post on [what medical records you need](/blog/what-medical-records-do-i-need-for-a-vaccine-injury-claim) can help you get organized, and [what to do in the first 30 days](/blog/first-30-days-suspected-vaccine-injury) covers early steps.

## Get connected with an attorney

If your child developed intussusception after a rotavirus vaccine, a lawyer who handles VICP cases can explain how the Table's timing rules, the dose exclusions and the severity rule may apply. VaccineInjuries.org is not a law firm and does not evaluate claims. We can connect you with an independent attorney who does.

[Get Connected With an Attorney](/intake). It is free to submit your information, and there is no obligation.

## Disclaimer

This article is for informational purposes only and is not legal or medical advice. Court decisions are described in plain language for general education. Outcomes depend on the specific facts and records of each case, and a past decision does not predict the result of another claim. Reading this page does not create an attorney-client relationship. If you think your child has intussusception, contact a health care provider or go to a hospital right away; for advice about a claim, speak with a qualified attorney.
    `.trim(),
  },
  {
    slug: "what-happens-if-vicp-claim-is-denied",
    title: "What Happens If My VICP Claim Is Denied?",
    seoTitle: "VICP Claim Denied? Your Options and Deadlines",
    excerpt:
      "A VICP denial is not always the last word. Here are the review, appeal, and election deadlines in the Vaccine Act, plus three real court decisions.",
    date: "October 2026",
    datePublished: "2026-10-28",
    lastReviewed: "2026-10-28",
    category: "Claim Process",
    sources: [
      S.usc300aa12,
      S.usc300aa21,
      S.usc300aa22,
      S.usc300aa15,
      S.vaccineRules,
      S.injuryTable,
      S.hrsaVicpFaq,
      S.cfcVaccineAttorneysList,
      S.caseCavanaugh2026,
      S.caseRadke2026,
      S.caseExum2025,
    ],
    content: `
## The short answer

If a special master denies your claim in the National Vaccine Injury Compensation Program (VICP), that decision is not automatically the end. The Vaccine Act gives you **30 days** to ask a judge of the U.S. Court of Federal Claims to review it ([42 U.S.C. § 300aa-12(e)](https://www.law.cornell.edu/uscode/text/42/300aa-12)). After the court enters judgment, there is a further appeal to the U.S. Court of Appeals for the Federal Circuit, and a separate **90-day** choice about whether to accept the judgment or file a civil lawsuit instead ([42 U.S.C. § 300aa-21](https://www.law.cornell.edu/uscode/text/42/300aa-21)).

The deadlines are short, and a review is not a do-over. The judge does not simply rehear the case. Below is how each step works, what the deadlines are, and three real decisions that show how reviews have actually gone.

A word of perspective first. Vaccines are generally safe, and serious vaccine injuries are rare. HRSA's [VICP FAQ](https://www.hrsa.gov/vaccine-compensation/faq) describes the program as "a no-fault compensation program" for the uncommon cases where someone may have been seriously hurt.

## What a "denial" actually is

In the VICP, a claim is first decided by a **special master**, a judicial officer of the Court of Federal Claims. By law, the special master's decision must "include findings of fact and conclusions of law" ([42 U.S.C. § 300aa-12(d)](https://www.law.cornell.edu/uscode/text/42/300aa-12)). When people say a claim was "denied," they usually mean the special master decided the person who filed (the petitioner) did not prove what the law requires. Common reasons include:

- **Timing or symptoms did not match the Vaccine Injury Table.** For example, the Table says shoulder pain from a shoulder injury related to vaccine administration (SIRVA) must begin within 48 hours of the shot ([42 C.F.R. § 100.3](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3)).
- **Causation was not proven** in an off-Table claim, meaning the medical theory, the chain of cause and effect, or the timing was not shown by a preponderance of the evidence.
- **A legal requirement was not met**, such as the filing deadline or the requirement that the injury's effects last more than six months (with some exceptions).

## Your options after a denial, step by step

### 1. Ask the special master to reconsider (21 days)

Under the court's [Vaccine Rules](https://www.uscfc.uscourts.gov/sites/cfc/files/Vaccine%20Rules%207.27.26.pdf), either side may ask the special master to reconsider a decision within 21 days, as long as judgment has not been entered and no motion for review has been filed (Vaccine Rule 10(e)). The special master has discretion to grant or deny it. The rules also say that filing this motion does **not** pause the 30-day clock for asking a judge to review the decision.

### 2. Ask a judge to review the decision (30 days)

The main way to challenge a denial is a **motion for review**. The Vaccine Act says the parties "shall have 30 days" after the special master's decision to file it ([42 U.S.C. § 300aa-12(e)(1)](https://www.law.cornell.edu/uscode/text/42/300aa-12)). The other side then has 30 days to respond.

A judge of the Court of Federal Claims then may do one of three things:

- **Sustain** the special master's decision (leave it in place).
- **Set aside** findings or conclusions that are "arbitrary, capricious, an abuse of discretion, or otherwise not in accordance with law" and issue the court's own findings.
- **Remand** the case, which means sending it back to the special master to do more work under the court's direction. The law allows no more than 90 days for a remand.

The statute says the court "shall complete its action" within 120 days of the response, not counting time the case spends back with the special master on remand.

Two things make a review hard to win:

- **The judge does not reweigh the evidence.** In the *Cavanaugh* decision below, the court quoted the Federal Circuit: the reviewing court does "not reweigh the factual evidence, assess whether the special master correctly evaluated the evidence, or examine the probative value of the evidence or the credibility of the witnesses." Legal questions get a fresh look; fact-finding gets a lot of deference.
- **New arguments generally come too late.** Vaccine Rule 8(f)(1) says: "Any fact or argument not raised specifically in the record before the special master will be considered waived and cannot be raised by either party in proceedings on review of a special master's decision."

If nobody files a motion for review within 30 days, the clerk enters judgment "immediately" (Vaccine Rule 11(a)).

### 3. Appeal to the Federal Circuit (60 days)

After the Court of Federal Claims enters judgment, either side may ask the U.S. Court of Appeals for the Federal Circuit to review it. The petition for review must be filed within **60 days** of the date the judgment is entered ([42 U.S.C. § 300aa-12(f)](https://www.law.cornell.edu/uscode/text/42/300aa-12)).

### 4. Decide whether to accept the judgment or sue (90 days)

This is the step people most often don't know about. When the judgment did not award compensation, the Vaccine Act requires the petitioner to file a written election "to accept the judgment or to file a civil action for damages for such injury or death" ([42 U.S.C. § 300aa-21(a)](https://www.law.cornell.edu/uscode/text/42/300aa-21)). The election is due **no later than 90 days** after the court's final judgment. If you file nothing, the law treats you as having accepted the judgment.

Rejecting the judgment opens the door to a regular lawsuit, but the Vaccine Act still limits those suits. For example, it says no vaccine manufacturer "shall be liable in a civil action" for an injury that "resulted from side effects that were unavoidable even though the vaccine was properly prepared and was accompanied by proper directions and warnings" ([42 U.S.C. § 300aa-22(b)(1)](https://www.law.cornell.edu/uscode/text/42/300aa-22)). Whether a civil suit makes sense is a question for a lawyer who knows your facts.

## The deadlines at a glance

| Step | Deadline | Where it comes from |
| --- | --- | --- |
| Ask the special master to reconsider | 21 days after the decision | Vaccine Rule 10(e) |
| File a motion for review with a judge | 30 days after the decision | 42 U.S.C. § 300aa-12(e)(1) |
| Appeal to the Federal Circuit | 60 days after judgment is entered | 42 U.S.C. § 300aa-12(f) |
| Accept the judgment or elect a civil action | 90 days after the court's final judgment | 42 U.S.C. § 300aa-21(a) |

Rules and deadlines can change, and how they apply depends on the details of each case. Treat this table as a starting point for a conversation with a lawyer, not a calendar to rely on by itself.

## Can attorneys' fees still be paid after a denial?

Sometimes. The Vaccine Act says that when a petition does not result in compensation, the special master or court may still award reasonable attorneys' fees and costs "if the special master or court determines that the petition was brought in good faith and there was a reasonable basis for the claim" ([42 U.S.C. § 300aa-15(e)(1)](https://www.law.cornell.edu/uscode/text/42/300aa-15)). That is not automatic. Our post on [how VICP attorneys get paid](/blog/how-do-vicp-attorneys-get-paid) explains the fee rules.

## Three real decisions on review

These are real opinions from judges of the U.S. Court of Federal Claims reviewing special masters' decisions to deny compensation. We include them only to show how the review step has worked in practice. Each outcome depended on that case's specific facts and records. None of them predicts what will happen in another case, and none should be read as binding precedent.

### Denial upheld: Cavanaugh v. Secretary of Health and Human Services

- **Docket:** No. 21-567V
- **Decided:** Filed under seal March 9, 2026, and publicly filed March 24, 2026 (Judge Armando O. Bonilla)
- **Read it:** [Opinion and order (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-00567/pdf/USCOURTS-cofc-1_21-vv-00567-1.pdf)

The petitioner received a flu shot on January 14, 2020, and filed a Table claim for SIRVA. Her first message to her doctor, two days after the shot, described a strong reaction in detail but did not mention shoulder pain, and neither did the record of a visit about two weeks later. The first mention of shoulder pain in her medical records came in May 2020. On November 20, 2025, the special master denied compensation, finding she had not proved that her shoulder pain began within the Table's 48-hour window, along with two other SIRVA requirements.

She filed a motion for review on December 19, 2025, arguing that the special master had created a "bright-line rule" against claims whose early records don't mention the shoulder. The judge disagreed. The opinion says the special master "did not foreclose that possibility for Ms. Cavanaugh as a matter of law; it merely concluded that she did not carry her burden as a matter of fact." The motion was denied, the decision was upheld, and the petition was dismissed. The opinion also notes that she did not challenge the other two findings against her.

### Denial sent back for a better explanation: Radke v. Secretary of Health and Human Services

- **Docket:** No. 22-1384V
- **Decided:** Filed under seal April 2, 2026, and reissued April 23, 2026 (Judge Zachary N. Somers)
- **Read it:** [Opinion and order (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_22-vv-01384/pdf/USCOURTS-cofc-1_22-vv-01384-1.pdf)

The petitioner alleged that a pneumococcal vaccine he received on September 30, 2019, caused polymyalgia rheumatica (PMR). On October 6, 2025, the Chief Special Master denied entitlement, finding that the petitioner had not shown the vaccine could cause PMR. The petitioner filed a motion for review on November 5, 2025.

The judge found that the Chief Special Master's decision "did not adequately explain his reasoning for denying Petitioner's claim." The court granted the motion, vacated the decision, and sent the case back for a new decision within 90 days. The opinion was careful to add: "Although the result the chief special master reached in this case may ultimately be correct, the Court simply cannot sustain that result based on the lack of explanation given." In other words, winning a review here did not mean winning compensation. As of October 28, 2026, GovInfo listed no later decision in this case, and we do not know how it ended.

### Sent back once, then denied again: Exum v. Secretary of Health and Human Services

- **Docket:** No. 21-1513V
- **Decided:** Filed under seal September 18, 2025, and published September 30, 2025 (Judge Eleni M. Roumel)
- **Read it:** [Memorandum and order (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-01513/pdf/USCOURTS-cofc-1_21-vv-01513-4.pdf)

The petitioner filed on June 25, 2021, alleging that MMR and Tdap vaccines she received on August 20, 2018, caused autoimmune hepatitis. This was an off-Table claim. The Chief Special Master denied it on August 29, 2024. On her first motion for review, the court granted it in part and remanded, "instructing the Chief Special Master to provide a more fulsome explanation of his weighing of the record evidence" (that first opinion was published March 20, 2025). On May 27, 2025, the Chief Special Master issued a second decision and again denied the claim.

The petitioner sought review a second time. This time the court sustained the denial and denied the motion. The opinion said, "The difficulties associated with Petitioner's circumstances are not lost on this Court," but the court found no basis to set the decision aside. The case shows that a remand can lead to a fuller decision that reaches the same result, and that each round adds months.

## What these cases have in common

- **The record before the special master matters most.** Reviews focus on whether the special master's reasoning holds up, not on new evidence.
- **Winning a review can mean a remand, not a payment.** In *Radke* and the first round of *Exum*, the court sent the case back for a better explanation.
- **Time adds up.** *Exum* was filed in 2021 and was still being reviewed in September 2025.

## If your claim was just denied

- **Note the date of the decision.** The 30-day review clock starts when the special master's decision is issued.
- **Talk with a VICP lawyer quickly.** If you already have one, ask them right away what they recommend and why. If you filed on your own, the court's [Vaccine Attorneys List](https://www.uscfc.uscourts.gov/vaccine-attorneys-list) is one public starting point; the Office of Special Masters says it does not endorse representation by attorneys on the list.
- **Ask about the election deadline too.** Even if you don't seek review, the 90-day election after judgment still matters.

## Get connected with an attorney

VaccineInjuries.org is not a law firm, does not give legal advice and does not evaluate claims. If your VICP claim was denied, or you are worried it might be, we can connect you with an independent attorney who handles VICP cases and can explain your options.

[Get Connected With an Attorney](/intake). It is free to submit your information, and there is no obligation.

## Disclaimer

This article is for informational purposes only and is not legal advice. Court decisions are described in plain language for general education. Outcomes depend on the specific facts and records of each case, and a past decision does not predict the result of another claim. Deadlines described here come from the Vaccine Act and the court's Vaccine Rules as of the date of this article. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
  {
    slug: "how-to-prove-vaccine-caused-injury-althen-test",
    title: "How Do You Prove a Vaccine Caused an Injury? The Althen Test, Explained",
    seoTitle: "Proving Vaccine Injury Causation: The Althen Test",
    excerpt:
      "If your injury isn't on the Vaccine Injury Table, you have to prove the vaccine caused it. Here is the three-part Althen test, in plain words, with three real decisions.",
    date: "October 2026",
    datePublished: "2026-10-30",
    lastReviewed: "2026-10-30",
    category: "Claim Process",
    sources: [
      S.usc300aa11,
      S.usc300aa13,
      S.injuryTable,
      S.vaccineRules,
      S.hrsaVicpDataReportOct2026,
      S.caseLemieux2025,
      S.caseRomine2026,
      S.caseAlthaus2026,
    ],
    content: `
## The short answer

There are two ways to show a vaccine injury in the National Vaccine Injury Compensation Program (VICP). If the injury is listed on the [Vaccine Injury Table](https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3) and started within the Table's time window, the law presumes the vaccine caused it. If it isn't on the Table, or it started outside the window, the person filing has to prove the vaccine actually caused it.

For that second kind of claim, special masters at the U.S. Court of Federal Claims use a three-part test from a 2005 Federal Circuit case, Althen v. Secretary of Health & Human Services. The person filing has to show, by a "preponderance of the evidence" (more likely than not), a medical theory, a logical chain of cause and effect, and a timeline that makes medical sense.

A word of perspective first. Vaccines are generally safe, and serious vaccine injuries are rare. The Health Resources and Services Administration (HRSA), the HHS agency that runs the VICP, says in its [monthly statistics report](https://web.archive.org/web/20261015000519/https://www.hrsa.gov/sites/default/files/hrsa/vicp/vicp-stats-10-01-26.pdf) that "for every 1 million doses of vaccine that were distributed, approximately 1 individual was compensated."

## Table claims vs. off-Table claims

The Vaccine Act lists what a petition has to show ([42 U.S.C. § 300aa-11(c)(1)](https://www.law.cornell.edu/uscode/text/42/300aa-11)). On causation, there are two routes:

- **A Table injury.** The person sustained an illness or condition "set forth in the Vaccine Injury Table" and the first symptom happened "within the time period after vaccine administration set forth in the Vaccine Injury Table." HRSA's statistics report explains that an injury meeting all the Table's requirements "is given the legal presumption of causation."
- **An off-Table injury (often called "causation-in-fact").** The condition is not on the Table, or it is on the Table but started outside the Table's time window, and it "was caused by" the vaccine.

Either way, the other requirements still apply, including the severity requirement and the filing deadline. Our explainer on [Table vs. off-Table injuries](/blog/difference-between-table-injury-and-off-table-injury) covers the basics, and the rest of this post focuses on how off-Table causation is proved.

## The legal standard: more likely than not

The Vaccine Act says compensation is awarded if the special master finds that the petitioner "has demonstrated by a preponderance of the evidence" what the petition requires, and that there is not a preponderance of the evidence that the injury is "due to factors unrelated to the administration of the vaccine" ([42 U.S.C. § 300aa-13(a)(1)](https://www.law.cornell.edu/uscode/text/42/300aa-13)).

Two details in that same section matter a lot in practice:

- **Your word alone isn't enough.** The special master "may not make such a finding based on the claims of a petitioner alone, unsubstantiated by medical records or by medical opinion."
- **Doctors' opinions are considered, but they don't control.** The special master must consider any diagnosis or medical judgment in the record about causation, but "any such diagnosis, conclusion, judgment, test result, report, or summary shall not be binding on the special master or court" ([§ 300aa-13(b)(1)](https://www.law.cornell.edu/uscode/text/42/300aa-13)).

## The three Althen prongs

As the special master summarized it in the Lemieux ruling discussed below, a petitioner must establish, by preponderant evidence:

| Prong | What it asks | In plain words |
| --- | --- | --- |
| One | "a medical theory causally connecting the vaccine and his injury" | Can this vaccine cause this kind of injury at all? |
| Two | "a logical sequence of cause and effect showing that the vaccine was the reason for her injury" | Did it actually cause it in this person, based on their records? |
| Three | "a showing of a proximate temporal relationship between the vaccine and her injury" | Did the symptoms start at a time that fits the medical theory? |

A few points from recent decisions help explain how the prongs work:

- **Certainty isn't required.** The Lemieux ruling notes that the explanation need only be "legally probable, not medically or scientifically certain," quoting an earlier Federal Circuit case.
- **Timing alone isn't enough.** The same ruling says that "a temporal relationship between a vaccine and an injury, standing alone, does not constitute preponderant evidence of vaccine causation."
- **The timing has to match the theory.** A timeline is judged against the medical theory offered. Too soon can fail just as surely as too late, as the Althaus case below shows.
- **Close calls go to the petitioner.** The Lemieux ruling cites Althen for the point that "close calls" are resolved in the petitioner's favor.

## How these claims are decided

Off-Table claims are where most of the expert fights happen. Each side usually files reports from medical experts, often with medical literature attached. The special master then decides either after an entitlement hearing, where the experts testify, or on the written record. Under [Vaccine Rule 8(d)](https://www.uscfc.uscourts.gov/sites/cfc/files/Vaccine%20Rules%207.27.26.pdf), "the special master may decide a case on the basis of written submissions without conducting an evidentiary hearing." Vaccine Rule 8(b) adds that the special master "will not be bound by common law or statutory rules of evidence but must consider all relevant and reliable evidence."

These cases can take years. In the three cases below, roughly six to seven years passed between the petition and the decision on entitlement. Our post on [how long a VICP claim takes](/blog/how-long-does-a-vicp-claim-take) explains why.

## Three real decisions, one for each prong

These are real decisions by special masters of the U.S. Court of Federal Claims. Each one turned mostly on a different prong. Each outcome depended on that case's own facts, records and expert evidence, none predicts what would happen in another case, and none is binding precedent. As the special master in Romine put it, "special masters do not bind each other."

### All three prongs met: Lemieux v. Secretary of Health and Human Services

- **Docket:** No. 19-1121V
- **Decided:** December 16, 2025 (Special Master Thomas L. Gowen), ruling on entitlement
- **Read it:** [Ruling on entitlement (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_19-vv-01121/pdf/USCOURTS-cofc-1_19-vv-01121-1.pdf)

Joel Lemieux filed on August 1, 2019, alleging that a flu vaccine he received on October 11, 2016, caused immune thrombocytopenia (ITP), a condition where the platelet count drops. ITP after a flu vaccine is not a Table injury, so he had to prove causation. The government recommended against compensation, and the case went to an entitlement hearing on May 16, 2024, with experts testifying for both sides.

Timing was disputed. A record written nearly two years later said his bruising began two to three days after the shot, which the government's expert said was too fast for the proposed theory. The special master found the records made in November and December 2016, closer to the events, "more reliable as to the date of onset," and found onset about three weeks after vaccination. He found all three prongs met, noting that "there was no alternative cause found in the medical records," and concluded that the petitioner "is entitled to compensation." Damages were left for a separate order.

This case shows how much the dates in early medical records can matter.

### Theory not proven (prong one): Romine v. Secretary of Health and Human Services

- **Docket:** No. 19-468V
- **Decided:** March 13, 2026 (Special Master Christian J. Moran), published decision denying entitlement
- **Read it:** [Decision denying entitlement (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_19-vv-00468/pdf/USCOURTS-cofc-1_19-vv-00468-0.pdf)

Lawrence Romine filed on March 29, 2019, alleging that the Prevnar 13 pneumococcal vaccine he received on March 15, 2018, caused Guillain-Barré syndrome (GBS). GBS is on the Table only for seasonal flu vaccines, so this was an off-Table claim. His symptoms began about 13 days after the shot, and the decision notes that the government's own expert accepted that timing as one where an inference of causation is appropriate.

Even so, the claim failed on prong one. After a hearing where four experts and Mr. Romine testified, the special master found that "He has not presented a reliable theory to explain how Prevnar can cause GBS. Accordingly, he is not entitled to compensation." The decision openly acknowledges that "in other cases, petitioners presenting the same claim have prevailed," and says the different results may come from how different special masters have weighed similar evidence.

This case shows that good timing can't make up for a medical theory the special master doesn't find reliable.

### Timing too short (prongs two and three): Althaus v. Secretary of Health and Human Services

- **Docket:** No. 18-1868V
- **Decided:** February 10, 2026 (Special Master Nora Beth Dorsey), decision dismissing the petition
- **Read it:** [Decision (GovInfo)](https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_18-vv-01868/pdf/USCOURTS-cofc-1_18-vv-01868-0.pdf)

Colleen Althaus filed on December 6, 2018, alleging that a flu vaccine caused a neurological condition affecting her vision and balance. A planned hearing was cancelled because her expert was unavailable, and the case was decided on the written record.

Her records consistently showed that her double vision started on December 9, 2015, the day after the vaccine. Her theory was an autoimmune process called molecular mimicry. The special master assumed for the sake of argument that the theory could work, but found that "one day is too soon for molecular mimicry to create a cross reaction resulting in autoantibodies that would attack host structures and cause injury." She concluded that the petitioner "is not entitled to compensation and the petition must be dismissed," while noting her sympathy and that the decision had to rest "on the evidence and law."

This case shows that onset can be too fast, not just too slow, for the theory offered.

## What this means if you're thinking about a claim

- **Check the Table first.** Whether an injury is on the Table, and whether it started inside the Table's window, decides whether causation is presumed or has to be proved. Our guide on [what injuries qualify](/blog/what-injuries-qualify-for-vaccine-compensation) is a good starting point.
- **Write down dates while they're fresh.** In both Lemieux and Althaus, the date symptoms began, as recorded by doctors at the time, shaped the result. Our post on the [first 30 days after a suspected vaccine injury](/blog/first-30-days-suspected-vaccine-injury) covers what to keep.
- **Off-Table claims usually need expert support.** The law says a claim can't rest on the petitioner's word alone, and all three cases above turned on competing expert opinions and medical literature.
- **Results vary, even on similar facts.** Romine itself notes that other petitioners with the same vaccine and injury have won. That is one more reason no past decision predicts a new one.

## Get connected with an attorney

VaccineInjuries.org is not a law firm, does not give legal advice and does not evaluate claims. If you would like to talk with someone who handles VICP cases about whether your injury is on the Table and what proving causation might involve, we can connect you with an independent attorney who can explain your options.

[Get Connected With an Attorney](/intake). It is free to submit your information, and there is no obligation.

## Disclaimer

This article is for informational purposes only and is not legal advice. Court decisions are described in plain language for general education. Outcomes depend on the specific facts, records and expert evidence of each case, and a past decision does not predict the result of another claim. Reading this page does not create an attorney-client relationship. For advice about your situation, speak with a qualified attorney.
    `.trim(),
  },
];
