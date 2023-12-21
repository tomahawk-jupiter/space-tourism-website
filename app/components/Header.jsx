import Logo from "./Logo";
import { barlowCondensed } from "../fonts";
import styles from "./header.module.css";
import Link from "next/link";

const navItems = [
  { number: "00", text: "HOME", relativeURL: "/" },
  { number: "01", text: "DESTINATION", relativeURL: "/destination/Moon" },
  { number: "02", text: "CREW", relativeURL: "/crew" },
  { number: "03", text: "TECHNOLOGY", relativeURL: "/technology" },
];

const Header = () => {
  return (
    <header>
      <Logo />
      <div className={styles.horizontalLine}></div>
      <nav>
        <ul>
          {navItems.map((item) => {
            return (
              <Link key={item.text} href={item.relativeURL}>
                <li>
                  <span
                    className={`${barlowCondensed.className} ${styles.navItemNumber}`}
                  >
                    {item.number}{" "}
                  </span>
                  <span
                    className={`${barlowCondensed.className} ${styles.navItemText}`}
                  >
                    {item.text}
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
