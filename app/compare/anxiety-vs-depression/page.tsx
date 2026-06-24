import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anxiety vs Depression: Understanding the Differences and Overlaps | Arlene Holland',
  description: 'Compare anxiety and depression symptoms, causes, and treatments. Expert guidance to help you understand which condition you may be experiencing and how to get the right help.',
}

export default function AnxietyVsDepressionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 leading-tight">
            Anxiety vs Depression: Understanding the Differences and Overlaps
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            While anxiety and depression are distinct conditions, they often coexist and share similar symptoms. Understanding the key differences helps guide effective treatment.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="px-6 py-5 font-semibold text-lg border-r border-white/20">
                Criteria
              </div>
              <div className="px-6 py-5 font-semibold text-lg border-r border-white/20">
                Anxiety
              </div>
              <div className="px-6 py-5 font-semibold text-lg">
                Depression
              </div>
            </div>

            {/* Primary Emotion */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="px-6 py-5 bg-[var(--color-light)] font-medium text-[var(--color-ink)]">
                Primary Emotion
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Fear, worry, nervousness
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Sadness, emptiness, hopelessness
              </div>
            </div>

            {/* Physical Symptoms */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="px-6 py-5 bg-[var(--color-light)] font-medium text-[var(--color-ink)]">
                Physical Symptoms
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Rapid heartbeat, sweating, muscle tension, restlessness
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Fatigue, changes in appetite, sleep disturbances, physical pain
              </div>
            </div>

            {/* Thought Patterns */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="px-6 py-5 bg-[var(--color-light)] font-medium text-[var(--color-ink)]">
                Thought Patterns
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Future-focused: "What if something bad happens?"
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Past-focused: "Nothing will ever get better"
              </div>
            </div>

            {/* Energy Levels */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="px-6 py-5 bg-[var(--color-light)] font-medium text-[var(--color-ink)]">
                Energy Levels
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                High arousal state, feeling "wired" or on edge
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Low energy, feeling exhausted or unmotivated
              </div>
            </div>

            {/* Treatment Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="px-6 py-5 bg-[var(--color-light)] font-medium text-[var(--color-ink)]">
                First-Line Treatment
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                CBT, exposure therapy, mindfulness techniques
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                CBT, behavioral activation, interpersonal therapy
              </div>
            </div>

            {/* Medication Options */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="px-6 py-5 bg-[var(--color-light)] font-medium text-[var(--color-ink)]">
                Medication Options
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                SSRIs, SNRIs, benzodiazepines (short-term)
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                SSRIs, SNRIs, atypical antidepressants
              </div>
            </div>

            {/* Typical Duration */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="px-6 py-5 bg-[var(--color-light)] font-medium text-[var(--color-ink)]">
                Episode Duration
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Minutes to hours (panic), ongoing (GAD)
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                At least 2 weeks, often months without treatment
              </div>
            </div>

            {/* Recovery Timeline */}
            <div className="grid grid-cols-3">
              <div className="px-6 py-5 bg-[var(--color-light)] font-medium text-[var(--color-ink)]">
                Therapy Timeline
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                8-16 sessions for significant improvement
              </div>
              <div className="px-6 py-5 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                12-20 sessions for lasting change
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - Anxiety */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h2 className="font-serif text-4xl text-[var(--color-ink)]">
                Understanding Anxiety Disorders
              </h2>
            </div>
            
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              Anxiety disorders are characterized by excessive worry, fear, and physical tension that interfere with daily functioning. The hallmark of anxiety is anticipatory fear—your mind constantly scanning for potential threats or problems that might occur in the future. This creates a state of hypervigilance that can be physically and emotionally exhausting.
            </p>
            
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              Common anxiety disorders include Generalized Anxiety Disorder (GAD), where worry is persistent and widespread; Panic Disorder, marked by sudden intense fear episodes; Social Anxiety, involving fear of social situations; and specific phobias. While each has unique features, all involve an overactive threat detection system that sees danger where little exists.
            </p>
            
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              People with anxiety often describe feeling "keyed up," having racing thoughts, difficulty concentrating, and physical symptoms like rapid heartbeat, shortness of breath, or muscle tension. You might avoid situations that trigger anxiety, which can provide short-term relief but ultimately reinforces the fear pattern. Treatment focuses on retraining your nervous system to respond more appropriately to perceived threats.
            </p>
          </div>

          <div className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
              <h2 className="font-serif text-4xl text-[var(--color-ink)]">
                Understanding Depression
              </h2>
            </div>
            
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              Depression, clinically known as Major Depressive Disorder, is characterized by persistent sadness, loss of interest in activities, and a sense of hopelessness that lasts for weeks or months. Unlike normal sadness that comes and goes, depression creates a pervasive emotional numbness or heaviness that colors every aspect of life. It affects how you think, feel, and handle daily activities.
            </p>
            
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              The cognitive patterns in depression are distinctly different from anxiety. Rather than worrying about future threats, depression involves negative thinking about yourself, your life, and your future—what clinicians call the "cognitive triad." You might believe you're worthless, that your situation is unchangeable, or that nothing good will ever happen. These thoughts feel like facts rather than interpretations.
            </p>
            
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Physical symptoms of depression often include profound fatigue, changes in sleep patterns (insomnia or oversleeping), appetite changes, and sometimes physical pain without clear cause. Many people describe feeling as if they're moving through molasses—everything requires enormous effort. Treatment addresses both the thought patterns and behavioral withdrawal that maintain depression, often starting with small, manageable behavioral changes that gradually rebuild positive momentum.
            </p>
          </div>
        </div>
      </section>

      {/* The Overlap */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            When Anxiety and Depression Overlap
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-10 animate-fade-up">
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              Research shows that anxiety and depression co-occur in approximately 60% of cases. This isn't coincidental—these conditions share neurobiological pathways and can trigger each other in a cyclical pattern. Chronic anxiety can be exhausting, leading to the depletion and hopelessness characteristic of depression. Conversely, depression can create worry about your mental state and future, manifesting as anxiety.
            </p>
            
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              When both conditions are present, you might experience a particularly challenging combination: the restless energy of anxiety coupled with the low motivation of depression, or anxious rumination about depressive thoughts. This "mixed presentation" can feel especially overwhelming because you're simultaneously wired and tired, worried and hopeless.
            </p>
            
            <div className="bg-[var(--color-light)] rounded-xl p-8 mt-8">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">
                Common Overlapping Symptoms
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Difficulty concentrating or making decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Sleep disturbances (too much or too little)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Irritability and restlessness</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Avoiding activities or social situations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Physical symptoms with no clear medical cause</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Rumination and repetitive negative thoughts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 shadow-lg animate-fade-up">
            <h2 className="font-serif text-4xl text-[var(--color-ink)] text-center mb-10">
              Identifying Your Primary Experience
            </h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-2xl text-[var(--color-primary)] mb-5 flex items-center gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  Your experience may be primarily anxiety if:
                </h3>
                <ul className="space-y-3 ml-11">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Your mind constantly races with "what if" scenarios about future events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You experience physical tension, rapid heartbeat, or shortness of breath regularly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You avoid specific situations because they trigger fear or panic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You feel restless, on edge, or like you can't relax even when trying</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You can still experience pleasure when anxiety temporarily subsides</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[var(--color-primary)] mb-5 flex items-center gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                  Your experience may be primarily depression if:
                </h3>
                <ul className="space-y-3 ml-11">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You feel persistently sad, empty, or emotionally numb for weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Activities you once enjoyed no longer bring pleasure or interest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You experience profound fatigue and everything feels effortful</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You have negative thoughts about yourself, hopelessness about the future</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You've withdrawn from social connections and activities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[var(--color-primary)]">
                <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">
                  The Good News
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Whether you're experiencing anxiety, depression, or both, evidence-based treatments are highly effective. Cognitive-behavioral therapy works well for both conditions, often addressing them simultaneously when they co-occur. The key is accurate assessment and a treatment plan tailored to your specific symptom pattern—something we'll develop together in our initial sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Common Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-xl shadow-md group">
              <summary className="px-8 py-6 font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                Can you have both anxiety and depression at the same time?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, absolutely. This is called comorbidity, and it's very common—approximately 60% of people with one condition also experience the other. Having both doesn't mean your situation is more severe or harder to treat; it simply means your treatment plan needs to address both symptom patterns. Many therapeutic approaches, particularly cognitive-behavioral therapy, effectively treat both conditions simultaneously.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md group">
              <summary className="px-8 py-6 font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                Which condition should be treated first if I have both?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                Modern treatment approaches don't require choosing one condition to treat first. Instead, we identify which symptoms are most disruptive to your daily life and start there, while recognizing how anxiety and depression interact in your specific case. Often, interventions that help one condition also benefit the other. For example, behavioral activation (getting engaged in activities) helps both depressive withdrawal and anxious avoidance.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md group">
              <summary className="px-8 py-6 font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                Do anxiety and depression require different medications?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                Interestingly, many medications work for both anxiety and depression. SSRIs (Selective Serotonin Reuptake Inhibitors) and SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors) are first-line treatments for both conditions. This is one reason why having both conditions doesn't necessarily complicate medication management. However, medication decisions should always be made in consultation with a psychiatrist who can evaluate your specific situation.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md group">
              <summary className="px-8 py-6 font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                Can anxiety turn into depression over time?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, chronic untreated anxiety can lead to depression. Living with constant worry and fear is exhausting, and over time this exhaustion can develop into the hopelessness and low energy characteristic of depression. This is one reason early intervention for anxiety is so important. Treating anxiety effectively can prevent the development of secondary depression.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md group">
              <summary className="px-8 py-6 font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                How long does it take to see improvement with treatment?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most people begin noticing some improvement within 4-6 weeks of starting therapy, though this varies by individual and the severity of symptoms. With cognitive-behavioral therapy, significant improvement typically occurs within 8-16 sessions for anxiety and 12-20 sessions for depression. If medication is part of your treatment, it typically takes 4-6 weeks to reach full effectiveness. The key is consistency with treatment and open communication about what's working and what isn't.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 animate-fade-up">
            Get Clarity on Your Experience
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed animate-fade-up">
            Whether you're experiencing anxiety, depression, or both, an accurate assessment is the first step toward effective treatment. Let's discuss your specific symptoms and create a personalized treatment plan.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] hover:scale-105 transition-all shadow-lg animate-fade-up"
          >
            Discuss Your Options
          </a>
          <p className="text-white/80 mt-6 animate-fade-up">
            Most clients see improvement within the first few sessions
          </p>
        </div>
      </section>
    </main>
  )
}