import PreLaunchPage from "./components/pre-launch/PreLaunchPage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          {/* <Header /> */}
          <PreLaunchPage />
          {/* <ServiceSection /> */}
          {/* <Hero />
          <Services />
          <AboutMe />
          <Projects />
          <Testemonials />
          <Form /> */}
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
