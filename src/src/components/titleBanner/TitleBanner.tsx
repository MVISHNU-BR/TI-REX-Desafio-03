import MainLogo from "@/assets/MainLogo.svg";
import { BreadcrumbWithSeparator } from "./components/BreadcrumbWithSeparator";

export default function TitleBanner() {
  return (
    <section className="h-[316px] w-full bg-[url(@/assets/titleBanner.png)] bg-cover bg-no-repeat flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
        <img src={MainLogo} width={77} height={77} alt="Logo Furniro" />
        <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl">
          {}Contact
        </h2>
        <BreadcrumbWithSeparator />
      </div>
    </section>
  );
}
