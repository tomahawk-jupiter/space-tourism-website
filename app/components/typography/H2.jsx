import { bellefair } from "@/app/fonts";
import styles from "./typography.module.css";

const H2 = ({ children }) => {
  return <h2 className={`${bellefair.className} ${styles.h2}`}>{children}</h2>;
};

export default H2;
