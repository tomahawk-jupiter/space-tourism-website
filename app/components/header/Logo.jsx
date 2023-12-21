import styles from "./header.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logo} src="/assets/shared/logo.svg" alt="" />
    </div>
  );
};

export default Logo;
