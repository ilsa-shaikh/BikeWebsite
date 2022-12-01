const Msg=(props)=>{
    return(
        <>
  <div class="cartmsg" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="me-auto">Added to cart</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"onClick={props.onclick}></button>
  </div>
</div>
        </>
    )
}
export default Msg;