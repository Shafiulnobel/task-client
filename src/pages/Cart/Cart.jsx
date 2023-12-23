import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
const Cart = () => {
    const[cart] = useCart();
    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                {/* <h3 className="font-bold text-lg">{cart.length} Items</h3> */}
                <div class="flex flex-col md:flex-row shadow-md my-10">
                    <div class="w-full md:w-3/4 bg-white px-4 md:px-10 py-10">
                        <div class="flex justify-between border-b pb-8">
                            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 class="font-semibold text-2xl">{cart.length} Items</h2>
                        </div>
                        <div class="flex mt-10 mb-5">
                            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Image</h3>
                            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Title</h3>
                            
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Color</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Size</h3>
                        </div>
                        {
                            cart.map(crt => <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div class="flex ">
                                    <div class="w-20">
                                        <img class="" src={crt.img} alt="" />
                                    </div>
                                    <div class="flex flex-col justify-center ml-4">
                                        <span class="font-bold text-sm ">{crt.title}</span>
                                    </div>
                                </div>
                                <span class="text-center w-1/5 font-semibold text-sm">{crt.selectedColor}</span>
                                <span class="text-center w-1/5 font-semibold text-sm">{crt.selectedSize}</span>
                            </div>
                            )
                        }


                    </div>

             

                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">X</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Cart;