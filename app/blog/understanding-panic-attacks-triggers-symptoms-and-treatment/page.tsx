import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Panic Attacks: Triggers, Symptoms, and Treatment | Arlene Holland',
  description: 'Learn about panic attack triggers, recognize symptoms, and discover evidence-based treatment options. Expert guidance from mental health professionals.',
  keywords: 'panic attacks, anxiety treatment, panic disorder, mental health, therapy, symptoms of panic attacks',
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
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Panic Attacks: Triggers, Symptoms, and Treatment
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Your heart races uncontrollably. Your chest tightens. A wave of terror washes over you, convincing you that something catastrophic is happening. Within moments, you're experiencing one of the most frightening phenomena the human body can produce: a panic attack. If you've experienced this, you're not alone—and more importantly, you're not powerless against it.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Panic attacks affect millions of people worldwide, cutting across all demographics and life circumstances. While they can feel overwhelming and isolating, understanding what panic attacks are, what triggers them, and how they can be treated is the first step toward regaining control and finding relief.
          </p>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is a Panic Attack?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A panic attack is a sudden episode of intense fear or discomfort that reaches its peak within minutes. Unlike general anxiety, which builds gradually, panic attacks strike suddenly and intensely, often without warning. The experience activates your body's fight-or-flight response—an evolutionary mechanism designed to protect you from danger—even when no actual threat is present.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            According to the Diagnostic and Statistical Manual of Mental Disorders (DSM-5), a panic attack involves at least four of thirteen specific symptoms, including heart palpitations, sweating, trembling, shortness of breath, feelings of choking, chest pain, nausea, dizziness, chills or heat sensations, numbness or tingling, feelings of unreality, fear of losing control, and fear of dying.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While a single panic attack doesn't necessarily indicate a panic disorder, recurrent unexpected panic attacks, along with persistent worry about future attacks or maladaptive behavioral changes to avoid attacks, may warrant a diagnosis of panic disorder—a treatable condition that affects approximately 2-3% of adults and adolescents in the United States each year.
          </p>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Common Triggers and Risk Factors
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding what triggers panic attacks can help you anticipate and manage them more effectively. While triggers vary from person to person, research has identified several common factors:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Chronic stress:</strong> Prolonged exposure to stressful situations—whether work-related, financial, or interpersonal—can create a heightened state of anxiety that makes panic attacks more likely.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Major life transitions:</strong> Significant changes such as moving, changing jobs, relationship changes, or loss can trigger vulnerability to panic attacks.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Substance use:</strong> Caffeine, alcohol, nicotine, and certain medications or drugs can precipitate panic attacks in susceptible individuals.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Medical conditions:</strong> Thyroid problems, heart arrhythmias, hypoglycemia, and other physical health issues can mimic or trigger panic symptoms.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Genetic predisposition:</strong> Family history of anxiety disorders increases the likelihood of experiencing panic attacks.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Phobias and specific situations:</strong> Enclosed spaces, crowds, public speaking, or other anxiety-provoking situations can trigger attacks.
              </p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Interestingly, panic attacks can also occur without an identifiable trigger, seemingly coming "out of the blue." This unpredictability often creates additional anxiety as individuals fear when the next attack might strike.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif" style={{ fontFamily: 'Cormorant, serif' }}>
            "While panic attacks feel overwhelming in the moment, they are treatable. With proper support and evidence-based interventions, most people experience significant improvement in their symptoms."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Recognizing the Symptoms
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Panic attack symptoms manifest in both physical and psychological ways. The physical symptoms can be so intense that many people experiencing their first panic attack believe they're having a heart attack or other life-threatening emergency. Understanding these symptoms helps distinguish panic attacks from other medical conditions and reduces the fear they generate.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Physical symptoms include:</strong>
          </p>

          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Racing or pounding heartbeat (palpitations)</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Chest pain or discomfort</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Shortness of breath or sensation of smothering</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Sweating, trembling, or shaking</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Nausea or abdominal distress</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Dizziness, lightheadedness, or feeling faint</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Chills or hot flashes</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Numbness or tingling sensations</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Psychological symptoms include:</strong>
          </p>

          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Intense fear or sense of impending doom</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Fear of losing control or "going crazy"</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Fear of dying</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Feelings of unreality (derealization) or detachment from oneself (depersonalization)</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Most panic attacks peak within 10 minutes and rarely last longer than 30 minutes, though the emotional aftermath—exhaustion, worry, and residual anxiety—can persist much longer. It's important to note that while panic attacks are extremely uncomfortable, they are not physically dangerous and cannot cause heart attacks, strokes, or death, despite how it may feel in the moment.
          </p>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Treatment Options
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that panic attacks and panic disorder are highly treatable. Multiple evidence-based approaches have demonstrated effectiveness in helping people manage and overcome panic symptoms.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Cognitive Behavioral Therapy (CBT)</strong> is considered the gold standard psychological treatment for panic disorder. CBT helps you identify and challenge the catastrophic thoughts that fuel panic attacks, replacing them with more realistic and balanced thinking. A specialized form called Panic-Focused CBT teaches you to reinterpret physical sensations in non-threatening ways and gradually face feared situations rather than avoiding them.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Exposure therapy</strong>, often incorporated within CBT, involves gradually and safely exposing yourself to the physical sensations of panic and the situations you fear. Through repeated exposure in a controlled environment, you learn that these sensations and situations are not actually dangerous, reducing your fear response over time.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Medication</strong> can be an effective component of treatment, particularly for moderate to severe panic disorder. Selective serotonin reuptake inhibitors (SSRIs) and serotonin-norepinephrine reuptake inhibitors (SNRIs) are commonly prescribed as first-line medications. Benzodiazepines may provide short-term relief but are generally not recommended for long-term use due to dependence concerns. Any medication decisions should be made in consultation with a qualified healthcare provider who can evaluate your individual situation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Lifestyle modifications</strong> support treatment effectiveness. Regular exercise has been shown to reduce anxiety symptoms and improve mood. Limiting caffeine and alcohol, maintaining consistent sleep patterns, and practicing stress management techniques all contribute to reducing panic attack frequency and intensity.
          </p>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Immediate Coping Strategies
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While professional treatment addresses the underlying causes of panic attacks, having immediate coping strategies can help you manage an attack when it occurs:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Practice controlled breathing:</strong> Slow, deep breathing from your diaphragm helps counteract the rapid, shallow breathing that often accompanies panic attacks. Try breathing in for a count of four, holding for four, and exhaling for four.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Use grounding techniques:</strong> Focus on your immediate physical environment. Name five things you can see, four things you can touch, three things you can hear, two things you can smell, and one thing you can taste. This helps anchor you in the present moment.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Remind yourself it will pass:</strong> Panic attacks are temporary. Telling yourself "This is uncomfortable, but it's not dangerous, and it will end" can help reduce the secondary anxiety about the attack itself.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Stay where you are:</strong> Unless you're in actual danger, try not to flee the situation. Leaving reinforces the belief that the situation was genuinely threatening, which can strengthen your fear response.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Challenge catastrophic thoughts:</strong> When you think "I'm having a heart attack," counter with "This is anxiety. My body is responding to perceived danger, but I am safe."
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Help
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While occasional anxiety is a normal part of life, you should consider seeking professional help if you experience:
          </p>

          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Recurrent, unexpected panic attacks</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Persistent worry about having future panic attacks</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Significant behavioral changes to avoid situations that might trigger attacks</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Panic attacks that interfere with your daily life, work, or relationships</li>
            <li className="text-[var(--color-ink)] leading-loose text-base list-disc">Development of agoraphobia (avoiding places or situations where escape might be difficult)</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're experiencing chest pain, difficulty breathing, or other symptoms that could indicate a medical emergency, especially for the first time, it's important to seek immediate medical evaluation to rule out physical health conditions.
          </p>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Living with panic attacks can feel isolating and overwhelming, but effective help is available. Whether through therapy, medication, lifestyle changes, or a combination of approaches, most people who seek treatment for panic disorder experience significant improvement. You don't have to navigate this alone—reaching out to a mental health professional is an important step toward reclaiming your life from panic and anxiety.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Arlene Holland's practice, we understand the impact that panic attacks can have on your quality of life. Our team provides compassionate, evidence-based care tailored to your unique needs. If you're ready to take the next step toward managing your panic symptoms, we're here to support you on that journey.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-[var(--color-ink)] font-semibold text-lg mb-1">
                Written by the Arlene Holland Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Mental Health, offering compassionate, evidence-based care to help you achieve lasting wellness.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Mental Health
              </div>
              <h4 className="font-serif text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Managing Anxiety in Daily Life: Practical Strategies
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Discover evidence-based techniques to reduce anxiety and improve your overall mental wellbeing.
              </p>
              <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                Read more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Treatment Options
              </div>
              <h4 className="font-serif text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                What to Expect from Cognitive Behavioral Therapy
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Learn how CBT works and what you can expect from this proven therapeutic approach.
              </p>
              <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                Read more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Patient Education
              </div>
              <h4 className="font-serif text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                The Mind-Body Connection: Understanding Stress Responses
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Explore how your thoughts, emotions, and physical health are interconnected.
              </p>
              <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                Read more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}