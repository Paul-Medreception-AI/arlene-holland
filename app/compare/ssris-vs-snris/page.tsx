import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SSRIs vs SNRIs: Comparing Two Common Types of Antidepressants | Arlene Holland',
  description: 'Comprehensive comparison of SSRIs and SNRIs antidepressants. Understand effectiveness, side effects, costs, and which medication type may be right for your depression or anxiety treatment.',
}

export default function SSRIsVsSNRIsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl font-light leading-tight mb-6">
            SSRIs vs SNRIs: Comparing Two Common Types of Antidepressants
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto leading-relaxed">
            Understanding the differences between these two medication classes can help you make an informed decision about your mental health treatment
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="bg-white py-16 max-w-4xl mx-auto px-6">
        <div className="animate-fade-up">
          <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
            Selective Serotonin Reuptake Inhibitors (SSRIs) and Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs) are two of the most commonly prescribed antidepressant classes. While both work by affecting brain chemistry to improve mood, they have important differences in their mechanisms, effectiveness for specific conditions, and side effect profiles.
          </p>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed">
            This comprehensive comparison will help you understand which option might be more appropriate for your individual situation, though the final decision should always be made in consultation with a qualified healthcare provider.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Feature</div>
              <div className="p-6 font-semibold border-l border-white border-opacity-20">SSRIs</div>
              <div className="p-6 font-semibold border-l border-white border-opacity-20">SNRIs</div>
            </div>
            
            {/* Mechanism */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Mechanism</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Increases serotonin only</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Increases serotonin and norepinephrine</div>
            </div>
            
            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Primary Uses</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Depression, anxiety disorders, OCD, PTSD</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Depression, anxiety, chronic pain, fibromyalgia</div>
            </div>
            
            {/* Common Examples */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Common Examples</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Prozac, Zoloft, Lexapro, Paxil, Celexa</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Effexor, Cymbalta, Pristiq, Fetzima</div>
            </div>
            
            {/* Side Effects */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Common Side Effects</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Nausea, sleep changes, sexual dysfunction, weight gain</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Nausea, increased blood pressure, sweating, sexual dysfunction</div>
            </div>
            
            {/* Time to Effect */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Time to Effect</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">4-6 weeks for full benefit</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">4-6 weeks for full benefit</div>
            </div>
            
            {/* Withdrawal */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Discontinuation</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Should be tapered; withdrawal possible</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Should be tapered; may have more withdrawal symptoms</div>
            </div>
            
            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Average Cost</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">$4-30/month generic; $200-400 brand</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">$15-50/month generic; $200-500 brand</div>
            </div>
            
            {/* First-Line Treatment */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Typically Prescribed</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Usually first-line treatment</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Often second-line or for specific conditions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - SSRIs */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up mb-16">
            <div className="flex items-center gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-[var(--color-ink)]">
                SSRIs: The First-Line Standard
              </h2>
            </div>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              Selective Serotonin Reuptake Inhibitors (SSRIs) have been the gold standard for treating depression and anxiety disorders since the late 1980s. They work by blocking the reabsorption (reuptake) of serotonin in the brain, making more of this mood-regulating neurotransmitter available. This selective action on serotonin is what gives them their name and contributes to their generally favorable side effect profile compared to older antidepressants.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              SSRIs are typically the first medication prescribed for depression because decades of research have established their effectiveness and safety profile. They're FDA-approved for major depressive disorder, generalized anxiety disorder, panic disorder, social anxiety disorder, obsessive-compulsive disorder, and post-traumatic stress disorder. Most people tolerate SSRIs well, though sexual side effects are common and can be a reason to switch medications.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              The typical patient profile for SSRIs includes individuals with moderate to severe depression or anxiety without significant physical pain components. They work especially well for people experiencing their first depressive episode or those with anxiety as the primary concern. Because many SSRIs are now available as inexpensive generics (some as low as $4 per month), they're also a practical first choice from a cost perspective.
            </p>
          </div>

          <div className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-[var(--color-ink)]">
                SNRIs: The Dual-Action Alternative
              </h2>
            </div>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs) work on two neurotransmitter systems simultaneously: serotonin and norepinephrine. Norepinephrine is involved in energy, attention, and pain perception, which explains why SNRIs can be particularly effective for people whose depression includes fatigue, lack of motivation, or physical pain. This dual mechanism gives SNRIs some advantages in specific situations, though it can also mean a slightly different side effect profile.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              SNRIs are FDA-approved for major depressive disorder, generalized anxiety disorder, and several chronic pain conditions including fibromyalgia and diabetic neuropathy. They're often prescribed when SSRIs haven't been fully effective, when depression presents with significant fatigue or lack of energy, or when chronic pain coexists with mood symptoms. Some psychiatrists prefer SNRIs for depression with melancholic features (marked loss of pleasure in activities, early morning awakening, significant weight loss).
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              The typical patient profile for SNRIs includes individuals with treatment-resistant depression, depression with prominent fatigue or cognitive symptoms, or those with both depression and chronic pain conditions. Because SNRIs can slightly increase blood pressure due to their norepinephrine effects, they require blood pressure monitoring and may not be suitable for people with uncontrolled hypertension. Discontinuation symptoms can be more pronounced with SNRIs, making it especially important to taper slowly when stopping.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-[var(--color-ink)] mb-8 text-center">
              How to Decide Between SSRIs and SNRIs
            </h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-sm">1</span>
                Consider SSRIs if you:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">Are experiencing your first episode of depression or anxiety</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">Have primarily anxiety symptoms or obsessive-compulsive features</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">Don't have significant physical pain as part of your symptoms</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">Want to start with the most established first-line treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">Are looking for the most cost-effective generic options</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">Have normal blood pressure (no hypertension concerns)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-sm">2</span>
                Consider SNRIs if you:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">Haven't responded adequately to an SSRI trial</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">Experience depression with significant fatigue or low energy</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">Have chronic pain conditions like fibromyalgia or neuropathy</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">Need help with both mood and physical pain symptoms</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">Have difficulty with concentration or mental clarity</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] leading-relaxed">Can commit to regular blood pressure monitoring</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border-l-4 border-[var(--color-primary)]">
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">Important Note:</strong> This comparison is for educational purposes only. The decision between SSRIs and SNRIs should be made collaboratively with a qualified healthcare provider who can consider your complete medical history, current medications, specific symptoms, and individual risk factors. Some people may need to try multiple medications before finding the right fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence & Research */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            What the Research Shows
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Overall Effectiveness</h3>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                Large-scale meta-analyses show that SSRIs and SNRIs have similar overall effectiveness for treating depression, with response rates typically around 50-60% and remission rates around 30-40%.
              </p>
              <p className="text-[var(--color-muted)] text-sm">
                The STAR*D trial (largest antidepressant study) found no significant difference in effectiveness between medication classes for most patients.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Side Effect Profiles</h3>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                While both classes share common side effects, SNRIs show slightly higher rates of blood pressure increases and sweating. SSRIs may have somewhat higher rates of certain sexual side effects.
              </p>
              <p className="text-[var(--color-muted)] text-sm">
                Discontinuation rates due to side effects are similar between the two classes, ranging from 10-20% in clinical trials.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Pain Conditions</h3>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                SNRIs (particularly duloxetine and venlafaxine) have demonstrated superior effectiveness for treating chronic pain conditions including fibromyalgia, diabetic neuropathy, and chronic musculoskeletal pain.
              </p>
              <p className="text-[var(--color-muted)] text-sm">
                This advantage is attributed to norepinephrine's role in descending pain inhibition pathways in the nervous system.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Treatment Resistance</h3>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                Studies suggest SNRIs may be slightly more effective for patients who haven't responded to initial SSRI treatment, though switching within the SSRI class can also be effective.
              </p>
              <p className="text-[var(--color-muted)] text-sm">
                Approximately 30-40% of patients who don't respond to one antidepressant will respond to another in a different class.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-all flex items-center justify-between">
                <span>Can I switch from an SSRI to an SNRI if the first one doesn't work?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Yes, switching medication classes is a common and often effective strategy when initial treatment doesn't provide adequate relief. Your healthcare provider will typically have you taper off the SSRI while potentially starting the SNRI, though the specific approach depends on which medications are involved. It's important to wait at least 4-6 weeks on an adequate dose before concluding a medication isn't working, as antidepressants need time to reach full effectiveness.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-all flex items-center justify-between">
                <span>Will I gain weight on SSRIs or SNRIs?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Weight changes vary significantly by individual and specific medication. Some SSRIs (particularly paroxetine) are more associated with weight gain, while others (like fluoxetine) may initially cause slight weight loss. SNRIs generally have a more neutral effect on weight, though duloxetine can cause modest weight changes in either direction. Many people experience no significant weight change. Maintaining healthy eating habits and regular exercise can help manage any weight effects. If weight gain becomes problematic, discuss alternatives with your provider.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-all flex items-center justify-between">
                <span>How long will I need to stay on medication?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Treatment duration depends on several factors including whether this is your first episode, severity of symptoms, and your response to treatment. For a first episode of major depression, guidelines typically recommend continuing medication for 6-12 months after symptoms resolve. For recurrent depression (two or more episodes), longer-term or indefinite treatment may be recommended to prevent relapse. The decision to discontinue medication should always be made collaboratively with your healthcare provider, with gradual tapering to minimize withdrawal symptoms.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-all flex items-center justify-between">
                <span>Are SNRIs stronger than SSRIs?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                SNRIs aren't necessarily "stronger" than SSRIs—they're different. They affect two neurotransmitter systems instead of one, which can make them more effective for certain symptoms (like pain and fatigue) but doesn't mean they work better for everyone. Research shows similar overall effectiveness rates between the two classes for depression. The concept of "strength" doesn't really apply; it's more about finding the right mechanism of action for your specific symptoms and brain chemistry.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-all flex items-center justify-between">
                <span>Can I combine therapy with either SSRIs or SNRIs?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Absolutely—in fact, combining medication with psychotherapy (particularly cognitive-behavioral therapy or CBT) is considered the gold standard treatment for moderate to severe depression. Research consistently shows that combination treatment leads to better outcomes than either approach alone. Medication helps correct brain chemistry imbalances, while therapy provides coping skills, addresses thought patterns, and helps prevent relapse. This applies equally to both SSRIs and SNRIs. Most treatment guidelines recommend this combined approach whenever possible.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-white mb-6">
            Ready to Discuss Your Medication Options?
          </h2>
          <p className="text-xl text-white opacity-95 mb-10 leading-relaxed">
            Making the right choice between antidepressants requires professional guidance tailored to your unique situation. Let's work together to find the treatment approach that's right for you.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule a Consultation
          </a>
          <p className="text-white opacity-80 mt-6 text-sm">
            Professional psychiatric evaluation • Personalized treatment planning • Ongoing support
          </p>
        </div>
      </section>
    </main>
  )
}