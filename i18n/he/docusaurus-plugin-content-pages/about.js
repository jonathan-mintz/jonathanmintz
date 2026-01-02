import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import aboutImageUrl from '@site/static/img/jonathanmintz.png';

import styles from '@site/src/pages/about.module.css';

const highlights = [
  {
    title: 'מה יונתן עושה',
    text: 'מנחה תהליכי שינוי הרגלים ומאמן שמשלב תזונה, תנועה, תהליכים רגשיים ואינטגרציה גוף-נפש.',
  },
  {
    title: 'גישה',
    text: 'פרקטית, יציבה ומותאמת לחיים אמיתיים – בלי קיצוניות ובלי הבטחות ריקות.',
  },
  {
    title: 'מיקוד',
    text: 'בריאות, אנרגיה ושינוי בר-קיימא לאנשים וארגונים שרוצים לבנות מומנטום לאורך זמן.',
  },
];

export default function AboutPage() {
  return (
    <Layout
      title="על יונתן"
      description="יונתן מינץ הוא מנחה תהליכי שינוי הרגלים ומאמן המתמקד בבריאות ואנרגיה לאורך זמן.">
      <main className={styles.page}>
        <div className="container">
          <section className={styles.hero}>
            <div className={styles.portraitWrap}>
              <div className={styles.portraitFrame}>
                <img
                  className={styles.portrait}
                  src={aboutImageUrl}
                  alt="יונתן מינץ"
                  loading="lazy"
                />
              </div>
              <span className={styles.badge}>מנחה שינוי הרגלים</span>
            </div>
            <div>
              <p className={styles.kicker}>על</p>
              <Heading as="h1" className={styles.title}>
                יונתן מינץ
              </Heading>
              <p className={styles.lede}>
                יונתן משלב ידע מעשי מעולמות התזונה, התנועה, התהליכים הרגשיים ואינטגרציה גוף-נפש.
                העבודה שלו עוזרת לאנשים לייצר בריאות ואנרגיה בלי קיצוניות – דרך הרגלים
                שמרגישים מציאותיים, הדרגתיים וברי-קיימא.
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
                דברו עם יונתן
              </Heading>
              <p>רוצים להביא הרצאה, סדנה או ליווי אישי לקהילה שלכם?</p>
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
