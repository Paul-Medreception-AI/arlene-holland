import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seasonal Affective Disorder: When Winter Brings More Than Cold | Arlene Holland',
  description: 'Understanding Seasonal Affective Disorder (SAD) - symptoms, causes, and evidence-based strategies to manage winter depression and reclaim your well-being.',
  keywords: 'seasonal affective disorder, SAD, winter depression, seasonal depression, mental health, light therapy, depression treatment',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
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
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Seasonal Affective Disorder: When Winter Brings More Than Cold
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6 text-lg">
              As the days grow shorter and the temperature drops, many people find themselves experiencing more than just a case of the winter blues. For millions of Americans, the changing seasons trigger a legitimate form of depression known as Seasonal Affective Disorder (SAD). If you've noticed that your mood consistently dips during the winter months, you're not imagining it—and you're certainly not alone.
            </p>
            <p className="mb-6">
              Seasonal Affective Disorder is more than feeling a bit down on a gloomy day. It's a recognized pattern of depression that follows a seasonal pattern, most commonly beginning in late fall and continuing through winter. Understanding this condition is the first step toward finding relief and reclaiming your well-being during the darker months.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Seasonal Affective Disorder?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Seasonal Affective Disorder is a type of depression that occurs at the same time every year. While some people experience SAD during summer months, the vast majority of cases occur during fall and winter—a pattern sometimes called "winter depression." The condition was formally recognized by the American Psychiatric Association in the 1980s, though people have long noticed the connection between seasons and mood.
            </p>
            <p className="mb-6">
              What distinguishes SAD from other forms of depression is its predictable seasonal pattern. People with SAD typically begin experiencing symptoms in late fall, with symptoms peaking during the darkest months of winter, and then notice a complete remission of symptoms in spring and summer. This cyclical nature is one of the key diagnostic criteria.
            </p>
            <p className="mb-6">
              The symptoms of SAD mirror those of major depression: persistent low mood, loss of interest in activities you once enjoyed, changes in sleep patterns, difficulty concentrating, feelings of hopelessness, and changes in appetite. However, winter-pattern SAD often includes specific features like oversleeping, overeating (particularly craving carbohydrates), weight gain, and a heavy feeling in the arms and legs.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Does It Affect?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              SAD affects an estimated 5% of adults in the United States, though many more experience milder forms of seasonal mood changes. The condition is more common than many realize, and certain factors increase your likelihood of experiencing it.
            </p>
            <p className="mb-6">
              Women are diagnosed with SAD at four times the rate of men, though researchers aren't entirely sure why this disparity exists. The condition typically first appears in young adulthood, between ages 18 and 30, though it can develop at any age.
            </p>
            <p className="mb-6">
              Geography plays a significant role. SAD is more common in people who live far from the equator, where winter days are significantly shorter. For example, SAD is much more prevalent in Alaska or New England than in Florida. Family history matters too—having blood relatives with SAD or other forms of depression increases your risk.
            </p>
            <p className="mb-6">
              People who already have depression or bipolar disorder may find their symptoms worsen seasonally. And interestingly, SAD can occur even in sunny climates, though it's far less common in regions with more consistent daylight throughout the year.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-serif">
              "The changing seasons shouldn't mean losing yourself. Understanding SAD is the first step toward taking back control of your mental health during the darker months."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Science Behind SAD
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While researchers continue to study SAD, several biological mechanisms appear to contribute to the condition. The leading theory centers on light exposure and its effects on our brain chemistry and circadian rhythms.
            </p>
            <p className="mb-6">
              <strong>Serotonin levels:</strong> Reduced sunlight can cause a drop in serotonin, a brain chemical (neurotransmitter) that affects mood. Lower serotonin levels are linked to depression. The shorter days and reduced sunlight of winter may trigger this drop in people who are susceptible to SAD.
            </p>
            <p className="mb-6">
              <strong>Melatonin production:</strong> The change in season can disrupt the balance of the body's level of melatonin, which plays a role in sleep patterns and mood. The increased darkness of winter can cause an overproduction of melatonin, leading to increased sleepiness and lethargy.
            </p>
            <p className="mb-6">
              <strong>Circadian rhythm disruption:</strong> Your body's internal clock (circadian rhythm) is tied to sunlight exposure. The reduced level of sunlight in fall and winter may disrupt your body's internal clock and lead to feelings of depression. This disruption can affect sleep-wake cycles, hormone production, and mood regulation.
            </p>
            <p className="mb-6">
              <strong>Vitamin D deficiency:</strong> Vitamin D is produced when your skin is exposed to sunlight. This vitamin is thought to play a role in serotonin activity. Reduced sunlight during winter months can lead to vitamin D deficiency, which may contribute to depressive symptoms.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing the Signs
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              It's important to distinguish between SAD and the occasional winter blues. Everyone might feel a bit less energetic on a gray day, but SAD involves symptoms that significantly interfere with daily functioning and persist throughout the winter season.
            </p>
            <p className="mb-4">Common signs of winter-pattern SAD include:</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent sad, anxious, or "empty" mood most of the day, nearly every day</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Loss of interest in activities you once enjoyed</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Low energy and increased fatigue despite sleeping more</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Craving carbohydrates and weight gain</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Oversleeping or difficulty waking up in the morning</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty concentrating and making decisions</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Feelings of hopelessness or worthlessness</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Social withdrawal ("hibernating")</span>
              </div>
            </div>
            <p className="mb-6">
              If you've experienced these symptoms during the past two winters, occurring and then improving around the same times each year, it's worth discussing SAD with a healthcare provider.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Treatment Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The good news is that SAD is highly treatable. Several evidence-based approaches have been shown to effectively manage symptoms, and often a combination of treatments works best.
            </p>
            <p className="mb-6">
              <strong>Light Therapy (Phototherapy):</strong> This is often the first-line treatment for SAD. It involves sitting near a special light box that emits bright light (typically 10,000 lux) for about 20-30 minutes each morning. Light therapy mimics natural outdoor light and appears to cause a change in brain chemicals linked to mood. Most people see improvement within one to two weeks, though it may take longer. It's important to use a light box specifically designed for SAD treatment, as regular lamps aren't sufficient.
            </p>
            <p className="mb-6">
              <strong>Psychotherapy:</strong> Cognitive behavioral therapy (CBT) adapted for SAD has shown excellent results in clinical trials. This type of therapy helps you identify and change negative thought patterns and behaviors that may be making you feel worse. It also teaches behavioral activation—techniques to help you engage in rewarding activities despite low motivation. Some studies suggest CBT's benefits may last longer than light therapy alone because you learn coping skills.
            </p>
            <p className="mb-6">
              <strong>Medication:</strong> Antidepressant medications, particularly selective serotonin reuptake inhibitors (SSRIs), can be effective for SAD. Some people use medication preventively, starting before symptoms typically begin in fall. Others may need medication throughout the winter months. Your provider can help determine if medication is appropriate for your situation.
            </p>
            <p className="mb-6">
              <strong>Vitamin D:</strong> While research is ongoing, some studies suggest vitamin D supplementation may help improve symptoms, particularly in people with deficient levels. However, it shouldn't be used as a sole treatment without professional guidance.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Self-Care Strategies That Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While professional treatment is often necessary for SAD, several lifestyle modifications can support your mental health during winter months:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maximize natural light exposure:</strong> Open blinds and curtains as soon as you wake up. Sit near windows during the day. Take a walk outside, even on cloudy days—outdoor light exposure helps, even without direct sunshine.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Exercise regularly:</strong> Physical activity helps relieve stress and anxiety, both of which can worsen SAD symptoms. Exercise may also help counteract weight gain and low energy. Aim for 30 minutes most days, even if it's just a walk.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maintain a regular sleep schedule:</strong> While you may be tempted to oversleep, try to maintain consistent sleep and wake times. Too much sleep can worsen symptoms.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stay socially connected:</strong> Depression often makes you want to withdraw, but social support is crucial. Make plans with friends and family, even when you don't feel like it.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Manage stress:</strong> Practice relaxation techniques like meditation, yoga, or deep breathing exercises. Stress can trigger or worsen SAD symptoms.</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Plan ahead:</strong> If you've experienced SAD before, consider starting preventive measures in early fall before symptoms begin.</span>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Seasonal Affective Disorder is a legitimate medical condition that deserves proper attention and treatment. If you suspect you're experiencing SAD, don't dismiss it as simply "winter blues" you need to tough out. The condition can significantly impact your quality of life, relationships, and ability to function—but it's also highly treatable.
            </p>
            <p className="mb-6">
              The first step is recognizing the pattern and seeking help. Talk to a healthcare provider about your symptoms and their seasonal nature. Together, you can develop a treatment plan that may include light therapy, psychotherapy, medication, or a combination of approaches. With proper treatment, you can break the cycle of seasonal depression and maintain your well-being throughout the year.
            </p>
            <p className="mb-6 font-semibold">
              You don't have to dread the darker months. Help is available, and you deserve to feel like yourself all year long.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
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
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-40 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Mental Health</div>
              <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Depression: Signs, Symptoms, and Support</h4>
              <p className="text-[var(--color-muted)] text-sm">Learn about the different types of depression and when to seek professional help.</p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-40 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Self-Care</div>
              <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Building Resilience: Daily Practices for Mental Wellness</h4>
              <p className="text-[var(--color-muted)] text-sm">Evidence-based strategies to strengthen your mental health every day.</p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-40 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Treatment</div>
              <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">What to Expect in Therapy: Your First Visit Guide</h4>
              <p className="text-[var(--color-muted)] text-sm">Demystifying the therapy process and how to prepare for your first session.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}