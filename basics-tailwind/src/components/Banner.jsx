import banner from "../assets/banner.png";
const Banner = () => {
  return (
    <div className=" flex-col lg:flex-row flex  items-center  justify-center  gradient mx-8 my-4 rounded-xl rounded-br-[100px] h-4/5 px-5 py-8">
      <div className="mx-8 my-4">
        <div>
          <p className=" text-4xl lg:text-8xl leading-[50px] lg:leading-[110px] font-bold text-white">Develop your skills without diligence</p>
        </div>
        <div className="my-10 w-2/3"> 
          <p className="text-2xl leading-[40px] font-medium text-white">
            A good example of a paragraph contains a topic sentence, details and
            a conclusion. There are many different kinds of animals that live in
            China.
          </p>
        </div>
        <div className="space-y-4 lg:space-x-6 md:space-x-4">
            <button className="bg-secondary px-4 py-2 text-2xl font-medium text-white rounded-sm transition-all duration-300 hover:text-primary hover:bg-white hover:rounded-lg">Get Started</button>
            <button className="bg-secondary px-4 py-2 text-2xl font-medium text-white rounded-sm mr-6 transition-all duration-300 hover:text-primary hover:bg-white hover:rounded-lg">Discount</button>
        </div>
      </div>
      <div className="mx-8 my-4">
        <img src={banner} alt="" className="lg:w-[600px]" />
      </div>
    </div>
  );
};

export default Banner;
