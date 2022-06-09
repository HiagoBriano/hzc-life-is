import React from 'react';
import './ComponentCardSimple.css';

interface IProps {
  cartao: 'venda' | 'video' | 'pico';
  imagem: string;
  descricao: string;
  titulo: string;
  perfil: string;
  quantidade: number;
}

export default function ComponentCardSimple({
  cartao,
  imagem,
  descricao,
  titulo,
  perfil,
  quantidade,
}: IProps) {
  return (
    <>
      <article className="cartao">
        <img src={imagem} alt={descricao} className="cartao__imagem" />
        <div className="cartao__conteudo">
          <p className="cartao__perfil">{perfil}</p>
          <h3 className="cartao__titulo">{titulo}</h3>

          {cartao === 'venda' && (
            <>
              <p className="cartao__info cartao__info--sifrao">{quantidade}</p>
              <button
                className="cartao__botao cartao__botao--carrinho"
                aria-label="Carrinho de compra"
              />
            </>
          )}

          {cartao === 'video' && (
            <>
              <p className="cartao__info cartao__info--tempo">{`${quantidade} minutos`}</p>
              <button
                className="cartao__botao cartao__botao--play"
                aria-label="Assistir agora"
              />
            </>
          )}

          {cartao === 'pico' && (
            <>
              <p className="cartao__info cartao__info--visualizacao">{`${quantidade} visualizações`}</p>
              <button
                className="cartao__botao cartao__botao--pico"
                aria-label="Ver localização"
              />
            </>
          )}
        </div>
      </article>
    </>
  );
}
