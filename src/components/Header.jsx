'use client';
import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { Menu, Home, MapPin, User, Mail } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Raízes Locais</h1>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.showNav : ''}`}>
          <Link href="/" onClick={closeMenu}>
            <Home size={18} /> Início
          </Link>
          <Link href="#atracoes" onClick={closeMenu}>
            <MapPin size={18} /> Atrações
          </Link>
          <Link href="#sobre-nos" onClick={closeMenu}>
            <User size={18} /> Sobre Nós
          </Link>
          <Link href="#contato" onClick={closeMenu}>
            <Mail size={18} /> Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
