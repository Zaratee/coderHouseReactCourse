import React, { useState } from 'react'
import CartWidget from '../cart-widget';
import styles from "./styles.module.css";

const menuSections = [
    {
        name: "INICIO"
    },
    {
        name: "AGUACATES"
    },
    {
        name: "NOSOTROS"
    },
    {
        name: "CONTACTO"
    },
]

function NavBar() {
    const [selection, setSelection] = useState(0)
    return (
        <div className={styles.navBarContainer}>
            <div className={styles.greenLine}><div className={styles.brownLine}></div></div>
            <div className={styles.wrapper}>
                <div className={styles.logoContainer}>
                    <img src='/logo.png' />
                </div>
                <div className={styles.btnContainer}>
                    <div className={styles.btnMenuContainer}>
                        {/* <div className={`${styles.buttonMenu} ${styles.selectedButtonMenu}`}> INICIO</div> */}
                        {
                            menuSections.map((section, index) => {
                                return (
                                    <div onClick={() => setSelection(index)} className={`${styles.buttonMenu} ${index == selection && styles.selectedButtonMenu}`}> {section.name}</div>
                                )
                            })

                        }

                    </div>
                    <CartWidget />
                </div>

            </div>
            <div className={styles.greenLine}><div className={styles.brownLine}></div></div>
        </div>
    )
}

export default NavBar