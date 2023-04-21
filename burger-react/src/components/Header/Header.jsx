import { Container } from "../Container/Container";
import styles from "./Header.module.scss";
import classNames from "classnames";
import logoSvg from "../../assets/img/sprite.svg"

export const Header = () => (
  <header className={styles.header}>
    <Container className={styles.container}>
    <svg className={styles.logo} viewBox="0 0 199 44" role="img" aria-roledescription="Логотип YourMeal">
                <use href={`${logoSvg}#logo`}/>
            </svg>

      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Только самые{" "}
          <span className={classNames(styles.title, styles.title_red)}>
            сочные бургеры!
          </span>
        </h1>
        <p className={styles.subtitle}>
          Бесплатная доставка от 599<span className="currency">₴</span>
        </p>
      </div>
    </Container>
  </header>
);
