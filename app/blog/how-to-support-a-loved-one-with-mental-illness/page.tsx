import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Support a Loved One with Mental Illness | Arlene Holland',
  description: 'Learn evidence-based strategies for supporting a loved one with mental illness. Practical guidance on communication, boundaries, self-care, and when to seek professional help.',
  keywords: 'mental health support, helping loved ones, mental illness, family support, caregiver strategies, mental health resources',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm mb-6 text-white/80 text-center">
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            How to Support a Loved One with Mental Illness
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
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
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
            <p className="mb-6 text-lg">
              Watching someone you love struggle with mental illness can feel overwhelming and isolating. You want to help, but may not know where to start or fear saying the wrong thing. The truth is that your support can make a profound difference in their recovery journey—but supporting someone with mental illness also requires understanding, patience, and care for your own wellbeing.
            </p>
            <p className="mb-6">
              Whether your loved one is dealing with depression, anxiety, bipolar disorder, or another mental health condition, learning how to offer meaningful support while maintaining healthy boundaries is essential. This guide provides evidence-based strategies to help you navigate this challenging but important role.
            </p>
          </div>

          {/* Section 1 */}
          <div className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Understanding Mental Illness
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                Mental illnesses are medical conditions that affect a person's thinking, feeling, mood, and behavior. They're not character flaws, signs of weakness, or something that can be overcome through willpower alone. According to the National Institute of Mental Health, nearly one in five adults in the United States lives with a mental illness—that's approximately 57.8 million people.
              </p>
              <p className="mb-6">
                Just as diabetes affects the pancreas and heart disease affects cardiovascular function, mental illnesses affect brain function. These conditions can be influenced by genetics, brain chemistry, trauma, and environmental factors. Understanding this biological basis helps remove stigma and allows for more compassionate, effective support.
              </p>
              <p className="mb-6">
                Common mental health conditions include depression, anxiety disorders, bipolar disorder, schizophrenia, PTSD, and eating disorders. Each presents differently, but all benefit from professional treatment combined with supportive relationships.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Effective Communication Strategies
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                How you communicate with your loved one can significantly impact their willingness to open up and seek help. Here are evidence-based approaches to supportive communication:
              </p>
              <div className="bg-white border border-[var(--color-border)] rounded-lg p-6 my-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Listen without judgment:</strong> Create a safe space where they can express their feelings without fear of criticism or dismissal.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Validate their experience:</strong> Acknowledge their pain as real, even if you don't fully understand it. Say "That sounds really difficult" instead of "It could be worse."</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Ask how you can help:</strong> Rather than assuming, ask "What can I do to support you right now?" or "Would you like advice, or do you just need me to listen?"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Avoid minimizing language:</strong> Phrases like "just think positive," "everyone feels that way sometimes," or "snap out of it" can feel dismissive and increase isolation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Be patient:</strong> Recovery isn't linear. There will be good days and bad days. Consistent support matters more than quick fixes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            "Your support can make a profound difference in their recovery journey, but it requires understanding, patience, and care for your own wellbeing."
          </blockquote>

          {/* Section 3 */}
          <div className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Practical Ways to Help
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                Beyond emotional support, there are concrete actions you can take to assist your loved one during difficult times:
              </p>
              <p className="mb-6">
                <strong>Help with daily tasks:</strong> During severe episodes, basic activities like grocery shopping, meal preparation, or household chores can feel insurmountable. Offering practical help without taking over their autonomy shows care without fostering dependence.
              </p>
              <p className="mb-6">
                <strong>Accompany them to appointments:</strong> Attending therapy or psychiatry appointments (with their permission) can provide moral support and help ensure important information is communicated and remembered.
              </p>
              <p className="mb-6">
                <strong>Learn about their condition:</strong> Reading reputable sources about their specific mental health condition helps you understand what they're experiencing and what evidence-based treatments exist.
              </p>
              <p className="mb-6">
                <strong>Encourage treatment adherence:</strong> Gently remind them about medication schedules or therapy appointments, but avoid nagging. Frame it as caring about their wellbeing rather than controlling their choices.
              </p>
              <p className="mb-6">
                <strong>Create a crisis plan together:</strong> During stable periods, work with them to identify warning signs, coping strategies, emergency contacts, and preferred interventions for use during crises.
              </p>
              <p className="mb-6">
                <strong>Include them in activities:</strong> Social isolation often worsens mental health conditions. Continue inviting them to activities while respecting when they need space. Even declined invitations show you're thinking of them.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Setting Healthy Boundaries
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                Supporting someone with mental illness requires balancing compassion with self-preservation. Boundaries aren't selfish—they're essential for sustainable support.
              </p>
              <p className="mb-6">
                <strong>Recognize your limits:</strong> You cannot be someone's sole support system, therapist, or cure. Understanding what you can and cannot provide prevents burnout and resentment.
              </p>
              <p className="mb-6">
                <strong>Communicate boundaries clearly:</strong> Be specific about what you can offer. "I can talk for 30 minutes tonight, but then I need to focus on my own responsibilities" is clearer and kinder than becoming unavailable without explanation.
              </p>
              <p className="mb-6">
                <strong>Avoid enabling harmful behaviors:</strong> Supporting someone doesn't mean accepting abusive behavior, covering up consequences of their actions, or sacrificing your own mental health. Compassion and accountability can coexist.
              </p>
              <p className="mb-6">
                <strong>Know when to involve professionals:</strong> If your loved one expresses suicidal thoughts, engages in self-harm, or becomes a danger to others, professional intervention is necessary. You can support them through this process without trying to manage the crisis alone.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Taking Care of Yourself
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                Caregiver burnout is real and can undermine your ability to provide effective support. Prioritizing your own mental health isn't selfish—it's necessary.
              </p>
              <div className="bg-white border border-[var(--color-border)] rounded-lg p-6 my-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Maintain your own routines:</strong> Continue engaging in activities that bring you joy and connection outside your caregiving role.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Seek your own support:</strong> Consider therapy for yourself, join a support group for families of people with mental illness, or talk with trusted friends.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Practice self-compassion:</strong> You will make mistakes. You won't always know what to say. That's okay. What matters is showing up with care.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Educate yourself about compassion fatigue:</strong> Recognize the signs—exhaustion, cynicism, reduced empathy—and take proactive steps to address them.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Share the load:</strong> Don't try to be the only support person. Encourage your loved one to build a network of professional and personal support.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              When to Seek Professional Help
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                While your support is valuable, professional treatment is often essential for recovery. Encourage your loved one to seek help if they experience:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Persistent sadness, anxiety, or mood changes lasting more than two weeks</li>
                <li>Difficulty functioning in daily life, work, or relationships</li>
                <li>Changes in sleep patterns, appetite, or energy levels</li>
                <li>Withdrawal from activities they once enjoyed</li>
                <li>Substance abuse or risky behaviors</li>
                <li>Thoughts of self-harm or suicide</li>
              </ul>
              <p className="mb-6">
                If your loved one is in immediate danger, call 911 or take them to the nearest emergency room. The 988 Suicide and Crisis Lifeline provides 24/7 support and can be reached by calling or texting 988.
              </p>
              <p className="mb-6">
                Professional treatment may include therapy (such as cognitive-behavioral therapy or dialectical behavior therapy), medication management, support groups, or intensive programs. Recovery looks different for everyone, but professional guidance significantly improves outcomes.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 animate-fade-up">
            <p className="mb-6">
              Supporting a loved one with mental illness is one of the most meaningful—and challenging—things you can do. Your presence, patience, and compassion can provide hope during their darkest moments. Remember that you don't need to have all the answers or fix everything. Sometimes the most powerful support is simply showing up, listening without judgment, and reminding them they're not alone.
            </p>
            <p className="mb-6">
              If you're feeling overwhelmed or would benefit from professional guidance on supporting your loved one, our team is here to help. We offer individual therapy, family therapy, and resources for both those experiencing mental health challenges and their support systems.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 mx-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Board-certified providers specializing in Mental Health. Our team is dedicated to providing evidence-based care and education to support your mental health journey.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Depression: Signs, Symptoms, and Treatment
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn about the different types of depression, how to recognize symptoms, and evidence-based treatment options.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Self-Care</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Building Resilience: Coping Strategies for Difficult Times
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover practical techniques to strengthen your mental health and navigate life's challenges with greater ease.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Therapy</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect in Your First Therapy Session
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Starting therapy can feel daunting. Learn what happens in your first session and how to prepare for a positive experience.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  )
}