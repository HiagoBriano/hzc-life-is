import { IPropsCardSimple } from '../../interface';
import produto1 from './images/produto_1.png';
import produto2 from './images/produto_2.png';
import produto3 from './images/produto_3.png';
import produto4 from './images/produto_4.png';
import video1 from './images/video_1.png';
import video2 from './images/video_2.png';
import video3 from './images/video_3.png';
import video4 from './images/video_4.png';

export const videos: IPropsCardSimple[] = [
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

  export const camisas: IPropsCardSimple[] = [
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