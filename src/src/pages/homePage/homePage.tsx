import ProductsContent from "@/components/productsContent/ProductsContent";
import SliderCardHome from "@/pages/homePage/components/sliderCardHome/SliderCardHome";
import { Button } from "@/components/ui/button";
import ImagesSection from "./components/ImageSection";
export default function HomePage() {
  return (
    <>
      <section className="w-full flex h-[716.83px]  justify-center bg-[url(https://furniroimages.s3.us-east-2.amazonaws.com/homeSection.png)] bg-countain bg-center bg-no-repeat">
        <div className="max-w-[1440px] w-full  flex items-center justify-end px-[58px] pt-[50px]">
          <div className="w-[643px] h-[433px]  bg-secondWhite rounded-[10px] flex flex-col items-start gap-11 pl-[39px] py-[62px]">
            <div className="">
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
            </div>
            <Button>BUY NOW</Button>
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
            <img
              src="https://furniroimages.s3.us-east-2.amazonaws.com/dinning.png"
              className="rounded-xl"
              alt="dinning desk"
            />
            <span className="font-poppins text-xl font-semibold">Dining</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img
              src="https://furniroimages.s3.us-east-2.amazonaws.com/living.png"
              className="rounded-xl"
              alt="dinning desk"
            />
            <span className="font-poppins text-xl font-semibold">Linving</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img
              src="https://furniroimages.s3.us-east-2.amazonaws.com/bedroom.png"
              className="rounded-xl"
              alt="dinning desk"
            />
            <span className="font-poppins text-xl text-secondDark font-semibold">
              Bedroom
            </span>
          </div>
        </div>
      </section>
      <ProductsContent sectionTitle="Our Products" />
      <SliderCardHome />
      <ImagesSection />
    </>
  );
}
