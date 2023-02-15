import React from 'react'
import { allProducts } from '../../products';
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <div className={styles.container}>
      <h1>Productos Disponibles</h1>

      <div className={styles.wrapper}>
        {
          allProducts.map((product, index) => {
            return (
              <NavLink to={`/ProductDetail/${index}`} className={styles.productContainer}>
                <div className={styles.imgContainer}>
                  <img src={product.imgPath}></img>
                </div>
                <p>{product.name}</p>
              </NavLink>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products