import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/FormPaymentAmount.css';
import Swal from 'sweetalert2';

function FormPaymentAmount() {

    useEffect(() => {
        
        document.body.classList.add('fondo-formulario');
        return () => {
            document.body.classList.remove('fondo-formulario');
        };
    }, []);


    const [donationAmount, setDonationAmount] = useState('');
    const navigate = useNavigate();

    const AmountChange = (e) => {
        setDonationAmount(e.target.value); 
    };

    const validateSubmit = (e) => {
        e.preventDefault();

        const amount = parseFloat(donationAmount);

        // Validación de monto: debe ser un número positivo
        if (isNaN(amount) || amount <= 0) {
            Swal.fire({
                icon: 'warning',
                title: '¡Atención!',
                text: 'Por favor, ingresa un monto válido.',
                confirmButtonText: 'OK'
            });
        } else {
            navigate('/Donaciones', { state: { amount: donationAmount } });
        }
    };

    const BtnDonation = () => {
        navigate("/"); 
      };

    return (
        <div>
            <div className="omitir-donacion">
            <button className="back-button-donar" onClick={BtnDonation}>OMITIR</button>
            </div>
                <div className="form-container">
                    <div className="form-content">
                        <h2 className='titulo-ingresar'>Ingresa el monto que deseas donar</h2>
                        <form onSubmit={validateSubmit}>
                            <div className="input-container">
                                <input
                                    type="number"
                                    value={donationAmount}
                                    onChange={AmountChange}
                                    placeholder="Monto a donar"
                                    min="1"
                                    className="input-field-monto"
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-btn">Continuar</button>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default FormPaymentAmount;
