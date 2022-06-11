import { IPropsCardSimple } from '../../interface';
import miniatura1 from './images/miniatura_1.png';
import miniatura2 from './images/miniatura_2.png';
import miniatura3 from './images/miniatura_3.png';
import miniatura4 from './images/miniatura_4.png';
import miniatura5 from './images/miniatura_5.png';
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

export const videosRecentes = [
  {
    imagem: miniatura1,
    alt: 'video HZC - Love Machine',
    titulo: 'HZC - Love Machine',
    perfil: 'Júlia Fonseca',
  },
  {
    imagem: miniatura2,
    alt: 'video HZC - Vol.3',
    titulo: 'HZC - Vol.3',
    perfil: 'Júlia Fonseca',
  },
  {
    imagem: miniatura3,
    alt: 'video HZC -Pescaria na Urca',
    titulo: 'HZC -Pescaria na Urca',
    perfil: 'Júlia Fonseca',
  },
  {
    imagem: miniatura4,
    alt: 'video Vidalocagi - Guerreiros do Asfalto',
    titulo: 'Vidalocagi - Guerreiros do Asfalto',
    perfil: 'Júlia Fonseca',
  },
  {
    imagem: miniatura5,
    alt: 'video Vidalocagi - Não importa o nível',
    titulo: 'Vidalocagi - Não importa o nível',
    perfil: 'Júlia Fonseca',
  },
];

export const novasArtes = [
  {
    imagem: miniatura1,
    alt: 'Sem título 01',
    titulo: 'Sem título 01',
    perfil: 'Antonio Tebyriçá',
  },
  {
    imagem: miniatura2,
    alt: 'Sem título 02',
    titulo: 'Sem título 02',
    perfil: 'Antonio Tebyriçá',
  },
  {
    imagem: miniatura3,
    alt: 'Segurança',
    titulo: 'Segurança',
    perfil: 'Raphael Gibson',
  },
  {
    imagem: miniatura4,
    alt: 'Malunguisse',
    titulo: 'Malunguisse',
    perfil: 'Carolina Canavarro',
  },
  {
    imagem: miniatura5,
    alt: 'Coroa da converse',
    titulo: 'Coroa da converse',
    perfil: 'Nikolas de Murtas',
  },
  {
    imagem: miniatura1,
    alt: 'Segurança',
    titulo: 'Segurança',
    perfil: 'Raphael Gibson',
  },
   {
    imagem: miniatura2,
    alt: 'Sem título 03',
    titulo: 'Sem título 03',
    perfil: 'Antonio Tebyriçá',
  },
];
