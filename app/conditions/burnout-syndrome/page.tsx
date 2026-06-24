import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Burnout Syndrome Treatment in Holland | Arlene Holland',
  description: 'Expert Burnout Syndrome treatment in Holland. Board-certified care with personalized therapy, medication management, and telehealth options. Get help today.',
  keywords: 'burnout syndrome treatment Holland, burnout therapy, occupational burnout, chronic stress treatment, work burnout help Holland',
}

export default function BurnoutSyndromePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Burnout Syndrome</span>
          </nav>
          <h1 className="font-serif text-5xl font-light mb-6 leading-tight" style={{fontFamily: 'var(--font-cormorant)'}}>
            Burnout Syndrome Treatment in Holland
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Burnout syndrome is a serious state of physical, emotional, and mental exhaustion that affects every aspect of your life. At Arlene Holland, we provide compassionate, evidence-based treatment to help you recover your energy, restore balance, and rediscover meaning in your work and personal life.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            Understanding Burnout Syndrome
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--color-ink)] space-y-6">
            <p className="leading-relaxed">
              Burnout syndrome is a state of chronic workplace stress that has not been successfully managed, characterized by three key dimensions: overwhelming exhaustion, feelings of cynicism and detachment from work, and a sense of ineffectiveness and lack of accomplishment. First identified by psychologist Herbert Freudenberger in 1974, burnout has become increasingly recognized as a serious occupational phenomenon affecting millions of professionals across all industries. The World Health Organization officially recognized burnout as an occupational phenomenon in its International Classification of Diseases (ICD-11), acknowledging its significant impact on mental health and workplace productivity. Studies indicate that up to 77% of professionals have experienced burnout at their current job, with healthcare workers, educators, service industry professionals, and corporate executives among the most affected populations. The consequences extend far beyond work dissatisfaction—burnout significantly impacts physical health, relationships, overall quality of life, and can increase the risk of cardiovascular disease, Type 2 diabetes, insomnia, depression, and anxiety disorders.
            </p>
            <p className="leading-relaxed">
              The causes of burnout syndrome are multifaceted and typically involve a combination of workplace and individual factors. Primary workplace contributors include excessive workload and time pressure, lack of control over work conditions, insufficient rewards and recognition, absence of community or support at work, unfair treatment or workplace injustice, and values mismatch between individual and organizational priorities. Individual risk factors include perfectionist tendencies, high-achieving personality types, difficulty setting boundaries, lack of work-life balance, inadequate self-care practices, and pre-existing mental health conditions such as anxiety or depression. The COVID-19 pandemic dramatically increased burnout rates across professions, with remote work blurring boundaries between professional and personal life, social isolation reducing support networks, and increased caregiving responsibilities creating additional stress. Certain industries face higher burnout risk, including healthcare (with 63% of physicians reporting burnout symptoms), education, social services, law enforcement, and high-pressure corporate environments. Understanding these risk factors is essential for both prevention and effective treatment.
            </p>
            <p className="leading-relaxed">
              Professional treatment for burnout syndrome is essential because this condition rarely resolves on its own and can progressively worsen without intervention. Unlike temporary stress or fatigue that improves with rest, burnout represents a fundamental depletion of psychological and physical resources that requires structured therapeutic support to address. Without treatment, burnout can evolve into clinical depression, anxiety disorders, or other serious mental health conditions requiring more intensive intervention. Professional mental health care provides the framework for identifying the specific factors contributing to your burnout, developing practical strategies for managing workplace stressors, rebuilding emotional resilience, addressing any co-occurring mental health conditions, establishing sustainable work-life boundaries, and preventing relapse. Evidence-based treatments including cognitive-behavioral therapy (CBT), mindfulness-based stress reduction, and when appropriate, medication management have demonstrated significant effectiveness in treating burnout syndrome. Early intervention leads to better outcomes—addressing burnout in its early stages prevents progression to more severe conditions and allows for faster recovery and return to optimal functioning in both professional and personal life.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Signs & Symptoms of Burnout Syndrome
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Emotional & Cognitive Symptoms</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Emotional Exhaustion</strong>
                  <p className="text-[var(--color-muted)] mt-1">Feeling drained, depleted, and unable to recover energy even after rest or time off.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Cynicism and Detachment</strong>
                  <p className="text-[var(--color-muted)] mt-1">Developing negative, callous attitudes toward work, colleagues, or clients you previously cared about.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Sense of Ineffectiveness</strong>
                  <p className="text-[var(--color-muted)] mt-1">Feeling that nothing you do matters or makes a difference, even when objectively successful.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Loss of Motivation</strong>
                  <p className="text-[var(--color-muted)] mt-1">Struggling to find purpose or meaning in work that once felt fulfilling and important.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Difficulty Concentrating</strong>
                  <p className="text-[var(--color-muted)] mt-1">Experiencing brain fog, memory problems, and inability to focus on tasks that previously came easily.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Increased Irritability</strong>
                  <p className="text-[var(--color-muted)] mt-1">Finding yourself short-tempered, impatient, or emotionally reactive in situations that wouldn't normally bother you.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Feelings of Helplessness</strong>
                  <p className="text-[var(--color-muted)] mt-1">Experiencing a sense of being trapped or powerless to change your circumstances.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Physical & Behavioral Symptoms</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Chronic Fatigue</strong>
                  <p className="text-[var(--color-muted)] mt-1">Persistent physical exhaustion that doesn't improve with sleep or rest periods.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Insomnia or Sleep Disturbances</strong>
                  <p className="text-[var(--color-muted)] mt-1">Difficulty falling asleep, staying asleep, or experiencing restful sleep despite being exhausted.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Frequent Illness</strong>
                  <p className="text-[var(--color-muted)] mt-1">Experiencing more colds, infections, or illness due to weakened immune system from chronic stress.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Physical Complaints</strong>
                  <p className="text-[var(--color-muted)] mt-1">Developing headaches, muscle tension, gastrointestinal problems, or other stress-related physical symptoms.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Procrastination and Avoidance</strong>
                  <p className="text-[var(--color-muted)] mt-1">Putting off tasks, avoiding work-related activities, or taking longer to complete assignments.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Social Withdrawal</strong>
                  <p className="text-[var(--color-muted)] mt-1">Isolating from colleagues, friends, or family and declining social invitations you would normally enjoy.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Changes in Appetite</strong>
                  <p className="text-[var(--color-muted)] mt-1">Significant changes in eating patterns—either loss of appetite or stress eating.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Increased Substance Use</strong>
                  <p className="text-[var(--color-muted)] mt-1">Relying more on alcohol, caffeine, or other substances to cope with stress or maintain functioning.</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Professional intervention can help you recover your energy, restore work-life balance, and prevent progression to more serious mental health conditions.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-16 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            How We Treat Burnout Syndrome
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough evaluation to understand your specific burnout symptoms, workplace stressors, personal circumstances, and any co-occurring mental health conditions. This includes validated burnout assessment tools, exploration of your work environment and demands, evaluation of current coping strategies, and identification of contributing factors both at work and in your personal life. This comprehensive understanding allows us to develop a targeted treatment plan addressing your unique situation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow" style={{animationDelay: '0.1s'}}>
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we develop an individualized treatment approach that may include evidence-based psychotherapy, stress management techniques, work-life balance strategies, and when appropriate, medication to address symptoms like depression, anxiety, or insomnia. Your treatment plan is collaborative and flexible, adjusting as you progress. We focus on both immediate symptom relief and long-term prevention strategies to help you build sustainable resilience and prevent future burnout.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow" style={{animationDelay: '0.2s'}}>
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Ongoing Support & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Recovery from burnout is a process that requires consistent support and monitoring. We provide regular check-ins to track your progress, adjust treatment strategies as needed, and address new challenges as they arise. We help you implement practical changes in your work and personal life, develop sustainable self-care routines, and build skills for recognizing early warning signs. Our goal is not just immediate recovery but long-term resilience and prevention of future burnout episodes.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Evidence-Based Treatment Modalities</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Our treatment for burnout syndrome incorporates several evidence-based therapeutic approaches proven effective for this condition. <strong>Cognitive-Behavioral Therapy (CBT)</strong> helps identify and modify thought patterns that contribute to burnout, develop effective coping strategies, and address perfectionism or unhelpful beliefs about work. <strong>Mindfulness-Based Stress Reduction (MBSR)</strong> teaches techniques for managing stress, improving emotional regulation, and cultivating present-moment awareness that can reduce emotional exhaustion.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              <strong>Acceptance and Commitment Therapy (ACT)</strong> helps clarify personal values, develop psychological flexibility, and take committed action aligned with what matters most to you beyond workplace demands. We also incorporate <strong>stress management and relaxation techniques</strong> including progressive muscle relaxation, breathing exercises, and strategies for improving sleep quality and physical self-care.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              When burnout has progressed to include significant symptoms of depression, anxiety, or insomnia, <strong>medication management</strong> may be recommended as part of a comprehensive treatment approach. Antidepressants such as SSRIs or SNRIs can help address underlying depressive symptoms, while short-term medication for anxiety or sleep disturbances may provide relief while other interventions take effect. All medication decisions are made collaboratively based on your specific symptoms, preferences, and medical history.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Why Choose Arlene Holland for Burnout Syndrome Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Arlene Holland is a board-certified psychiatric mental health nurse practitioner with specialized training and extensive experience in treating burnout syndrome and related occupational stress disorders.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up" style={{animationDelay: '0.1s'}}>
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that burnout manifests differently for each individual. Your treatment plan is tailored to your specific symptoms, workplace circumstances, personal values, and recovery goals.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up" style={{animationDelay: '0.2s'}}>
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Convenient Telehealth Access</h3>
              <p className="text-[var(--color-muted)]">
                Flexible telehealth appointments make it easier to access care even when you're experiencing burnout fatigue. Receive professional treatment from the comfort of your home or office without additional commute stress.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up" style={{animationDelay: '0.3s'}}>
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Specialized Burnout Experience</h3>
              <p className="text-[var(--color-muted)]">
                We have extensive experience working with professionals across diverse industries—healthcare, education, corporate, service sectors—who are experiencing occupational burnout and chronic workplace stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Your Treatment Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-serif text-2xl" style={{fontFamily: 'var(--font-cormorant)'}}>
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive assessment typically lasts 60-90 minutes. We'll explore your burnout symptoms in detail, discuss your work environment and stressors, review your personal and medical history, and identify any co-occurring conditions like depression or anxiety. You'll receive validated burnout assessment results and we'll collaboratively develop initial treatment goals. Many patients report feeling relief simply from being heard and understood. You'll leave with initial coping strategies and a clear treatment plan moving forward.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-serif text-2xl" style={{fontFamily: 'var(--font-cormorant)'}}>
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Treatment Begins (Weeks 2-8)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During the initial treatment phase, we typically meet every 1-2 weeks to implement your personalized treatment plan. This phase focuses on stabilizing symptoms, developing practical coping strategies, and addressing immediate stressors. You'll learn evidence-based techniques for managing exhaustion, setting boundaries, and reducing workplace stress. If medication is part of your treatment, we'll start at appropriate doses and monitor effectiveness and side effects closely. Many patients begin noticing improvement in energy levels and emotional regulation within 4-6 weeks, though full recovery takes longer.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-serif text-2xl" style={{fontFamily: 'var(--font-cormorant)'}}>
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As you progress through treatment, we'll formally review your symptom improvement, treatment effectiveness, and goal achievement. This is when we typically see significant reduction in emotional exhaustion, improved work-life balance, better sleep quality, and renewed sense of purpose. We'll refine your treatment plan based on what's working best for you, address any remaining challenges, and begin focusing more on long-term prevention strategies. Appointments may reduce to every 2-3 weeks as you gain confidence and skills.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-serif text-2xl" style={{fontFamily: 'var(--font-cormorant)'}}>
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Long-Term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Full recovery from burnout typically takes 3-6 months of consistent treatment, though this varies by individual circumstances. As you stabilize, we transition to maintenance care with less frequent appointments—monthly or as-needed check-ins to monitor ongoing wellbeing, reinforce healthy boundaries and self-care practices, and provide support during high-stress periods. Many patients continue periodic sessions to maintain progress and prevent relapse, especially during major workplace changes or increased demands. Our goal is to equip you with skills and awareness to recognize early warning signs and take proactive action to maintain your mental health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Frequently Asked Questions About Burnout Syndrome
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                <span>How long does treatment for burnout syndrome take?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                <p>Treatment duration varies based on burnout severity, contributing factors, and individual circumstances. Most patients experience significant symptom improvement within 2-3 months of consistent treatment, but full recovery typically takes 3-6 months. Some individuals may benefit from longer-term support, especially if burnout has progressed to clinical depression or if workplace stressors remain challenging. Unlike acute conditions, burnout recovery is gradual—energy returns slowly, perspective shifts over time, and building sustainable resilience takes practice. We work at your pace and adjust treatment length based on your progress and needs.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                <span>Is medication necessary for treating burnout syndrome?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                <p>Medication is not always necessary for burnout treatment, but it can be very helpful in certain situations. Many people recover from burnout through psychotherapy, stress management, lifestyle changes, and workplace modifications alone. However, if burnout has progressed to include significant depression, anxiety, or severe insomnia that interferes with daily functioning, medication may provide important symptom relief while other interventions take effect. Antidepressants can help restore energy and emotional regulation, while short-term sleep medication may help reset disrupted sleep patterns. We make medication decisions collaboratively based on your specific symptoms, severity, preferences, and response to other treatments. The goal is always to use the most effective combination of treatments for your individual situation.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                <span>Does insurance cover burnout syndrome treatment?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                <p>Most insurance plans cover treatment for burnout syndrome when it presents with diagnosable mental health conditions such as adjustment disorder, depression, anxiety, or other stress-related disorders. While "burnout" itself is not a formal psychiatric diagnosis in the DSM-5, the symptoms are typically coded under recognized diagnostic categories that insurance accepts. We accept most major insurance plans and will verify your coverage and benefits during the intake process. If you have questions about your specific coverage, our office can help clarify what services are covered, your copay or coinsurance responsibilities, and whether prior authorization is needed. We also offer self-pay options for those who prefer not to use insurance.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                <span>What if I can't take time off work for treatment?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                <p>We understand that taking extended time off work is not feasible for most people experiencing burnout, which is why we offer flexible telehealth appointments that minimize disruption to your work schedule. Many patients schedule appointments during lunch breaks, early mornings, or evenings. Telehealth eliminates commute time and allows you to attend sessions from a private location of your choice. While some severe cases of burnout may benefit from a brief medical leave to stabilize symptoms, most people recover while continuing to work, making gradual adjustments to workload, boundaries, and stress management. We help you implement practical changes within your current work situation and provide documentation for workplace accommodations if appropriate under the Americans with Disabilities Act (ADA).</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                <span>Can telehealth treatment be effective for burnout syndrome?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                <p>Yes, telehealth is highly effective for burnout treatment and offers several advantages that particularly benefit people experiencing this condition. Research shows that telepsychiatry and teletherapy produce outcomes equivalent to in-person care for depression, anxiety, and stress-related conditions. For burnout specifically, telehealth reduces additional stress by eliminating travel time and logistical barriers, allows for treatment in a comfortable, private environment, provides greater scheduling flexibility to accommodate demanding work schedules, and reduces the energy expenditure required when you're already exhausted. Many patients find that the convenience of telehealth actually improves treatment adherence and outcomes. We use secure, HIPAA-compliant video platforms to ensure your privacy and provide the same quality care you would receive in person.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                <span>Should I change jobs or career if I'm experiencing burnout?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                <p>This is a complex question that we explore carefully in treatment. While changing jobs or careers may ultimately be the right decision for some people, it's important not to make major life decisions while in the acute phase of burnout when your judgment may be impaired by exhaustion and depression. First, we work on stabilizing your symptoms, developing better coping strategies, and making modifications to your current work situation when possible. Sometimes burnout can be addressed through boundary-setting, workload adjustments, role changes within your organization, or addressing personal factors like perfectionism without leaving your job. However, if your workplace is fundamentally toxic, your values are profoundly misaligned with organizational culture, or the demands are inherently unsustainable, career change may be necessary for long-term wellbeing. We help you gain the clarity and stability needed to make this decision wisely and support you through the transition process if you decide a change is appropriate.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/depression" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Depression</h4>
              <p className="text-[var(--color-muted)] mb-3">
                Burnout frequently progresses to clinical depression when left untreated. Learn about comprehensive treatment options for depressive disorders.
              </p>
              <span className="text-[var(--color-primary)] font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a href="/conditions/anxiety" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Anxiety Disorders</h4>
              <p className="text-[var(--color-muted)] mb-3">
                Chronic workplace stress and burnout often co-occur with anxiety disorders. Discover effective treatment approaches for anxiety.
              </p>
              <span className="text-[var(--color-primary)] font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a href="/conditions/insomnia" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Insomnia & Sleep Disorders</h4>
              <p className="text-[var(--color-muted)] mb-3">
                Sleep disturbances are a core symptom of burnout syndrome. Explore specialized treatment for insomnia and sleep problems.
              </p>
              <span className="text-[var(--color-primary)] font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Get Help for Burnout Syndrome Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face Burnout Syndrome alone. Our team is ready to help you recover your energy, restore balance, and rediscover purpose in your life and work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="/conditions"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </a>
          </div>
          <p className="mt-8 text-sm opacity-90">
            Serving Holland and surrounding communities through secure telehealth
          </p>
        </div>
      </section>
    </main>
  )
}