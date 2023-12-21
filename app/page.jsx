import styles from "./page.module.css";
import BigButton from "./components/BigButton";
// import Image from "next/image";
import Header from "./components/header/Header";
import { bellefair } from "./fonts";
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
            <H5>SO, YOU WANT TO TRAVEL TO</H5>
            <H1 className={bellefair.className}>SPACE</H1>
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
