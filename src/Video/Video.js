import "./Video.css"
import videoBg from '../assets/videoBg.mp4'
import ReactPlayer from 'react-player'

export  const Video = () => {

  return (


  <div className='main'>
    <div className="overlay"></div>
    <div className="video">
      <ReactPlayer  src={videoBg}  autoPlay loop muted />
      </div>
    <div className="content">
      <h1>The winter Break</h1>

    </div>
  </div>

  
);
}
