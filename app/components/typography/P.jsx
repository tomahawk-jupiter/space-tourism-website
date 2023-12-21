import { barlow } from "@/app/fonts";
import styles from "./typography.module.css";

const P = ({ children }) => {
  return <p className={`${barlow.className} ${styles.p}`}>{children}</p>;
};

export default P;
