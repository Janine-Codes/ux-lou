import styles from "./testemonial.module.css";

export default function TestemonialCard({ description, name, reference }) {
  return (
    <div className={styles.card}>
      <img className={styles.icon} src="/message-quote.svg" alt="Quote" />
      <p className={styles.description}>{description}</p>
      <div class>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.reference}>{reference}</p>
      </div>
    </div>
  );
}
