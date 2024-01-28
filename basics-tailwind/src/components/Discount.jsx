import discount from "../assets/discount.png";
const Discount = () => {
  return (
    <div className=" flex-col lg:flex-row flex  items-center  justify-center  gradient mx-8 my-4 rounded-xl rounded-br-[100px] h-4/5 px-5 py-8">
        <div className="mx-8 my-4 space-y-4">
            <p className="text-6xl text-white font-bold">Each student an share their discount code for friends</p>
            <p className="text-2xl text-white font-semibold">A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”</p>
            <button className="bg-secondary px-4 py-2 text-2xl font-medium text-white rounded-lg transition-all duration-300 hover:text-primary hover:bg-white ">I have a code</button>
        </div>
        <div className="mx-8 my-4">
            <img src={discount} alt="" />
        </div>
    </div>
  )
}

export default Discount