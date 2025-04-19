import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Bem-vindo ao Raízes Locais 🌿</h2>
      <p className={styles.description}>
        Explore cachoeiras, trilhas, alambiques e outros tesouros escondidos dos pequenos municípios.
      </p>
    </section>
  );
}
