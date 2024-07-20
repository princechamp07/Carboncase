import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='bg-gray-300 mt-14'>
    <div className=' grid md:grid-cols-3 mx-20 py-14 text-black'>
        <div>
            <div className='text-4xl italic font-bold'>Subscribe for 10% off your next order!</div>
            <div className='mt-8'>
                <input className='border-2 border-slate-400 rounded-md font-semibold bg-transparent w-full px-4 py-4' type="Email" placeholder='E-mail' name="" id="" />
            </div>
        </div>
        <div className='md:mx-14 md:pl-14 space-y-4 md:py-0 py-4 font-semibold text-slate-600'>
            <div className='font-bold text-black'>Footer menu</div>
            <div>
            FAQs
            </div>
            <div>
            ABOUT US
            </div>
            <div>
            AFFILIATE
            </div>
            <div>
            CONTACT US
            </div>
            <div>
            RETURN AND REFUND POLICY
            </div>
            <div>
            PRIVACY POLICY
            </div>
            <div>
            TERMS OF SERVICE
            </div>
        </div>
        <div className='space-y-4 text-lg md:pr-14 text-slate-600 font-semibold'>
            <div>Our mission is to redefine your mobile experience with a diverse selection of premium carbon fiber products. We also surprise and delight with an array of unexpected carbon fiber creations. Continuously innovating, we introduce fresh designs regularly, ensuring every interaction with us elevates style and durability in your everyday life.</div>
            <div>
            CarbonCase is part of <span className='font-bold'>NinjaSpinner Oy</span> Kylävoudintie 1, 00640 Helsinki, Finland <br />
            Business ID: <span className='font-bold'>3387342-2 <br />
            Customer Service:</span> support@carboncase.co
            </div>
        </div>
    </div>
    <div className='flex justify-between mx-20'>
        <div className='space-y-4 py-14'>
            <div className='space-x-4'><InstagramIcon/>
            <YouTubeIcon/>
            </div>
            <div className='font-semibold'>© 2024, CarbonCase.</div>
        </div>
        <div className='py-14'>
            <select className='bg-transparent font-bold ' name="" id="">
                <option value="">India (INR ₹)</option>
            </select>
            
        </div>
    </div>
    </div>
  )
}

export default Footer