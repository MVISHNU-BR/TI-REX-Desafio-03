export default function ImageGrid() {
  return (
    <div className="  flex gap-8">
      <div className="flex flex-col gap-8">
        <div className="w-[80px] h-[80px] rounded-xl  bg-red-500">
          <img
            className="bg-cover w-full h-full"
            src="https://furniroimages.s3.us-east-2.amazonaws.com/image+1.png"
            alt="Sofa Asgard Image"
          />
        </div>
        <div className="w-[80px] h-[80px] rounded-xl  bg-red-500">
          <img
            className="bg-cover w-full h-full"
            src="https://furniroimages.s3.us-east-2.amazonaws.com/image+1.png"
            alt="Sofa Asgard Image"
          />
        </div>
        <div className="w-[80px] h-[80px] rounded-xl  bg-red-500">
          <img
            className="bg-cover w-full h-full"
            src="https://furniroimages.s3.us-east-2.amazonaws.com/image+1.png"
            alt="Sofa Asgard Image"
          />
        </div>
        <div className="w-[80px] h-[80px] rounded-xl  bg-red-500">
          <img
            className="bg-cover w-full h-full"
            src="https://furniroimages.s3.us-east-2.amazonaws.com/image+1.png"
            alt="Sofa Asgard Image"
          />
        </div>
      </div>
      <div className="w-[423px] h-[500px]  rounded-xl">
        <img
          className="bg-cover w-full h-full"
          src="https://furniroimages.s3.us-east-2.amazonaws.com/image+1.png"
          alt="Sofa Asgard Image"
        />
      </div>
    </div>
  );
}
