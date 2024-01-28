import product from "../assets/Product.png"
const Product = () => {
  return (
    <div className=" flex-col lg:flex-row flex  items-center  justify-center   mx-8 my-4  h-4/5  py-8">
        <div className=" my-4">
            <img src={product} alt="product" className="w-[400px] md:w-[600px] lg:w-[800px]" />
        </div>
        <div className=" my-4 space-y-6">
            <p className="text-5xl font-bold text-primary">We have been improving our product <span className="text-secondary">for many years.</span> </p>
            <p className="text-tertiary">A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.</p>
            <button className="bg-secondary px-4 py-2 text-2xl font-medium text-white rounded-sm transition-all duration-300 hover:text-primary hover:bg-white hover:rounded-lg">Get Started</button>

        </div>
    </div>
  )
}

export default Product