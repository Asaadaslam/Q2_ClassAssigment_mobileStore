import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
                <Link className='navbar__link  relative' href="#">HOME</Link>
                <Link className='navbar__link  relative' href="#">MOBILE</Link>
                <Link className='navbar__link  relative' href="#">EAR PODS</Link>
                <Link className='navbar__link  relative' href="#">SMART WATCHES</Link>
                <Link className='navbar__link  relative' href="#">HEAD PHONES</Link>
                <Link className='navbar__link  relative' href="#">ACCESORIES</Link>
                <Link className='navbar__link  relative' href="#">LATEST MODELS</Link>
                <Link className='navbar__link  relative' href="#">TOP SELLING</Link>
        
            </div>
        </div>
    </div>
  )
}

export default Navbar