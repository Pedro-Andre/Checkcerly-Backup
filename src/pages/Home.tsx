import Nav from "../assets/components/Nav/Nav";
import HeroSection from "../assets/components/HeroSection/HeroSection";
import CardsSection from "../assets/components/CardsSection/CardsSection";
import BottomSection from "../assets/components/BottomSection/BottomSection";
import "../App.css";

function Home() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>

      <main>
        <section>
          <HeroSection></HeroSection>
        </section>

        <section>
          <CardsSection></CardsSection>
        </section>

        <section>
          <BottomSection></BottomSection>
        </section>
      </main>
    </>
  );
}

export default Home;
