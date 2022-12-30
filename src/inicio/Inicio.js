import React  from "react"
import { SobreNosotros } from "../SobreNosotros/SobreNosotros"
import {Video} from "../Videoinicio/Video"
import "./inicio.css"

export const Inicio = ()=>{
return(
<div>
<div className="container-inicio">
<div className="container-fondo">
 <h1>The Winter Breack</h1>
</div>
</div>
   <Video/>
   <SobreNosotros/>

   </div>

)
}