import { Link, NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import x from "@/assets/x.svg";
import linkedin from "@/assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-12 px-[100px] py-12  w-full h-[505px] border-t-[2px] border-borderGray  mt-14">
      <div className="flex h-[312px] justify-between max-w-[1240.01px] w-full ">
        <div className=" flex flex-col gap-14">
          <Link to="/">
            <h3 className="font-montserrat font-bold text-2xl">Furniro.</h3>
          </Link>
          <p className="font-normal text-base text-secondFadeGray w-[285px]">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>

          <div className="flex flex-row gap-4 ">
            <a
              href="#"
              className="w-[34px] rounded-full flex justify-center h-[34px] shadow-[0px_4px_14px_0px_rgba(0,_0,_0,_0.15)]"
            >
              <img src={facebook} width={13} height={13} alt="" />
            </a>
            <a
              href="#"
              className="w-[34px] rounded-full flex justify-center h-[34px] shadow-[0px_4px_14px_0px_rgba(0,_0,_0,_0.15)]"
            >
              <img src={instagram} width={13} height={13} alt="" />
            </a>
            <a
              href="#"
              className="w-[34px] rounded-full flex justify-center h-[34px] shadow-[0px_4px_14px_0px_rgba(0,_0,_0,_0.15)]"
            >
              <img src={x} width={13} height={13} alt="" />
            </a>
            <a
              href="#"
              className="w-[34px] rounded-full flex justify-center h-[34px] shadow-[0px_4px_14px_0px_rgba(0,_0,_0,_0.15)]"
            >
              <img src={linkedin} width={13} height={13} alt="" />
            </a>
          </div>
        </div>
        <div className=" flex flex-col gap-12">
          <h3 className="font-medium text-base text-secondFadeGray ">Links</h3>
          <nav className="flex flex-col items-start gap-12 text-sm md:text-base font-medium">
            <NavLink to="#" className="hover:border-b-2 hover:border-b-black">
              Home
            </NavLink>
            <NavLink to="#" className="hover:border-b-2 hover:border-b-black">
              Shop
            </NavLink>
            <NavLink to="#" className="hover:border-b-2 hover:border-b-black">
              Aboult
            </NavLink>
            <NavLink to="#" className="hover:border-b-2 hover:border-b-black">
              Contact
            </NavLink>
          </nav>
        </div>
        <div className=" flex flex-col gap-12">
          <h3 className="font-medium text-base text-secondFadeGray ">Help</h3>
          <nav className="flex flex-col items-start gap-12 text-sm md:text-base font-medium">
            <NavLink to="#" className="hover:border-b-2 hover:border-b-black">
              Payment Options
            </NavLink>
            <NavLink to="#" className="hover:border-b-2 hover:border-b-black">
              Returns
            </NavLink>
            <NavLink to="#" className="hover:border-b-2 hover:border-b-black">
              Privacy Policies
            </NavLink>
          </nav>
        </div>
        <div className=" flex flex-col gap-12">
          <h3 className="font-medium text-base text-secondFadeGray ">
            Newsletter
          </h3>
          <div className="">
            <div className="flex w-full max-w-sm items-center space-x-3">
              <Input
                type="email"
                placeholder="Enter Your Email Address"
                variant={"outline"}
                className="text-black text-base dark:text-white pr-3 outline-none border-b-2 border-transparent focus:border-black focus:ring-0"
              />
              <Button type="submit" size={"none"} variant="link">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[2px] border-borderGray m-auto max-w-[1240.04px] w-full">
        <div className="pt-12">
          <p className="text-base font-normal">
            2025 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
}
