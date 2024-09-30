/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { CiTimer } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
const Cart = ({cart, hadlerAddToCart}) => {
    // console.log(cart)
    const {recipe_image,recipe_id,recipe_name,short_description,ingredients,preparing_time,calories} = cart;
    return (
        <div >
            <div className="border-2 rounded-2xl p-4">
                <div class="card w-[340px] h-[100%] bg-base-100 shadow-xl">
                <figure><img className="w-[100%] h-[100%]" src={recipe_image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{recipe_name}</h2>
                    <p className="text-[15px] opacity-[0.6]">{short_description}</p>
                    <hr />
                    <p className="text-xl font-bold">Ingredients: {ingredients.length}</p>
                    <ol className="list-disc opacity-[0.7] ml-6">
                        <li>{ingredients[0]}</li>
                        <li>{ingredients[1]}</li>
                        <li>{ingredients[2]}</li>
                    </ol>
                    <hr />
                    <div className="flex justify-between">
                        <p> <CiTimer /> {preparing_time} </p>
                        <p> <FaFire />{calories}</p>
                    </div>
                    <div class="card-actions justify-start mt-4">
                    <button onClick={ ()=>hadlerAddToCart(cart)} class="btn bg-[#0BE58A]">Went to Cook</button>
                    </div>
                </div>
                </div>
            </div> <br /><br />
    </div>
        
    );
};

export default Cart;