import React from 'react';
import './ComponentCardFeatured.css';

interface IProps {
  cartao: 'venda' | 'video';
  imagem: string;
  descricao: string;
  destaque: string;
  titulo: string;
  perfil: string;
  quantidade: number;
  visualizacao: number;
}

export default function ComponentCardFeatured({
  cartao,
  imagem,
  descricao,
  destaque,
  titulo,
  perfil,
  quantidade,
  visualizacao,
}: IProps) {
  return (
    <>
      <article className="cartao-destaque">
        <img src={imagem} alt={descricao} className="cartao-destaque__imagem" />
        <div className="cartao-destaque__conteudo">
          <p className="cartao-destaque__destaque">{destaque}</p>
          <h3 className="cartao-destaque__titulo">{titulo}</h3>
          <p className="cartao-destaque__perfil">{perfil}</p>
          <p
            className={`cartao-destaque__info ${
              cartao === 'video'
                ? `cartao-destaque__info--tempo`
                : 'cartao-destaque__info--sifrao'
            }`}
          >
            {cartao === 'video' ? `${quantidade} minutos` : `${quantidade}`}
          </p>
          <p className="cartao-destaque__info cartao-destaque__info--visualizacao">
            {`${visualizacao} visualizações`}
          </p>
          <button
            className={`cartao-destaque__botao ${
              cartao === 'video'
                ? 'cartao-destaque__botao--play'
                : 'cartao-destaque__botao--carrinho'
            } cartao-destaque__botao--destaque`}
          >
            {cartao === 'video' ? 'Assistir agora' : 'Comprar agora'}
          </button>
        </div>
      </article>
    </>
  );
}
