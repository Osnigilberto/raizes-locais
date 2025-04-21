'use client';
import styles from './Footer.module.css';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.footerContent}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.footerLeft}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <small>
            © {new Date().getFullYear()} Raízes Locais. Todos os direitos reservados.
          </small>
          <small>Conectando você às raízes do Brasil 🌱</small>
          <small>
            Desenvolvido por{' '}
            <a
              href="https://osni-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Osni Gilberto
            </a>
          </small>
        </motion.div>

        <motion.div
          className={styles.footerRight}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className={styles.contactItem}>
            <strong>Email:</strong>
            <a href="mailto:contato@raizeslocais.com">
              <Mail size={18} /> contato@raizeslocais.com
            </a>
          </div>
          <div className={styles.contactItem}>
            <strong>Telefone:</strong>
            <a href="tel:+5511999999999">
              <Phone size={18} /> (11) 99999-9999
            </a>
          </div>
          <div className={styles.contactItem}>
            <strong>Redes Sociais:</strong>
            <a
              href="https://www.instagram.com/raizeslocais"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href="https://www.facebook.com/raizeslocais"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} /> Facebook
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
