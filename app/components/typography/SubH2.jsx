import { barlowCondensed } from "@/app/fonts";
import styles from "./typography.module.css";

const SubH2 = ({ children }) => {
  return (
    <div className={`${barlowCondensed.className} ${styles.subHeadingTwo}`}>
      {children}
    </div>
  );
};

export default SubH2;
