import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Relationship Difficulties Treatment in Holland | Arlene Holland',
  description: 'Expert treatment for relationship difficulties in Holland. Board-certified care for couples and individuals struggling with relationship challenges. Telehealth available.',
  keywords: 'relationship difficulties treatment Holland, couples therapy Holland, relationship counseling, marriage counseling Holland, relationship problems',
}

export default function RelationshipDifficultiesPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Relationship Difficulties</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-6 leading-tight">
            Relationship Difficulties Treatment in Holland
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Relationship difficulties can profoundly affect your emotional well-being, daily functioning, and overall quality of life. We provide compassionate, evidence-based treatment to help individuals and couples navigate conflicts, improve communication, and rebuild healthy connections.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-ink)]">
            Understanding Relationship Difficulties
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Relationship difficulties encompass a wide range of challenges that can occur in romantic partnerships, marriages, family relationships, and close friendships. These struggles may manifest as communication breakdowns, recurring conflicts, emotional disconnection, trust issues, intimacy problems, or fundamental incompatibilities in values and life goals. Research indicates that approximately 40-50% of married couples in the United States experience significant relationship distress at some point, and many relationships end due to unresolved conflicts. The impact extends far beyond the relationship itself, affecting mental health, physical well-being, work performance, parenting abilities, and overall life satisfaction. Chronic relationship stress has been linked to increased rates of depression, anxiety, substance use, and even cardiovascular problems.
            </p>
            <p>
              The causes of relationship difficulties are multifaceted and often involve a combination of factors. Poor communication patterns established early in the relationship can create cycles of misunderstanding and resentment. Unresolved individual mental health issues such as depression, anxiety, or past trauma frequently spill into relationship dynamics. External stressors including financial pressures, work demands, parenting challenges, or family interference can strain even strong partnerships. Differences in attachment styles, conflict resolution approaches, or expressions of affection can create persistent friction. Life transitions such as becoming parents, career changes, relocation, or caring for aging parents often expose vulnerabilities in relationships. Additionally, infidelity, addiction, domestic violence, or fundamental value differences can create crises that threaten the relationship's foundation.
            </p>
            <p>
              Professional treatment for relationship difficulties is essential because patterns of negative interaction become deeply entrenched over time, making them increasingly difficult to change without expert guidance. A trained mental health professional can help identify destructive communication patterns, uncover underlying issues driving conflict, teach evidence-based skills for healthy conflict resolution, and create a safe space for vulnerable conversations. Whether you're seeking individual therapy to work on relationship issues or couples therapy with your partner, professional support provides the tools, perspective, and structured approach necessary to break unhealthy cycles and build stronger, more satisfying relationships. Early intervention prevents minor issues from escalating into relationship-ending crises and significantly improves outcomes for both individual well-being and relationship satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Relationship Difficulties
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-primary)]">Emotional & Communication Signs</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Frequent Arguments:</strong>
                    <span className="text-[var(--color-muted)]"> Recurring conflicts over the same issues with no resolution, or arguments that escalate quickly into shouting or personal attacks.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Communication Breakdown:</strong>
                    <span className="text-[var(--color-muted)]"> Inability to discuss important topics without defensiveness, stonewalling, or withdrawing from conversation entirely.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Emotional Distance:</strong>
                    <span className="text-[var(--color-muted)]"> Feeling disconnected, lonely, or like roommates rather than partners, with diminished emotional intimacy or affection.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Resentment Building:</strong>
                    <span className="text-[var(--color-muted)]"> Accumulation of unresolved hurt feelings, grudges, or perceived injustices that color all interactions negatively.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Trust Issues:</strong>
                    <span className="text-[var(--color-muted)]"> Difficulty trusting your partner due to past betrayals, dishonesty, or broken promises, leading to suspicion and checking behaviors.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Contempt or Criticism:</strong>
                    <span className="text-[var(--color-muted)]"> Engaging in name-calling, mockery, hostile humor, or constant criticism that attacks your partner's character rather than addressing specific behaviors.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Unmet Needs:</strong>
                    <span className="text-[var(--color-muted)]"> Feeling that your emotional, physical, or practical needs are consistently ignored or dismissed by your partner.</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-primary)]">Behavioral & Physical Signs</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Avoidance Behaviors:</strong>
                    <span className="text-[var(--color-muted)]"> Staying late at work, spending excessive time on hobbies, or finding reasons to avoid being home to escape relationship tension.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Decreased Intimacy:</strong>
                    <span className="text-[var(--color-muted)]"> Significant reduction in physical affection, sexual activity, or intimate conversations that were previously part of the relationship.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Stress-Related Symptoms:</strong>
                    <span className="text-[var(--color-muted)]"> Experiencing headaches, digestive problems, sleep disturbances, or other physical symptoms related to relationship stress.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Negative Impact on Daily Life:</strong>
                    <span className="text-[var(--color-muted)]"> Relationship problems interfering with work performance, parenting, friendships, or other important areas of functioning.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Considering Separation:</strong>
                    <span className="text-[var(--color-muted)]"> Frequently thinking about separation or divorce, discussing it with others, or making plans for a life without your partner.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Parallel Lives:</strong>
                    <span className="text-[var(--color-muted)]"> Living separate lives with minimal shared activities, operating independently rather than as a team or partnership.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Unhealthy Coping:</strong>
                    <span className="text-[var(--color-muted)]"> Turning to alcohol, excessive screen time, or other unhealthy behaviors to cope with relationship distress.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in your relationship, help is available. Early treatment leads to better outcomes and can prevent relationship breakdown. Professional guidance provides the tools and support needed to rebuild connection and satisfaction.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Relationship Difficulties
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough evaluation to understand your relationship history, current challenges, individual mental health, and relationship goals. This assessment identifies specific patterns, communication styles, and underlying issues contributing to difficulties. We explore both partners' perspectives and create a clear picture of strengths to build upon and areas requiring focused intervention.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we develop a customized treatment approach addressing your specific needs and goals. This may include couples therapy, individual therapy for one or both partners, or a combination approach. We set clear, achievable objectives and establish a therapeutic framework that respects both partners' needs while working toward shared relationship goals and improved functioning.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Care & Support</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Treatment involves regular therapy sessions where we actively work on communication skills, conflict resolution, emotional connection, and specific issues affecting your relationship. We monitor progress, adjust interventions as needed, and provide support through difficult conversations and transitions. As improvements develop, we focus on maintenance strategies and relapse prevention to sustain positive changes long-term.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-[var(--color-ink)] leading-relaxed">
            <p>
              Our treatment approach draws from evidence-based modalities including <strong>Emotionally Focused Therapy (EFT)</strong>, which helps couples identify and transform negative interaction patterns while building secure emotional bonds; <strong>Gottman Method Couples Therapy</strong>, which teaches research-based skills for managing conflict, deepening friendship, and creating shared meaning; and <strong>Cognitive Behavioral Therapy (CBT)</strong>, which addresses individual thought patterns and behaviors affecting the relationship. We may also incorporate <strong>Imago Relationship Therapy</strong> to understand how childhood experiences influence adult relationships, and <strong>Solution-Focused Brief Therapy</strong> for couples seeking targeted interventions for specific issues. When individual mental health conditions such as depression, anxiety, or trauma contribute to relationship difficulties, we address these through individual therapy while supporting the relationship system as a whole.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Arlene Holland for Relationship Difficulties Treatment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[var(--color-border)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arlene Holland brings board certification and specialized training in relationship therapy, ensuring you receive expert care grounded in the latest research and best practices for treating relationship difficulties and couples issues.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every relationship is unique, with its own history, challenges, and strengths. Treatment is tailored to your specific situation, relationship goals, and individual needs rather than following a one-size-fits-all protocol.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Convenient Telehealth Services</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Access high-quality relationship therapy from the comfort and privacy of your own home through secure telehealth sessions. This flexible option makes it easier for busy couples to prioritize their relationship without travel time or scheduling conflicts.
              </p>
            </div>
            <div className="border border-[var(--color-border)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Extensive Relationship Experience</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                With years of specialized experience treating relationship difficulties, we understand the complex dynamics that contribute to relationship distress and have helped countless couples and individuals rebuild connection, trust, and satisfaction in their relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your journey begins with a comprehensive initial evaluation where we explore your relationship history, current challenges, individual backgrounds, and treatment goals. This may involve both joint sessions and individual sessions to understand each partner's perspective. We'll assess communication patterns, conflict styles, and areas of strength and difficulty to create a foundation for effective treatment.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  In the initial weeks, we focus on building safety and establishing new communication patterns. You'll learn concrete skills for expressing needs, active listening, and managing conflict constructively. We begin addressing immediate crisis issues while identifying underlying patterns that need attention. Many couples start noticing small improvements in how they interact and feel more hopeful about the relationship during this early phase.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  As treatment progresses, we work on deeper issues such as rebuilding trust, healing past hurts, improving emotional intimacy, and addressing individual factors affecting the relationship. We'll review your progress toward goals and adjust the treatment approach as needed. This phase often involves challenging conversations, but with growing skills and therapeutic support, couples typically experience meaningful improvements in connection and satisfaction.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once significant improvement is achieved, we focus on maintenance strategies and relapse prevention. We prepare you to handle future challenges independently using the skills you've developed. Some couples transition to less frequent "maintenance" sessions, while others conclude active treatment with the option to return if new issues arise. The goal is sustainable relationship health and the confidence to navigate difficulties together without ongoing professional support.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 p-6 bg-white rounded-lg border border-[var(--color-border)]">
            <p className="text-[var(--color-ink)] leading-relaxed">
              <strong>Timeline expectations:</strong> Most couples engage in therapy for 3-6 months of weekly sessions, though duration varies significantly based on the severity of issues, commitment to change, and individual circumstances. Some couples see meaningful improvement within weeks, while others addressing deep-rooted patterns or trauma may benefit from longer-term work. The key is consistent engagement and willingness from both partners to actively participate in the process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Relationship Difficulties
          </h2>
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does relationship therapy take to work?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 text-[var(--color-muted)] leading-relaxed">
                The timeline varies significantly based on the severity and duration of relationship problems, both partners' commitment to change, and the specific issues being addressed. Some couples notice improvements in communication and emotional connection within the first few weeks as they learn new skills. However, addressing deeper issues such as rebuilding trust after infidelity, healing from years of resentment, or changing long-standing negative patterns typically requires 3-6 months of consistent weekly therapy. Research shows that most couples who complete therapy experience significant improvement, with many seeing benefits that continue growing after treatment ends. The key factors in successful outcomes are both partners' active participation, willingness to practice new skills between sessions, and commitment to the relationship.
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Is medication required for relationship difficulties?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 text-[var(--color-muted)] leading-relaxed">
                Medication is not typically required for treating relationship difficulties themselves, as the primary treatment is therapy focused on communication, conflict resolution, and relationship dynamics. However, medication may be beneficial if one or both partners are dealing with individual mental health conditions such as depression, anxiety, PTSD, or ADHD that are contributing to relationship problems. For example, untreated depression can make it difficult to engage emotionally in the relationship, while untreated anxiety might fuel excessive reassurance-seeking or conflict avoidance. When individual mental health issues are significantly impacting the relationship, we may recommend psychiatric evaluation to determine if medication could support the overall treatment approach. The decision is always individualized and made collaboratively.
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover relationship or couples therapy?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 text-[var(--color-muted)] leading-relaxed">
                Insurance coverage for relationship and couples therapy varies significantly by plan. Many insurance policies do not cover couples therapy or "marital counseling" as a service category. However, insurance may cover individual therapy sessions where relationship issues are addressed as part of treating a diagnosable mental health condition like depression or anxiety affecting one partner. Some couples attend individual therapy sessions (covered by insurance) while also participating in couples therapy (paid out-of-pocket). We recommend contacting your insurance provider directly to understand your specific coverage, including whether relationship-focused treatment might be covered under certain circumstances. We can provide detailed receipts (superbills) for you to submit for potential out-of-network reimbursement if your plan offers that option.
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What if my partner refuses to attend couples therapy?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 text-[var(--color-muted)] leading-relaxed">
                It's not uncommon for one partner to be hesitant or resistant to couples therapy, often due to fear, skepticism, previous negative experiences, or feeling blamed for problems. If your partner won't attend, you can still benefit significantly from individual therapy focused on relationship issues. Individual work can help you understand your own patterns, improve your communication skills, set healthy boundaries, and make decisions about the relationship. Often, when one partner begins making positive changes, it can shift relationship dynamics and sometimes motivates the resistant partner to eventually join therapy. We can also provide guidance on how to invite your partner to participate in a way that feels less threatening. However, it's important to acknowledge that meaningful relationship change is most effective when both partners are engaged in the process.
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can telehealth work for relationship therapy?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 text-[var(--color-muted)] leading-relaxed">
                Yes, telehealth has proven highly effective for relationship therapy and offers several advantages. Research shows that outcomes for couples therapy delivered via telehealth are comparable to in-person treatment. Many couples find the convenience of attending from home reduces barriers to consistent participation, and the familiar environment can sometimes help partners feel more comfortable during difficult conversations. Telehealth works well for couples in the same location (both joining from the same room) or partners connecting from different locations if scheduling requires it. The key is having a private, quiet space with reliable internet and a device with camera and microphone. Most couples quickly adapt to the virtual format and appreciate the flexibility it provides for their busy schedules.
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What if therapy isn't working or we're not seeing improvement?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 text-[var(--color-muted)] leading-relaxed">
                If you feel therapy isn't helping, it's essential to discuss this openly with your therapist. Sometimes progress is slower than expected, particularly with long-standing issues, and recalibrating expectations can be helpful. Other times, the therapeutic approach may need adjustment—different techniques or a shift in focus might be more effective for your specific situation. Occasionally, external factors like ongoing substance use, untreated mental health conditions, domestic violence, or one partner's unwillingness to engage genuinely can impede progress, and these barriers need direct attention. If concerns persist despite adjustments, it may be appropriate to consider a referral to a different therapist with a different approach or specialty. A good therapist will welcome these conversations and work collaboratively with you to either adjust the treatment or help you find a better fit.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions/depression" className="block bg-white p-6 rounded-lg shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-primary)] transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Depression</h4>
              <p className="text-[var(--color-muted)] mb-4">Depression can significantly impact relationships, affecting communication, intimacy, and emotional connection between partners.</p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </Link>
            <Link href="/conditions/anxiety" className="block bg-white p-6 rounded-lg shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-primary)] transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Anxiety Disorders</h4>
              <p className="text-[var(--color-muted)] mb-4">Anxiety can create relationship challenges through avoidance behaviors, excessive reassurance-seeking, or conflict escalation patterns.</p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </Link>
            <Link href="/conditions/trauma-and-ptsd" className="block bg-white p-6 rounded-lg shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-primary)] transition-all">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Trauma & PTSD</h4>
              <p className="text-[var(--color-muted)] mb-4">Past trauma can affect trust, intimacy, and emotional regulation within relationships, requiring specialized therapeutic support.</p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Get Help for Relationship Difficulties Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face relationship difficulties alone. Our team is ready to help you rebuild connection, improve communication, and create the relationship you deserve.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/conditions"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}