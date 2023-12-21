import { barlowCondensed } from "../fonts";
import styles from "./subheadings.module.css";

const SubH2 = ({ text }) => {
  return (
    <div className={`${barlowCondensed.className} ${styles.subHeadingTwo}`}>
      {text}
    </div>
  );
};

export default SubH2;
