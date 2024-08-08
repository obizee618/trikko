import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { LuText } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header() {
  const cart = useSelector(state => state.cart)
  return (
    <header className='fixed z-50 top-0 left-0 text-secondary w-full bg-transparent backdrop-blur-sm'>
  <div className="container mx-auto flex justify-between p-4 gap-4 item-center">
     <Link to={"/"} className='flex w-max gap-2 items-center'>
              <LuText />
              <h1 className="text-xl md:text-2xl font-semibold">Trikko</h1>
        </Link>
      <div className="flex w-max gap-2 items-center">
              <div className="h-8 w-8 text-secondary hover:text-dark cursor-pointer flex justify-center items-center"><IoSearch /></div>
              <Link to={"/account"} className="h-8 w-8 text-secondary hover:text-dark cursor-pointer flex justify-center items-center"><FaRegUser /></Link>
              <Link to={"/cart"} className="h-8 w-8 text-secondary hover:text-dark cursor-pointer flex justify-center items-center text-lg relative">
              <HiOutlineShoppingBag /> 
              <div className="absolute h-4 w-4 grid place-items-center text-white bg-secondary rounded-full -top-0.5 -right-0.5 text-xs">{cart.length}</div>
              </Link>  
        </div>

</div>
    </header>
  )
}
