import CardItem from "../cardItem/CardItem";
import { Button } from "../ui/button";
import { ProductsProps } from "./tyeps.products";

export default function ProductsContent({ sectionTitle }: ProductsProps) {
  const products = [
    {
      id: 1,
      title: "Syltherine",
      tipeItem: "Stylish cafe chair",
      price: 2500.0,
      fullPrice: 3500.0,
      imgItem: "https://furniroimages.s3.us-east-2.amazonaws.com/image+5.png",
      state: "-30%",
    },
    {
      id: 2,
      title: "Syltherine",
      tipeItem: "Stylish cafe chair",
      price: 2500.0,
      fullPrice: 3500.0,
      imgItem: "https://furniroimages.s3.us-east-2.amazonaws.com/image+5.png",

      state: "-30%",
    },
    {
      id: 3,
      title: "Syltherine",
      tipeItem: "Stylish cafe chair",
      price: 2500.0,
      fullPrice: 3500.0,
      imgItem: "https://furniroimages.s3.us-east-2.amazonaws.com/image+5.png",

      state: "-30%",
    },
    {
      id: 4,
      title: "Syltherine",
      tipeItem: "Stylish cafe chair",
      price: 2500.0,
      fullPrice: 3500.0,
      imgItem: "https://furniroimages.s3.us-east-2.amazonaws.com/image+5.png",

      state: "-30%",
    },
    {
      id: 5,
      title: "Syltherine",
      tipeItem: "Stylish cafe chair",
      price: 2500.0,
      fullPrice: 3500.0,
      imgItem: "https://furniroimages.s3.us-east-2.amazonaws.com/image+5.png",

      state: "-30%",
    },
    {
      id: 6,
      title: "Syltherine",
      tipeItem: "Stylish cafe chair",
      price: 2500.0,
      fullPrice: 3500.0,
      imgItem: "https://furniroimages.s3.us-east-2.amazonaws.com/image+5.png",

      state: "-30%",
    },
    {
      id: 7,
      title: "Syltherine",
      tipeItem: "Stylish cafe chair",
      price: 2500.0,
      fullPrice: 3500.0,
      imgItem: "https://furniroimages.s3.us-east-2.amazonaws.com/image+5.png",

      state: "-30%",
    },
    {
      id: 8,
      title: "Syltherine",
      tipeItem: "Stylish cafe chair",
      price: 2500.0,
      fullPrice: 3500.0,
      imgItem: "https://furniroimages.s3.us-east-2.amazonaws.com/image+5.png",

      state: "-30%",
    },
  ];
  return (
    <section className="flex flex-col gap-8 mb-14 w-full min-h-[1084px] items-center">
      <h2 className="font-bold text-[40px]">{sectionTitle}</h2>
      <div className="flex gap-8 items-center justify-center flex-wrap max-w-[1440px]">
        {products.map((item) => (
          <CardItem
            imgItem={item.imgItem}
            title={item.title}
            typeItem={item.tipeItem}
            price={item.price}
            fullPrice={item.fullPrice}
            state={item.state}
          />
        ))}
      </div>
      <div>
        <Button variant={"outline"}>Show More</Button>
      </div>
    </section>
  );
}
