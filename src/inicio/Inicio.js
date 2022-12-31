import React   from "react"
import { SobreNosotros } from "../SobreNosotros/SobreNosotros"
import {Video} from "../Videoinicio/Video"
import "./inicio.css"
import { useEffect, useState } from "react";

import { ItemList } from "../Carta/Carta";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Utils/firebase";

export const Inicio = (items)=>{
  
   const {categoria} = useParams();

   const [productos, setProductos] = useState([]);

   useEffect(()=>{
       const getData = async()=>{
           try {
               let queryRef = !categoria ? collection(db,"items") :query(collection(db,"items"),where("categoria","==",categoria));
               const response = await getDocs(queryRef);
               const datos = response.docs.map(doc=>{
                   const newDoc = {
                       ...doc.data(),
                       id:doc.id
                   }
                   return newDoc;
               });
               setProductos(datos)
           } catch (error) {
               console.log(error);
           }
       }
       getData();
       
   },[categoria])
return(
<div>
<Video/>
<div className="container-fondo">
 <h1>The Winter Breack</h1>
 <h4>{items.title}</h4>
</div>

<h4>{items.title}</h4>
 
   <ItemList items={productos}/>
   </div>

   

)
}


