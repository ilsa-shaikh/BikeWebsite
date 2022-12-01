import App from './App';
// import Link from './Link';
import Header from './header';
import { BrowserRouter} from 'react-router-dom';
import {Route ,Routes} from 'react-router-dom';
import Cart from './shoppingcart';
import { useState,useEffect } from 'react';
import Imgdata from "./Imgdata"
import Footer from "./footer"
import About from "./about"
import Contact from "./contact"
import Msg from './cartmsg';

const getitem =()=>{
  let list=localStorage.getItem('cartitem');
  
  if(list){
     return JSON.parse(localStorage.getItem('cartitem'));
  }else{
     return[];
  }
}


const R=()=>{
  const {productItem}=Imgdata;
    const[cart,setCart]=useState(getitem());
    const[msg,setMsg]=useState(false)
    

    useEffect(()=>{
      localStorage.setItem("cartitem",JSON.stringify(cart))
     },[cart])

    const handle =(productItem)=>{
       const productexit=cart.find((item)=>item.id===productItem.id)
      
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
      const productexit=cart.find((item)=>item.id===product.id)
       console.log(productexit.quantity)
      if(productexit.quantity===1){
        setCart(cart.filter((item)=>item.id !==product.id ))
        
       }
      
      else{
        setCart(cart.map((item)=>item.id===product.id ?
        {...productexit, quantity:productexit.quantity-1}:item
        ))
        }
      
    }


    
    const onclose=()=>{
      setMsg(false);
    }
    const clearcart=()=>{
        setCart([]);
        localStorage.removeItem("cartitem");
      
       
      
    }
    const clearitem=(product)=>{
      setCart(cart.filter((item)=>item.id !==product.id ))
      localStorage.clear("cartitem")
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