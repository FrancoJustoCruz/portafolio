import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <>
      <div className="background-image">
        <Navbar toggleLanguage={toggleLanguage} isEnglish={isEnglish} />
        <div className="imagenPerfilContainer">
          <div className='imagenPerfil'/>
        </div>
        <div className="texto">
          <h1>{isEnglish ? 'Hello, I am Franco' : 'Hola, soy Franco'}</h1>
          <p>{isEnglish ? 'I am a future web developer currently studying at Funval.' : 'Soy un futuro desarrollador web que actualmente estudia en Funval.'}</p>
        </div>
      </div>
    </>
  );
}