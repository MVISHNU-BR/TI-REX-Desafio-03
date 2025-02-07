import { Button } from "@/components/ui/button";
import Slider from "./Slider";

export default function SliderCardHome() {
  return (
    <section className="w-full h-[670px] flex items-center justify-center bg-bannerColorSecondary">
      <div className="max-w-[1440px] flex items-center gap-12">
        <div className="flex flex-col gap-6 max-w-[422px]">
          <div className="">
            <h3 className="font-bold text-[40px]">
              50+ Beautiful rooms inspiration
            </h3>
            <p className=" font-medium text-base text-fadeGray2">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
          </div>
          <Button size={"customDefault"} className="self-start">
            Example More
          </Button>
        </div>
        <div className="max-w-[931px] w-full">
          <Slider />
        </div>
      </div>
    </section>
  );
}
