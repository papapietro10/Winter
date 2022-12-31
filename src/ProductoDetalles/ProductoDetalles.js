import './ProductoDetalles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export const Item = ({item})=>{
    return(
    
        
     
        
      <Card  >


    <Card.Img variant="top" className='imagen-servicio' src="https://static.wixstatic.com/media/65daa0_823f8c65f24a405abb32ec871c896c30~mv2_d_1968_1968_s_2.jpg/v1/fill/w_296,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/65daa0_823f8c65f24a405abb32ec871c896c30~mv2_d_1968_1968_s_2.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
      <h4>{item.title}</h4>
    </Card.Body>
  </Card>
        
    ) 
}