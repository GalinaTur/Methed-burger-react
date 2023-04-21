import styles from "./Product.module.scss";
import classNames from "classnames";
import { Button } from "../Button/Button";
import img from "../../assets/img/burgerCheese1.jpg";

const defineProductItemStyle = (purpose) => {
  if (purpose === "order") {
    return (
      <article className={styles.productItem_order}>
        <a href="" className={styles.link}>
        <div className={styles.wrapper}>
          <img src={img} alt="Супер сырный" className={styles.img} />
          <div className={styles.description}>
            <h4 className={styles.title}>Супер сырный</h4>
            <p className={styles.weight}>
              512г
            </p>
            <p className={styles.price}>
              550<span className="currency">₴</span>
            </p>
          </div>
          <Button type="count" className={styles.count} text="1"/>
          </div>
        </a>
      </article>
    )
  } else if (purpose === "catalog") {
    return (
      <article className={styles.productItem_catalog}>
        <a href="" className={styles.link}>
          <img src={img} alt="Мясная бомба" className={styles.img} />
          <p className={styles.price}>
            689<span className="currency">₴</span>
          </p>
          <p className={styles.title}>
            Мясная бомба
          </p>
          <p className={styles.weight}>
            520г
          </p>
        </a>
        <Button type="add" text="Добавить" />
      </article>
    )
  }
}

export const Product = ({ purpose }) => {
  return defineProductItemStyle(purpose);
};
