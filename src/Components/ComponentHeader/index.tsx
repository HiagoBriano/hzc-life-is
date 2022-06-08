import React, { useState } from 'react';
import './ComponentHeader.css';
import logo from './images/logo.svg';

interface IMenuLateral {
  nome: string;
  link: string;
  icone: string;
}

interface IProps {
  pagina:
    | 'Inicio'
    | 'Vídeos'
    | 'Picos'
    | 'Integrantes'
    | 'Integrantes'
    | 'Pinturas';
}

const sites: IMenuLateral[] = [
  {
    nome: 'Inicio',
    link: '/',
    icone: 'menu-lateral__link--inicio',
  },
  {
    nome: 'Vídeos',
    link: '/',
    icone: 'menu-lateral__link--videos',
  },
  {
    nome: 'Picos',
    link: '/',
    icone: 'menu-lateral__link--picos',
  },
  {
    nome: 'Integrantes',
    link: '/',
    icone: 'menu-lateral__link--integrantes',
  },
  {
    nome: 'Camisas',
    link: '/',
    icone: 'menu-lateral__link--camisas',
  },
  {
    nome: 'Pinturas',
    link: '/',
    icone: 'menu-lateral__link--pinturas',
  },
];

export default function ComponentHeader({ pagina }: IProps) {
  const [menuLateralAtivo, setmenuLateralAtivo] = useState(false);

  const ativarOuDesativarMenu = () => {
    setmenuLateralAtivo(!menuLateralAtivo);
  };

  return (
    <>
      <header className="cabecalho" aria-label="Menu">
        <button
          className="cabecalho__menu"
          onClick={() => ativarOuDesativarMenu()}
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
        <>
          <img
            className="menu-lateral__logo"
            src={logo}
            alt="logotipo da HZC"
          />
          {sites.map((atual) => (
            <a
              key={atual.nome}
              href={atual.link}
              className={`menu-lateral__link ${atual.icone} ${
                atual.nome === pagina ? 'menu-lateral__link--ativo' : null
              }`}
            >
              {atual.nome}
            </a>
          ))}
        </>
      </nav>
    </>
  );
}
