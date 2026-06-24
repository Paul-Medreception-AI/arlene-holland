import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Evidence-Based Strategies for Managing Anxiety in Daily Life | Arlene Holland',
  description: 'Discover proven, research-backed techniques to manage anxiety effectively. Learn practical strategies you can implement today for better mental health and wellbeing.',
  keywords: 'anxiety management, mental health strategies, anxiety relief, coping with anxiety, evidence-based therapy, mental wellness',
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            5 Evidence-Based Strategies for Managing Anxiety in Daily Life
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              You're lying awake at 2 AM, mind racing through tomorrow's tasks. Your heart pounds during a routine meeting. A simple decision—what to order for lunch—feels overwhelming. If these moments sound familiar, you're not alone. Anxiety affects over 40 million adults in the United States, making it the most common mental health condition in the country.
            </p>
            <p className="mb-6">
              While anxiety can feel all-consuming, the good news is that decades of research have identified specific, practical strategies that genuinely work. These aren't just tips to "think positive" or "just relax"—they're evidence-based techniques, validated through rigorous scientific study, that can help you regain control and find relief.
            </p>
            <p>
              Let's explore five powerful strategies you can start using today to manage anxiety more effectively in your daily life.
            </p>
          </div>

          {/* Strategy 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            1. Practice Structured Breathing Exercises
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              When anxiety strikes, your body's fight-or-flight response kicks in, triggering rapid, shallow breathing that can intensify feelings of panic. Controlled breathing exercises directly counteract this physiological response by activating your parasympathetic nervous system—your body's natural "calm down" mechanism.
            </p>
            <p className="mb-6">
              The 4-7-8 breathing technique, developed by Dr. Andrew Weil and backed by multiple studies, is particularly effective. Here's how it works: breathe in through your nose for 4 counts, hold your breath for 7 counts, then exhale completely through your mouth for 8 counts. This pattern forces your body to slow down and signals to your brain that you're safe.
            </p>
            <p className="mb-6">
              Research published in the Journal of Clinical Psychology found that participants who practiced controlled breathing exercises experienced significant reductions in anxiety symptoms within just two weeks. The key is consistency—practice for 5-10 minutes daily, even when you're not anxious, so the technique becomes automatic when you need it most.
            </p>
          </div>

          {/* Strategy 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            2. Challenge Cognitive Distortions
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Anxiety thrives on cognitive distortions—inaccurate thought patterns that convince us things are worse than they actually are. Common distortions include catastrophizing (assuming the worst will happen), all-or-nothing thinking (seeing things as completely good or bad), and mind reading (assuming we know what others think).
            </p>
            <p className="mb-6">
              Cognitive Behavioral Therapy (CBT), one of the most extensively researched therapeutic approaches, teaches us to identify and challenge these distorted thoughts. When you notice an anxious thought, ask yourself: "What's the evidence for this thought? What's the evidence against it? What would I tell a friend thinking this way?"
            </p>
            <p className="mb-6">
              A landmark study in the American Journal of Psychiatry found that CBT techniques reduced anxiety symptoms by 50-60% in participants, with effects lasting long after treatment ended. The practice of examining your thoughts rather than accepting them as facts creates mental space and perspective.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "You don't have to control your thoughts. You just have to stop letting them control you."
          </blockquote>

          {/* Strategy 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            3. Establish a Consistent Sleep Routine
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              The relationship between sleep and anxiety is bidirectional—anxiety disrupts sleep, and poor sleep amplifies anxiety. Research from UC Berkeley found that a single sleepless night can increase anxiety levels by up to 30%. Conversely, improving sleep quality consistently reduces anxiety symptoms.
            </p>
            <p className="mb-6">
              Creating a sleep routine isn't just about getting enough hours—it's about regulating your body's circadian rhythm. Go to bed and wake up at the same time every day, even on weekends. Create a wind-down routine starting 60 minutes before bed: dim the lights, avoid screens, try gentle stretching or reading.
            </p>
            <p className="mb-6">
              Keep your bedroom cool (65-68°F is optimal), dark, and reserved primarily for sleep. If you can't fall asleep within 20 minutes, leave the room and do a calming activity until you feel drowsy. This prevents your brain from associating your bed with wakefulness and anxiety.
            </p>
          </div>

          {/* Strategy 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            4. Engage in Regular Physical Movement
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Exercise is often called "nature's anti-anxiety treatment," and the research backs this up impressively. Physical activity reduces levels of stress hormones like cortisol and adrenaline while increasing production of endorphins—your brain's natural mood elevators.
            </p>
            <p className="mb-6">
              A meta-analysis of 12 studies published in Depression and Anxiety found that regular exercise reduced anxiety symptoms as effectively as medication for many participants. The key word is "regular"—you don't need intense workouts, but you do need consistency.
            </p>
            <p className="mb-6">
              Aim for 30 minutes of moderate activity most days of the week. This could be brisk walking, swimming, cycling, dancing, or any movement you enjoy. Activities that combine physical exertion with mindful awareness—like yoga, tai chi, or hiking in nature—may offer additional anxiety-reducing benefits.
            </p>

            {/* Tips List */}
            <div className="bg-[var(--color-cream)] rounded-lg p-6 my-8">
              <h3 className="text-xl font-medium text-[var(--color-ink)] mb-4">Quick Tips for Adding Movement:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Take a 10-minute walk during lunch breaks</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Use stairs instead of elevators when possible</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Schedule movement like any other important appointment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Find an activity partner for accountability and social connection</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Strategy 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            5. Limit Caffeine and Practice Mindful Nutrition
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              What you consume directly affects your nervous system. Caffeine, while beloved for its energizing effects, is a stimulant that can trigger or worsen anxiety symptoms. It increases heart rate, can cause jitteriness, and disrupts sleep—all of which feed into the anxiety cycle.
            </p>
            <p className="mb-6">
              If you're experiencing persistent anxiety, try reducing caffeine intake gradually (to avoid withdrawal headaches). Notice how you feel after one week with no caffeine after 2 PM, or limiting yourself to one cup in the morning. Many people report significant anxiety reduction from this change alone.
            </p>
            <p className="mb-6">
              Beyond caffeine, focus on blood sugar stability. Skipping meals or eating high-sugar foods causes blood sugar spikes and crashes that can mimic and trigger anxiety symptoms. Eat regular, balanced meals with protein, healthy fats, and complex carbohydrates. Stay hydrated—dehydration can also increase feelings of anxiety.
            </p>
            <p className="mb-6">
              Research in Nutritional Neuroscience has shown that diets rich in omega-3 fatty acids (found in fish, walnuts, and flaxseed), magnesium (leafy greens, nuts, whole grains), and B vitamins support healthy nervous system function and may reduce anxiety symptoms.
            </p>
          </div>

          {/* When to Seek Professional Help */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            When to Seek Professional Support
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              These evidence-based strategies can be powerful tools for managing everyday anxiety. However, it's important to recognize when professional support would be beneficial. If anxiety is interfering with your daily functioning, relationships, work performance, or quality of life—or if you're experiencing panic attacks, avoidance behaviors, or physical symptoms—reaching out to a mental health professional is a sign of strength, not weakness.
            </p>
            <p className="mb-6">
              Therapy, particularly Cognitive Behavioral Therapy (CBT) and Acceptance and Commitment Therapy (ACT), provides structured, evidence-based treatment that goes deeper than self-help strategies alone. A trained therapist can help you understand the root causes of your anxiety, develop personalized coping strategies, and create lasting change.
            </p>
            <p>
              Remember: you don't have to wait until anxiety becomes unbearable to seek help. Early intervention often leads to faster, more complete recovery. Taking steps to manage your mental health is one of the most important investments you can make in your overall wellbeing.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Mental Health, dedicated to providing evidence-based care and education to support your wellbeing journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-40 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Mental Health</div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Understanding the Mind-Body Connection in Mental Health
              </h4>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Explore how physical health and mental wellbeing are deeply interconnected.
              </p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-40 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Self-Care</div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Building a Sustainable Self-Care Routine
              </h4>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Practical strategies for creating self-care habits that actually stick.
              </p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-40 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Therapy</div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                What to Expect in Your First Therapy Session
              </h4>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                A guide to help you feel prepared and confident starting therapy.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help you find relief and build lasting wellbeing.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}