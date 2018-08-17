import React from 'react'
import './regular-error.css'

function RegularError(props) {
  return(
    <div className="RegularError">
      <h1>Ha ocurrido un error</h1>
      <p>Es posible que no haya conexión con el servidor o algún proceso ha dejado de funcionar.</p>
      <a href="#">Preguntas frecuentes</a>
    </div>
  )
}

export default RegularError