import styles from "./Order.module.scss";
import classNames from "classnames";
import { Button } from "../Button/Button";
import { Product } from "../Product/Product";

export const Order = () => (
  <div className={styles.order}>
    {/* <!--  order_collapsed --> */}
    <div className={styles.wrapper}>
      <div className={styles.wrap_tittle} role="button">
        <h3 className={styles.title}>Корзина</h3>
        <span className={styles.count}>4</span>
      </div>
      <div className={styles.wrap_list}>
        <ul className={styles.list}>
          <li className={styles.wrap_product_item}>
            <Product purpose="order"/>
          </li>
          <li className={styles.wrap_product_item}>
          <Product purpose="order"/>
          </li>
          <li className={styles.wrap_product_item}>
          <Product purpose="order"/>
          </li>
        </ul>
        <div className={styles.total}>
          <p>Итого</p>
          <p>
            1279<span className="currency">₴</span>
          </p>
        </div>

        <Button type="submit" className ={styles.submit} text="Оформить заказ"></Button>
        <div className={styles.footer}>
          <p className={styles.apeal}>Бесплатная доставка</p>
          <button className={styles.collapse}>Свернуть</button>
        </div>
      </div>
    </div>
  </div>
);
