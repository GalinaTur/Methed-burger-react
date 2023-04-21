import { Container } from "../Container/Container";
import styles from "./Navigation.module.scss";
import classNames from "classnames";

export const Navigation = () => (
  <nav className={styles.navigation}>
  <Container className= {styles.container}>
  <ul className= {styles.list}>
      <li className= {styles.item}>
          <a href="#" className={classNames(styles.btn, styles.btn_burgers, styles.btn_active)}>Бургеры</a>
      </li>
      <li className={styles.item}>
          <a href="#" className={classNames(styles.btn, styles.btn_snacks)}>Закуски</a>
      </li>
      <li className={styles.item}>
          <a href="#" className={classNames(styles.btn, styles.btn_hotdogs)}>Хот-доги</a>
      </li>
      <li className={styles.item}>
          <a href="#" className={classNames(styles.btn, styles.btn_combo)}>Комбо</a>
      </li>
      <li className={styles.item}>
          <a href="#" className={classNames(styles.btn, styles.btn_shawarma)}>Шаурма</a>
      </li>
      <li className={styles.item}>
          <a href="#" className={classNames(styles.btn, styles.btn_pizza)}>Пицца</a>
      </li>
      <li className={styles.item}>
          <a href="#" className={classNames(styles.btn, styles.btn_wok)}>Вок</a>
      </li>
      <li className={styles.item}>
          <a href="#" className={classNames(styles.btn, styles.btn_desserts)}>Десерты</a>
      </li>
      <li className={styles.item}>
          <a href="#" className={classNames(styles.btn, styles.btn_sauces)}>Соусы</a>
      </li>
  </ul>
</Container>
        </nav>
);
