import data from "../../../data/content.json";
import styles from "./label.module.css";

export default function Label({ labelKey }) {
  const { title, subtitle } = data.labels[labelKey];
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <img className={styles.icon} src="/mouse-pointer-heart.svg" />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
