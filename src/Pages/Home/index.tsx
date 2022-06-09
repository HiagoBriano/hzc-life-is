import React from 'react';
import ComponentCardFeatured from '../../Components/ComponentCardFeatured';
import ComponentHeader from '../../Components/ComponentHeader';
import './Home.css';
import bannerMobile1 from './images/banner-mobile_1.png';
import bannerMobile2 from './images/banner-mobile_2.png';

export default function Home() {
  document.title = 'HZC | Home';

  return (
    <>
      <ComponentHeader pagina="Inicio" />

      <main className="principal">
        <h2 className="titulo-pagina">Início</h2>
        <ComponentCardFeatured
          cartao="video"
          imagem={bannerMobile1}
          descricao="Banner do cartão"
          destaque="Vídeo em destaque"
          titulo="HZC - Titulo"
          perfil="Bruno Lopez"
          quantidade={Math.floor(Math.random() * 100 + 1)}
          visualizacao={Math.floor(Math.random() * 100 + 1)}
        />

        <ComponentCardFeatured
          cartao="venda"
          imagem={bannerMobile2}
          descricao="Banner Nova arte"
          destaque="Nova arte"
          titulo="Only Zikas - Lagoa Dompa Club"
          perfil="Bruno Lopez"
          quantidade={+(Math.random() * 100 + 1).toFixed(2)}
          visualizacao={Math.floor(Math.random() * 100 + 1)}
        />
      </main>
    </>
  );
}
