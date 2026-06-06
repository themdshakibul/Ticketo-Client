import HeroSection from "@/Components/Apps/HomePage/HeroSection";
import Statistics from "@/Components/Apps/HomePage/Statistics";
import Testimonials from "@/Components/Apps/HomePage/Testimonials";
import WhyChoses from "@/Components/Apps/HomePage/WhyChoses";

export default function Home() {
  const stats = {
    totalEvents: 8,
    totalAttendees: 4000,
    totalOrgs: 10,
  };

  return (
    <section>
      <main>
        <HeroSection />
        <Statistics stats={stats} />
        <WhyChoses />
        <Testimonials />
      </main>
    </section>
  );
}
