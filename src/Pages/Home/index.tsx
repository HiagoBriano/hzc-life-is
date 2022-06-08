import React from 'react';
import ComponentFeaturedVideo from '../../Components/ComponentFeaturedVideo';
import ComponentHeader from '../../Components/ComponentHeader';
import './Home.css';
import bannerMobile1 from './images/banner-mobile_1.png';

export default function Home() {
  document.title = 'HZC | Home';

  const videosDestacados = [
    {
      imagem: bannerMobile1,
      descricao: 'Banner do cartão',
      destaque: 'Vídeo em destaque',
      titulo: 'HZC - Titulo',
      perfil: 'Bruno Lopez',
      tempo: 33,
      visualizacao: 33,
    },
  ];
  return (
    <>
      <ComponentHeader pagina="Inicio" />

      <main className="principal">
        <h2 className="titulo-pagina">Início</h2>
        {videosDestacados.map((atual) => (
          <ComponentFeaturedVideo
            imagem={atual.imagem}
            descricao={atual.descricao}
            destaque={atual.destaque}
            titulo={atual.titulo}
            perfil={atual.perfil}
            tempo={atual.tempo}
            visualizacao={atual.visualizacao}
          />
        ))}
      </main>
    </>
  );
}
