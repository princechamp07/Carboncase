import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Faq = () => {
  return (
   <>
   <div className=' flex justify-center w-full'>

   <div className="w-[90%] px-4 bg-white rounded-3xl ">

        <div className='flex my-14 justify-center font-bold text-black text-5xl italic'>FAQs</div>
      
      <div className=" rounded-xl mx-auto w-full max-w-2xl bg-gray-200">
        <Disclosure as="div" className="p-6 mx-10 border-b border-black" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-black font-bold  ">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 rounded-full bg-black group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel   transition
          className="origin-top transition duration-200 mt-2  text-black font-semibold ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
    
        <Disclosure as="div" className="p-6 mx-10 border-b border-black" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-black font-bold  ">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 rounded-full bg-black group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel transition
          className="origin-top transition duration-200 mt-2  text-black font-semibold ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" className="p-6 mx-10" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-black font-bold  ">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 rounded-full bg-black group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel transition
          className="origin-top transition duration-200 mt-2  text-black font-semibold ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
        
      </div>
      <div className='flex flex-col my-14 justify-center items-center font-bold text-black italic'>
      You can email us at support@carboncase.co where our customer service team will be happy to help you with whatever you need!
    <div className='text-gray-400'>
    Average answer time: 24h
    </div>

      </div>
    </div>
    </div>
   </>
  )
}

export default Faq