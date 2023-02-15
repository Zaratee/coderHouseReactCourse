import React from 'react'
import styles from "./styles.module.css";

const CartWidget = () => {
    return (
        <div className={styles.cartIconContainer}>
            <div className={styles.badge}>1</div>
            <img src='/cartIcon.png' />
        </div>
    )
}

export default CartWidget