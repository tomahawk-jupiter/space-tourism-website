import { barlowCondensed, bellefair } from "@/app/fonts";
import styles from "./planetStat.module.css";

const PlanetStat = ({ label, value }) => {
  return (
    <div className={styles.statContainer}>
      <div className={`${barlowCondensed.className} ${styles.statLabel}`}>
        {label}
      </div>
      <div className={`${bellefair.className} ${styles.statValue}`}>
        {value}
      </div>
    </div>
  );
};

export default PlanetStat;
