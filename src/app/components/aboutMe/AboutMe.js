import Section from "../section/Section";
import Button from "../sub-components/button/Button";
import Wrapper from "../wrapper/Wrapper";
import styles from "./aboutMe.module.css";

export default function AboutMe() {
  return (
    <Section>
      <Wrapper>
        <section>
          <div className={styles.container}>
            <img src="/iamlou.png" />
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Hey, I’m Lou</h2>

              <p className={(styles.subtitle, styles.firstSubtitle)}>
                I’ve been a designer for 7 years, and I absolutely love blending
                psychology, creativity, and user experience to build designs
                that just make sense.
              </p>
              <p className={styles.subtitle}>
                Being the voice of the user is what drives me—understanding how
                people think and feel, then turning that into seamless,
                beautiful digital experiences. I’m also drawn to AI and how it
                can make design smarter, more intuitive, and even more human.
              </p>
            </div>
            <Button label="Chat with me" />
          </div>
        </section>
      </Wrapper>
    </Section>
  );
}
