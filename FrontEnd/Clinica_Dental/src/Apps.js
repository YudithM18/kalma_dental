// src/App.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Importamos el hook useTranslation
import './i18n'; // Importamos la configuración de i18next
import LanguageSwitcher from './LanguageSwitcher'; // Componente para cambiar el idioma

function App() {
  const { t } = useTranslation(); // Usamos el hook para acceder a las traducciones

  return (
    <div className="App">
      <LanguageSwitcher /> {/* Componente para cambiar el idioma */}
    </div>
  );
}

export default App;
