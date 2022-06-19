import { useState } from 'react';
import './ComponentHeader.css';
import ComponentMenu from './ComponentMenu';
import logo from './images/logo.svg';

interface IProps {
  pagina:
    | 'Inicio'
    | 'Vídeos'
    | 'Picos'
    | 'Integrantes'
    | 'Integrantes'
    | 'Pinturas';
}

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
        <p className="cabecalho__perfil">Bruno Lopes</p>
        <button
          className="cabecalho__notificacao"
          area-aria-label="Notificação"
        >
          <i></i>
        </button>
      </header>
      <ComponentMenu menuLateralAtivo={menuLateralAtivo} pagina={pagina} />
    </>
  );
}
