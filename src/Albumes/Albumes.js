import {servicioSpoty} from '../services/servicioSpoty.js'
import { servicioTOKEN } from '../services/servicioTOKEN.js'

import { useState, useEffect } from 'react'

export function Albumes (){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)
    //useState para la carga de datos
    const[carga,setCarga]=useState(true)

    //usando el useEffect
    useEffect(function(){

        servicioSpoty()
        .then(function(respuesta){
            console.log(respuesta);
            setCanciones(respuesta.tracks)
            setCarga(false)
        })
        console.log(canciones)

    },[])

    if(carga==true){

        return(
            <>
                <h1>Estoy cargando...</h1>
            </>
        )

    }else{

        return(

            <>
                {
                    
                }
            </>
        )

    }

    
    
  

   
}