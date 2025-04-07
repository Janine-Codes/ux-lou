import AboutMe from "./components/aboutMe/AboutMe";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Testemonials from "./components/testemonials/Testemonials";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <Header />
          <Hero />
          <Services />
          <AboutMe />
          <Projects />
          <Testemonials />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
