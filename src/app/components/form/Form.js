import data from "../../data/content.json";
import Section from "../section/Section";
import Button from "../sub-components/button/Button";
import FormDescriptionCard from "../sub-components/form-description-card/FormDescriptionCard";
import Wrapper from "../wrapper/Wrapper";
import styles from "./form.module.css";

export default function Form({ icon, text }) {
  return (
    <Section>
      <Wrapper>
        <div className={styles.formContainer}>
          <div className={styles.headerContainer}>
            <img src="/paper-plane.svg" />
            <h2 className={styles.title}>Lets connect</h2>
            <p className={styles.subtitle}>
              Together we can grab a virtual coffee, and chat about how we can
              bring your ideas to life.
            </p>
          </div>
          <Button label="Chat with me" />
          <div className={styles.formDescriptionsContainer}>
            {data.formDescriptions.map((item, index) => (
              <FormDescriptionCard
                key={index}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}
