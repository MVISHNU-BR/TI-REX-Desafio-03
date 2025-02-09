import Footer from "@/components/footer/Footer.module";
import Header from "@/components/header/Header.module";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
