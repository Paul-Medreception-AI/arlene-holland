import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Panic Disorder Treatment | Arlene Holland Therapy',
  description: 'Expert treatment for panic disorder and panic attacks. Learn to manage anxiety and regain control of your life with compassionate, evidence-based therapy.',
}

export default function PanicDisorderPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Arlene Holland Therapy" width={50} height={50} className="rounded-full" />
              <span className="text-2xl font-bold" style={{ color: 'var(--color-ink)' }}>Arlene Holland</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-base hover:opacity-70 transition-opacity" style={{ color: 'var(--color-muted)' }}>About</Link>
              <Link href="/conditions" className="text-base hover:opacity-70 transition-opacity" style={{ color: 'var(--color-muted)' }}>Conditions</Link>
              <Link href="/contact" className="px-6 py-2.5 rounded-full text-white font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--color-primary)' }}>Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-up">
              <Link href="/conditions" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:opacity-70 transition-opacity" style={{ color: 'var(--color-primary)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Conditions
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--color-ink)' }}>Panic Disorder</h1>
              <p className="text-xl leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                Panic attacks can feel overwhelming and frightening, but with the right support, you can learn to manage them and reclaim your sense of safety and control.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-ink)' }}>Understanding Panic Disorder</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
                Panic disorder is characterized by recurrent, unexpected panic attacks—sudden episodes of intense fear that trigger severe physical reactions when there is no real danger or apparent cause. These attacks can be so frightening that many people develop an ongoing fear of having another attack, which can significantly impact daily life.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-muted)' }}>
                If you've experienced panic attacks, you know how debilitating they can be. The good news is that panic disorder is highly treatable, and many people learn to manage their symptoms effectively with proper support.
              </p>

              <div className="bg-white rounded-2xl p-8 mb-12 border" style={{ borderColor: 'var(--color-border)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-ink)' }}>Common Symptoms</h3>
                <p className="text-base mb-6" style={{ color: 'var(--color-muted)' }}>Panic attacks often include several of these symptoms:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: 'var(--color-muted)' }}>Racing or pounding heartbeat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: 'var(--color-muted)' }}>Sweating and trembling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: 'var(--color-muted)' }}>Shortness of breath or feeling of choking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: 'var(--color-muted)' }}>Chest pain or discomfort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: 'var(--color-muted)' }}>Nausea or stomach distress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: 'var(--color-muted)' }}>Feeling dizzy, lightheaded, or faint</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: 'var(--color-muted)' }}>Feelings of unreality or detachment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: 'var(--color-muted)' }}>Fear of losing control or "going crazy"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: 'var(--color-muted)' }}>Fear of dying</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-ink)' }}>How Therapy Can Help</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
                Cognitive-behavioral therapy (CBT) is highly effective for panic disorder. Through our work together, you'll learn to:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                  <span className="text-lg" style={{ color: 'var(--color-muted)' }}>Understand the physical and psychological aspects of panic attacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                  <span className="text-lg" style={{ color: 'var(--color-muted)' }}>Identify and challenge catastrophic thinking patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                  <span className="text-lg" style={{ color: 'var(--color-muted)' }}>Develop effective breathing and relaxation techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                  <span className="text-lg" style={{ color: 'var(--color-muted)' }}>Gradually face feared situations through exposure therapy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                  <span className="text-lg" style={{ color: 'var(--color-muted)' }}>Break the cycle of anxiety about having panic attacks</span>
                </li>
              </ul>

              <div className="bg-white rounded-2xl p-8 mb-12 border" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-cream)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-ink)' }}>What to Expect in Treatment</h3>
                <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
                  Treatment for panic disorder typically involves understanding the nature of panic, learning coping skills, and gradually building confidence in your ability to manage symptoms. We'll work at a pace that feels comfortable for you, and I'll be there to support you every step of the way.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  Many people begin to see improvement within weeks of starting treatment, and with practice and commitment, you can significantly reduce the frequency and intensity of panic attacks.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-ink)' }}>You Don't Have to Face This Alone</h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-muted)' }}>
                Living with panic disorder can feel isolating and overwhelming, but effective help is available. I provide a safe, understanding environment where you can work through your fears and develop the tools you need to manage panic attacks confidently.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-ink)' }}>Ready to Take the First Step?</h2>
            <p className="text-xl mb-8" style={{ color: 'var(--color-muted)' }}>
              Schedule a consultation to discuss how we can work together to help you manage panic disorder.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 rounded-full text-white font-medium text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--color-primary)' }}>
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Arlene Holland, LCSW</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                Licensed Clinical Social Worker providing compassionate, evidence-based therapy.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--color-muted)' }}>About</Link></li>
                <li><Link href="/conditions" className="text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--color-muted)' }}>Conditions</Link></li>
                <li><Link href="/contact" className="text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--color-muted)' }}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                Serving clients in New York<br />
                Licensed LCSW
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
              &copy; {new Date().getFullYear()} Arlene Holland Therapy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}