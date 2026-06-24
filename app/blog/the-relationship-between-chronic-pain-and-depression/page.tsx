import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Relationship Between Chronic Pain and Depression | Arlene Holland',
  description: 'Explore the complex connection between chronic pain and depression. Learn how these conditions influence each other and discover evidence-based strategies for managing both.',
  keywords: 'chronic pain, depression, mental health, pain management, psychological health, chronic illness, pain and mood, mental health treatment',
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
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Relationship Between Chronic Pain and Depression
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
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Living with chronic pain is more than just a physical challenge—it profoundly affects every aspect of your emotional and psychological well-being. If you've been managing persistent pain and notice yourself feeling increasingly sad, hopeless, or disconnected, you're not alone. Research shows that chronic pain and depression share a deeply intertwined relationship, with each condition capable of intensifying the other in what can feel like an inescapable cycle.
            </p>
            <p className="mb-6">
              Understanding this connection is the first step toward breaking free from it. When we recognize how physical pain influences our mental health—and vice versa—we can develop more comprehensive, effective strategies for healing both body and mind.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Understanding the Pain-Depression Connection
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Chronic pain is defined as pain that persists for three months or longer, often continuing beyond the expected healing time of an injury or illness. It can arise from conditions like arthritis, fibromyalgia, back injuries, migraines, or nerve damage. Unlike acute pain that serves as a warning signal, chronic pain becomes a constant companion that reshapes daily life.
            </p>
            <p className="mb-6">
              Depression, meanwhile, is a mood disorder characterized by persistent feelings of sadness, loss of interest in activities, changes in sleep and appetite, and difficulty concentrating. When these two conditions coexist, they create a bidirectional relationship: chronic pain increases the risk of developing depression, and depression can amplify the perception and intensity of pain.
            </p>
            <p className="mb-6">
              Studies indicate that approximately 30-50% of people with chronic pain also experience depression. This overlap isn't coincidental—both conditions share common neurological pathways and neurotransmitters, particularly serotonin and norepinephrine, which regulate both mood and pain perception.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            How Chronic Pain Leads to Depression
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              The pathway from chronic pain to depression is multifaceted. Persistent pain creates numerous life changes that can erode mental health over time:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Loss of independence:</strong> Difficulty performing daily activities can lead to feelings of helplessness and frustration</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Social isolation:</strong> Pain may prevent participation in social activities, leading to loneliness and disconnection</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sleep disturbances:</strong> Pain often disrupts sleep, which is closely linked to mood regulation</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Career impact:</strong> Chronic pain can affect work performance or force career changes, creating financial stress and loss of identity</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Chronic stress:</strong> The constant burden of managing pain activates stress response systems that can dysregulate mood</span>
              </li>
            </ul>
            <p className="mb-6">
              Over time, these accumulated losses and limitations can overwhelm even the most resilient individuals, making depression a natural psychological response to ongoing physical suffering.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[family-name:var(--font-cormorant)] animate-fade-up">
            "Pain is inevitable, but suffering is optional. When we address both the physical and emotional dimensions of chronic pain, we open pathways to genuine healing and improved quality of life."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            How Depression Intensifies Pain
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              The relationship works in the opposite direction as well. Depression doesn't just coexist with pain—it can make pain feel worse. This happens through several mechanisms:
            </p>
            <p className="mb-6">
              Depression alters brain chemistry in ways that lower pain thresholds. The same neurotransmitter imbalances that contribute to low mood also reduce the brain's ability to modulate pain signals. Essentially, depression makes you more sensitive to pain and less able to cope with it.
            </p>
            <p className="mb-6">
              Additionally, depression often leads to behavioral changes that exacerbate pain. Reduced physical activity causes deconditioning and stiffness. Poor sleep hygiene worsens both mood and pain perception. Neglect of self-care, including nutrition and medication adherence, can allow pain conditions to deteriorate.
            </p>
            <p className="mb-6">
              Cognitive factors also play a role. Depression is characterized by negative thinking patterns—catastrophizing, hopelessness, and rumination—which can amplify the subjective experience of pain. When you believe your pain will never improve, your brain may actually process pain signals more intensely.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            The Neurological Overlap
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Modern neuroscience reveals why pain and depression are so intimately connected. Brain imaging studies show that chronic pain and depression activate overlapping regions of the brain, including the prefrontal cortex, amygdala, and anterior cingulate cortex—areas involved in emotional regulation, stress response, and pain processing.
            </p>
            <p className="mb-6">
              Both conditions involve dysregulation of the same neurotransmitter systems. Serotonin and norepinephrine don't just influence mood—they're also key players in the body's natural pain-suppression pathways. When these chemicals are out of balance, both emotional well-being and pain tolerance suffer.
            </p>
            <p className="mb-6">
              This neurological overlap explains why certain antidepressants, particularly SNRIs (serotonin-norepinephrine reuptake inhibitors) and tricyclic antidepressants, can be effective for treating both depression and certain chronic pain conditions. They address the shared biological foundations of both experiences.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Breaking the Cycle: Integrated Treatment Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              The good news is that understanding this connection opens doors to more effective treatment. Rather than addressing pain and depression as separate issues, integrated approaches target both simultaneously:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cognitive-behavioral therapy (CBT):</strong> Helps identify and change thought patterns that amplify both pain and depression</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Mindfulness-based stress reduction:</strong> Teaches acceptance and present-moment awareness to reduce suffering associated with pain</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Medication management:</strong> Carefully selected antidepressants or other medications that address both conditions</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Physical therapy and movement:</strong> Gentle, progressive exercise improves physical function while releasing mood-boosting endorphins</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sleep hygiene interventions:</strong> Improving sleep quality benefits both pain management and mood stabilization</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Social support and connection:</strong> Reducing isolation through support groups or therapy addresses a key risk factor for both conditions</span>
              </li>
            </ul>
            <p className="mb-6">
              Research consistently shows that treating depression improves pain outcomes, and effective pain management reduces depressive symptoms. The most successful approaches recognize that healing requires attention to the whole person—body, mind, and social context.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              If you're experiencing chronic pain alongside symptoms of depression, professional support can make a significant difference. Consider reaching out if you notice:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent sadness, hopelessness, or loss of interest in activities you once enjoyed</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty managing daily activities due to pain or mood</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sleep disturbances, appetite changes, or fatigue beyond what pain alone explains</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Withdrawal from social connections and isolation</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Thoughts of self-harm or feeling that life isn't worth living</span>
              </li>
            </ul>
            <p className="mb-6">
              You don't have to face this alone. Mental health professionals experienced in pain psychology can provide evidence-based treatments that address both conditions simultaneously. Whether through therapy, medication, lifestyle interventions, or a combination of approaches, effective help is available.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 animate-fade-up">
            <p className="mb-6">
              Living with chronic pain is challenging enough without the added burden of depression. But when you understand the deep connection between these conditions, you gain power—the power to seek integrated treatment, to advocate for comprehensive care, and to recognize that healing your mind can ease your body, just as treating your body can lift your mood.
            </p>
            <p className="mb-6">
              Recovery is possible. With the right support, evidence-based treatments, and a compassionate approach to your whole-person health, you can break the cycle and reclaim quality of life. If you're struggling, please reach out. Taking that first step toward help is an act of courage and self-compassion.
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
            <div className="font-semibold text-[var(--color-ink)] mb-1">Written by the Arlene Holland Clinical Team</div>
            <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Mental Health</div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mb-8 text-center animate-fade-up">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-12 h-12 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding Anxiety Disorders
              </h4>
              <p className="text-[var(--color-muted)] text-sm">Learn about the different types of anxiety disorders and evidence-based treatment approaches.</p>
            </a>

            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-12 h-12 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Self-Care Strategies for Mental Wellness
              </h4>
              <p className="text-[var(--color-muted)] text-sm">Practical, science-backed techniques to support your mental health in daily life.</p>
            </a>

            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-12 h-12 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                When to Seek Professional Help
              </h4>
              <p className="text-[var(--color-muted)] text-sm">Recognizing the signs that it's time to reach out for mental health support.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-4 animate-fade-up">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90 animate-fade-up">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 animate-fade-up"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  )
}