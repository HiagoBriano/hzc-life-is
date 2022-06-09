import React from 'react';
import './ComponentCardFeatured.css';

interface IVideo {
  cartao: 'video';
  imagem: string;
  descricao: string;
  destaque: string;
  titulo: string;
  perfil: string;
  quantidade: number;
  visualizacao: number;
}

interface IVenda {
  cartao: 'venda';
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
}: IVideo | IVenda) {
  return (
    <>
      <article className="cartao cartao--destaque">
        <img src={imagem} alt={descricao} className="cartao__imagem" />
        <div className="cartao__conteudo">
          <p className="cartao__destaque">{destaque}</p>
          <h3 className="cartao__titulo">{titulo}</h3>
          <p className="cartao__perfil">{perfil}</p>
          <p
            className={`cartao__info ${
              cartao === 'video'
                ? `cartao__info--tempo`
                : 'cartao__info--sifrao'
            }`}
          >
            {cartao === 'video' ? `${quantidade} minutos` : `${quantidade}`}
          </p>
          <p className="cartao__info cartao__info--visualizacao">
            {`${visualizacao} visualizações`}
          </p>
          <button
            className={`cartao__botao ${
              cartao === 'video'
                ? 'cartao__botao--play'
                : 'cartao__botao--carrinho'
            } cartao__botao--destaque`}
          >
            {cartao === 'video' ? 'Assistir agora' : 'Comprar agora'}
          </button>
        </div>
      </article>
    </>
  );
}
