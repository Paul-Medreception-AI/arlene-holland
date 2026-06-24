import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Psychotherapy Services | Arlene Holland Mental Health',
  description: 'Professional psychotherapy services helping individuals navigate depression, anxiety, trauma, and life transitions through evidence-based treatment approaches.',
}

export default function PsychotherapyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Psychotherapy</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Psychotherapy in arleneholland
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Professional psychotherapy services designed to help you navigate depression, anxiety, trauma, relationship challenges, and life transitions through compassionate, evidence-based treatment. Our collaborative approach empowers you to develop insight, build resilience, and create meaningful change in your life.
          </p>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light mb-8 text-[var(--color-ink)]">
            What is Psychotherapy?
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed mb-12">
            <p>
              Psychotherapy, also known as talk therapy, is a collaborative treatment approach based on the relationship between an individual and a trained mental health professional. It provides a safe, confidential space to explore thoughts, feelings, and behaviors that may be causing distress or preventing you from living the life you want. Through structured conversations and evidence-based techniques, psychotherapy helps you gain insight into your patterns, develop healthier coping strategies, and work toward meaningful personal growth.
            </p>
            
            <p>
              Unlike simply talking to a friend or family member, psychotherapy is conducted by a licensed professional who uses scientifically-validated methods tailored to your specific needs. The therapeutic relationship itself becomes a tool for healing, offering unconditional positive regard, empathy, and expertise. Whether you're dealing with a diagnosed mental health condition like depression or anxiety, navigating a difficult life transition, or simply seeking personal development, psychotherapy provides structured support to help you move forward.
            </p>
            
            <p>
              Research consistently demonstrates that psychotherapy is highly effective for treating a wide range of mental health concerns. Studies show that approximately 75% of people who engage in psychotherapy experience meaningful benefit, with improvements in symptoms, relationships, work performance, and overall quality of life. Many people find that psychotherapy not only addresses their immediate concerns but also equips them with skills and insights that continue to benefit them long after treatment ends. The specific approach and duration of therapy varies based on individual needs, with some people benefiting from short-term focused treatment while others engage in longer-term exploratory work.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-light mb-6 text-[var(--color-ink)]">
              Psychotherapy Can Help If You're Experiencing:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Persistent sadness, hopelessness, or depression',
                'Overwhelming worry, fear, or anxiety',
                'Difficulty coping with stress or life changes',
                'Traumatic experiences or PTSD symptoms',
                'Relationship conflicts or communication problems',
                'Low self-esteem or negative self-image',
                'Grief and loss',
                'Anger management challenges',
                'Sleep disturbances or changes in appetite',
                'Feelings of emptiness or lack of purpose',
                'Unhealthy behavior patterns or habits',
                'Social withdrawal or isolation'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Treat It Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light mb-16 text-center text-[var(--color-ink)]">
            Our Approach to Psychotherapy
          </h2>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-light mb-4 text-[var(--color-ink)]">
                Initial Assessment
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                We begin with a comprehensive evaluation to understand your concerns, history, strengths, and goals. This collaborative assessment helps us develop a clear picture of what brings you to therapy and what you hope to achieve, establishing the foundation for effective treatment.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-light mb-4 text-[var(--color-ink)]">
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Based on your unique needs, we create a tailored treatment approach drawing from evidence-based modalities. Your plan may incorporate cognitive-behavioral techniques, psychodynamic exploration, mindfulness practices, or other therapeutic approaches that align with your goals and preferences.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-light mb-4 text-[var(--color-ink)]">
                Ongoing Support & Progress
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Through regular sessions, we work together to implement therapeutic strategies, process experiences, and build new skills. We continuously monitor your progress, adjust approaches as needed, and celebrate milestones as you move toward your goals and sustained well-being.
              </p>
            </div>
          </div>

          {/* Treatment Modalities */}
          <div className="max-w-5xl mx-auto">
            <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-light mb-8 text-[var(--color-ink)]">
              Evidence-Based Therapeutic Approaches
            </h3>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h4 className="font-semibold text-xl text-[var(--color-ink)] mb-3">
                  Cognitive-Behavioral Therapy (CBT)
                </h4>
                <p className="text-[var(--color-ink)]/70 leading-relaxed">
                  CBT focuses on identifying and changing unhelpful thought patterns and behaviors that contribute to emotional distress. This structured, goal-oriented approach is particularly effective for anxiety, depression, and stress-related conditions, teaching practical skills you can use throughout your life.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h4 className="font-semibold text-xl text-[var(--color-ink)] mb-3">
                  Psychodynamic Therapy
                </h4>
                <p className="text-[var(--color-ink)]/70 leading-relaxed">
                  This approach explores how past experiences and unconscious processes influence current thoughts, feelings, and relationships. By gaining insight into these deeper patterns, you can develop greater self-understanding and make more conscious choices about your life and relationships.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h4 className="font-semibold text-xl text-[var(--color-ink)] mb-3">
                  Mindfulness-Based Approaches
                </h4>
                <p className="text-[var(--color-ink)]/70 leading-relaxed">
                  Incorporating mindfulness and acceptance-based strategies helps you develop present-moment awareness, reduce reactivity to difficult thoughts and emotions, and cultivate a more compassionate relationship with yourself. These techniques are effective for anxiety, chronic stress, and emotional regulation.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h4 className="font-semibold text-xl text-[var(--color-ink)] mb-3">
                  Humanistic & Person-Centered Therapy
                </h4>
                <p className="text-[var(--color-ink)]/70 leading-relaxed">
                  This approach emphasizes your inherent capacity for growth and self-determination. In a supportive, non-judgmental environment, you're empowered to explore your experiences, clarify your values, and develop authentic ways of living that align with your true self.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12">
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light mb-12 text-center text-[var(--color-ink)]">
              What to Expect in Your Therapy Journey
            </h2>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-[var(--color-primary)]">
                <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-[var(--color-primary)]"></div>
                <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-2">First Visit</h4>
                <p className="text-[var(--color-ink)]/70 leading-relaxed">
                  Your initial session focuses on getting to know you and understanding what brings you to therapy. We'll discuss your concerns, history, goals, and answer any questions you have about the therapeutic process. This is also an opportunity to ensure we're a good fit to work together.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-[var(--color-primary)]">
                <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-[var(--color-primary)]"></div>
                <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Weeks 2-4</h4>
                <p className="text-[var(--color-ink)]/70 leading-relaxed">
                  During these early sessions, we continue building our therapeutic relationship while establishing clear goals and beginning to implement initial strategies. You may start noticing small shifts in awareness or perspective as you begin to engage with therapeutic concepts and practice new approaches.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-[var(--color-primary)]">
                <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-[var(--color-primary)]"></div>
                <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Months 1-3</h4>
                <p className="text-[var(--color-ink)]/70 leading-relaxed">
                  As therapy progresses, you'll likely experience more noticeable improvements in symptoms and functioning. This period involves deepening your therapeutic work, practicing new skills in daily life, and addressing patterns that may have been challenging for years. Progress isn't always linear—some sessions will feel more productive than others, and that's normal.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-[var(--color-primary)]">
                <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-[var(--color-primary)]"></div>
                <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Long-Term Growth</h4>
                <p className="text-[var(--color-ink)]/70 leading-relaxed">
                  Over time, the insights and skills developed in therapy become more integrated into your daily life. Many people experience sustained improvements in relationships, self-esteem, and overall well-being. The duration of therapy varies—some people benefit from short-term focused work while others engage in longer-term exploration and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light mb-12 text-center text-[var(--color-ink)]">
            Common Questions About Psychotherapy
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                How long does psychotherapy take to work?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                The timeline for therapeutic progress varies significantly based on individual needs, the nature of your concerns, and your goals. Some people experience meaningful improvement within 8-12 sessions of focused, short-term therapy, particularly for specific issues like acute stress or adjustment difficulties. More complex concerns such as long-standing depression, trauma, or deeply-rooted patterns may benefit from longer-term treatment spanning several months to years. Most people begin noticing small positive changes within the first few weeks, with more substantial improvements emerging over time. We'll regularly assess your progress together and adjust the treatment plan as needed.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                What's the difference between a psychologist, psychiatrist, and therapist?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                These terms refer to different types of mental health professionals with varying training and approaches. A psychiatrist is a medical doctor who can prescribe medication and often focuses on the biological aspects of mental health. A psychologist typically holds a doctoral degree (PhD or PsyD) and specializes in psychological assessment and therapy but cannot prescribe medication in most states. The term "therapist" or "psychotherapist" is broader and can include licensed clinical social workers, licensed professional counselors, marriage and family therapists, and psychologists—all trained to provide talk therapy using evidence-based approaches. What matters most is finding a licensed professional with appropriate training and expertise for your specific needs.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Is what I say in therapy really confidential?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                Yes, confidentiality is a cornerstone of psychotherapy and is protected by law and professional ethics. What you discuss in therapy stays between you and your therapist with very few exceptions. These exceptions include situations where there is imminent risk of harm to yourself or others, suspected child or elder abuse, or when records are subpoenaed by court order. Your therapist will explain these limits of confidentiality during your first session. This protected space allows you to speak openly and honestly about your experiences, thoughts, and feelings without fear of judgment or disclosure, which is essential for effective therapeutic work.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                How do I know if therapy is working?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                Progress in therapy can manifest in various ways, both obvious and subtle. You might notice improvements in symptoms like reduced anxiety or depression, better sleep, or increased energy. Changes in relationships—communicating more effectively, setting healthier boundaries, or experiencing greater connection—are common indicators. Many people report enhanced self-awareness, improved coping skills, and feeling more capable of managing challenges. Sometimes progress looks like feeling worse temporarily as you work through difficult emotions or experiences. Regular check-ins with your therapist about your progress toward established goals help track improvement. Remember that therapy is collaborative—if something isn't working, discussing this openly allows for adjustments to better meet your needs.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Do I need to take medication along with therapy?
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                Not necessarily—many people benefit significantly from psychotherapy alone without medication. For some conditions like mild to moderate depression and anxiety, research shows therapy can be as effective as medication. However, for moderate to severe symptoms or certain conditions, a combination of therapy and medication may be most effective. This decision depends on multiple factors including symptom severity, your personal preferences, previous treatment history, and the specific nature of your concerns. If medication might be helpful, we can discuss this option and provide a referral to a psychiatrist for evaluation. Many people successfully use therapy as their primary treatment while others find that medication provides additional support for their therapeutic work.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-light mb-12 text-center text-[var(--color-ink)]">
            Related Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/anxiety-treatment" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant_Garamond',serif] text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Anxiety Treatment
              </h4>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Specialized treatment for generalized anxiety, panic disorder, phobias, and stress-related conditions using proven therapeutic approaches.
              </p>
            </a>

            <a href="/services/depression-counseling" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant_Garamond',serif] text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Depression Counseling
              </h4>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Compassionate support for individuals experiencing depression, helping restore hope, energy, and engagement with life.
              </p>
            </a>

            <a href="/services/trauma-therapy" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant_Garamond',serif] text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Trauma Therapy
              </h4>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Evidence-based trauma treatment including EMDR and trauma-focused CBT to help you heal from difficult past experiences.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light mb-6">
            Ready to Get Help with Psychotherapy?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Take the first step toward meaningful change. Professional, compassionate support is available to help you navigate life's challenges.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}