import React from 'react'
import styles from './Three.module.css'
import Bg1 from '../../assets/images/section-three-bg-1.png'
import Bg2 from '../../assets/images/section-three-bg-2.png'
import Card from '../../components/Card/Card'

const Three = () => {

    const cardData = [
        {
            id: 1,
            title: "Offshore software development consulting",
            content: "Customized offshore software development consulting service to help you enhance your digital landscape with the latest technology. Our team of expert offshore software developers will help you integrate the latest technologies with a strategized roadmap and plan."
        },
        {
            id: 2,
            title: "Digital Transformation",
            content: "Transform your digital landscape with our professional digital transformation services which strategically uses digital technologies to radically improve or reinvent a company’s business processes, customer experiences, and culture."
        },
        {
            id: 3,
            title: "Web Development",
            content: "Enhance your business agility with web application development solutions delivering an intuitive digital experience. Our team has significant experience in handling multiple types of offshore custom software development projects that will help you transform your digital landscape and augment sales."
        },
        {
            id: 4,
            title: "Offshore software development consulting",
            content: "Customized offshore software development consulting service to help you enhance your digital landscape with the latest technology. Our team of expert offshore software developers will help you integrate the latest technologies with a strategized roadmap and plan."
        },
        {
            id: 5,
            title: "Digital Transformation",
            content: "Transform your digital landscape with our professional digital transformation services which strategically uses digital technologies to radically improve or reinvent a company’s business processes, customer experiences, and culture."
        },
        {
            id: 6,
            title: "Web Development",
            content: "Enhance your business agility with web application development solutions delivering an intuitive digital experience. Our team has significant experience in handling multiple types of offshore custom software development projects that will help you transform your digital landscape and augment sales."
        },
    ]

    return (
        <div
            className={styles.Three}
            style={{
                backgroundImage: `url(${Bg1}), url(${Bg2})`,
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundPosition: 'top right, bottom left',
                backgroundSize: 'contain, contain'
            }}
        >
            <div className={styles.first}>
                <h2>Output-Driven Offshore Software<br />Development Centre</h2>
                <p>Offshore development services refers to the practice of hiring a remote team or a software development<br />company in a different company to help reduce development costs</p>
            </div>
            <div className={styles.grid}>
                {cardData.map((data) => (
                    <Card data={data} key={data.id.toString()} />
                ))}
            </div>
        </div>
    )
}

export default Three