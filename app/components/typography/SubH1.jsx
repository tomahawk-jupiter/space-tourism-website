import { bellefair } from "@/app/fonts";
import styles from "./typography.module.css";

const SubH1 = ({ children }) => {
  return (
    <div className={`${bellefair.className} ${styles.subHeadingOne}`}>
      {children}
    </div>
  );
};

export default SubH1;
