import { bellefair } from "../fonts";
import styles from "./subheadings.module.css";

const SubH1 = ({ text }) => {
  return (
    <div className={`${bellefair.className} ${styles.subHeadingOne}`}>
      {text}
    </div>
  );
};

export default SubH1;
