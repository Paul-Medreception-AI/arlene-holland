import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insomnia and Sleep Disorders Treatment in Holland | Arlene Holland',
  description: 'Expert treatment for insomnia and sleep disorders in Holland. Board-certified psychiatric care with personalized treatment plans. Telehealth available. Start sleeping better tonight.',
  keywords: 'insomnia treatment Holland, sleep disorders Holland, sleep therapy, insomnia doctor Holland, sleep medicine Holland, CBT-I Holland',
}

export default function InsomniaAndSleepDisordersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Insomnia and Sleep Disorders</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Insomnia and Sleep Disorders Treatment in Holland
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Sleep is essential to your physical and mental health, yet millions struggle with chronic insomnia and sleep disorders that disrupt daily life. Our compassionate, evidence-based approach helps you reclaim restorative sleep and improve your overall well-being through personalized treatment plans that address the root causes of your sleep difficulties.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-8 text-[var(--color-ink)]">
            Understanding Insomnia and Sleep Disorders
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Insomnia and sleep disorders encompass a wide range of conditions that interfere with the quality, timing, and duration of sleep. Insomnia, the most common sleep disorder, affects approximately 30% of adults and is characterized by difficulty falling asleep, staying asleep, or waking too early despite adequate opportunity for rest. Other sleep disorders include sleep apnea, restless leg syndrome, circadian rhythm disorders, narcolepsy, and parasomnias. These conditions don't just leave you feeling tired—they significantly impact cognitive function, emotional regulation, physical health, relationships, and work performance. Chronic sleep deprivation is associated with increased risk of depression, anxiety, cardiovascular disease, diabetes, obesity, and weakened immune function. The consequences extend beyond the individual, affecting family dynamics, workplace productivity, and overall quality of life.
            </p>
            <p>
              The causes of insomnia and sleep disorders are multifaceted and often interconnected. Primary insomnia may develop from poor sleep habits, stress, or environmental factors, while secondary insomnia occurs alongside other medical or psychiatric conditions. Common contributing factors include anxiety and depression, chronic pain, medications, substance use, hormonal changes (particularly during menopause), shift work, excessive screen time before bed, and underlying medical conditions such as thyroid disorders or gastroesophageal reflux. Psychological factors play a significant role—racing thoughts, worry about sleep itself, and conditioned arousal responses can perpetuate insomnia even after the original trigger has resolved. Sleep apnea, affecting millions of Americans, involves repeated breathing interruptions during sleep and requires specific diagnostic evaluation. Risk factors include advancing age, female gender (particularly after menopause), family history, high levels of stress, irregular schedules, and certain psychiatric or medical conditions.
            </p>
            <p>
              Professional treatment for insomnia and sleep disorders is essential because these conditions rarely resolve on their own and tend to worsen over time without intervention. While over-the-counter sleep aids may provide temporary relief, they don't address underlying causes and can lead to dependency or rebound insomnia. Comprehensive psychiatric evaluation can identify contributing mental health conditions, medication interactions, and behavioral patterns that perpetuate poor sleep. Evidence-based treatments such as Cognitive Behavioral Therapy for Insomnia (CBT-I)—considered the gold standard first-line treatment—address the thoughts, behaviors, and physiological arousal that maintain sleep difficulties. When appropriate, prescription medications can be used strategically as part of a comprehensive treatment plan. Early intervention prevents the development of chronic insomnia, reduces associated health risks, and dramatically improves quality of life. With proper diagnosis and treatment, most people with insomnia and sleep disorders can achieve significant, lasting improvement in their sleep quality and daytime functioning.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Insomnia and Sleep Disorders
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Emotional & Cognitive Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Concentrating</p>
                    <p className="text-[var(--color-muted)]">Impaired focus, memory problems, and reduced ability to complete tasks or make decisions during the day.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Irritability and Mood Changes</p>
                    <p className="text-[var(--color-muted)]">Increased frustration, anxiety, depression, or emotional reactivity related to chronic sleep deprivation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Racing Thoughts at Bedtime</p>
                    <p className="text-[var(--color-muted)]">Mind becomes active when trying to sleep, with worry, rumination, or inability to quiet mental activity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Anxiety About Sleep</p>
                    <p className="text-[var(--color-muted)]">Worry or dread about bedtime, with anticipatory anxiety about inability to fall or stay asleep.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Reduced Motivation</p>
                    <p className="text-[var(--color-muted)]">Loss of interest in activities, decreased productivity, and difficulty engaging in work or social situations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Impaired Judgment</p>
                    <p className="text-[var(--color-muted)]">Difficulty with problem-solving, increased errors, and poor decision-making due to cognitive fatigue.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Physical & Behavioral Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Falling Asleep</p>
                    <p className="text-[var(--color-muted)]">Taking 30 minutes or longer to fall asleep despite feeling tired, often accompanied by physical tension.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Frequent Nighttime Awakenings</p>
                    <p className="text-[var(--color-muted)]">Waking multiple times during the night with difficulty returning to sleep, resulting in fragmented rest.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Early Morning Awakening</p>
                    <p className="text-[var(--color-muted)]">Waking significantly earlier than desired with inability to fall back asleep, common in depression-related insomnia.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Daytime Fatigue and Sleepiness</p>
                    <p className="text-[var(--color-muted)]">Persistent tiredness, low energy, or overwhelming urge to nap despite spending adequate time in bed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Physical Tension</p>
                    <p className="text-[var(--color-muted)]">Muscle tension, headaches, gastrointestinal issues, or other physical symptoms related to poor sleep and stress.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Dependence on Sleep Aids</p>
                    <p className="text-[var(--color-muted)]">Reliance on alcohol, over-the-counter medications, or other substances to initiate or maintain sleep.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Snoring or Breathing Interruptions</p>
                    <p className="text-[var(--color-muted)]">Loud snoring, gasping, or observed pauses in breathing during sleep that may indicate sleep apnea.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes, preventing chronic insomnia and reducing associated health risks. Our comprehensive evaluation identifies the specific factors contributing to your sleep difficulties and develops a personalized treatment plan to restore healthy, restorative sleep.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-16 text-[var(--color-ink)] text-center">
            How We Treat Insomnia and Sleep Disorders
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your treatment begins with a thorough evaluation of your sleep patterns, medical history, medications, mental health, and lifestyle factors. We may utilize sleep diaries, questionnaires, and when appropriate, coordinate with sleep specialists for diagnostic testing. This detailed assessment identifies the specific type and causes of your sleep disorder, allowing us to create a targeted treatment plan that addresses your unique situation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold mb-4 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we develop an individualized treatment plan that may include Cognitive Behavioral Therapy for Insomnia (CBT-I), medication management, or a combination approach. We address contributing factors such as anxiety, depression, or pain, while implementing evidence-based strategies for improving sleep quality. Your plan is tailored to your specific diagnosis, preferences, lifestyle, and treatment goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Care and Adjustment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Sleep improvement requires consistent monitoring and adjustment. We schedule regular follow-up appointments to track your progress, assess treatment effectiveness, and make necessary modifications. As your sleep improves, we work collaboratively to maintain gains, address any setbacks, and develop long-term strategies for sustaining healthy sleep patterns. Our goal is lasting improvement in both sleep quality and overall well-being.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Our treatment approach integrates evidence-based interventions proven effective for insomnia and sleep disorders. <strong>Cognitive Behavioral Therapy for Insomnia (CBT-I)</strong> is considered the gold standard first-line treatment, addressing the thoughts, behaviors, and conditioned responses that perpetuate sleep difficulties through techniques including sleep restriction, stimulus control, cognitive restructuring, and relaxation training. When appropriate, we may incorporate <strong>medication management</strong> using FDA-approved sleep medications, sedating antidepressants, or other pharmacological approaches as part of a comprehensive plan. We also address <strong>co-occurring conditions</strong> such as anxiety, depression, chronic pain, or hormones that impact sleep. Treatment may include <strong>sleep hygiene education</strong>, circadian rhythm optimization, stress management techniques, and coordination with other specialists when conditions like sleep apnea require additional evaluation. Our integrated approach addresses both the symptoms and underlying causes of your sleep disorder for lasting improvement.
          </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Why Choose Arlene Holland for Insomnia and Sleep Disorders Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="font-cormorant text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Specialized psychiatric training in sleep disorders and evidence-based treatments including CBT-I and medication management.
              </p>
            </div>
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="font-cormorant text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Care</h3>
              <p className="text-[var(--color-muted)]">
                Individualized treatment plans tailored to your specific sleep disorder, lifestyle, co-occurring conditions, and personal goals.
              </p>
            </div>
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-cormorant text-xl font-semibold mb-3 text-[var(--color-ink)]">Convenient Telehealth</h3>
              <p className="text-[var(--color-muted)]">
                Secure virtual appointments available, allowing you to receive expert sleep treatment from the comfort of your home.
              </p>
            </div>
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-cormorant text-xl font-semibold mb-3 text-[var(--color-ink)]">Proven Results</h3>
              <p className="text-[var(--color-muted)]">
                Extensive experience treating insomnia and sleep disorders with evidence-based approaches that deliver measurable improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">1</span>
                </div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial appointment includes a comprehensive assessment of your sleep patterns, medical history, psychiatric symptoms, medications, and lifestyle factors. We may ask you to complete sleep questionnaires and begin a sleep diary to track patterns. This thorough evaluation allows us to identify the type and causes of your sleep disorder and develop a targeted treatment plan. You'll leave with initial recommendations and a clear understanding of your diagnosis and treatment approach.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">2</span>
                </div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Treatment implementation begins with education about sleep physiology and your specific disorder. If pursuing CBT-I, we'll introduce behavioral strategies such as sleep restriction, stimulus control, and relaxation techniques. If medication is appropriate, we'll start at the lowest effective dose and monitor response. You'll continue tracking your sleep patterns and implementing recommended changes. This phase requires active participation and may feel challenging initially as your sleep patterns begin to shift, but improvement typically starts within the first few weeks.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">3</span>
                </div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Regular follow-up appointments allow us to assess your progress, adjust strategies, and address any challenges. Most patients notice significant improvement in sleep quality, reduced time to fall asleep, fewer nighttime awakenings, and improved daytime functioning by this stage. We'll refine your treatment plan based on what's working, gradually liberalize sleep restriction if appropriate, and address any remaining symptoms. For medication users, we may adjust dosages or begin discussing long-term plans.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">4</span>
                </div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once sleep patterns stabilize, we focus on maintaining improvements and developing strategies for managing future sleep challenges. This includes relapse prevention techniques, stress management skills, and knowing when to implement sleep restriction or other strategies if difficulties reemerge. Follow-up appointments may become less frequent as you maintain gains. Some patients continue periodic check-ins for ongoing support, while others transition to as-needed consultations. Our goal is equipping you with the knowledge and tools to maintain healthy sleep long-term.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 p-6 bg-white rounded-lg border-l-4 border-[var(--color-primary)]">
            <p className="text-[var(--color-ink)] leading-relaxed">
              <strong>Realistic expectations:</strong> While some patients experience rapid improvement, most see gradual progress over 6-8 weeks. CBT-I typically requires 4-8 sessions for full benefit. Medication effects may be noticed sooner but work best as part of comprehensive treatment. Occasional difficult nights are normal even with treatment—the goal is overall improved sleep quality and reduced distress about sleep. With commitment to treatment, most people achieve significant, lasting improvement in their sleep and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Insomnia and Sleep Disorders
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does treatment for insomnia typically take?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Treatment duration varies based on the type and severity of your sleep disorder and the approach used. Cognitive Behavioral Therapy for Insomnia (CBT-I) typically involves 4-8 sessions over 6-10 weeks and has lasting effects. Medication management may show quicker initial results but often works best combined with behavioral approaches. Most patients notice improvement within 3-4 weeks, with continued progress over 2-3 months. Some people achieve full resolution of symptoms, while others learn to manage chronic sleep issues effectively. Long-term maintenance strategies help sustain improvements.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Is medication required to treat insomnia and sleep disorders?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Medication is not always required. Cognitive Behavioral Therapy for Insomnia (CBT-I) is considered the first-line treatment and is often effective without medication. However, medication can be helpful in certain situations: severe insomnia causing significant distress, co-occurring anxiety or depression, when behavioral approaches alone are insufficient, or for short-term use during high-stress periods. When prescribed, sleep medications are used strategically as part of a comprehensive plan, typically at the lowest effective dose for the shortest duration needed. Some patients benefit from a combination of CBT-I and medication initially, then taper medication as behavioral strategies take effect.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover treatment for insomnia and sleep disorders?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most insurance plans, including Medicare, cover psychiatric evaluation and treatment for insomnia and sleep disorders when provided by a board-certified physician. Coverage typically includes diagnostic assessment, medication management, and psychotherapy including CBT-I. The extent of coverage depends on your specific plan, including deductibles, copays, and whether your provider is in-network or out-of-network. We recommend contacting your insurance company to verify mental health benefits and coverage for sleep disorder treatment. Our office can provide documentation of medical necessity and work with you to maximize your insurance benefits. For those without insurance or with high out-of-pocket costs, we can discuss payment options.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can telehealth appointments be effective for treating sleep disorders?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, telehealth is highly effective for insomnia and most sleep disorder treatment. Research shows that CBT-I delivered via telehealth produces outcomes equivalent to in-person treatment. Virtual appointments allow for comprehensive assessment, medication management, behavioral strategy instruction, and progress monitoring. The convenience of telehealth can actually improve adherence to treatment, as you avoid travel time and can schedule appointments more flexibly. Sleep diaries and questionnaires can be shared electronically. However, if there's concern about sleep apnea or other medical sleep disorders requiring physical examination or testing, we may coordinate with sleep specialists or recommend in-person evaluation.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What if I've tried treatment before and it didn't work?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Previous treatment failures don't mean you can't improve—they often provide valuable information about what to try differently. We'll review what approaches you've tried, how they were implemented, and potential reasons they weren't successful. Common issues include incomplete implementation of behavioral strategies, inadequate treatment duration, unaddressed contributing factors (like untreated anxiety or pain), medication side effects, or mismatch between treatment type and your specific sleep disorder. A fresh, comprehensive evaluation may identify factors that were missed previously. We can try different medications, implement CBT-I more systematically, address co-occurring conditions, or combine approaches in new ways. Many patients who struggled with previous treatments achieve significant improvement with a personalized, comprehensive approach.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How do I know if my sleep problems require professional treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Consider seeking professional help if you experience difficulty falling or staying asleep at least three nights per week for three months or longer (chronic insomnia), if sleep problems significantly impact your daytime functioning, mood, relationships, or work performance, if you've tried improving sleep hygiene without success, if you're using alcohol or over-the-counter sleep aids regularly, if you have loud snoring or breathing pauses during sleep, or if sleep difficulties are affecting your mental health. Even if your insomnia is shorter-term but causing significant distress, early intervention can prevent chronic patterns from developing. Professional evaluation can distinguish between different types of sleep disorders and identify underlying causes that self-help strategies can't address. Don't wait until sleep problems become severe—early treatment is more effective and prevents long-term health consequences.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl font-light mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/anxiety-disorders" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="font-cormorant text-2xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Anxiety Disorders
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Anxiety commonly disrupts sleep and can both cause and result from insomnia, creating a cycle that requires integrated treatment.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </a>
            <a href="/conditions/depression" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="font-cormorant text-2xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Depression
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Sleep disturbances are a hallmark symptom of depression, and improving sleep often contributes to overall mood improvement.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </a>
            <a href="/conditions/stress-management" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="font-cormorant text-2xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Stress Management
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Chronic stress is a primary contributor to insomnia, and effective stress management techniques improve sleep quality.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Insomnia and Sleep Disorders Today
          </h2>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-95">
            You don't have to face insomnia and sleep disorders alone. Our team is ready to help you achieve restorative sleep and improved well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/conditions" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors text-lg"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}