'use client';
import styles from './page.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SobreNos from '@/pages/sobre-nos';
import Contato from '@/pages/contato';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h2 className={styles.title}>Bem-vindo ao Raízes Locais 🌿</h2>
        <p className={styles.description}>
          Explore cachoeiras, trilhas, alambiques e outros tesouros escondidos dos pequenos municípios.
        </p>
        <Link href="/atracoes" className={styles.ctaButton}>
          Ver atrações
        </Link>
      </section>

      <section id="sobre-nos" className={styles.about}>
        <SobreNos />
      </section>

      <section id="atracoes" className={styles.attractions}>
        <motion.h3
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Destaques
        </motion.h3>

        <div className={styles.cards}>
          {[ 
            {
              id: 1,
              img: '/cachoeira.jpg',
              title: 'Cachoeira do Vale Verde',
              desc: 'Natureza exuberante em trilhas escondidas.',
              link: '/atracoes/1',
            },
            {
              id: 2,
              img: '/mirante.jpg',
              title: 'Mirante da Serra',
              desc: 'Vista de tirar o fôlego no alto da montanha.',
              link: '/atracoes/2',
            },
            {
              id: 3,
              img: '/alambique.jpg',
              title: 'Alambique do Zé',
              desc: 'Cachaça artesanal e história local.',
              link: '/atracoes/3',
            }
          ].map((card, index) => (
            <motion.div
              key={card.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={card.img} alt={card.title} />
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
              <Link href={card.link}>Ver mais</Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contato" className={styles.contact}>
        <Contato />
      </section>
    </>
  );
}
