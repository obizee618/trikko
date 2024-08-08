import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoCloseOutline, IoWalletOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {bag_brown } from "../assets/images";
import { changeInCart, removeFromCart } from "../features/reducers/cartSlice";

export default function Cart() {
  const cartContents = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <main className="relative before:absolute before:h-60 before:w-2/3 before:bg-primary before:-top-32 before:-right-72 before:-rotate-45 before:rounded-full py-20 min-h-[70vh]">
      <section className="container mx-auto">
        <div className="bg-white shad rounded-md p-4 max-w-screen-md mx-auto relative">
          <div className="flex item-center gap-4 justify-between">
            <h3 className="text-2xl md:text-4xl font-semibold text-primary">
              Trikko <span className="text-secondary">Cart</span>
            </h3>
            <div className="h-8 w-8 text-secondary hover:text-dark cursor-pointer flex justify-center items-center text-lg relative md:scale-125 -translate-x-1">
              <HiOutlineShoppingBag />
              <div className="absolute h-4 w-4 grid place-items-center text-white bg-secondary rounded-full -top-0.5 -right-0.5 text-xs">
                {cartContents.length}
              </div>
            </div>
          </div>
          <div className="flex flex-col py-4 divide-y divide-slate-200">
            {
            cartContents.map((el, i) => (
              <aside key={el.id} className="p-2 flex item-center gap-2 justify-between relative">
                <button onClick={() => dispatch(removeFromCart(i))} className="h-5 w-5 text-lg grid place-items-center bg-slate-100 text-secondary cusor-pointer absolute -top-2 -right-1 rounded-full">
                  <IoCloseOutline />
                </button>
                <div className="flex gap-2 item-center w-max">
                  <img src={el.image} alt="" className="h-12 w-12 md:w-16 md:h-16 rounded-object-cover flex-shrink-0" />
                  <div className="flex flex-col text-secondary">
                    <h4 className="text-lg md:text-xlfont-semibold">
                      {el.productname}
                    </h4>
                    <p className="text-sm md:text-base opacity-70 font-medium">
                      &#8358;{el.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-sm md:text-base opacity-70 flex-1 font-medium text-center">&#8358;{( el.qty * el.price).toLocaleString()}</p>
                <div className="border border-slate-200 overflow-hideen rounded-md w-10 h-8">
                  <input onChange={e => dispatch(changeInCart({id: el.id, qty: e.target.value}))}
                    type="number"
                    min={1}
                    value={el.qty}
                    className="bg-transparent w-16 px-2 outline-none pt-0.5 pl-2.5 text-sm md:text-base"
                  />
                </div>
              </aside>
            ))}
          </div>
          <div className="flex flex-col border-t border-secondary/20 border-solid divide-y divide-slate-200 text-secondary py-2">
            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
              <p className="opacity-60">Subtotal:</p>
              <p className="font-semibold">&#8358;{cartContents.reduce((total, el) => el.price * el.qty + total, 0).toLocaleString()}</p>
            </div>
            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
              <p className="opacity-60">Discount Applied:</p>
              <p className="font-semibold text-primary">(&#8358;2,000)</p>
            </div>
            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
              <p className="opacity-60">Electricity VAT:</p>
              <p className="font-semibold">0</p>
            </div>
            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
              <p className="opacity-60">Grand Total:</p>
              <p className="text-base md:text-lg font-bold">&#8358;{(cartContents.reduce((total, el) => el.price * el.qty + total, 0) - 2000).toLocaleString()}</p>
            </div>
            <button className='bg-secondary hover:bg-primary text-white text-base md:text-lg rounded-md flex justify-center items-center gap-2 mt-2 p-2 '><IoWalletOutline /> Proceed to Checkout</button>
            <p className="opacity-60 text-xs text-center pt-1">100% Secure with MasterCard, Paystack and Flutter Technology</p>
          </div>
        </div>
      </section>
    </main>
  )
}
