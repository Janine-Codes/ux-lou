"use client";
import styles from "./button.module.css";

export default function Button({ label, variant = "default", onClick }) {
  const handleClick = () => {
    window.location.href = "mailto:louhbrg@gmail.com";
    console.log("should open");
  };

  return (
    <button
      className={`${styles.primaryButton} ${
        variant === "secondaryButton" ? styles.secondaryButton : ""
      }`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
