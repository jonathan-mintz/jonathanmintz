import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './legal.module.css';

export default function CookiePolicyPage() {
  return (
    <Layout
      title="Cookie Policy"
      description="Cookie categories, purposes, and consent controls on jonathanmintz.co.il.">
      <main className={styles.page}>
        <div className="container">
          <article className={styles.panel}>
            <Heading as="h1" className={styles.title}>
              Cookie Policy
            </Heading>
            <p className={styles.updated}>Last updated: March 3, 2026</p>
            <p className={styles.intro}>
              This page explains which cookie categories are used on the site and
              how you can control your preferences.
            </p>

            <section className={styles.section}>
              <Heading as="h2">Cookie Categories</Heading>
              <ul className={styles.list}>
                <li>
                  Necessary cookies: required for core functionality and security.
                  These cannot be turned off.
                </li>
                <li>
                  Analytics cookies: used to understand traffic and improve content.
                  These may include Google Analytics identifiers such as `_ga`
                  and `_ga_*`.
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Analytics Provider</Heading>
              <p>
                This site uses Google Analytics (measurement tag) to measure
                usage patterns and aggregate reports.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2" id="cookie-settings">
                How to Opt Out
              </Heading>
              <p>
                Analytics cookies are enabled by default. You can opt out at any
                time from the `Cookie settings` pill shown in the corner of every
                page.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Browser Controls</Heading>
              <p>
                Most browsers allow blocking or deleting cookies. Blocking necessary
                cookies may impact site behavior.
              </p>
            </section>

            <p className={styles.notice}>
              For broader details on personal data handling, see the Privacy Policy.
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
