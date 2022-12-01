

const Cart=({cart,removeitem,additem,clearitem,clearcart})=>{
     const totalprice= cart.reduce((price,item)=>
     price+item.quantity*item.price,0
     );
    
     
     
    return(
        <>
        <div className="shoppingcart">
        {cart.length === 0 && (
            <div className="cartempty">
            <h1>cart is empty</h1>
            </div>
        )}
        {cart.map((item)=>(
            <div key={item.id}className="cartitem">
            <div className="cart">
            <img src={item.img} style={{width:'80px',height:'100px',borderRadius:'5px'}}/>
            <div className="titlecart">
            <p style={{fontWeight:'bold'}}>{item.title}</p>
            <p>${item.price}</p>
            </div>
            <div className="add">
            <i class="bi bi-plus-lg mx-1 " onClick={()=>additem(item)}></i>
            <input type="text" placeholder={item.quantity} readOnly />
            <i class="bi bi-dash-lg mx-1" onClick={()=>removeitem(item)}></i>
            </div>
            <div className="pricecart">
            <h3>${item.quantity*item.price}</h3>
            </div>
            <div>
            <i class="bi bi-trash-fill" style={{color:'red'}} onClick={()=>clearitem(item)}></i>
            </div>
            </div>
            </div>
            ))}
            {cart.length >= 1 &&(<div className="pricetotal">
            <h1>Total price:</h1>
            <p>${totalprice}</p>
            <button type="button" class="btn btn-danger" onClick={clearcart}>Clear cart</button>
            <button type="button" class="btn btn-success">Place Order</button>
            </div>)}
            
        </div>
        </>
    )
}
export default Cart;