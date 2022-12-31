import './ProductoDetalles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export const Item = ({item})=>{
    return(
      <div className="card">
      <div className="row">
        <div className="col-md-7 px-3">
          <div className="card-block px-6">
            <h4 className="card-title">Horizontal Card with Carousel - Bootstrap 4</h4>
            <p className="card-text">
              The Carousel code can be replaced with an img src, no problem. The added CSS brings shadow to the card and some adjustments to the prev/next buttons and the indicators is rounded now. As in Bootstrap 3
            </p>
            <p className="card-text">
              Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images
            </p>
            <br />
            <Button href="#" className="mt-auto btn btn-primary">Read More</Button>
          </div>
        </div>
        <div className="col-md-5">
          <div id="CarouselTest" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#CarouselTest" data-slide-to="0" className="active"></li>
              <li data-target="#CarouselTest" data-slide-to="1"></li>
              <li data-target="#CarouselTest" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block" src="https://picsum.photos/450/300?image=1072" alt="" />
              </div>
              <div className="carousel-item">
                <img className="d-block" src="https://picsum.photos/450/300?image=855" alt="" />
              </div>
              <div className="carousel-item">
                <img className="d-block" src="https://picsum.photos/450/300?image=355" alt="" />
              </div>
              <a className="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    ) 
}