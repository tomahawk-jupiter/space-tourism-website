"use client";
import { barlowCondensed } from "../../fonts";
import styles from "./normalNavbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { number: "00", text: "HOME", relativeURL: "/", route: "home" },
  {
    number: "01",
    text: "DESTINATION",
    relativeURL: "/destination/Moon",
    route: "destination",
  },
  {
    number: "02",
    text: "CREW",
    relativeURL: "/crew/douglas-hurley",
    route: "crew",
  },
  {
    number: "03",
    text: "TECHNOLOGY",
    relativeURL: "/technology/launch-vehicle",
    route: "technology",
  },
];

const NormalNavbar = () => {
  return (
    <div className={styles.navbarAndLineDecorationContainer}>
      <div className={styles.horizontalLine}></div>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          {navItems.map((item) => {
            return (
              <li
                key={item.text}
                className={`${styles.navItem} ${
                  item.route === "home" && usePathname() === "/"
                    ? styles.active
                    : usePathname().includes(item.route)
                    ? styles.active
                    : styles.notActive
                }`}
              >
                <Link href={item.relativeURL}>
                  <span
                    className={`${barlowCondensed.className} ${styles.navItemNumber}`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`${barlowCondensed.className} ${styles.navItemText}`}
                  >
                    {item.text}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NormalNavbar;
