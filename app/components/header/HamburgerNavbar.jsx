"use client";
import { useState } from "react";
import { barlowCondensed } from "../../fonts";
import HamburgerIcon from "./HamburgerIcon";
import styles from "./hamburgerNavbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { number: "00", text: "HOME", relativeURL: "/" },
  { number: "01", text: "DESTINATION", relativeURL: "/destination/Moon" },
  { number: "02", text: "CREW", relativeURL: "/crew/douglas-hurley" },
  {
    number: "03",
    text: "TECHNOLOGY",
    relativeURL: "/technology/launch-vehicle",
  },
];

const HamburgerNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <div>
      <button onClick={openNav}>
        <HamburgerIcon />
      </button>
      {isNavOpen && (
        <nav className={styles.menuPopover}>
          <div className={styles.closeIconContainer}>
            <button onClick={closeNav}>
              <img
                className={styles.closeIcon}
                src="/assets/shared/icon-close.svg"
                alt=""
              />
            </button>
          </div>

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
      )}
    </div>
  );
};

export default HamburgerNavbar;
