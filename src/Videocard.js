
import { useRef, useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Videocard =()=>{
 const[showvideo,setShowvideo]=useState(false);

//  const video=useRef()
 const videoplay=()=>{
     setShowvideo(true);
    //  video.current.play();
 }
    return(
        <>
        <div className="card">
        <video controls> 
        <source src="/shortvideo.mp4" type="video/mp4"/>
        </video>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        <div className="card">
        <video controls> 
        <source src="/video.mp4" type="video/mp4"/>
        </video>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        <div className="card">
        {!showvideo &&<img src="kawasaki2.jpg" alt="" className="image"/>}
        {!showvideo &&<button className="center" onClick={videoplay}><i class="bi bi-play-circle" style={{fontSize:'3rem',color:'white'}}></i></button>
        }
        {showvideo && <video autoPlay> 
        <source src="/shortvideo.mp4" type="video/mp4"/>
        </video> }
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </>
    )
}
export default Videocard;