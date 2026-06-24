import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What to Expect During Your First Psychiatric Appointment | Arlene Holland',
  description: 'Feeling nervous about your first psychiatric appointment? Learn what to expect, how to prepare, and what questions to ask in this comprehensive guide from our clinical team.',
  keywords: 'first psychiatric appointment, psychiatrist visit, mental health evaluation, psychiatric assessment, what to expect psychiatrist',
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
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            What to Expect During Your First Psychiatric Appointment
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Taking the step to schedule your first psychiatric appointment is courageous. Whether you're seeking help for anxiety, depression, mood changes, or simply want to understand your mental health better, it's completely normal to feel uncertain about what lies ahead. You might be wondering: What will the psychiatrist ask me? How long will it take? Will I need to share everything right away?
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding what to expect can ease anxiety and help you prepare for a productive first visit. This guide walks you through the entire process, from preparation to follow-up, so you can approach your appointment with confidence and clarity.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Before Your Appointment: How to Prepare
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Preparation can significantly enhance the quality of your first psychiatric evaluation. While you don't need to have everything perfectly organized, gathering key information beforehand helps your provider understand your situation more completely.
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">What to Bring:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">A list of current medications (including dosages) and any supplements you take</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Insurance card and photo ID</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Medical records or previous psychiatric evaluations, if available</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">A written summary of your main concerns and symptoms</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Questions you want to ask your psychiatrist</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Family history of mental health conditions, if known</span>
              </li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            It's also helpful to reflect on when your symptoms started, what makes them better or worse, and how they're affecting your daily life—work, relationships, sleep, and overall functioning.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Initial Evaluation: What Happens During the Appointment
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your first psychiatric appointment is typically longer than follow-up visits—usually 60 to 90 minutes. This extended time allows your provider to conduct a comprehensive evaluation and develop an accurate understanding of your mental health.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The appointment generally follows this structure:
          </p>

          <div className="space-y-6 ml-4 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">Chief Concern</h3>
              <p className="text-[var(--color-ink)] leading-loose">Your psychiatrist will begin by asking what brought you in—your primary concerns and reasons for seeking care. This is your opportunity to share what you're experiencing in your own words.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">Symptom History</h3>
              <p className="text-[var(--color-ink)] leading-loose">Expect detailed questions about your symptoms: when they started, how often they occur, their severity, and how they impact your daily functioning. Your provider may ask about sleep patterns, appetite changes, energy levels, concentration, and mood fluctuations.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">Medical and Psychiatric History</h3>
              <p className="text-[var(--color-ink)] leading-loose">You'll discuss past and current medical conditions, previous mental health treatment, hospitalizations, medications you've tried, and their effectiveness. Be honest about what has and hasn't worked—this information is crucial for treatment planning.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">Family and Social History</h3>
              <p className="text-[var(--color-ink)] leading-loose">Mental health conditions often run in families, so your psychiatrist will ask about relatives with psychiatric diagnoses. They'll also inquire about your living situation, relationships, work or school, substance use, and major life stressors.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">Mental Status Examination</h3>
              <p className="text-[var(--color-ink)] leading-loose">Your provider will observe your appearance, behavior, speech, mood, thought processes, and cognitive functioning throughout the conversation. This isn't a test you can fail—it's simply a clinical assessment tool.</p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl leading-relaxed" style={{ fontFamily: 'Cormorant, serif' }}>
              "Remember: your psychiatrist is on your team. The more honest and open you can be—even about difficult topics—the better they can help you find effective treatment."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Questions You May Be Asked
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While every evaluation is personalized, certain topics are commonly discussed during first appointments. Understanding these ahead of time can help you feel more prepared:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">"Can you describe how you've been feeling lately?"</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">"Have you experienced thoughts of harming yourself or others?"</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">"How are your sleep and appetite?"</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">"Do you use alcohol, tobacco, or other substances?"</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">"What are your support systems like—family, friends, community?"</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-[var(--color-ink)] leading-relaxed">"Have you experienced any trauma or major life changes recently?"</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Some questions may feel personal or uncomfortable, but they serve important clinical purposes. Your psychiatrist asks about sensitive topics—like suicidal thoughts or substance use—not to judge you, but to assess your safety and determine the most appropriate treatment. You always have the right to decline answering any question, though honesty leads to better care.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Diagnosis and Treatment Planning
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            After gathering comprehensive information, your psychiatrist will share their clinical impressions. They may provide a formal diagnosis, or they might explain that more time or information is needed. Either scenario is completely normal.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your provider will then discuss treatment recommendations, which may include:
          </p>

          <ul className="space-y-3 mb-6 ml-6">
            <li className="text-[var(--color-ink)] leading-loose list-disc">Medication management (if appropriate)</li>
            <li className="text-[var(--color-ink)] leading-loose list-disc">Psychotherapy or counseling referrals</li>
            <li className="text-[var(--color-ink)] leading-loose list-disc">Lifestyle modifications (sleep hygiene, exercise, stress management)</li>
            <li className="text-[var(--color-ink)] leading-loose list-disc">Laboratory tests or medical evaluations</li>
            <li className="text-[var(--color-ink)] leading-loose list-disc">Support groups or additional resources</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This is a collaborative conversation. Ask questions about any recommendations you don't understand. Discuss concerns about potential side effects, treatment duration, or cost. A good therapeutic relationship is built on open communication and shared decision-making.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Important Questions to Ask Your Psychiatrist
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            You're an active participant in your mental health care. Consider asking:
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 my-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">"What is my diagnosis, and what does it mean?"</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">"What are my treatment options, and what do you recommend?"</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">"If you're prescribing medication, what are the potential benefits and side effects?"</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">"How long before I might notice improvement?"</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">"What should I do if I experience a crisis or urgent symptoms?"</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">"How often will we meet, and what's the follow-up plan?"</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            After Your Appointment: Next Steps
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Following your first appointment, you'll typically schedule a follow-up visit within 2-4 weeks. This allows time for any prescribed medications to begin working and gives you a chance to report on your response to treatment.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Between appointments, keep track of your symptoms, medication effects, and any questions that arise. Many people find it helpful to use a journal or smartphone app to monitor mood, sleep, and daily functioning.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you experience concerning side effects, worsening symptoms, or a mental health emergency, contact your provider immediately. Don't wait until your next scheduled appointment if you're struggling.
          </p>

          {/* Closing */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              Your first psychiatric appointment is the beginning of a healing journey. While it's normal to feel nervous, remember that seeking professional help is a sign of strength, not weakness. Mental health conditions are treatable, and with the right support, improvement is possible.
            </p>
            
            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              At Arlene Holland, we understand that reaching out for help takes courage. Our team is committed to providing compassionate, evidence-based care in a safe and welcoming environment. If you're ready to take the next step in your mental health journey, we're here to support you.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Arlene Holland Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Mental Health. Our team is dedicated to delivering compassionate, evidence-based psychiatric care to help you achieve optimal mental wellness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="text-xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Depression: Signs, Symptoms, and Treatment Options
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn about the different types of depression, how to recognize the warning signs, and evidence-based treatments that can help.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Psychiatric Medications: A Complete Guide for Patients
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Everything you need to know about psychiatric medications, including how they work, what to expect, and managing side effects.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Wellness</div>
                <h4 className="text-xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Building Resilience: Mental Health Strategies for Daily Life
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover practical strategies to strengthen your mental health, manage stress, and build emotional resilience.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you on your journey to better mental health.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Appointment
          </a>
          <p className="text-white/70 text-sm mt-6">
            New patients welcome • Most insurance accepted • Telehealth available
          </p>
        </div>
      </section>
    </main>
  )
}