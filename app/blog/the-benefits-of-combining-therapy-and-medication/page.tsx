import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Benefits of Combining Therapy and Medication | Arlene Holland',
  description: 'Discover how integrating psychotherapy with medication can provide comprehensive mental health treatment. Learn about the evidence-based benefits of combining both approaches.',
  keywords: 'therapy and medication, mental health treatment, psychotherapy, psychiatric medication, integrated treatment, mental health care',
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
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Benefits of Combining Therapy and Medication
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published December 2024</span>
            <span>·</span>
            <span>7 min read</span>
            <span>·</span>
            <span>Arlene Holland Clinical Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When facing mental health challenges, the question often arises: should I pursue therapy, medication, or both? For many people struggling with conditions like depression, anxiety, PTSD, or bipolar disorder, the answer increasingly points toward an integrated approach. Research consistently shows that combining psychotherapy with psychiatric medication can be more effective than either treatment alone—offering relief from symptoms while building lasting skills for emotional wellness.
            </p>
            <p className="mb-6">
              Yet misconceptions persist. Some view medication as a "quick fix" that masks problems, while others see therapy as insufficient for severe symptoms. The reality is more nuanced: these two approaches work synergistically, each enhancing the other's effectiveness. Understanding how and why can empower you to make informed decisions about your mental health care.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding the Two Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Psychotherapy—or talk therapy—helps you identify and change troubling emotions, thoughts, and behaviors. Through structured sessions with a trained therapist, you develop coping strategies, process past trauma, and learn new ways of relating to yourself and others. Common approaches include cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), and psychodynamic therapy.
            </p>
            <p className="mb-6">
              Psychiatric medication works at the neurological level, adjusting brain chemistry to alleviate symptoms. Antidepressants, anti-anxiety medications, mood stabilizers, and antipsychotics can reduce the intensity of symptoms that interfere with daily functioning. They don't solve life problems, but they can create the mental space needed to engage meaningfully in therapy.
            </p>
            <p className="mb-6">
              Neither approach is inherently superior. Each addresses different aspects of mental health—one targets the biological underpinnings, the other the psychological and behavioral patterns. Together, they offer comprehensive care.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Science Behind Combined Treatment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Decades of research support the effectiveness of combined treatment. A landmark study published in the Archives of General Psychiatry found that patients with moderate to severe depression who received both medication and psychotherapy showed significantly greater improvement than those who received either treatment alone.
            </p>
            <p className="mb-6">
              For anxiety disorders, studies consistently demonstrate that combining cognitive-behavioral therapy with medication produces better outcomes and lower relapse rates. The medication reduces physiological symptoms—racing heart, panic attacks, intrusive thoughts—allowing patients to engage more fully in therapeutic exercises like exposure therapy.
            </p>
            <p className="mb-6">
              The mechanism is straightforward: medication stabilizes brain chemistry, reducing symptom severity. This creates a "therapeutic window" where individuals have enough emotional bandwidth to learn and practice new skills. Therapy, in turn, addresses the root causes and thought patterns that perpetuate mental health struggles, creating lasting change that extends beyond medication use.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              "Medication can lift you out of the crisis. Therapy teaches you how to stay out of it."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When Combined Treatment Makes Sense
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While not everyone requires both approaches, combined treatment is particularly beneficial in several scenarios:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Moderate to severe symptoms</strong> that interfere with daily functioning, work, or relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Limited response to therapy alone</strong> after several months of consistent treatment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Conditions with strong biological components</strong> such as bipolar disorder, severe depression, or schizophrenia</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Crisis situations</strong> where immediate symptom relief is necessary for safety</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Co-occurring conditions</strong> like depression with anxiety, or PTSD with substance use concerns</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>History of relapse</strong> after discontinuing previous treatment</span>
              </li>
            </ul>
            <p className="mb-6">
              Your treatment team—which may include a psychiatrist, therapist, and primary care physician—can help determine whether combined treatment is appropriate for your specific situation. The decision should be collaborative, taking into account your symptoms, preferences, medical history, and treatment goals.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            How the Two Approaches Complement Each Other
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The synergy between therapy and medication creates a powerful treatment effect:
            </p>
            <p className="mb-6">
              <strong>Medication provides stability.</strong> When symptoms are overwhelming—paralyzing anxiety, debilitating depression, racing thoughts—it's difficult to focus on therapy exercises or make behavioral changes. Medication can reduce symptom intensity enough to make therapy productive. You might think of it as lowering the volume on distressing symptoms so you can hear the therapeutic guidance more clearly.
            </p>
            <p className="mb-6">
              <strong>Therapy builds skills.</strong> While medication manages symptoms, therapy equips you with tools for long-term wellness. You learn to identify triggers, challenge distorted thinking, regulate emotions, and develop healthy coping mechanisms. These skills remain even if you eventually discontinue medication.
            </p>
            <p className="mb-6">
              <strong>Together, they address multiple dimensions.</strong> Mental health conditions affect biology, psychology, behavior, and social functioning. Medication addresses the biological component, while therapy works on the psychological, behavioral, and interpersonal dimensions. This comprehensive approach increases the likelihood of sustained recovery.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Addressing Common Concerns
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Many people hesitate to pursue combined treatment due to misconceptions or concerns:
            </p>
            <p className="mb-6">
              <strong>"Medication is a crutch."</strong> Medication is not a moral failing or sign of weakness. It's a legitimate medical intervention for conditions with biological components. Would you refuse insulin for diabetes or blood pressure medication for hypertension? Mental health conditions deserve the same evidence-based treatment.
            </p>
            <p className="mb-6">
              <strong>"I'll become dependent."</strong> While some medications require gradual discontinuation, most psychiatric medications are not addictive when taken as prescribed. Dependency is different from addiction—and with proper medical supervision, medications can be safely adjusted or discontinued when appropriate.
            </p>
            <p className="mb-6">
              <strong>"Side effects aren't worth it."</strong> Side effects vary by medication and individual. Many are temporary and resolve within weeks. Your prescriber can adjust dosages or try different medications to minimize side effects while maximizing benefits. Open communication is key.
            </p>
            <p className="mb-6">
              <strong>"Therapy alone should be enough."</strong> For some people and some conditions, therapy alone is sufficient. For others, the severity of symptoms or biological factors make medication necessary for progress. There's no shame in needing both approaches—effective treatment is what matters.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Getting Started with Combined Treatment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're considering a combined approach, here are steps to begin:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Seek comprehensive evaluation.</strong> A thorough assessment by a psychiatrist or psychiatric nurse practitioner can determine whether medication would be beneficial.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Find a therapist.</strong> Look for a licensed professional with experience treating your specific concerns using evidence-based approaches.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Facilitate communication.</strong> With your permission, your prescriber and therapist can coordinate care, ensuring treatments complement each other.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Be patient.</strong> Both medication and therapy take time to work. Most medications require 4-6 weeks to show full effects, and therapy progress is gradual.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Communicate openly.</strong> Report symptoms, side effects, and concerns to your treatment team. Adjustments are normal and expected.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Commit to both treatments.</strong> Combined treatment works best when both components are pursued consistently. Attend therapy regularly and take medication as prescribed.</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Mental health treatment is not one-size-fits-all. For many people, combining psychotherapy with psychiatric medication offers the most comprehensive path to wellness—addressing both the biological and psychological dimensions of mental health conditions. If you've been struggling with symptoms that interfere with your life, work, or relationships, don't hesitate to explore all available treatment options.
            </p>
            <p className="mb-6">
              Recovery is possible. With the right combination of treatments and support, you can regain stability, develop lasting coping skills, and build the life you want. Reach out to a qualified mental health professional to discuss whether combined treatment might be right for you.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Written by the Arlene Holland Clinical Team</div>
              <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Mental Health</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'Cormorant, serif' }}>Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up group">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="text-xl mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors font-light" style={{ fontFamily: 'Cormorant, serif' }}>Understanding Depression: Signs and Treatment Options</h4>
              <p className="text-[var(--color-muted)] text-sm">Learn about the symptoms of depression and evidence-based approaches to treatment.</p>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up group">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="text-xl mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors font-light" style={{ fontFamily: 'Cormorant, serif' }}>Self-Care Strategies for Mental Wellness</h4>
              <p className="text-[var(--color-muted)] text-sm">Practical daily practices to support your mental health alongside professional treatment.</p>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up group">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h4 className="text-xl mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors font-light" style={{ fontFamily: 'Cormorant, serif' }}>What to Expect in Your First Therapy Session</h4>
              <p className="text-[var(--color-muted)] text-sm">A guide to help you prepare for your initial appointment and make the most of therapy.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help you explore treatment options that work for you.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}