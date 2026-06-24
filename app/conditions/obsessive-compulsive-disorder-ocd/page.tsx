import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Obsessive-Compulsive Disorder (OCD) Treatment in Holland | Arlene Holland',
  description: 'Expert OCD treatment in Holland. Board-certified care for obsessions, compulsions, and intrusive thoughts. Telehealth available. Get relief from OCD today.',
  keywords: 'OCD treatment Holland, obsessive compulsive disorder Holland, OCD therapy, intrusive thoughts treatment, compulsions treatment, OCD psychiatrist Holland',
  openGraph: {
    title: 'Obsessive-Compulsive Disorder (OCD) Treatment in Holland | Arlene Holland',
    description: 'Expert OCD treatment in Holland. Board-certified care for obsessions, compulsions, and intrusive thoughts.',
    url: 'https://arleneholland.net/conditions/obsessive-compulsive-disorder-ocd',
    type: 'website',
  },
}

export default function ObsessiveCompulsiveDisorderOCDPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Obsessive-Compulsive Disorder (OCD)</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Obsessive-Compulsive Disorder (OCD) Treatment in Holland
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            OCD doesn't have to control your life. We provide evidence-based treatment to help you break free from intrusive thoughts and compulsive behaviors, restoring peace of mind and quality of life.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Obsessive-Compulsive Disorder (OCD)
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Obsessive-Compulsive Disorder (OCD) is a chronic mental health condition characterized by persistent, unwanted thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) that a person feels driven to perform. These obsessions and compulsions interfere significantly with daily activities, relationships, and quality of life. OCD affects approximately 2-3% of the population worldwide, making it one of the most common psychiatric disorders. People with OCD often recognize that their obsessions and compulsions are excessive or unreasonable, yet they feel powerless to control them. The disorder can manifest in various forms, including contamination fears, need for symmetry or exactness, forbidden or taboo thoughts, and harm-related obsessions. Without proper treatment, OCD typically follows a chronic course with symptoms waxing and waning over time, often worsening during periods of stress. The impact extends beyond the individual, affecting family members, work performance, social relationships, and overall life satisfaction.
            </p>
            <p>
              The exact causes of OCD are not fully understood, but research indicates that multiple factors contribute to its development. Neurobiological studies have identified abnormalities in brain circuits involving the orbitofrontal cortex, anterior cingulate cortex, and striatum—regions responsible for habit formation, decision-making, and error detection. Genetic factors play a significant role, with OCD showing strong familial clustering; individuals with a first-degree relative who has OCD are at substantially higher risk. Neurochemical imbalances, particularly involving serotonin, are implicated in the disorder's pathophysiology. Environmental factors such as childhood trauma, stress, or specific triggering events can precipitate or exacerbate symptoms. Some cases of childhood-onset OCD have been linked to streptococcal infections (PANDAS—Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal Infections). Certain personality traits, such as perfectionism and heightened responsibility for harm, may increase vulnerability. The interaction between biological predisposition and environmental stressors typically determines when and how severely OCD manifests.
            </p>
            <p>
              Professional treatment for OCD is essential because the disorder rarely improves on its own and often worsens without intervention. Left untreated, OCD can lead to severe impairment in functioning, including inability to work, social isolation, and secondary depression or anxiety disorders. Many people with OCD suffer for years before seeking help, often due to shame, stigma, or lack of awareness that effective treatments exist. The good news is that OCD is highly treatable with specialized approaches. Evidence-based treatments, particularly Exposure and Response Prevention (ERP)—a specific type of cognitive-behavioral therapy—and certain medications, have demonstrated remarkable effectiveness in reducing symptoms and improving quality of life. Early intervention typically leads to better outcomes and can prevent the disorder from becoming more entrenched. With proper treatment, most people with OCD experience significant symptom reduction and regain the ability to engage fully in work, relationships, and activities they value. Professional care provides not just symptom relief but also education about the disorder, coping strategies, and support for long-term management.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Signs & Symptoms of Obsessive-Compulsive Disorder (OCD)
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-primary)]">Obsessive Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Intrusive Thoughts</p>
                    <p className="text-[var(--color-muted)]">Persistent, unwanted thoughts, images, or urges that cause significant distress and feel impossible to control.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Contamination Fears</p>
                    <p className="text-[var(--color-muted)]">Excessive worry about germs, dirt, illness, or being contaminated by contact with people or objects.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Need for Symmetry or Exactness</p>
                    <p className="text-[var(--color-muted)]">Overwhelming urge to have things arranged in a particular way or feeling intense discomfort when things aren't "just right."</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Forbidden or Taboo Thoughts</p>
                    <p className="text-[var(--color-muted)]">Unwanted thoughts related to sex, religion, or harm that are distressing and contrary to one's values.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Harm Obsessions</p>
                    <p className="text-[var(--color-muted)]">Persistent fear of causing harm to oneself or others, even when there's no intention or desire to do so.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Pathological Doubt</p>
                    <p className="text-[var(--color-muted)]">Repeated doubting of whether tasks were completed correctly, leading to constant checking and uncertainty.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Hoarding Urges</p>
                    <p className="text-[var(--color-muted)]">Difficulty discarding items due to fear of needing them later or attachment to possessions beyond their actual value.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-primary)]">Compulsive Behaviors</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Excessive Washing or Cleaning</p>
                    <p className="text-[var(--color-muted)]">Repetitive handwashing, showering, or cleaning rituals performed to reduce contamination anxiety, often causing physical harm.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Checking Behaviors</p>
                    <p className="text-[var(--color-muted)]">Repeatedly checking locks, appliances, switches, or other items to prevent perceived harm or disaster.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Counting or Repeating</p>
                    <p className="text-[var(--color-muted)]">Performing actions a specific number of times or repeating words, phrases, or behaviors until they feel "just right."</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Ordering and Arranging</p>
                    <p className="text-[var(--color-muted)]">Compulsively organizing items in precise ways, becoming distressed if arrangements are disrupted.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Mental Rituals</p>
                    <p className="text-[var(--color-muted)]">Internal compulsions like mentally reviewing events, silent praying, or creating lists to neutralize obsessive thoughts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Reassurance Seeking</p>
                    <p className="text-[var(--color-muted)]">Constantly asking others for confirmation that feared outcomes won't happen or that actions were performed correctly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Avoidance Behaviors</p>
                    <p className="text-[var(--color-muted)]">Avoiding people, places, or situations that trigger obsessions, leading to significant life restrictions and isolation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Time-Consuming Rituals</p>
                    <p className="text-[var(--color-muted)]">Spending hours daily on compulsions, significantly interfering with work, school, relationships, and self-care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and can restore your ability to live freely without the burden of obsessions and compulsions.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-16 text-center text-[var(--color-ink)]">
            How We Treat Obsessive-Compulsive Disorder (OCD)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough diagnostic evaluation to understand your specific obsessions, compulsions, and how they impact your daily life. This includes detailed clinical interviews, standardized assessment tools like the Yale-Brown Obsessive Compulsive Scale (Y-BOCS), and exploration of symptom triggers, severity, and functional impairment. We also assess for co-occurring conditions such as depression or anxiety disorders that commonly accompany OCD.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we develop an individualized treatment strategy combining evidence-based therapies and, when appropriate, medication. Your plan is tailored to your specific OCD subtype, symptom severity, personal preferences, and life circumstances. We collaborate with you to set realistic goals and create a treatment timeline that fits your needs, ensuring you understand each component of your care and feel empowered in the recovery process.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Care & Support</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                OCD treatment is a process that requires consistent support and monitoring. We provide regular follow-up appointments to track your progress, adjust treatment strategies as needed, and address any challenges that arise. You'll receive education about relapse prevention, coping skills for managing anxiety, and strategies for maintaining gains after intensive treatment ends. We're committed to supporting you throughout your recovery journey and beyond, ensuring long-term success.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-[var(--color-ink)] space-y-4">
            <p>
              Our treatment approach emphasizes <strong>Exposure and Response Prevention (ERP)</strong>, the gold-standard psychotherapy for OCD. ERP involves gradually exposing you to situations that trigger obsessions while helping you resist performing compulsions. This evidence-based technique has been proven highly effective in breaking the cycle of OCD, with most patients experiencing significant symptom reduction. Sessions are structured, collaborative, and proceed at a pace that feels manageable while still challenging the disorder.
            </p>
            <p>
              We also utilize <strong>Cognitive Behavioral Therapy (CBT)</strong> to help identify and modify distorted thought patterns that fuel obsessions. Additional therapeutic approaches may include Acceptance and Commitment Therapy (ACT), which teaches psychological flexibility and values-based living, and mindfulness-based interventions that help you develop a different relationship with intrusive thoughts. When appropriate, we may recommend <strong>medication</strong>—typically selective serotonin reuptake inhibitors (SSRIs) at higher doses than used for depression, or in some cases, augmentation with antipsychotic medications. Medication can be particularly helpful for severe OCD or when therapy alone hasn't provided sufficient relief. All treatment decisions are made collaboratively, with careful attention to potential benefits, side effects, and your personal preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Why Choose Arlene Holland for Obsessive-Compulsive Disorder (OCD) Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Specialized training in OCD treatment with extensive experience in evidence-based approaches including ERP and CBT, ensuring you receive the highest standard of care.
              </p>
            </div>
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Care</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that OCD manifests differently for everyone. Your treatment plan is customized to your specific symptoms, triggers, and life circumstances, not a one-size-fits-all approach.
              </p>
            </div>
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                Access expert OCD treatment from the comfort and privacy of your home through secure telehealth appointments, making care more convenient and accessible.
              </p>
            </div>
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Extensive OCD Experience</h3>
              <p className="text-[var(--color-muted)]">
                Years of specialized experience treating all OCD subtypes—from contamination fears to harm obsessions—with proven success in helping patients reclaim their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During your initial comprehensive assessment, we'll spend time understanding your specific obsessions and compulsions, their frequency and intensity, how long you've experienced symptoms, and their impact on your daily functioning. We'll discuss your treatment goals, any previous treatments you've tried, and answer all your questions. You'll leave with a clear understanding of your diagnosis, a proposed treatment plan, and realistic expectations for recovery. This is a collaborative process—your input and comfort are paramount.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Active treatment starts with education about OCD and the treatment rationale. For ERP, we'll create a hierarchy of feared situations and begin with lower-level exposures, gradually building your confidence and tolerance. If medication is part of your plan, we'll start at an appropriate dose and monitor for effects and side effects. This phase focuses on learning new skills, understanding the OCD cycle, and beginning to challenge the disorder. Sessions are typically weekly, and you'll have between-session exercises to practice. Early progress can feel slow, but these foundational weeks are crucial for long-term success.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As treatment continues, we'll systematically work through your exposure hierarchy, tackling increasingly challenging situations. Most patients begin noticing significant symptom reduction during this phase—obsessions become less frequent and distressing, and the urge to perform compulsions decreases. We'll use standardized measures to objectively track your progress and adjust the treatment plan as needed. If medication was prescribed, we may adjust the dosage for optimal benefit. You'll develop greater confidence in managing OCD and reclaiming activities you've been avoiding. Setbacks are normal and expected; we'll work through them together.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  After intensive treatment (typically 12-20 weeks for ERP), most patients achieve substantial improvement and can transition to maintenance care. We'll develop a relapse prevention plan, identifying potential triggers and strategies for managing future challenges. Follow-up appointments become less frequent but remain important for sustaining gains. Many patients continue medication long-term to prevent relapse, while others successfully taper off under supervision. OCD is a chronic condition, but with proper treatment and ongoing support, most people achieve lasting recovery and the ability to live full, unrestricted lives. We remain available for check-ins and support whenever needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Frequently Asked Questions About Obsessive-Compulsive Disorder (OCD)
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-lg text-[var(--color-ink)] flex justify-between items-center">
                How long does OCD treatment take?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                The duration of OCD treatment varies based on symptom severity, treatment type, and individual response. Exposure and Response Prevention (ERP) typically involves 12-20 weekly sessions for significant improvement, though some people need longer. Intensive programs may offer daily sessions over several weeks. Medication, when used, often requires 8-12 weeks to reach full effectiveness and may be continued for a year or more to prevent relapse. Many patients notice meaningful improvement within 2-3 months of consistent treatment. While OCD is a chronic condition, most people achieve substantial symptom reduction and can transition to maintenance care with less frequent appointments. The goal isn't perfection but rather managing symptoms effectively so they no longer significantly interfere with your life.
              </p>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-lg text-[var(--color-ink)] flex justify-between items-center">
                Is medication always necessary for treating OCD?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                No, medication is not always necessary. Exposure and Response Prevention (ERP) therapy alone can be highly effective for many people with OCD. However, medication—typically SSRIs at higher doses than used for depression—can be beneficial, especially for moderate to severe OCD, when therapy alone isn't providing sufficient relief, or when co-occurring conditions like depression are present. Some patients prefer to try therapy first, while others opt for combined treatment from the start. Research shows that combining ERP with medication often produces the best outcomes for severe OCD. The decision is highly individualized and made collaboratively based on your symptoms, preferences, past treatment experiences, and practical considerations. We'll thoroughly discuss the potential benefits and side effects to help you make an informed choice that feels right for you.
              </p>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-lg text-[var(--color-ink)] flex justify-between items-center">
                Does insurance cover OCD treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most insurance plans cover OCD treatment, including both therapy and medication management, as it's recognized as a legitimate psychiatric disorder requiring professional care. Coverage typically includes diagnostic assessments, individual therapy sessions, and medication appointments. However, specific coverage details vary by plan, including copays, deductibles, session limits, and whether prior authorization is required. We recommend contacting your insurance provider before starting treatment to understand your benefits, out-of-pocket costs, and any limitations. We can provide documentation and diagnosis codes to help verify coverage. If your plan has limited mental health benefits or you're uninsured, we can discuss self-pay options and payment plans. Don't let insurance concerns prevent you from seeking help—OCD is treatable, and solutions can usually be found.
              </p>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-lg text-[var(--color-ink)] flex justify-between items-center">
                What if therapy isn't working for me?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                If you're not seeing improvement after several weeks of treatment, it's important to discuss this openly with your provider rather than giving up. Several factors could be at play: the treatment approach might need adjustment, exposures may not be challenging enough or may be proceeding too quickly, you might benefit from adding medication or adjusting your current dosage, or there could be co-occurring conditions interfering with progress. Sometimes patients aren't consistently completing between-session homework, which is crucial for ERP effectiveness. We'll work together to identify barriers and modify your treatment plan. This might involve changing the therapy approach, increasing session frequency, addressing avoidance behaviors more directly, or considering consultation with OCD specialists. OCD is highly treatable, and the vast majority of patients who engage in evidence-based treatment do improve. Persistence and open communication are key—we're committed to finding what works for you.
              </p>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-lg text-[var(--color-ink)] flex justify-between items-center">
                Can OCD treatment be done through telehealth?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, OCD treatment can be highly effective via telehealth. Research shows that ERP therapy delivered through video sessions produces outcomes comparable to in-person treatment. Telehealth offers several advantages: convenience of receiving care from home, elimination of travel time, increased scheduling flexibility, and privacy for those concerned about stigma. For exposure work, being in your home environment can actually be beneficial, as many triggers exist there (doorknobs, appliances, etc.). Medication management appointments are also well-suited for telehealth. We use secure, HIPAA-compliant platforms to ensure your privacy. Some patients prefer a hybrid approach, doing some sessions in person and others via telehealth. The only potential limitation is if your treatment requires in-office exposures or specialized equipment, but this is rare. Most people find telehealth an accessible, effective option that removes barriers to getting the help they need.
              </p>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-lg text-[var(--color-ink)] flex justify-between items-center">
                Will my OCD ever completely go away?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                OCD is typically a chronic condition, meaning it may persist throughout life, but this doesn't mean you're doomed to suffer indefinitely. With proper evidence-based treatment, the vast majority of people achieve significant symptom reduction—often 50-80% improvement or more. Many patients reach a point where OCD no longer significantly interferes with their daily functioning, relationships, or quality of life. Some people experience periods of complete remission, while others have manageable residual symptoms. The goal isn't necessarily to eliminate every intrusive thought forever, but rather to change your relationship with these thoughts so they no longer cause distress or compel you to perform time-consuming rituals. You'll learn skills that last a lifetime, allowing you to quickly address symptoms if they flare during stressful periods. With treatment, most people go from OCD controlling their lives to them controlling OCD—and that makes all the difference.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-center text-[var(--color-ink)]">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/anxiety" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Anxiety Disorders
              </h4>
              <p className="text-[var(--color-muted)]">
                Treatment for generalized anxiety, panic disorder, and phobias that often co-occur with OCD.
              </p>
            </a>
            <a href="/conditions/depression" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Depression
              </h4>
              <p className="text-[var(--color-muted)]">
                Comprehensive care for major depression, which commonly accompanies OCD and requires integrated treatment.
              </p>
            </a>
            <a href="/conditions/ptsd" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                PTSD & Trauma
              </h4>
              <p className="text-[var(--color-muted)]">
                Evidence-based trauma treatment for those whose OCD may be related to or complicated by past traumatic experiences.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Get Help for Obsessive-Compulsive Disorder (OCD) Today
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-light opacity-95">
            You don't have to face Obsessive-Compulsive Disorder (OCD) alone. Our team is ready to help you break free from obsessions and compulsions and reclaim your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="/conditions"
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}