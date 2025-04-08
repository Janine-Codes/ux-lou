import Section from "../section/Section";
import Button from "../sub-components/button/Button";
import Wrapper from "../wrapper/Wrapper";
import styles from "./preLaunchHeader.module.css";

export default function PreLaunchHeader() {
  return (
    <Section>
      <Wrapper>
        <header className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <img
              src="/mouse-pointer-heart.svg"
              alt="Lou's Logo"
              className={styles.logo}
            />
            <span className={styles.headerSpan}>UX by Lou</span>
          </div>
          <div>
            <Button label="Chat with me" />
          </div>
        </header>
      </Wrapper>
    </Section>
  );
}
