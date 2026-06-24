import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Bipolar Disorder: Beyond Mood Swings | Arlene Holland',
  description: 'Learn about bipolar disorder, its symptoms, types, and treatment options. Evidence-based information from mental health professionals to help you understand this complex condition.',
  keywords: 'bipolar disorder, mental health, mood disorders, depression, mania, treatment, therapy, psychiatry',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
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
            Understanding Bipolar Disorder: Beyond Mood Swings
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Holland Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Everyone experiences ups and downs in their mood—it's part of being human. But for millions of people living with bipolar disorder, these fluctuations go far beyond ordinary mood changes. Bipolar disorder is a complex mental health condition that profoundly affects emotions, energy levels, and the ability to function in daily life. Understanding what bipolar disorder truly is—and what it isn't—is the first step toward effective treatment and compassionate support.
            </p>
            <p>
              Despite increased awareness, misconceptions about bipolar disorder persist. It's often reduced to simple "mood swings" or dismissed as mere emotional volatility. The reality is far more nuanced, and recognizing the signs and symptoms can be life-changing for those affected.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Bipolar Disorder?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Bipolar disorder is a mental health condition characterized by significant shifts in mood, energy, and activity levels. These shifts occur in distinct episodes, ranging from periods of intense emotional highs (mania or hypomania) to devastating lows (depression). Unlike the natural emotional rhythms we all experience, bipolar episodes can last for days, weeks, or even months, and they interfere with work, relationships, and overall quality of life.
            </p>
            <p>
              The condition typically emerges in late adolescence or early adulthood, though it can develop at any age. According to the National Institute of Mental Health, approximately 2.8% of U.S. adults experience bipolar disorder in a given year, affecting people across all demographics, backgrounds, and walks of life.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Types of Bipolar Disorder
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Bipolar disorder isn't a one-size-fits-all diagnosis. Mental health professionals recognize several distinct types, each with its own pattern of symptoms:
            </p>
            <p className="mb-4">
              <strong>Bipolar I Disorder</strong> involves at least one manic episode, which may be preceded or followed by hypomanic or major depressive episodes. Manic episodes are severe enough to cause noticeable impairment in social or occupational functioning and may require hospitalization.
            </p>
            <p className="mb-4">
              <strong>Bipolar II Disorder</strong> is defined by a pattern of depressive episodes and hypomanic episodes, but not the full-blown manic episodes characteristic of Bipolar I. Though considered "less severe," Bipolar II can be equally disabling due to the prolonged depressive periods.
            </p>
            <p className="mb-4">
              <strong>Cyclothymic Disorder</strong> involves periods of hypomanic symptoms and depressive symptoms lasting for at least two years (one year in children and adolescents), but the symptoms don't meet the full criteria for hypomanic or depressive episodes.
            </p>
            <p>
              Understanding which type of bipolar disorder is present is crucial for developing an effective treatment plan tailored to the individual's specific needs.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Bipolar disorder is not a character flaw or a sign of weakness—it's a medical condition that requires proper diagnosis, treatment, and ongoing support."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Recognizing the Signs and Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The hallmark of bipolar disorder is the presence of distinct mood episodes. During a manic episode, a person might feel euphoric, extremely energetic, or unusually irritable. They may sleep very little yet feel rested, talk rapidly, engage in risky behaviors, or have racing thoughts. In severe cases, manic episodes can include psychotic features such as delusions or hallucinations.
            </p>
            <p className="mb-6">
              Hypomanic episodes are similar but less severe—they don't cause significant impairment in functioning or require hospitalization, but they're still noticeable to others.
            </p>
            <p className="mb-6">
              Depressive episodes, on the other hand, bring overwhelming sadness, hopelessness, and loss of interest in activities once enjoyed. People may experience changes in sleep and appetite, difficulty concentrating, feelings of worthlessness, and in severe cases, thoughts of death or suicide.
            </p>
            <p>
              The challenge in diagnosing bipolar disorder is that depressive episodes often dominate the clinical picture, and individuals may not recognize or report manic or hypomanic episodes—especially if they felt good during those times. This can lead to misdiagnosis as major depression, which is why comprehensive psychiatric evaluation is essential.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Importance of Accurate Diagnosis
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Getting an accurate diagnosis is critical because treatment for bipolar disorder differs significantly from treatment for other mood disorders. Antidepressants alone, for example, can sometimes trigger manic episodes in people with bipolar disorder. A thorough psychiatric evaluation typically includes a detailed history of mood episodes, family history of mental health conditions, and sometimes input from family members who can provide additional perspective.
            </p>
            <p>
              Diagnostic tools, structured interviews, and mood charting can all help clinicians arrive at an accurate diagnosis. Early and correct diagnosis leads to better outcomes, helping individuals regain stability and prevent future episodes.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Treatment Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Bipolar disorder is a lifelong condition, but it is highly treatable. The most effective approach typically involves a combination of medication and psychotherapy, tailored to the individual's specific symptoms and needs.
            </p>
            <p className="mb-6">
              <strong>Medications:</strong> Mood stabilizers, antipsychotics, and sometimes antidepressants (used cautiously) form the cornerstone of pharmacological treatment. Finding the right medication or combination can take time, but when effective, medication can dramatically reduce the frequency and severity of episodes.
            </p>
            <p className="mb-6">
              <strong>Psychotherapy:</strong> Cognitive-behavioral therapy (CBT), family-focused therapy, and interpersonal and social rhythm therapy have all shown effectiveness in helping individuals manage symptoms, recognize early warning signs of episodes, and develop coping strategies.
            </p>
            <p>
              Lifestyle factors also play a crucial role. Regular sleep schedules, stress management, avoidance of alcohol and drugs, and a strong support system all contribute to long-term stability.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Living Well with Bipolar Disorder
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While bipolar disorder presents significant challenges, many people with the condition lead fulfilling, productive lives. The key is ongoing management, self-awareness, and a commitment to treatment. Here are some practical strategies that can help:
            </p>

            {/* Bullet List with Checkmarks */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Track your moods:</strong> Keep a daily mood journal to identify patterns and early warning signs of episodes.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stick to a routine:</strong> Consistent sleep-wake cycles and daily routines help stabilize mood.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Take medications as prescribed:</strong> Even when feeling well, continuing medication is essential to prevent relapse.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Build a support network:</strong> Connect with trusted friends, family, or support groups who understand your condition.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Avoid triggers:</strong> Limit alcohol, manage stress, and avoid sleep deprivation.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Communicate with your provider:</strong> Regular check-ins with your psychiatrist or therapist ensure your treatment remains effective.</span>
              </li>
            </ul>

            <p>
              Recovery is not linear, and setbacks can occur. What matters most is persistence, self-compassion, and the willingness to seek help when needed.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Bipolar disorder is a serious but manageable condition. With accurate diagnosis, evidence-based treatment, and ongoing support, individuals with bipolar disorder can achieve stability, pursue their goals, and enjoy meaningful relationships. If you or someone you love is struggling with symptoms that might suggest bipolar disorder, reaching out to a mental health professional is a courageous and critical first step.
            </p>
            <p>
              At Arlene Holland, our experienced team is here to provide compassionate, comprehensive care for individuals living with bipolar disorder and other mental health conditions. You don't have to navigate this journey alone—help is available, and recovery is possible.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                Written by the Arlene Holland Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Mental Health, committed to delivering evidence-based care and patient education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Managing Depression: A Comprehensive Guide
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Explore evidence-based strategies for understanding and treating depression.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium">Read More →</span>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                The Power of Self-Care in Mental Health
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Learn practical self-care strategies to support your mental wellness journey.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium">Read More →</span>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                When to Seek Professional Mental Health Support
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Recognizing the signs that it's time to reach out for professional help.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium">Read More →</span>
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
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}