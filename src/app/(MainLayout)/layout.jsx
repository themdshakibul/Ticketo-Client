import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="grow flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
