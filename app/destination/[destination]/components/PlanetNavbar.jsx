"use client";
import { barlowCondensed } from "@/app/fonts";
import styles from "./planetNavbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { text: "MOON", relativeURL: "/destination/Moon" },
  { text: "MARS", relativeURL: "/destination/Mars" },
  { text: "EUROPA", relativeURL: "/destination/Europa" },
  { text: "TITAN", relativeURL: "/destination/Titan" },
];

const PlanetNavbar = () => {
  console.log({ pathname: usePathname() });
  return (
    <nav className={styles}>
      <ul className={styles.ul}>
        {navItems.map((item) => {
          return (
            <li
              key={item.text}
              className={`${styles.navItem} ${
                usePathname() === item.relativeURL
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
  );
};

export default PlanetNavbar;
