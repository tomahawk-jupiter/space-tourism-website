import { bellefair } from "@/app/fonts";
import styles from "./typography.module.css";

const H4 = ({ children }) => {
  return <h4 className={`${bellefair.className} ${styles.h4}`}>{children}</h4>;
};

export default H4;
