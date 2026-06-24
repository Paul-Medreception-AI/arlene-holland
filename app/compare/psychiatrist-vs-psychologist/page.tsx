import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Psychiatrist vs Psychologist: Understanding the Difference and Which You Need | Arlene Holland',
  description: 'Confused about whether to see a psychiatrist or psychologist? Learn the key differences, treatment approaches, costs, and which mental health professional is right for your needs.',
}

export default function PsychiatristVsPsychologistPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond'] text-5xl font-light leading-tight mb-6">
            Psychiatrist vs Psychologist: Understanding the Difference and Which You Need
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Making an informed choice about your mental health care starts with understanding the unique roles, training, and treatment approaches of each profession
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-xl border-2 border-[var(--color-primary)] animate-fade-up">
              <div className="flex items-start gap-4 mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--color-ink)] mb-2">Psychiatrist</h3>
                  <p className="text-[var(--color-muted)] font-semibold mb-2">Medical Doctor (MD/DO)</p>
                  <p className="text-[var(--color-ink)]">Can prescribe medication, diagnose mental health conditions, and provide medical treatment for psychiatric disorders</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-xl border-2 border-[var(--color-primary)] animate-fade-up transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--color-ink)] mb-2">Psychologist</h3>
                  <p className="text-[var(--color-muted)] font-semibold mb-2">Doctoral Degree (PhD/PsyD)</p>
                  <p className="text-[var(--color-ink)]">Provides psychotherapy, psychological testing, and behavioral interventions. Cannot prescribe medication in most states</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-center text-[var(--color-ink)] mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Category</div>
              <div className="p-6 font-semibold border-l border-white/20">Psychiatrist</div>
              <div className="p-6 font-semibold border-l border-white/20">Psychologist</div>
            </div>

            {/* Education & Training */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Education & Training</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Medical school (MD/DO) + 4 years psychiatry residency. Total: 12+ years</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Doctoral program (PhD/PsyD) + internship. Total: 5-7 years post-bachelor's</div>
            </div>

            {/* Treatment Approach */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Primary Treatment Approach</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Medication management, biological treatments, medical interventions</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Psychotherapy, talk therapy, cognitive-behavioral techniques</div>
            </div>

            {/* Prescription Rights */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Can Prescribe Medication</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                <span className="inline-flex items-center gap-2 text-green-700 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Yes, in all states
                </span>
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                <span className="inline-flex items-center gap-2 text-red-700 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No (except in a few states with special training)
                </span>
              </div>
            </div>

            {/* Session Length */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Typical Session Length</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">15-30 minutes for medication checks; longer for initial evaluations</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">45-60 minutes per therapy session</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Average Cost Per Session</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">$200-$400 (typically covered by insurance)</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">$100-$300 (often covered by insurance)</div>
            </div>

            {/* Insurance Coverage */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Insurance Coverage</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Usually covered as medical care; may have lower copay</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Typically covered; check if provider is in-network</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Best For</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Severe mental illness, medication needs, complex diagnoses, medical comorbidities</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Talk therapy, behavioral change, coping strategies, relationship issues, personal growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - Psychiatrist */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up mb-16">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[var(--color-ink)]">
                What a Psychiatrist Does
              </h2>
            </div>

            <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed">
              <p>
                Psychiatrists are medical doctors who specialize in mental health and the treatment of psychiatric disorders. After completing medical school, they undergo four years of specialized residency training in psychiatry, where they learn to diagnose mental health conditions, understand the biological basis of mental illness, and prescribe psychiatric medications.
              </p>

              <p>
                Because of their medical training, psychiatrists can order and interpret laboratory tests, understand how medical conditions affect mental health, and manage complex medication regimens. They're particularly skilled at treating severe mental illnesses like schizophrenia, bipolar disorder, and major depression, as well as conditions that have a strong biological component or require medication management.
              </p>

              <p>
                A typical visit with a psychiatrist focuses on symptom assessment, medication adjustments, and monitoring treatment effectiveness. While some psychiatrists also provide psychotherapy, many focus primarily on medication management and work in collaboration with psychologists or therapists who provide talk therapy. This team approach often yields the best outcomes for patients with moderate to severe mental health conditions.
              </p>

              <div className="bg-[var(--color-light)] rounded-xl p-8 mt-8">
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                  Typical Patient Profile for Psychiatry
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Moderate to severe depression or anxiety not responding to therapy alone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bipolar disorder, schizophrenia, or other serious mental illnesses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Individuals experiencing suicidal thoughts or requiring crisis intervention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Patients with medical conditions affecting mental health (thyroid disorders, chronic pain, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Those needing medication evaluation or management for psychiatric conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Deep Dive - Psychologist */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[var(--color-ink)]">
                What a Psychologist Does
              </h2>
            </div>

            <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed">
              <p>
                Psychologists hold doctoral degrees (PhD or PsyD) in psychology and have extensive training in human behavior, psychological theory, research methods, and various forms of psychotherapy. Their education emphasizes understanding how thoughts, emotions, and behaviors interact, and how to help people change unhealthy patterns through evidence-based therapeutic techniques.
              </p>

              <p>
                Psychologists are experts in psychotherapy and use various approaches like cognitive-behavioral therapy (CBT), psychodynamic therapy, humanistic therapy, and family systems therapy. They help clients develop insight into their problems, learn new coping skills, change thought patterns, improve relationships, and work through past traumas. Many psychologists also conduct psychological testing to diagnose learning disabilities, ADHD, personality disorders, and cognitive functioning.
              </p>

              <p>
                A typical therapy session with a psychologist lasts 45-60 minutes and involves talking through challenges, exploring emotions and thought patterns, learning new skills, and setting goals for change. The therapeutic relationship itself is a powerful tool for healing, and psychologists are trained to create a safe, non-judgmental space where clients can explore difficult feelings and experiences. Treatment duration varies from a few sessions for specific issues to months or years for deeper work.
              </p>

              <div className="bg-[var(--color-light)] rounded-xl p-8 mt-8">
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                  Typical Patient Profile for Psychology
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mild to moderate anxiety, depression, or stress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Relationship or family problems requiring talk therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Trauma survivors seeking PTSD treatment or processing painful experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Individuals wanting to develop better coping skills or change behavior patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Those seeking personal growth, self-understanding, or life transitions support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-center text-[var(--color-ink)] mb-8">
              How to Decide Which Professional You Need
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--color-ink)]">
                    Choose a Psychiatrist if you:
                  </h3>
                </div>
                <ul className="space-y-3 ml-11">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have severe symptoms that significantly interfere with daily functioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Are experiencing symptoms that may benefit from medication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have been diagnosed with bipolar disorder, schizophrenia, or severe depression</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Need evaluation for a complex or unclear psychiatric diagnosis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have medical conditions that complicate your mental health treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Are already taking psychiatric medication and need monitoring or adjustments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have tried therapy alone without sufficient improvement</span>
                  </li>
                </ul>
              </div>

              <div className="border-t-2 border-[var(--color-border)] pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--color-ink)]">
                    Choose a Psychologist if you:
                  </h3>
                </div>
                <ul className="space-y-3 ml-11">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Want to work through emotional issues or life challenges through talk therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Prefer to manage symptoms without medication (when appropriate)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Need help changing behavior patterns or developing coping skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Are dealing with relationship, family, or work-related stress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have experienced trauma and need specialized trauma therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Want regular, in-depth sessions to explore thoughts, feelings, and behaviors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Are seeking personal growth or increased self-awareness</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-[var(--color-primary)] mt-8">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-2">Remember: You May Need Both</h4>
                    <p className="text-[var(--color-ink)]">
                      Many people benefit from seeing both a psychiatrist for medication management and a psychologist for ongoing therapy. This collaborative approach, often called "split treatment," combines the best of both worlds and is common for moderate to severe mental health conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Can They Work Together? */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up">
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-center text-[var(--color-ink)] mb-8">
              The Collaborative Care Model
            </h2>
            <div className="bg-white rounded-xl p-10 shadow-sm">
              <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed">
                <p>
                  In many cases, the most effective treatment combines both psychiatric and psychological care. This collaborative model, sometimes called "split treatment," involves a psychiatrist managing medication while a psychologist provides ongoing psychotherapy.
                </p>
                <p>
                  Research consistently shows that for conditions like moderate to severe depression and anxiety, the combination of medication and therapy produces better outcomes than either treatment alone. The psychiatrist and psychologist communicate about your care, ensuring a coordinated approach to your treatment.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-[var(--color-light)] rounded-lg p-6">
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[var(--color-ink)] mb-3">Psychiatrist's Role</h3>
                    <ul className="space-y-2 text-[var(--color-ink)]">
                      <li>• Medication evaluation and prescription</li>
                      <li>• Monitoring medication effectiveness</li>
                      <li>• Managing side effects</li>
                      <li>• Adjusting doses as needed</li>
                      <li>• Medical oversight</li>
                    </ul>
                  </div>
                  <div className="bg-[var(--color-light)] rounded-lg p-6">
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[var(--color-ink)] mb-3">Psychologist's Role</h3>
                    <ul className="space-y-2 text-[var(--color-ink)]">
                      <li>• Weekly therapy sessions</li>
                      <li>• Teaching coping skills</li>
                      <li>• Processing emotions and experiences</li>
                      <li>• Addressing relationship issues</li>
                      <li>• Long-term behavioral change</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-center text-[var(--color-ink)] mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden transition-all duration-300">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors duration-200">
                <span>Can a psychologist prescribe medication?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>In most states, psychologists cannot prescribe medication. However, a few states (including Louisiana, New Mexico, Illinois, Iowa, and Idaho) allow specially trained psychologists with prescriptive authority to prescribe certain psychiatric medications after additional training and certification. In most cases, if medication is needed, you'll be referred to a psychiatrist or your primary care physician.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden transition-all duration-300">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors duration-200">
                <span>Do psychiatrists provide therapy?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Some psychiatrists do provide psychotherapy in addition to medication management, particularly those who practice psychodynamic psychiatry or have additional training in specific therapy modalities. However, due to time constraints and the complexity of medication management, many psychiatrists focus primarily on prescribing and monitoring medication, while referring patients to psychologists or licensed therapists for ongoing talk therapy. If you prefer to receive both medication and therapy from the same provider, ask potential psychiatrists whether they offer both services.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden transition-all duration-300">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors duration-200">
                <span>Which costs more: a psychiatrist or psychologist?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Psychiatrists typically charge more per session ($200-$400) than psychologists ($100-$300), but psychiatry sessions are often shorter (15-30 minutes vs. 45-60 minutes). Over time, the cost depends on frequency: you might see a psychiatrist monthly for medication checks, while seeing a psychologist weekly for therapy. Both are usually covered by insurance, though coverage varies by plan. Check whether providers are in-network with your insurance to minimize out-of-pocket costs.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden transition-all duration-300">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors duration-200">
                <span>How do I know if I need medication for my mental health?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Medication may be beneficial if your symptoms are severe, significantly interfere with daily life, haven't improved with therapy alone, or include biological components like sleep disturbances, appetite changes, or energy problems. Conditions like bipolar disorder, schizophrenia, and severe depression typically require medication. However, the decision should be made collaboratively with a mental health professional after a thorough evaluation. Many people start with therapy and add medication if needed, while others benefit from starting both simultaneously.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden transition-all duration-300">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors duration-200">
                <span>Can I switch from a psychologist to a psychiatrist or vice versa?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Absolutely. Your treatment needs may change over time, and it's completely appropriate to switch providers or add another type of professional to your care team. If you're in therapy but symptoms worsen, your psychologist may refer you to a psychiatrist for medication evaluation. Conversely, if you're stable on medication but want to work on deeper issues, your psychiatrist might recommend adding therapy. Many patients see both simultaneously for optimal care. Always discuss changes with your current provider, who can provide appropriate referrals and coordinate your care.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mb-6">
            Still Not Sure Which Professional Is Right for You?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss your specific situation and help you determine the best path forward for your mental health journey. Whether you need medication management, therapy, or both, we'll create a personalized treatment plan.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Discuss Your Options
          </a>
          <p className="text-white/80 mt-6">
            Free 15-minute consultation • Flexible scheduling • Compassionate care
          </p>
        </div>
      </section>
    </main>
  )
}