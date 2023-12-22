import styles from "./page.module.css";
import BigButton from "./components/button/BigButton";
// import Image from "next/image";
import Header from "./components/header/Header";
import { barlowCondensed, bellefair } from "./fonts";
import H5 from "./components/typography/H5";
import H1 from "./components/typography/H1";
import P from "./components/typography/P";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.widthLimit}>
        <Header />
        <section className={styles.pageContent}>
          <div className={styles.leftContent}>
            <h5 className={`${barlowCondensed.className} ${styles.h5}`}>
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 className={`${bellefair.className} ${styles.h1}`}>SPACE</h1>
            <P>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </P>
          </div>
          <div className={styles.rightContent}>
            <BigButton />
          </div>
        </section>
      </div>
    </main>
  );
}
