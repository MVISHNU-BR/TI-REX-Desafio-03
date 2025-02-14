import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeItem } from "@/store/cartSlice";
import { Button } from "../ui/button";
import xIcon from "@/assets/xIcon.svg";

export default function CartItemList() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col max-h-[500px] CartItem overflow-auto">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="flex items-center justify-between max-w-[350px]">
            <div
              key={item.id}
              className="flex items-center gap-8 CartItem pb-5 w-full"
            >
              <img
                className="w-[108px] h-[105px] rounded-lg"
                src={item.image}
                alt={item.name}
              />
              <div className="flex flex-col gap-3">
                <p className="font-normal text-base">{item.name}</p>
                <div className="flex items-center gap-4">
                  <p className="font-light text-base">{item.quantity}</p>
                  <p>X</p>
                  <p className="font-medium text-xs text-primary max-w-[85px]">
                    R$ {item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
            <div className="CartItem">
              <Button
                variant={"none"}
                size={"none"}
                className="self-end"
                onClick={() => dispatch(removeItem(item.id))}
              >
                <img src={xIcon} alt="Remover item" />
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
