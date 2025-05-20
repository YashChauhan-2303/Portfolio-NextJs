import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { KeyMetrics } from "./components/KeyMetrics";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Stack } from "./components/Stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <KeyMetrics/>
      <Portfolio/>
      <Stack/>
      {/* <Services/> */}
      <Contact />
      <Footer/>
    </>
  );
}
