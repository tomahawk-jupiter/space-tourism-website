import styles from "./pageTitle.module.css";
import { barlowCondensed } from "@/app/fonts";

const PageTitle = ({ number, text }) => {
  return (
    <div className={`${styles.titleContainer} ${barlowCondensed.className}`}>
      <span className={styles.titleNumber}>{number}</span>
      <span className={styles.titleText}>{text}</span>
    </div>
  );
};

export default PageTitle;
