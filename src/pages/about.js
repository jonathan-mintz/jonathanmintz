import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import aboutImageUrl from '@site/static/img/jonathanmintz.png';

import styles from './about.module.css';

const whatsappUrl = 'https://wa.me/972507225001';
const emailUrl = 'mailto:jonathanmintz3@gmail.com';
const tiktokUrl = 'https://www.tiktok.com/@jonathan.mintz3?_r=1&_t=ZS-94ICmFTeZFg';

const highlights = [
  {
    title: 'What Jonathan Does',
    text: 'Habit-change facilitator and coach who blends nutrition, movement, emotional processes, and mind-body integration.',
  },
  {
    title: 'Approach',
    text: 'Practical, grounded routines that fit real life—no extremes, no empty promises.',
  },
  {
    title: 'Focus',
    text: 'Health, energy, and sustainable change for people and organizations looking to build long-term momentum.',
  },
];

export default function AboutPage() {
  return (
    <Layout
      title="About Jonathan"
      description="Jonathan Mintz is a habit-change facilitator and coach focused on sustainable health and energy.">
      <main className={styles.page}>
        <div className="container">
          <section className={styles.hero}>
            <div className={styles.portraitWrap}>
              <div className={styles.portraitFrame}>
                <img
                  className={styles.portrait}
                  src={aboutImageUrl}
                  alt="Jonathan Mintz"
                  loading="lazy"
                />
              </div>
              <span className={styles.badge}>Habit-change facilitator</span>
            </div>
            <div>
              <p className={styles.kicker}>About</p>
              <Heading as="h1" className={styles.title}>
                Jonathan Mintz
              </Heading>
              <div className={styles.quickLinks}>
                <a
                  className={styles.quickLink}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  WhatsApp 050-722-5001
                </a>
                <a className={styles.quickLink} href={emailUrl}>
                  Email
                </a>
                <a
                  className={styles.quickLink}
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  TikTok
                </a>
              </div>
              <p className={styles.lede}>
                Jonathan combines practical knowledge from nutrition, body movement,
                emotional processes, and mind-body integration. His work helps people
                create health and energy without extremes—through habits that feel
                realistic, gradual, and sustainable.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            {highlights.map((item) => (
              <article key={item.title} className={styles.card}>
                <Heading as="h2" className={styles.cardTitle}>
                  {item.title}
                </Heading>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            ))}
          </section>

          <section className={styles.cta}>
            <div>
              <Heading as="h2" className={styles.ctaTitle}>
                Connect with Jonathan
              </Heading>
              <p>Bring a lecture, workshop, or coaching session to your community.</p>
            </div>
            <div className={styles.ctaLinks}>
              <a
                className={styles.ctaLink}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer">
                WhatsApp 050-722-5001
              </a>
              <a className={styles.ctaLink} href="tel:0507225001">
                050-722-5001
              </a>
              <a className={styles.ctaLink} href={emailUrl}>
                jonathanmintz3@gmail.com
              </a>
              <a
                className={styles.ctaLink}
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer">
                TikTok
              </a>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
