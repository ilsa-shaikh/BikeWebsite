import { NavLink } from "react-router-dom";
const Header=({cart})=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark ">
      <div className="container-fluid"> 
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
         <NavLink className="navbar-brand" to="#">KAWASAKI</NavLink>
      
        
        
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link  active " aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Warranty</a></li>
                <li><a className="dropdown-item" href="#">Safety</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Maintenance</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact us</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <NavLink to="/link"><button type="button" class="btn btn-primary position-relative mx-2">
          <i class="bi bi-cart-fill"></i>
        <span class="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-danger">
         {cart.length}
        <span class="visually-hidden">unread messages</span>
      </span>
</button>
      </NavLink>
        </div>
      </div>
    </nav>
    )
    }
    export default Header;