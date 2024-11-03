import React from 'react'
import Image from 'next/image';
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";


interface propsType {
  img : string;
  title : string;
  desc : string;
  rating : number;
  price : string;

}

const ProductCard : React.FC<propsType> = ({
  img, 
  title, 
  desc, 
  rating, 
  price,

}) => {
  const generateRating = (rating : number) => {
    switch (rating ) {
      case 1 :
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

        case 2 :
          return (
            <div className='flex gap-1 text-[20px] text-[#FF9529]'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          );

          case 3 :
            return (
              <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            );

            case 4 :
              return (
                <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              );

              case 5 :
                return (
                  <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                );
        default: 
        return null ;
    }
  } ;
  return (
    <div className='ml-[500px] mb-4 px-4 border border-gray-200 rounded-xl max-w-[300px] flex flex-col'>
    <div>
    <Image
    className='w-full h-auto'
    src= {img}
    width= {200}
    height= {300}
    alt={title}
    />
    </div>
    <div className='space-y-2 py-2'>
      <h2 className='text-accent font-medium uppercase'>{title}</h2>
      <p className='text-gray-500 max-w-[150px]'>{desc}</p>
      <div>{generateRating(rating)}</div>
      <div className='font-bold flex-gap-4'>
        {price}
      </div>
    </div>
    </div>
  );
};

export default ProductCard