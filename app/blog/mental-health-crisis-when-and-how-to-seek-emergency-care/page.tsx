import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mental Health Crisis: When and How to Seek Emergency Care | Arlene Holland',
  description: 'Learn to recognize mental health emergencies, understand when to seek immediate care, and discover resources for crisis support. Expert guidance from mental health professionals.',
  keywords: 'mental health crisis, emergency mental health care, suicide prevention, crisis intervention, when to seek help, mental health emergency',
  openGraph: {
    title: 'Mental Health Crisis: When and How to Seek Emergency Care',
    description: 'Learn to recognize mental health emergencies and when to seek immediate care.',
    url: 'https://arleneholland.net/blog/mental-health-crisis-when-and-how-to-seek-emergency-care',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00.000Z',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 font-semibold">Mental Health Emergency</div>
          
          <h1 className="text-5xl font-light leading-tight mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Mental Health Crisis: When and How to Seek Emergency Care
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Arlene Holland Team</span>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
              In the midst of overwhelming emotional pain, knowing when and how to seek emergency mental health care can be the difference between life and death. Yet many people struggle to recognize the warning signs or feel uncertain about when their situation truly constitutes an emergency. Understanding mental health crises and the resources available is essential knowledge that everyone should have.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              What Constitutes a Mental Health Emergency?
            </h2>
            
            <p className="mb-6">
              A mental health crisis occurs when an individual experiences severe distress that impairs their ability to function safely or threatens their wellbeing or the safety of others. Unlike everyday stress or sadness, a mental health emergency requires immediate professional intervention.
            </p>

            <p className="mb-6">
              These situations are characterized by acute symptoms that represent a significant change from baseline functioning. The intensity and suddenness of symptoms distinguish emergencies from ongoing mental health conditions that, while serious, can be managed through scheduled appointments and established treatment plans.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Warning Signs That Require Immediate Attention
            </h2>

            <p className="mb-6">
              Recognizing the signs of a mental health emergency is crucial for timely intervention. Certain behaviors and symptoms should never be ignored:
            </p>

            <div className="my-8 space-y-4">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Suicidal thoughts or behaviors:</strong> Any expression of wanting to die, having a plan for suicide, or engaging in self-harm requires immediate intervention.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Threats of violence:</strong> Statements or behaviors indicating intent to harm others, including specific threats or aggressive actions.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Psychotic symptoms:</strong> Severe hallucinations, delusions, or complete loss of touch with reality that impairs judgment and safety.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Extreme agitation or panic:</strong> Uncontrollable anxiety, severe panic attacks, or agitation that prevents rational thinking or safe behavior.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Inability to care for oneself:</strong> Complete withdrawal, refusal to eat or drink, or inability to perform basic self-care due to mental health symptoms.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Substance abuse creating danger:</strong> Overdose, severe intoxication combined with mental health symptoms, or dangerous withdrawal symptoms.</p>
              </div>
            </div>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "When in doubt, seek help. Mental health emergencies are as serious as physical emergencies, and early intervention can prevent tragedy while connecting individuals with life-saving resources."
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Where to Seek Emergency Mental Health Care
            </h2>

            <p className="mb-6">
              Multiple resources exist for mental health emergencies, and knowing your options helps ensure you can access care quickly when needed:
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-primary)]">988 Suicide and Crisis Lifeline:</strong> Available 24/7 by calling or texting 988, this service provides immediate support from trained crisis counselors. It's confidential, free, and available to anyone experiencing emotional distress or suicidal thoughts.
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-primary)]">Emergency Room:</strong> Hospital emergency departments can evaluate and treat mental health crises. They have psychiatrists on call and can provide immediate stabilization, medication management, and referrals for ongoing care.
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-primary)]">Crisis Stabilization Units:</strong> These specialized facilities focus specifically on mental health emergencies, often providing a less overwhelming environment than general emergency rooms while still offering 24/7 acute care.
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-primary)]">Mobile Crisis Teams:</strong> Many communities have teams that come to you, providing assessment and intervention in your location. They can de-escalate situations and determine appropriate next steps without requiring transportation to a facility.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-primary)]">911:</strong> In situations involving immediate danger, violence, or inability to transport safely, calling 911 ensures rapid response. Inform the dispatcher that it's a mental health emergency so appropriate resources can be dispatched.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              What to Expect During Emergency Mental Health Care
            </h2>

            <p className="mb-6">
              Understanding the emergency care process can reduce anxiety about seeking help. When you arrive at an emergency facility or connect with crisis services, you can expect:
            </p>

            <p className="mb-4">
              <strong>Initial Assessment:</strong> A mental health professional will evaluate your immediate safety, current symptoms, medical history, and circumstances that led to the crisis. This assessment determines the level of care needed.
            </p>

            <p className="mb-4">
              <strong>Safety Planning:</strong> Providers work with you to identify triggers, warning signs, and coping strategies. They'll help create a plan to keep you safe and connect you with appropriate follow-up resources.
            </p>

            <p className="mb-4">
              <strong>Medical Evaluation:</strong> Physical health factors often impact mental health. You may receive medical screening to rule out conditions that could contribute to psychiatric symptoms, such as infections, medication interactions, or metabolic imbalances.
            </p>

            <p className="mb-6">
              <strong>Treatment Decisions:</strong> Based on the assessment, treatment may include crisis counseling, medication management, short-term observation, or recommendations for inpatient psychiatric care. The goal is always to provide the least restrictive environment that ensures safety while addressing immediate needs.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Supporting Someone in a Mental Health Crisis
            </h2>

            <p className="mb-6">
              If someone you care about is experiencing a mental health emergency, your response can significantly impact their willingness to seek help and their immediate safety:
            </p>

            <div className="my-8 space-y-4">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Stay calm:</strong> Your demeanor can help de-escalate the situation. Speak in a calm, reassuring tone and avoid sudden movements.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Listen without judgment:</strong> Allow them to express their feelings without criticism or dismissal. Validation can provide crucial emotional support.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Remove potential dangers:</strong> If safe to do so, remove access to weapons, medications, or other means of self-harm.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Encourage professional help:</strong> Offer to help them contact crisis services or accompany them to emergency care.</p>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Don't leave them alone:</strong> If you're concerned about immediate safety, stay with them until professional help arrives or they're in professional care.</p>
              </div>
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              After the Crisis: Planning for Long-Term Wellness
            </h2>

            <p className="mb-6">
              Emergency care addresses immediate danger, but sustained recovery requires ongoing support and treatment. After a mental health crisis, establishing comprehensive care is essential:
            </p>

            <p className="mb-4">
              Follow through with all recommended appointments and referrals. The transition from crisis care to ongoing treatment is a vulnerable time when risk remains elevated. Consistent follow-up helps maintain stability and addresses underlying conditions contributing to the crisis.
            </p>

            <p className="mb-4">
              Build a support network that includes mental health professionals, trusted friends and family, and peer support groups. Multiple layers of support create safety nets that can catch warning signs before they escalate to emergency levels.
            </p>

            <p className="mb-4">
              Develop and document a personal crisis plan when you're feeling stable. Identify your warning signs, coping strategies, supportive contacts, and treatment preferences. Share this plan with trusted individuals so they can help you recognize when you need additional support.
            </p>

            <p className="mb-6">
              Remember that experiencing a mental health crisis doesn't define you, and seeking emergency care is a sign of strength, not weakness. With appropriate treatment and support, most people who experience mental health crises go on to achieve recovery and meaningful lives.
            </p>

            <div className="mt-12 p-8 bg-[var(--color-cream)] rounded-lg border border-[var(--color-border)]">
              <p className="text-lg mb-4">
                <strong>If you or someone you know is in immediate danger:</strong>
              </p>
              <ul className="space-y-2 text-base">
                <li>• Call 988 (Suicide and Crisis Lifeline)</li>
                <li>• Text "HELLO" to 741741 (Crisis Text Line)</li>
                <li>• Call 911 for emergencies</li>
                <li>• Go to your nearest emergency room</li>
              </ul>
              <p className="mt-6 text-[var(--color-muted)] text-sm">
                These resources are available 24/7, confidential, and free. You don't have to face a crisis alone.
              </p>
            </div>

          </div>

        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in mental health care, crisis intervention, and evidence-based treatment approaches. Our team is dedicated to providing compassionate, comprehensive support for individuals facing mental health challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'Cormorant, serif' }}>Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-semibold mb-2">Mental Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Depression: Symptoms and Treatment Options
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about the signs of depression and evidence-based approaches to treatment and recovery.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-semibold mb-2">Self-Care</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Building Resilience: Daily Practices for Mental Wellness
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover practical strategies to strengthen your mental health and develop emotional resilience.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-semibold mb-2">Support</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Supporting a Loved One Through Mental Health Challenges
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Guidance for family and friends on providing meaningful support while maintaining healthy boundaries.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you navigate your mental health journey with compassionate, expert care.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
          <p className="mt-6 text-white/70 text-sm">
            If you're experiencing a mental health emergency, call 988 or go to your nearest emergency room.
          </p>
        </div>
      </section>

    </main>
  )
}