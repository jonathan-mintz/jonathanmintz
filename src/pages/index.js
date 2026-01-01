import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DocusaurusJonathMinthsImageUrl from '@site/static/img/jonathanmintz.jpg';

import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Jonathan Mintz"
      description="Biohacking, fasting, movement, and recovery for long, healthy living.">
      <header className={styles.hero}>
        <div className={styles.heroBackdrop} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>Biohacking & Longevity</p>
              <Heading as="h1" className={styles.heroTitle}>
                {siteConfig.title}
              </Heading>
              <p className={styles.heroSubtitle}>
                I work with people who want to feel strong, live longer, and
                train with intention. We blend fasting, sport, and recovery into
                a lifestyle that feels grounded and natural.
              </p>
              <div className={styles.heroActions}>
                <Link className="button button--primary button--lg" to="/docs/intro">
                  Start with the Foundations
                </Link>
                <Link className="button button--outline button--lg" to="/blog">
                  Read the Journal
                </Link>
              </div>
              <div className={styles.heroMeta}>
                <span>Fasting</span>
                <span>Sport</span>
                <span>Recovery</span>
                <span>Nutrition</span>
                <span>Longevity</span>
              </div>
            </div>
            <div className={styles.heroMedia}>
              <div className={styles.portraitFrame}>
                <img
                  className={styles.portrait}
                  src={DocusaurusJonathMinthsImageUrl}
                  alt="Jonathan Mintz"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionKicker}>The Elements</p>
              <Heading as="h2" className={styles.sectionTitle}>
                Nature-inspired biohacking
              </Heading>
              <p className={styles.sectionIntro}>
                The work mirrors earth, sun, forest, and water. These elements
                keep every protocol simple, sustainable, and aligned with the
                way your body already works.
              </p>
            </div>
          </div>
          <HomepageFeatures />
        </section>
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionKicker}>Focus Areas</p>
              <Heading as="h2" className={styles.sectionTitle}>
                Where we build momentum
              </Heading>
            </div>
            <div className={styles.focusGrid}>
              <div className={styles.focusCard}>
                <Heading as="h3">Metabolic Flexibility</Heading>
                <p>
                  Strategic fasting, stable glucose, and nutrition timing that
                  keeps energy consistent.
                </p>
              </div>
              <div className={styles.focusCard}>
                <Heading as="h3">Movement & Sport</Heading>
                <p>
                  Strength and aerobic base programming that supports long-term
                  performance.
                </p>
              </div>
              <div className={styles.focusCard}>
                <Heading as="h3">Sleep & Recovery</Heading>
                <p>
                  Light habits, breathwork, and recovery rituals that deepen
                  sleep.
                </p>
              </div>
              <div className={styles.focusCard}>
                <Heading as="h3">Longevity Strategy</Heading>
                <p>
                  Simple biomarker tracking and lifestyle design for long-term
                  healthspan.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionKicker}>Documents</p>
              <Heading as="h2" className={styles.sectionTitle}>
                Starter tools you can use today
              </Heading>
              <p className={styles.sectionIntro}>
                Visit the Documents library for checklists, planning templates,
                and a weekly rhythm you can follow immediately.
              </p>
              <div className={styles.sectionActions}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/resources/documents">
                  View Documents
                </Link>
                <Link
                  className="button button--outline button--lg"
                  to="/docs/resources/checklists">
                  Open Checklists
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
