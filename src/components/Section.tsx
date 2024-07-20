import image from "../../public/images/8081.jpg"

const Section = () => {
  return (
    <>
    <div className="md:flex mt-12 container md:justify-evenly space-y-14 items-center bg-[#e1e1e1] p-12">
        <div className="flex flex-col justify-center text-center items-center md:mt-12 md:w-[25%]">
            <div className="w-12"><img className="w-full rounded-full" src={image} alt="" /></div>
            <div className="text-xl font-bold py-4">
            THE #1 PHONE CASE BRAND
            </div>
            <div className="text-center font-semibold">
            The trending phone case brand that everyone is talking about.
            </div>
        </div>

        <div className="flex flex-col justify-center items-center md:w-[25%]">
            <div className="w-12"><img className="w-full rounded-full" src={image} alt="" /></div>
            <div className="text-xl font-bold py-4">
            FAST SHIPPING
            </div>
            <div className="text-center font-semibold">
            We offer fast and competitively priced global shipping.
            </div>
        </div>

        <div className="flex flex-col justify-center items-center md:w-[25%]">
            <div className="w-12"><img className="w-full rounded-full" src={image} alt="" /></div>
            <div className="text-xl font-bold py-4">
            CUSTOMER SERVICE
            </div>
            <div className="text-center font-semibold">
            We are available from monday to friday to answer your questions.
            </div>
        </div>
    </div>
    </>
  )
}

export default Section