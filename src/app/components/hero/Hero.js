import Section from "../section/Section";
import Button from "../sub-components/button/Button";
import Wrapper from "../wrapper/Wrapper";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Section>
      <Wrapper>
        <section className={styles.container}>
          <div className={styles.heroContent}>
            <div>
              <h1 className={styles.title}>
                Lets build beautiful &{" "}
                <span className={styles.highlight}>smart</span> experiences
              </h1>
              <p className={styles.subtitle}>
                Crafting high-impact, data driven designs for your business
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <Button label="Let's connect" />
              <Button label="View my work" variant="secondaryButton" />
            </div>
          </div>
        </section>
      </Wrapper>
    </Section>
  );
}
