import image from "../../public/images/pic1.jpg"


const Header = () => {
  return (
    <>
    <div className=''>
        <div className="container flex justify-center">
        <div className="md:flex mx-12 md:w-4/5">
        <div className="relative lg:max-w-xl md:w-[94%] mx-auto mt-20  rounded-md overflow-hidden">
    <img className="w-full object-cover  rounded-md hover:scale-x-125 transition duration-1000 ease-in-out cursor-pointer  " src={image} alt="Random image" />
    
    <div className="relative mt-[-30%] flex items-center justify-center mb-32">
        <h2 className="text-white text-3xl font-bold uppercase  ">Apple</h2>
    </div>
</div>

<div className="relative lg:max-w-xl md:w-[94%] mx-auto md:mt-20  rounded-md overflow-hidden">
    <img className="w-full object-cover  rounded-md hover:scale-x-125 transition duration-1000 ease-in-out cursor-pointer  " src={image} alt="Random image" />
    
    <div className="relative mt-[-30%] flex items-center justify-center mb-32">
        <h2 className="text-white text-3xl font-bold uppercase  ">Apple</h2>
    </div>
</div>
        </div>
        </div>
      
      <div className="relative md:h-60 lg:w-[78%] w-[84%] mx-auto md:mt-10  rounded-md overflow-hidden ">
    <img className="h-full w-full rounded-md hover:scale-x-125 transition duration-1000 ease-in-out cursor-pointer " src={image} alt="Random image" />
    
    <div className="flex justify-center mt-[-30%]
    mb-32 md:mt-[-10%]">
        <h2 className="text-white text-3xl font-bold uppercase z-50 cursor-pointer ">Accessories</h2>
    </div>
</div>

    </div>
    </>
  )
}

export default Header