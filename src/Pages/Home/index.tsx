import ComponentCardFeatured from '../../Components/ComponentCardFeatured';
import ComponentCardRecent from '../../Components/ComponentCardRecent';
import ComponentCardSimple from '../../Components/ComponentCardSimple';
import ComponentHeader from '../../Components/ComponentHeader';
import { camisas, novasArtes, videos, videosRecentes } from './Data';
import './Home.css';
import bannerMobile1 from './images/banner-mobile_1.png';
import bannerMobile2 from './images/banner-mobile_2.png';
import banner1 from './images/banner_1.png';
import banner2 from './images/banner_2.png';
// import { IVideosRecentes } from '../../interface';

export default function Home() {
  document.title = 'HZC | Home';

  return (
    <div className="all">
      <ComponentHeader pagina="Inicio" />

      <main className="principal">
        <h2 className="titulo-pagina">Início</h2>

        <ComponentCardFeatured
          cartao="video"
          imagem={banner1}
          imagemMobile={bannerMobile1}
          descricao="Banner do cartão"
          destaque="Vídeo em destaque"
          titulo="HZC - Titulo"
          perfil="Bruno Lopez"
          quantidade={Math.floor(Math.random() * 100 + 1)}
          visualizacao={Math.floor(Math.random() * 100 + 1)}
        />

        <ComponentCardRecent
          cartao="video"
          tituloPrincipal="Vídeos recentes"
          LinkVerTodos="/"
          videosRecentes={videosRecentes}
        />

        <section className="secao secao__videos">
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

        <ComponentCardRecent
          cartao="venda"
          tituloPrincipal="Novas Artes"
          LinkVerTodos="/"
          videosRecentes={novasArtes}
        />

        <ComponentCardFeatured
          cartao="venda"
          imagem={banner2}
          imagemMobile={bannerMobile2}
          descricao="Banner Nova arte"
          destaque="Nova arte"
          titulo="Only Zikas - Lagoa Dompa Club"
          perfil="Bruno Lopez"
          quantidade={+(Math.random() * 100 + 1).toFixed(2)}
          visualizacao={Math.floor(Math.random() * 100 + 1)}
        />

        <section className="secao secao__vendas">
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
    </div>
  );
}
