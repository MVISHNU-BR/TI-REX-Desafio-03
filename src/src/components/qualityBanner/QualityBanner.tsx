import customerSupport from "@/assets/customerSupport.svg";
import guarantee from "@/assets/guarantee.svg";
import trophy from "@/assets/trophy.svg";
import shipping from "@/assets/shipping.svg";

export default function QualityBanner() {
  return (
    <section className="bg-bannerColor w-full h-[270px] flex items-center justify-center px-10">
      <div className=" flex gap-14 items-center flex-wrap justify-center">
        <div className="flex items-center h-[70px] gap-3">
          <img src={trophy} width={60} height={60} alt="trophy Icon" />
          <div>
            <span className="font-semibold text-2xl">High Quality</span>
            <p className="text-fadeGray font-medium text-lx">
              crafted from top materials
            </p>
          </div>
        </div>
        <div className="flex items-center h-[70px] gap-3">
          <img src={guarantee} width={60} height={60} alt="warrantee Icon" />
          <div>
            <span className="font-semibold text-2xl">Warranty Protection</span>
            <p className="text-fadeGray font-medium text-lx">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center h-[70px] gap-3">
          <img
            src={shipping}
            width={60}
            height={60}
            alt="hand with a box icon (shipping icon)"
          />
          <div>
            <span className="font-semibold text-2xl">Free Shipping</span>
            <p className="text-fadeGray font-medium text-lx">
              Order over 150 $
            </p>
          </div>
        </div>
        <div className="flex items-center h-[70px] gap-3">
          <img
            src={customerSupport}
            width={60}
            height={60}
            alt="callcenter icon"
          />
          <div>
            <span className="font-semibold text-2xl">24 / 7 Support</span>
            <p className="text-fadeGray font-medium text-lx">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
