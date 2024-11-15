import React from 'react'
import '../Styles/FormTerminosCondiciones.css'
import logo from '../Img/Logo_principal.jpg'

function FormTerminosCondiciones() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className='contorno'>
        <br />
        <div className='Condiciones'>
          <br />
        <div className='titleSecundary'>  
          <h3>TÉRMINOS Y CONDICIONES DE LA CLÍNICA DENTAL</h3>
          <h4 className='text'>Los términos y condiciones de la Clínica Dental son los siguientes:</h4>
        </div> 
        <div className='titleSecundary'>  
          <h3>Política de cancelación:</h3>
          <h4 className='text'>Las citas deben ser canceladas o reprogramadas con al menos 24 horas de anticipación. Las cancelaciones tardías pueden estar sujetas a una tarifa.</h4>
        </div>
        <div className='titleSecundary'>
          <h3>Política de pago:</h3>
          <h4 className='text'>Aceptamos efectivo, tarjetas de crédito y seguros dentales. Todos los pagos deben realizarse al momento del servicio. Las facturas no pagadas después de 30 días estarán sujetas a un cargo adicional.</h4>
        </div>
        <div className='titleSecundary'>
          <h3>Política de privacidad:</h3>
          <h4 className='text'>La información personal y médica del paciente será tratada con confidencialidad y solo se utilizará para fines de tratamiento y gestión clínica.</h4>
        </div>
        <div className='titleSecundary'>
          <h3>Responsabilidad del paciente:</h3>
          <h4 className='text'>Los pacientes son responsables de seguir las recomendaciones de cuidado dental proporcionadas por nuestros profesionales para mantener una buena salud bucal.</h4>
        </div>
        <div className='titleSecundary'>
          <h3>Garantías y devoluciones:</h3>
          <h4 className='text'>Ofrecemos una garantía limitada en ciertos tratamientos. Las devoluciones de servicios no utilizados deben ser discutidas con la administración.</h4>
        </div>
        <div className='titleSecundary'>
          <h3>Procedimientos de emergencia:</h3>
          <h4 className='text'>En caso de una emergencia dental fuera del horario de atención, por favor contacte al número de emergencia proporcionado en su consulta.</h4>
        </div>
        <div className='titleSecundary'>
          <h3>Política de seguro:</h3>
          <h4 className='text'>Aceptamos varios planes de seguro dental y procesaremos las reclamaciones en su nombre. Por favor, proporcione la información de su seguro antes del tratamiento.</h4>
        </div>
        <div className='titleSecundary'>
          <h3>Uso de tecnología y equipos:</h3>
          <h4 className='text'>Utilizamos equipos y tecnologías avanzadas para garantizar un tratamiento de alta calidad y precisión.</h4>
        </div>
        <div className='titleSecundary'>
          <h3>Política de quejas y reclamaciones:</h3>
          <h4 className='text'>Las quejas y reclamaciones deben ser presentadas por escrito a la administración y serán atendidas dentro de un plazo razonable.</h4>
        </div>
        <div className='titleSecundary'>
          <h3>Política de vacaciones y días festivos:</h3>
          <h4 className='text'>La clínica estará cerrada en días festivos nacionales y durante vacaciones anuales preestablecidas. Se informará a los pacientes con anticipación sobre estos cierres.</h4>
        </div>
        </div>
        <br />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <img className='logo' src= {logo} alt="Logo Kalma Dental" />
    </div>
  )
}

export default FormTerminosCondiciones