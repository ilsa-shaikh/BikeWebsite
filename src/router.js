import App from './App';
// import Link from './Link';
import Header from './header';
import { BrowserRouter} from 'react-router-dom';
import {Route ,Routes} from 'react-router-dom';
import Cart from './shoppingcart';
import { useState } from 'react';
import Imgdata from "./Imgdata"
import Footer from "./footer"
import About from "./about"
import Contact from "./contact"
import Msg from './cartmsg';
// import {Route ,Routes} from 'react-router-dom';

const R=()=>{
  const {productItem}=Imgdata;
    const[cart,setCart]=useState([]);
    const[msg,setMsg]=useState(false)

    const handle =(productItem)=>{
      // console.log("click")
      const productexit=cart.find((item)=>item.id===productItem.id)
      // console.log()
      if(productexit){
        setCart(cart.map((item)=>item.id===productItem.id ?
        {...productexit, quantity:productexit.quantity+1}:item
        ))
        console.log(productItem.id)

       }
      
      else{
        setCart([...cart,{...productItem,quantity:1}])
        setMsg(true)
        setTimeout(() => {
          setMsg(false)}, 3000);
      
      }
      
    }
    
    const handleRemove =(product)=>{
      // console.log("click")
      const productexit=cart.find((item)=>item.id===product.id)
       console.log(productexit.quantity)
      if(productexit.quantity===1){
        setCart(cart.filter((item)=>item.id !==product.id ))
        
       }
      
      else{
        setCart(cart.map((item)=>item.id===product.id ?
        {...productexit, quantity:productexit.quantity-1}:item
        ))
        // setCart([...cart,{...product,quantity:1}])
        }
      
    }


    
    const onclose=()=>{
      setMsg(false);
    }
    const clearcart=()=>{
        setCart([]);
      
    }
    const clearitem=(product)=>{
      setCart(cart.filter((item)=>item.id !==product.id ))
      }
    
    return(
    <>
    <BrowserRouter>
   <Header cart={cart}/>
    {msg && <Msg onclick={onclose}/>}
    <Routes>
    <Route  exact path="/" 
    element={<App handle={handle} productItem={productItem} />}/>
    <Route  exact path="/link" 
    element={<Cart 
        cart={cart} 
        additem={handle} 
        removeitem={handleRemove} 
        clearitem={clearitem}
        clearcart={clearcart}
        />}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>

    </>
  
    )
}
export default R;