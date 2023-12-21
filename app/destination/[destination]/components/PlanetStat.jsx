import styles from "./planetStat.module.css";

const PlanetStat = ({ label, value }) => {
  return (
    <div className={styles.statContainer}>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statValue}>{value}</div>
    </div>
  );
};

export default PlanetStat;
