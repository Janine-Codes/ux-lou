import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <Header />
          <Hero />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
