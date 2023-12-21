import { bellefair } from "@/app/fonts";
import styles from "./typography.module.css";

const H1 = ({ children }) => {
  return <h1 className={`${bellefair.className} ${styles.h1}`}>{children}</h1>;
};

export default H1;
