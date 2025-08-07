import React from 'react'
import styles from './CustomRightArrow.module.css'
import Arrow from '../../assets/images/accordion-arrow.png'

const CustomRightArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className={styles.RightArrow}
        >
            <img src={Arrow} alt="" />
        </button>
    )
}

export default CustomRightArrow