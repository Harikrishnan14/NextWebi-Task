import React, { useState } from 'react'
import styles from './Ten.module.css'
import HTML from '../../assets/images/html-logo.png'
import CSS from '../../assets/images/css-logo.png'
import Vue from '../../assets/images/vue-logo.png'
import Angular from '../../assets/images/angular-logo.png'
import Js from '../../assets/images/js-logo.png'
import ReactLogo from '../../assets/images/react-logo.png'
import Node from '../../assets/images/node-logo.png'
import Express from '../../assets/images/express-logo.png'
import Django from '../../assets/images/django-logo.png'
import Flask from '../../assets/images/flask-logo.png'
import Flutter from '../../assets/images/flutter-logo.png'
import Swift from '../../assets/images/swift-logo.png'
import Kotlin from '../../assets/images/kotlin-logo.png'
import Hadoop from '../../assets/images/hadoop-logo.png'
import Spark from '../../assets/images/spark-logo.png'
import Kafka from '../../assets/images/kafka-logo.png'

const Ten = () => {

    const [selectedCategory, setSelectedCategory] = useState("Frontend Programming Language")

    const data = {
        'Frontend Programming Language': [
            { label: 'HTML5', icon: HTML },
            { label: 'CSS3', icon: CSS },
            { label: 'JavaScript', icon: Js },
            { label: 'React', icon: ReactLogo },
            { label: 'Vue', icon: Vue },
            { label: 'Angular', icon: Angular },
        ],
        'Backend Programming Language': [
            { label: 'Node.js', icon: Node },
            { label: 'Express', icon: Express },
            { label: 'Django', icon: Django },
            { label: 'Flask', icon: Flask },
        ],
        'Mobile': [
            { label: 'React Native', icon: ReactLogo },
            { label: 'Flutter', icon: Flutter },
            { label: 'Swift', icon: Swift },
            { label: 'Kotlin', icon: Kotlin },
        ],
        'Big Data': [
            { label: 'Hadoop', icon: Hadoop },
            { label: 'Spark', icon: Spark },
            { label: 'Kafka', icon: Kafka },
        ]
    }

    return (
        <div className={styles.Ten}>
            <div className={styles.head}>
                <h2>Absolutely, We have thoroughly mastered the technologies you prefer.</h2>
                <p className={styles.aaa}>Our exceptionally skilled IT specialists are proficient in both classic and modern programming languages, as well as frameworks.<br />We aim for excellence, choosing only the top-tier candidates when selecting our IT specialists.</p>
            </div>
            <div className={styles.contents}>
                <div className={styles.left}>
                    <button
                        onClick={() => setSelectedCategory("Frontend Programming Language")}
                        className={`${styles.leftBtn} ${selectedCategory === "Frontend Programming Language" ? styles.activeBtn : ""}`}
                    >
                        Frontend Programming Language
                    </button>
                    <div className={styles.divider} />
                    <button
                        onClick={() => setSelectedCategory("Backend Programming Language")}
                        className={`${styles.leftBtn} ${selectedCategory === "Backend Programming Language" ? styles.activeBtn : ""}`}
                    >
                        Backend Programming Language
                    </button>
                    <div className={styles.divider} />
                    <button
                        onClick={() => setSelectedCategory("Mobile")}
                        className={`${styles.leftBtn} ${selectedCategory === "Mobile" ? styles.activeBtn : ""}`}
                    >
                        Mobile
                    </button>
                    <div className={styles.divider} />
                    <button
                        onClick={() => setSelectedCategory("Big Data")}
                        className={`${styles.leftBtn} ${selectedCategory === "Big Data" ? styles.activeBtn : ""}`}
                    >
                        Big Data
                    </button>
                </div>
                <div className={styles.right}>
                    {data[selectedCategory].map((item, index) => (
                        <div className={styles.item} key={index.toString()}>
                            <img src={item?.icon} alt="" />
                            <span>{item?.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Ten