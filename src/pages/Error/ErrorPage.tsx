import styles from "./ErrorPage.module.css";

export const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1 className={styles.title}>Ой!</h1>
        <p className={styles.description}>Страница не найдена</p>
      </div>
    </div>
  );
};
