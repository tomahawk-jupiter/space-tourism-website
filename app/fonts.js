import { Barlow_Condensed, Bellefair, Barlow } from "next/font/google";

export const barlow = Barlow({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const bellefair = Bellefair({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
