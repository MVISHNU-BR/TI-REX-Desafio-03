import { Button } from "@/components/ui/button";
import trash from "@/assets/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { removeItem, addQuantity, removeQuantity } from "@/store/cartSlice";

export default function CartItem() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="flex items-center gap-11 mb-4">
            <div className="w-[80px] h-[80px] rounded-xl ">
              <img
                className="bg-cover rounded-xl w-full h-full"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="flex gap-16  max-w-[289px] w-full">
              <p className="text-base font-normal text-secondFadeGray">
                {item.name}
              </p>
              <p className="text-base font-normal text-secondFadeGray text-right">
                $ {item.price.toFixed(2)}
              </p>
            </div>
            <div className=" flex gap-5 items-center max-w-[240px] w-full">
              <div className="flex items-center justify-center gap-5 w-[106px] h-[48px] rounded-lg border border-secondFadeGray">
                <Button
                  size={"none"}
                  variant={"none"}
                  onClick={() => dispatch(removeQuantity(item.id))}
                  className="text-xl h-full w-full rounded-l-lg  hover:bg-red-600 hover:text-secondWhite"
                >
                  -
                </Button>
                <p>{item.quantity}</p>
                <Button
                  size={"none"}
                  variant={"none"}
                  onClick={() => dispatch(addQuantity(item.id))}
                  className="text-xl h-full w-full  rounded-r-lg hover:bg-primary hover:text-white"
                >
                  +
                </Button>
              </div>
              <div>
                <p className="text-base font-normal text-nowrap">
                  $ {item.subtotal.toFixed(2)}
                </p>
              </div>
            </div>
            <div className=" ml-5 flex">
              <Button
                variant={"none"}
                size={"none"}
                className="self-end"
                onClick={() => dispatch(removeItem(item.id))}
              >
                <img src={trash} alt="" />
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Carrinho vazio</p>
      )}
    </div>
  );
}
