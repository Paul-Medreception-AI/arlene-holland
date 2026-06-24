import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Generalized Anxiety Disorder Treatment in Holland | Arlene Holland',
  description: 'Expert Generalized Anxiety Disorder treatment in Holland. Board-certified psychiatric care with personalized therapy and medication management. Telehealth available.',
  keywords: 'Generalized Anxiety Disorder treatment Holland, GAD therapy Holland, anxiety treatment, psychiatric care Holland, mental health Holland',
  openGraph: {
    title: 'Generalized Anxiety Disorder Treatment in Holland | Arlene Holland',
    description: 'Expert Generalized Anxiety Disorder treatment in Holland. Board-certified psychiatric care with personalized therapy and medication management.',
    url: 'https://arleneholland.net/conditions/generalized-anxiety-disorder',
    type: 'website',
  }
}

export default function GeneralizedAnxietyDisorderPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Generalized Anxiety Disorder</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Generalized Anxiety Disorder Treatment in Holland
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Generalized Anxiety Disorder (GAD) can make everyday life feel overwhelming, but effective treatment can restore your peace of mind. At Arlene Holland's practice, we provide compassionate, evidence-based care tailored to help you manage worry and reclaim your quality of life.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Generalized Anxiety Disorder
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Generalized Anxiety Disorder (GAD) is characterized by persistent, excessive worry about various aspects of daily life—work, health, finances, relationships, and even minor matters. Unlike typical anxiety that comes and goes with stressful events, GAD involves chronic worry that feels difficult or impossible to control, often lasting six months or longer. This condition affects approximately 6.8 million adults in the United States, or about 3.1% of the population, with women being twice as likely to be affected as men. People with GAD often anticipate disaster and may be overly concerned about everyday matters even when there is little or no reason for concern. This persistent state of heightened anxiety can significantly interfere with work performance, academic achievement, relationships, and overall quality of life, making even routine activities feel exhausting.
            </p>
            <p>
              The causes of Generalized Anxiety Disorder are multifaceted, involving a complex interplay of biological, genetic, psychological, and environmental factors. Research indicates that GAD tends to run in families, suggesting a genetic component, though specific genes have not been definitively identified. Neurobiological factors play a role as well—individuals with GAD often show differences in brain chemistry, particularly involving neurotransmitters like serotonin, dopamine, and gamma-aminobutyric acid (GABA). Personality traits such as perfectionism, a tendency toward negative thinking, or behavioral inhibition can increase vulnerability. Environmental stressors including childhood trauma, chronic stress, major life changes, or ongoing difficult circumstances can trigger or exacerbate symptoms. Additionally, certain medical conditions and substance use can contribute to or mimic anxiety symptoms, making comprehensive assessment essential.
            </p>
            <p>
              Professional treatment for Generalized Anxiety Disorder is crucial because GAD rarely improves on its own and often worsens without intervention. Left untreated, chronic anxiety can lead to depression, substance abuse, physical health problems including cardiovascular issues and gastrointestinal disorders, and significantly diminished quality of life. The good news is that GAD is highly treatable. Evidence-based interventions including psychotherapy—particularly Cognitive Behavioral Therapy (CBT)—and medication management have proven highly effective in reducing symptoms and helping individuals regain control over their thoughts and emotions. Early treatment not only provides symptom relief but also equips individuals with coping strategies that prevent relapse and promote long-term mental wellness. With proper care, most people with GAD experience significant improvement and are able to lead fulfilling, productive lives.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Signs & Symptoms of Generalized Anxiety Disorder
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Emotional Symptoms */}
            <div>
              <h3 className="font-cormorant text-2xl mb-6 text-[var(--color-dark)]">Emotional & Cognitive Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Persistent, excessive worry</strong>
                    <p className="text-[var(--color-muted)]">Chronic worry about multiple areas of life that feels uncontrollable and out of proportion to actual events.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Restlessness and feeling on edge</strong>
                    <p className="text-[var(--color-muted)]">A constant sense of being keyed up, unable to relax, or feeling like something bad is about to happen.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty concentrating</strong>
                    <p className="text-[var(--color-muted)]">Mind goes blank, trouble focusing on tasks, or becoming easily distracted by anxious thoughts.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Irritability</strong>
                    <p className="text-[var(--color-muted)]">Increased frustration, impatience, or short temper, often due to the exhausting nature of constant worry.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Anticipating the worst</strong>
                    <p className="text-[var(--color-muted)]">Tendency to expect negative outcomes or catastrophize situations, even when evidence suggests otherwise.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Fear of making wrong decisions</strong>
                    <p className="text-[var(--color-muted)]">Overwhelming indecisiveness and excessive rumination over choices, large and small.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Inability to let go of worries</strong>
                    <p className="text-[var(--color-muted)]">Persistent preoccupation with concerns that interferes with daily functioning and relaxation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Symptoms */}
            <div>
              <h3 className="font-cormorant text-2xl mb-6 text-[var(--color-dark)]">Physical & Behavioral Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Muscle tension and aches</strong>
                    <p className="text-[var(--color-muted)]">Chronic tightness in muscles, particularly in the neck, shoulders, and back, often leading to pain and discomfort.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Sleep disturbances</strong>
                    <p className="text-[var(--color-muted)]">Difficulty falling asleep, staying asleep, or experiencing restless, unsatisfying sleep due to racing thoughts.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Fatigue and low energy</strong>
                    <p className="text-[var(--color-muted)]">Persistent tiredness and exhaustion resulting from the mental and physical toll of constant anxiety.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Gastrointestinal problems</strong>
                    <p className="text-[var(--color-muted)]">Frequent stomachaches, nausea, diarrhea, or irritable bowel syndrome related to anxiety.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Headaches</strong>
                    <p className="text-[var(--color-muted)]">Frequent tension headaches or migraines triggered or worsened by chronic worry and stress.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Trembling or feeling shaky</strong>
                    <p className="text-[var(--color-muted)]">Physical manifestations of anxiety including tremors, shakiness, or feeling jittery.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Sweating and increased heart rate</strong>
                    <p className="text-[var(--color-muted)]">Episodes of excessive sweating, rapid heartbeat, or feeling hot without physical exertion.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Avoidance behaviors</strong>
                    <p className="text-[var(--color-muted)]">Steering clear of situations or activities that trigger anxiety, limiting life experiences and opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and can prevent GAD from becoming more severe or leading to additional mental health concerns.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-16 text-center text-[var(--color-ink)]">
            How We Treat Generalized Anxiety Disorder
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough psychiatric evaluation where we explore your symptoms, medical history, lifestyle factors, and how anxiety impacts your daily functioning. We use validated screening tools to accurately diagnose GAD and identify any co-occurring conditions. This detailed assessment allows us to understand your unique situation and create a foundation for personalized treatment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we develop an individualized treatment plan that may include psychotherapy, medication, or a combination of both. We discuss all options with you, explaining the benefits and potential side effects of each approach. Your treatment plan is collaborative—we work together to identify strategies that align with your goals, preferences, and lifestyle, ensuring you feel empowered throughout the process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Treatment for GAD is not a one-time event but an ongoing process. We schedule regular follow-up appointments to monitor your progress, adjust medications as needed, and refine therapeutic strategies. We track symptom improvement using standardized measures and actively address any challenges that arise. Our goal is sustainable, long-term wellness—helping you develop skills and resilience that extend well beyond our sessions together.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-[var(--color-ink)] leading-relaxed space-y-4">
            <p>
              Our treatment approach is grounded in evidence-based practices proven effective for Generalized Anxiety Disorder. <strong>Cognitive Behavioral Therapy (CBT)</strong> is the gold standard psychotherapy for GAD, helping you identify and challenge anxious thought patterns, develop healthier perspectives, and build practical coping strategies. We may also incorporate <strong>mindfulness-based techniques</strong>, <strong>relaxation training</strong>, and <strong>exposure-based exercises</strong> to gradually reduce avoidance behaviors and increase confidence in managing anxiety-provoking situations.
            </p>
            <p>
              When medication is appropriate, we carefully consider options including <strong>selective serotonin reuptake inhibitors (SSRIs)</strong> and <strong>serotonin-norepinephrine reuptake inhibitors (SNRIs)</strong>, which are first-line medications for GAD due to their efficacy and favorable side effect profiles. Other medications such as <strong>buspirone</strong> or, in certain circumstances, <strong>benzodiazepines</strong> for short-term use may be considered. We prioritize safe, effective medication management with ongoing monitoring and open communication about how you're responding to treatment.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Why Choose Arlene Holland for Generalized Anxiety Disorder Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Specialized psychiatric training with extensive experience treating anxiety disorders across diverse populations and severity levels.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl mb-2 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                No two people experience GAD the same way. We tailor every treatment plan to your individual symptoms, goals, and circumstances.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl mb-2 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                Access quality mental health care from the comfort of your home with secure, confidential telehealth appointments that fit your schedule.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl mb-2 text-[var(--color-ink)]">Proven Track Record</h3>
              <p className="text-[var(--color-muted)]">
                Years of experience successfully helping individuals overcome GAD and develop lasting skills for managing anxiety and stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During your initial appointment, we conduct a comprehensive psychiatric evaluation lasting 60-90 minutes. We discuss your symptoms in detail, review your medical and mental health history, explore current stressors, and assess how GAD affects your daily life. This is also an opportunity for you to ask questions, express concerns, and begin building a therapeutic relationship. By the end of this session, you'll have a clear diagnosis and preliminary treatment recommendations.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Treatment typically begins within one to two weeks of your initial evaluation. If medication is part of your plan, we start at an appropriate dose and schedule a follow-up within 2-4 weeks to assess response and any side effects. If psychotherapy is recommended, we begin structured sessions focused on understanding your anxiety patterns and learning evidence-based techniques. During this phase, expect frequent communication as we fine-tune your treatment approach based on your early response.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Most individuals begin noticing improvement within 4-8 weeks of consistent treatment, though full benefit may take longer. During this phase, we conduct regular progress reviews, adjusting medication dosages or therapeutic strategies as needed. You'll practice the coping skills learned in therapy and begin applying them to real-life situations. We celebrate gains, troubleshoot obstacles, and continue refining your personalized treatment plan to maximize effectiveness and minimize side effects.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl mb-2 text-[var(--color-ink)]">Long-Term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  GAD is often a chronic condition requiring ongoing management, but with proper treatment, most people achieve significant, lasting improvement. As symptoms stabilize, appointments may become less frequent—monthly or quarterly—focused on maintaining wellness, preventing relapse, and addressing new challenges as they arise. We help you develop a sustainable self-care plan, recognize early warning signs of symptom return, and build confidence in your ability to manage anxiety independently while knowing professional support remains available whenever needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Frequently Asked Questions About Generalized Anxiety Disorder
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does treatment for GAD typically take?
                <span className="text-[var(--color-primary)] group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The duration of treatment varies significantly depending on symptom severity, individual response, and treatment modality. Many people notice improvement within 4-8 weeks of starting treatment, but achieving full remission and developing robust coping skills typically takes 3-6 months or longer. Because GAD is often a chronic condition, ongoing maintenance treatment—whether periodic medication management appointments or occasional therapy sessions—may be recommended to sustain gains and prevent relapse. Some individuals benefit from short-term, intensive treatment, while others need longer-term support. We work with you to establish realistic expectations and adjust the treatment timeline based on your unique progress.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Is medication always required to treat Generalized Anxiety Disorder?
                <span className="text-[var(--color-primary)] group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                No, medication is not always necessary. For mild to moderate GAD, psychotherapy alone—particularly Cognitive Behavioral Therapy (CBT)—can be highly effective. However, for moderate to severe GAD, or when symptoms significantly interfere with daily functioning, research shows that a combination of medication and therapy often produces the best outcomes. Medication can provide relatively rapid symptom relief, making it easier to engage in therapy and practice new coping skills. The decision to use medication is individualized and collaborative—we thoroughly discuss the potential benefits, risks, and your personal preferences before making any recommendations. Some people choose to start with therapy and add medication later if needed, while others prefer to begin with both approaches simultaneously.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover treatment for Generalized Anxiety Disorder?
                <span className="text-[var(--color-primary)] group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most insurance plans provide coverage for mental health services, including psychiatric evaluation, medication management, and psychotherapy for diagnosed conditions like GAD. Coverage specifics—such as copays, deductibles, and session limits—vary by plan. We recommend contacting your insurance provider before your first appointment to verify your mental health benefits and understand your out-of-pocket costs. Our office can provide you with the necessary documentation and diagnostic codes to facilitate insurance claims. If you don't have insurance or prefer not to use it, we also offer self-pay options and can discuss payment plans if needed. Investing in treatment for GAD is investing in your overall health, productivity, and quality of life.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What if therapy or medication isn't working for me?
                <span className="text-[var(--color-primary)] group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If you're not experiencing improvement after a reasonable trial period—typically 6-8 weeks for medication or 8-12 sessions of therapy—it's important to communicate openly with your provider. Treatment for GAD is not one-size-fits-all, and sometimes adjustments are needed. We may increase medication dosage, switch to a different medication with a different mechanism of action, add adjunctive treatments, or modify the therapeutic approach. It's also important to reassess the diagnosis to ensure there are no co-occurring conditions (like depression, substance use, or medical issues) contributing to symptoms. Non-response doesn't mean you can't be helped—it means we need to refine the approach. Persistence and collaboration are key, and we're committed to working with you until we find the right combination of treatments that brings relief.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can telehealth appointments be effective for treating GAD?
                <span className="text-[var(--color-primary)] group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, research has shown that telehealth is highly effective for treating Generalized Anxiety Disorder. Virtual appointments offer the same quality of care as in-person visits, with the added benefits of convenience, reduced travel time, and the comfort of receiving treatment in your own environment—which can actually reduce anxiety for some individuals. Telehealth is particularly well-suited for medication management appointments and psychotherapy sessions. We use secure, HIPAA-compliant video platforms to ensure confidentiality. The only situations where in-person visits might be necessary are certain initial evaluations or acute crisis situations, but the vast majority of GAD treatment can be successfully conducted via telehealth.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Will I need to take medication for the rest of my life?
                <span className="text-[var(--color-primary)] group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Not necessarily. The duration of medication treatment depends on several factors, including the severity and chronicity of your GAD, your response to treatment, and whether you've had previous episodes. For some people, medication is a short-to-medium-term intervention (6-12 months) that provides symptom relief while they learn coping skills through therapy. Once symptoms are well-controlled and new skills are solidified, we may collaboratively decide to taper medication gradually. For others, particularly those with severe or recurrent GAD, longer-term maintenance medication may be beneficial to prevent relapse. There's no shame in needing ongoing medication—GAD has biological underpinnings, much like other chronic health conditions. Our goal is to use medication judiciously, at the lowest effective dose, for as long as it meaningfully improves your functioning and quality of life, with regular reassessment of ongoing need.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-center text-[var(--color-ink)]">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/conditions/panic-disorder" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="font-cormorant text-xl mb-2 text-[var(--color-primary)] group-hover:text-[var(--color-dark)] transition-colors">
                Panic Disorder
              </h4>
              <p className="text-[var(--color-muted)]">
                Recurrent, unexpected panic attacks and persistent fear of future attacks that can severely limit daily activities.
              </p>
            </a>

            <a href="/conditions/major-depression" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="font-cormorant text-xl mb-2 text-[var(--color-primary)] group-hover:text-[var(--color-dark)] transition-colors">
                Major Depression
              </h4>
              <p className="text-[var(--color-muted)]">
                Persistent sadness, loss of interest, and other symptoms that often co-occur with anxiety disorders and require integrated treatment.
              </p>
            </a>

            <a href="/conditions/social-anxiety-disorder" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="font-cormorant text-xl mb-2 text-[var(--color-primary)] group-hover:text-[var(--color-dark)] transition-colors">
                Social Anxiety Disorder
              </h4>
              <p className="text-[var(--color-muted)]">
                Intense fear of social situations and being judged by others, leading to avoidance and significant distress.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Generalized Anxiety Disorder Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face Generalized Anxiety Disorder alone. Our team is ready to help you find relief and reclaim your peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/conditions" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}