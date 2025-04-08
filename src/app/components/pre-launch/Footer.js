import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/mouse-pointer-heart.svg" />
        <span>UX by Lou</span>
      </div>
      <div className={styles.copyright}>
        <p>© 2025 Lou Hedberg</p>
      </div>
    </div>
  );
}
