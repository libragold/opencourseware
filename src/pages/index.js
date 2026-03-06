import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { courseCatalog } from '../data/courseCatalog';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Open Courseware
        </Heading>
        <p className="hero__subtitle">
          Open educational resources from courses I have taught
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/2026-spring-cse-494">
            View Current Course →
          </Link>
        </div>
      </div>
    </header>
  );
}

function splitCourseCardTitle(cardTitle) {
  const [courseNumber, ...rest] = cardTitle.split(' - ');
  return {
    courseNumber,
    courseName: rest.join(' - '),
  };
}

function CourseCard({ course, link }) {
  const {courseNumber, courseName} = splitCourseCardTitle(course.cardTitle);

  return (
    <div className={clsx('col col--4', styles.card)}>
      <div className="card">
        <div className="card__header">
          <Heading as="h3" className={styles.cardHeading}>
            {course.semester} · {courseNumber}
          </Heading>
        </div>
        <div className="card__body">
          <p className={styles.cardCourseName}>{courseName}</p>
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

function CourseSection({ institution, courses }) {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {institution}
        </Heading>
        <div className="row">
          {courses.map((course) => (
            <CourseCard
              key={course.routeBasePath}
              course={course}
              link={`/${course.routeBasePath}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const groupedCourses = courseCatalog.reduce((groups, course) => {
    const existing = groups.find((group) => group.institution === course.institution);
    if (existing) {
      existing.courses.push(course);
    } else {
      groups.push({institution: course.institution, courses: [course]});
    }
    return groups;
  }, []);

  return (
    <Layout
      title="Home"
      description="Open educational resources from courses I have taught">
      <HomepageHeader />
      <main>
        {groupedCourses.map((group) => (
          <CourseSection
            key={group.institution}
            institution={group.institution}
            courses={group.courses}
          />
        ))}
      </main>
    </Layout>
  );
}
