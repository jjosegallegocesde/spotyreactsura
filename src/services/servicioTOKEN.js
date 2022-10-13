export async function servicioTOKEN(){


    //uri
    const URI="https://accounts.spotify.com/api/token"

    //datos
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=ac641808dc9849a3bf5ec86de7ebc241"
    const DATO3="client_id=bb83f0687cef4648a662d5ab1d7efb21"

    //peticion
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3
    }

    //fetch
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token;
    return datos


}