const ImagesSection = () => {
  return (
    <div className="flex flex-col items-center mt-[67px]mx-auto mb-[50px]">
      <div className="flex flex-col items-center gap-2">
        <p className="font-semibold text-fadeGray2 text-xl">
          Share your setup with
        </p>
        <h2 className="font-bold text-[40px]">#FuniroFurniture</h2>
      </div>
      <div className="">
        <img
          src="https://furniroimages.s3.us-east-2.amazonaws.com/sectionBanner.png"
          alt="section banner"
        />
      </div>
    </div>
  );
};

export default ImagesSection;
