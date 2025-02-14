import { Link } from "react-router";
import { cardItemProps } from "./types.cardItem";
import { Heart } from "lucide-react";
import share from "@/assets/share.svg";
import compare from "@/assets/compare.svg";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cartSlice";
export default function CardItem({
  title,
  typeItem,
  price,
  fullPrice,
  imgItem,
  state,
  id,
}: cardItemProps) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: id ?? 0,
        name: title,
        price: price,
        image: imgItem,
        quantity: 1,
      })
    );
  };
  return (
    <div className="relative  w-[285px] h-[446px] bg-cardItemFade group overflow-hidden shadow-md">
      <div className="">
        <div className="w-[285px] h-[446px]">
          <img src={imgItem} alt="productImage" />
          {state && (
            <div className="absolute text-center top-6 right-6 rounded-full w-[48px] h=[48px] text-white text-base bg-red-600 px-1 py-3">
              {state}
            </div>
          )}
          <div className="flex flex-col pt-4 px-5 gap-2 ">
            <h1 className="text-2xl font-semibold text-fadeBlack">{title}</h1>
            <span className="font-base font-normal text-fadeGray">
              {typeItem}
            </span>
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-fadeBlack">
                R$ {price}
              </span>
              <span className="text-base font-normal line-through text-fadeGray">
                {fullPrice ? "R$ " + fullPrice : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link
        to={`/shop/${title}`}
        className="absolute inset-0 bg-fadeBlack group-hover:bg-fadeBlack/80 transition-all duration-500 flex flex-col justify-center items-center gap-5 opacity-0 group-hover:opacity-100"
      >
        <Button
          size={"none"}
          variant={"cart"}
          className=""
          onClick={(event) => {
            event.preventDefault();
            handleAddToCart();
          }}
        >
          Add to cart
        </Button>
        <div className="flex gap-4">
          <button
            className="flex items-center text-white"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <img src={share} className="" />
            Share
          </button>
          <button
            className="flex items-center text-white"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <img src={compare} className="" />
            Compare
          </button>
          <button
            className="flex items-center text-white"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <Heart size={18} />
            Like
          </button>
        </div>
      </Link>
    </div>
  );
}
