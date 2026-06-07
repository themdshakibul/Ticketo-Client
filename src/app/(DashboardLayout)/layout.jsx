import Logo from "@/Components/Apps/NavbarSection/Logo";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-[#080c16]">
      <aside className="w-67 h-screen  border-r border-white/5">
        <div className="px-6 py-4 border-b border-white/5">
          <Logo />
        </div>
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
