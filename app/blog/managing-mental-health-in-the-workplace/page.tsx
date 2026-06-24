import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managing Mental Health in the Workplace | Arlene Holland',
  description: 'Learn evidence-based strategies for supporting mental health at work. Discover practical tips for stress management, setting boundaries, and creating a healthier work environment.',
  keywords: 'workplace mental health, work stress management, employee wellbeing, work-life balance, occupational mental health, stress at work',
  openGraph: {
    title: 'Managing Mental Health in the Workplace | Arlene Holland',
    description: 'Learn evidence-based strategies for supporting mental health at work. Discover practical tips for stress management, setting boundaries, and creating a healthier work environment.',
    type: 'article',
    url: 'https://arleneholland.net/blog/managing-mental-health-in-the-workplace',
  }
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{fontFamily: 'Cormorant, serif'}}>
            Managing Mental Health in the Workplace
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
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              You spend roughly one-third of your adult life at work. For many of us, the workplace is where we find purpose, connection, and financial stability. Yet it can also be a significant source of stress, anxiety, and burnout. The demands of modern work culture—constant connectivity, tight deadlines, interpersonal conflicts, and the pressure to perform—can take a serious toll on mental health.
            </p>
            <p className="mb-6">
              The good news? Mental health in the workplace is no longer a taboo topic. Organizations are increasingly recognizing that employee wellbeing is not just a moral imperative but a business necessity. And individuals are learning that prioritizing mental health at work isn't a sign of weakness—it's an essential part of sustainable success.
            </p>
            <p>
              This guide explores evidence-based strategies for managing mental health in the workplace, whether you're an employee seeking balance or a leader looking to support your team.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Understanding Workplace Mental Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Workplace mental health refers to the emotional, psychological, and social wellbeing of employees in their work environment. It encompasses how people think, feel, and behave at work, as well as their ability to cope with stress, relate to colleagues, and perform their duties effectively.
            </p>
            <p className="mb-6">
              According to the World Health Organization, depression and anxiety disorders cost the global economy an estimated $1 trillion per year in lost productivity. In the United States, nearly 1 in 5 adults experiences mental illness each year, and many of those individuals are navigating their symptoms while maintaining employment.
            </p>
            <p>
              Common workplace mental health challenges include chronic stress, burnout, anxiety, depression, interpersonal conflict, and difficulty maintaining work-life balance. Left unaddressed, these issues can lead to decreased productivity, increased absenteeism, higher turnover rates, and serious long-term health consequences.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{fontFamily: 'Cormorant, serif'}}>
            "Taking care of your mental health at work isn't about working less—it's about working in a way that sustains you for the long term."
          </blockquote>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Recognizing the Warning Signs
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The first step in managing mental health at work is awareness. Many people don't recognize when workplace stress has crossed the line into something more serious. Here are key warning signs to watch for:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent fatigue or exhaustion, even after rest</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty concentrating or making decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Increased irritability or emotional reactivity</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Changes in sleep patterns or appetite</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Withdrawal from colleagues or social activities</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Physical symptoms like headaches, muscle tension, or stomach problems</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Loss of motivation or sense of accomplishment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Feeling cynical or detached from work</span>
              </li>
            </ul>
            <p>
              If you're experiencing several of these symptoms consistently, it may be time to take action. Remember: seeking help early is always better than waiting until you're in crisis.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Practical Strategies for Employees
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While systemic workplace issues require organizational solutions, there are meaningful steps you can take individually to protect and improve your mental health at work:
            </p>
            
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3 mt-6">Set Clear Boundaries</h3>
            <p className="mb-4">
              Establish clear work hours and communicate them to your team. Avoid checking email after hours when possible, and use vacation time without guilt. Boundaries aren't about being uncooperative—they're about sustainable productivity.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3 mt-6">Practice Stress Management Techniques</h3>
            <p className="mb-4">
              Incorporate brief mindfulness practices, deep breathing exercises, or short walks into your workday. Research shows that even five minutes of intentional stress reduction can improve focus and emotional regulation.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3 mt-6">Build Supportive Relationships</h3>
            <p className="mb-4">
              Cultivate positive connections with colleagues. Having even one trusted work friend can significantly buffer against stress and improve job satisfaction. Don't isolate yourself when you're struggling.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3 mt-6">Prioritize Physical Health</h3>
            <p className="mb-4">
              Regular exercise, adequate sleep, and nutritious meals aren't luxuries—they're foundational to mental health. Physical and mental wellbeing are deeply interconnected.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3 mt-6">Communicate When Needed</h3>
            <p className="mb-4">
              If you're overwhelmed, speak up. Talk to your supervisor about workload concerns, request reasonable accommodations if needed, or explore your company's Employee Assistance Program (EAP) if available.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3 mt-6">Seek Professional Support</h3>
            <p>
              Therapy isn't just for crises. Working with a mental health professional can help you develop coping strategies, process workplace stress, and build resilience. Many therapists specialize in work-related issues and can provide targeted support.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Creating a Mentally Healthy Workplace Culture
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              For leaders and organizations, creating a workplace culture that supports mental health requires intentional effort and sustained commitment. Here are evidence-based approaches:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Normalize conversations about mental health</strong> – Leaders should model openness and create safe spaces for employees to discuss challenges without fear of stigma or retaliation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Provide adequate resources</strong> – Offer comprehensive mental health benefits, EAP programs, flexible work arrangements, and access to professional support</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Train managers</strong> – Equip supervisors with skills to recognize signs of distress, have supportive conversations, and connect employees with resources</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Address workload and expectations</strong> – Unrealistic demands are a leading cause of burnout. Regularly assess whether expectations are sustainable</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Foster inclusion and psychological safety</strong> – Environments where people feel valued, respected, and able to be authentic are protective for mental health</span>
              </li>
            </ul>
            <p>
              Organizations that prioritize mental health see measurable returns: improved employee engagement, reduced turnover, lower healthcare costs, and enhanced productivity. It's an investment that pays dividends for everyone.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Sometimes self-care strategies and workplace adjustments aren't enough. If you're experiencing any of the following, it's time to reach out to a mental health professional:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent feelings of hopelessness or despair</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Symptoms that interfere with daily functioning</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Thoughts of self-harm or suicide</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Substance use as a coping mechanism</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Inability to manage stress despite trying various strategies</span>
              </li>
            </ul>
            <p>
              Therapy can provide a confidential space to explore workplace challenges, develop coping skills, and work through underlying issues. Many people find that addressing mental health proactively improves not just their work life, but their overall quality of life.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Moving Forward with Compassion
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Managing mental health in the workplace is not about achieving perfection or eliminating all stress. It's about building awareness, developing healthy coping mechanisms, and creating environments where people can thrive while doing meaningful work.
            </p>
            <p className="mb-6">
              Whether you're an employee navigating your own challenges or a leader working to support your team, remember that change takes time. Small, consistent steps—setting one boundary, starting one supportive conversation, implementing one new policy—can create meaningful progress over time.
            </p>
            <p>
              Your mental health matters. Your wellbeing at work matters. If you're struggling, know that support is available, and reaching out for help is a sign of strength, not weakness. You don't have to navigate this alone.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold text-[var(--color-ink)] mb-1">
                Written by the Arlene Holland Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Mental Health
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center" style={{fontFamily: 'Cormorant, serif'}}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Mental Health</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 font-light group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant, serif'}}>
                  Understanding Anxiety Disorders
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about the different types of anxiety disorders and evidence-based treatment approaches.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Self-Care</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 font-light group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant, serif'}}>
                  Building Healthy Coping Skills
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Practical strategies for managing stress and building emotional resilience in daily life.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Relationships</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 font-light group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant, serif'}}>
                  Setting Healthy Boundaries
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  How to establish and maintain boundaries that protect your wellbeing and relationships.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'Cormorant, serif'}}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help.
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