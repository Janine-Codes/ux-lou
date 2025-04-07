import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Label from "./components/sub-components/label/Label";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <Header />
          <Hero />
          <Services />
          <Label />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
