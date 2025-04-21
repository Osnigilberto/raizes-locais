'use client';
import styles from './contato.module.css';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contato() {
  return (
    <section className={styles.contact} id="contato">
      <motion.h3
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Fale Conosco
      </motion.h3>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Tem dúvidas ou sugestões? Entre em contato conosco, teremos o prazer em responder!
      </motion.p>

      <motion.div
        className={styles.contactForm}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.h4
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Envie-nos uma mensagem
        </motion.h4>

        <form>
          <motion.div
            className={styles.formGroup}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <input type="text" name="name" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu e-mail" required />
          </motion.div>

          <motion.textarea
            name="message"
            placeholder="Sua mensagem"
            required
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className={styles.submitButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Enviar
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
