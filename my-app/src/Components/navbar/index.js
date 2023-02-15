import React, { useState } from 'react'
import CartWidget from '../cart-widget';
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

const menuSections = [
    {
        name: "INICIO",
        path: "/"
    },
    {
        name: "AGUACATES",
        path: "/Products"
    },
    {
        name: "NOSOTROS",
        path: "/About"
    },
    {
        name: "CONTACTO",
        path: "/Contact"
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
                                    <NavLink to={section.path} onClick={() => setSelection(index)} className={`${styles.buttonMenu} ${index == selection && styles.selectedButtonMenu}`}> {section.name}</NavLink>
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