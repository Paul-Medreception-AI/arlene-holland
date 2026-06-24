import Link from 'next/link'

export const metadata = {
  title: 'New Patients | Arlene Holland',
  description: 'Everything you need to know before your first visit. Learn about what to expect, what to bring, patient forms, and our policies.',
}

export default function NewPatientsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6">New Patients</h1>
          <p className="text-xl text-white/90">Everything you need to know before your first visit</p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">Your First Visit</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="font-serif text-6xl text-[var(--color-primary)] mb-4">01</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">Schedule Your Appointment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Contact our office by phone or through our secure online form. We'll answer any questions about insurance, fees, and what to expect during your initial visit.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="font-serif text-6xl text-[var(--color-primary)] mb-4">02</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">Complete Your Paperwork</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arrive 15 minutes early to complete intake forms, or request forms in advance. This ensures we can start your appointment on time and maximize your time with Dr. Holland.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="font-serif text-6xl text-[var(--color-primary)] mb-4">03</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">Initial Evaluation</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your first appointment is a comprehensive assessment lasting 60-90 minutes. Dr. Holland will review your mental health history, current symptoms, and treatment goals in a comfortable, confidential setting.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="font-serif text-6xl text-[var(--color-primary)] mb-4">04</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Together, we'll develop a treatment plan tailored to your unique needs. This may include medication management, therapy, lifestyle recommendations, or a combination approach with regular follow-ups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">What to Bring</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Photo ID & Insurance */}
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Photo ID & Insurance Card</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Bring a current government-issued photo ID and both sides of your insurance card. We'll verify your benefits and coverage before your appointment.
                </p>
              </div>
            </div>

            {/* Medication List */}
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Current Medication List</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  List all current medications including dosages, frequency, and prescribing physicians. Include over-the-counter medications, supplements, and vitamins.
                </p>
              </div>
            </div>

            {/* Prior Records */}
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Prior Medical Records</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  If available, bring records from previous mental health treatment providers, hospitalization summaries, or recent lab work relevant to your care.
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Emergency Contact Information</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Please provide name and phone number for an emergency contact person who can be reached if needed during your treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] mb-6">Patient Forms</h2>
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Forms are available at our office or can be completed during your first appointment. Arriving early allows time to complete paperwork before your scheduled session.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[var(--color-primary)] rounded-full mt-2"></div>
                <p className="text-[var(--color-muted)]"><span className="font-semibold text-[var(--color-ink)]">Patient Intake Form:</span> Comprehensive health history and reason for visit</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[var(--color-primary)] rounded-full mt-2"></div>
                <p className="text-[var(--color-muted)]"><span className="font-semibold text-[var(--color-ink)]">Consent for Treatment:</span> Authorization to provide psychiatric care</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[var(--color-primary)] rounded-full mt-2"></div>
                <p className="text-[var(--color-muted)]"><span className="font-semibold text-[var(--color-ink)]">HIPAA Authorization:</span> Privacy practices and health information disclosure</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[var(--color-primary)] rounded-full mt-2"></div>
                <p className="text-[var(--color-muted)]"><span className="font-semibold text-[var(--color-ink)]">Financial Policy:</span> Payment terms and insurance information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Info */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">Telehealth Appointments</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* How It Works */}
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">How It Works</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Secure video appointments from the comfort of your home. You'll receive a private link before your scheduled session—simply click to join at your appointment time.
              </p>
            </div>

            {/* What You Need */}
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">Device Requirements</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                A smartphone, tablet, or computer with camera, microphone, and stable internet connection. Chrome or Safari browsers work best for our HIPAA-compliant platform.
              </p>
            </div>

            {/* Privacy Tips */}
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">Privacy & Comfort</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Find a quiet, private space where you won't be interrupted. Use headphones for additional privacy and ensure you're in a comfortable setting where you can speak freely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">Office Policies</h2>
          
          <div className="space-y-8 animate-fade-up">
            {/* Cancellation Policy */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Cancellation Policy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                We require 24 hours advance notice for appointment cancellations or rescheduling. This allows us to offer your time slot to other patients who need care.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Cancellations made with less than 24 hours notice may be subject to a cancellation fee. We understand emergencies happen—please contact our office to discuss your situation.
              </p>
            </div>

            {/* Late Arrivals */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Late Arrivals</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Please arrive on time for your scheduled appointment. If you arrive more than 15 minutes late, we may need to reschedule your appointment to avoid disrupting other patients' scheduled times.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your appointment time will end at the originally scheduled time even if you arrive late, to maintain our schedule for other patients.
              </p>
            </div>

            {/* No-Show Policy */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">No-Show Policy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Missing an appointment without advance notice is considered a no-show. No-show appointments may be subject to a fee and can affect your ability to schedule future appointments.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Multiple no-shows may result in discharge from the practice. We value your time and ask that you respect ours and that of other patients who need care.
              </p>
            </div>

            {/* Payment Policy */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Payment Policy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Payment is due at the time of service. We accept most major insurance plans, as well as cash, check, and credit cards. Copays and deductibles are collected at each visit.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                For insurance claims, we will submit claims on your behalf. You are responsible for any amounts not covered by your insurance, including copays, coinsurance, and deductibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Schedule your initial consultation and take the first step toward compassionate, personalized mental health care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all"
            >
              Schedule Your Consultation
            </Link>
            <Link 
              href="/services" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}