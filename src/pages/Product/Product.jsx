import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite } from "react-icons/md";
import './Product.css'
import useTitle from '../../hooks/useTitle';
const Product = () => {
    useTitle('Products')
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container mx-auto mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product =>
                        <div className="card ">
                            <div className='crd'>
                                <div className='image-container'>
                                    <figure><img src={product.img} className='crd-image' alt="Shoes" /></figure>
                                    <div className="crd-buttons">
                                        <Link to={`/${product.id}`}> <button className="btn btn-neutral rounded-none w-full light-font">Quick Look <MdFavorite  /></button></Link>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title light-font ">{product.title}</h2>
                                <div class="mb-4">
                                    <span class="font-bold dark:text-gray-300 light-font">Available Color:</span>
                                    <div class="flex items-center mt-5">
                                        <button class="w-6 h-6 rounded-full mr-7">
                                            <input class="hidden" type="radio"  />
                                            <label class="bg-red-500 dark:bg-red-700 px-5 py-2.5 rounded-full" for="Login22"></label>
                                        </button>
                                        <button class="w-6 h-6 rounded-full mr-7">
                                            <input class="hidden" type="radio" />
                                            <label class="bg-blue-500 dark:bg-blue-700 px-5 py-2.5 rounded-full" for="Login23"></label>
                                        </button>
                                        <button class="w-6 h-6 rounded-full">
                                            <input class="hidden" type="radio" />
                                            <label class="bg-yellow-500 dark:bg-yellow-700 px-5 py-2.5 rounded-full" for="Login24"></label>
                                        </button>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <span class="font-bold text-gray-700 dark:text-gray-300 light-font">Available Size:</span>
                                    <div class="flex items-center mt-2">
                                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 light-font">S</button>
                                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 light-font">M</button>
                                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 light-font">L</button>
                                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 light-font">XL</button>
                                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 light-font">XXL</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Product;