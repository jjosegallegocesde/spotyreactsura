export async function servicioSpoty(){

    const URI="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US"

    const TOKEN="Bearer BQDcGCsr9u52woXejoFgmG4LDWUj0APfehxQsx7RJ68x45q0jLlvhvWkbfFrDw2nPQjJPO0one7UOA349z2kXVIg1mNmYwCXcypfXwsLwCYzMJcwEbMqqgL6JcYwgqdJYWJG27I_1dBcrFW1B7dJcrcyYbO5vPkyBRDKAOd92VYhuiv3M_s"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos
    


}