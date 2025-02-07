import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import seta from "@/assets/seta.svg";
export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://furniroimages.s3.us-east-2.amazonaws.com/slider1.png",
    "https://furniroimages.s3.us-east-2.amazonaws.com/slider2.png",
    "https://furniroimages.s3.us-east-2.amazonaws.com/slider3.png",
    "https://furniroimages.s3.us-east-2.amazonaws.com/slider2.png",
  ];

  const handleBeforeChange = (nextSlide: number) => {
    setActiveIndex(nextSlide);
  };

  return (
    <section>
      <div className="h-[582px] max-w-[931px] w-full flex relative">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container"
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 2.25,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2.25,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 2.25,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          slidesToSlide={1}
          swipeable
          beforeChange={handleBeforeChange}
          customTransition="transform 0.5s ease-in-out"
        >
          {images.map((src, index) => {
            const realIndex = activeIndex % images.length;
            return (
              <div key={index} className="p-0 m-0 flex">
                <img
                  src={src}
                  key={index}
                  className={`transition-all duration-500 mx-auto relative ${
                    realIndex === index ? "scale-110" : "scale-90"
                  }`}
                  style={{
                    display: "block",
                    height: "582px",
                    width: "404px",
                  }}
                />
                {realIndex === index ? (
                  <div className="absolute bottom-6 left-6">
                    <div className="flex">
                      <div className="bg-white w-[217px] h-[130px] flex flex-col items-center justify-center gap-2">
                        <div>
                          <div className="font-medium text-base text-fadeGray2 flex items-center gap-2">
                            01
                            <div className="border-b-2 w-[27px]"></div>
                            Bed Room
                          </div>
                          <h3 className="text-[28px] font-semibold text-fadeBlack">
                            Inner Peace
                          </h3>
                        </div>
                      </div>
                      <button className="bg-primary h-[48px] w-[48px] self-end flex items-center justify-center">
                        <img src={seta} alt="setinha direita" />
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
