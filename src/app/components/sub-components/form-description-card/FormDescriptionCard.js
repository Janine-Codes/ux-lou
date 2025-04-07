import styles from "./formDescriptionCard.module.css";

export default function FormDescriptionCard({ icon, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.formDescriptionCardContent}>
        <img className={styles.icon} src={icon} />
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
