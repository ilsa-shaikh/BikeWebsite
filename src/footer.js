const Footer=()=>{
    return(
        <div className="footer">
        <div className="footer-body">
        <div>@ 2022 INDIA KAWASAKI MOTORS PVT.LTD</div>
        <div >
        <a href="#" className="mx-2">DISCLAIMER</a>|
        <a href="#" className="mx-2">PRIVACY POLICY</a>
        </div>
        <div>
        <ul>
        <li><button>
        <i class="bi bi-youtube" style={{fontSize:'1rem'}}></i>
        </button></li>
        
        <li>
        <button>
        <i class="bi bi-facebook" style={{fontSize:'1rem'}}></i>
        </button>
        </li>
        <li>
        <button>
         <i class="bi bi-linkedin" style={{fontSize:'1rem'}}></i>
         </button>
        </li>
        <li>
        <button>
        <i class="bi bi-twitter" style={{fontSize:'1rem'}}></i>
        </button>
        </li>
        </ul></div>
        </div>
        </div>
    )
}
export default Footer;