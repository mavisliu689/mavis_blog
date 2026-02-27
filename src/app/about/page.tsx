import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function About() {
  return (
    <div>
      <ScrollReveal>
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
      </ScrollReveal>

      <ScrollReveal className="mt-10">
        <div className="flex flex-col sm:flex-row items-start gap-8">
          <div className="w-32 h-32 rounded-full bg-[var(--card-border)] overflow-hidden flex-shrink-0">
            <Image
              src="/mavis_blog/images/avatar.jpg"
              alt="Mavis Liu"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Mavis Liu</h2>
            <p className="mt-3 text-[var(--muted)] leading-relaxed">
              Hi! I&apos;m Mavis — a full-stack engineer with nearly a decade of experience.
              I specialize in data analytics and system architecture, and I&apos;ve shared
              insights on chatbot design and n8n workflow automation.
            </p>
            <p className="mt-3 text-[var(--muted)] leading-relaxed">
              This blog is where I document my technical explorations and thoughts.
              Feel free to reach out — I&apos;m always happy to connect and exchange ideas.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-[var(--muted)] leading-relaxed">
          Feel free to reach out via{' '}
          <a href="mailto:mavis930600@gmail.com" className="text-[var(--accent)] underline underline-offset-2 hover:opacity-70 transition-opacity">
            email
          </a>{' '}
          or connect with me on social media through the links below.
        </p>
      </ScrollReveal>
    </div>
  );
}
