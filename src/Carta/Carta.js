import { Item } from "../ProductoDetalles/ProductoDetalles"
import './Carta.css';

export const ItemList = ({items})=>{

    return(
        
        <div className="estilos-listado ">
              
         
            {
                items.map(producto=>(
                    <Item key={producto.id} item={producto}/>
                ))
            }
        </div>
      
        
    )
}

