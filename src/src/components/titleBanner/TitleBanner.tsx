import MainLogo from "@/assets/MainLogo.svg";
import { BreadcrumbWithSeparator } from "./components/BreadcrumbWithSeparator";
import { useLocation } from "react-router";

export default function TitleBanner() {
  const location = useLocation();
  const pathName = location.pathname;
  const getPageName = (pathName: string) => {
    switch (pathName) {
      case "/components":
        return "Components";
      case "/shop":
        return "Shop";
      case "/aboult":
        return "Aboult";
      case "/contact":
        return "contact";
      case "/cart":
        return "Cart";
      case "/checkout":
        return "Checkout";
      default:
        return pathName;
    }
  };

  const currentPageName = getPageName(pathName);

  return (
    <section className="h-[316px] w-full bg-[url(https://furniroimages.s3.us-east-2.amazonaws.com/titleBanner.png)] bg-cover bg-no-repeat flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
        <img src={MainLogo} width={77} height={77} alt="Logo Furniro" />
        <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl">
          {currentPageName}
        </h2>
        <BreadcrumbWithSeparator
          pathName={pathName}
          currentPageName={currentPageName}
        />
      </div>
    </section>
  );
}
