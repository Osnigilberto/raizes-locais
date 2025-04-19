import '../app/globals.css';
import styles from './layout.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Raízes Locais',
  description: 'Descubra pontos turísticos esquecidos de cidades pequenas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={styles.body}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
