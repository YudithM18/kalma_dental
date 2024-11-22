import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import paypal from '../Img/PayPal.png';
import Swal from 'sweetalert2';
import '../Styles/FormPagos.css';

const FormPagos = () => {
  const [paymentStatus, setPaymentStatus] = useState(null); // Estado para manejar el estado de pago

  const initialOptions = {
    clientId: "AQmyxRE5DRcRHHCLLGc5g9InxIkjXMBW2VfRkD3h35o8QE7NFotmI-PFlAt7y1phrd6kdWJW_TLco-t7",
    currency: "USD",
    intent: "capture",
  };

  // Función para crear la orden de pago
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency: "USD",
            value: "700",
          },
        },
      ],
    });
  };

  // Función para manejar la aprobación del pago
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      setPaymentStatus({ success: true, message: `Pago Completado: ${details.payer.name.given_name}` });
      
      // Mostrar un SweetAlert2 de éxito
      Swal.fire({
        icon: 'success',
        title: '¡Donación Completada!',
        text: `Gracias por tu donación, ${details.payer.name.given_name}!`,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3085d6',
      });
    });
  };

  // Función para manejar el cancelamiento del pago
  const onCancel = () => {
    setPaymentStatus({ success: false, message: "Pago Cancelado" });
    
    // Mostrar un SweetAlert2 de cancelación
    Swal.fire({
      icon: 'error',
      title: 'Pago Cancelado',
      text: 'Lamentamos que no hayas completado la donación. Si tienes algún problema, contáctanos.',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#d33',
    });
  };

  return (
    <div className="payment-container">
      <h1 className='completo'>Completa tu donación</h1>
      {/* Imagen decorativa de PayPal */}
      <img className="paypal-image" src={paypal} alt="Logo PayPal" />
      
      {/* Script y botones de PayPal */}
      <PayPalScriptProvider options={initialOptions}>
        <div className="paypal-button-container">
          <PayPalButtons
            style={{
              layout: "horizontal",
              color: "blue",
              shape: "rect",
              label: "paypal",
            }}
            createOrder={createOrder}
            onApprove={onApprove}
            onCancel={onCancel}
          />
        </div>
      </PayPalScriptProvider>

      {/* Mensaje de estado de pago (si quieres mantenerlo en el UI además de los SweetAlerts) */}
      {paymentStatus && (
        <div className={`alert ${paymentStatus.success ? 'success' : 'error'}`}>
          {paymentStatus.message}
        </div>
      )}
    </div>
  );
};

export default FormPagos;
