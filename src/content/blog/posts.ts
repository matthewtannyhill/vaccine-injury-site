export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  heroImage?: { src: string; alt: string };
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
    category: "Compensation Programs",
    heroImage: {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      alt: "Medical professional reviewing documents at a desk",
    },
    content: `
## What Is the VICP?

The National Vaccine Injury Compensation Program (VICP) is a federal program created by the National Childhood Vaccine Injury Act of 1986. It was designed to ensure that people injured by covered vaccines have a fair, efficient system for seeking compensation — without having to sue vaccine manufacturers directly.

Claims are filed in the U.S. Court of Federal Claims, sometimes called the "Vaccine Court." Unlike traditional lawsuits, the VICP operates under a no-fault standard for many injuries.

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

The VICP maintains a Vaccine Injury Table — a list of specific vaccines and the injuries or conditions presumed to be caused by them. If your injury appears on this table and meets the timeframe criteria, you may qualify for compensation without having to prove causation.

Off-table injuries can also be compensated, but require more evidence showing the vaccine more likely than not caused the condition.

## What Can You Be Compensated For?

Compensation under the VICP can include:
- Medical expenses (past and future)
- Lost earnings
- Pain and suffering (capped at $250,000)
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
    category: "Eligibility",
    heroImage: {
      src: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=1200&q=80",
      alt: "Two people in a professional consultation setting",
    },
    content: `
## Who Can File a Vaccine Injury Claim?

One of the first questions people ask is whether they are actually the person who is allowed to file.

In many cases, the answer is yes. But not always. Sometimes a vaccine injury claim is filed by a parent, a guardian, or a representative of someone who has died. That is one reason this process can feel confusing at the start.

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

Claims involving most routine covered vaccines are generally analyzed under the VICP. COVID-19 vaccine claims are handled differently under the CICP, which has its own rules, deadlines, and evidence requirements.

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
    category: "Filing & Evidence",
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

For COVID-19 vaccine claims under the CICP, documentation can be especially important. That often includes proof of vaccination, provider records, and signed authorization forms for each provider involved in treatment.

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
    category: "Eligibility",
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

In general, a VICP claim must involve an injury whose effects:
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
    category: "Qualifying Injuries",
    heroImage: {
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
      alt: "Person studying and reviewing documents at a desk",
    },
    content: `
## What Is the Difference Between a Table Injury and an Off-Table Injury?

If you have started researching vaccine injury claims, you have probably seen the term Vaccine Injury Table.

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
    category: "COVID-19 Vaccines",
    heroImage: {
      src: "https://images.unsplash.com/photo-1606206591513-adbfbf700690?auto=format&fit=crop&w=1200&q=80",
      alt: "COVID-19 vaccine being administered",
    },
    content: `
## COVID-19 Vaccines and the Legal Landscape

COVID-19 vaccines are not covered by the National Vaccine Injury Compensation Program (VICP). Instead, they fall under the Countermeasures Injury Compensation Program (CICP), a separate federal program with different — and generally stricter — rules.

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

The CICP recognizes myocarditis (heart inflammation) following mRNA COVID-19 vaccines as a covered condition. Other conditions are being evaluated on a case-by-case basis. The landscape is still developing.

## Is There a Filing Deadline?

Yes. CICP claims must generally be filed within **one year** of receiving the vaccine or within one year of the date the CICP determines the medical countermeasure (vaccine) was administered.

## What Should I Do If I Think I Was Injured?

1. Seek medical care and document your symptoms and diagnosis thoroughly.
2. Report the injury to VAERS (the Vaccine Adverse Event Reporting System).
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
    category: "Qualifying Injuries",
    heroImage: {
      src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80",
      alt: "Medical professional preparing a vaccine injection",
    },
    content: `
## The Vaccine Injury Table

The National Vaccine Injury Compensation Program maintains a Vaccine Injury Table — a government-maintained list of specific vaccines paired with the injuries or conditions presumed to be caused by them.

If your injury appears on the table and occurred within the specified timeframe after vaccination, you may qualify for compensation without having to prove that the vaccine caused your injury.

## Common Table Injuries

### Influenza Vaccine
- SIRVA (Shoulder Injury Related to Vaccine Administration) — pain and limited range of motion in the shoulder, typically caused by too-deep injection
- Guillain-Barré Syndrome (GBS) — a rare neurological condition affecting the peripheral nervous system
- Vasovagal syncope (fainting) within 24 hours

### MMR (Measles, Mumps, Rubella)
- Anaphylaxis (severe allergic reaction) within 4 hours
- Encephalopathy (brain disorder) within 5–15 days

### Hepatitis B Vaccine
- Anaphylaxis within 4 hours
- Intussusception (a type of bowel obstruction) in children

### Varicella (Chickenpox)
- Anaphylaxis within 4 hours
- Disseminated varicella vaccine-strain viral disease

### HPV Vaccine
- Anaphylaxis within 4 hours
- SIRVA

## Off-Table Injuries

Injuries not listed on the Vaccine Injury Table can still be compensated — but you'll need to provide medical and scientific evidence showing the vaccine more likely than not caused the condition. This requires expert testimony and can be more complex.

## What About COVID-19 Vaccine Injuries?

COVID-19 vaccine injuries are handled by the CICP, not the VICP. Currently, myocarditis following mRNA vaccines (Pfizer, Moderna) is among the recognized conditions.

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
    category: "Safety Reporting",
    heroImage: {
      src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
      alt: "Person submitting information on a laptop",
    },
    content: `
## Should I Report My Vaccine Reaction to VAERS?

If you think you had a serious reaction after a vaccine, you may have heard that you should report it to VAERS.

That is often true. But it is important to understand what VAERS does — and what it does not do.

## What is VAERS?

VAERS stands for the Vaccine Adverse Event Reporting System.

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

But reporting to VAERS should be seen as one step, not the only step.

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
    category: "Claim Process",
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

After filing, the case is handled through the court's Office of Special Masters.

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
    category: "Cost & Compensation",
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
- Pain and suffering, subject to a cap
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
    category: "Qualifying Injuries",
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

SIRVA is important because it appears on the Vaccine Injury Table for many covered vaccines, with a short onset window.

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
    category: "Filing & Deadlines",
    heroImage: {
      src: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80",
      alt: "Calendar with pen marking an important deadline",
    },
    content: `
## Deadlines Are Critical in Vaccine Injury Cases

Unlike many personal injury cases where you have years to file, vaccine injury claims have specific and strict deadlines. Missing them can permanently bar your ability to seek compensation.

## VICP Deadline: 36 Months

For claims filed under the National Vaccine Injury Compensation Program (VICP), you must generally file within **36 months of the date of the first symptom** of the vaccine injury.

If the injury resulted in death, a claim must be filed within **24 months of the death** and within **48 months of the first symptom** before the death.

## CICP Deadline: 1 Year

For COVID-19 vaccine injury claims under the Countermeasures Injury Compensation Program (CICP), the deadline is **one year** from the date of vaccine administration, or one year from when the CICP determines the vaccine was covered.

## Why Deadlines Are So Strict

Congress set these deadlines to ensure that claims are brought while evidence is still available, memories are fresh, and medical records are accessible. Courts have generally been unwilling to make exceptions.

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
    category: "Claim Basics",
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

That distinction matters, especially for people trying to understand what compensation data or prior case outcomes actually mean.
    `.trim(),
  },
  {
    slug: "what-documents-help-a-covid-19-vaccine-injury-claim",
    title: "What Documents Help a COVID-19 Vaccine Injury Claim?",
    excerpt:
      "COVID-19 vaccine claims usually turn on documentation. Here is what to gather early if you think you may need to file under the CICP.",
    date: "March 2025",
    category: "COVID-19 Vaccines",
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

The CICP process may require a separate authorization form for each healthcare provider who treated you.

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
    category: "Legal Help",
    heroImage: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      alt: "Attorney consulting with a client across a desk",
    },
    content: `
## Why You Need a Specialist

Vaccine injury cases — especially those filed in the National Vaccine Injury Compensation Program (VICP) — are highly specialized. The process involves the U.S. Court of Federal Claims, specific evidentiary standards, and a body of case law that only practitioners in this niche know well.

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
    category: "Claim Basics",
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

The VICP maintains a Vaccine Injury Table that lists specific injuries presumed to be caused by certain vaccines, along with the timeframe in which symptoms must appear.

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
    category: "Legal Help",
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
- Cases are filed in the U.S. Court of Federal Claims, regardless of state
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
];
