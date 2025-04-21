'use client';
import styles from './sobre-nos.module.css'

export default function SobreNos() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Sobre Nós</h2>
      <p className={styles.description}>
        O Raízes Locais é uma plataforma dedicada a conectar as pessoas com atrações naturais e culturais de pequenos municípios.
        Nosso objetivo é promover o turismo consciente e ajudar as comunidades locais a se destacarem no cenário turístico.
      </p>
      <div className={styles.team}>
        <h3>Nosso Time</h3>
        <div className={styles.teamMember}>
          <img src="/team-member.png" alt="Membro da equipe" className={styles.teamImage} />
          <p>RootedTech - Fundador e desenvolvedor</p>
        </div>
      </div>
    </section>
  );
}
