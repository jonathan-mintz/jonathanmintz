import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './legal.module.css';

export default function PrivacyPolicyPage() {
  return (
    <Layout
      title="Privacy Policy"
      description="How data is collected and processed on jonathanmintz.co.il.">
      <main className={styles.page}>
        <div className="container">
          <article className={styles.panel}>
            <Heading as="h1" className={styles.title}>
              Privacy Policy
            </Heading>
            <p className={styles.updated}>Last updated: March 3, 2026</p>
            <p className={styles.intro}>
              This policy explains how data is collected, used, and protected on
              jonathanmintz.co.il. It is written to support transparency and user
              rights under Israeli privacy law, including notice, access, and
              correction rights.
            </p>

            <section className={styles.section}>
              <Heading as="h2">Data Controller</Heading>
              <p>
                Jonathan Mintz
                <br />
                Email:{' '}
                <a href="mailto:jonathanmintz3@gmail.com">jonathanmintz3@gmail.com</a>
                <br />
                Phone: <a href="tel:0507225001">050-722-5001</a>
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">What We Collect</Heading>
              <ul className={styles.list}>
                <li>Contact details you provide when reaching out (name, email, phone, message).</li>
                <li>Technical data (device, browser, pages viewed, approximate location by IP).</li>
                <li>Cookie preference data (your consent choices).</li>
                <li>Analytics data only after analytics consent is given.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Why We Process Data</Heading>
              <ul className={styles.list}>
                <li>To operate the website and provide requested content.</li>
                <li>To respond to inquiries and coordinate services or events.</li>
                <li>To improve content and usability through aggregate analytics.</li>
                <li>To protect the site and comply with legal obligations.</li>
              </ul>
              <p>
                Providing inquiry details is voluntary, but if not provided we may be
                unable to respond effectively.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Cookies and Analytics</Heading>
              <p>
                Necessary cookies are used for essential operation. Analytics
                cookies are optional and loaded only if you choose to allow them.
                For cookie details, see the <Link to="/cookies">Cookie Policy</Link>.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Who Receives Data</Heading>
              <ul className={styles.list}>
                <li>Website hosting and technical service providers.</li>
                <li>Analytics provider (Google Analytics) when analytics consent is provided.</li>
                <li>Professional advisors and competent authorities when legally required.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Cross-Border Transfers</Heading>
              <p>
                Some service providers may process data outside Israel. When this
                occurs, transfers are made under applicable safeguards and contractual
                commitments.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Retention</Heading>
              <ul className={styles.list}>
                <li>Inquiry and correspondence data is retained only as long as reasonably needed.</li>
                <li>Cookie consent records are retained to document your choices.</li>
                <li>Analytics data is retained according to Google Analytics settings.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Your Rights</Heading>
              <p>
                Subject to law, you may request access to data about you and request
                correction of inaccurate or outdated data. To submit a request,
                contact{' '}
                <a href="mailto:jonathanmintz3@gmail.com">jonathanmintz3@gmail.com</a>.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Security</Heading>
              <p>
                Reasonable technical and organizational safeguards are used to protect
                data. No system is fully immune from risk, but measures are applied to
                reduce unauthorized access, misuse, and loss.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Policy Updates</Heading>
              <p>
                This page may be updated from time to time. The date at the top shows
                the latest revision.
              </p>
            </section>

            <p className={styles.notice}>
              This policy provides general transparency information and does not
              replace legal advice for a specific case.
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
