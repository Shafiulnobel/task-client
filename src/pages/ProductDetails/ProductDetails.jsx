import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import useCart from '../../hooks/useCart';
import { FaCartArrowDown } from "react-icons/fa";
const ProductDetails = () => {
    const{user} = useContext(AuthContext)
    const { productId } = useParams();
    const [details, setDetails] = useState([])
    const [singleProduct, setSingleProduct] = useState({});
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [, refetch] = useCart()
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    useEffect(() => {
        const found = details.find(detail => detail.id === parseInt(productId));
        setSingleProduct(found)
    }, [details])

    const addToCart = async () => {
        try {
            const response = await fetch('https://task-server-ochre.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: singleProduct.id.toString(),
                    email:user.email,
                    title: singleProduct.title,
                    img: singleProduct.img,
                    selectedColor,
                    selectedSize,
                }),
            })

            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added to the cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    refetch();
                }
            })

        } catch (error) {
            console.error('Error adding item to cart:', error);
            alert('An error occurred while adding the item to the cart.');
        }
    };

    return (
        <div class=" py-24">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row -mx-4">
                    <div class="md:flex-1 crd px-4">
                        <div class="image-container h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img class="w-full h-full object-cover crd-image" src={singleProduct?.img} alt="Product Image" />
                            <div class="crd-buttons">
                                <button onClick={addToCart} class="btn btn-neutral rounded-none w-full">Add to Cart <FaCartArrowDown /></button>
                            </div>
                        </div>
                       
                      
                        
                    </div>
                    <div class="md:flex-1 px-4">
                        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2 light-font">{singleProduct?.title}</h2>

                        <div class="mb-4">
                            <span class="font-bold text-gray-700 dark:text-gray-300 light-font">Select Color:</span>
                            <div class="flex items-center mt-5">
                                <button
                                    className={`w-6 h-6 rounded-full mr-7 ${selectedColor === 'red' ? 'border-2 border-black-500 rounded-full' : ''}`}
                                    onClick={() => setSelectedColor('red')}
                                >
                                    <input class="hidden" type="radio" id="ColorRed" name="color" />
                                    <label class="bg-red-500 dark:bg-red-700 px-5 py-2.5 rounded-full" for="ColorRed"></label>
                                </button>
                                <button className={`w-6 h-6 rounded-full mr-7 ${selectedColor === 'blue' ? 'border-2 border-black-500 rounded-full' : ''}`}
                                    onClick={() => setSelectedColor('blue')}>
                                    <input class="hidden" type="radio" id="colorBlue" name="color" />
                                    <label class="bg-blue-500 dark:bg-blue-700 px-5 py-2.5 rounded-full" for="colorBlue"></label>
                                </button>
                                <button className={`w-6 h-6 rounded-full mr-7 ${selectedColor === 'yellow' ? 'border-2 border-black-500 rounded-full' : ''}`}
                                    onClick={() => setSelectedColor('yellow')}>
                                    <input class="hidden" type="radio" id="colorYellow" name="color" />
                                    <label class="bg-yellow-500 dark:bg-yellow-700 px-5 py-2.5 rounded-full" for="colorYellow"></label>
                                </button>
                            </div>
                        </div>
                        <div class="mb-4">
                            <span class="font-bold text-gray-700 dark:text-gray-300 light-font">Select Size:</span>
                            <div class="flex items-center mt-5">
                                <button className={`w-6 h-6 rounded-full mr-9 light-font ${selectedSize === 'S' ? 'border-2 border-black-500 rounded-full' : ''}`}
                                    onClick={() => setSelectedSize('S')}>
                                    <input class="hidden" type="radio" id="SizeS" name="size" />
                                    <label class="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-full" for="SizeS">S</label>
                                </button>
                                <button className={`w-6 h-6 rounded-full mr-9 light-font ${selectedSize === 'M' ? 'border-2 border-black-500 rounded-full' : ''}`}
                                    onClick={() => setSelectedSize('M')}>
                                    <input class="hidden" type="radio" id="SizeM" name="size" />
                                    <label class="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-full" for="SizeM">M</label>
                                </button>
                                <button className={`w-6 h-6 rounded-full mr-9 light-font ${selectedSize === 'L' ? 'border-2 border-black-500 rounded-full' : ''}`}
                                    onClick={() => setSelectedSize('L')}>
                                    <input class="hidden" type="radio" id="SizeL" name="size" />
                                    <label class="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-full" for="SizeL">L</label>
                                </button>
                                <button className={`w-6 h-6 rounded-full mr-9 light-font ${selectedSize === 'XL' ? 'border-2 border-black-500 rounded-full' : ''}`}
                                    onClick={() => setSelectedSize('XL')}>
                                    <input class="hidden" type="radio" id="SizeXL" name="size" />
                                    <label class="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-full" for="SizeXL">XL</label>
                                </button>
                                <button className={`w-6 h-6 rounded-full mr-9 light-font ${selectedSize === 'XXL' ? 'border-2 border-black-500 rounded-full' : ''}`}
                                    onClick={() => setSelectedSize('XXL')}>
                                    <input class="hidden" type="radio" id="SizeXXL" name="size" />
                                    <label class="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-full" for="SizeXXL">XXL</label>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;