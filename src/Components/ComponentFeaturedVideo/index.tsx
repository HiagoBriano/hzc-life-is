import React from 'react';
import './ComponentFeaturedVideo.css';

interface IProps {
  imagem: string;
  descricao: string;
  destaque: string;
  titulo: string;
  perfil: string;
  tempo: number;
  visualizacao: number;
}

export default function ComponentCard({
  imagem,
  descricao,
  destaque,
  titulo,
  perfil,
  tempo,
  visualizacao,
}: IProps) {
  return (
    <>
      <article className="cartao cartao--destaque">
        <img src={imagem} alt={descricao} className="cartao__imagem" />
        <div className="cartao__conteudo">
          <p className="cartao__destaque">{destaque}</p>
          <h3 className="cartao__titulo">{titulo}</h3>
          <p className="cartao__perfil">{perfil}</p>
          <p className="cartao__info cartao__info--tempo">{`${tempo} minutos`}</p>
          <p className="cartao__info cartao__info--visualizacao">
            {`${visualizacao} visualizações`}
          </p>
          <button className="cartao__botao cartao__botao--play cartao__botao--destaque">
            Assistir agora
          </button>
        </div>
      </article>
    </>
  );
}
