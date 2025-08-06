import React from 'react'
import styles from './Second.module.css'
import section2 from '../../assets/images/section2.png'

const Second = () => {
    return (
        <div className={styles.SecondMain}>
            <div className={styles.innerFirst}>
                <div className={styles.first}>
                    <h2>Output-Driven Offshore Software Development Centre</h2>
                    <p>Offshore development services refers to the practice of hiring a remote team or a software development company</p>
                </div>
                <div className={styles.second}>
                    <p className={styles.firstPara}>Offshore development services refers to the practice of hiring a remote team or a software development company in a different company to help reduce development costs Offshore development services refers to the practice of hiring a remote team or a software development company  Offshore development services refers to the practice of hiring a remote team or a software development company in a different company to help reduce development costs Offshore development services refers to the practice of hiring a remote team or a software</p>
                    <p className={styles.secondPara}>development costs Offshore development services refers to the practice of hiring a remote team or a software development company in a different company </p>
                </div>
            </div>
            <div className={styles.innerSecond}>
                <img src={section2} alt="" />
            </div>
        </div>
    )
}

export default Second