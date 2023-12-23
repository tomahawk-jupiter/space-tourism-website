"use client";
import { bellefair } from "../../fonts";
import styles from "./bigButton.module.css";
import { useRouter } from "next/navigation";

const BigButton = () => {
  const router = useRouter();

  // List of available pages
  const pages = [
    "/destination/Moon",
    "/destination/Mars",
    "/destination/Europa",
    "/destination/Titan",
    "/crew/douglas-hurley",
    "/crew/mark-shuttleworth",
    "/crew/victor-glover",
    "/crew/anousheh-ansari",
    "/technology/launch-vehicle",
    "/technology/spaceport",
    "/technology/space-capsule",
  ];

  // Function to handle random page navigation
  const handleRandomPageNavigation = () => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * pages.length);

    // Get the randomly chosen page
    const randomPage = pages[randomIndex];

    // Navigate to the random page
    router.push(randomPage);
  };
  return (
    <div className={styles.bigButtonOuter}>
      <button onClick={handleRandomPageNavigation} className={styles.bigButton}>
        <h4 className={`${bellefair.className} ${styles.h4}`}>EXPLORE</h4>
      </button>
    </div>
  );
};

export default BigButton;
