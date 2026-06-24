import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Antidepressants: Types, Effects, and Expectations | Arlene Holland',
  description: 'A comprehensive guide to antidepressant medications, including types, how they work, what to expect, and evidence-based information for informed treatment decisions.',
  keywords: 'antidepressants, depression treatment, SSRIs, SNRIs, mental health medication, antidepressant side effects, medication management',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-white/70 text-sm mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Understanding Antidepressants: Types, Effects, and Expectations
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
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
              If you've been prescribed an antidepressant—or you're considering medication as part of your mental health treatment—you likely have questions. How do these medications work? What can I realistically expect? Will I feel like myself? These concerns are not only valid, they're essential to address as you make informed decisions about your care.
            </p>
            <p className="mb-6">
              Antidepressants are among the most commonly prescribed medications in the United States, yet they remain widely misunderstood. This guide offers clear, evidence-based information about antidepressant types, how they work, what to expect during treatment, and how to work effectively with your healthcare provider to find the right approach for you.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Are Antidepressants and How Do They Work?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Antidepressants are medications designed to treat depression and several other mental health conditions, including anxiety disorders, obsessive-compulsive disorder (OCD), post-traumatic stress disorder (PTSD), and certain chronic pain conditions. While the exact mechanisms are still being studied, antidepressants primarily work by affecting neurotransmitters—chemical messengers in the brain that regulate mood, sleep, appetite, and energy.
            </p>
            <p className="mb-6">
              Depression is associated with imbalances or dysfunction in neurotransmitters like serotonin, norepinephrine, and dopamine. Antidepressants help correct these imbalances, allowing the brain's communication systems to function more effectively. It's important to note that antidepressants don't work instantly—they typically require several weeks to take full effect as the brain adjusts to the medication.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Types of Antidepressants
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              There are several classes of antidepressants, each working slightly differently. Your provider will consider your symptoms, medical history, other medications, and potential side effects when recommending a specific type.
            </p>
            
            <p className="mb-4 font-semibold">Selective Serotonin Reuptake Inhibitors (SSRIs)</p>
            <p className="mb-6">
              SSRIs are often the first-line treatment for depression and anxiety. They work by increasing serotonin levels in the brain. Common examples include fluoxetine (Prozac), sertraline (Zoloft), escitalopram (Lexapro), and paroxetine (Paxil). SSRIs tend to have fewer side effects than older antidepressants and are generally well-tolerated.
            </p>

            <p className="mb-4 font-semibold">Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs)</p>
            <p className="mb-6">
              SNRIs boost both serotonin and norepinephrine. Examples include venlafaxine (Effexor), duloxetine (Cymbalta), and desvenlafaxine (Pristiq). SNRIs may be particularly helpful for individuals with depression accompanied by chronic pain or fatigue.
            </p>

            <p className="mb-4 font-semibold">Atypical Antidepressants</p>
            <p className="mb-6">
              This category includes medications that don't fit neatly into other classes, such as bupropion (Wellbutrin), mirtazapine (Remeron), and trazodone. Bupropion, for instance, affects dopamine and norepinephrine and may be preferred for individuals concerned about sexual side effects or weight gain.
            </p>

            <p className="mb-4 font-semibold">Tricyclic Antidepressants (TCAs) and Monoamine Oxidase Inhibitors (MAOIs)</p>
            <p className="mb-6">
              These are older classes of antidepressants that are effective but typically reserved for cases where newer medications haven't worked, due to their side effect profiles and dietary restrictions (in the case of MAOIs).
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Finding the right antidepressant is often a process of collaboration between you and your provider. It may take time, but the goal is always to improve your quality of life with minimal side effects."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Expect When Starting an Antidepressant
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Starting a new medication can feel daunting. Here's what typically happens during the first weeks and months of antidepressant treatment:
            </p>
            
            <p className="mb-4 font-semibold">Week 1-2: Initial Adjustment</p>
            <p className="mb-6">
              You may notice mild side effects such as nausea, headache, sleep changes, or increased anxiety. These symptoms are usually temporary and often resolve within the first two weeks. It's unlikely you'll feel significant mood improvement yet.
            </p>

            <p className="mb-4 font-semibold">Week 3-4: Early Changes</p>
            <p className="mb-6">
              Some people begin to notice subtle improvements—better sleep, slightly more energy, or less irritability. Others may not notice changes yet. This is normal.
            </p>

            <p className="mb-4 font-semibold">Week 4-8: Therapeutic Effect</p>
            <p className="mb-6">
              Most antidepressants reach their full therapeutic effect around 4 to 8 weeks. You may feel more like yourself, with improved mood, energy, concentration, and interest in activities. If you haven't noticed improvement by week 6-8, contact your provider—they may adjust your dose or try a different medication.
            </p>

            <p className="mb-6">
              It's crucial to take your medication consistently, even on days you feel better. Stopping abruptly can cause withdrawal symptoms and a return of depression.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Side Effects and How to Manage Them
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While antidepressants are generally safe and effective, side effects can occur. Most are mild and temporary. Common side effects include:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Nausea or upset stomach (take with food)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sleep changes (discuss timing of dose with your provider)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sexual side effects (can often be managed with dose adjustment or medication change)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Weight changes (varies by medication)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Dry mouth or increased sweating</span>
              </li>
            </ul>

            <p className="mb-6">
              Always communicate openly with your provider about side effects. Many can be managed, and in some cases, switching medications can make a significant difference in tolerability.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Antidepressants Are Not a Quick Fix—And That's Okay
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One of the most important things to understand about antidepressants is that they are not a cure, and they work best as part of a comprehensive treatment plan. Research consistently shows that combining medication with psychotherapy—such as cognitive-behavioral therapy (CBT)—produces better outcomes than either treatment alone.
            </p>
            <p className="mb-6">
              Antidepressants can provide the neurochemical support needed to engage more fully in therapy, implement healthy lifestyle changes, and rebuild the skills and routines that depression may have disrupted. They are a tool—one that can be incredibly effective, but not a replacement for the deeper work of healing.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Working With Your Provider: Communication Is Key
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your relationship with your healthcare provider is central to successful antidepressant treatment. Here are some ways to make the most of your appointments:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Be honest about your symptoms, including any worsening mood or suicidal thoughts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Report side effects—even minor ones—so your provider can help manage them</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Ask questions about what to expect, how long you'll need medication, and what happens if you want to stop</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Keep a mood journal or use an app to track symptoms, sleep, and side effects</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Never stop taking your medication suddenly without medical guidance</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Choosing to start an antidepressant is a significant and courageous step toward feeling better. While the process requires patience and open communication with your provider, many people find meaningful relief and improved quality of life with the right medication and support. You don't have to navigate this journey alone—our team is here to answer your questions, adjust your treatment as needed, and support you every step of the way.
            </p>
            <p className="mb-6">
              If you're considering antidepressant therapy or have concerns about your current medication, we encourage you to reach out. Together, we can find a treatment plan that works for you.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
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
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-40 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">When Therapy and Medication Work Together</h4>
              <p className="text-[var(--color-muted)] text-sm">Understanding the benefits of combining psychotherapy with medication management for optimal outcomes.</p>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-40 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Recognizing the Signs of Depression</h4>
              <p className="text-[var(--color-muted)] text-sm">Learn the common symptoms of depression and when it's time to seek professional support.</p>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-40 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Self-Care Strategies for Mental Wellness</h4>
              <p className="text-[var(--color-muted)] text-sm">Practical daily habits that support mental health and complement professional treatment.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/90 text-lg mb-8">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-cream)] transition-colors">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}