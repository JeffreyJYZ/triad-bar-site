import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stratum from "./components/Stratum";
import Lab from "./components/Lab";
import Vessel from "./components/Vessel";
import Builder from "./components/Builder";
import Manifesto from "./components/Manifesto";
import Community from "./components/Community";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stratum />
        <Lab />
        <Builder />
        <Manifesto />
        <Vessel />
        <Community />
      </main>
      <Footer />
    </>
  );
}
