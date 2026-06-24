import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfectionism Treatment in Holland | Arlene Holland Mental Health',
  description: 'Expert perfectionism treatment in Holland. Board-certified care for maladaptive perfectionism, anxiety, and related mental health concerns. Telehealth available.',
  keywords: 'perfectionism treatment Holland, perfectionism therapy, maladaptive perfectionism, perfectionism counseling Holland, mental health Holland',
  openGraph: {
    title: 'Perfectionism Treatment in Holland | Arlene Holland',
    description: 'Compassionate, evidence-based treatment for perfectionism in Holland. Learn to set healthy standards without self-criticism.',
    url: 'https://arleneholland.net/conditions/perfectionism',
    type: 'website',
  }
}

export default function PerfectionismPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Perfectionism</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Perfectionism Treatment in Holland
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Perfectionism can drive achievement but also fuel anxiety, burnout, and chronic dissatisfaction. Our specialized treatment helps you set healthy standards, embrace self-compassion, and find peace with being human.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-8 text-[var(--color-ink)]">
            Understanding Perfectionism
          </h2>
          
          <div className="prose prose-lg max-w-none text-[var(--color-ink)] space-y-6 leading-relaxed">
            <p>
              Perfectionism is far more than simply having high standards or striving for excellence. It's a psychological pattern characterized by setting excessively high performance standards, engaging in overly critical self-evaluations, and experiencing intense fear of failure or making mistakes. While healthy striving involves setting challenging but realistic goals and feeling satisfaction from effort and growth, maladaptive perfectionism creates a relentless internal critic that is never satisfied, constantly moving the goalposts, and leaving individuals feeling inadequate no matter what they achieve. Research indicates that clinical perfectionism affects approximately 30% of the population to some degree, with higher rates among high-achieving professionals, students, and individuals with anxiety or eating disorders. The impact on daily life can be profound—perfectionism contributes to procrastination (avoiding tasks for fear of not doing them perfectly), burnout (exhausting oneself trying to meet impossible standards), relationship strain (being overly critical of self and others), and significantly reduced quality of life despite outward success.
            </p>
            
            <p>
              The causes of perfectionism are multifaceted, typically developing through a combination of genetic predisposition, early childhood experiences, and environmental factors. Many perfectionists grew up in households where love and approval felt conditional on achievement, where mistakes were criticized rather than seen as learning opportunities, or where a parent modeled perfectionistic behavior. Trauma, particularly experiences of shame or humiliation, can also contribute to developing rigid perfectionism as a protective strategy. Cultural factors play a significant role as well—achievement-oriented societies, social media comparison culture, and increasingly competitive academic and professional environments can all reinforce perfectionistic thinking patterns. Neurobiological research suggests that perfectionism is associated with heightened activity in brain regions related to error detection and self-monitoring, as well as differences in dopamine regulation that affect reward processing and motivation. Risk factors include having a parent with perfectionism or anxiety disorders, experiencing early academic pressure, growing up with critical or controlling caregivers, and personality traits such as high conscientiousness combined with neuroticism.
            </p>
            
            <p>
              Professional treatment for perfectionism matters because this pattern rarely improves on its own and often worsens over time, leading to serious mental health consequences including anxiety disorders, depression, obsessive-compulsive disorder, eating disorders, and even suicidal ideation in severe cases. Many people with perfectionism don't seek help because they view their standards as necessary for success or even as a positive trait, not recognizing the psychological cost they're paying. However, research consistently shows that perfectionism actually impairs performance and creativity over time due to increased anxiety, decision paralysis, and avoidance behaviors. Evidence-based treatment can help you distinguish between healthy striving and destructive perfectionism, develop self-compassion, challenge cognitive distortions about mistakes and failure, build tolerance for imperfection, and ultimately achieve more while suffering less. With proper treatment, individuals learn that they can maintain their values and ambitions while releasing the harsh self-judgment that has been weighing them down. Early intervention is particularly important because long-standing perfectionism becomes more deeply ingrained in identity and harder to shift, and because the associated mental health conditions can become more severe and complex without treatment.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Perfectionism
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Emotional & Cognitive Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Harsh Self-Criticism</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Engaging in relentless negative self-talk and being unable to forgive yourself for even minor mistakes or perceived failures.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">All-or-Nothing Thinking</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Viewing outcomes as either perfect successes or complete failures, with no middle ground or recognition of partial success.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Fear of Failure or Judgment</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Experiencing intense anxiety about making mistakes, being criticized, or not meeting others' expectations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Never Feeling Good Enough</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Chronic dissatisfaction with accomplishments and an inability to feel proud or celebrate achievements.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Defensive About Criticism</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Reacting intensely to feedback or perceived criticism because your self-worth feels dependent on being perfect.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Rumination Over Mistakes</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Replaying errors or imperfections repeatedly in your mind, unable to let go of past missteps.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Impostor Syndrome</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Feeling like a fraud despite evidence of competence, attributing success to luck rather than ability.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Behavioral & Physical Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Procrastination</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Avoiding starting or completing tasks because of fear that you won't be able to do them perfectly.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Excessive Checking & Redoing Work</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Spending disproportionate time reviewing, editing, or redoing tasks to eliminate any possibility of error.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Difficulty Delegating</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Struggling to trust others with tasks because you believe only you can do them correctly.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Overworking & Burnout</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Working excessively long hours, sacrificing self-care, and experiencing physical and emotional exhaustion.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Avoiding New Challenges</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Turning down opportunities where success isn't guaranteed to protect yourself from potential failure.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Relationship Difficulties</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Experiencing conflict due to being overly critical of others or having difficulty with intimacy and vulnerability.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Physical Symptoms of Stress</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Experiencing headaches, muscle tension, digestive issues, insomnia, or other stress-related physical problems.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Controlling Behaviors</div>
                    <p className="text-[var(--color-muted)] leading-relaxed">Attempting to control environments, schedules, or other people to minimize uncertainty and potential mistakes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto leading-relaxed">
            If you recognize these signs in yourself, help is available. Early treatment leads to better outcomes and can prevent perfectionism from limiting your potential and happiness. You don't have to maintain impossible standards to be worthy of care and success.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-16 text-[var(--color-ink)] text-center">
            How We Treat Perfectionism
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough evaluation to understand your specific perfectionism patterns, their origins, and how they're affecting your life. We assess for co-occurring conditions like anxiety or depression, explore your personal history and values, and identify both the costs and perceived benefits of your perfectionism. This assessment helps us create a treatment plan tailored to your unique situation and goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your treatment plan integrates evidence-based therapies specifically effective for perfectionism, including cognitive-behavioral therapy to challenge distorted thinking patterns and self-compassion training to develop a kinder relationship with yourself. We establish realistic treatment goals, create behavioral experiments to test your beliefs about perfection, and develop skills for tolerating discomfort and uncertainty. Progress is monitored regularly and adjustments made as needed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Care & Support</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Recovery from perfectionism is a gradual process that requires sustained support. We provide regular therapy sessions to practice new skills, process setbacks without self-criticism, and celebrate progress. As you improve, we work on relapse prevention strategies and help you build a support system beyond therapy. Long-term maintenance focuses on sustaining healthy striving while preventing a return to destructive perfectionism patterns.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Evidence-Based Treatment Modalities</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Our approach to perfectionism treatment draws on several proven therapeutic methods. <strong>Cognitive Behavioral Therapy (CBT)</strong> helps identify and challenge the distorted thinking patterns that maintain perfectionism, such as catastrophizing about mistakes or believing your worth depends on achievement. <strong>Acceptance and Commitment Therapy (ACT)</strong> teaches psychological flexibility—the ability to pursue meaningful goals while accepting discomfort and imperfection along the way.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              <strong>Compassion-Focused Therapy</strong> is particularly effective for perfectionism, helping you develop self-compassion as an alternative to harsh self-criticism. We also incorporate <strong>mindfulness practices</strong> to increase present-moment awareness and reduce rumination. <strong>Exposure-based interventions</strong> involve gradually facing feared situations, such as submitting imperfect work or making deliberate mistakes in low-stakes situations, to learn that imperfection is tolerable and doesn't lead to catastrophe.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              While medication is not typically the primary treatment for perfectionism itself, it may be helpful when significant co-occurring anxiety or depression is present. SSRIs can reduce the anxiety that fuels perfectionism and make it easier to engage in therapy. Any medication decisions are made collaboratively based on your specific needs and treatment response.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Why Choose Arlene Holland for Perfectionism Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified psychiatric mental health nurse practitioner with specialized training in treating perfectionism and related anxiety disorders.
              </p>
            </div>

            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Treatment tailored to your unique perfectionism patterns, values, and life circumstances—not a one-size-fits-all protocol.
              </p>
            </div>

            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Convenient, confidential virtual appointments that fit your schedule—access expert care from the comfort of your home.
              </p>
            </div>

            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Specialized Experience</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Extensive experience helping high-achievers, professionals, and students overcome perfectionism while maintaining excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-5xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Evaluation <span className="text-[var(--color-muted)] font-normal text-lg">(Week 1)</span></h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During your initial 60-minute evaluation, we'll explore your perfectionism patterns, how they developed, and their current impact on your life. You'll share your experiences with self-criticism, fear of failure, procrastination, or other perfectionism-related challenges. We'll discuss your goals for treatment—whether that's reducing anxiety, improving work-life balance, building self-compassion, or something else. This collaborative conversation establishes the foundation for your personalized treatment plan and helps you feel understood and validated.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-5xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Treatment Begins <span className="text-[var(--color-muted)] font-normal text-lg">(Weeks 2-4)</span></h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  In the early weeks, we focus on psychoeducation about perfectionism and building foundational skills. You'll learn to recognize perfectionist thoughts as they arise, understand the cognitive distortions underlying them, and begin practicing self-compassion. We'll introduce behavioral experiments—small, manageable challenges to your perfectionist beliefs, such as intentionally leaving a minor task imperfect or asking for help. This phase involves weekly therapy sessions and between-session practice. Many people experience some initial relief simply from understanding that perfectionism is a common, treatable pattern rather than an unchangeable personality trait.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-5xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Progress Review <span className="text-[var(--color-muted)] font-normal text-lg">(Months 2-3)</span></h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As treatment progresses, you'll deepen your practice of challenging perfectionist beliefs and increasing behavioral flexibility. We'll work on more significant exposure tasks, develop strategies for specific situations where perfectionism is most problematic, and address any underlying fears or core beliefs driving the pattern. This is often when people begin noticing meaningful changes—reduced anxiety, less procrastination, improved relationships, and greater life satisfaction. Progress isn't always linear, and we'll work together to understand and learn from any setbacks. Session frequency may be adjusted based on your progress and needs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-5xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-Term Management <span className="text-[var(--color-muted)] font-normal text-lg">(Ongoing)</span></h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Recovery from perfectionism is an ongoing process of strengthening healthier patterns and preventing relapse. As symptoms improve, we'll space out sessions while maintaining accountability and support. You'll develop a personalized relapse prevention plan, identifying early warning signs and coping strategies. The goal isn't to eliminate all high standards or stop striving—it's to cultivate what researchers call "healthy perfectionism" or "adaptive striving," where you pursue excellence without harsh self-judgment, can tolerate imperfection, and derive satisfaction from the process rather than only from flawless outcomes. Many clients transition to monthly maintenance sessions or as-needed support.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg border border-[var(--color-border)]">
            <p className="text-[var(--color-muted)] leading-relaxed">
              <strong className="text-[var(--color-ink)]">Timeline Expectations:</strong> Most people begin experiencing relief within 4-8 weeks and notice significant improvement within 3-6 months of consistent treatment. However, deeply ingrained perfectionism patterns may take longer to shift. The duration of treatment varies based on symptom severity, co-occurring conditions, and individual factors. Be patient with yourself—overcoming perfectionism is itself a practice in accepting imperfect progress.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Perfectionism
          </h2>
          
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <span className="text-lg font-semibold text-[var(--color-ink)]">How long does perfectionism treatment take?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Treatment duration varies significantly based on the severity and duration of your perfectionism, co-occurring mental health conditions, and how quickly you're able to implement new patterns. Many people notice meaningful improvement within 3-6 months of consistent weekly therapy, but deeper personality-level change often takes 6-12 months or longer. Unlike medication that might produce rapid symptom relief, addressing perfectionism involves gradually shifting long-standing thought patterns and behaviors. The good news is that even partial improvement can significantly enhance quality of life, and skills learned in treatment continue benefiting you long after therapy ends.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <span className="text-lg font-semibold text-[var(--color-ink)]">Is medication required for perfectionism treatment?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Medication is not typically required for perfectionism itself, and psychotherapy is considered the first-line treatment. However, medication may be beneficial when perfectionism co-occurs with moderate to severe anxiety, depression, or OCD, or when these conditions interfere with your ability to engage in therapy. SSRIs or SNRIs can reduce the anxiety that fuels perfectionist behaviors and make it easier to practice new thought patterns and take behavioral risks. The decision to use medication is always collaborative and based on your specific symptoms, preferences, and treatment response. Many people successfully overcome perfectionism through therapy alone, while others find that a combination approach works best.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <span className="text-lg font-semibold text-[var(--color-ink)]">Will treatment make me less successful or ambitious?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  This is one of the most common concerns people have when considering treatment—and it's completely understandable. Many perfectionists fear that without harsh self-criticism and impossibly high standards, they'll become lazy or mediocre. However, research and clinical experience show the opposite: addressing maladaptive perfectionism typically <em>enhances</em> performance and achievement. When you're no longer paralyzed by fear of failure, spending excessive time on low-priority tasks, or avoiding challenges where success isn't guaranteed, you become more productive, creative, and willing to take strategic risks. Treatment doesn't eliminate your drive or standards—it helps you pursue excellence more effectively, with less suffering and greater satisfaction.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <span className="text-lg font-semibold text-[var(--color-ink)]">Does insurance cover perfectionism treatment?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Insurance coverage depends on your specific plan and how your condition is diagnosed. Perfectionism itself isn't a DSM diagnosis, but it's often treated under diagnoses such as generalized anxiety disorder, adjustment disorder, obsessive-compulsive personality traits, or related conditions that are covered by insurance. We work with most major insurance plans and will help you understand your coverage during the initial consultation. If you're paying out-of-pocket, we offer competitive self-pay rates. Many people find that investing in treatment for perfectionism provides significant return through improved productivity, reduced healthcare costs from stress-related conditions, and enhanced quality of life.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <span className="text-lg font-semibold text-[var(--color-ink)]">What if therapy isn't working or I'm not making progress?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Feeling stuck in treatment can be frustrating, but it's important to address rather than suffer in silence. Several factors might explain limited progress: perfectionism about therapy itself (not doing therapy "perfectly"), avoidance of uncomfortable exposure exercises, co-occurring conditions that need attention, or simply needing more time for deeply ingrained patterns to shift. We regularly monitor progress and actively discuss what's working and what isn't. If standard approaches aren't helping, we'll adjust the treatment plan, consider whether additional evaluation is needed, or explore whether a different therapeutic modality might be more effective. Your feedback is essential to this process—speaking up about concerns is actually practicing the vulnerability and imperfection that treatment cultivates.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <span className="text-lg font-semibold text-[var(--color-ink)]">Can telehealth work effectively for perfectionism treatment?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Yes, telehealth is highly effective for perfectionism treatment and offers several advantages. The therapy techniques used for perfectionism—cognitive restructuring, behavioral experiments, self-compassion practice, and exposure work—translate very well to virtual sessions. Many clients actually find telehealth preferable because it eliminates commute time (which perfectionists often struggle to justify), allows therapy to fit more easily into busy schedules, and provides privacy and comfort that can facilitate vulnerability. You can still receive the same quality of evidence-based care through secure video sessions. The only situations where in-person treatment might be preferable are if perfectionism co-occurs with severe conditions requiring close monitoring or if you simply have a strong personal preference for face-to-face interaction.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl md:text-4xl font-light mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/conditions/anxiety" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Anxiety Disorders</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Perfectionism and anxiety often occur together, with fear of failure and judgment fueling both conditions.
              </p>
              <span className="text-[var(--color-primary)] font-medium hover:underline">Learn more →</span>
            </a>

            <a href="/conditions/depression" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Depression</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Chronic perfectionism can lead to depression when impossible standards result in repeated feelings of failure and inadequacy.
              </p>
              <span className="text-[var(--color-primary)] font-medium hover:underline">Learn more →</span>
            </a>

            <a href="/conditions/ocd" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">OCD</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Obsessive-compulsive disorder shares features with perfectionism including intrusive thoughts, rigid standards, and checking behaviors.
              </p>
              <span className="text-[var(--color-primary)] font-medium hover:underline">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-4">
            Get Help for Perfectionism Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-95">
            You don't have to face perfectionism alone. Our team is ready to help you find balance, self-compassion, and peace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/conditions" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors text-lg"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}