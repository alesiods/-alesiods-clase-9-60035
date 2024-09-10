import React from 'react'
import { useParams } from 'react-router-dom'

//UseParams: es un hook que nos permite acceder a los parámetros de las URL y almacenar ese dato.

//ejempo: https://www.tecnoshop.com/silla/10
//yo puedo tomar ese 10 y almacenarlo

const Sillas = () => {
    const {id} = useParams()
    console.log(id)

  return (

    <div>
        <h2>Seccion Sillas Gamer</h2>
        <p>ID Producto: {id}</p>

    </div>
  )
}

export default Sillas