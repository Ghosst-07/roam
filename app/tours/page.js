import React from "react";
import TopDestinations from "../components/home/TopDestinations";
import FaqSection from "../components/home/FaqSection";
import TourListSection from "./components/TourListSection";

export default function Tours() {
  return (
    <>
      <TourListSection />
      <TopDestinations />
      <FaqSection />
    </>
  );
}
