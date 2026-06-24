import Link from 'next/link'

export default function ReviewsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-light mb-6">What Our Patients Say</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="text-xl">5.0 · 50+ Reviews</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="flex gap-1 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed text-sm mb-6">"Dr. Holland completely changed my life. After struggling with anxiety for years, her compassionate approach and expertise in medication management helped me find the right treatment. She takes the time to truly listen and understand your concerns. I finally feel like myself again."</p>
              <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">Sarah M. — Anxiety Treatment</p>
              <p className="text-xs text-[var(--color-muted)]">Google</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="flex gap-1 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed text-sm mb-6">"I was hesitant to try medication for my depression, but Dr. Holland's thorough evaluation and patient explanations put me at ease. She monitors my progress carefully and adjusts my treatment as needed. Her combination of medication management and supportive therapy has been incredibly effective."</p>
              <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">Michael T. — Depression Treatment</p>
              <p className="text-xs text-[var(--color-muted)]">Healthgrades</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="flex gap-1 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed text-sm mb-6">"Getting my ADHD diagnosis from Dr. Holland was life-changing. Her comprehensive assessment helped me understand struggles I'd had my whole life. She developed a treatment plan with both medication and behavioral strategies that actually works with how my brain functions. I'm more productive and less overwhelmed."</p>
              <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">Jennifer L. — ADHD Assessment</p>
              <p className="text-xs text-[var(--color-muted)]">Google</p>
            </div>

            {/* Review 4 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="flex gap-1 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed text-sm mb-6">"Dr. Holland's holistic approach to mental health care is exactly what I needed. She doesn't just prescribe medication—she takes time to understand your whole life situation. Her psychotherapy sessions have given me tools to manage stress and anxiety that I use every day. Highly recommend her to anyone seeking quality mental health care."</p>
              <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">David R. — Psychotherapy</p>
              <p className="text-xs text-[var(--color-muted)]">Healthgrades</p>
            </div>

            {/* Review 5 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="flex gap-1 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed text-sm mb-6">"After years of panic attacks, I finally found relief with Dr. Holland. Her evidence-based approach to anxiety treatment combined cognitive behavioral techniques with the right medication. She's patient, knowledgeable, and genuinely cares about her patients. I can't thank her enough for giving me my life back."</p>
              <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">Amanda K. — Panic Disorder</p>
              <p className="text-xs text-[var(--color-muted)]">Google</p>
            </div>

            {/* Review 6 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="flex gap-1 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed text-sm mb-6">"The initial psychiatric evaluation with Dr. Holland was the most thorough I've ever experienced. She asked thoughtful questions and really listened to my answers. Her comprehensive approach identified issues I didn't even realize were connected. The personalized treatment plan she created has made a significant difference in my quality of life."</p>
              <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">Robert M. — Psychiatric Evaluation</p>
              <p className="text-xs text-[var(--color-muted)]">Healthgrades</p>
            </div>

            {/* Review 7 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="flex gap-1 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed text-sm mb-6">"I struggled with seasonal depression every winter until I started seeing Dr. Holland. She explained the biological factors behind my symptoms and developed a treatment plan that included medication and light therapy. This is the first winter in years where I've felt hopeful and energetic. Her expertise has truly transformed my life."</p>
              <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">Lisa P. — Seasonal Affective Disorder</p>
              <p className="text-xs text-[var(--color-muted)]">Google</p>
            </div>

            {/* Review 8 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="flex gap-1 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed text-sm mb-6">"Dr. Holland's careful medication management made all the difference for me. Previous psychiatrists would prescribe something and I wouldn't hear from them for months. Dr. Holland checks in regularly, adjusts dosages when needed, and always explains why. She found the right medication at the right dose, and I have minimal side effects."</p>
              <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">Thomas H. — Medication Management</p>
              <p className="text-xs text-[var(--color-muted)]">Healthgrades</p>
            </div>

            {/* Review 9 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm animate-fade-up">
              <div className="flex gap-1 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="italic text-[var(--color-ink)] leading-relaxed text-sm mb-6">"What sets Dr. Holland apart is her ability to combine evidence-based treatment with genuine compassion. She helped me understand that my social anxiety wasn't a character flaw but a treatable condition. Through a combination of therapy and medication, I've made progress I never thought possible. She's an exceptional psychiatrist who truly cares."</p>
              <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">Emily S. — Social Anxiety</p>
              <p className="text-xs text-[var(--color-muted)]">Google</p>
            </div>

          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center animate-fade-up">
              <div className="text-5xl font-bold text-[var(--color-primary)] mb-2">5.0</div>
              <div className="text-[var(--color-muted)] text-sm">Average Star Rating</div>
            </div>

            <div className="text-center animate-fade-up">
              <div className="text-5xl font-bold text-[var(--color-primary)] mb-2">50+</div>
              <div className="text-[var(--color-muted)] text-sm">Patient Reviews</div>
            </div>

            <div className="text-center animate-fade-up">
              <div className="text-5xl font-bold text-[var(--color-primary)] mb-2">95%</div>
              <div className="text-[var(--color-muted)] text-sm">Would Recommend</div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="font-serif text-4xl font-light mb-6">Experience Compassionate Care for Yourself</h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">Join the many patients who have found relief and healing through personalized, evidence-based treatment.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}