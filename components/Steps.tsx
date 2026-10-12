import styles from './Steps.module.css';

const steps = [
  {
    num: '01',
    title: 'Осознанные ритуалы',
    text: 'Простые шаги. Чистые ингредиенты. Моменты, которые делают ваш день яснее и спокойнее.',
    img: '/step1.jpg',
  },
  {
    num: '02',
    title: 'Честные ингредиенты',
    text: 'Из проверенных источников, обжаренные с намерением раскрыть лучшее в каждом зерне.',
    img: '/step2.jpg',
    reverse: true,
  },
  {
    num: '03',
    title: 'Сделано с намерением',
    text: 'Каждая деталь отражает нашу страсть к качеству, дизайну и вневременной простоте.',
    img: '/step3.jpg',
  },
];

export default function Steps() {
  return (
    <section className={styles.section}>
      {steps.map((s) => (
        <div key={s.num} className={`${styles.step} ${s.reverse ? styles.reverse : ''}`}>
          <div className={styles.image}>
            <img src={s.img} alt="" />
          </div>
          <div>
            <div className={styles.num}>{s.num}</div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepText}>{s.text}</p>
            <a href="#" className={styles.link}>Узнать больше →</a>
          </div>
        </div>
      ))}
    </section>
  );
}
