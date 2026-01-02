import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './daily-routine.module.css';

const schedule = [
  {
    day: 'Sunday — Upper Body Strength (chest, shoulders, arms)',
    items: [
      '06:30–07:00: Wake + sun + water',
      '07:00–07:15: Meditation + breath',
      '07:15–08:00: Strength training — chest, shoulders, arms',
      '08:00–08:30: Walk / grounding',
      '08:30–09:00: Yoga — upper body stretches, shoulder opening',
      '12:00–12:30: First meal (break fast)',
      '17:00–18:00: Early dinner',
      '21:00–22:00: Short meditation + bedtime prep',
    ],
  },
  {
    day: 'Monday — Lower Body Strength (legs, lower back, abs)',
    items: [
      '07:15–08:00: Strength training — legs + abs',
      '08:30–09:00: Yoga — leg stretches, lower back mobility',
      'Rest of the day: same as Sunday',
    ],
  },
  {
    day: 'Tuesday — Yoga and Meditation',
    items: [
      '07:15–08:00: Intensive yoga + breathing',
      '08:00–08:30: Walk + sun',
      'Rest of the day: fast until 12:00, early meals, short afternoon meditation',
    ],
  },
  {
    day: 'Wednesday — Upper Body Strength (chest, shoulders, arms)',
    items: ['Repeat Sunday with a focus on strength/weight/reps.'],
  },
  {
    day: 'Thursday — Lower Body Strength + Abs',
    items: [
      'Repeat Monday; change the order or add supersets for efficiency.',
    ],
  },
  {
    day: 'Friday — Yoga + Long Walk',
    items: [
      '07:15–08:00: Yoga with breathwork + meditation',
      '08:00–08:45: Long walk outside + sun',
      'Rest of the day: longer fast until 12:00, balanced meals',
    ],
  },
  {
    day: 'Saturday — Functional Training / Rest Day',
    items: [
      'Optional light functional strength or outdoor sport (ball, swimming, cycling)',
      'Short morning yoga + meditation',
      'Keep your regular fasting and sleep schedule',
    ],
  },
];

const notes = [
  'Daily meditation: 10–15 minutes in the morning + 5–10 minutes in the evening.',
  'Walks + sunlight: at least 15–20 minutes in the morning or afternoon.',
  'Meals: always quality protein, vegetables, good fats, and a small amount of healthy carbs.',
  'Sleep: dark room, 18–21°C, no screens before bed.',
  'Sauna / hot shower: 2–3 times per week after strength training to support vascular strength and cellular repair.',
];

export default function DailyRoutinePage() {
  return (
    <Layout
      title="Anti-aging Daily Routine"
      description="A weekly rhythm for strength, yoga, fasting, and recovery.">
      <main className={styles.page}>
        <div className="container">
          <header className={styles.hero}>
            <p className={styles.kicker}>Weekly Rhythm</p>
            <Heading as="h1" className={styles.title}>
              Anti-aging Daily Routine
            </Heading>
            <p className={styles.subtitle}>
              A structured weekly flow that combines strength, yoga, fasting,
              and recovery for steady energy and long-term resilience.
            </p>
          </header>

          <section className={styles.grid}>
            {schedule.map((block) => (
              <article key={block.day} className={styles.card}>
                <Heading as="h2" className={styles.cardTitle}>
                  {block.day}
                </Heading>
                <ul className={styles.list}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className={styles.notes}>
            <Heading as="h2" className={styles.notesTitle}>
              Additional Notes
            </Heading>
            <ul className={styles.notesList}>
              {notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}
