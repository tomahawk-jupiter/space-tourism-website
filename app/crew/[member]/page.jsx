"use client";
import styles from "./page.module.css";
import Header from "@/app/components/header/Header";
import PageTitle from "@/app/components/pageTitle/PageTitle";
import P from "@/app/components/typography/P";
import Image from "next/image";
import Link from "next/link";
import { bellefair } from "@/app/fonts";
import { usePathname } from "next/navigation";

const crew = [
  {
    relativeURL: "douglas-hurley",
    name: "Douglas Hurley",
    images: {
      png: "/assets/crew/image-douglas-hurley.png",
      webp: "/assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    relativeURL: "mark-shuttleworth",
    name: "Mark Shuttleworth",
    images: {
      png: "/assets/crew/image-mark-shuttleworth.png",
      webp: "/assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    relativeURL: "victor-glover",
    name: "Victor Glover",
    images: {
      png: "/assets/crew/image-victor-glover.png",
      webp: "/assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    relativeURL: "anousheh-ansari",
    name: "Anousheh Ansari",
    images: {
      png: "/assets/crew/image-anousheh-ansari.png",
      webp: "/assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const Crew = ({ params }) => {
  const crewMember = crew.find(
    (member) => member.relativeURL === params.member
  );

  return (
    <main className={styles.page}>
      <div className={styles.widthLimit}>
        <Header />
        <div className={styles.pageContentContainer}>
          <PageTitle number="02" text="MEET YOUR CREW" />

          <div className={styles.pageContentBelowTitle}>
            <div className={styles.imageContainer}>
              <Image
                width={500}
                height={700}
                src={crewMember.images.png}
                alt={crewMember.name}
                className={styles.crewImage}
              />
            </div>

            <div className={styles.lineDecoration}></div>

            <div className={styles.dotsAndTextContainer}>
              <ul className={styles.ul}>
                {crew.map((c) => {
                  return (
                    <Link key={c.name} href={c.relativeURL}>
                      <li
                        className={`${styles.navItem} ${styles.li} ${
                          usePathname().includes(c.relativeURL)
                            ? styles.active
                            : styles.notActive
                        }`}
                        key={c.relativeURL}
                      ></li>
                    </Link>
                  );
                })}
              </ul>

              <div className={styles.textContentContainer}>
                <div className={`${bellefair.className} ${styles.role}`}>
                  {crewMember.role.toLocaleUpperCase()}
                </div>
                <div className={`${bellefair.className} ${styles.name}`}>
                  {crewMember.name.toUpperCase()}
                </div>
                <div className={styles.paragraphWrapper}>
                  <P>{crewMember.bio}</P>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
