import Link from 'next/link'

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Arlene Holland",
      role: "Lead Psychiatrist & Founder",
      bio: "Board-certified psychiatrist with over 15 years of clinical experience in comprehensive mental health care. Dr. Holland specializes in evidence-based treatment approaches that address the whole person, combining medication management with therapeutic interventions to achieve lasting results."
    },
    {
      name: "Sarah Mitchell",
      role: "Licensed Clinical Therapist",
      bio: "Licensed therapist specializing in cognitive behavioral therapy and trauma-informed care. Sarah works collaboratively with our psychiatric team to provide integrated treatment, helping clients develop practical coping strategies and work through underlying emotional patterns."
    },
    {
      name: "Jennifer Ramirez",
      role: "Patient Care Coordinator",
      bio: "Dedicated to ensuring every patient receives compassionate support throughout their treatment journey. Jennifer manages scheduling, insurance coordination, and serves as your primary point of contact for questions about appointments, prescriptions, and navigating our care system."
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-6xl font-light mb-6">Meet Our Team</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            A dedicated group of mental health professionals committed to providing compassionate, evidence-based care tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16 text-[var(--color-ink)]">Our Providers & Staff</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow animate-fade-up"
              >
                <div className="bg-[var(--color-light)] h-72 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="var(--color-primary)" 
                    strokeWidth={1.5} 
                    className="w-20 h-20 opacity-40"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-1">{member.name}</h3>
                  <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Schedule your consultation with our compassionate team and take the first step toward transformative mental health care
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-dark)] transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}