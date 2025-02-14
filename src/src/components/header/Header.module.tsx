import { Link, NavLink } from "react-router";
import MainLogo from "@/assets/MainLogo.svg";
import cart from "@/assets/cart.svg";
import personIcon from "@/assets/personIcon.svg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useState } from "react";
import { Button } from "../ui/button";
import bagTrash from "@/assets/bagTrash.svg";
import CartItemList from "./CartItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/store/cartSlice";
import { RootState } from "@/store/store";
// interface HeaderProps {
//   children?: React.ReactNode;
// }

export default function Header() {
  const [showCartOverlay, setShowCartOverlay] = useState(true);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <>
      <header className=" h-[100px] w-full flex items-center justify-between px-14">
        <Link to={"/"} className="bg-white flex flex-row items-center gap-1">
          <img src={MainLogo} width={50} height={32} alt="Logo Furniro" />
          <h1 className="text-[34px] font-montserrat font-bold">Furniro</h1>
        </Link>
        <nav className="flex gap-[75px] font-poppins text-sm md:text-base font-medium mb-2">
          <NavLink to="/" className="hover:border-b-2 hover:border-b-black">
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="border border-white hover:border-b-2 hover:border-b-black"
          >
            Shop
          </NavLink>
          <NavLink to="/" className="hover:border-b-2 hover:border-b-black">
            Aboult
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:border-b-2 hover:border-b-black"
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex gap-9 items-center">
          <div>
            <SignedOut>
              <SignInButton>
                <img
                  src={personIcon}
                  className="cursor-pointer "
                  alt="Perfil icon"
                />
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <div
            className=""
            onMouseEnter={() => setShowCartOverlay(true)}
            onMouseLeave={() => setShowCartOverlay(false)}
          >
            <Link to="/cart">
              <img src={cart} alt="Cart shop icon" className="cursor-pointer" />
            </Link>

            {/* Overlay do Carrinho */}
            {showCartOverlay && (
              <div className="fixed inset-0 bg-black bg-opacity-50">
                <div
                  onMouseLeave={() => setShowCartOverlay(false)}
                  className="absolute z-10 right-0 top-0 w-[417px] h-[746px] flex flex-col justify-between bg-white shadow-lg pl-7 pt-7 pr-10 pb-7"
                >
                  <div className="">
                    <div className=" flex items-center justify-between ">
                      <h2 className="text-2xl font-semibold mb-2">
                        Shopping Cart
                      </h2>
                      <Link to="/cart">
                        <img
                          src={cart}
                          alt="Cart shop icon"
                          className="cursor-pointer"
                        />
                      </Link>
                      <div className=" ml-5 flex">
                        <Button
                          variant={"none"}
                          size={"none"}
                          className="self-end"
                          onClick={() => dispatch(clearCart())}
                        >
                          <img src={bagTrash} alt="" />
                        </Button>
                      </div>
                    </div>
                    <div className="border-b-2 pt-6 mb-11 w-[287px]"></div>
                    <CartItemList />
                  </div>
                  <div className="">
                    <div className="flex justify-between border-b-2 pb-6">
                      <h3>Subtotal</h3>
                      <p className="text-primary font-semibold">
                        R$ {totalPrice.toFixed(2)}
                      </p>
                    </div>
                    <div className="pt-6">
                      <div className="flex gap-4">
                        <Link
                          to={"/cart"}
                          className="h-[30px] w-[87px] border border-black rounded-full flex items-center justify-center text-sm "
                        >
                          Cart
                        </Link>
                        <Link
                          to={"/checkout"}
                          className="h-[30px] w-[118px] border border-black rounded-full flex items-center justify-center text-sm "
                        >
                          Checkout
                        </Link>
                        <Link
                          to={"/"}
                          className="h-[30px] w-[135px] border border-black rounded-full flex items-center justify-center text-sm "
                        >
                          Compariosion
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
