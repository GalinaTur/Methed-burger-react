import { Container } from "../Container/Container";
import styles from "./Catalog.module.scss";
import classNames from "classnames";
import { Order } from "../Order/Order";
import { Product } from "../Product/Product";

export const Catalog = () => (
  <section className={styles.catalog}>
    <Container className={styles.container}>
      <Order />
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Бургеры</h2>
        <div className={styles.wrap_list}>
          <ul className={styles.list}>
            <li className={styles.product_items}>
              <Product purpose="catalog"/>
            </li>
            <li className={styles.product_items}>
            <Product purpose="catalog"/>
            </li>
            <li className={styles.product_items}>
            <Product purpose="catalog"/>
            </li>
            <li className={styles.product_items}>
            <Product purpose="catalog"/>
            </li>
            <li className={styles.product_items}>
            <Product purpose="catalog"/>
            </li>
            <li className={styles.product_items}>
            <Product purpose="catalog"/>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </section>
);
