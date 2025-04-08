import Section from "../section/Section";
import Services from "../services/Services";
import Button from "../sub-components/button/Button";
import Wrapper from "../wrapper/Wrapper";
import Footer from "./Footer";
import PreLaunchHeader from "./PreLaunchHeader";
import styles from "./preLaunchPage.module.css";

export default function PreLaunch() {
  return (
    <Section>
      <Wrapper>
        <PreLaunchHeader />

        <section>
          <Section>
            <div className={styles.backgroundImage}>
              <div className={styles.cardContainer}>
                <div className={styles.headingContainer}>
                  <img src="/rocket-lunch.svg" />
                  <h1 className={styles.title}>Launching soon</h1>
                  <p className={styles.subtitle}>
                    I’m currently crafting my new digital home — a space to
                    share my design work and services. Stay tuned.
                  </p>
                </div>
                <Button label="Chat with me" />
              </div>
            </div>
          </Section>
        </section>

        <Services />
      </Wrapper>
      <Footer />
    </Section>
  );
}
