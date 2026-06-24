import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chronic Pain with Psychiatric Comorbidity Treatment in Holland | Arlene Holland',
  description: 'Expert treatment for chronic pain with psychiatric comorbidity in Holland. Board-certified care addressing both physical pain and mental health conditions. Telehealth available.',
  keywords: 'chronic pain with psychiatric comorbidity treatment Holland, chronic pain mental health Holland, pain psychiatry Holland, chronic pain depression anxiety Holland',
}

export default function ChronicPainPsychiatricComorbidityPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Chronic Pain with Psychiatric Comorbidity</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Chronic Pain with Psychiatric Comorbidity Treatment in Holland
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Chronic pain and mental health conditions often occur together, creating a complex cycle that requires specialized, integrated treatment. We provide comprehensive psychiatric care that addresses both your physical pain experience and the emotional challenges that accompany it, helping you reclaim your quality of life.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Chronic Pain with Psychiatric Comorbidity
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Chronic pain with psychiatric comorbidity refers to the co-occurrence of persistent physical pain lasting longer than three months alongside one or more mental health conditions such as depression, anxiety, post-traumatic stress disorder, or substance use disorders. This intersection is remarkably common—research indicates that approximately 30-50% of individuals with chronic pain also meet criteria for major depressive disorder, and up to 35% experience anxiety disorders. The relationship between chronic pain and psychiatric conditions is bidirectional and complex: chronic pain increases vulnerability to mental health challenges through mechanisms including sleep disruption, functional impairment, social isolation, and neurobiological changes in pain processing and emotional regulation. Simultaneously, psychiatric conditions can intensify pain perception, reduce pain tolerance, and interfere with treatment adherence. This comorbidity significantly impacts quality of life, often leading to greater disability, increased healthcare utilization, reduced treatment response, and higher risk of opioid misuse compared to either condition alone.
            </p>
            <p>
              The causes and risk factors for developing psychiatric comorbidity alongside chronic pain are multifaceted and interconnected. Biological factors include shared neurological pathways—both chronic pain and conditions like depression involve dysregulation of neurotransmitters such as serotonin, norepinephrine, and dopamine, as well as alterations in brain regions responsible for pain processing, emotional regulation, and reward. Inflammatory processes that contribute to certain pain conditions may also influence mood and anxiety. Psychological risk factors include pre-existing mental health vulnerabilities, catastrophic thinking patterns about pain, fear-avoidance behaviors that lead to deconditioning and increased disability, and previous trauma history. Social and environmental contributors encompass chronic stress, inadequate social support, financial strain from medical costs and work disability, and systemic barriers to accessing integrated care. Certain pain conditions carry particularly high rates of psychiatric comorbidity, including fibromyalgia, chronic back pain, migraine, irritable bowel syndrome, and pain resulting from injuries or medical procedures. Understanding these interconnected factors is essential for developing effective treatment strategies.
            </p>
            <p>
              Professional treatment for chronic pain with psychiatric comorbidity is not merely beneficial—it is essential for breaking the cycle that perpetuates both conditions. Without integrated psychiatric care, individuals face substantially poorer outcomes: untreated depression can amplify pain intensity by 50% or more, anxiety can lead to muscle tension and guarding that worsens physical symptoms, and the combination dramatically increases risk of opioid dependence and suicidal ideation. Evidence-based psychiatric treatment addresses the neurobiological, psychological, and social dimensions simultaneously. Specialized medication management can target both pain modulation and mood regulation through agents like SNRIs (serotonin-norepinephrine reuptake inhibitors), which have demonstrated efficacy for both chronic pain and depression. Psychotherapeutic approaches such as cognitive-behavioral therapy for chronic pain (CBT-CP), acceptance and commitment therapy (ACT), and pain reprocessing therapy help modify maladaptive thought patterns, reduce fear-avoidance behaviors, and develop effective coping strategies. Integrated treatment has been shown to reduce pain intensity, improve functional capacity, decrease healthcare costs, reduce opioid use, and significantly enhance overall quality of life. Seeking specialized care from a psychiatric provider experienced in pain-psychiatric comorbidity ensures you receive comprehensive, coordinated treatment rather than fragmented approaches that address symptoms in isolation.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Chronic Pain with Psychiatric Comorbidity
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-cormorant text-2xl mb-6 text-[var(--color-dark)]">Emotional & Cognitive Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Persistent Low Mood or Hopelessness</p>
                    <p className="text-[var(--color-muted)]">Feeling depressed, tearful, or convinced that pain will never improve, often accompanied by loss of interest in previously enjoyed activities.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Anxiety and Excessive Worry</p>
                    <p className="text-[var(--color-muted)]">Constant worry about pain worsening, fear of movement causing injury, or generalized anxiety that extends beyond pain concerns.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Catastrophic Thinking Patterns</p>
                    <p className="text-[var(--color-muted)]">Magnifying pain sensations, ruminating on worst-case scenarios, or believing you're unable to cope with pain experiences.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Concentrating</p>
                    <p className="text-[var(--color-muted)]">Impaired focus, memory problems, and difficulty completing tasks due to the combined cognitive burden of pain and psychiatric symptoms.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Irritability and Mood Swings</p>
                    <p className="text-[var(--color-muted)]">Increased frustration, short temper with loved ones, or emotional volatility related to pain fluctuations and emotional distress.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Feelings of Guilt or Worthlessness</p>
                    <p className="text-[var(--color-muted)]">Blaming yourself for pain, feeling like a burden to others, or experiencing diminished self-worth due to functional limitations.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Suicidal Thoughts</p>
                    <p className="text-[var(--color-muted)]">Thoughts of ending your life, feeling that life isn't worth living with chronic pain, or wishing you wouldn't wake up—requiring immediate professional intervention.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl mb-6 text-[var(--color-dark)]">Physical & Behavioral Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Sleep Disturbances</p>
                    <p className="text-[var(--color-muted)]">Difficulty falling asleep, frequent nighttime awakenings due to pain or worry, early morning awakening, or non-restorative sleep that leaves you exhausted.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Fatigue and Low Energy</p>
                    <p className="text-[var(--color-muted)]">Persistent exhaustion that goes beyond physical tiredness, lack of motivation to engage in daily activities, or feeling drained by minimal exertion.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Social Withdrawal and Isolation</p>
                    <p className="text-[var(--color-muted)]">Avoiding social gatherings, withdrawing from family and friends, or canceling plans due to pain combined with feelings of depression or anxiety.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Changes in Appetite or Weight</p>
                    <p className="text-[var(--color-muted)]">Significant weight loss or gain, decreased interest in eating, or using food as a coping mechanism for emotional distress related to pain.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Fear-Avoidance Behaviors</p>
                    <p className="text-[var(--color-muted)]">Excessive avoidance of physical activity or movement due to fear of pain exacerbation, leading to deconditioning and paradoxically worsening pain.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Increased Substance Use</p>
                    <p className="text-[var(--color-muted)]">Using alcohol, prescription medications beyond prescribed dosages, or other substances to cope with pain or emotional distress, potentially developing dependence.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Functional Impairment</p>
                    <p className="text-[var(--color-muted)]">Difficulty maintaining employment, managing household responsibilities, or performing self-care activities due to the combined impact of pain and psychiatric symptoms.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Multiple Somatic Complaints</p>
                    <p className="text-[var(--color-muted)]">Experiencing additional physical symptoms beyond your primary pain condition, such as tension headaches, gastrointestinal distress, or chest tightness related to anxiety.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes, prevents symptom progression, and significantly improves quality of life for individuals experiencing chronic pain with psychiatric comorbidity.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Chronic Pain with Psychiatric Comorbidity
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your treatment begins with an in-depth evaluation that examines your pain history, psychiatric symptoms, functional limitations, previous treatments, medication use, and psychosocial factors. We use validated assessment tools to measure pain intensity, depression and anxiety severity, and quality of life impact. This comprehensive understanding allows us to identify the specific interactions between your pain and mental health, creating a foundation for truly integrated care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Integrated Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We develop a personalized treatment strategy that simultaneously addresses pain modulation and psychiatric symptoms through evidence-based interventions. Your plan integrates pharmacological management with psychotherapeutic approaches and coordinated care with your other healthcare providers. We establish clear treatment goals focused on functional improvement, pain reduction, mood stabilization, and enhanced quality of life, with regular monitoring to assess progress and adjust interventions as needed.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Treatment for chronic pain with psychiatric comorbidity requires consistent monitoring and adjustment. We schedule regular follow-up appointments to assess medication effectiveness, side effects, pain levels, mood symptoms, and functional improvements. We provide continuous support during difficult periods, proactively adjust treatment when progress plateaus, and help you develop long-term management strategies. Our goal is sustainable improvement and preventing relapse of both pain and psychiatric symptoms.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-4">
              Our evidence-based treatment approach draws from multiple therapeutic modalities specifically validated for chronic pain with psychiatric comorbidity. Pharmacologically, we utilize medications that target both pain and mood regulation, including serotonin-norepinephrine reuptake inhibitors (SNRIs) such as duloxetine and venlafaxine, which have demonstrated efficacy for chronic pain conditions including fibromyalgia, neuropathic pain, and chronic musculoskeletal pain while simultaneously treating depression and anxiety. Tricyclic antidepressants like nortriptyline may be appropriate for certain pain conditions and comorbid insomnia. When indicated, we carefully prescribe other adjunctive medications including anticonvulsants for neuropathic pain, muscle relaxants, or targeted medications for anxiety disorders, always with attention to interaction effects and dependence risks.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              Psychotherapeutic interventions form an essential component of treatment. Cognitive-behavioral therapy for chronic pain (CBT-CP) helps modify catastrophic thinking patterns, reduce fear-avoidance behaviors, improve coping skills, and address mood symptoms through structured, evidence-based techniques. Acceptance and Commitment Therapy (ACT) cultivates psychological flexibility, helping you pursue meaningful life activities despite pain rather than allowing pain to dominate your existence. Mindfulness-based stress reduction (MBSR) and other mind-body approaches can reduce pain perception, decrease emotional reactivity, and improve overall wellbeing. We coordinate with specialized pain psychologists and integrate these approaches with medication management for optimal outcomes. Additionally, we provide education about pain neuroscience, helping you understand the complex relationship between pain and emotions, which itself can reduce pain-related distress and improve treatment engagement.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Arlene Holland for Chronic Pain with Psychiatric Comorbidity Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-cormorant text-xl mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">Specialized psychiatric training in pain-mental health comorbidity with deep understanding of the neurobiological and psychological connections between chronic pain and psychiatric conditions.</p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="font-cormorant text-xl mb-2 text-[var(--color-ink)]">Personalized Treatment Approach</h3>
              <p className="text-[var(--color-muted)]">We recognize that each patient's experience of chronic pain and psychiatric symptoms is unique, tailoring treatment plans to your specific pain condition, mental health needs, and life circumstances.</p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-cormorant text-xl mb-2 text-[var(--color-ink)]">Telehealth Convenience</h3>
              <p className="text-[var(--color-muted)]">Access specialized care from the comfort of your home—particularly valuable when chronic pain makes travel difficult—with secure, confidential video appointments.</p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="font-cormorant text-xl mb-2 text-[var(--color-ink)]">Evidence-Based Care</h3>
              <p className="text-[var(--color-muted)]">Treatment grounded in the latest research on pain-psychiatric comorbidity, utilizing interventions with proven efficacy for improving both pain and mental health outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl text-[var(--color-primary)]">1</div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive assessment typically lasts 60-90 minutes, during which we explore your pain history, onset and progression, previous treatments and their effectiveness, current medications, psychiatric symptom history, functional limitations, social support, and treatment goals. We may use standardized questionnaires to establish baseline measures of pain intensity, depression, anxiety, and quality of life. By the end of this visit, you'll have a clear diagnosis and preliminary treatment plan with specific recommendations for both medication management and therapeutic approaches.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl text-[var(--color-primary)]">2</div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During the initial treatment phase, we typically schedule more frequent appointments (every 2-3 weeks) to monitor your response to medications, assess for side effects, and provide therapeutic support. If medication is part of your treatment plan, it often takes 4-6 weeks to experience full benefits, though some improvements may occur earlier. We'll provide education about pain neuroscience, introduce coping strategies, and coordinate with any other providers involved in your care. This is a period of careful titration and adjustment as we fine-tune your treatment to optimize effectiveness while minimizing side effects.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl text-[var(--color-primary)]">3</div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As treatment progresses, we conduct comprehensive progress reviews using the same assessment tools from your initial evaluation to objectively measure improvements in pain intensity, mood symptoms, functional capacity, and quality of life. We discuss what's working well and what may need adjustment. Some patients experience significant improvement by this stage, while others require additional medication adjustments or incorporation of complementary therapeutic approaches. Setting realistic expectations is important—chronic pain with psychiatric comorbidity typically requires ongoing management rather than representing a condition with complete "cure," but meaningful improvement in symptoms and function is achievable for most patients.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl text-[var(--color-primary)]">4</div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl mb-2 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your symptoms stabilize and you've achieved meaningful functional improvement, we transition to maintenance care with less frequent appointments, typically every 1-3 months depending on your needs. Long-term management focuses on sustaining improvements, preventing relapse of pain flares or psychiatric symptoms, adjusting treatment during life transitions or stressors, and supporting your continued engagement in functional activities and self-management strategies. Many patients benefit from ongoing medication management combined with periodic therapeutic "tune-ups" to address emerging challenges. Our goal is to help you maintain the highest possible quality of life while living with a chronic condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Chronic Pain with Psychiatric Comorbidity
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does treatment for chronic pain with psychiatric comorbidity take?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Treatment duration varies significantly based on individual factors including the severity and duration of your pain condition, the type and severity of psychiatric comorbidity, previous treatment history, and your response to interventions. Most patients begin experiencing some improvement within 4-8 weeks of starting treatment, with more substantial benefits emerging over 3-6 months. However, chronic pain with psychiatric comorbidity typically requires ongoing management rather than time-limited treatment. Many patients continue with maintenance medication management and periodic therapeutic support long-term to sustain improvements and prevent relapse. The goal is not necessarily to eliminate all pain or psychiatric symptoms, but to achieve meaningful reduction in suffering, improved functional capacity, and enhanced quality of life that can be maintained over time.</p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Is medication always required for treating chronic pain with psychiatric comorbidity?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>While medication is not absolutely mandatory in all cases, research strongly supports pharmacological treatment for most patients with chronic pain and psychiatric comorbidity, particularly when depression or anxiety is moderate to severe. Medications like SNRIs (duloxetine, venlafaxine) address both pain modulation and mood regulation through shared neurobiological mechanisms, often providing benefits that are difficult to achieve through psychotherapy alone. However, medication is most effective when combined with therapeutic approaches like cognitive-behavioral therapy, pain education, and lifestyle modifications. Some patients with milder symptoms or specific preferences may achieve adequate improvement through psychotherapy, physical therapy, and self-management strategies without psychiatric medications, though this approach typically requires more intensive therapeutic engagement and may take longer to show benefits. We make medication decisions collaboratively based on your specific symptom profile, preferences, previous treatment experiences, and evidence-based guidelines.</p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover treatment for chronic pain with psychiatric comorbidity?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Most insurance plans, including Medicare and Medicaid, cover psychiatric evaluation and medication management services for conditions like depression, anxiety disorders, and other psychiatric diagnoses that commonly co-occur with chronic pain. Coverage specifics vary by plan, including copayments, deductibles, and whether prior authorization is required for certain medications. We recommend contacting your insurance provider before your first appointment to verify your behavioral health or psychiatric benefits, understand your financial responsibility, and confirm whether our practice is in-network with your plan. For patients without insurance coverage or those preferring not to use insurance, we offer self-pay options with transparent pricing. It's important to note that investing in integrated psychiatric treatment for pain-psychiatric comorbidity often reduces overall healthcare costs by decreasing emergency department visits, unnecessary testing, and ineffective treatments, while improving your ability to work and function.</p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What should I do if therapy or medication isn't working for my chronic pain and depression?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>If you're not experiencing adequate improvement with your current treatment, it's essential to communicate this with your provider rather than discontinuing treatment on your own. Inadequate response can occur for several reasons: insufficient treatment duration (medications often require 6-8 weeks at therapeutic doses to show full effects), incorrect diagnosis or missed comorbid conditions, suboptimal medication choice or dosage, non-adherence to treatment recommendations, or the need for additional interventions. We systematically evaluate treatment resistance by reviewing adherence patterns, assessing for side effects that may be limiting dosing, considering medication adjustments (increasing dose, switching medications, or adding complementary agents), incorporating or intensifying psychotherapeutic approaches, evaluating for substance use or other factors interfering with treatment, and consulting with pain specialists or other providers for multidisciplinary input. Treatment-resistant cases may benefit from more specialized interventions, and we work collaboratively with you to find the most effective combination of treatments for your unique situation.</p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can telehealth appointments be effective for treating chronic pain with psychiatric comorbidity?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Yes, research demonstrates that telehealth psychiatric care is highly effective for chronic pain with psychiatric comorbidity, with patient outcomes comparable to in-person treatment. Telepsychiatry offers particular advantages for patients with chronic pain, including eliminating the physical burden of traveling to appointments when you're experiencing pain flares, accessing specialized care that may not be available locally, maintaining treatment continuity during inclement weather or transportation challenges, and receiving care in a comfortable, familiar environment that may reduce anxiety. Video appointments allow for comprehensive psychiatric evaluation, medication management, and therapeutic interventions. We conduct thorough assessments, monitor your response to treatment, and provide the same level of care remotely as we would in person. The primary requirement is a private space with reliable internet connection and a device with camera and microphone capability. Some patients prefer an initial in-person visit before transitioning to telehealth, while others begin their entire treatment course remotely—both approaches are clinically appropriate and effective.</p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Will I need to stop pain medications I'm already taking when starting psychiatric treatment?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Not necessarily. We conduct a comprehensive review of all your current medications, including pain medications, during your initial evaluation. Our approach is to coordinate with your other healthcare providers to ensure safe, integrated medication management. In some cases, psychiatric medications we prescribe may reduce your pain medication needs over time by addressing both pain and mood symptoms—for example, SNRIs can provide pain relief while treating depression, potentially allowing for lower doses of other pain medications. If you're taking opioid medications, we carefully assess appropriateness, consider potential interactions with psychiatric medications, monitor for psychiatric side effects that opioids can cause, and work collaboratively with your pain management provider to optimize your overall medication regimen. We never abruptly discontinue medications you're already taking without careful planning, gradual tapering when appropriate, and alternative symptom management strategies. Our goal is to enhance your treatment by adding psychiatric expertise to your existing care team, not to disrupt treatments that are providing benefit.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/conditions/major-depressive-disorder" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-cormorant text-xl mb-2 text-[var(--color-primary)]">Major Depressive Disorder</h4>
              <p className="text-[var(--color-muted)]">Comprehensive treatment for persistent sadness, loss of interest, and other depressive symptoms that often co-occur with chronic pain conditions.</p>
            </a>
            <a href="/conditions/generalized-anxiety-disorder" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-cormorant text-xl mb-2 text-[var(--color-primary)]">Generalized Anxiety Disorder</h4>
              <p className="text-[var(--color-muted)]">Expert care for excessive worry, tension, and anxiety that frequently accompanies and exacerbates chronic pain experiences.</p>
            </a>
            <a href="/conditions/ptsd" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-cormorant text-xl mb-2 text-[var(--color-primary)]">Post-Traumatic Stress Disorder</h4>
              <p className="text-[var(--color-muted)]">Specialized treatment for trauma-related symptoms that can intensify pain perception and complicate chronic pain management.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Chronic Pain with Psychiatric Comorbidity Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face chronic pain with psychiatric comorbidity alone. Our team is ready to help you find relief and reclaim your quality of life through integrated, evidence-based treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors">
              Schedule a Consultation
            </a>
            <a href="/conditions" className="inline-block border-2 border-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors">
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}