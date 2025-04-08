import styles from "./button.module.css";

export default function Button({ label, variant = "default", onClick }) {
  return (
    <button
      className={`${styles.primaryButton} ${
        variant === "secondaryButton" ? styles.secondaryButton : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
