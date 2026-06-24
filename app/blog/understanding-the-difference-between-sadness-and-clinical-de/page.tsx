import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding the Difference Between Sadness and Clinical Depression | Arlene Holland',
  description: 'Learn the key differences between normal sadness and clinical depression, including symptoms, duration, and when to seek professional help from our mental health experts.',
  keywords: 'clinical depression, sadness vs depression, mental health, depression symptoms, when to seek help, major depressive disorder',
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding the Difference Between Sadness and Clinical Depression
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/70">
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
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              We all experience sadness. It's a natural, healthy emotion that arises in response to loss, disappointment, or difficult circumstances. But when does sadness cross the line into something more serious? Understanding the distinction between normal sadness and clinical depression can be life-changing—and in some cases, life-saving.
            </p>
            <p className="mb-6">
              If you've ever wondered whether what you're feeling is "just sadness" or something that requires professional attention, you're not alone. This question comes up frequently in our practice, and it's one worth exploring with care, compassion, and clarity.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What Is Sadness?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Sadness is an emotional response to specific events or circumstances. It's typically temporary and proportionate to what triggered it. You might feel sad after a breakup, the loss of a loved one, a job setback, or even a disappointing day. This is part of being human.
            </p>
            <p className="mb-6">
              Key characteristics of sadness include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Tied to a specific cause:</strong> You can usually identify what made you sad</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Time-limited:</strong> The feeling fades as you process the event or adapt to change</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Allows for moments of joy:</strong> You can still laugh, enjoy activities, and feel hopeful</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Doesn't severely impair functioning:</strong> You can still work, socialize, and care for yourself</span>
              </li>
            </ul>
            <p>
              Sadness is a signal—it tells us something matters. It invites reflection, connection, and healing. In most cases, sadness lifts naturally with time, support, and self-care.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What Is Clinical Depression?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Clinical depression, also known as Major Depressive Disorder (MDD), is a medical condition that affects how you feel, think, and function. Unlike sadness, depression is persistent, pervasive, and often occurs without an obvious external cause.
            </p>
            <p className="mb-6">
              According to the Diagnostic and Statistical Manual of Mental Disorders (DSM-5), clinical depression involves experiencing five or more of the following symptoms for at least two weeks:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] flex-shrink-0">•</span>
                <span>Persistent sad, anxious, or "empty" mood</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] flex-shrink-0">•</span>
                <span>Loss of interest or pleasure in activities once enjoyed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] flex-shrink-0">•</span>
                <span>Significant weight loss or gain, or changes in appetite</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] flex-shrink-0">•</span>
                <span>Insomnia or sleeping too much</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] flex-shrink-0">•</span>
                <span>Fatigue or loss of energy nearly every day</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] flex-shrink-0">•</span>
                <span>Feelings of worthlessness or excessive guilt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] flex-shrink-0">•</span>
                <span>Difficulty thinking, concentrating, or making decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] flex-shrink-0">•</span>
                <span>Recurrent thoughts of death or suicide</span>
              </li>
            </ul>
            <p>
              Depression doesn't just affect your mood—it impacts your body, your mind, and your relationships. It's not something you can "snap out of," and it's not a sign of weakness.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "Depression is not a character flaw or a lack of willpower. It's a treatable medical condition that deserves the same attention and care as any physical illness."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Key Differences at a Glance
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While sadness and depression can feel similar on the surface, several key factors set them apart:
            </p>
            <div className="space-y-4 mb-6">
              <div className="border-l-2 border-[var(--color-primary)] pl-4">
                <p className="font-semibold mb-1">Duration</p>
                <p className="text-sm text-[var(--color-muted)]">Sadness is temporary; depression lasts at least two weeks and often much longer without treatment.</p>
              </div>
              <div className="border-l-2 border-[var(--color-primary)] pl-4">
                <p className="font-semibold mb-1">Intensity</p>
                <p className="text-sm text-[var(--color-muted)]">Sadness is proportionate to the situation; depression feels overwhelming and all-consuming.</p>
              </div>
              <div className="border-l-2 border-[var(--color-primary)] pl-4">
                <p className="font-semibold mb-1">Impact on Functioning</p>
                <p className="text-sm text-[var(--color-muted)]">Sadness allows you to continue daily activities; depression significantly impairs your ability to work, socialize, and care for yourself.</p>
              </div>
              <div className="border-l-2 border-[var(--color-primary)] pl-4">
                <p className="font-semibold mb-1">Physical Symptoms</p>
                <p className="text-sm text-[var(--color-muted)]">Sadness rarely causes physical changes; depression often includes fatigue, sleep disturbances, appetite changes, and physical pain.</p>
              </div>
              <div className="border-l-2 border-[var(--color-primary)] pl-4">
                <p className="font-semibold mb-1">Response to Positive Events</p>
                <p className="text-sm text-[var(--color-muted)]">Sadness can be relieved by good news or enjoyable activities; depression makes it difficult to feel pleasure even in positive situations.</p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Why This Distinction Matters
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Recognizing the difference between sadness and depression is crucial because it determines how you respond. Sadness often resolves with time, self-care, and social support. Depression, however, typically requires professional intervention.
            </p>
            <p className="mb-6">
              Left untreated, depression can:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] flex-shrink-0">•</span>
                <span>Worsen over time and lead to other health complications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] flex-shrink-0">•</span>
                <span>Increase the risk of substance abuse and chronic illness</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] flex-shrink-0">•</span>
                <span>Damage relationships, careers, and overall quality of life</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] flex-shrink-0">•</span>
                <span>Lead to thoughts of self-harm or suicide</span>
              </li>
            </ul>
            <p className="mb-6">
              The good news? Depression is highly treatable. Evidence-based therapies such as Cognitive Behavioral Therapy (CBT), medication, lifestyle changes, and supportive counseling have helped millions of people reclaim their lives.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're unsure whether what you're experiencing is sadness or depression, consider these questions:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Have your feelings lasted more than two weeks?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Are you unable to enjoy activities that used to bring you pleasure?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Is it difficult to get through your daily responsibilities?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Are you experiencing physical symptoms like fatigue, changes in sleep or appetite, or unexplained aches?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Have you had thoughts of harming yourself or that life isn't worth living?</span>
              </li>
            </ul>
            <p className="mb-6">
              If you answered yes to several of these questions, it's time to reach out for support. There is no shame in seeking help—in fact, it's one of the bravest and most important steps you can take.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            You Don't Have to Navigate This Alone
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              At Arlene Holland Mental Health, we understand that acknowledging depression can feel overwhelming. You might worry about being judged, misunderstood, or dismissed. We want you to know: your feelings are valid, your experience matters, and effective help is available.
            </p>
            <p className="mb-6">
              Our compassionate team specializes in diagnosing and treating depression using evidence-based approaches tailored to your unique needs. Whether through therapy, medication management, or a combination of treatments, we're here to walk alongside you toward healing and hope.
            </p>
            <p className="mb-6">
              Depression may cloud your world right now, but with the right support, brighter days are possible. You deserve to feel like yourself again—and we're here to help you get there.
            </p>
            <p className="font-semibold">
              If you or someone you love is struggling, please reach out. Taking the first step is often the hardest, but it's also the most important.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 my-12">
            <p className="font-semibold text-[var(--color-ink)] mb-3">If you are in crisis:</p>
            <p className="text-[var(--color-ink)] leading-relaxed mb-2">
              <strong>National Suicide Prevention Lifeline:</strong> 988 (call or text)
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed mb-2">
              <strong>Crisis Text Line:</strong> Text HOME to 741741
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed">
              <strong>Emergency Services:</strong> Call 911 or go to your nearest emergency room
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Mental Health, dedicated to delivering compassionate, evidence-based care and patient education.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Recognizing the Early Signs of Anxiety Disorders
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">Learn how to identify anxiety symptoms and when to seek professional support.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Self-Care Strategies for Better Mental Health
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">Practical, evidence-based techniques to support your mental wellness journey.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  What to Expect During Your First Therapy Session
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">A guide to help you feel prepared and confident for your initial appointment.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you navigate your mental health journey with compassion and expertise.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}