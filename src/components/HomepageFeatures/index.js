import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Earth: Foundations',
    tone: 'earth',
    description:
      'Sleep, consistent meals, and recovery rhythms that stabilize energy.',
  },
  {
    title: 'Sun: Timing',
    tone: 'sun',
    description:
      'Light exposure, circadian alignment, and daily timing cues for clarity.',
  },
  {
    title: 'Forest: Adaptation',
    tone: 'forest',
    description:
      'Movement variety, strength, and aerobic base to build resilience.',
  },
  {
    title: 'Water: Recovery',
    tone: 'water',
    description:
      'Hydration, minerals, and nervous system tools that help you reset.',
  },
];

function Feature({title, description, tone}) {
  return (
    <div className={clsx('col col--3', styles.featureCard, styles[tone])}>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureText}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.featureGrid)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
