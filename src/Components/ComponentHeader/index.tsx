import React, { useState } from 'react';
import './ComponentHeader.css';
import logo from './images/logo.svg';

export default function ComponentHeader() {
  document.title = 'HZC | Home';

  const [menuLateralAtivo, setmenuLateralAtivo] = useState(false);

  const ativaOuDesativarMenu = () => {
    setmenuLateralAtivo(!menuLateralAtivo);
  };

  return (
    <>
      <header className="cabecalho" aria-label="Menu">
        <button
          className="cabecalho__menu"
          onClick={() => ativaOuDesativarMenu()}
        >
          <i></i>
        </button>
        <img className="cabecalho__logo" src={logo} alt="logotipo da HZC" />
        <button
          className="cabecalho__notificacao"
          area-aria-label="Notificação"
        >
          <i></i>
        </button>
      </header>
      <nav
        className={
          menuLateralAtivo ? 'menu-lateral menu-lateral--ativo' : 'menu-lateral'
        }
      >
        <img className="menu-lateral__logo" src={logo} alt="logotipo da HZC" />
        <a
          href="https://www.google.com.br/"
          className="menu-lateral__link menu-lateral__link--inicio menu-lateral__link--ativo"
        >
          Inicio
        </a>
        <a
          href="https://www.google.com.br/"
          className="menu-lateral__link menu-lateral__link--videos"
        >
          Vídeos
        </a>
        <a
          href="https://www.google.com.br/"
          className="menu-lateral__link menu-lateral__link--picos"
        >
          Picos
        </a>
        <a
          href="https://www.google.com.br/"
          className="menu-lateral__link menu-lateral__link--integrantes"
        >
          Integrantes
        </a>
        <a
          href="https://www.google.com.br/"
          className="menu-lateral__link menu-lateral__link--camisas"
        >
          Camisas
        </a>
        <a
          href="https://www.google.com.br/"
          className="menu-lateral__link menu-lateral__link--pinturas"
        >
          Pinturas
        </a>
      </nav>
    </>
  );
}
