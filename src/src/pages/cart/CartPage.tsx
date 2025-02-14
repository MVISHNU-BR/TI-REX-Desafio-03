import { Button } from "@/components/ui/button";
import CartItem from "./components/CartItem";

export default function CartPage() {
  return (
    <section className="w-full debug justify-center px-[100px] pt-[76px] pb-[64px] flex gap-8">
      <div className="">
        <div className="h-[57.3px] w-[817px] bg-filterBanner  flex items-center gap-[137px] px-[146px]">
          <div className="flex gap-28">
            <p className="font-medium text-base">Product</p>
            <p className="font-medium text-base">Price</p>
          </div>
          <div className="flex gap-9">
            <p className="font-medium text-base">Quality</p>
            <p className="font-medium text-base">Subtotal</p>
          </div>
        </div>
        <div className=" pt-14 flex flex-col gap-14  max-w-[817px]">
          <CartItem />
        </div>
      </div>
      <div className="min-w-[393px] h-[406px] bg-filterBanner flex flex-col items-center pt-4">
        <h2 className="font-semibold text-[32px]">Cart Totals</h2>
        <div className="flex flex-col gap-8  pt-16 pb-11">
          <div className="flex gap-16">
            <p className="font-medium text-base">Subtotal</p>
            <p className="font-normal text-base text-secondFadeGray">
              Rs. 250,000.00
            </p>
          </div>
          <div className="flex gap-16">
            <p className="font-medium text-base">Total</p>
            <p className="font-medium text-primary text-xl">Rs. 250,000.00</p>
          </div>
        </div>
        <div className="">
          <Button
            variant={"secondary"}
            size={"none"}
            className="w-[222px] h-[61px] mt-0"
          >
            Check Out
          </Button>
        </div>
      </div>
    </section>
  );
}
