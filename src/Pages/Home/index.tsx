import ComponentCardFeatured from '../../Components/ComponentCardFeatured';
import ComponentCardSimple from '../../Components/ComponentCardSimple';
import ComponentHeader from '../../Components/ComponentHeader';
import { camisas, videos } from './Data';
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
