// import Joystick from '../assets/images/joystick.png'
// import { FaRegHeart } from "react-icons/fa";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
// import { CiStar } from "react-icons/ci";

// export default function productCard (Props){
//     return (
//         <div className="group border-2  flex gap-4 flex-col relative w-64 h-[320px]"><div className='bg-[#F5F5F5]'>
//             <div className='discount absolute top-2 left-2 bg-red-500 w-14 h-6 rounded center text-white text-xs'>{Props.postsale}</div><br/>
//             <FaRegHeart className='heart absolute top-4 right-2  rounded   text-xl'/>
//             <MdOutlineRemoveRedEye className='heart absolute top-14 right-2  rounded   text-xl'/>
//            <div className='center'> 
//             <img 
//            src={Props.postimage} 
//            alt='' 
//             className="m-auto group-hover:scale-110 transition-all duration-300"
//            />
//            </div>
//            </div>
//            <div>
//             <h3 className='font-medium text-lg py-2 group-hover:text-primary transition-all duration-300'>{Props.postname}</h3>{' '}
//             <p >
//             <span className='p-2 font-medium text-red-500'>{Props.now}</span>
//             <span className=' text-gray-500 line-through'>{Props.was}</span>
//             </p>
//             <div className='flex py-2'>
//             <CiStar />
//             <CiStar />
//             <CiStar />
//             <CiStar />
//             <CiStar />
//             <p className='text-gray-500 text-sm'>{Props.rating}</p>
//             </div>
//             </div> 
//             </div>
//     )
// }



import { TiHeartOutline } from "react-icons/ti";
import { FiEye } from "react-icons/fi";
import { PiStarFill } from "react-icons/pi";

export default function ProductCard(Props) {
  //   console.log(Props);

  return (
    <div className="w-[270px] min-h-[350px] my-4">
      <div className="h-[250px] bg-secondary relative p-3 rounded">
        <div className="flex justify-between">
          <div>
            {Props.cardDiscount ? (
              <p className="bg-primary rounded text-white text-xs absolute top-3 py-[5px] px-3">
                {Props.cardDiscount}
              </p>
            ) : Props.newItem ? (
              <p className="bg-[#00FF66] rounded text-white text-xs absolute top-3 py-[5px] px-3">
                {Props.newItem}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2 ">
            <TiHeartOutline className="card_icon" />
            <FiEye className="card_icon" />
          </div>
        </div>

        <img src={Props.cardImage} className="mx-auto -mt-8" alt="controller" />
      </div>
      <div className="flex flex-col gap-3">
        <p className="pt-3 font-medium text-base">{Props.cardName}</p>
        <p className="flex gap-3">
          <span className="text-primary font-medium">
            {Props.discountedRate}
          </span>
          <span className="font-medium text-gray-500 line-through">
            {Props.oldRate}
          </span>
        </p>
        <p className="flex text-[#FFAD33] gap-1">
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
          <span className="-my-[3px] pl-1 text-gray-500 font-semibold text-sm">
            ({Props.percent})
          </span>
        </p>
      </div>
    </div>
  );
}