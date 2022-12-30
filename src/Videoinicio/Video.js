import "./Video.css"
import videoBg from '../Videoinicio/videoBg.mp4'


export  const Video = () => {

  return (


  <div className='main'>
    <div className="overlay"></div>
 
    <video className="video-clas"  autoPlay loop muted   src={videoBg} />
 
    <div className="content">
      <h1>The winter Break</h1>

    </div>
  </div>

  
);
}
