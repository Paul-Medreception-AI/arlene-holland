import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recognizing High-Functioning Depression and Anxiety | Arlene Holland',
  description: 'Learn to identify the subtle signs of high-functioning depression and anxiety. Understand why successful people still struggle and when to seek professional help.',
  keywords: 'high-functioning depression, high-functioning anxiety, mental health, therapy, counseling, Arlene Holland',
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
          <h1 className="font-serif text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Recognizing High-Functioning Depression and Anxiety
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
              From the outside, everything looks perfect. You're successful at work, maintain relationships, show up on time, and meet your responsibilities. Yet inside, you're struggling—battling a constant undercurrent of sadness, worry, or emotional exhaustion that no one else seems to notice. This is the reality of high-functioning depression and anxiety, conditions that affect millions of accomplished, capable individuals who appear to have it all together.
            </p>
            <p className="mb-6">
              High-functioning mental health conditions are particularly challenging because they're often invisible. You've learned to mask your symptoms so well that even those closest to you may not recognize your struggle. Understanding these conditions is the first step toward getting the support you deserve.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is High-Functioning Depression and Anxiety?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              High-functioning depression, clinically known as persistent depressive disorder or dysthymia, is characterized by chronic low mood that doesn't completely disable you but significantly impacts your quality of life. Similarly, high-functioning anxiety involves persistent worry and tension that you've learned to manage well enough to maintain your daily responsibilities.
            </p>
            <p className="mb-6">
              The key distinction is that while you're able to function—go to work, care for family, maintain a social life—you're doing so while carrying an enormous emotional burden. You've become adept at compartmentalizing your feelings, pushing through fatigue, and presenting a composed exterior while internally struggling with persistent negative thoughts, worry, or emotional numbness.
            </p>
            <p className="mb-6">
              These conditions often go undiagnosed precisely because those experiencing them continue to meet external expectations. However, just because you're functioning doesn't mean you're thriving or that your struggle isn't real.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif" style={{ fontFamily: 'Cormorant, serif' }}>
            "Just because you're functioning doesn't mean you're not struggling. Your pain is valid regardless of how well you hide it."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Common Signs and Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Recognizing high-functioning mental health conditions requires looking beyond obvious signs of distress. These symptoms are often subtle and internalized:
            </p>
            
            <div className="space-y-3 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Persistent fatigue</strong> that sleep doesn't resolve, requiring significant effort to complete routine tasks</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Perfectionism and overachievement</strong> driven by fear of failure or need to prove yourself</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Constant worry</strong> about things going wrong, even when everything appears fine</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Difficulty experiencing joy</strong> or feeling emotionally numb even during positive events</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Imposter syndrome</strong> and persistent self-doubt despite evidence of competence</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Physical symptoms</strong> including headaches, muscle tension, digestive issues, or sleep disturbances</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reliance on coping mechanisms</strong> like overworking, excessive planning, or substance use to manage emotions</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Social withdrawal</strong> or feeling exhausted by interactions despite maintaining appearances</span>
              </div>
            </div>

            <p className="mt-6">
              If several of these resonate with your experience, it may be time to consider professional support. These symptoms, while manageable in the short term, can lead to burnout, physical health problems, and decreased life satisfaction over time.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Why High Achievers Are Particularly Vulnerable
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research shows that high-functioning depression and anxiety are particularly common among successful professionals, caregivers, and those with strong achievement orientations. Several factors contribute to this vulnerability:
            </p>
            <p className="mb-6">
              <strong>Internalized pressure and expectations:</strong> You may have learned early in life that your worth is tied to your productivity and accomplishments. This creates a relentless internal drive that leaves little room for rest or self-compassion.
            </p>
            <p className="mb-6">
              <strong>Adaptive coping that becomes maladaptive:</strong> The skills that helped you succeed—pushing through difficulty, compartmentalizing emotions, maintaining composure under pressure—can prevent you from acknowledging when you need help. What once served you well becomes a barrier to healing.
            </p>
            <p className="mb-6">
              <strong>Lack of external validation:</strong> Because others see your success, they rarely recognize your struggle. This can lead to feelings of isolation and the belief that you should be able to handle everything on your own.
            </p>
            <p className="mb-6">
              <strong>Fear of appearing weak:</strong> Many high-functioning individuals worry that acknowledging mental health struggles will undermine their credibility, opportunities, or relationships. This fear keeps suffering hidden and prevents access to support.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Cost of Pushing Through
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While you may be able to maintain your responsibilities despite depression or anxiety, doing so comes at a significant cost. Chronic stress and emotional suppression affect both mental and physical health in measurable ways.
            </p>
            <p className="mb-6">
              Studies demonstrate that untreated persistent depression increases risk for cardiovascular disease, weakened immune function, and chronic pain conditions. The constant activation of your stress response system—even at low levels—takes a cumulative toll on your body.
            </p>
            <p className="mb-6">
              Beyond physical health, high-functioning mental health conditions diminish quality of life. You may find yourself going through the motions without experiencing genuine connection, joy, or satisfaction. Relationships suffer as emotional availability decreases. Creativity and spontaneity are replaced by rigid routines designed to maintain control.
            </p>
            <p className="mb-6">
              Perhaps most concerning is the risk of sudden decompensation. Many individuals with high-functioning conditions maintain stability until a stressor—job loss, relationship change, health issue—overwhelms their coping capacity, leading to a more severe episode.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When and How to Seek Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You don't need to wait until you can't function to deserve support. If your internal experience is marked by persistent sadness, worry, or emotional exhaustion—even if you're meeting external obligations—professional help can make a meaningful difference.
            </p>
            <p className="mb-6">
              Effective treatment for high-functioning depression and anxiety often includes:
            </p>

            <div className="space-y-3 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Psychotherapy:</strong> Cognitive-behavioral therapy (CBT), acceptance and commitment therapy (ACT), and psychodynamic approaches help identify thought patterns, develop healthier coping strategies, and address underlying beliefs about worth and achievement</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Medication evaluation:</strong> For some individuals, antidepressants or anti-anxiety medications can provide significant relief, particularly when combined with therapy</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Lifestyle modifications:</strong> Evidence-based interventions including regular exercise, sleep hygiene, mindfulness practices, and social connection support mental health alongside professional treatment</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Boundary-setting and workload assessment:</strong> Learning to say no, delegate, and create sustainable rhythms rather than constantly operating at maximum capacity</span>
              </div>
            </div>

            <p className="mt-6">
              Finding the right provider is important. Look for a therapist who understands high-functioning presentations and won't dismiss your concerns because you appear successful. You deserve a clinician who recognizes that your ability to function doesn't negate your need for support.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Moving Toward Well-Being
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Recovery from high-functioning depression and anxiety isn't about becoming more productive or better at hiding your struggles. It's about reconnecting with yourself, experiencing genuine emotion, and building a life that feels sustainable rather than constantly effortful.
            </p>
            <p className="mb-6">
              This process requires challenging deeply held beliefs about worth, productivity, and strength. It means learning that asking for help is not weakness but wisdom. It involves grieving the fantasy of perfect control while embracing the reality of being human—complex, vulnerable, and worthy of care regardless of achievement.
            </p>
            <p className="mb-6">
              With appropriate support, most individuals with high-functioning mental health conditions experience significant improvement. You may discover that life can be more than just manageable—it can be genuinely fulfilling, marked by connection, purpose, and the capacity to experience both joy and difficulty without pretending either away.
            </p>
            <p className="mb-6">
              If you've been struggling silently, know that you're not alone and that reaching out is a sign of strength, not failure. Your ability to function doesn't diminish your need for support or the validity of your experience. Professional help can provide the tools, perspective, and compassion necessary to move from merely surviving to truly thriving.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 mt-12">
            <p className="text-[var(--color-ink)] leading-loose text-base">
              <strong>If you recognize yourself in this description,</strong> consider reaching out to a mental health professional. Early intervention can prevent more serious difficulties and help you reclaim quality of life. You deserve support, and healing is possible.
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
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Board-certified providers specializing in Mental Health, committed to evidence-based care and patient education.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>Understanding Therapy: What to Expect</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">A comprehensive guide to starting therapy and making the most of your mental health journey.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Self-Care</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>Daily Practices for Mental Wellness</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Evidence-based strategies to support your mental health every day.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Treatment Options</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>Anxiety Treatment: Finding What Works</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Explore effective treatment approaches for managing anxiety and reclaiming peace of mind.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is here to help you on your journey toward healing and well-being.</p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}