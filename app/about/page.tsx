import { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/Button'
import SectionLabel from '@/components/SectionLabel'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Nadia Wilkinson | MBACP Counsellor',
  description:
    'Learn about Nadia Wilkinson, an MBACP registered counsellor offering online therapy across the UK, specialising in anxiety, ADHD, autism, trauma, and bereavement support for adults.',
  openGraph: {
    title: 'About Nadia Wilkinson | MBACP Counsellor | NW Counselling',
    description:
      'Learn about Nadia Wilkinson, an MBACP registered counsellor offering online therapy across the UK, specialising in anxiety, ADHD, autism, trauma, and bereavement support for adults.',
    images: ['/images/og-about.jpg'],
  },
}

const extendedFAQ = [
  {
    question: 'Is my problem or issue bad enough to need counselling?',
    answer:
      "If an issue is bothering you or you would just like to reflect on where you are in life right now with a non-judgemental, supportive professional then counselling is for you. You do not need to be going through a major bereavement, marriage break up or significant trauma to be deemed worthy of counselling; it is healthy to explore your life, experiences and patterns of behaviour to see if there is anything that can be changed or tweaked to make your life even just a little more fulfilling and authentic.",
  },
  {
    question: 'How is counselling different to talking with a friend or family member?',
    answer:
      "Counselling is unique in that the whole 50-minute session each week is given over to you—your issues, concerns, feelings, and experiences, unlike a conversation with a family member or friends where they will want to share their issues too. Friends and family can be judgemental and may want to give you advice or tell you exactly what to do. A counsellor will help you explore your issue with no judgement, warmth, and empathy to help you find your own way through as this builds emotional resilience and empowerment, leading you to place greater trust in yourself. You are best placed to know what is right for you.",
  },
  {
    question: "What's the difference between counselling and psychotherapy?",
    answer:
      "Psychotherapy is a specific approach in counselling which places a large emphasis on looking back at your childhood and earliest life experiences to consider how these shape your current thought and behaviour patterns. It also looks at defence mechanisms you may have developed over time. Counselling may draw on psychodynamic approaches but may also use other counselling models as well in an integrative way to best meet the needs of the client. This is my approach and I am very much guided by what you need or works best for you.",
  },
  {
    question: 'Will I feel worse before I feel better?',
    answer:
      "Counselling may tap into deep and painful emotions and experiences that you have been holding on to, sometimes for many years. It can bring old wounds into the light which may feel difficult but research shows that being able to label and feel painful emotions helps us to heal, grow and move forwards so yes it could be that sessions may be painful and challenging at times, depending on the material you bring.",
  },
  {
    question: "What if I feel it's not working or making any difference?",
    answer:
      "Just be honest and tell me. This way we can discuss why this might be and find the best way forward. It might open up a more honest conversation between us that helps us to move on or we may decide that a parting of ways or a referral onwards is the best step.",
  },
  {
    question: 'Will you give me advice and tell me what to do?',
    answer:
      "My key approach in counselling is a person-centred one, where the core belief is that a person knows what is best for them and can find a way through their difficulties if provided with the right conditions. These conditions are created in the counselling room, giving you the time, space, and confidence to explore issues with a supportive companion. I will not tell you what to do, but rather through exploration of the issues you bring, your way forward will become clearer to you.",
  },
  {
    question: 'How do counselling sessions work?',
    answer:
      "As a client, the 50 minutes is entirely yours to bring any issues, concerns, past or present experiences and feelings that are troubling you. It's usually a good idea to have a few issues in your mind that you want to explore during the session.",
  },
  {
    question: 'What happens in the first session?',
    answer:
      "The first session is about getting to know each other. I'll ask some questions to understand what's brought you to counselling, and you can ask me anything you need to. There's no pressure to dive deep straight away—we'll go at your pace.",
  },
  {
    question: 'How long does counselling typically last?',
    answer:
      "There's no set number of sessions. Some people come for a few months to work through something specific; others find ongoing support helpful for longer. We'll regularly check in about what feels right for you.",
  },
  {
    question: 'Is everything I say confidential?',
    answer:
      "Yes, with very few exceptions. What you share stays between us unless there's a risk of serious harm to you or someone else. I'll explain this fully in our first session, and you can ask any questions.",
  },
]

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pb-28 bg-soft-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="aspect-[3/4] bg-sage-mist rounded-2xl overflow-hidden relative max-w-md">
                <Image
                  src="/images/Nadia-Profile.jpg"
                  alt="Nadia Wilkinson, MBACP registered counsellor"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>

            <div className="lg:pt-8">
              <SectionLabel className="mb-4 block">About me</SectionLabel>
              <h1
                className="text-4xl md:text-5xl mb-8"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                Hello, I&apos;m Nadia
              </h1>

              <div className="space-y-5 text-muted-brown leading-relaxed text-lg">
                <p>
                  I&apos;m a registered counsellor offering online sessions to adults 
                  who are navigating difficult feelings, relationships, or life situations.
                </p>
                <p>
                  What led me to this work? I&apos;ve always been drawn to understanding people—
                  what makes us tick, how we cope, and what helps us change. After a career 
                  in [previous field], I trained as a counsellor because I wanted to do 
                  something that felt genuinely meaningful.
                </p>
                <p>
                  I particularly enjoy working with people who are trying to understand 
                  themselves better—whether that&apos;s processing a late ADHD or autism 
                  diagnosis, working through anxiety that won&apos;t shift, or making sense 
                  of how past experiences affect the present.
                </p>
              </div>

              {/* Lucy the cockapoo */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-32 h-32 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src="/images/lucy-dog.jpg"
                    alt="Lucy the cockapoo"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-lg text-muted-brown italic">
                  Often joined by Lucy, my cockapoo therapy assistant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Credentials */}
      <section className="py-20 lg:py-28 bg-sage-mist/30">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Training & credentials</SectionLabel>
          <h2
            className="text-3xl md:text-4xl mb-8"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            My background
          </h2>

          <div className="space-y-6 text-muted-brown leading-relaxed">
            <p>
              I hold a Diploma in Person-Centred Counselling and am a registered member 
              of the British Association for Counselling and Psychotherapy (BACP). This 
              means I adhere to their ethical framework and engage in regular supervision 
              to ensure the quality of my work.
            </p>
            <p>
              I&apos;ve completed additional training in working with neurodivergent clients, 
              trauma-informed approaches, and bereavement support. I believe in continual 
              learning—there&apos;s always more to understand about the human experience.
            </p>
            <p className="font-medium text-warm-charcoal">
              BACP Membership Number: {SITE_CONFIG.credentials.split('#')[1]}
            </p>
          </div>

          <div className="mt-8 p-6 bg-white/60 rounded-xl border border-sage-mist/30">
            <p className="text-sm text-muted-brown">
              <strong className="text-warm-charcoal">What this means for you:</strong> You can be 
              confident that I&apos;m properly trained, work ethically, and have professional 
              support. You can verify my registration on the{' '}
              <a
                href="https://www.bacp.co.uk/therapists/394901/nadia-wilkinson/london-sw11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta-clay hover:text-forest-brown underline"
              >
                BACP register
              </a>
              .
            </p>
          </div>

          {/* Credibility Logos */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <a
              href="https://www.bacp.co.uk/therapists/394901/nadia-wilkinson/london-sw11"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-20 w-36 grayscale hover:grayscale-0 transition-all duration-300 block"
            >
              <Image
                src="/images/BACP-logo.jpg"
                alt="BACP - British Association for Counselling and Psychotherapy"
                fill
                className="object-contain"
              />
            </a>
            <div className="relative h-20 w-36 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/images/HCPC-Logo.png"
                alt="HCPC - Health and Care Professions Council"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-20 w-36 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/images/Enhanced-DBS-Logo.png"
                alt="Enhanced DBS Checked"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 lg:py-28 bg-soft-cream">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <SectionLabel className="mb-4 block">My approach</SectionLabel>
          <h2
            className="text-3xl md:text-4xl mb-8"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            How I work
          </h2>

          <div className="space-y-6 text-muted-brown leading-relaxed">
            <p>
              My approach is rooted in person-centred therapy, which means I believe 
              you&apos;re the expert on your own life. I won&apos;t tell you what to do or 
              give you homework—instead, I create a space where you can explore your 
              thoughts and feelings without judgment.
            </p>
            <p>
              What I offer is genuine presence: I&apos;ll really listen, reflect back what 
              I hear, and help you make connections you might not see on your own. 
              Sometimes that means sitting with difficult feelings together; sometimes 
              it&apos;s noticing patterns that have been invisible.
            </p>
            <p>
              I also draw on integrative elements when helpful—particularly when working 
              with anxiety, trauma, or neurodivergence. But the foundation is always 
              respect for your experience and trust in your capacity to find your way.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white/60 rounded-xl border border-sage-mist/30">
              <h3 className="font-bold mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                What to expect early on
              </h3>
              <p className="text-sm text-muted-brown">
                The first few sessions are about building trust and understanding what 
                you&apos;re hoping to explore. There&apos;s no pressure to dive deep immediately.
              </p>
            </div>
            <div className="p-6 bg-white/60 rounded-xl border border-sage-mist/30">
              <h3 className="font-bold mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Ongoing work
              </h3>
              <p className="text-sm text-muted-brown">
                As trust develops, we can go deeper. You set the pace. Some weeks 
                might be heavy; others, lighter. Both are valuable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practicalities */}
      <section className="py-20 lg:py-28 bg-sage-mist/30">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Practicalities</SectionLabel>
          <h2
            className="text-3xl md:text-4xl mb-12"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            The details
          </h2>

          <div className="overflow-hidden rounded-xl border border-sage-mist/30 bg-white/60">
            <table className="w-full">
              <tbody className="divide-y divide-sage-mist/30">
                <tr>
                  <td className="px-6 py-4 text-muted-brown font-medium">Sessions</td>
                  <td className="px-6 py-4 text-warm-charcoal">{SITE_CONFIG.sessionLength}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-muted-brown font-medium">Frequency</td>
                  <td className="px-6 py-4 text-warm-charcoal">Weekly or fortnightly</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-muted-brown font-medium">Location</td>
                  <td className="px-6 py-4 text-warm-charcoal">
                    Online (Zoom or Google Meet)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-muted-brown font-medium">Fee</td>
                  <td className="px-6 py-4 text-warm-charcoal">{SITE_CONFIG.sessionFee} per session</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-muted-brown font-medium">Days</td>
                  <td className="px-6 py-4 text-warm-charcoal">
                    Monday, Tuesday and Wednesday
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-muted-brown font-medium">Availability</td>
                  <td className="px-6 py-4 text-warm-charcoal">
                    Currently accepting new clients (short wait possible)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-muted-brown text-sm">
            I offer a limited number of concessionary slots for students or those on 
            low incomes—please get in touch to discuss if this applies to you.
          </p>
          <p className="mt-3 text-muted-brown text-sm">
            In-person sessions are occasionally available on Monday afternoons in 
            Lavender Hill, Clapham Junction, London.
          </p>
        </div>
      </section>

      {/* Extended FAQ */}
      <section id="faq" className="py-20 lg:py-28 bg-soft-cream scroll-mt-24">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <SectionLabel className="mb-4 block">More questions</SectionLabel>
          <h2
            className="text-3xl md:text-4xl mb-12"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            Frequently asked
          </h2>

          <div className="space-y-10">
            {extendedFAQ.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {faq.question}
                </h3>
                <p className="text-muted-brown leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28 bg-sage-mist">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            Would you like to talk?
          </h2>
          <p className="text-lg text-muted-brown mb-10 max-w-xl mx-auto">
            If anything on this page resonates, I&apos;d be glad to hear from you. 
            There&apos;s no obligation—just a conversation to see if I might be able to help.
          </p>
          <Button href="/contact" size="lg">
            Get in touch
          </Button>
        </div>
      </section>
    </div>
  )
}
