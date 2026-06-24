import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://arleneholland.net'
  const now = new Date()

  const corePages = [
    { url: base, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/conditions`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/team`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/insurance`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/new-patients`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/telehealth`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/reviews`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/sms-terms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ].map(p => ({ ...p, lastModified: now }))

  const servicePages = [
    { url: `${base}/services/psychiatric-evaluation`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/medication-management`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/psychotherapy`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/anxiety-treatment`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/depression-treatment`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/adhd-assessment-treatment`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now }
  ]

  const conditionPages = [
    { url: `${base}/conditions/major-depressive-disorder`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/generalized-anxiety-disorder`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/panic-disorder`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/social-anxiety-disorder`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/obsessive-compulsive-disorder-ocd`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/post-traumatic-stress-disorder-ptsd`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/attention-deficit-hyperactivity-disorder-adhd`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/bipolar-disorder`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/persistent-depressive-disorder-dysthymia`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/seasonal-affective-disorder`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/adjustment-disorders`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/insomnia-and-sleep-disorders`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/perinatal-and-postpartum-depression`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/premenstrual-dysphoric-disorder-pmdd`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/specific-phobias`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/illness-anxiety-disorder`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/bereavement-and-grief`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/work-related-stress`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/relationship-difficulties`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/life-transitions`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/burnout-syndrome`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/low-self-esteem`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/anger-management-issues`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/perfectionism`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/chronic-pain-with-psychiatric-comorbidity`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now }
  ]

  const blogPages = [
    { url: `${base}/blog/understanding-the-difference-between-sadness-and-clinical-de`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/5-evidence-based-strategies-for-managing-anxiety-in-daily-li`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/adhd-in-adults-signs-you-might-have-missed-your-entire-life`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-truth-about-psychiatric-medications-debunking-common-myt`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-to-know-when-therapy-alone-isn-t-enough`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-connection-between-sleep-and-mental-health`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/what-to-expect-during-your-first-psychiatric-appointment`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/postpartum-depression-more-than-just-baby-blues`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/managing-anxiety-without-benzodiazepines-modern-approaches`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-role-of-exercise-in-treating-depression-and-anxiety`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-panic-attacks-triggers-symptoms-and-treatment`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-trauma-affects-the-brain-and-body`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/seasonal-affective-disorder-when-winter-brings-more-than-col`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-gut-brain-connection-how-nutrition-affects-mental-health`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/recognizing-high-functioning-depression-and-anxiety`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/medication-genetic-testing-is-it-right-for-you`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/breaking-the-stigma-why-seeking-mental-health-care-is-a-sign`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-impact-of-social-media-on-mental-health`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/managing-mental-health-during-life-transitions`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/when-to-consider-changing-your-psychiatric-medication`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-bipolar-disorder-beyond-mood-swings`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-relationship-between-chronic-pain-and-depression`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-to-support-a-loved-one-with-mental-illness`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/mindfulness-and-meditation-for-mental-health-does-it-really-`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-ocd-more-than-just-being-organized`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-connection-between-adhd-and-anxiety`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/burnout-when-stress-becomes-a-mental-health-crisis`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-hormones-affect-mental-health-throughout-life`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-benefits-of-combining-therapy-and-medication`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-antidepressants-types-effects-and-expectations`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/social-anxiety-more-than-just-shyness`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-role-of-routine-and-structure-in-mental-health`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-medication-side-effects-and-how-to-manage-them`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-impact-of-substance-use-on-mental-health-treatment`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/perfectionism-and-mental-health-when-high-standards-become-h`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/finding-the-right-psychiatrist-what-to-look-for`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/mental-health-crisis-when-and-how-to-seek-emergency-care`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-importance-of-regular-follow-up-in-psychiatric-care`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-childhood-experiences-shape-adult-mental-health`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/managing-mental-health-in-the-workplace`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const comparePages = [
    { url: `${base}/compare/psychiatrist-vs-psychologist`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/ssris-vs-snris`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/therapy-vs-medication`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/anxiety-vs-depression`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/in-person-vs-telepsychiatry`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const locationPages = [
    { url: `${base}/locations/holland-mi`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/grand-rapids-mi`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/zeeland-mi`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/grand-haven-mi`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const priorRecoveryPages = [
  ]

  return [...corePages, ...servicePages, ...conditionPages, ...blogPages, ...comparePages, ...locationPages, ...priorRecoveryPages]
}