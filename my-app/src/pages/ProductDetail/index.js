import React from 'react'
import { useParams } from "react-router"
import styles from "./styles.module.css";

const allProducts = [
    {
        name: 'BACON',
        imgPath: '/bacon.jpeg',
        description: 'A green-skinned variety of good quality, the Bacon is a medium sized fruit available late fall into spring.'
    },
    {
        name: 'FUERTE',
        imgPath: '/fuerte.jpeg',
        description: 'Harvested late fall through spring, the Fuerte is the original high quality California Avocado.'
    },
    {
        name: 'GEM',
        imgPath: '/gem.jpeg',
        description: 'A thick skinned and easily peeled avocado with rich, nutty flavor and similar ripening characteristics of the popular Hass Avocado; available spring though summer.'
    },
    {
        name: 'GWEN',
        imgPath: '/gwen.jpeg',
        description: 'Gwen is similar in apparience, taste and texture to Hass, but slightly larger.'
    },
]

const ProductDetail = () => {

    let { id } = useParams([]);
    const product = allProducts[id];
    return (
        <div>
            <div className={styles.product}>
                <img src={allProducts[id].imgPath}></img>
                <h1>{allProducts[id].name}</h1>
                <p>{allProducts[id].description}</p>
            </div>
        </div>
    )
}

export default ProductDetail