import data from "../../data/content.json";
import Section from "../section/Section";
import Label from "../sub-components/label/Label";
import ServiceCard from "../sub-components/serviceCard/ServiceCard";
import Wrapper from "../wrapper/Wrapper";
import styles from "./services.module.css";

export default function Services() {
  return (
    <Section>
      <Wrapper>
        <section className={styles.servicesContainer}>
          <Label labelKey="servicesLabel" />
          <div className={styles.cardsContainer}>
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>
      </Wrapper>
    </Section>
  );
}
