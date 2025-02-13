import { Button } from "@/components/ui/button";
import darkFacebook from "@/assets/darkFacebook.svg";
import darkLinkedin from "@/assets/darkLinkedin.svg";
import darkTwitter from "@/assets/darkTwitter.svg";
import stars from "@/assets/stars.png";
export default function ProductsInfo() {
  return (
    <div className=" flex flex-col gap-4">
      <div className="">
        <h1 className="font-normal text-[42px]">Asgard sofa</h1>
        <span className="font-medium text-2xl text-secondFadeGray">
          Rs. 250,000.00
        </span>
      </div>
      <div className="flex items-center gap-5">
        <img src={stars} alt="stars" />
        <div className="border-r-[1px] border-secondFadeGray h-[30px]"></div>
        <span className="font-normal text-sm text-secondFadeGray">
          5 Customer Review
        </span>
      </div>
      <div>
        <p className="text-normal text-[13px] max-w-[424px]">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>
      </div>

      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col">
          <p>Size</p>
          <div className="flex gap-4">
            <Button
              size={"none"}
              className="w-[30px] h-[30px] rounded-sm font-normal text-sm text-center "
            >
              L
            </Button>
            <Button
              size={"none"}
              className="w-[30px] h-[30px] rounded-sm font-normal text-sm text-center "
            >
              XL
            </Button>
            <Button
              size={"none"}
              className="w-[30px] h-[30px] rounded-sm font-normal text-sm text-center "
            >
              XS
            </Button>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Color</p>
          <div className="flex gap-4">
            <Button
              size={"none"}
              className="w-[30px] h-[30px] rounded-full bg-blue-600"
            ></Button>
            <Button
              size={"none"}
              className="w-[30px] h-[30px] rounded-full bg-black"
            ></Button>{" "}
            <Button
              size={"none"}
              className="w-[30px] h-[30px] rounded-full bg-primary"
            ></Button>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center mb-12 mt-4">
        <div className="flex items-center justify-center gap-9 w-[123px] h-[64px] rounded-lg border border-secondFadeGray">
          <Button
            size={"none"}
            variant={"none"}
            className="text-xl h-full w-full rounded-l-lg  hover:bg-red-600 hover:text-secondWhite"
          >
            -
          </Button>
          <p>1</p>
          <Button
            size={"none"}
            variant={"none"}
            className="text-xl h-full w-full  rounded-r-lg hover:bg-primary hover:text-white"
          >
            +
          </Button>
        </div>
        <Button variant={"secondary"} className="w-[215px] h-[64px] mt-0">
          Add To Cart
        </Button>
      </div>
      <div className="flex gap-4 pt-10 last:border-t-[2px] border-borderGray">
        <div className="flex flex-col gap-3">
          <p className="font-normal text-base text-secondFadeGray">SKU</p>
          <p className="font-normal text-base text-secondFadeGray">Category</p>
          <p className="font-normal text-base text-secondFadeGray">Tags</p>
          <p className="font-normal text-base text-secondFadeGray">Share</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-normal text0base text-secondFadeGray">: SS001</p>
          <p className="font-normal text0base text-secondFadeGray">: Sofas</p>
          <p className="font-normal text0base text-secondFadeGray">
            : Sofa, Chair, Home, Shop
          </p>
          <div className="flex gap-6">
            <p className="font-normal text0base text-secondFadeGray">:</p>
            <img
              src={darkFacebook}
              className="w-[25px] h-[25px]"
              alt="facebook icon"
            />
            <img
              src={darkLinkedin}
              className="w-[25px] h-[25px]"
              alt="linkedin icon"
            />
            <img
              src={darkTwitter}
              className="w-[25px] h-[25px]"
              alt="twitter icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
