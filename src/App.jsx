
import './App.css'
import { useState } from 'react'
import Product from './Components/Product'
import ShopingCart from './Components/ShopingCart'

function App() {
  const [products,setProducts] = useState(
    [
      {name:"computer",price:2000},
      {name:"tv",price:1000},
      {name:"micro",price:500},
      {name:"toster",price:250},
      {name:"iphone",price:3000}
    ]
  )
  const [cart,setcart] = useState([])
  const [productsBougth,setProductsBougth] = useState([])

  function addToCart(name,price){
     let newItem = {name,price}
     setcart([...cart,newItem])
  }

  const sumProducts = cart.reduce((acc, current) => acc + current.price, 0);

  function purchaseItems(name,price) {;
    
    setProductsBougth([...cart,{name,price}]);
    setcart([])
    setProducts([])
  }
 


  return (
      <div className="container">
        <div  className="main-content">
          <h1 className="heading">sv shop</h1>
           {products.map((val)=><Product name = {val.name} price ={val.price} addToCart = {addToCart}/>)}
          </div>
          <div className='cart-list'>
            <h2>cart</h2>
           {cart.map((val)=><ShopingCart name = {val.name} price ={val.price} sumProducts = {sumProducts}/>)}
           <h4>total price : {sumProducts}</h4>
           <button onClick={purchaseItems}>Purchase Items</button>
        
           
        </div>
      </div>

      
     
  )
}

export default App
