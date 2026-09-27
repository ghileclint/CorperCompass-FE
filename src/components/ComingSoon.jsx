import styles from "../css/comingSoon.module.css";

export default function ComingSoon({ title }) {
  return (
    <main className={styles.wrap}>
      <h1>{title}</h1>
      <p>This section is still under construction. Check back soon!</p>
    </main>
  );
}
