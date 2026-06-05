import HeroSection from "@/Components/Apps/HomePage/HeroSection";
import Statistics from "@/Components/Apps/HomePage/Statistics";
import WhyChoses from "@/Components/Apps/HomePage/WhyChoses";

export default function Home() {
  return (
    <section>
      <main>
        <HeroSection />
        <Statistics />
        <WhyChoses />
      </main>
    </section>
  );
}
