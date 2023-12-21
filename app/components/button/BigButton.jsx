import { bellefair } from "../../fonts";
import styles from "./bigButton.module.css";
import H4 from "../typography/H4";

const BigButton = () => {
  return (
    <div className={styles.bigButtonOuter}>
      <button className={styles.bigButton}>
        <h4 className={`${bellefair.className} ${styles.h4}`}>EXPLORE</h4>
      </button>
    </div>
  );
};

export default BigButton;
