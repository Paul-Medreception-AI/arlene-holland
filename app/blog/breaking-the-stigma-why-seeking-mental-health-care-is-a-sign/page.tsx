import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Breaking the Stigma: Why Seeking Mental Health Care Is a Sign of Strength | Arlene Holland',
  description: 'Discover why reaching out for mental health support demonstrates courage and strength. Learn how to overcome stigma and take the first step toward healing and wellness.',
  keywords: 'mental health stigma, seeking therapy, mental health care, overcoming stigma, therapy benefits, mental wellness, emotional health',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-white/80 text-sm mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Breaking the Stigma: Why Seeking Mental Health Care Is a Sign of Strength
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published 2024</span>
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
              <span>Dr. Holland Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              In a world where we celebrate physical fitness, encourage annual health checkups, and praise those who take charge of their physical wellbeing, why do we still hesitate when it comes to mental health? The truth is, seeking mental health care isn't a sign of weakness—it's one of the most courageous and powerful decisions you can make for yourself and those you love.
            </p>
            <p>
              Despite growing awareness, stigma around mental health continues to prevent countless individuals from seeking the support they need. It's time to shift the narrative and recognize that reaching out for help demonstrates profound strength, self-awareness, and commitment to living your best life.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">Understanding Mental Health Stigma</h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              Mental health stigma refers to the negative attitudes, beliefs, and stereotypes that society holds about mental illness and those who experience it. This stigma manifests in several ways:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Public stigma:</strong> Negative attitudes held by the general public toward those with mental health conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Self-stigma:</strong> Internalized shame and negative beliefs about oneself due to mental health struggles</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Structural stigma:</strong> Systemic policies and institutional practices that limit opportunities for people with mental health conditions</span>
              </li>
            </ul>
            <p>
              These forms of stigma create barriers that prevent people from acknowledging their struggles, discussing their experiences openly, and most importantly, seeking professional help when they need it most.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">The Reality: Mental Health Challenges Are Universal</h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              Mental health conditions don't discriminate. They affect people of all ages, backgrounds, professions, and walks of life. Consider these compelling statistics:
            </p>
            <p className="mb-4">
              According to the National Institute of Mental Health, nearly one in five adults in the United States experiences mental illness each year. That's approximately 50 million Americans. Furthermore, the World Health Organization reports that depression and anxiety disorders cost the global economy $1 trillion per year in lost productivity—highlighting how common and impactful these conditions truly are.
            </p>
            <p>
              CEOs, teachers, athletes, artists, parents, students—mental health challenges touch everyone. The difference between those who thrive and those who suffer in silence often comes down to one critical factor: the willingness to seek help.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-serif">
              "Asking for help isn't a sign of weakness—it's a demonstration of self-awareness, courage, and commitment to your own wellbeing. It takes tremendous strength to acknowledge when you need support."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Seeking Help Is a Sign of Strength</h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              When you seek mental health care, you're demonstrating several powerful qualities:
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">Self-Awareness</h3>
              <p className="mb-4">
                Recognizing that you're struggling requires deep self-reflection and emotional intelligence. Many people go through life avoiding their feelings or dismissing their experiences. Acknowledging your mental health needs shows you're in touch with your inner world and willing to face difficult truths.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">Courage</h3>
              <p className="mb-4">
                Despite societal pressures, outdated beliefs, and fear of judgment, you're choosing to prioritize your wellbeing. That takes real bravery. You're standing up against stigma and refusing to suffer in silence—a truly courageous act.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">Problem-Solving</h3>
              <p className="mb-4">
                Seeking professional help demonstrates that you're proactive and solution-oriented. Rather than hoping things will improve on their own, you're taking concrete steps to address your challenges and improve your quality of life.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">Self-Respect</h3>
              <p className="mb-4">
                By investing in your mental health, you're affirming that you matter, that your wellbeing is important, and that you deserve to feel better. This self-respect is the foundation of genuine healing and growth.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">The Evidence: Mental Health Treatment Works</h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              One of the most important reasons to seek mental health care is simple: it works. Decades of research consistently demonstrate that professional mental health treatment is effective for a wide range of conditions.
            </p>
            <p className="mb-4">
              Cognitive-behavioral therapy (CBT), for instance, has been shown in numerous studies to be highly effective for treating anxiety disorders, depression, PTSD, and many other conditions. The American Psychological Association reports that approximately 75% of people who enter psychotherapy show some benefit from it.
            </p>
            <p className="mb-4">
              Moreover, early intervention can prevent mental health conditions from worsening and reduce the risk of developing additional complications. When left untreated, mental health conditions can impact every area of life—relationships, work performance, physical health, and overall quality of life. Seeking help early can change this trajectory entirely.
            </p>
            <p>
              Treatment options today are more diverse and accessible than ever, including individual therapy, group therapy, medication management, holistic approaches, and telehealth services. This means there are pathways to healing that can work for virtually everyone.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the First Step: What to Expect</h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              If you're considering seeking mental health care, you might be wondering what the process looks like. Here's what you can typically expect:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Initial consultation:</strong> Your first session will focus on understanding your concerns, history, and goals for treatment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Collaborative treatment planning:</strong> You and your provider will work together to develop a personalized treatment approach</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Safe, confidential space:</strong> Everything you discuss is protected by strict confidentiality laws</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Ongoing support:</strong> Regular sessions provide consistent support as you work toward your goals</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Progress monitoring:</strong> You and your provider will regularly assess what's working and adjust as needed</span>
              </li>
            </ul>
            <p>
              Remember, finding the right mental health provider is important. It's okay to meet with a few different professionals before finding someone who feels like the right fit. The therapeutic relationship is a crucial component of successful treatment.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">Moving Forward: Your Wellbeing Matters</h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              Breaking the stigma around mental health starts with individual choices—the choice to speak openly about mental health, to support others in their journeys, and most importantly, to seek help when you need it.
            </p>
            <p className="mb-4">
              Your mental health is just as important as your physical health. You wouldn't ignore a broken bone or a persistent physical illness, so why should mental health be any different? Just as you'd see a doctor for a physical ailment, seeing a mental health professional for emotional or psychological struggles is a normal, healthy, and responsible choice.
            </p>
            <p className="mb-4">
              If you're struggling with anxiety, depression, trauma, relationship issues, life transitions, or any other mental health concern, please know that help is available. You don't have to face these challenges alone. Reaching out for support isn't giving up—it's stepping up for yourself and your future.
            </p>
            <p>
              The journey to better mental health begins with a single, courageous step. That step is reaching out. And that step demonstrates incredible strength.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 mt-12 border-l-4 border-[var(--color-primary)]">
            <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">Ready to Take That First Step?</h3>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              Our compassionate team at Arlene Holland is here to support you on your mental health journey. We provide evidence-based, personalized care in a safe, non-judgmental environment.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-dark)] transition-all"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Mental Health, dedicated to providing compassionate, evidence-based care and resources to support your journey toward wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Anxiety: Symptoms, Causes, and Treatment Options</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn about anxiety disorders and evidence-based approaches to managing symptoms and improving quality of life.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Self-Care</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Building Resilience: Daily Practices for Mental Wellness</h4>
                <p className="text-[var(--color-muted)] text-sm">Discover practical strategies and daily habits to strengthen your mental health and build lasting resilience.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Relationships</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">How to Support a Loved One Facing Mental Health Challenges</h4>
                <p className="text-[var(--color-muted)] text-sm">Practical guidance on providing compassionate support while maintaining healthy boundaries and self-care.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you begin your journey toward better mental health and wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all inline-block"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/blog" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[var(--color-primary)] transition-all inline-block"
            >
              Explore More Resources
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}