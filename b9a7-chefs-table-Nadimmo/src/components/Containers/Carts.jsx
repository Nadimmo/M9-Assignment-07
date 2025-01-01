/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart";
import RightCart from "./RightCart/RightCart";
const Carts = ({addCarts,hadlerAddToCart,hadlerRemoveFromCart}) => {
    // console.log(hadlerAddToCart)
    // console.log(removeCarts)
    const [carts, setCarts] = useState([])
    
    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    return (
        <div className="lg:mx-10 mt-5 mx-auto">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Our Recipes </h1>
                <p className="mt-4">At The Rustic Table, the menu celebrates the rich tapestry of flavors from around the world, <br /> with a focus on locally-sourced, seasonal ingredients. From hearty classics to innovative creations, <br /> each dish is crafted with care and passion by our team of talented chefs.</p>
            </div>
            {/* left card */}
            <div className="lg:flex justify-between mt-20">
                <div className="lg:grid grid-cols-2 gap-4">
                    {
                        carts.map(cart => <Cart key={carts.recipe_id} hadlerAddToCart = {hadlerAddToCart} cart = {cart} ></Cart>)
                    }
                </div>
                {/* right card */}
                <div className="lg:w-[320px] border-2 rounded-2xl p-4">
                    <div>
                        <h1 className="text-xl font-bold text-center">Went to Cook : {addCarts.length} </h1> <br />
                        <hr />
                        <div className="mt-4">
                            <div className="flex">
                                <p className="font-bold">Name</p>
                                <p className="font-bold ml-8" >Time</p>
                                <p className="font-bold ml-7" >Calories</p>
                            </div>
                            <div>
                                    {
                                        addCarts.map(addCart => <RightCart hadlerRemoveFromCart={hadlerRemoveFromCart} addCart = {addCart} ></RightCart> )
                                        
                                    }
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="mt-16">
                        <h1 className="text-xl font-bold text-center">Currently Cooking: </h1> <br />
                        <hr />
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <p className="font-bold">Name</p>
                                <p className="font-bold" >Time</p>
                                <p className="font-bold" >Calories</p>
                            </div>
                            <div>
                            <div>
                                    
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;