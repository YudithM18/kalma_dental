import React from 'react'
import '../../Styles/FormDonaciones.css'
import teleton from '../../Img/Teletón.jpg';


function Donaciones() {
  return (
    <div className='donaciones-container'>
      <div>
        <img className="img-teleton" src={teleton} alt="Decoracion" />
        <br />
        <br />
        <br />
        <br />
        <h2 className='donacion'>¡Tu donación hace la diferencia!</h2>
      </div>
      <br />
      <br />
      <div className='card'>
        <div className='card-content'>
          <h4>En Kalma Dental, nos enorgullece ser parte de la comunidad que apoya causas tan 
            valiosas como Teletón.
            Sabemos que el bienestar de los niños es lo más importante, y por eso hemos decidido sumarnos a esta noble causa. Con tu generosidad, estamos 
            contribuyendo a mejorar la vida de muchos pequeños que necesitan atención médica especializada 
            y terapias que les permitan tener un futuro lleno de esperanza.</h4>
          <h4>Cada donación, por más pequeña que sea, será utilizada para proporcionar a estos niños 
            los tratamientos, equipos y recursos necesarios para su rehabilitación. Gracias a tu apoyo, 
            se están creando oportunidades de vida para aquellos que más lo necesitan.</h4>
          <h4>En Kalma Dental, creemos que la solidaridad es la base para transformar realidades. 
            Con cada aporte, estás ayudando a que estos niños y sus familias sigan adelante con valentía, esperanza 
            y mucho amor. Agradecemos profundamente tu contribución, que será un acto de bondad que dejará una huella 
            positiva en sus vidas.</h4> 
          <h4>Gracias por acompañarnos en este hermoso viaje hacia un futuro mejor para los niños de Teletón.
            Tu ayuda realmente hace la diferencia.</h4>
        </div>
      </div>
    </div>
  )
}

export default Donaciones