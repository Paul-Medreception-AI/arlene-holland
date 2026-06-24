import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Role of Exercise in Treating Depression and Anxiety | Arlene Holland',
  description: 'Discover how physical activity can be a powerful tool in managing depression and anxiety. Evidence-based insights on exercise as mental health treatment.',
  keywords: 'exercise and depression, physical activity anxiety, mental health treatment, exercise therapy, depression treatment, anxiety management',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
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
            The Role of Exercise in Treating Depression and Anxiety
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When you're struggling with depression or anxiety, the last thing you might feel like doing is exercising. Yet research consistently shows that physical activity can be one of the most effective tools for managing mental health conditions—sometimes rivaling the effectiveness of medication or therapy. Understanding how exercise impacts your brain chemistry and emotional well-being can empower you to take an active role in your mental health journey.
            </p>
            <p className="mb-6">
              Exercise isn't just about physical fitness or weight management. It's a powerful intervention that influences the same neurological pathways targeted by antidepressant medications, while simultaneously providing psychological benefits that enhance overall well-being. Whether you're currently in treatment or looking for additional strategies to support your mental health, incorporating movement into your routine can make a significant difference.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            How Exercise Affects Your Brain Chemistry
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Physical activity triggers a cascade of neurochemical changes that directly impact mood regulation. When you exercise, your brain increases production of endorphins—natural mood elevators often called "feel-good" chemicals. But the benefits go far beyond this immediate rush.
            </p>
            <p className="mb-6">
              Exercise also stimulates the production of neurotransmitters like serotonin, dopamine, and norepinephrine, the same chemicals targeted by many antidepressant medications. Regular physical activity increases brain-derived neurotrophic factor (BDNF), a protein that promotes the growth of new brain cells and protects existing ones, particularly in the hippocampus—an area associated with mood regulation and memory.
            </p>
            <p className="mb-6">
              Additionally, exercise reduces inflammation throughout the body, including in the brain, which researchers increasingly recognize as a contributing factor to depression and anxiety. It also helps regulate the body's stress response system, making you more resilient to future stressors.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Evidence: What Research Tells Us
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Decades of research support exercise as an effective treatment for depression and anxiety. A landmark study published in the American Journal of Psychiatry found that regular exercise can prevent future episodes of depression, with just one hour of exercise per week providing significant protective effects.
            </p>
            <p className="mb-6">
              For anxiety disorders, research shows that both aerobic exercise and strength training can significantly reduce symptoms. A meta-analysis examining over 40 studies found that exercise was as effective as cognitive behavioral therapy for reducing anxiety symptoms in some populations.
            </p>
            <p className="mb-6">
              The intensity and duration matter less than consistency. While high-intensity workouts can provide immediate mood benefits, even moderate activities like walking, swimming, or gardening—when done regularly—show substantial mental health benefits. Studies suggest that 150 minutes of moderate exercise per week (or 75 minutes of vigorous exercise) provides optimal benefits, though any amount is better than none.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              "Exercise is not just about physical health—it's one of the most powerful interventions we have for mental wellness. The key is finding movement you enjoy and can sustain."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Psychological Benefits Beyond Brain Chemistry
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While the neurochemical effects of exercise are powerful, the psychological benefits are equally important. Exercise provides structure and routine, which can be particularly valuable when depression disrupts normal daily patterns. Completing a workout—no matter how brief—offers a sense of accomplishment that counters the feelings of helplessness often associated with depression.
            </p>
            <p className="mb-6">
              Physical activity also serves as a healthy coping mechanism, providing a constructive outlet for stress, frustration, and anxious energy. It offers a temporary distraction from rumination and negative thought patterns, giving your mind a break from the cycle of worry or depressive thinking.
            </p>
            <p className="mb-6">
              Group exercise activities add a social component that can reduce isolation—a common factor in depression. Whether it's a walking group, fitness class, or team sport, these activities create opportunities for connection and support. Even exercising outdoors combines movement with nature exposure, which research shows provides additional mental health benefits.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Getting Started: Overcoming Common Barriers
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Starting an exercise routine when you're experiencing depression or anxiety can feel overwhelming. The lack of energy, motivation, and confidence that accompany these conditions creates significant barriers. Here's how to address them:
            </p>
            
            <div className="my-6 space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Start incredibly small:</strong> Even five minutes counts. A short walk around the block or gentle stretching can initiate the habit without feeling overwhelming.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Choose activities you genuinely enjoy:</strong> Exercise doesn't have to mean the gym. Dancing, gardening, swimming, or playing with a pet all count.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Schedule it like an appointment:</strong> Treat exercise as a non-negotiable part of your treatment plan, just like taking medication or attending therapy.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Lower your expectations:</strong> Some movement is always better than no movement. Give yourself permission to do less on difficult days.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Find an accountability partner:</strong> Exercising with someone else increases adherence and adds social support.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Track your mood before and after:</strong> Noticing the positive effects reinforces the habit and provides motivation.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Exercise as Part of a Comprehensive Treatment Plan
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While exercise is a powerful tool, it's most effective when integrated into a comprehensive treatment approach. For moderate to severe depression and anxiety, exercise works best alongside other evidence-based treatments such as therapy, medication, and lifestyle modifications.
            </p>
            <p className="mb-6">
              Think of exercise as one essential component of your mental health toolkit, not a replacement for professional care. Some people find that regular exercise allows them to reduce medication dosages or enhances the effectiveness of therapy, but these decisions should always be made in consultation with your healthcare provider.
            </p>
            <p className="mb-6">
              It's also important to recognize that exercise may not feel immediately beneficial when you're in a depressive episode or experiencing acute anxiety. The effects build over time with consistency. Most research suggests you'll begin noticing mood improvements after 2-4 weeks of regular activity, with more substantial benefits developing over months.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Types of Exercise That Help Most
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research shows benefits from various types of physical activity, and the best choice is the one you'll actually do consistently. That said, different forms of exercise offer unique advantages:
            </p>
            <p className="mb-6">
              <strong>Aerobic exercise</strong> (walking, running, cycling, swimming) shows the most robust evidence for treating depression and anxiety. It elevates heart rate and produces the neurochemical changes most associated with mood improvement.
            </p>
            <p className="mb-6">
              <strong>Strength training</strong> has emerged as equally effective in recent studies, offering the additional benefit of building confidence and a sense of physical empowerment.
            </p>
            <p className="mb-6">
              <strong>Mind-body practices</strong> like yoga, tai chi, and qigong combine physical movement with mindfulness and breathing techniques, addressing both the physical and cognitive symptoms of anxiety and depression.
            </p>
            <p className="mb-6">
              <strong>Outdoor activities</strong> provide the added benefit of nature exposure and vitamin D from sunlight, both of which independently support mental health.
            </p>
            <p className="mb-6">
              The key is finding what feels sustainable for your lifestyle, physical abilities, and preferences. Variety can also help maintain interest and engagement over time.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Exercise is a powerful, accessible tool for managing depression and anxiety, backed by extensive research and clinical experience. While it requires effort—especially when you're struggling—the benefits extend far beyond mental health to enhance overall quality of life, physical health, and resilience.
            </p>
            <p className="mb-6">
              If you're experiencing symptoms of depression or anxiety, remember that you don't have to navigate this alone. Professional support can help you develop a comprehensive treatment plan that incorporates exercise alongside other evidence-based interventions tailored to your unique needs.
            </p>
            <p className="font-semibold">
              Our team at Arlene Holland specializes in treating depression and anxiety through evidence-based approaches. We can help you create a personalized plan that includes exercise and other proven strategies. <a href="/contact" className="text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors">Reach out today</a> to take the first step toward feeling better.
            </p>
          </div>
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
            <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Mental Health, dedicated to providing evidence-based education and compassionate care.</p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="text-xl font-light text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Understanding Cognitive Behavioral Therapy for Anxiety
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Learn how CBT can help you identify and change thought patterns that contribute to anxiety and worry.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
              </div>
              <h4 className="text-xl font-light text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Medication vs. Therapy: Finding the Right Treatment Path
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Explore the differences between medication and therapy for mental health, and how to decide what's right for you.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-light text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Sleep and Mental Health: Breaking the Cycle
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Discover the powerful connection between sleep quality and mental health, plus practical strategies for better rest.
              </p>
              <span className="text-[var(--color-primary)] text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
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
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help you develop a personalized treatment plan.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}