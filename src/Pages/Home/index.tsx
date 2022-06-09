import React from 'react';
import ComponentCardFeatured from '../../Components/ComponentCardFeatured';
import ComponentCardSimple from '../../Components/ComponentCardSimple';
import ComponentHeader from '../../Components/ComponentHeader';
import './Home.css';
import bannerMobile1 from './images/banner-mobile_1.png';
import bannerMobile2 from './images/banner-mobile_2.png';
import produto1 from './images/produto_1.png';
import produto2 from './images/produto_2.png';
import produto3 from './images/produto_3.png';
import produto4 from './images/produto_4.png';
import video1 from './images/video_1.png';
import video2 from './images/video_2.png';
import video3 from './images/video_3.png';
import video4 from './images/video_4.png';

export default function Home() {
  document.title = 'HZC | Home';

  interface IComponentCardSimple {
    cartao: 'venda' | 'video' | 'pico';
    imagem: string;
    descricao: string;
    titulo: string;
    perfil: string;
    quantidade: number;
  }

  const videos: IComponentCardSimple[] = [
    {
      cartao: 'video',
      imagem: video1,
      descricao: 'video HZC - Tudo sem Padrin',
      titulo: 'HZC - Tudo sem Padrin',
      perfil: 'André Soares',
      quantidade: Math.floor(Math.random() * 100 + 1),
    },
    {
      cartao: 'video',
      imagem: video2,
      descricao: 'video HZC - Enter the Hu-flez',
      titulo: 'HZC - Enter the Hu-flez',
      perfil: 'Bruno Lopes',
      quantidade: Math.floor(Math.random() * 100 + 1),
    },
    {
      cartao: 'video',
      imagem: video3,
      descricao: 'video HZC - Vol.3',
      titulo: 'HZC - Vol.3',
      perfil: 'Luiza Sampaio',
      quantidade: Math.floor(Math.random() * 100 + 1),
    },
    {
      cartao: 'video',
      imagem: video4,
      descricao: 'video HZC - Love Machine',
      titulo: 'HZC - Love Machine',
      perfil: 'Bruno Lopes',
      quantidade: Math.floor(Math.random() * 100 + 1),
    },
  ];

  const camisas: IComponentCardSimple[] = [
    {
      cartao: 'venda',
      imagem: produto1,
      descricao: 'camiseta IBM',
      titulo: 'IBM',
      perfil: 'André Soares',
      quantidade: +(Math.random() * 100 + 1).toFixed(2),
    },
    {
      cartao: 'venda',
      imagem: produto2,
      descricao: 'camiseta Huflez Crew Philosophy Club',
      titulo: 'Huflez Crew Philosophy Club',
      perfil: 'Bruno Lopes',
      quantidade: +(Math.random() * 100 + 1).toFixed(2),
    },
    {
      cartao: 'venda',
      imagem: produto3,
      descricao: 'camiseta Corujita noturna',
      titulo: 'Corujita noturna',
      perfil: 'Luiza Sampaio',
      quantidade: +(Math.random() * 100 + 1).toFixed(2),
    },
    {
      cartao: 'venda',
      imagem: produto4,
      descricao: 'camiseta GGG - Gatin G Gorro',
      titulo: 'GGG - Gatin G Gorro',
      perfil: 'Bruno Lopes',
      quantidade: +(Math.random() * 100 + 1).toFixed(2),
    },
  ];

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

        <section className="secao">
          <h3 className="secao__titulo">Vídeos mais vistos</h3>

          {videos.map((atual) => (
            <ComponentCardSimple
              cartao={atual.cartao}
              imagem={atual.imagem}
              descricao={atual.descricao}
              titulo={atual.titulo}
              perfil={atual.perfil}
              quantidade={atual.quantidade}
            />
          ))}
        </section>

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

        <section className="secao">
          <h3 className="secao__titulo">Camisas mais recentes</h3>

          {camisas.map((atual) => (
            <ComponentCardSimple
              cartao={atual.cartao}
              imagem={atual.imagem}
              descricao={atual.descricao}
              titulo={atual.titulo}
              perfil={atual.perfil}
              quantidade={atual.quantidade}
            />
          ))}
        </section>
      </main>
    </>
  );
}
