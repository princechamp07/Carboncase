import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import  ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';


type Props={
  className:string,
  onClick:React.MouseEventHandler<HTMLDivElement>
}


const PrevBtn:React.FC<Props> = (props) =>{
const {className,onClick} = props;
return (
  <div className={className} onClick={onClick}>
    <ArrowBackIos style={{color:'black',fontSize:'30px',background:"gray",borderRadius:"100%",padding:"10px",marginTop:"-30px",marginLeft:"0px"}}/>
  </div>
)
}

const NextBtn:React.FC<Props> = (props) =>{
  const {className,onClick} = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{color:'black',fontSize:'30px',background:"gray",borderRadius:"100%",padding:"10px",marginTop:"-30px",marginLeft:"0px"}}/>
    </div>
  )
  }

const Cards = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextBtn className={""} onClick={function (): void {
      throw new Error("Function not implemented.");
    } } />,
    prevArrow: <PrevBtn className={""} onClick={function (): void {
      throw new Error("Function not implemented.");
    } } />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container md:mx-auto md:px-20  px-2 mt-12 mb-12 ">

    
    <div className="slider-container md:px-10  ">
      <Slider className="md:px-0 md:mx-0 px-4 mx-14" {...settings}>
        <div className="rounded-md  ">
          <div className="rounded-md mx-4 md:mx-0 bg-base-100  md:w-96">
  <figure>
    <img className="rounded-md w-full"
      src="https://images-static.nykaa.com/media/catalog/product/c/8/c8c4ea1MCover007-A12-Pink_1.jpg?tr=w-500"
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <div className="text-center ">
    <h2 className="font-bold text-lg">
      Emily W.
    </h2>
    <div className="">★★★★★</div>
    
    </div>
    <p className="font-semibold text-center">I wasn’t sure how it would look in person but I am more than pleased it looks so good!😍</p>
 
  </div>
</div>
        </div>
        <div className="rounded-md ">
          <div className="rounded-md mx-4 md:mx-0 bg-base-100 md:w-96">
  <figure>
    <img className="rounded-md"
      src="https://printbebo.in/wp-content/uploads/2022/10/46-Hey-Its-Me-Custom-Name-Phone-Case-For-Girls.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <div className="text-center ">
    <h2 className="font-bold  text-lg">
      Emily W.
    </h2>
    <div className="">★★★★★</div>
    
    </div>
    <p className="font-semibold text-center">I wasn’t sure how it would look in person but I am more than pleased it looks so good!😍</p>
 
  </div>
</div>
        </div>
        <div className="rounded-md ">
          <div className="rounded-md mx-4 md:mx-0 bg-base-100 md:w-96 ">
  <figure>
    <img className="rounded-md"
      src="https://thejuneshop.com/cdn/shop/files/12_4_4ffc2894-b371-497b-b697-dea52d4d740d_1080x.webp?v=1696002196"
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <div className="text-center ">
    <h2 className="font-bold  text-lg">
      Emily W.
    </h2>
    <div className="">★★★★★</div>
    
    </div>
    <p className="font-semibold text-center">I wasn’t sure how it would look in person but I am more than pleased it looks so good!😍</p>
 
  </div>
</div>
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default Cards