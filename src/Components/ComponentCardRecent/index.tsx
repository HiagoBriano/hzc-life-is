import { IVideosRecentes } from '../../interface';
import './ComponentCardRecent.css';

export default function ComponentCardRecent({
  cartao,
  tituloPrincipal,
  LinkVerTodos,
  videosRecentes,
}: {
  cartao: 'venda' | 'video';
  tituloPrincipal: string;
  LinkVerTodos: string;
  videosRecentes: IVideosRecentes[];
}) {
  return (
    <article className={`cartao-recente cartao-recente__${cartao}`}>
      <h3 className="cartao-recente__titulo">{tituloPrincipal}</h3>
      <a href={LinkVerTodos} className="cartao-recente__link">
        Ver todos
      </a>
      <ul className="cartao-recente__lista">
        {videosRecentes.map((atual) => (
          <li className="cartao-recente__lista--item">
            <img
              src={atual.imagem}
              alt={atual.alt}
              className="cartao-recente__item--thumbnail"
            />
            <h4 className="cartao-recente__item--titulo">{atual.titulo}</h4>
            <p className="cartao-recente__item--perfil">{atual.perfil}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
