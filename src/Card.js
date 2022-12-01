const Card =({productItem,handle})=>{
    return(
        <>
       {productItem.map((productItem)=>( 
        <div className="card">
        <img src={productItem.img} className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <h5 className="card-title">{productItem.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary" onClick={()=>handle(productItem)}>Buy Now</a>
        </div>
      </div>))}
      </>
    )
}
export default Card;