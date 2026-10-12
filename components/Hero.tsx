import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Тихие моменты.<br />Сделано с заботой.
        </h1>
        <p className={styles.subtitle}>
          Продуманные ритуалы, вдохновлённые природой —
          для вашей ежедневной паузы.
        </p>
        <button className={styles.cta}>
          Смотреть коллекцию →
        </button>
      </div>
      <div className={styles.image}>
        <img src="/hero.jpg" alt="" />
      </div>
    </section>
  );
}
