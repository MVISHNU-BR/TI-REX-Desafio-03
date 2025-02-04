import Header from "@/components/header/Header.module";
import dinnign from "@/assets/dinning.png";
import living from "@/assets/living.png";
import bedroom from "@/assets/bedroom.png";
import ProductsContent from "@/components/productsContent/ProductsContent";

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="w-full flex h-[716.83px] debug justify-center bg-[url(@/assets/homeSection.png)] bg-countain bg-center bg-no-repeat">
        <div className="max-w-[1440px] w-full debug flex items-center justify-end px-[58px] pt-[50px]">
          <div className="w-[643px] h-[433px] debug bg-secondWhite rounded-[10px] flex flex-col items-start pl-[39px] py-[62px]">
            <div className="flex flex-col mb-4">
              <span className="font-poppins text-base font-semibold text-secondDark">
                New Arrival
              </span>
              <h2 className="-[127px] leading-[65px] text-primary font-poppins font-bold text-[52px] ">
                Discover Our New Collection
              </h2>
            </div>
            <p className="text-secondDark w-[546px] font-poppins font-medium text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button
              className="font-poppins text-white bg-primary font-bold text-base py-6 px-[72px] mt-[46px]
            "
            >
              buy Now
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col h-[685px] items-center my-14 gap-14">
        <div className="flex flex-col items-center">
          <h3 className="text-[32px] font-bold ">Browse The Range</h3>
          <span className="font-normal text-">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex flex-col items-center gap-8">
            <img src={dinnign} className="rounded-xl" alt="dinning desk" />
            <span className="font-poppins text-xl font-semibold">Linving</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img src={living} className="rounded-xl" alt="dinning desk" />
            <span className="font-poppins text-xl font-semibold">Linving</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img src={bedroom} className="rounded-xl" alt="dinning desk" />
            <span className="font-poppins text-xl text-secondDark font-semibold">
              Linving
            </span>
          </div>
        </div>
      </section>
      <ProductsContent sectionTitle="Our Products" />
    </>
  );
}
