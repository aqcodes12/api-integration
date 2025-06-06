import React from "react";
import HeroSection from "./components/HeroSection";
import Courses from "./components/Courses";

const HomePage = () => {
  return (
    <>
      <div className="space-y-5">
        <HeroSection />
        <Courses />
      </div>
    </>
  );
};

export default HomePage;
