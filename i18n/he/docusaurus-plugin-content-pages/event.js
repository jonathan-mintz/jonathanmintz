import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '@site/src/pages/event.module.css';

export default function EventPage() {
  return (
    <Layout
      title="שינוי אמיתי מתחיל מבפנים"
      description="בריאות, אנרגיה ואורח חיים מותאם לקצב החיים המודרני.">
      <div className={styles.page}>
        <header className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>הרצאה</p>
                <Heading as="h1" className={styles.title}>
                  שינוי אמיתי מתחיל מבפנים
                </Heading>
                <p className={styles.subtitle}>
                  בריאות, אנרגיה ואורח חיים מותאם לקצב החיים המודרני.
                </p>
                <p className={styles.lede}>
                  גישה מעשית לחיבור גוף-נפש: תנועה, הרגלים, תזונה ואנרגיה בלי
                  קיצוניות ובלי הבטחות ריקות.
                </p>
                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href="mailto:jonathanmintz3@gmail.com">
                    שמירת מקום
                  </a>
                  <a className={styles.secondaryButton} href="tel:0507225001">
                    התקשרו 050-722-5001
                  </a>
                </div>
              </div>
              <div className={styles.heroCard}>
                <p className={styles.cardKicker}>מי אני</p>
                <Heading as="h2" className={styles.cardTitle}>
                  יונתן מינץ
                </Heading>
                <p className={styles.cardSubtitle}>מנחה תהליכי שינוי הרגלים ומאמן</p>
                <p className={styles.cardBody}>
                  משלב ידע מעשי מעולמות התזונה, תנועה גופנית, תהליכים רגשיים ואינטגרציה
                  גוף-נפש.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <p className={styles.sectionKicker}>בהרצאה נבין</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  הבסיס לשינוי שנשאר לאורך זמן
                </Heading>
              </div>
              <ul className={styles.listGrid}>
                <li>מדוע רוב השינויים לא מחזיקים לאורך זמן</li>
                <li>איך הגוף מגיב בפועל להרגלים שלנו</li>
                <li>הקשר בין אנרגיה, תזונה, תנועה ומצב מנטלי</li>
                <li>איך ליצור שינוי פשוט, הדרגתי ובר קיימא</li>
              </ul>
              <p className={styles.sectionNote}>
                ההרצאה משלבת ידע, דוגמאות מהחיים וכלים פרקטיים שתוכלו ליישם מיד.
              </p>
            </div>
          </section>

          <section className={styles.sectionAlt}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <p className={styles.sectionKicker}>למי זה מתאים</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  אנשים שמוכנים להתקדם
                </Heading>
              </div>
              <ul className={styles.listGrid}>
                <li>אנשים שמרגישים תקועים ורוצים שינוי אמיתי ואותנטי</li>
                <li>צוותים וארגונים</li>
                <li>כל מי שמחפש בריאות ואנרגיה בלי קיצוניות</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <p className={styles.sectionKicker}>מה תרוויחו</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  כלים ובהירות לצעד הבא
                </Heading>
              </div>
              <ul className={styles.checkList}>
                <li>בהירות</li>
                <li>כלים פרקטיים</li>
                <li>מוטיבציה, שקט ויציבות</li>
                <li>הבנה עמוקה יותר של הגוף וההרגלים</li>
              </ul>
            </div>
          </section>

          <section className={styles.sectionContact}>
            <div className="container">
              <div className={styles.contactCard}>
                <div>
                  <Heading as="h2" className={styles.contactTitle}>
                    צרו קשר עם יונתן
                  </Heading>
                  <p className={styles.contactSubtitle}>
                    רוצים להביא את ההרצאה לקהילה או לארגון שלכם?
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
