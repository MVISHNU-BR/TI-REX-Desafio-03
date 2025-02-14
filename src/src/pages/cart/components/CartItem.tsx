import { Button } from "@/components/ui/button";
import trash from "@/assets/trash.svg";

export default function CartItem() {
  return (
    <div className="flex items-center gap-11">
      <div className="w-[80px] h-[80px] rounded-xl ">
        <img
          className="bg-cover rounded-xl w-full h-full"
          src="https://furniroimages.s3.us-east-2.amazonaws.com/image+1.png"
          alt="Sofa Asgard Image"
        />
      </div>
      <div className="flex gap-16  max-w-[289px] w-full">
        <p className="text-base font-normal text-secondFadeGray">Asgard Sofa</p>
        <p className="text-base font-normal text-secondFadeGray text-right">
          R$12332121,00
        </p>
      </div>
      <div className=" flex gap-5 items-center max-w-[240px] w-full">
        <div className="flex items-center justify-center gap-9 w-[106px] h-[48px] rounded-lg border border-secondFadeGray">
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
        <div>
          <p className="text-base font-normal text-nowrap">R$ 250,00.00</p>
        </div>
      </div>
      <div className=" ml-5 flex">
        <Button variant={"none"} size={"none"} className="self-end">
          <img src={trash} alt="" />
        </Button>
      </div>
    </div>
  );
}
