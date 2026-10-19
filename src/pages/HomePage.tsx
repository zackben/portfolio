import AroundHere from "../components/home/AroundHere";
import ExperienceTable from "../components/home/ExperienceTable";
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import SelectedWorks from "../components/home/SelectedWorks";
import Marquee from "../components/ui/Marquee";
import { marqueeRows } from "../data/profile";
import "../styles/home.css";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <SelectedWorks />
      <ExperienceTable />
      <Marquee rows={marqueeRows} />
      <AroundHere />
    </>
  );
}
