import { useParams } from "react-router";
import { ProductsBreadcrumb } from "./components/ProductsBreadcrumb";
import ImageGrid from "./components/ImageGrid";
import RelatedProducts from "./components/RelatedProducts";
import ProductsInfo from "./components/ProductsInfo";

export default function ProductPage() {
  const params = useParams();
  console.log(params);
  return (
    <section className="flex flex-col gap-9">
      <div className="h-[100px] flex items-center px-24 bg-filterBanner">
        <ProductsBreadcrumb />
      </div>
      <div className="flex gap-20 px-24">
        <ImageGrid />
        <ProductsInfo />
      </div>
      <section className="flex flex-col items-center gap-9 pt-12 pb-16 border-t-[2px] border-borderGray">
        <div className="flex gap-32 items-center justify-center">
          <h3 className="hover:underline font-medium text-2xl">Description</h3>
          <h3 className="hover:underline font-normal text-2xl text-secondFadeGray">
            Additional Information
          </h3>
        </div>
        <div className="flex flex-col items-center max-w-[1026px]  gap-8">
          <p className="text-secondFadeGray text-base font-normal">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-secondFadeGray text-base font-normal">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className=" flex gap-7">
          <img
            src="https://furniroimages.s3.us-east-2.amazonaws.com/product02.png"
            alt=""
          />
          <img
            src="https://furniroimages.s3.us-east-2.amazonaws.com/product01.png"
            alt=""
          />
        </div>
      </section>
      <div className="border-t-[2px] border-borderGray">
        <RelatedProducts />
      </div>
    </section>
  );
}
