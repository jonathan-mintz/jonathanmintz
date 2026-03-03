import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from '@site/src/pages/legal.module.css';

export default function PrivacyPolicyPage() {
  return (
    <Layout
      title="מדיניות פרטיות"
      description="איך נאסף ומעובד מידע אישי באתר jonathanmintz.co.il.">
      <main className={styles.page}>
        <div className="container">
          <article className={styles.panel}>
            <Heading as="h1" className={styles.title}>
              מדיניות פרטיות
            </Heading>
            <p className={styles.updated}>עודכן לאחרונה: 3 במרץ 2026</p>
            <p className={styles.intro}>
              מדיניות זו מסבירה כיצד מידע נאסף, מעובד ומוגן באתר
              jonathanmintz.co.il. המסמך נועד לתמוך בשקיפות ובזכויות משתמשים
              בהתאם לדין הישראלי.
            </p>

            <section className={styles.section}>
              <Heading as="h2">בעל השליטה במידע</Heading>
              <p>
                יונתן מינץ
                <br />
                אימייל:{' '}
                <a href="mailto:jonathanmintz3@gmail.com">jonathanmintz3@gmail.com</a>
                <br />
                טלפון: <a href="tel:0507225001">050-722-5001</a>
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">איזה מידע נאסף</Heading>
              <ul className={styles.list}>
                <li>פרטי קשר שאתם מוסרים בפנייה (שם, אימייל, טלפון ותוכן פנייה).</li>
                <li>מידע טכני (דפדפן, מכשיר, עמודים שנצפו ומיקום משוער לפי IP).</li>
                <li>מידע על העדפות עוגיות והסכמות.</li>
                <li>מידע אנליטי רק לאחר הסכמה מפורשת לעוגיות אנליטיקה.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">מטרות השימוש במידע</Heading>
              <ul className={styles.list}>
                <li>הפעלת האתר ומתן תכנים ושירותים שהתבקשו.</li>
                <li>מענה לפניות ותיאום שירותים, הרצאות או מפגשים.</li>
                <li>שיפור חוויית השימוש והתכנים באמצעות ניתוח מצרפי.</li>
                <li>אבטחת האתר ועמידה בדרישות דין.</li>
              </ul>
              <p>
                מסירת פרטי פנייה היא וולונטרית, אך ללא פרטים מסוימים ייתכן שלא
                ניתן יהיה להשיב באופן מלא.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">עוגיות ואנליטיקה</Heading>
              <p>
                עוגיות הכרחיות מופעלות לצורך תפקוד בסיסי. עוגיות אנליטיקה הן
                אופציונליות ונטענות רק לאחר בחירה בהסכמה. לפרטים נוספים עיינו
                ב<Link to="/cookies">מדיניות העוגיות</Link>.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">למי מועבר מידע</Heading>
              <ul className={styles.list}>
                <li>ספקי אירוח ותשתיות טכנולוגיות.</li>
                <li>Google Analytics, רק אם ניתנה הסכמה לעוגיות אנליטיקה.</li>
                <li>יועצים מקצועיים ורשויות מוסמכות כאשר הדבר נדרש לפי דין.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">העברת מידע מחוץ לישראל</Heading>
              <p>
                חלק מהספקים עשויים לעבד מידע מחוץ לישראל. במקרה כזה העברה תיעשה
                בכפוף לאמצעי הגנה והתחייבויות חוזיות מתאימות.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">שמירת מידע</Heading>
              <ul className={styles.list}>
                <li>מידע מפניות נשמר למשך הזמן הדרוש באופן סביר לניהול הקשר.</li>
                <li>רישומי הסכמה לעוגיות נשמרים לצורך תיעוד הבחירות שלכם.</li>
                <li>מידע אנליטי נשמר לפי הגדרות Google Analytics.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">הזכויות שלכם</Heading>
              <p>
                בכפוף לדין, עומדת לכם הזכות לעיין במידע עליכם ולבקש תיקון מידע
                שאינו נכון, שלם או מעודכן. לפנייה בנושא פרטיות ניתן ליצור קשר
                בכתובת{' '}
                <a href="mailto:jonathanmintz3@gmail.com">jonathanmintz3@gmail.com</a>.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">אבטחת מידע</Heading>
              <p>
                מיושמים אמצעים סבירים טכנולוגיים וארגוניים להגנה על מידע. אין
                מערכת חסינה לחלוטין, אך ננקטות פעולות להפחתת סיכוני גישה לא
                מורשית, שימוש לרעה ואובדן מידע.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">עדכוני מדיניות</Heading>
              <p>
                המדיניות עשויה להתעדכן מעת לעת. תאריך העדכון האחרון מופיע בראש
                העמוד.
              </p>
            </section>

            <p className={styles.notice}>
              המידע בעמוד זה נועד לשקיפות כללית ואינו מהווה ייעוץ משפטי פרטני.
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
