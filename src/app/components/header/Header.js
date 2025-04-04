import Section from "../section/Section";
import Wrapper from "../wrapper/Wrapper";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <Section>
      <Wrapper>
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.logoContainer}>
              <img
                src="/mouse-pointer-heart.svg"
                alt="Lou's Logo"
                className={styles.logo}
              />
              <span>ux Lou</span>
            </div>
            <div>
              <img
                src="/menu-burger1.svg"
                alt="Menu"
                className={styles.hamburger}
              />
            </div>
          </div>
        </header>
      </Wrapper>
    </Section>
  );
}
