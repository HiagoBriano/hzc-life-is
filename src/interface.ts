  export interface IPropsCardSimple {
    cartao: 'venda' | 'video' | 'pico';
    imagem: string;
    descricao: string;
    titulo: string;
    perfil: string;
    quantidade: number;
  }

  export interface IPropsCardFeatured {
  cartao: 'venda' | 'video';
  imagem: string;
  descricao: string;
  destaque: string;
  titulo: string;
  perfil: string;
  quantidade: number;
  visualizacao: number;
}