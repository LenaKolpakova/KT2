import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>© 2025. Все права защищены.</div>
        <nav className={styles.links}>
          <a href="#">Политика</a>
          <a href="#">Условия</a>
          <a href="#">Доставка</a>
        </nav>
      </div>
    </footer>
  );
}
