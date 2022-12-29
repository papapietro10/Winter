import "./Video.css"
import videoBg from '../Videoinicio/videoBg.mp4'


export  const Video = () => {

  return (


  <div className='main'>
    <div className="overlay"></div>
 
    <video src={videoBg} autoPlay loop muted />
 
    <div className="content">
      <h1>The winter Break</h1>

    </div>
  </div>

  
);
}
