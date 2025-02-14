const ImagesSection = () => {
  return (
    <div className="flex mt-[140px] mx-auto mb-[50px] relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[-40px]">
        <p className="text-xl font-semibold text-[#616161] text-center">
          Share your setup with
        </p>
        <h2 className="font-bold text-[40px]">#FuniroFurniture</h2>
      </div>
      <div className="">
        <div className="flex gap-4 items-end">
          <img
            src="https://imagesrojectsren999.s3.us-east-2.amazonaws.com/ItemImgs/prateleira.png"
            alt=""
            className="h-[382px]"
          />
          <img
            src="https://imagesrojectsren999.s3.us-east-2.amazonaws.com/ItemImgs/notebook.png"
            alt=""
            className=" h-[312px]"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <img
            src="https://imagesrojectsren999.s3.us-east-2.amazonaws.com/ItemImgs/oldchair.png"
            alt=""
          />
          <img
            src="https://imagesrojectsren999.s3.us-east-2.amazonaws.com/ItemImgs/vaso.png"
            alt=""
            className="h-[242px]"
          />
        </div>
      </div>
      <img
        src="https://imagesrojectsren999.s3.us-east-2.amazonaws.com/ItemImgs/tablenChairs2.png"
        alt=""
        className="h-[392px] mx-4 my-auto"
      />
      <div>
        <div className="flex gap-4 items-end">
          <img
            src="https://imagesrojectsren999.s3.us-east-2.amazonaws.com/ItemImgs/bed.png"
            alt=""
            className="h-[348px]"
          />
          <img
            src="https://imagesrojectsren999.s3.us-east-2.amazonaws.com/ItemImgs/TableAndChairs.png"
            alt=""
            className="h-[433px]"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <img
            src="https://imagesrojectsren999.s3.us-east-2.amazonaws.com/ItemImgs/portrait.png"
            alt=""
            className="h-[242px]"
          />
          <img
            src="https://imagesrojectsren999.s3.us-east-2.amazonaws.com/ItemImgs/shelf.png"
            alt=""
            className="h-[196px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
