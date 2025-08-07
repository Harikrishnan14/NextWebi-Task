import React from 'react'
import styles from './Nine.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomLeftArrow from '../../components/CustomLeftArrow/CustomLeftArrow';
import CustomRightArrow from '../../components/CustomRightArrow/CustomRightArrow';
import CustomDot from '../../components/CustomDot/CustomDot';
import Quote from '../../assets/images/quote.png'
import Avatar from '../../assets/images/avatar.png'
import CompanyLogo from '../../assets/images/company-logo.png'

const Nine = () => {

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
        <div className={styles.Nine}>
            <div className={styles.head}>
                <h2>Hear It from Those Who Matter Most</h2>
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
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div className={styles.carousalItemWrapper}>
                            <div className={styles.carousalItem} key={index}>
                                <img src={Quote} alt="" />
                                <p>I wanted to redesigning and revamp the website of my institution. I contacted Nextwebi and they understood the vision of an organization and through several discussions and timely suggestions, the website was delivered and deployed successfully. Nextwebi, Without a doubt they have what it takes to make a great web application, not to mention with a competitive price too. Now on seeing the end product I am satisfied and know that the web app is in safe hands. Thank you to the entire team.</p>
                                <div className={styles.hr}></div>
                                <div className={styles.info}>
                                    <div className={styles.infoFirst}>
                                        <img src={CompanyLogo} alt="" />
                                    </div>
                                    <div className={styles.infoSecond}>
                                        <img src={Avatar} alt="" />
                                        <div>
                                            <span className={styles.name}>Qenowned & D Firm</span>
                                            <span className={styles.role}>Team Lead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Nine