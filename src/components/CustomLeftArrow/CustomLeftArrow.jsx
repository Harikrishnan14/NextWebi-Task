import React from 'react'
import styles from './CustomLeftArrow.module.css'
import Arrow from '../../assets/images/arrow-black.png'

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className={styles.LeftArrow}
        >
            <img src={Arrow} alt="" />
        </button>
    )
}

export default CustomLeftArrow