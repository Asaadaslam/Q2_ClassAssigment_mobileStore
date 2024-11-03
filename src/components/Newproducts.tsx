import React from 'react'
import ProductCard from './ProductCard';

const productsData = [
{
    img: "/mobile.jfif",
    title: "Mobiles",
    desc: "Latest Mobile Phones",
    rating: 1,
    price: "Starting from $499.00",

},
{
    img: "/swatch.jfif",
    title: "Smart watches",
    desc: "Handsome, luxe design",
    rating: 2,
    price: "Starting from $199.00",
},
{
    img: "/earpods.jfif",
    title: "Ear Pods",
    desc: "Unique audio features",
    rating: 3,
    price: "Starting from $49.00",
},
{
    img: "/headphone.jfif",
    title: "Head Phones",
    desc: "Rich, well-balanced sound",
    rating: 4,
    price: "Starting from $75.00",
},
{
    img: "/accessories.jfif",
    title: "Mobile Accessories",
    desc: "Ridiculously powerful charging technology",
    rating: 5,
    price: "Starting from $20.00",
},
];


const Newproducts = () => {
  return (
    <div><div className='container pt-16'>
        <h2 className='ml-[565px] font-medium text-2xl pb-4'>New Products</h2>
        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'></div>
        {productsData.map((item, index) => (
        <ProductCard  
        key= {index}
        img = {item.img}
        title = {item.title}
        desc = {item.desc}
        rating = {item.rating}
        price = {item.price} />
        )
    )}
        
        </div></div>
  )
}

export default Newproducts
