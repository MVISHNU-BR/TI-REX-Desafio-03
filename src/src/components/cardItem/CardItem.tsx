import { cardItemProps } from "./types.cardItem";

export default function CardItem({
  title,
  typeItem,
  price,
  fullPrice,
  imgItem,
  state,
}: cardItemProps) {
  return (
    <div className="w-[285px] h-[446px]">
      <div>
        <div className="relative">
          <div className="absolute text-center top-6 right-6 rounded-full w-[48px] h=[48px] text-white text-base bg-red-600 px-1 py-3">
            {state}
          </div>
        </div>
        <img src={imgItem} alt="productImage" />
      </div>
      <div className="flex flex-col pt-4 px-5 gap-2">
        <h1 className="text-2xl font-semibold text-fadeBlack">{title}</h1>
        <span className="font-base font-normal text-fadeGray">{typeItem}</span>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-fadeBlack">
            R$ {price}
          </span>
          <span className="text-base font-normal line-through text-fadeGray">
            R$ {fullPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
