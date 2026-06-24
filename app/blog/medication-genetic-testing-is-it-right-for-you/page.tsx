import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medication Genetic Testing: Is It Right for You? | Arlene Holland',
  description: 'Learn how pharmacogenetic testing can help optimize your mental health medication. Discover if genetic testing is right for you and how it works.',
  keywords: 'pharmacogenetic testing, genetic testing medication, mental health medication, personalized medicine, medication management',
  openGraph: {
    title: 'Medication Genetic Testing: Is It Right for You?',
    description: 'Learn how pharmacogenetic testing can help optimize your mental health medication.',
    url: 'https://arleneholland.net/blog/medication-genetic-testing-is-it-right-for-you',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
  }
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
            Mental Health
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Medication Genetic Testing: Is It Right for You?
          </h1>

          {/* Meta */}
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
              <span>Dr. Holland Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              Finding the right medication for depression, anxiety, or other mental health conditions can feel like a frustrating guessing game. You try one medication, wait weeks to see if it works, adjust the dose, possibly switch to another—all while managing side effects and the emotional toll of treatment that isn't quite right.
            </p>
            <p className="mb-6">
              What if there was a way to take some of the guesswork out of this process? Pharmacogenetic testing—also called medication genetic testing—analyzes how your unique genetic makeup affects the way your body processes psychiatric medications. For many people, this innovative approach offers a more personalized path to finding effective treatment faster.
            </p>
            <p>
              But is genetic testing right for everyone? Let's explore what this testing involves, who might benefit, and what you need to know to make an informed decision.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            What Is Pharmacogenetic Testing?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Pharmacogenetic testing examines specific genes that influence how your body metabolizes medications. These genes control enzymes in your liver that break down psychiatric medications—including antidepressants, mood stabilizers, and antipsychotics.
            </p>
            <p className="mb-6">
              The test is simple: usually just a cheek swab or saliva sample. Within one to two weeks, you receive a report that categorizes medications based on how your body is likely to process them. Some people metabolize certain medications too quickly (making them less effective), while others metabolize them too slowly (increasing the risk of side effects).
            </p>
            <p>
              This information doesn't guarantee a medication will work for you—mental health treatment is complex and influenced by many factors beyond genetics. However, it provides valuable data that can help your provider make more informed prescribing decisions from the start.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Who Should Consider Genetic Testing?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Pharmacogenetic testing isn't necessary for everyone starting mental health medication, but it can be particularly helpful in certain situations:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>You've tried multiple medications without success.</strong> If you've had poor responses to two or more psychiatric medications, genetic testing may reveal why certain medications haven't worked well for you.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>You've experienced significant side effects.</strong> Severe or unusual side effects from psychiatric medications may indicate that you metabolize them differently than average.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>You have a family history of medication difficulties.</strong> Genetic factors run in families, so if close relatives have struggled with psychiatric medication efficacy or side effects, you might too.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>You're starting medication and want more personalized guidance.</strong> Some people prefer to start with genetic information to potentially reduce trial-and-error from the beginning.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>You take multiple medications.</strong> If you're on several medications for mental health or other conditions, understanding how you metabolize them can help prevent harmful drug interactions.</span>
              </li>
            </ul>
            <p>
              It's important to note that genetic testing isn't a crystal ball. It won't tell you definitively which medication will work best, but it can rule out medications that are likely to be problematic and highlight better options to try first.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            "Pharmacogenetic testing doesn't replace clinical expertise—it enhances it. The results provide one important piece of information that, combined with your symptoms, history, and preferences, helps guide more personalized treatment decisions."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            What the Research Shows
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research on pharmacogenetic testing in psychiatry shows promising but mixed results. Several studies have found that patients whose treatment was guided by genetic testing experienced better outcomes and fewer side effects compared to standard care. A 2019 study published in the <em>Journal of Psychiatric Research</em> found that genetic testing helped reduce symptom severity and improved medication tolerability.
            </p>
            <p className="mb-6">
              However, other research suggests the benefits may be modest, and the testing is most helpful when integrated thoughtfully into comprehensive care—not used in isolation. The FDA has also issued guidance noting that genetic tests shouldn't be the sole basis for medication decisions.
            </p>
            <p>
              What's clear is that pharmacogenetic testing provides useful information for many patients, particularly those who have struggled with standard approaches. As the science continues to evolve, testing is likely to become even more precise and valuable.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Understanding the Limitations
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While pharmacogenetic testing offers valuable insights, it's important to understand what it can and cannot do:
            </p>
            <p className="mb-6">
              <strong>Genetics are just one factor.</strong> How well a medication works depends on many variables—your specific diagnosis, symptom profile, other health conditions, lifestyle factors, stress levels, and more. Genetic testing addresses metabolism, not whether a medication will effectively treat your particular symptoms.
            </p>
            <p className="mb-6">
              <strong>Results require expert interpretation.</strong> The reports can be complex and are best understood within the context of your complete clinical picture. A knowledgeable provider is essential to translate genetic data into practical treatment decisions.
            </p>
            <p className="mb-6">
              <strong>Insurance coverage varies.</strong> Some insurance plans cover pharmacogenetic testing, especially if you've tried multiple medications without success. Others don't. Out-of-pocket costs typically range from $200 to $500, though some companies offer financial assistance programs.
            </p>
            <p>
              <strong>Not all medications are included.</strong> While testing covers many common psychiatric medications, newer drugs or less common options may not be on the panel.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Making the Decision
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're considering pharmacogenetic testing, here are some questions to discuss with your mental health provider:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Based on my history and current situation, am I a good candidate for genetic testing?</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Which testing company do you recommend and why?</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>How will you use the results to guide my treatment?</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What will testing cost, and does my insurance cover it?</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What happens if the results don't provide clear guidance?</span>
              </li>
            </ul>
            <p>
              Remember that choosing to pursue genetic testing—or not—doesn't limit your treatment options. It's simply one tool among many that can inform your care.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Moving Forward With Confidence
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Finding effective mental health treatment is deeply personal, and there's no one-size-fits-all approach. For some people, pharmacogenetic testing provides helpful guidance that accelerates the path to feeling better. For others, traditional trial-and-error with an experienced provider works just fine.
            </p>
            <p className="mb-6">
              What matters most is that you feel informed, supported, and actively involved in your treatment decisions. Whether you choose genetic testing or not, working with a provider who listens to your concerns, respects your preferences, and adjusts treatment based on your responses is essential.
            </p>
            <p>
              Mental health treatment has come a long way, and innovations like pharmacogenetic testing represent the ongoing shift toward more personalized, precision-based care. As we learn more about the biological underpinnings of mental illness and treatment response, we're getting better at matching the right treatments to the right people at the right time.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="bg-[var(--color-light)] rounded-2xl p-8 mt-12 text-center">
            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              If you're struggling to find the right medication or wondering whether pharmacogenetic testing might help, we're here to discuss your options. Our team stays current on the latest research and technologies to provide evidence-based, personalized care.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-dark)] transition-all duration-300"
            >
              <span>Schedule a Consultation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in mental health care. Our team is dedicated to providing evidence-based, compassionate treatment tailored to each individual's unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-center text-[var(--color-ink)] mb-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Understanding Your First Psychiatry Appointment
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">What to expect and how to prepare for your initial mental health evaluation.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Treatment Options</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Medication vs. Therapy: Finding the Right Approach
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Exploring different treatment modalities and how to choose what's best for you.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Managing Medication Side Effects
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Practical strategies for addressing common side effects and when to seek help.</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full hover:bg-[var(--color-cream)] transition-all duration-300 font-medium"
          >
            <span>Contact Us Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  )
}