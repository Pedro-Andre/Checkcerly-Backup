import Nav from "../assets/components/Nav/Nav";
import HeroSection from "../assets/components/HeroSection/HeroSection";
import CardsSection from "../assets/components/CardsSection/CardsSection";
import BottomSection from "../assets/components/BottomSection/BottomSection";
import "../App.css";

function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <HeroSection />
        </section>

        <section>
          <CardsSection />
        </section>

        <section>
          <BottomSection />
        </section>
      </main>
    </>
  );
}

export default Home;
