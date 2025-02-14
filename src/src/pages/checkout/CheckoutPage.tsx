import { Button } from "@/components/ui/button";
import CheckoutForm from "./components/CheckoutForm";
import { Link } from "react-router";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function CheckoutPage() {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const subtotalPrice = useSelector(
    (state: RootState) => state.cart.subtotalPrice
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <section className="flex justify-center gap-6">
      <CheckoutForm />
      <div className=" w-[608px] h-[789px] flex  pt-36 justify-center">
        <div className=" w-[533px] flex flex-col gap-16">
          <div className=" flex justify-between">
            <div className=" flex flex-col gap-4">
              <h3 className="font-medium text-2xl">Product</h3>
              {cartItems.length > 0
                ? cartItems.map((item) => (
                    <p className="font-normal text-base text-secondFadeGray">
                      {item.name}{" "}
                      <span className="text-black"> X {item.quantity}</span>
                    </p>
                  ))
                : ""}
              <p className="font-normal text-base">Subtotal</p>
              <p className="font-normal text-base">Total</p>
            </div>
            <div className=" flex flex-col gap-4 text-end">
              <h3 className="font-medium text-2xl">Subtotal</h3>
              {cartItems.length > 0
                ? cartItems.map((item) => (
                    <p className="font-light text-base"> $ {item.price}</p>
                  ))
                : ""}
              <p className="font-light text-base">
                {" "}
                $ {subtotalPrice.toFixed(2)}
              </p>
              <p className="font-bold text-primary text-2xl">
                $ {totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className="">
              <div className="flex items-center gap-4">
                <input type="radio" id="directBank" />
                <label className="font-base " htmlFor="directBank">
                  Direct bank Transfer
                </label>
              </div>
              <p className="font-light text-secondFadeGray text-base">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" id="directBank" />
              <label className="font-base " htmlFor="directBank">
                Direct bank Transfer
              </label>
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" id="directBank" />
              <label className="font-base " htmlFor="directBank">
                Cash On Delivery
              </label>
            </div>
            <div>
              <p className="font-light text-base">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <Link
                  to={"/privacyPolicy"}
                  className="font-semibold hover:underline"
                >
                  privacy policy.
                </Link>
              </p>
            </div>
            <Button variant={"secondary"}>Place order</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
