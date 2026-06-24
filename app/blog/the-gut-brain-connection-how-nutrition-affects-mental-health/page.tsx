import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Gut-Brain Connection: How Nutrition Affects Mental Health | Arlene Holland',
  description: 'Discover the science behind the gut-brain axis and learn how your diet impacts mood, anxiety, and mental well-being. Evidence-based nutrition strategies for better mental health.',
  keywords: 'gut-brain connection, nutrition mental health, gut health anxiety, diet and depression, microbiome mental health, nutritional psychiatry',
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
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-['Cormorant_Garamond'] text-5xl font-light leading-tight text-center mb-8">
            The Gut-Brain Connection: How Nutrition Affects Mental Health
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
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
              Have you ever noticed how your stomach feels when you're nervous or anxious? That "gut feeling" isn't just a metaphor—it's a direct reflection of the profound connection between your digestive system and your brain. Emerging research in nutritional psychiatry reveals that what we eat doesn't just fuel our bodies; it fundamentally shapes our mental and emotional well-being.
            </p>
            <p className="mb-6">
              For millions of people struggling with anxiety, depression, or mood disorders, the path to better mental health may start not just in the therapist's office, but in the kitchen. Understanding the gut-brain connection opens new possibilities for supporting mental wellness through thoughtful nutrition choices.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-['Cormorant_Garamond'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding the Gut-Brain Axis
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The gut-brain axis is a bidirectional communication network linking your gastrointestinal tract and your brain. This connection involves multiple pathways: the vagus nerve (which carries signals directly between the gut and brain), the immune system, hormones, and the trillions of microorganisms living in your digestive tract—collectively known as the gut microbiome.
            </p>
            <p className="mb-6">
              Your gut is often called the "second brain" because it contains over 100 million neurons—more than in your spinal cord. It produces approximately 90% of your body's serotonin, a neurotransmitter crucial for mood regulation. This means that the health of your digestive system directly influences your emotional state, stress response, and cognitive function.
            </p>
            <p className="mb-6">
              When your gut microbiome is balanced and diverse, it supports mental health. When it's disrupted—by poor diet, chronic stress, antibiotics, or illness—it can contribute to anxiety, depression, and other mental health challenges.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-['Cormorant_Garamond'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Science Behind Nutrition and Mental Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research in nutritional psychiatry has revealed compelling connections between dietary patterns and mental health outcomes. A landmark 2017 study published in BMC Medicine found that individuals who improved their diet showed significant reductions in depression symptoms compared to those who received social support alone.
            </p>
            <p className="mb-6">
              The mechanisms are multifaceted. Certain nutrients serve as building blocks for neurotransmitters: omega-3 fatty acids support brain cell structure, B vitamins are essential for neurotransmitter synthesis, and amino acids from protein are converted into mood-regulating chemicals like serotonin and dopamine.
            </p>
            <p className="mb-6">
              Additionally, inflammation plays a critical role. Diets high in processed foods, sugar, and unhealthy fats promote systemic inflammation, which has been linked to depression and anxiety. Conversely, anti-inflammatory diets rich in whole foods support both gut health and mental well-being.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-['Cormorant_Garamond']">
              "Your gut microbiome is as unique as your fingerprint, and nourishing it with the right foods can be a powerful tool in supporting your mental health journey."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-['Cormorant_Garamond'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Foods That Support Mental Wellness
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While no single food is a cure for mental health conditions, certain dietary patterns consistently show benefits for mood and cognitive function. The Mediterranean diet, rich in vegetables, fruits, whole grains, fish, and healthy fats, has been associated with reduced depression risk in multiple studies.
            </p>
            <p className="mb-6">
              Key nutrients and foods to prioritize include:
            </p>
          </div>

          {/* Bullet List with Checkmarks */}
          <div className="space-y-4 mb-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Omega-3 fatty acids</strong> found in fatty fish (salmon, sardines, mackerel), walnuts, and flaxseeds support brain structure and reduce inflammation</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Fermented foods</strong> like yogurt, kefir, sauerkraut, and kimchi provide beneficial probiotics that support gut microbiome diversity</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Fiber-rich foods</strong> including vegetables, fruits, legumes, and whole grains feed beneficial gut bacteria and stabilize blood sugar</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Leafy greens and vegetables</strong> provide folate and other B vitamins essential for neurotransmitter production</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Quality protein sources</strong> supply amino acids needed to create mood-regulating neurotransmitters</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Dark chocolate and berries</strong> rich in antioxidants that protect brain cells from oxidative stress</p>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="font-['Cormorant_Garamond'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Foods and Patterns to Limit
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Just as certain foods support mental health, others can undermine it. Highly processed foods, excess sugar, and artificial additives can disrupt gut microbiome balance, trigger inflammation, and destabilize blood sugar—all of which negatively impact mood and cognitive function.
            </p>
            <p className="mb-6">
              Research shows that diets high in refined carbohydrates and sugar are associated with increased depression risk. The rapid blood sugar spikes and crashes can trigger anxiety symptoms and worsen mood instability. Similarly, excessive alcohol consumption disrupts gut bacteria and interferes with neurotransmitter function.
            </p>
            <p className="mb-6">
              This doesn't mean these foods must be eliminated entirely—perfection isn't the goal. Rather, becoming mindful of how different foods affect your mood and energy can help you make choices that support your mental wellness alongside treatment and therapy.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-['Cormorant_Garamond'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Steps to Support Your Gut-Brain Connection
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Improving your nutrition doesn't require a complete dietary overhaul. Small, sustainable changes can make a meaningful difference:
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Start your day with protein and fiber to stabilize blood sugar and support sustained energy</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Add one serving of fermented food to your daily routine</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Incorporate fatty fish twice weekly or consider an omega-3 supplement</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Fill half your plate with colorful vegetables at meals</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Stay hydrated—dehydration can worsen anxiety and fatigue</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Notice how different foods affect your mood and energy levels</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Be patient—gut microbiome changes take time, often several weeks to months</p>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="font-['Cormorant_Garamond'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Nutrition as Part of Comprehensive Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              It's important to emphasize that while nutrition is a powerful tool for supporting mental health, it's not a replacement for professional treatment. Nutritional approaches work best as part of a comprehensive care plan that may include therapy, medication when appropriate, stress management, sleep hygiene, and social support.
            </p>
            <p className="mb-6">
              If you're struggling with depression, anxiety, or other mental health challenges, dietary changes alone are unlikely to resolve these conditions. However, they can complement your treatment, potentially enhancing its effectiveness and supporting your overall well-being.
            </p>
            <p className="mb-6">
              Some individuals may benefit from working with both a mental health provider and a registered dietitian who specializes in nutritional psychiatry. This integrated approach addresses mental health from multiple angles, giving you the best chance for lasting improvement.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 mt-12">
            <p className="mb-6">
              The gut-brain connection reminds us that mental health is deeply interconnected with physical health. By nourishing your body with foods that support a healthy microbiome and provide essential nutrients, you're not just feeding your body—you're caring for your mind and emotions as well.
            </p>
            <p className="mb-6">
              If you're experiencing persistent symptoms of anxiety, depression, or other mental health concerns, we encourage you to reach out for professional support. Our team at Arlene Holland specializes in compassionate, evidence-based mental health care that addresses the whole person. Together, we can develop a personalized treatment plan that supports your path to wellness.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-[var(--color-ink)] font-semibold text-lg mb-1">
              Written by the Arlene Holland Clinical Team
            </h3>
            <p className="text-[var(--color-muted)] text-sm">
              Board-certified providers specializing in Mental Health
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant_Garamond'] text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-[var(--color-light)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="font-['Cormorant_Garamond'] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Anxiety: When Worry Becomes Overwhelming
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn to recognize anxiety symptoms and discover effective strategies for managing excessive worry.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-[var(--color-light)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Wellness</div>
                <h4 className="font-['Cormorant_Garamond'] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Role of Sleep in Mental Health Recovery
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover why quality sleep is essential for emotional regulation and mental wellness.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-[var(--color-light)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Treatment</div>
                <h4 className="font-['Cormorant_Garamond'] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  What to Expect in Your First Therapy Session
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  A guide to preparing for your first appointment and understanding the therapeutic process.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you on your journey to better mental health.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}