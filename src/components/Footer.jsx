import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small>© {new Date().getFullYear()} Raízes Locais. Todos os direitos reservados.</small>
    </footer>
  );
}
