import styles from "./Button.module.scss";
import classNames from "classnames";

const defineBtnType = (btnType, text, className) => {
    if (btnType === "count") {
        return (
            <div className={classNames(className, styles.count)}>
                <button className={styles.minus}>-</button>
                <span className={styles.amount}>{text}</span>
                <button className={styles.plus}>+</button>
            </div>
        )
    } else if (btnType === "submit") {
        return (
            <button className={classNames(className, styles.submit)}>{text}</button>
        )
    } else if (btnType === "add") {
        return (
            <button className={classNames(className, styles.add)}>{text}</button>
        )
    } else if (btnType === "close") {
        return (
            <button className={styles.close_modal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="5.07422" y="5.28247" width="1" height="20" transform="rotate(-45 5.07422 5.28247)" />
                    <rect x="5.78125" y="19.4246" width="1" height="20" transform="rotate(-135 5.78125 19.4246)" />
                </svg>
            </button>
        )
    }
}

export const Button = ({ type, text }) => {
    return defineBtnType(type, text);
};  
