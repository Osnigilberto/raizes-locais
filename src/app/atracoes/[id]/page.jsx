'use client';
import { useState, useEffect } from 'react';
import styles from '../page.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation'; // Importando o hook correto para pegar os params

// Dados das atrações
const atracoes = [
  {
    id: 1,
    nome: 'Cachoeira do Vale Verde',
    descricao: 'Uma bela queda d’água escondida no meio da mata atlântica.',
    imagensExtras: ['/cachoeira.jpg', '/cachoeira1.jpg'],
    endereco: 'Estrada da Natureza, km 12 - Zona Rural',
    horario: 'Todos os dias, das 8h às 17h',
    contato: '(48) 99999-1234',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.456170252549!2d-48.7839626!3d-27.5198467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b15ac485c2d5%3A0x7d88aaaf7f01a18!2sAnt%C3%B4nio%20Carlos%2C%20SC%2C%2088450-000!5e0!3m2!1spt-BR!2sbr!4v1713643395472!5m2!1spt-BR!2sbr',
  },
  {
    id: 2,
    nome: 'Mirante da Serra',
    descricao: 'Vista panorâmica de tirar o fôlego.',
    imagensExtras: ['/mirante.jpg', '/mirante1.jpg'],
    endereco: 'Rua do Mirante, 100 - Bairro Alto',
    horario: 'Todos os dias, das 6h às 19h',
    contato: '(48) 98888-5678',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.456170252549!2d-48.7839626!3d-27.5198467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b15ac485c2d5%3A0x7d88aaaf7f01a18!2sAnt%C3%B4nio%20Carlos%2C%20SC%2C%2088450-000!5e0!3m2!1spt-BR!2sbr!4v1713643395472!5m2!1spt-BR!2sbr',
  },
  {
    id: 3,
    nome: 'Alambique do Zé',
    descricao: 'Tradição e sabor na produção de cachaça artesanal.',
    imagensExtras: ['/alambique.jpg'],
    endereco: 'Rodovia AC-45, km 5 - Sítio do Zé',
    horario: 'Seg a Sáb, das 9h às 18h',
    contato: '(48) 97777-4321',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.456170252549!2d-48.7839626!3d-27.5198467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b15ac485c2d5%3A0x7d88aaaf7f01a18!2sAnt%C3%B4nio%20Carlos%2C%20SC%2C%2088450-000!5e0!3m2!1spt-BR!2sbr!4v1713643395472!5m2!1spt-BR!2sbr',
  },
];

export default function AtracaoPage() {
  const { id } = useParams(); // Usando o hook para pegar o parâmetro da URL

  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    notFound();
  }

  const atracao = atracoes.find((item) => item.id === parsedId);

  if (!atracao) {
    notFound();
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (atracao.imagensExtras.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % atracao.imagensExtras.length);
      }, 6000); // Troca a imagem a cada 6 segundos

      return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }
  }, [atracao.imagensExtras.length]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{atracao.nome}</h2>
      <p className={styles.descricao}>{atracao.descricao}</p>

      {atracao.imagensExtras && (
        <div className={styles.galeria}>
          <img
            src={atracao.imagensExtras[currentImageIndex]}
            alt={`Imagem extra ${currentImageIndex + 1} de ${atracao.nome}`}
            className={styles.galeriaImagem}
          />
        </div>
      )}

      {/* Indicadores de imagem */}
      {atracao.imagensExtras.length > 1 && (
        <div className={styles.indicadores}>
          {atracao.imagensExtras.map((_, index) => (
            <span
              key={index}
              className={`${styles.indicador} ${currentImageIndex === index ? styles.ativo : ''}`}
            ></span>
          ))}
        </div>
      )}

      <div className={styles.infoExtras}>
        <h3>Informações</h3>
        <ul>
          <li><strong>Endereço:</strong> {atracao.endereco}</li>
          <li><strong>Horário:</strong> {atracao.horario}</li>
          <li><strong>Contato:</strong> {atracao.contato}</li>
        </ul>
      </div>

      <iframe
        src={atracao.mapa}
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: '8px', marginTop: '1.5rem' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Link href="/atracoes" className={styles.voltar}>
        ← Voltar para atrações
      </Link>
    </div>
  );
}
