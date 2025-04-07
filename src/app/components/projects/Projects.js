import data from "../../data/content.json";
import Section from "../section/Section";
import Label from "../sub-components/label/Label";
import Wrapper from "../wrapper/Wrapper";
import styles from "./projects.module.css";

// TODO: Label måste redigeras dynamiskt

export default function Projects() {
  return (
    <Section>
      <Wrapper>
        <section>
          <div>
            <Label labelKey="contactLabel" />
            <div className={styles.cardContainer}>
              {data.images.map((item, index) => (
                <div key={index}>
                  <img src={item.image} className={styles.imageCard} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Wrapper>
    </Section>
  );
}
