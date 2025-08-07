import React from 'react'
import styles from './Five.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomLeftArrow from '../../components/CustomLeftArrow/CustomLeftArrow';
import CustomRightArrow from '../../components/CustomRightArrow/CustomRightArrow';
import CarousalImage from '../../assets/images/five-carousal.jpg'
import CustomDot from '../../components/CustomDot/CustomDot';

const Five = () => {

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
        <div className={styles.Five}>
            <div className={styles.head}>
                <h2>Where great ideas became real results</h2>
                <p>Offshore development services refers to the practice of hiring a remote team or a software development<br />company in a different company to help reduce development costs</p>
            </div>
            <div className={styles.carousal}>
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
                    renderDotsOutside
                >
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div className={styles.carousalItem} key={index}>
                            <div className={styles.carousalItemFirst}>
                                <h4>Web application<br />development for a real<br />estate company in dubai</h4>
                                <p>Our client, a real estate agency based in Dubai, recognized the growing demand for a streamlined platform that would facilitate the process of buying and renting properties in Dubai.</p>
                            </div>
                            <div className={styles.carousalItemSecond}>
                                <img src={CarousalImage} alt="" />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Five