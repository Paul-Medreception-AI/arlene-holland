import Link from 'next/link'

export default function ADHDAssessmentTreatmentPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">Services</Link>
            <span className="mx-2">›</span>
            <span>ADHD Assessment & Treatment</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            ADHD Assessment & Treatment in arleneholland
          </h1>
          <p className="text-xl opacity-95 leading-relaxed max-w-3xl">
            Comprehensive evaluation and evidence-based treatment for Attention-Deficit/Hyperactivity Disorder across the lifespan. Our integrated approach combines clinical assessment, personalized treatment planning, and ongoing support to help individuals manage symptoms, improve functioning, and thrive in daily life.
          </p>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-10 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            What is ADHD Assessment & Treatment?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with functioning and development. While often diagnosed in childhood, ADHD frequently continues into adolescence and adulthood, affecting academic performance, work productivity, relationships, and overall quality of life. Our comprehensive ADHD assessment process goes beyond simple checklists to provide a thorough evaluation of cognitive functioning, behavioral patterns, and co-occurring conditions that may impact treatment recommendations.
            </p>
            
            <p>
              The assessment phase typically involves clinical interviews, standardized rating scales completed by multiple informants, review of developmental and medical history, and when indicated, cognitive or neuropsychological testing to rule out learning disabilities or other conditions that may mimic ADHD symptoms. This multi-method, multi-informant approach ensures accurate diagnosis and helps differentiate ADHD from other conditions such as anxiety, depression, sleep disorders, or trauma-related symptoms that can present similarly. Understanding the specific ADHD presentation—predominantly inattentive, predominantly hyperactive-impulsive, or combined type—is crucial for developing an effective treatment plan.
            </p>
            
            <p>
              Treatment for ADHD is most effective when it combines evidence-based interventions tailored to individual needs. Research consistently demonstrates that multimodal treatment—combining medication management, behavioral strategies, psychoeducation, and skills training—produces the best outcomes. Our approach recognizes that ADHD affects each person differently and requires ongoing adjustment as life circumstances change. We work collaboratively with clients, families, schools, and other healthcare providers to create comprehensive treatment plans that address not only core ADHD symptoms but also associated challenges with executive functioning, emotional regulation, time management, and organizational skills.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
              Common Signs & Symptoms
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Difficulty sustaining attention on tasks or activities',
                'Frequent careless mistakes or overlooking details',
                'Trouble organizing tasks and managing time',
                'Avoiding tasks requiring sustained mental effort',
                'Losing items necessary for tasks and activities',
                'Easily distracted by external stimuli or internal thoughts',
                'Forgetfulness in daily activities and appointments',
                'Fidgeting, restlessness, or difficulty staying seated',
                'Talking excessively or interrupting others',
                'Difficulty waiting turn or acting without thinking',
                'Starting multiple projects but rarely finishing them',
                'Emotional dysregulation or mood variability'
              ].map((symptom, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE TREAT IT */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-center text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            Our Approach to ADHD Assessment & Treatment
          </h2>

          {/* 3-Step Process */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-light)] mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Thorough clinical evaluation including developmental history, symptom rating scales, cognitive screening, and differential diagnosis to identify ADHD and any co-occurring conditions requiring attention.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-light)] mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Individualized multimodal approach combining medication management when appropriate, behavioral strategies, coaching for executive function skills, and accommodations for school or workplace.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-light)] mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Ongoing Support & Adjustment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Regular follow-up appointments to monitor treatment effectiveness, adjust medications as needed, refine behavioral strategies, and provide continuous support as life demands evolve.
              </p>
            </div>
          </div>

          {/* Treatment Modalities */}
          <div className="bg-[var(--color-cream)] rounded-2xl p-12 animate-fade-up">
            <h3 className="text-3xl font-light mb-8 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
              Evidence-Based Treatment Modalities
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Medication Management</h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Stimulant and non-stimulant medications have strong evidence for reducing ADHD symptoms. We carefully evaluate medication options, start with low doses, monitor for effectiveness and side effects, and adjust treatment based on individual response. Medication decisions are always collaborative and consider each person's unique circumstances, preferences, and treatment goals.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Behavioral Interventions</h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Cognitive-behavioral therapy (CBT) adapted for ADHD helps develop coping strategies, improve organizational skills, and address negative thought patterns. Parent training for children with ADHD and behavioral coaching for adults focus on implementing structure, routine, and environmental modifications to support success.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Executive Function Coaching</h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Targeted skills training in time management, task initiation and completion, organization, planning, working memory strategies, and emotional self-regulation. These practical tools help individuals compensate for executive function deficits and build systems that support long-term success.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Psychoeducation & Advocacy</h4>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Understanding ADHD neurobiology, treatment options, and self-advocacy empowers individuals and families. We provide guidance on obtaining academic accommodations, workplace modifications, and connecting with community resources to build a comprehensive support network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="text-4xl font-light mb-10 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
              What to Expect: Treatment Timeline
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">First Visit (90-120 minutes)</h4>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Comprehensive clinical interview covering developmental history, current symptoms across settings, functional impairment, medical history, and prior treatments. Rating scales provided to client and collateral informants. Initial diagnostic impressions discussed and assessment plan outlined.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Weeks 2-4: Assessment Completion</h4>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Follow-up session to review rating scale results, conduct any additional testing, finalize diagnosis, and discuss comprehensive treatment recommendations. If medication is appropriate, initiate treatment with careful monitoring. Begin psychoeducation and initial skill-building strategies.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Months 1-3: Treatment Optimization</h4>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Frequent follow-up appointments (every 2-4 weeks) to fine-tune medication dosing, monitor side effects, implement behavioral strategies, develop organizational systems, and address emerging challenges. This active treatment phase focuses on finding the optimal intervention combination for each individual.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Maintenance</h4>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Once symptoms are well-managed, transition to less frequent maintenance appointments (monthly or quarterly) for medication monitoring, strategy refinement, and proactive problem-solving. ADHD is a chronic condition requiring ongoing management, and we provide continuous support through life transitions and changing demands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-center text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            Common Questions About ADHD Assessment & Treatment
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                How is ADHD diagnosed in adults versus children?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                While the core diagnostic criteria are similar, adult ADHD assessment focuses more on workplace functioning, relationship impacts, and how symptoms manifest in adult responsibilities rather than academic performance. Adults often develop compensatory strategies that mask symptoms, requiring careful clinical evaluation to identify underlying ADHD. We gather information about childhood symptoms (ADHD must have been present before age 12) while thoroughly assessing current functional impairment across multiple life domains.
              </div>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                Are medications necessary for treating ADHD?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Medication is not mandatory, but research shows it is often the most effective treatment component for core ADHD symptoms. Many individuals achieve optimal functioning with a combination of medication and behavioral strategies. Treatment decisions are individualized based on symptom severity, functional impairment, personal preferences, medical history, and treatment goals. Some people manage well with behavioral interventions alone, while others require medication to achieve meaningful improvement. We discuss all options thoroughly and support whatever approach aligns with your values and needs.
              </div>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                What's the difference between stimulant and non-stimulant ADHD medications?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Stimulant medications (methylphenidate and amphetamine formulations) work quickly, have the strongest evidence base, and are effective for approximately 70-80% of individuals with ADHD. They increase dopamine and norepinephrine availability in the brain. Non-stimulant options (atomoxetine, guanfacine, clonidine) may be preferred when stimulants cause problematic side effects, when there are co-occurring conditions like tics or substance use history, or when stimulants are ineffective. Non-stimulants generally take longer to reach full effectiveness but provide 24-hour coverage and may have different side effect profiles.
              </div>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                Can ADHD be confused with other conditions?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, many conditions can produce symptoms that mimic ADHD, including anxiety disorders, depression, bipolar disorder, sleep disorders, learning disabilities, autism spectrum disorder, and trauma-related conditions. Substances like caffeine, medications, and substance use can also affect attention and concentration. Thorough assessment includes differential diagnosis to distinguish ADHD from these conditions. Additionally, ADHD frequently co-occurs with anxiety, depression, learning disabilities, and other conditions, requiring comprehensive treatment planning that addresses all presenting concerns.
              </div>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                How long does ADHD treatment typically last?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                ADHD is a chronic neurodevelopmental condition that typically requires ongoing management rather than time-limited treatment. While symptoms may change over time and some people develop effective compensatory strategies, most individuals benefit from continued support, medication management, and periodic strategy refinement throughout their lives. The intensity of treatment varies—active treatment optimization may last several months, followed by less frequent maintenance care. Treatment should adapt as life circumstances change, such as during school transitions, career changes, or major life events that alter demands on executive functioning.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-12 text-center text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/anxiety-treatment" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{fontFamily: 'var(--font-cormorant)'}}>
                Anxiety Treatment
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Evidence-based treatment for generalized anxiety, social anxiety, panic disorder, and specific phobias using CBT and exposure therapy.
              </p>
            </Link>

            <Link href="/services/depression-therapy" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{fontFamily: 'var(--font-cormorant)'}}>
                Depression Therapy
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Compassionate treatment for major depression and persistent depressive disorder using cognitive-behavioral and interpersonal approaches.
              </p>
            </Link>

            <Link href="/services/medication-management" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{fontFamily: 'var(--font-cormorant)'}}>
                Medication Management
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Psychiatric medication evaluation and ongoing management for mental health conditions requiring pharmacological intervention.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Ready to Get Help with ADHD?
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Take the first step toward better focus, organization, and functioning. Comprehensive assessment and evidence-based treatment can make a meaningful difference.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] transition-colors duration-300"
          >
            Schedule Your Assessment
          </Link>
        </div>
      </section>
    </main>
  )
}