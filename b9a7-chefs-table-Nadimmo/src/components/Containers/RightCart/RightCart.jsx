/* eslint-disable react/jsx-key */

/* eslint-disable react/prop-types */
const RightCart = ({addCart,hadlerRemoveFromCart}) => {
    // console.log(removeCart)
    // console.log(hadlerRemoveCart)
    return (
        <div>
            <div className="grid grid-cols-4">
                    <p className="text-[12px] w-[50%]">{addCart.recipe_name}</p>
                    <p className="text-[12px] w-[100%] ml-2">{addCart.preparing_time}</p>
                    <p className="text-[12px] w-[80%]">{addCart.calories}</p>
                    <button className="btn bg-[#0BE58A]" onClick={()=> hadlerRemoveFromCart(addCart.recipe_id)}>Preparing</button>
            </div>
        </div>
    );
};

export default RightCart;