import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding OCD: More Than Just Being Organized | Arlene Holland',
  description: 'Learn about Obsessive-Compulsive Disorder beyond common misconceptions. Evidence-based information about symptoms, impact, and treatment options from mental health experts.',
  keywords: 'OCD, obsessive compulsive disorder, mental health, anxiety disorders, intrusive thoughts, compulsions, OCD treatment, mental health awareness',
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
            <span className="text-white/60">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding OCD: More Than Just Being Organized
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
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-12">
            <p className="mb-6">
              "I'm so OCD about my desk being clean." "She's totally OCD about organizing her closet." We've all heard statements like these, often said casually in everyday conversation. But Obsessive-Compulsive Disorder is far more than a personality quirk or preference for tidiness. It's a serious mental health condition that affects millions of people worldwide, causing significant distress and interfering with daily life in profound ways.
            </p>
            <p>
              Understanding what OCD really is—and what it isn't—is crucial not only for those who live with it, but for all of us who want to create a more informed and compassionate society. Let's explore the reality of OCD beyond the stereotypes.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What OCD Actually Is
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Obsessive-Compulsive Disorder is a chronic mental health condition characterized by two main components: obsessions and compulsions. Obsessions are intrusive, unwanted thoughts, images, or urges that cause significant anxiety or distress. These aren't just everyday worries—they're persistent, distressing, and often feel impossible to control.
            </p>
            <p className="mb-4">
              Compulsions are repetitive behaviors or mental acts that a person feels driven to perform in response to an obsession. These actions are aimed at reducing anxiety or preventing a feared outcome, but they provide only temporary relief and often become time-consuming rituals that interfere with normal activities.
            </p>
            <p>
              The National Institute of Mental Health estimates that OCD affects approximately 2-3% of the population, making it more common than many people realize. It typically begins in adolescence or early adulthood, though it can develop at any age.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Beyond the Stereotypes: Common OCD Themes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-6">
              While organization and cleanliness can be part of OCD for some individuals, the disorder manifests in many different ways. Here are some common—but less talked about—themes:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Contamination fears:</strong> Intense fear of germs, illness, or environmental contaminants that goes far beyond normal health consciousness</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Harm obsessions:</strong> Unwanted violent or aggressive thoughts that are deeply distressing to the person experiencing them</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Symmetry and order:</strong> Need for things to feel "just right," often accompanied by repeating behaviors</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Forbidden thoughts:</strong> Intrusive thoughts about religion, sexuality, or morality that conflict with the person's values</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Checking behaviors:</strong> Repeatedly checking locks, appliances, or other items to prevent disaster</span>
              </li>
            </ul>
            <p>
              It's important to note that people with OCD are typically horrified by their intrusive thoughts and recognize them as irrational—but feel powerless to stop them. This creates a painful cycle of anxiety and temporary relief-seeking.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 animate-fade-up">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              "OCD is not about being neat or particular. It's about being trapped in a cycle of distressing thoughts and feeling compelled to perform rituals to make them stop—even when you know it doesn't make logical sense."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Real Impact on Daily Life
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              For those living with OCD, the condition can be exhausting and isolating. Obsessions and compulsions can consume hours each day, making it difficult to maintain relationships, perform at work or school, or engage in activities that once brought joy.
            </p>
            <p className="mb-4">
              People with OCD often experience significant shame about their symptoms, which can delay seeking treatment. They may hide their rituals from loved ones or avoid situations that trigger their obsessions, leading to social withdrawal and diminished quality of life.
            </p>
            <p>
              Research shows that OCD is often accompanied by other mental health conditions, including depression, other anxiety disorders, and eating disorders. The chronic stress of living with untreated OCD can also impact physical health over time.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Treatment: There Is Hope
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              The good news is that OCD is highly treatable. The most effective treatment approach is a specific type of cognitive-behavioral therapy called Exposure and Response Prevention (ERP). This treatment involves gradually exposing individuals to their feared situations or thoughts while helping them resist the urge to perform compulsions.
            </p>
            <p className="mb-4">
              While this might sound intimidating, ERP is conducted in a supportive, controlled manner with a trained therapist. Over time, the brain learns that the feared outcomes don't occur, and anxiety naturally decreases without performing rituals.
            </p>
            <p className="mb-6">
              Medication can also be helpful, particularly selective serotonin reuptake inhibitors (SSRIs), which are often used in combination with therapy. The most effective treatment plans are typically individualized, taking into account the specific symptoms, severity, and personal circumstances of each individual.
            </p>
            <p>
              Studies show that with proper treatment, many people with OCD experience significant symptom reduction and improved quality of life. Recovery is possible, and people can learn to manage their symptoms effectively.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            How to Support Someone with OCD
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-6">
              If someone you care about has OCD, your support can make a meaningful difference in their recovery journey:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Educate yourself:</strong> Understanding OCD helps you respond with empathy rather than frustration</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Avoid accommodating rituals:</strong> While done with good intentions, participating in compulsions can reinforce the disorder</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Encourage professional treatment:</strong> Gently support them in seeking help from a qualified mental health provider</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Be patient:</strong> Recovery takes time, and there may be setbacks along the way</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Watch your language:</strong> Avoid using "OCD" casually to describe minor preferences</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Taking the First Step
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              If you recognize yourself in this description, know that you're not alone, and what you're experiencing is real and valid. OCD is not a character flaw or something you can simply "get over" through willpower. It's a medical condition that responds to professional treatment.
            </p>
            <p className="mb-4">
              The first step is often the hardest, but reaching out for help is a sign of strength, not weakness. A qualified mental health professional experienced in treating OCD can provide an accurate diagnosis and develop a personalized treatment plan that addresses your specific symptoms and goals.
            </p>
            <p>
              Many people who seek treatment for OCD report significant improvements in their symptoms and quality of life. With the right support and evidence-based interventions, it's possible to break free from the exhausting cycle of obsessions and compulsions and reclaim your life.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-4">
              OCD is a complex condition that deserves understanding, not dismissal or casual references. By learning more about what it really means to live with OCD, we can create a more supportive environment for those who are struggling and encourage more people to seek the help they need and deserve.
            </p>
            <p className="font-semibold">
              If you or someone you love is experiencing symptoms of OCD, professional help is available. Our team specializes in evidence-based treatments for OCD and related conditions, and we're here to support you on your journey to recovery.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start animate-fade-up shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Mental Health, committed to providing evidence-based information and compassionate care to our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-center mb-12 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Mental Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Anxiety: When Worry Becomes Overwhelming
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about anxiety disorders, their symptoms, and evidence-based treatment approaches.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Treatment</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect in Therapy: A First-Timer's Guide
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Starting therapy can feel intimidating. Here's what you need to know to feel prepared.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Self-Care</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Building Resilience: Mental Health Strategies for Daily Life
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Practical strategies for managing stress and building emotional resilience.
                </p>
              </div>
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
            Our team is here to help you on your journey to better mental health.
          </p>
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