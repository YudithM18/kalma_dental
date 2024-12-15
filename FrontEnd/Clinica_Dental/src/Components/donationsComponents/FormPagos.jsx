import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import paypal from '../../Img/PayPal.png';
import Swal from 'sweetalert2';
import '../../Styles/FormPagos.css';
import {useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../i18n'

const FormPagos = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  const location = useLocation();
  const donationAmount = location.state.amount;
  const navigate = useNavigate();

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
            value: donationAmount,
          },
        },
      ],
    });
  };

 // Función para manejar la aprobación del pago
 const onApprove = (data, actions) => {
  return actions.order.capture().then(function (details) {
    // Usar las traducciones para los textos
    setPaymentStatus({ 
      success: true, 
      message: `${t('Alerta_exito')}: ${details.payer.name.given_name}` 
    });

    // Mostrar un SweetAlert2 de éxito
    Swal.fire({
      icon: 'success',
      title: t('Alerta_1_pago'),
      text: `${t('Alerta_2_pago')}, ${details.payer.name.given_name}!`,
      confirmButtonText: t('Alerta_3_pago'),
      confirmButtonColor: '#3085d6',
    });

    // Redirigir después de un tiempo
    setTimeout(() => {
      navigate('/'); // Navega a la página principal
    }, 6000);
  });
};

// Función para manejar el cancelamiento del pago
const onCancel = () => {
  setPaymentStatus({ success: false, message: t('Alerta_4_pago') });
  
  // Mostrar un SweetAlert2 de cancelación
  Swal.fire({
    icon: 'error',
    title: t('Alerta_fracaso'),
    text: t('Alerta_5_pago'),
    confirmButtonText: t('Alerta_6_pago'),
    confirmButtonColor: '#d33',
  });
};

  return (
    <div className="payment-container">
      <h1 className='completo'>{t('titulo_pagos')}</h1>
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
