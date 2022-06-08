import React from 'react';
import ComponentHeader from '../../Components/ComponentHeader';
import './index.css';

export default function Home() {
  document.title = 'HZC | Home';
  return (
    <>
      <ComponentHeader pagina="Inicio" />
    </>
  );
}
