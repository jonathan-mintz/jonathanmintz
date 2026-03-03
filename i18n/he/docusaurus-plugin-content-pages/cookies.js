import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '@site/src/pages/legal.module.css';

export default function CookiePolicyPage() {
  return (
    <Layout
      title="מדיניות עוגיות"
      description="סוגי עוגיות, מטרות השימוש ואפשרויות ניהול באתר jonathanmintz.co.il.">
      <main className={styles.page}>
        <div className="container">
          <article className={styles.panel}>
            <Heading as="h1" className={styles.title}>
              מדיניות עוגיות
            </Heading>
            <p className={styles.updated}>עודכן לאחרונה: 3 במרץ 2026</p>
            <p className={styles.intro}>
              עמוד זה מסביר אילו סוגי עוגיות משמשים באתר ואיך ניתן לנהל את
              ההעדפות שלכם.
            </p>

            <section className={styles.section}>
              <Heading as="h2">סוגי עוגיות</Heading>
              <ul className={styles.list}>
                <li>
                  עוגיות הכרחיות: נדרשות לתפקוד בסיסי ואבטחה. עוגיות אלה לא
                  ניתנות לכיבוי דרך ממשק ההסכמה.
                </li>
                <li>
                  עוגיות אנליטיקה: משמשות לניתוח תנועה ושיפור תכנים. הן
                  אופציונליות ונטענות רק לאחר הסכמה.
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">ספק האנליטיקה</Heading>
              <p>
                אם ניתנה הסכמה לאנליטיקה, האתר טוען Google Analytics
                (תג מדידה). שירות זה עשוי להשתמש במזהים כמו `_ga` ו-
                `_ga_*` לצורך דוחות שימוש מצרפיים.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2" id="cookie-settings">
                ניהול העדפות עוגיות
              </Heading>
              <p>
                ניתן לבחור `אשר הכל`, `הכרחיות בלבד`, או לפתוח את חלון ההעדפות
                בכל עת.
              </p>
              <div className={styles.buttonRow}>
                <button
                  type="button"
                  className={styles.preferencesButton}
                  data-jm-open-cookie-settings="true">
                  פתחו הגדרות עוגיות
                </button>
              </div>
            </section>

            <section className={styles.section}>
              <Heading as="h2">ניהול דרך הדפדפן</Heading>
              <p>
                ברוב הדפדפנים ניתן לחסום או למחוק עוגיות. חסימה של עוגיות
                הכרחיות עלולה לפגוע בתפקוד האתר.
              </p>
            </section>

            <p className={styles.notice}>
              לפרטים רחבים על אופן עיבוד מידע אישי, עיינו במדיניות הפרטיות.
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
