import style from './Section.module.css';

export default function Section({ children, name }) {
  return (
    <section className={style.section}>
      <div className={style.sectionTitle}>
        <h2>{name}</h2>
      </div>
      {children}
    </section>
  );
}
