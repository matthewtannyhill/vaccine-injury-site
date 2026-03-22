export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-the-vaccine-injury-compensation-program",
    title: "What Is the National Vaccine Injury Compensation Program (VICP)?",
    excerpt:
      "The VICP is a federal no-fault program that compensates people injured by certain vaccines. Here's how it works and who it covers.",
    date: "March 2025",
    category: "Compensation Programs",
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
    slug: "can-i-sue-for-covid-vaccine-side-effects",
    title: "Can I Sue for COVID-19 Vaccine Side Effects?",
    excerpt:
      "COVID-19 vaccine injury claims are handled differently than other vaccines. Here's what you need to know about the CICP and your legal options.",
    date: "March 2025",
    category: "COVID-19 Vaccines",
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
    slug: "how-long-do-i-have-to-file-a-vaccine-injury-claim",
    title: "How Long Do I Have to File a Vaccine Injury Claim?",
    excerpt:
      "Missing the filing deadline can bar your claim entirely. Here's what you need to know about VICP and CICP deadlines.",
    date: "March 2025",
    category: "Filing & Deadlines",
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

- **Do not wait.** If you experienced a serious reaction after a vaccine, start the process now.
- **Document everything.** Keep all medical records related to your symptoms and treatment.
- **Talk to an attorney.** A specialist can confirm which deadline applies to your specific vaccine and injury.

Use our free eligibility form to get started — knowing your situation doesn't cost anything.
    `.trim(),
  },
  {
    slug: "what-injuries-qualify-for-vaccine-compensation",
    title: "What Injuries Qualify for Vaccine Compensation?",
    excerpt:
      "The Vaccine Injury Table lists conditions presumed to be caused by certain vaccines. Here's a plain-English overview of what qualifies.",
    date: "March 2025",
    category: "Qualifying Injuries",
    content: `
## The Vaccine Injury Table

The National Vaccine Injury Compensation Program maintains a Vaccine Injury Table — a government-maintained list of specific vaccines paired with the injuries or conditions presumed to be caused by them.

If your injury appears on the table and occurred within the specified timeframe after vaccination, you may qualify for compensation without having to prove that the vaccine caused your injury.

## Common Table Injuries

### Influenza Vaccine
- **SIRVA** (Shoulder Injury Related to Vaccine Administration) — pain and limited range of motion in the shoulder, typically caused by too-deep injection
- **Guillain-Barré Syndrome (GBS)** — a rare neurological condition affecting the peripheral nervous system
- **Vasovagal syncope** (fainting) within 24 hours

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
    slug: "how-to-find-a-vaccine-injury-attorney",
    title: "How to Find a Vaccine Injury Attorney",
    excerpt:
      "Vaccine injury law is specialized. Here's what to look for in an attorney, how fees work, and what questions to ask before you hire.",
    date: "March 2025",
    category: "Legal Help",
    content: `
## Why You Need a Specialist

Vaccine injury cases — especially those filed in the National Vaccine Injury Compensation Program (VICP) — are highly specialized. The process involves the U.S. Court of Federal Claims, specific evidentiary standards, and a body of case law that only practitioners in this niche know well.

A general personal injury attorney, even a good one, may not be the right fit for a vaccine injury claim.

## How Attorney Fees Work in VICP Cases

One of the most favorable aspects of the VICP is how it handles attorney fees. If your case is successful — or even if it is dismissed on the merits — you may be entitled to have your attorneys' fees and costs paid by the federal government, separate from any compensation you receive.

This means you should **never pay out-of-pocket upfront** to a vaccine injury attorney for a VICP claim. If an attorney asks for a large retainer fee before filing, that may be a red flag.

## What to Look For

When evaluating vaccine injury attorneys:

1. **VICP experience** — Ask how many cases they have filed in the Vaccine Court and what their outcomes have been.
2. **Medical knowledge** — Vaccine cases require understanding complex medical evidence. Good attorneys work with medical experts.
3. **Communication** — These cases can take time. You want someone who keeps you informed.
4. **No upfront costs** — Verify their fee arrangement before signing anything.

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
];
