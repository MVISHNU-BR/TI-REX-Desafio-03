import QualityBanner from "@/components/qualityBanner/QualityBanner";
import TitleBanner from "@/components/titleBanner/TitleBanner";
import Layout from "./Layout";

type LayoutProps = {
  children: React.ReactNode;
};

const SecondLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Layout>
        <TitleBanner />
        <main className="">{children}</main>
        <QualityBanner />
      </Layout>
    </div>
  );
};

export default SecondLayout;
