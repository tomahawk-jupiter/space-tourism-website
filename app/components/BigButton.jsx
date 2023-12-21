import styles from "./bigButton.module.css";

const BigButton = () => {
  return (
    <div className={styles.bigButtonOuter}>
      <button className={styles.bigButton}>
        <h4>EXPLORE</h4>
      </button>
    </div>
  );
};

export default BigButton;
