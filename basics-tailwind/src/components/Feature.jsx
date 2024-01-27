import feature from "../assets/feature.png";
const Feature = () => {
  return (
    <div className=" flex-col lg:flex-row flex  items-center justify-between mx-8 lg:mx-8 my-12 lg:my-4  h-[80vh]">
      <div className="lg:w-1/4" >
        <p className="text-4xl font-bold text-primary">Why we are better than others</p>
        <p className="text-md font-medium text-tertiary">
          A simple paragraph is comprised of three major components. The first
          sentence, which is often a declarative sentence, is called the “topic
          sentence.”
        </p>
      </div>

      <div className="flex-col md:flex-row lg:flex-row flex items-center justify-center flex-wrap gap-10 py-0 lg:py-6 md:py-6 sm:py-6 ">
        <div className="flex flex-col items-center justify-center h-80 w-96 md:w-80 lg:w-64 px-5 py-8 rounded-xl boxShadow hover:-translate-y-4 duration-300">
          <img src={feature} alt="" />
          <p className=" text-primary font-semibold text-3xl text-wrap text-start">Conventient study schedule</p>
        </div>
        <div className="flex flex-col items-center justify-center h-80 w-96 md:w-80 lg:w-64 px-5 py-8 rounded-xl boxShadow hover:-translate-y-4 duration-300 mt-0 lg:mt-24">
          <img src={feature} alt=""  />
          <p className=" text-primary font-semibold text-3xl text-wrap text-start">Conventient study schedule</p>
        </div>
        <div className="flex flex-col items-center justify-center h-80 w-96 md:w-80 lg:w-64 px-5 py-8 rounded-xl boxShadow hover:-translate-y-4 duration-300">
          <img src={feature} alt="" />
          <p className=" text-primary font-semibold text-3xl text-wrap text-start">Conventient study schedule</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
