import { TrialBar } from "./components/TrialBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Signatures } from "./components/Signatures";
import { Menu } from "./components/Menu";
import { Locations } from "./components/Locations";
import { CtaBand, Footer } from "./components/CtaFooter";
import { WaveDivider } from "./components/Icons";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="absolute left-[-9999px] top-0 z-[1000] bg-primary px-4 py-3 text-white focus:left-2 focus:top-2"
      >
        Skip to content
      </a>
      <TrialBar />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <WaveDivider />
        <Signatures />
        <WaveDivider />
        <Menu />
        <WaveDivider />
        <Locations />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
