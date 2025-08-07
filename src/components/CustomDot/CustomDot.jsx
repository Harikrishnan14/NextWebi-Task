import React from 'react'
import styles from './CustomDot.module.css'

const CustomDot = ({ onClick, active }) => {
    return (
        <li
            className={`${styles.customDot} ${active ? styles.activeDot : ''}`}
            onClick={onClick}
        />
    )
}

export default CustomDot