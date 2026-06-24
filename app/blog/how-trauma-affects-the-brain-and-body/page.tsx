import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Trauma Affects the Brain and Body | Arlene Holland',
  description: 'Understanding the neurological and physical impact of trauma is essential for healing. Learn how trauma changes the brain, affects the body, and what you can do to begin recovery.',
  keywords: 'trauma, PTSD, brain changes, trauma therapy, mental health, trauma recovery, nervous system, fight or flight',
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            How Trauma Affects the Brain and Body
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Holland Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            When we experience trauma, the impact extends far beyond our emotional state. Trauma fundamentally changes how our brain processes information, how our body responds to stress, and how we navigate the world around us. Understanding these changes isn't just academic—it's the first step toward healing and reclaiming your sense of safety and well-being.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Whether you've experienced a single traumatic event or prolonged exposure to threatening situations, your brain and body have been doing their best to protect you. The symptoms you're experiencing—hypervigilance, flashbacks, physical tension, emotional numbness—aren't signs of weakness. They're evidence of a nervous system working overtime to keep you safe. Let's explore what's happening beneath the surface and what it means for your path forward.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Happens in the Brain During Trauma
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            When you experience a traumatic event, your brain's alarm system—the amygdala—goes into overdrive. This almond-shaped structure deep in your brain is responsible for detecting threats and triggering your survival response. During trauma, the amygdala becomes hyperactive, essentially sounding alarm bells that don't easily turn off.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At the same time, your prefrontal cortex—the part of your brain responsible for rational thinking, decision-making, and emotional regulation—becomes less active. This is why during traumatic moments, you might feel frozen, unable to think clearly, or act in ways that don't seem logical in hindsight. Your brain is prioritizing immediate survival over higher-level thinking.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The hippocampus, which helps process and store memories in context, also becomes compromised. This explains why traumatic memories often feel fragmented, intrusive, or disconnected from time and place. Rather than being filed away as a normal memory, trauma can become "stuck" in a state where it feels like it's happening in the present moment.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Trauma isn't what happens to you. It's what happens inside you as a result of what happened to you."
          </blockquote>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Body Keeps the Score
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Trauma doesn't just live in your mind—it becomes encoded in your body. Your nervous system, particularly the autonomic nervous system, undergoes significant changes. This system controls involuntary functions like heart rate, breathing, and digestion, and has two primary modes: the sympathetic nervous system (fight or flight) and the parasympathetic nervous system (rest and digest).
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            After trauma, many people find themselves stuck in a state of sympathetic activation. This means your body is constantly preparing for danger, even when you're safe. You might experience:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Chronic muscle tension, particularly in the jaw, shoulders, and back</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Digestive issues, including nausea, IBS, or loss of appetite</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Sleep disturbances, including insomnia or nightmares</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Heightened startle response to sudden sounds or movements</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Chronic fatigue despite not engaging in strenuous activity</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Unexplained physical pain or illness</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Some people experience the opposite response—parasympathetic dominance or dorsal vagal shutdown. This can manifest as numbness, dissociation, feelings of being disconnected from your body, or extreme fatigue. Both responses are protective mechanisms, but when they persist long after the danger has passed, they interfere with daily functioning and quality of life.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Long-Term Changes and Adaptation
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The brain is remarkably plastic—meaning it can change and adapt throughout your life. While trauma can cause harmful changes, this plasticity also means healing is possible. However, without intervention, prolonged trauma exposure or untreated PTSD can lead to structural changes in the brain.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research has shown that chronic trauma can actually reduce the volume of the hippocampus and prefrontal cortex while increasing amygdala activity. This creates a cycle where you become more reactive to perceived threats, less able to regulate emotions, and have more difficulty forming new, safe memories that could counteract the traumatic ones.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Additionally, trauma affects cortisol—your body's primary stress hormone. Some people develop an overactive stress response with elevated cortisol, while others experience a blunted response where cortisol levels are abnormally low. Both patterns can contribute to physical health problems, including cardiovascular disease, autoimmune conditions, and metabolic issues.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is Affected by Trauma
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Trauma doesn't discriminate. It can affect anyone, regardless of age, background, or resilience. Common sources of trauma include:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Physical, emotional, or sexual abuse</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Accidents or medical emergencies</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Natural disasters or community violence</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Loss of a loved one, particularly sudden or violent death</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Combat or military service</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Childhood neglect or growing up in an unstable environment</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            It's important to note that what constitutes trauma varies from person to person. An event that one person processes and moves past might be deeply traumatizing for another, depending on factors like previous experiences, support systems, personal resilience, and the meaning they attach to the event.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Path to Healing
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that the same neuroplasticity that allowed trauma to change your brain also makes healing possible. Evidence-based treatments can help rewire neural pathways, regulate your nervous system, and restore a sense of safety in your body.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Effective approaches include:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Trauma-focused therapy</strong> such as EMDR (Eye Movement Desensitization and Reprocessing) or CPT (Cognitive Processing Therapy)</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Somatic therapies</strong> that help you reconnect with and regulate your body's responses</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Mindfulness and grounding techniques</strong> to help manage flashbacks and emotional dysregulation</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Medication</strong> when appropriate, to help manage symptoms while you engage in therapy</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Lifestyle modifications</strong> including sleep hygiene, gentle movement, and nutrition support</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Healing from trauma is not linear. There will be difficult days alongside progress. But with professional support and commitment to the process, it is absolutely possible to regain control of your nervous system, process traumatic memories, and build a life where you feel safe and present.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Taking the First Step
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you recognize yourself in these descriptions, please know that you don't have to navigate this alone. Trauma treatment is highly effective, and seeking help is an act of courage, not weakness. Your brain and body have been working hard to protect you—now it's time to give them the support they need to heal.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A trained mental health professional can assess your symptoms, help you understand your unique trauma response, and develop a treatment plan tailored to your needs. The changes trauma has caused in your brain and body can be addressed, and recovery is within reach.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Whether you're dealing with recent trauma or carrying wounds from years ago, it's never too late to begin healing. Your story doesn't end with what happened to you—it continues with how you choose to move forward from here.
          </p>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">Board-certified providers specializing in Mental Health, committed to providing compassionate, evidence-based care and education.</p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding PTSD: Signs and Treatment Options
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Learn about post-traumatic stress disorder, common symptoms, and evidence-based approaches to recovery.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium">Read More →</span>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Grounding Techniques for Anxiety and Panic
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Practical strategies to manage overwhelming emotions and return to the present moment when anxiety strikes.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium">Read More →</span>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Building Resilience After Difficult Experiences
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Discover how to strengthen your emotional resilience and develop healthy coping strategies for life's challenges.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-medium">Read More →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you begin your healing journey.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}