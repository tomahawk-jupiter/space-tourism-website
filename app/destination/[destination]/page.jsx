import Header from "@/app/components/header/Header";
import styles from "./page.module.css";
import PageTitle from "@/app/components/pageTitle/PageTitle";
import Image from "next/image";
import P from "@/app/components/typography/P";
import PlanetStat from "./components/PlanetStat";
import PlanetNavbar from "./components/PlanetNavbar";
import { bellefair } from "@/app/fonts";

const destinations = [
  {
    name: "Moon",
    images: {
      png: "/assets/destination/image-moon.png",
      webp: "/assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "/assets/destination/image-mars.png",
      webp: "/assets/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "/assets/destination/image-europa.png",
      webp: "/assets/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "/assets/destination/image-titan.png",
      webp: "/assets/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const Destinations = ({ params }) => {
  const destination = destinations.find((d) => d.name === params.destination);

  return (
    <main className={styles.page}>
      <div className={styles.widthLimit}>
        <Header />
        <div className={styles.pageContentWithTitle}>
          <PageTitle number="01" text="PICK YOUR DESTINATION" />
          <div className={styles.pageContentContainer}>
            <div className={styles.planetImageContainer}>
              <Image
                className={styles.planetImage}
                width={170}
                height={170}
                src={destination.images.png}
                alt={destination.name}
              />
            </div>

            <div className={styles.rightContentContainer}>
              <PlanetNavbar />

              <h2 className={`${bellefair.className} ${styles.planetName}`}>
                {destination.name.toLocaleUpperCase()}
              </h2>
              <P>{destination.description}</P>

              <div className={styles.lineDecoration}></div>

              <div className={styles.planetStatsContainer}>
                <PlanetStat
                  label="AVG. DISTANCE"
                  value={destination.distance}
                />
                <PlanetStat
                  label="EST. TRAVEL TIME"
                  value={destination.travel.toUpperCase()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destinations;
