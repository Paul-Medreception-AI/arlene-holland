import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finding the Right Psychiatrist: What to Look For | Arlene Holland',
  description: 'Learn how to find the right psychiatrist for your mental health needs. Expert guidance on credentials, treatment approaches, and what to ask during your first visit.',
  keywords: 'psychiatrist, mental health care, finding a psychiatrist, mental health provider, psychiatric care, therapy, medication management',
  openGraph: {
    title: 'Finding the Right Psychiatrist: What to Look For',
    description: 'Learn how to find the right psychiatrist for your mental health needs. Expert guidance on credentials, treatment approaches, and what to ask during your first visit.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 text-white/80 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>
          
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Finding the Right Psychiatrist: What to Look For
          </h1>
          
          <div className="flex justify-center items-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Holland Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-6">
              Choosing a psychiatrist is one of the most important decisions you'll make for your mental health journey. The right therapeutic relationship can be transformative, while a poor fit can leave you feeling discouraged and unsupported. Whether you're seeking treatment for the first time or looking to switch providers, understanding what to look for can help you find a psychiatrist who truly meets your needs.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding What Psychiatrists Do
            </h2>
            
            <p className="mb-4">
              Psychiatrists are medical doctors (MDs or DOs) who specialize in mental health. Unlike psychologists or therapists, psychiatrists can prescribe medication and often integrate both medication management and psychotherapy into treatment plans. They complete medical school, followed by four years of specialized psychiatric residency training, giving them a comprehensive understanding of how mental health conditions affect the whole body.
            </p>

            <p className="mb-4">
              Psychiatrists treat a wide range of conditions including depression, anxiety disorders, bipolar disorder, ADHD, PTSD, schizophrenia, and substance use disorders. They use evidence-based approaches including medication, psychotherapy, and lifestyle interventions to help patients achieve their mental health goals.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Essential Credentials and Qualifications
            </h2>

            <p className="mb-4">
              Start by verifying basic credentials. Your psychiatrist should be licensed to practice in your state and board-certified in psychiatry by the American Board of Psychiatry and Neurology. Board certification indicates they've completed additional rigorous testing beyond medical licensing requirements.
            </p>

            <div className="bg-[var(--color-cream)] rounded-xl p-6 my-8">
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Medical degree (MD or DO) from an accredited institution</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Completed psychiatric residency training</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Current state medical license in good standing</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Board certification in psychiatry</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Additional subspecialty training if needed (child psychiatry, addiction medicine, etc.)</span>
                </div>
              </div>
            </div>

            <p className="mb-4">
              You can verify credentials through your state medical board's website and the American Board of Psychiatry and Neurology's verification tool. Don't hesitate to ask about qualifications during your initial consultation—reputable psychiatrists welcome these questions.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Treatment Philosophy and Approach
            </h2>

            <p className="mb-4">
              Different psychiatrists may approach treatment differently. Some focus primarily on medication management with brief check-ins, while others incorporate extensive psychotherapy into their practice. Understanding a provider's treatment philosophy before your first appointment can help ensure alignment with your preferences.
            </p>

            <p className="mb-4">
              Ask potential psychiatrists about their typical treatment approach. Do they prefer starting with medication, therapy, or a combination? How do they involve patients in treatment decisions? What's their philosophy on medication—do they prescribe conservatively or more liberally? How do they monitor treatment progress?
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "The therapeutic relationship between psychiatrist and patient is as important as the treatment itself. Finding someone who listens, respects your input, and makes you feel comfortable is essential to successful outcomes."
              </p>
            </div>

            <p className="mb-4">
              Evidence-based psychiatrists stay current with research and follow established treatment guidelines while tailoring care to individual needs. They should be able to explain their reasoning for treatment recommendations and discuss potential alternatives. A collaborative approach, where you're an active participant in your care rather than a passive recipient, typically leads to better outcomes.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Specialization and Experience
            </h2>

            <p className="mb-4">
              While all psychiatrists receive broad training, many develop particular expertise in certain conditions or populations. If you're dealing with a specific diagnosis like bipolar disorder, treatment-resistant depression, or PTSD, seeking a psychiatrist with specialized experience in that area can be beneficial.
            </p>

            <p className="mb-4">
              Similarly, some psychiatrists specialize in specific populations such as children and adolescents, older adults, or LGBTQ+ individuals. These specialists understand the unique challenges these groups face and can provide more targeted, culturally competent care.
            </p>

            <p className="mb-4">
              Don't confuse years in practice with quality—a newer psychiatrist with relevant specialized training might be a better fit than a more experienced generalist, depending on your needs. What matters most is relevant experience with your specific concerns and a commitment to ongoing learning.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Considerations
            </h2>

            <p className="mb-4">
              Beyond clinical qualifications, practical factors significantly impact your treatment experience. Consider location and accessibility—will you need to travel long distances for appointments? Does the psychiatrist offer telehealth visits, which can provide greater flexibility and consistency?
            </p>

            <p className="mb-4">
              Insurance and cost are crucial considerations for most people. Verify whether the psychiatrist accepts your insurance and what your out-of-pocket costs will be. If paying out-of-pocket, ask about fees upfront. Some psychiatrists offer sliding scale fees based on income.
            </p>

            <p className="mb-4">
              Availability matters too. How far out are appointments scheduled? What's the policy for urgent situations between appointments? How does the psychiatrist or their practice handle after-hours emergencies? Understanding these logistics prevents frustration later.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Questions to Ask During Your First Visit
            </h2>

            <p className="mb-4">
              The initial consultation is your opportunity to assess whether a psychiatrist is the right fit. Come prepared with questions and pay attention to how comfortable you feel during the conversation. Trust your instincts—if something feels off, it's okay to keep looking.
            </p>

            <div className="bg-[var(--color-cream)] rounded-xl p-6 my-8">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4 text-lg">Key Questions to Consider:</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">What's your experience treating my specific condition?</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">How do you typically approach treatment for someone in my situation?</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">How often would we meet, and what would follow-up visits look like?</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">How do you involve patients in treatment decisions?</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">What should I do if I have concerns between appointments?</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Do you coordinate care with other providers like therapists or primary care doctors?</span>
                </div>
              </div>
            </div>

            <p className="mb-4">
              Pay attention not just to the answers, but to how the psychiatrist communicates. Do they listen carefully? Explain things clearly? Treat you with respect? Do you feel heard and understood? These intangibles often matter as much as credentials.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Consider Switching Providers
            </h2>

            <p className="mb-4">
              Sometimes, despite your best efforts, a psychiatrist isn't the right fit. Perhaps your symptoms aren't improving, you feel unheard, or you've developed concerns about your treatment. It's completely acceptable—and often necessary—to seek a second opinion or switch providers.
            </p>

            <p className="mb-4">
              Red flags that might indicate it's time to find a new psychiatrist include: consistently feeling rushed or dismissed during appointments, reluctance to explain treatment decisions or consider your input, no improvement after several months of treatment without discussion of alternative approaches, or simply not feeling comfortable opening up to them.
            </p>

            <p className="mb-4">
              Remember that mental health treatment is a collaborative process. You deserve a psychiatrist who respects you as a partner in your care, communicates clearly, and helps you feel hopeful about your recovery journey.
            </p>

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="text-lg leading-relaxed">
                Finding the right psychiatrist takes time and effort, but it's worth it. The right provider can help you understand your mental health, develop effective coping strategies, and ultimately improve your quality of life. If you're ready to begin your mental health journey or looking to establish care with a new provider, don't hesitate to reach out for a consultation. Your mental health is worth the investment.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-2">
                Written by the Arlene Holland Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Mental Health, dedicated to providing compassionate, evidence-based care and educational resources for our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Anxiety: Signs, Symptoms, and Treatment
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn about different types of anxiety disorders, when to seek help, and what evidence-based treatments are available.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Treatment</div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Medication vs. Therapy: What's Right for You?
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore the differences between medication and psychotherapy, and learn how they can work together for optimal outcomes.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Wellness</div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Self-Care Strategies for Mental Wellness
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover practical, evidence-based self-care techniques to support your mental health alongside professional treatment.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you on your journey to better mental health.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}