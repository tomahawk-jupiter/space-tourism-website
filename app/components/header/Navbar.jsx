"use client";
import React, { useEffect, useState } from "react";
import NormalNavbar from "./NormalNavbar";
import HamburgerNavbar from "./HamburgerNavbar";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Update the state based on the window width
      setIsMobile(window.innerWidth <= 700); // Adjust the threshold as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <HamburgerNavbar /> : <NormalNavbar />;
};

export default Navbar;
