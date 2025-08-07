import React from 'react'
import styles from './One.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainBg from '../../assets/images/main-bg.jpg'
import RightArrow from '../../assets/images/accordion-arrow.png'

const CustomDot = ({ onClick, active }) => (
    <li
        className={`${styles.customDot} ${active ? styles.activeDot : ''}`}
        onClick={onClick}
    />
)

const CustomLeftArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className={styles.LeftArrow}
    >
        <img src={RightArrow} alt="" />
    </button>
)

const CustomRightArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className={styles.RightArrow}
    >
        <img src={RightArrow} alt="" />
    </button>
)

const One = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Carousel
            responsive={responsive}
            arrows={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            customDot={<CustomDot />}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            showDots={true}
        >
            {Array.from({ length: 3 }).map((_, index) => (
                <div className={styles.Main} key={index.toString()}>
                    <div className={styles.imageWrapper}>
                        <img src={MainBg} alt='' />
                        <div className={styles.gradientOverlay}></div>
                    </div>
                    <div className={styles.contents}>
                        <h1>Offshore Software<br />Development Company in<br />New York</h1>
                        <p>At Nextwebi, we provide agile result-oriented offshore software development services for<br />companies ranging from startups to enterprises to help you keep up with constant<br />technological evolution. We deploy a team of expert developers</p>
                        <div className={styles.btnGrp}>
                            <button className={styles.getInTouchBtn}>Get in Touch</button>
                            <button className={styles.ourWorksBtn}>Our Works</button>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

export default One