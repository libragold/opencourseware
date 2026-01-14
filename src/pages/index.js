import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Open Courseware
        </Heading>
        <p className="hero__subtitle">
          Open educational resources for competitive programming and algorithms
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/cse494">
            Browse Courses →
          </Link>
        </div>
      </div>
    </header>
  );
}

function CourseCard({ title, description, link }) {
  return (
    <div className={clsx('col col--4', styles.card)}>
      <div className="card">
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" to={link}>
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Open educational resources for competitive programming and algorithms">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <CourseCard
                title="CSE 494 - Competitive Programming"
                description="Spring 2026 course covering algorithms, data structures, and problem-solving techniques for competitive programming."
                link="/cse494"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
