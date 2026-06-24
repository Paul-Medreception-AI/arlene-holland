import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Postpartum Depression: More Than Just Baby Blues | Arlene Holland',
  description: 'Understanding postpartum depression symptoms, causes, and treatment options. Learn how PPD differs from baby blues and when to seek professional help.',
  keywords: 'postpartum depression, PPD, baby blues, maternal mental health, postpartum anxiety, perinatal depression',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Maternal Mental Health
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Postpartum Depression: More Than Just "Baby Blues"
          </h1>

          {/* Meta */}
          <div className="flex justify-center items-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
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
              The moment you've been waiting for has arrived. You're home with your new baby, surrounded by flowers and well-wishes. Yet instead of feeling the overwhelming joy everyone promised, you feel exhausted, tearful, and surprisingly alone. If this resonates with you, know that you're not alone—and what you're experiencing may be more than the typical "baby blues."
            </p>
            <p className="mb-6">
              Postpartum depression (PPD) affects approximately 1 in 7 new mothers, yet it remains widely misunderstood and undertreated. Many women suffer in silence, believing they should be grateful, that they're failing as mothers, or that these feelings will simply pass with time. Understanding the difference between normal postpartum adjustment and clinical depression can be life-changing—and sometimes, life-saving.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding the Baby Blues vs. Postpartum Depression
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The "baby blues" are extremely common, affecting up to 80% of new mothers. These feelings typically begin within the first few days after delivery and resolve within two weeks. Symptoms include mood swings, crying spells, anxiety, difficulty sleeping, and feeling overwhelmed. While uncomfortable, baby blues are considered a normal adjustment to the hormonal shifts and life changes that accompany childbirth.
            </p>
            <p className="mb-6">
              Postpartum depression, however, is more intense, persistent, and interfering. PPD can begin anytime within the first year after delivery, though it most commonly emerges within the first few weeks to months. Unlike baby blues, postpartum depression doesn't improve on its own and requires professional treatment.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Recognizing the Signs and Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Postpartum depression manifests differently in every woman, but common symptoms include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent sadness, hopelessness, or feeling empty</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Severe mood swings and irritability</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty bonding with your baby or feelings of disconnection</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Withdrawing from family and friends</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Loss of appetite or eating much more than usual</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sleeping too much or inability to sleep even when baby is sleeping</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Overwhelming fatigue or loss of energy</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Feelings of worthlessness, shame, guilt, or inadequacy</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Reduced ability to think clearly, concentrate, or make decisions</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Severe anxiety and panic attacks</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Thoughts of harming yourself or your baby</span>
              </li>
            </ul>
            <p className="mb-6">
              If you're experiencing thoughts of self-harm or harming your baby, seek immediate help by calling 988 (Suicide and Crisis Lifeline) or going to your nearest emergency room. These thoughts are a symptom of your illness, not a reflection of who you are as a mother.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              "Postpartum depression is not a character flaw or a sign of weakness. It's a medical condition that requires—and responds to—treatment."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What Causes Postpartum Depression?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Postpartum depression doesn't have a single cause, but rather results from a combination of physical, emotional, and environmental factors:
            </p>
            <p className="mb-6">
              <strong>Hormonal changes:</strong> The dramatic drop in estrogen and progesterone after delivery can trigger mood changes. Thyroid hormones may also drop, contributing to fatigue and depression.
            </p>
            <p className="mb-6">
              <strong>Sleep deprivation:</strong> The exhaustion of caring for a newborn can make it difficult to recover from delivery and cope with daily challenges.
            </p>
            <p className="mb-6">
              <strong>Emotional factors:</strong> The overwhelming responsibility of caring for a new life, concerns about body image, loss of identity, and feelings of decreased attractiveness can all contribute.
            </p>
            <p className="mb-6">
              <strong>History of depression:</strong> Women with a personal or family history of depression, anxiety, or postpartum depression are at higher risk.
            </p>
            <p className="mb-6">
              <strong>Life stressors:</strong> Financial problems, lack of social support, unplanned pregnancy, or complications during pregnancy or delivery increase vulnerability.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Why Treatment Matters
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Untreated postpartum depression can have lasting consequences for both mother and child. For mothers, PPD can progress to chronic depression, interfere with mother-infant bonding, and increase the risk of depression in future pregnancies. Research shows that maternal depression can affect a child's emotional, cognitive, and behavioral development.
            </p>
            <p className="mb-6">
              The good news is that postpartum depression is highly treatable. With proper care, most women experience significant improvement within weeks to months. Early intervention leads to better outcomes for the entire family.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Evidence-Based Treatment Options
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Treatment for postpartum depression typically involves one or more of the following approaches:
            </p>
            <p className="mb-6">
              <strong>Psychotherapy:</strong> Cognitive-behavioral therapy (CBT) and interpersonal therapy (IPT) have strong evidence for treating PPD. These therapies help you identify and change negative thought patterns, improve relationships, and develop coping strategies.
            </p>
            <p className="mb-6">
              <strong>Medication:</strong> Antidepressants, particularly SSRIs, are safe and effective for treating postpartum depression. Many are compatible with breastfeeding, though this should be discussed with your healthcare provider. In 2019, the FDA approved brexanolone (Zulresso), the first medication specifically designed for postpartum depression.
            </p>
            <p className="mb-6">
              <strong>Support groups:</strong> Connecting with other mothers experiencing PPD can reduce isolation and provide practical coping strategies.
            </p>
            <p className="mb-6">
              <strong>Lifestyle modifications:</strong> While not sufficient as sole treatment, adequate sleep (when possible), regular physical activity, nutritious meals, and social support complement professional treatment.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Taking the First Step
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you suspect you're experiencing postpartum depression, the most important step is reaching out for help. Talk to your obstetrician, midwife, or primary care provider. Mental health professionals who specialize in perinatal mood disorders can provide expert, compassionate care tailored to your unique situation.
            </p>
            <p className="mb-6">
              Remember: seeking help is not a sign of weakness or failure. It's an act of courage and love—for yourself and your baby. You deserve support, and recovery is possible. With proper treatment, you can feel like yourself again and fully enjoy this precious time with your child.
            </p>
            <p className="mb-6">
              At Arlene Holland's practice, we understand the unique challenges of the postpartum period. Our team provides comprehensive, evidence-based care in a supportive, non-judgmental environment. If you're struggling, we're here to help you find your way back to wellness.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium text-[var(--color-ink)] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Written by the Arlene Holland Clinical Team
            </h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Board-certified providers specializing in Mental Health, dedicated to providing evidence-based, compassionate care for individuals and families.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-center mb-12 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Understanding Anxiety Disorders: When Worry Becomes Overwhelming
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Learn about different types of anxiety disorders, their symptoms, and effective treatment approaches.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Self-Care Isn't Selfish: Building a Sustainable Wellness Routine
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Practical strategies for prioritizing your mental health and well-being in daily life.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                How to Talk to Your Partner About Mental Health
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Communication strategies for discussing mental health concerns with loved ones.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}