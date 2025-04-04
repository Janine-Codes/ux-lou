import Section from "../section/Section";
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
                Let's build beautiful &{" "}
                <span className={styles.highlight}>smart</span> experiences
              </h1>
              <p className={styles.subtitle}>
                Crafting high-impact, data driven designs for your business
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <button>Let's connect</button>
              <button>View my work</button>
            </div>
          </div>
        </section>
      </Wrapper>
    </Section>
  );
}
