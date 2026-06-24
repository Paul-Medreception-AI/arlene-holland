import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Life Transitions Treatment in Holland | Arlene Holland Mental Health',
  description: 'Expert life transitions counseling in Holland. Board-certified psychiatric care for major life changes including career shifts, retirement, relocation, divorce, and loss. Telehealth available.',
  keywords: 'life transitions treatment Holland, life transitions therapy, life change counseling, career transition therapy, retirement counseling Holland, divorce counseling, relocation stress, adjustment disorder treatment',
  openGraph: {
    title: 'Life Transitions Treatment in Holland | Arlene Holland',
    description: 'Expert life transitions counseling in Holland. Board-certified psychiatric care for major life changes.',
    url: 'https://arleneholland.net/conditions/life-transitions',
    type: 'website',
  }
}

export default function LifeTransitionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Life Transitions</span>
          </nav>
          <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Life Transitions Treatment in Holland
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Major life changes can trigger profound emotional and psychological challenges, even when those changes are positive. We provide expert, compassionate care to help you navigate career shifts, retirement, relocation, relationship changes, and other significant life transitions with resilience and emotional well-being.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Life Transitions
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Life transitions are significant changes or shifts in life circumstances that require psychological adjustment and adaptation. These can include career changes, retirement, relocation to a new city or country, divorce or relationship endings, becoming a parent, children leaving home (empty nest syndrome), loss of a loved one, health diagnosis, or changes in financial status. While transitions are a normal part of human development and experience, they can trigger substantial emotional distress, anxiety, identity confusion, and even clinical depression or adjustment disorders. Research indicates that approximately 15-20% of adults experience clinically significant distress during major life transitions, with symptoms severe enough to interfere with daily functioning, relationships, and quality of life. The impact varies based on the nature of the change, available support systems, prior mental health history, and individual coping resources.
            </p>
            <p>
              Multiple factors influence how individuals respond to life transitions. Personality traits such as flexibility, resilience, and openness to change play a significant role, as do prior experiences with change and loss. Transitions that are involuntary (job loss, forced relocation, unexpected divorce) typically create more distress than chosen changes. Multiple simultaneous transitions compound stress significantly—for example, relocating for a new job while managing relationship difficulties. Lack of social support, financial insecurity, pre-existing mental health conditions, unresolved grief or trauma, and perfectionist thinking patterns all increase vulnerability to transition-related mental health challenges. Additionally, transitions that threaten core aspects of identity (retirement ending a career-based identity, divorce after decades of marriage, children leaving home for parents whose identity centered on caregiving) can precipitate existential crises requiring professional intervention.
            </p>
            <p>
              Professional treatment for life transitions is essential when emotional distress persists beyond the initial adjustment period, typically 3-6 months, or when symptoms significantly impair functioning. Without appropriate intervention, transition-related distress can evolve into major depressive disorder, generalized anxiety disorder, substance abuse as a maladaptive coping mechanism, or complicated grief reactions. Early treatment helps individuals develop healthy coping strategies, process the emotional components of change including grief for what has been lost, rebuild identity and purpose, establish new routines and support systems, and prevent the development of chronic mental health conditions. Therapy provides a structured space to explore the meaning of transitions, challenge negative thought patterns, develop problem-solving skills, and build the psychological flexibility necessary for successful adaptation. For many, professional guidance transforms a potentially destabilizing life change into an opportunity for personal growth, increased self-awareness, and the development of greater resilience for future challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Life Transitions Distress
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Emotional Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Persistent Sadness or Grief</span>
                    <p className="text-[var(--color-muted)]">Ongoing feelings of loss, mourning for previous life circumstances, or unexplained sadness that doesn't lift.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Anxiety and Worry</span>
                    <p className="text-[var(--color-muted)]">Excessive concern about the future, constant worry about making the wrong decisions, or fear about adapting to new circumstances.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Identity Confusion</span>
                    <p className="text-[var(--color-muted)]">Feeling lost about who you are, questioning your purpose, or struggling with how to define yourself in new circumstances.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Feeling Overwhelmed</span>
                    <p className="text-[var(--color-muted)]">Sense that demands exceed your capacity to cope, difficulty managing daily responsibilities, or emotional paralysis.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Loss of Enjoyment</span>
                    <p className="text-[var(--color-muted)]">Decreased interest in activities that previously brought pleasure, difficulty finding meaning in new routines, or emotional numbness.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Guilt or Regret</span>
                    <p className="text-[var(--color-muted)]">Persistent second-guessing of decisions, feelings of guilt about changes that affected others, or rumination about alternative choices.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Irritability and Mood Swings</span>
                    <p className="text-[var(--color-muted)]">Increased frustration, shorter temper with loved ones, emotional volatility, or feeling emotionally reactive without clear triggers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Physical & Behavioral Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Sleep Disturbances</span>
                    <p className="text-[var(--color-muted)]">Difficulty falling asleep due to racing thoughts, waking frequently during the night, or sleeping excessively as emotional escape.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Changes in Appetite</span>
                    <p className="text-[var(--color-muted)]">Significant weight loss or gain, eating for comfort, loss of interest in food, or disrupted eating patterns.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Fatigue and Low Energy</span>
                    <p className="text-[var(--color-muted)]">Persistent exhaustion not relieved by rest, difficulty completing routine tasks, or physical heaviness and lethargy.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Social Withdrawal</span>
                    <p className="text-[var(--color-muted)]">Isolating from friends and family, avoiding social situations, declining invitations, or difficulty forming new connections.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Concentrating</span>
                    <p className="text-[var(--color-muted)]">Problems focusing at work, forgetfulness, difficulty making decisions, or mental fog interfering with responsibilities.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Physical Tension</span>
                    <p className="text-[var(--color-muted)]">Headaches, muscle tension, jaw clenching, digestive problems, or other stress-related physical symptoms without medical cause.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Substance Use Increases</span>
                    <p className="text-[var(--color-muted)]">Turning to alcohol, medications, or other substances more frequently to manage stress or numb emotional discomfort.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Neglecting Self-Care</span>
                    <p className="text-[var(--color-muted)]">Letting personal hygiene, medical appointments, exercise routines, or healthy habits decline during the transition period.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-center text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and can prevent transition-related distress from developing into more serious mental health conditions.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Life Transitions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your first session involves a detailed evaluation of your specific transition, its impact on your emotional well-being, family dynamics, and daily functioning. We assess for co-occurring conditions like depression or anxiety, explore your support systems, and identify strengths and resources you can leverage during this period of change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we develop a customized treatment approach that addresses your specific needs, timeline, and goals. Your plan may include psychotherapy, medication if clinically indicated, stress management strategies, and practical problem-solving for transition-related challenges. Treatment is collaborative and adjusted as your needs evolve.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Support & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Regular follow-up sessions allow us to monitor your progress, adjust treatment as needed, and provide consistent support throughout your transition journey. We track symptom improvement, functional capacity, and adaptation success. As you stabilize in your new circumstances, we work toward sustainable wellness and develop relapse prevention strategies.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-[var(--color-ink)]">
            <p className="mb-4">
              Our treatment approach integrates evidence-based modalities specifically effective for transition-related distress. <strong>Cognitive Behavioral Therapy (CBT)</strong> helps identify and modify unhelpful thought patterns about change, such as catastrophizing about the future or rigid thinking about identity. <strong>Acceptance and Commitment Therapy (ACT)</strong> teaches psychological flexibility—the ability to remain present and committed to values even during uncertainty and discomfort.
            </p>
            <p>
              <strong>Narrative therapy</strong> helps reconstruct personal identity stories as you integrate new life chapters, while <strong>solution-focused brief therapy</strong> emphasizes practical problem-solving and building on existing strengths. For transitions involving loss or grief, we incorporate grief counseling techniques. When depression or anxiety symptoms are significant, pharmacotherapy with antidepressants or anti-anxiety medications may be recommended as part of a comprehensive treatment plan. Stress management training, mindfulness practices, and building new social connections are also integrated into care to support successful adaptation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Arlene Holland for Life Transitions Treatment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arlene Holland is a board-certified psychiatric mental health nurse practitioner with specialized training in adjustment disorders, depression, and anxiety related to life changes. Her clinical expertise ensures you receive evidence-based, expert care tailored to the psychological challenges of major transitions.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Deeply Personalized Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that each transition is unique, shaped by your personal history, values, support systems, and circumstances. Treatment is never one-size-fits-all—we take time to understand your specific situation and develop strategies that align with your individual needs, strengths, and goals for adaptation.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Convenient Telehealth Services</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We offer secure telehealth appointments, making mental health care accessible regardless of your location in Holland or surrounding areas. This is particularly valuable during transitions involving relocation, busy career changes, or times when adding another in-person appointment feels overwhelming.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Extensive Transition Experience</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We have extensive experience supporting individuals through diverse life transitions including career changes, retirement, relocation, divorce, empty nest syndrome, new parenthood, health diagnoses, and loss. This breadth of experience means we understand the common patterns and unique challenges of various transition types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-6xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial appointment is a comprehensive 60-minute evaluation where we explore your specific transition, its emotional and practical impacts, your mental health history, current symptoms, support systems, and treatment goals. We'll discuss what's been most challenging and begin identifying strategies for managing immediate distress. You'll leave with clarity about your diagnosis, recommended treatment approach, and initial coping tools.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-6xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During the early treatment phase, sessions are typically weekly to provide consistent support during the acute adjustment period. We focus on stabilizing symptoms, processing emotions related to the transition (including grief for what has been lost), challenging unhelpful thought patterns, and developing practical problem-solving strategies. If medication is part of your treatment plan, we'll begin at appropriate doses and monitor for effectiveness and side effects.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-6xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As you begin adapting to your new circumstances, we assess your progress and adjust treatment accordingly. Many patients notice improved mood, better sleep, increased confidence in navigating their new situation, and development of new routines and connections. Sessions may space to bi-weekly as symptoms improve. We continue working on identity integration, meaning-making, and building resilience for future challenges.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-6xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Most transition-related treatment is time-limited, typically lasting 3-6 months, though duration varies based on transition complexity and individual needs. As you successfully adapt, we develop a relapse prevention plan, discuss warning signs that might indicate need for additional support, and transition to less frequent maintenance sessions or discharge from care. You'll have gained skills and insights that not only helped with this transition but will serve you through future life changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Life Transitions Treatment
          </h2>
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">How long does treatment for life transitions typically take?</h3>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Treatment duration varies based on the type of transition, symptom severity, and individual factors, but most transition-focused therapy lasts 3-6 months. Some individuals need only brief intervention (8-12 sessions) to develop coping strategies and regain stability, while more complex transitions—such as those involving multiple simultaneous changes, unresolved trauma, or co-occurring mental health conditions—may require longer treatment. Research suggests that adjustment disorders, when treated appropriately, typically resolve within six months. Your provider will regularly review progress with you and adjust the treatment plan as your needs evolve.
                </p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">Is medication required for treating transition-related distress?</h3>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Medication is not always required for life transition treatment, and many individuals successfully manage transition-related distress through psychotherapy alone. However, when symptoms include significant depression, persistent anxiety, severe sleep disturbance, or impairment in daily functioning, medication can be an important component of treatment. Antidepressants (SSRIs or SNRIs) may be prescribed if depressive symptoms are prominent, while short-term anti-anxiety medications might be used for acute anxiety during the initial adjustment period. The decision to use medication is always collaborative, based on symptom severity, your preferences, and clinical best practices. If prescribed, medication is typically combined with therapy for optimal outcomes.
                </p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">Does insurance cover treatment for life transitions?</h3>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Most insurance plans cover mental health treatment for clinically significant transition-related distress, particularly when it meets diagnostic criteria for adjustment disorder, depression, or anxiety disorders. Mental health parity laws require insurance companies to cover mental health services similarly to medical services. Coverage typically includes both therapy sessions and psychiatric medication management. We recommend contacting your insurance provider to verify your specific mental health benefits, including copays, deductibles, and any session limits. Our practice can provide documentation and diagnostic codes needed for insurance billing, and we're happy to work with you to maximize your benefits.
                </p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">What if therapy isn't working or I'm not feeling better?</h3>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  If you're not experiencing improvement after several weeks of treatment, it's important to discuss this openly with your provider. There are many reasons therapy progress might stall, including incorrect diagnosis, need for medication adjustment, unaddressed co-occurring conditions, life circumstances interfering with treatment engagement, or simply needing a different therapeutic approach. We regularly assess treatment effectiveness and make adjustments as needed—this might include changing therapy modalities, adding or adjusting medication, increasing session frequency, addressing practical barriers to change, or considering referral to additional specialists if needed. Your feedback is essential to ensuring treatment meets your needs, and persistence often leads to finding the right approach for your specific situation.
                </p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">Can telehealth therapy effectively treat life transition challenges?</h3>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Yes, research consistently shows that telehealth therapy is as effective as in-person treatment for transition-related distress, depression, and anxiety. Telehealth actually offers particular advantages during life transitions—it eliminates travel time and logistical barriers, provides continuity of care if you're relocating, offers privacy from your own home, and reduces the burden of adding another commitment during an already demanding time. The therapeutic relationship, which is the most important factor in treatment success, develops just as strongly through secure video sessions. Telehealth works especially well for talk therapy approaches like CBT, ACT, and supportive counseling, all of which are core treatments for life transition challenges.
                </p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">How do I know if my distress is normal adjustment or requires professional help?</h3>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Some stress during life transitions is completely normal and expected. However, professional help is warranted when distress persists beyond 3-6 months, significantly interferes with work or relationships, includes persistent feelings of hopelessness or depression, involves thoughts of self-harm, leads to substance use as a coping mechanism, or prevents you from moving forward with necessary life tasks. If you're finding it difficult to function in daily life, have withdrawn from important relationships, or feel "stuck" despite your best efforts, these are signals that professional support would be beneficial. You don't need to wait until distress is severe—early intervention often leads to faster resolution and prevents complications. If you're questioning whether you need help, that question itself often suggests consultation would be valuable.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant',serif] text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/conditions/depression" className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Depression
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Persistent sadness, loss of interest, and hopelessness that interferes with daily life and relationships.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">Learn more →</span>
            </a>
            <a href="/conditions/anxiety" className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Anxiety Disorders
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Excessive worry, fear, and physical tension that impacts your ability to function and enjoy life.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">Learn more →</span>
            </a>
            <a href="/conditions/stress-management" className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Stress Management
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Overwhelm from chronic demands, poor work-life balance, and difficulty managing life's pressures.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-4">
            Get Help for Life Transitions Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
            You don't have to navigate life transitions alone. Our team is ready to help you adapt with confidence and resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/conditions" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors text-lg"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}