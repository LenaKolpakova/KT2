import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Quiet.</div>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Journal</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
