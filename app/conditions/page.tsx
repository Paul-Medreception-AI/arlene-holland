import Link from 'next/link'

export default function ConditionsPage() {
  const conditions = [
    {
      name: "Depression",
      slug: "depression",
      description: "Persistent sadness, loss of interest, and low energy that interferes with daily life. We provide comprehensive treatment combining medication management and evidence-based therapy to address both biological and psychological factors.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
    },
    {
      name: "Anxiety Disorders",
      slug: "anxiety-disorders",
      description: "Excessive worry, panic attacks, and physical symptoms that disrupt your peace of mind. Our treatment approach includes cognitive-behavioral strategies, medication when appropriate, and skills to manage anxiety in real-world situations.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
    },
    {
      name: "ADHD",
      slug: "adhd",
      description: "Difficulty focusing, impulsivity, and restlessness affecting work, relationships, or school performance. We offer thorough diagnostic assessments and personalized treatment plans that help you develop systems that work with your brain.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
    },
    {
      name: "Bipolar Disorder",
      slug: "bipolar-disorder",
      description: "Alternating periods of elevated mood and depression that impact stability and relationships. Our comprehensive approach includes mood-stabilizing medications, psychotherapy, and lifestyle strategies to help you achieve sustained balance.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
    },
    {
      name: "PTSD & Trauma",
      slug: "ptsd-trauma",
      description: "Intrusive memories, nightmares, and heightened anxiety following traumatic experiences. We provide trauma-informed care using evidence-based therapies to help you process difficult experiences and reclaim your sense of safety.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" /></svg>
    },
    {
      name: "OCD",
      slug: "ocd",
      description: "Intrusive thoughts and repetitive behaviors that consume time and cause distress. Our treatment combines specialized therapy techniques like exposure and response prevention with medication management for comprehensive symptom relief.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
    },
    {
      name: "Addiction & Substance Use",
      slug: "addiction-substance-use",
      description: "Compulsive substance use despite negative consequences affecting health and relationships. We offer compassionate, non-judgmental treatment including medication-assisted treatment, counseling, and support for sustainable recovery.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
    },
    {
      name: "Schizophrenia & Psychosis",
      slug: "schizophrenia-psychosis",
      description: "Disruptions in thinking, perception, and connection to reality including hallucinations or delusions. We provide comprehensive psychiatric care with antipsychotic medications, supportive therapy, and coordination with your broader care team.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      name: "Eating Disorders",
      slug: "eating-disorders",
      description: "Unhealthy relationships with food, body image, and weight including anorexia, bulimia, and binge eating. Our treatment addresses both the physical and psychological aspects through medical monitoring, therapy, and nutritional counseling coordination.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>
    },
    {
      name: "Insomnia & Sleep Disorders",
      slug: "insomnia-sleep-disorders",
      description: "Chronic difficulty falling asleep, staying asleep, or achieving restorative rest affecting daily functioning. We identify underlying causes and provide treatment through sleep hygiene education, behavioral techniques, and appropriate medication when needed.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
    },
    {
      name: "Personality Disorders",
      slug: "personality-disorders",
      description: "Long-standing patterns of thinking and behavior that cause distress in relationships and daily life. We offer specialized therapy approaches including dialectical behavior therapy and schema therapy combined with supportive medication management.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
    },
    {
      name: "Grief & Loss",
      slug: "grief-loss",
      description: "Overwhelming emotional pain following the death of a loved one or significant life loss. We provide compassionate support to help you process grief, develop coping strategies, and find meaning while honoring your unique healing journey.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>
    }
  ]

  const warningSigns = [
    {
      title: "Persistent Symptoms",
      description: "Symptoms lasting more than two weeks that interfere with work, relationships, or daily activities",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: "Significant Life Changes",
      description: "Major shifts in mood, behavior, or functioning noticed by you or loved ones",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
    },
    {
      title: "Difficulty Coping",
      description: "Struggling to manage stress, emotions, or thoughts despite trying self-help strategies",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
    }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light mb-6">
            Conditions We Treat
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Evidence-based care for a full range of mental health and behavioral health conditions
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-ink)] text-center mb-4">
            Comprehensive Mental Health Care
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-3xl mx-auto text-lg">
            Dr. Holland specializes in treating a wide range of mental health conditions with personalized, evidence-based approaches that address your unique needs and circumstances.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              >
                <div className="stroke-[var(--color-primary)]">
                  {condition.icon}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[var(--color-ink)] mt-4">
                  {condition.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm mt-3 leading-relaxed">
                  {condition.description}
                </p>
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-4 hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-ink)] text-center mb-16">
            When to Seek Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {warningSigns.map((sign, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-light)] stroke-[var(--color-primary)] mb-6">
                  {sign.icon}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[var(--color-ink)] mb-3">
                  {sign.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {sign.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-cream)] rounded-2xl p-8 border-l-4 border-[var(--color-primary)] max-w-4xl mx-auto animate-fade-up">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[var(--color-ink)] mb-4">
              Crisis Resources
            </h3>
            <p className="text-[var(--color-muted)] mb-6">
              If you or someone you know is experiencing a mental health crisis or having thoughts of suicide, please reach out for immediate support:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--color-primary)] flex-shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">988 Suicide & Crisis Lifeline</div>
                  <div className="text-[var(--color-muted)] text-sm">Call or text 988 for 24/7 confidential support</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--color-primary)] flex-shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Crisis Text Line</div>
                  <div className="text-[var(--color-muted)] text-sm">Text HOME to 741741 to connect with a crisis counselor</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--color-primary)] flex-shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Emergency Services</div>
                  <div className="text-[var(--color-muted)] text-sm">Call 911 or go to your nearest emergency room for immediate danger</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white font-light mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Dr. Holland provides compassionate, evidence-based treatment tailored to your unique needs. Schedule your consultation today to start feeling better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
            >
              Schedule Your Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}