import React from 'react'
import styles from './Card.module.css'

const Card = ({ data }) => {
    return (
        <div className={styles.Card}>
            <h6>{data.title}</h6>
            <p>{data.content}</p>
        </div>
    )
}

export default Card