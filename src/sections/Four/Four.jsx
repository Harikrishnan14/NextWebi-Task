import React from 'react'
import styles from './Four.module.css'
import section2 from '../../assets/images/section2.png'

const Four = () => {
    return (
        <div className={styles.Four}>
            <div className={styles.innerFirst}>
                <div className={styles.head}>
                    <h2>Trusted by Startups and Enterprises across 20+ Nations</h2>
                    <p>Nextwebi software development team understands your business needs and suggests the right technology to build scalable software solutions. We work as a long-term technology partner with our customers and our approach ensures that every project alignswith their strategic business goals, we emphasize scalabality, security and performance</p>
                    <span>We are commited to delivering high-quality, cost-effective solutions on time, ensuring you achieve maximum value</span>
                </div>
                <div className={styles.stats}>
                    <div className={styles.statsInner}>
                        <span className={styles.number}>9+</span>
                        <span className={styles.text}>Years in <br /> business</span>
                    </div>
                    <div className={styles.statsInner}>
                        <span className={styles.number}>1600+</span>
                        <span className={styles.text}>Projects <br /> delivered</span>
                    </div>
                    <div className={styles.statsInner}>
                        <span className={styles.number}>600+</span>
                        <span className={styles.text}>Client <br /> relationships</span>
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.badges}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div className={styles.badge} key={index.toString()}>
                            Badge
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.innerSecond}>
                <img src={section2} alt="" />
            </div>
        </div>
    )
}

export default Four