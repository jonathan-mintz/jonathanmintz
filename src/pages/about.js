import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import aboutImageUrl from '@site/static/img/jonathanmintz.png';

import styles from './about.module.css';

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
              <a className={styles.ctaLink} href="tel:0507225001">
                050-722-5001
              </a>
              <a className={styles.ctaLink} href="mailto:jonathanmintz3@gmail.com">
                jonathanmintz3@gmail.com
              </a>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
