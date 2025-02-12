import gpsIcon from "@/assets/gpsIcon.svg";
import phoneIcon from "@/assets/phoneIcon.svg";
import clockIcon from "@/assets/clockIcon.svg";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <section className="w-full min-h-[1144px] pt-24 flex flex-col items-center gap-20 h-full ">
      <div className="flex flex-col  items-center gap-2">
        <h1 className="font-semibold text-4xl ">Get In Touch With Us</h1>
        <p className="font-normal max-w-[644px] text-center text-base text-secondFadeGray">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="flex w-full justify-center gap-20 ">
        <div className="flex flex-col gap-11 h-[537px] w-[393px] pt-14 ">
          <div className="flex  items-start gap-8 justify-center">
            <img src={gpsIcon} className="" alt="" />
            <div className="">
              <p className="font-medium text-2xl">Address</p>
              <p className="w-[212px] font-normal text-base">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex  items-start gap-8 justify-center">
            <img src={phoneIcon} className="" alt="" />
            <div className="">
              <p className="font-medium text-2xl">Address</p>
              <p className="w-[212px] font-normal text-base">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>
          </div>{" "}
          <div className="flex  items-start gap-8 justify-center">
            <img src={clockIcon} className="" alt="" />
            <div className="">
              <p className="font-medium text-2xl">Address</p>
              <p className="w-[212px] font-normal text-base">
                Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[635px] w-full  h-[923px] pt-14 px-14">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
