import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import jonathanImageUrl from '@site/static/img/jonathanmintz.png';

import Heading from '@theme/Heading';
import styles from '@site/src/pages/index.module.css';
import featureStyles from '@site/src/components/HomepageFeatures/styles.module.css';

const FeatureList = [
  {
    title: 'אדמה: יסודות',
    tone: 'earth',
    description: 'שינה, ארוחות עקביות וקצב התאוששות שמייצבים אנרגיה.',
  },
  {
    title: 'שמש: תזמון',
    tone: 'sun',
    description: 'חשיפה לאור, קצב צירקדי וסימני תזמון יומיים לבהירות.',
  },
  {
    title: 'יער: הסתגלות',
    tone: 'forest',
    description: 'מגוון תנועה, כוח ובסיס אירובי לבניית חוסן.',
  },
  {
    title: 'מים: התאוששות',
    tone: 'water',
    description: 'הידרציה, מינרלים וכלים למערכת העצבים לאיפוס.',
  },
];

function Feature({title, description, tone}) {
  return (
    <div className={clsx('col col--3', featureStyles.featureCard, featureStyles[tone])}>
      <Heading as="h3" className={featureStyles.featureTitle}>
        {title}
      </Heading>
      <p className={featureStyles.featureText}>{description}</p>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="יונתן מינץ"
      description="ביוהאקינג, צום, תנועה והתאוששות לחיים ארוכים ובריאים.">
      <header className={styles.hero}>
        <div className={styles.heroBackdrop} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>ביוהאקינג ואריכות ימים</p>
              <Heading as="h1" className={styles.heroTitle}>
                יונתן מינץ
              </Heading>
              <p className={styles.heroSubtitle}>
                אני עובד עם אנשים שרוצים להרגיש חזקים, לחיות יותר, ולהתאמן עם
                כוונה. אנחנו משלבים צום, ספורט והתאוששות לסגנון חיים שמרגיש
                מחובר לאדמה וטבעי.
              </p>
              <div className={styles.heroActions}>
                <Link className="button button--primary button--lg" to="/about">
                  על יונתן
                </Link>
                <Link className="button button--outline button--lg" to="/blog">
                  קראו את היומן
                </Link>
              </div>
              <div className={styles.heroMeta}>
                <span>צום</span>
                <span>ספורט</span>
                <span>התאוששות</span>
                <span>תזונה</span>
                <span>אריכות ימים</span>
              </div>
            </div>
            <div className={styles.heroMedia}>
              <div className={styles.portraitFrame}>
                <img
                  className={styles.portrait}
                  src={jonathanImageUrl}
                  alt="ג'ונתן מינץ"
                  loading="lazy"
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
              <p className={styles.sectionKicker}>היסודות</p>
              <Heading as="h2" className={styles.sectionTitle}>
                ביוהאקינג בהשראת הטבע
              </Heading>
              <p className={styles.sectionIntro}>
                העבודה משקפת אדמה, שמש, יער ומים. היסודות האלה שומרים שכל
                פרוטוקול יהיה פשוט, יציב ומותאם לגוף.
              </p>
            </div>
          </div>
          <section className={featureStyles.features}>
            <div className="container">
              <div className={clsx('row', featureStyles.featureGrid)}>
                {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        </section>
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionKicker}>תחומי מיקוד</p>
              <Heading as="h2" className={styles.sectionTitle}>
                איפה בונים מומנטום
              </Heading>
            </div>
            <div className={styles.focusGrid}>
              <div className={styles.focusCard}>
                <Heading as="h3">גמישות מטבולית</Heading>
                <p>
                  צום מדויק, יציבות גלוקוז ותזמון תזונה שמייצב אנרגיה.
                </p>
              </div>
              <div className={styles.focusCard}>
                <Heading as="h3">תנועה וספורט</Heading>
                <p>
                  תוכניות כוח ובסיס אירובי שמחזיקות ביצועים לאורך זמן.
                </p>
              </div>
              <div className={styles.focusCard}>
                <Heading as="h3">שינה והתאוששות</Heading>
                <p>
                  הרגלי אור, נשימה והתאוששות שמעמיקים שינה.
                </p>
              </div>
              <div className={styles.focusCard}>
                <Heading as="h3">אסטרטגיית אריכות ימים</Heading>
                <p>
                  מעקב פשוט אחרי סמנים ביולוגיים ועיצוב אורח חיים לטווח ארוך.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionKicker}>קצב יומי</p>
              <Heading as="h2" className={styles.sectionTitle}>
                שגרה שבועית שאפשר להתחיל בה היום
              </Heading>
              <p className={styles.sectionIntro}>
                קבלו שגרה מלאה עם אימונים, צום והתאוששות שמסודרים לפי ימות השבוע.
              </p>
              <div className={styles.sectionActions}>
                <Link className="button button--secondary button--lg" to="/daily-routine">
                  שגרה יומית
                </Link>
                <Link className="button button--outline button--lg" to="/event">
                  לפרטי ההרצאה
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
