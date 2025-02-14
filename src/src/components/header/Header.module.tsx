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
// interface HeaderProps {
//   children?: React.ReactNode;
// }

export default function Header() {
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
          <Link to="">
            <img src={cart} alt="Cart shop icon" />
          </Link>
        </div>
      </header>
    </>
  );
}
