import { bellefair } from "@/app/fonts";
import styles from "./typography.module.css";

const H3 = ({ children }) => {
  return <h3 className={`${bellefair.className} ${styles.h3}`}>{children}</h3>;
};

export default H3;
