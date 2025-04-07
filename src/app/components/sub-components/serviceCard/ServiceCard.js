import styles from "./serviceCard.module.css";

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <img src={icon} className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
