import { barlowCondensed } from "@/app/fonts";
import styles from "./typography.module.css";

const H5 = ({ children }) => {
  return (
    <h5 className={`${barlowCondensed.className} ${styles.h5}`}>{children}</h5>
  );
};

export default H5;
