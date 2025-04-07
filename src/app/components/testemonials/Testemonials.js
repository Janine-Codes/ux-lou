import data from "../../data/content.json";
import Section from "../section/Section";
import Label from "../sub-components/label/Label";
import TestemonialCard from "../sub-components/testemonial-card/TestemonialCard";
import Wrapper from "../wrapper/Wrapper";
import styles from "./testemonials.module.css";

export default function Testemonials() {
  return (
    <Section>
      <Wrapper>
        <section>
          <div>
            <Label labelKey="testemonialLabel" />
            <div className={styles.container}>
              {data.testemonials.map((item, index) => (
                <TestemonialCard
                  key={index}
                  description={item.description}
                  name={item.name}
                  reference={item.reference}
                />
              ))}
            </div>
          </div>
        </section>
      </Wrapper>
    </Section>
  );
}
