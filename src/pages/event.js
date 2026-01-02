import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './event.module.css';

export default function EventPage() {
  const videoUrl = useBaseUrl('/video/nature.mp4');
  const posterUrl = useBaseUrl('/img/lecture.png');

  return (
    <Layout
      title="Authentic Change Starts Inside"
      description="Health, energy, and a lifestyle adapted to the pace of modern life.">
      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroMediaBackdrop} aria-hidden="true">
            <video
              className={styles.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={posterUrl}>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>Lecture</p>
                <Heading as="h1" className={styles.title}>
                  Authentic Change Starts Inside
                </Heading>
                <p className={styles.subtitle}>
                  Health, energy, and a lifestyle adapted to the pace of modern
                  life.
                </p>
                <p className={styles.lede}>
                  A practical approach to the body-mind connection: movement,
                  habits, nutrition, and energy without extremes and without
                  empty promises.
                </p>
                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href="mailto:jonathanmintz3@gmail.com">
                    Reserve your seat
                  </a>
                  <a className={styles.secondaryButton} href="tel:0507225001">
                    Call 050-722-5001
                  </a>
                </div>
              </div>
              <div className={styles.heroAside}>
                <div className={styles.heroCard}>
                  <p className={styles.cardKicker}>Who am I</p>
                  <Heading as="h2" className={styles.cardTitle}>
                    Jonathan Mintz
                  </Heading>
                  <p className={styles.cardSubtitle}>Habit-change facilitator and coach</p>
                  <p className={styles.cardBody}>
                    Combines practical knowledge from the worlds of nutrition,
                    body movement, emotional processes, and mind-body integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <p className={styles.sectionKicker}>In this lecture we will understand</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  The foundations of lasting change
                </Heading>
              </div>
              <ul className={styles.listGrid}>
                <li>Why most changes do not last over time</li>
                <li>How the body actually reacts to our habits</li>
                <li>The connection between energy, nutrition, movement, and mental state</li>
                <li>How to create simple, gradual, and sustainable change</li>
              </ul>
              <p className={styles.sectionNote}>
                The lecture combines knowledge, real-life examples, and practical
                tools you can apply immediately.
              </p>
            </div>
          </section>

          <section className={styles.sectionAlt}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <p className={styles.sectionKicker}>Who is this for</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  People ready to move forward
                </Heading>
              </div>
              <ul className={styles.listGrid}>
                <li>People who feel stuck and want real, authentic change</li>
                <li>Teams and organizations</li>
                <li>Anyone looking for health and energy without extremes</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <p className={styles.sectionKicker}>What you will gain</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  Tools and clarity for the next step
                </Heading>
              </div>
              <ul className={styles.checkList}>
                <li>Clarity</li>
                <li>Practical tools</li>
                <li>Motivation, peace, and stability</li>
                <li>Deeper understanding of the body and habits</li>
              </ul>
            </div>
          </section>

          <section className={styles.sectionContact}>
            <div className="container">
              <div className={styles.contactCard}>
                <div>
                  <Heading as="h2" className={styles.contactTitle}>
                    Connect with Jonathan
                  </Heading>
                  <p className={styles.contactSubtitle}>
                    Ready to bring the lecture to your community or organization?
                  </p>
                </div>
                <div className={styles.contactDetails}>
                  <a className={styles.contactLink} href="tel:0507225001">
                    050-722-5001
                  </a>
                  <a
                    className={styles.contactLink}
                    href="mailto:jonathanmintz3@gmail.com">
                    jonathanmintz3@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
