/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Carts from './components/Containers/Carts'
import Header from './components/Header/Header'

function App() {
  const [addCarts, setAddCart] = useState([])
  // const [removeCarts, setRemoveCarts] = useState([])

  const hadlerAddToCart = (add) =>{
    // console.log('btn click')
    const newCart = [...addCarts, add]
    setAddCart(newCart)
  }

  const hadlerRemoveFromCart = (recipe_id)=>{
    const remainingCart = addCarts.filter(carts => carts.recipe_id!== recipe_id)
    setAddCart(remainingCart)
    if(remainingCart){
      alert("Already Exit")
    }
  }
  return (
    <div>
      <Header></Header>
      <Carts 
        key={addCarts.recipe_id}
        addCarts={addCarts} 

        hadlerRemoveFromCart = {hadlerRemoveFromCart}
        hadlerAddToCart = {hadlerAddToCart} 
        ></Carts>
    </div>
  )
}

export default App
