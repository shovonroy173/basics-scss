import logo2 from "../assets/logo2.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import ln from "../assets/ln.png";
import twt from "../assets/twt.png";
const Footer = () => {
  return (
    <div className="flex flex-col  bg-primary   h-4/5 px-8 py-10 mt-14 ">
      <div className="flex gap-10  ">
        <div className="w-1/2">
            <div className="flex items-center">
          <img src={logo2} alt="logo"  />
          <span className="text-4xl text-white font-bold ml-7">XYZ</span>
          </div>
          <p className="text-md text-white mt-5">A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence.</p>
          <div className="mt-10 mb-10">
          <div className="w-[400px] h-[50px] bg-tertiary flex justify-between
           rounded-full "> <p className=" ml-2 text-center font-medium">Your email</p>
            <div className="w-[150px] h-[50px] bg-secondary rounded-full text-center text-white font-semibold">Subscribe</div>
          </div>
          </div>
        </div>
        <div className="space-y-3 w-1/3">
          <p className="text-xl text-white font-medium mb-5">Platform</p>
          <p className="text-sm text-white font-medium">Overview</p>
          <p className="text-sm text-white font-medium">Overview</p>
          <p className="text-sm text-white font-medium">Overview</p>
          <p className="text-sm text-white font-medium">Overview</p>
          <p className="text-sm text-white font-medium">Overview</p>
        </div>
        <div className="space-y-3 w-1/3">
          <p className="text-xl text-white font-medium mb-5">Platform</p>
          <p className="text-sm text-white font-medium">Overview</p>
          <p className="text-sm text-white font-medium">Overview</p>
          <p className="text-sm text-white font-medium">Overview</p>
          <p className="text-sm text-white font-medium">Overview</p>
          <p className="text-sm text-white font-medium">Overview</p>
        </div>
        <div className="space-y-3 w-1/3">
          <p className="text-xl text-white font-medium mb-5">Platform</p>
          <p className="text-sm text-white font-medium">Overview</p>
          <p className="text-sm text-white font-medium">Overview</p>
          <p className="text-sm text-white font-medium">Overview</p>
          <p className="text-sm text-white font-medium">Overview</p>
          <p className="text-sm text-white font-medium">Overview</p>
        </div>
      </div>
      <hr className="text-tertiary
      my-4"/>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white">@ XYZ 20XX --- 20XX. All rights reserved.</p>
        </div>
        <div className="flex gap-3 ">
          <img src={fb} alt="" />
          <img src={ig} alt="" />
          <img src={ln} alt="" />
          <img src={twt} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
