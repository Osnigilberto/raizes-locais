import styles from './page.module.css';

const atracoes = [
  {
    id: 1,
    nome: 'Cachoeira do Vale Verde',
    descricao: 'Uma bela queda d’água escondida no meio da mata atlântica.',
    imagem: '/cachoeira.jpg',
  },
  {
    id: 2,
    nome: 'Mirante da Serra',
    descricao: 'Vista panorâmica de tirar o fôlego.',
    imagem: '/mirante.jpg',
  },
  {
    id: 3,
    nome: 'Alambique do Zé',
    descricao: 'Tradição e sabor na produção de cachaça artesanal.',
    imagem: '/alambique.jpg',
  },
];

export default function AtracoesPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Atrações de Antônio Carlos</h2>
      <div className={styles.grid}>
        {atracoes.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.imagem} alt={item.nome} className={styles.imagem} />
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
