import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import BigButton from "./components/BigButton";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <div>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div>
        <BigButton />
      </div>
    </main>
  );
}
