"use client";
import Header from "@/app/components/header/Header";
import styles from "./page.module.css";
import PageTitle from "@/app/components/pageTitle/PageTitle";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { barlowCondensed, bellefair } from "@/app/fonts";
import P from "@/app/components/typography/P";

const technology = [
  {
    relativeURL: "launch-vehicle",
    name: "Launch vehicle",
    images: {
      portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    relativeURL: "spaceport",
    name: "Spaceport",
    images: {
      portrait: "/assets/technology/image-spaceport-portrait.jpg",
      landscape: "/assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    relativeURL: "space-capsule",
    name: "Space capsule",
    images: {
      portrait: "/assets/technology/image-space-capsule-portrait.jpg",
      landscape: "/assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const Technology = ({ params }) => {
  const tech = technology.find((tech) => tech.relativeURL === params.tech);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.widthLimit}>
        <Header />

        <PageTitle number="03" text="SPACE LAUNCH 101" />

        {isMobile ? (
          <Image
            className={styles.techImage}
            src={isMobile ? tech.images.landscape : tech.images.portrait}
            width={768}
            height={310}
            alt={tech.name}
          />
        ) : (
          <Image
            className={styles.techImage}
            src={tech.images.portrait}
            width={768}
            height={310}
            alt={tech.name}
          />
        )}

        <ul className={styles.ul}>
          {technology.map((tech, index) => {
            return (
              <Link key={tech.relativeURL} href={tech.relativeURL}>
                <li
                  className={`${bellefair.className} ${styles.li} ${
                    usePathname().includes(tech.relativeURL)
                      ? styles.active
                      : styles.notActive
                  }`}
                >
                  {index + 1}
                </li>
              </Link>
            );
          })}
        </ul>

        <div className={styles.textContentContainer}>
          <div
            className={`${barlowCondensed.className} ${styles.techTerminology}`}
          >
            THE TERMINOLOGY...
          </div>
          <div className={`${bellefair.className} ${styles.techName}`}>
            {tech.name.toUpperCase()}
          </div>
          <P>{tech.description}</P>
        </div>
      </div>
    </main>
  );
};

export default Technology;
