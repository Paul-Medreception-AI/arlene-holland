import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Therapy vs Medication: Do You Need One, Both, or Neither? | Arlene Holland',
  description: 'Compare therapy and medication for mental health treatment. Understand effectiveness, side effects, costs, and how to decide which option is right for you.',
}

export default function TherapyVsMedicationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-serif text-5xl font-light leading-tight mb-6">
            Therapy vs Medication: Do You Need One, Both, or Neither?
          </h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            An evidence-based guide to help you make an informed decision about your mental health treatment
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] mb-12 text-center">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Factor</div>
              <div className="p-6 font-semibold border-l border-white/20">Therapy</div>
              <div className="p-6 font-semibold border-l border-white/20">Medication</div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Effectiveness</div>
              <div className="p-6 border-l border-[var(--color-border)]">Highly effective for long-term change, with lasting results after treatment ends</div>
              <div className="p-6 border-l border-[var(--color-border)]">Fast symptom relief, but symptoms often return if medication is stopped</div>
            </div>

            {/* Side Effects */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Side Effects</div>
              <div className="p-6 border-l border-[var(--color-border)]">Emotional discomfort during difficult sessions, temporary increase in distress</div>
              <div className="p-6 border-l border-[var(--color-border)]">Physical side effects (weight changes, sleep issues, sexual dysfunction, nausea)</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Cost</div>
              <div className="p-6 border-l border-[var(--color-border)]">$100-250 per session, typically 12-20 sessions for acute issues</div>
              <div className="p-6 border-l border-[var(--color-border)]">$10-200 per month depending on insurance and medication type</div>
            </div>

            {/* Time Commitment */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Time Commitment</div>
              <div className="p-6 border-l border-[var(--color-border)]">50 minutes weekly, plus time for homework and practice between sessions</div>
              <div className="p-6 border-l border-[var(--color-border)]">Minutes per day, plus quarterly check-ins with prescriber</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Learning coping skills, changing thought patterns, relationship issues, trauma processing</div>
              <div className="p-6 border-l border-[var(--color-border)]">Severe symptoms, biological/chemical imbalances, when immediate relief is needed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - Therapy */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-[var(--color-ink)] mb-6">
              Understanding Therapy
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              Psychotherapy, commonly called "talk therapy," involves working with a trained mental health professional to identify and change troubling emotions, thoughts, and behaviors. Research consistently shows that therapy produces lasting changes in the brain similar to medication, but these changes persist even after treatment ends.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              The most studied forms include Cognitive Behavioral Therapy (CBT), which focuses on changing thought patterns; Dialectical Behavior Therapy (DBT), which teaches emotional regulation skills; and EMDR, which processes traumatic memories. Most people begin seeing improvement within 8-12 sessions, though complex issues may require longer treatment.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Therapy is particularly effective for people who want to understand the root causes of their struggles, develop lifelong coping skills, and make sustainable changes to their relationships and life patterns. It requires active participation, willingness to be uncomfortable, and commitment to practicing new skills between sessions.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-4xl text-[var(--color-ink)] mb-6">
              Understanding Medication
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              Psychiatric medications work by altering brain chemistry to reduce symptoms of mental health conditions. The most common classes include SSRIs and SNRIs for depression and anxiety, which typically take 4-6 weeks to reach full effectiveness. Medications can provide significant relief, especially when symptoms are severe enough to interfere with daily functioning.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              While medication can be life-changing for many people, it's important to understand that it treats symptoms rather than underlying causes. Most people need to continue medication long-term to maintain benefits, and finding the right medication often involves trial and error. Side effects are common, though many diminish after the first few weeks.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Medication is most appropriate when symptoms are severe, when there's a strong biological component to the condition (such as bipolar disorder or schizophrenia), or when someone needs rapid symptom relief to be able to function. It's prescribed by psychiatrists, primary care doctors, or nurse practitioners after a diagnostic evaluation.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-4xl text-[var(--color-ink)] mb-6">
              The Case for Both
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              For moderate to severe depression and anxiety, research consistently shows that the combination of therapy and medication is more effective than either treatment alone. Medication can provide the symptom relief needed to engage fully in therapy, while therapy helps develop skills that support long-term wellness even after medication is discontinued.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Many people start with both treatments, then gradually taper medication while continuing therapy. This approach offers immediate relief while building sustainable coping skills. Insurance typically covers both treatments, and the combined approach often leads to shorter overall treatment duration and better long-term outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="px-6 my-20">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] mb-8 text-center">
            How to Decide
          </h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Consider Therapy First If:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Your symptoms are mild to moderate and manageable</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You want to understand the root causes of your struggles</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You're dealing with relationship issues, grief, or life transitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You prefer to avoid medication or have concerns about side effects</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You're willing to invest time in learning new coping skills</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Consider Medication If:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Your symptoms are severe and interfering with daily functioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You've tried therapy alone without sufficient improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You have a condition with strong biological components (bipolar, severe depression)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You need rapid symptom relief to function at work or home</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You have limited time or resources for weekly therapy sessions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Consider Both If:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You have moderate to severe depression or anxiety</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You want both immediate relief and long-term skill development</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Previous treatment with one approach alone was only partially effective</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You're experiencing a crisis or significant life disruption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-xl font-semibold text-[var(--color-ink)]">
                  How long does it take to see results from therapy vs medication?
                </span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-lg text-[var(--color-muted)] leading-relaxed">
                Medication typically begins working within 4-6 weeks, though some people notice changes sooner. Therapy often shows initial improvements within 6-8 sessions, with most people experiencing significant relief by 12-16 sessions. However, therapy's benefits tend to be more durable, lasting long after treatment ends, while medication benefits usually require continued use.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-xl font-semibold text-[var(--color-ink)]">
                  Can I stop medication once I feel better?
                </span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-lg text-[var(--color-muted)] leading-relaxed">
                Never stop psychiatric medication abruptly without consulting your prescriber. Most guidelines recommend staying on medication for at least 6-12 months after symptoms improve. Many people experience symptom return when discontinuing medication, which is why combining therapy with medication can help develop coping skills to maintain wellness after tapering off medication under medical supervision.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-xl font-semibold text-[var(--color-ink)]">
                  Is therapy covered by insurance?
                </span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-lg text-[var(--color-muted)] leading-relaxed">
                Most insurance plans cover mental health therapy with varying copays and deductibles. The Mental Health Parity Act requires insurance companies to cover mental health treatment similarly to physical health treatment. However, coverage varies significantly by plan. Many therapists also offer sliding scale fees for those without insurance or with high out-of-pocket costs. Medication is typically covered with standard prescription copays.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-xl font-semibold text-[var(--color-ink)]">
                  What if I try one approach and it doesn't work?
                </span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-lg text-[var(--color-muted)] leading-relaxed">
                Finding the right treatment often requires adjustment. If therapy isn't helping after 8-10 sessions, discuss trying a different therapeutic approach or adding medication. If medication isn't effective after 6-8 weeks at a therapeutic dose, your prescriber may adjust the dosage, switch medications, or recommend adding therapy. Treatment resistance is common and doesn't mean you can't get better—it means you need a different approach.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-xl font-semibold text-[var(--color-ink)]">
                  Are there alternatives to both therapy and medication?
                </span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-lg text-[var(--color-muted)] leading-relaxed">
                For mild symptoms, lifestyle interventions can be effective: regular exercise (shown to be as effective as medication for mild depression), sleep hygiene, social connection, stress management, and mindfulness practices. However, these work best as complements to professional treatment rather than replacements. For moderate to severe symptoms, evidence strongly supports professional intervention. Some people also benefit from support groups, peer counseling, or wellness coaching alongside traditional treatment.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center text-white animate-fade-up">
          <h2 className="font-serif text-4xl mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl mb-10 opacity-95">
            Let's have a conversation about which approach—or combination of approaches—might be right for your unique situation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-cream)] transition-colors duration-200"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}