import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
 import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Card from "./Card";
// import Imgdata from "./Imgdata"
import Slide from "./Slide";
import Videocard from "./Videocard";


function App({productItem,handle}) {

  // function data(val,index){
      
  //   return(
  //     <Card
  //       id={index}
  //       img={val.img}
  //       onclick={props.onset}
  //     />
  //   );
  // }
   
  return (
    <>
<Slide/>  
<div className="carddata">
<h1 className="text-center">LATEST FEATURED BIKE </h1>
{/* {Imgdata.map(data)} */}
<Card productItem={productItem} handle={handle}/>
</div>
<div className="videocarddata">
<h1 className="text-center">VIDEOS </h1> 
<Videocard/>
</div>

    </>
  );
}

export default App;
