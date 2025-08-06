import React from 'react'
import styles from './Six.module.css'
import Company1 from '../../assets/images/company-logo-1.png'
import Company2 from '../../assets/images/company-logo-2.png'
import Company3 from '../../assets/images/company-logo-3.png'
import Company4 from '../../assets/images/company-logo-4.png'
import Company5 from '../../assets/images/company-logo-5.png'
import Marquee from "react-fast-marquee";

const Six = () => {

    const brands = [Company1, Company2, Company3, Company4, Company5];

    return (
        <div className={styles.Six}>
            <h4 className={styles.title}>Trusted by 100+ Clients Globally</h4>
            <Marquee pauseOnHover={true} speed={60} gradient={false}>
                {brands.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Brand ${index}`}
                        className={styles.brandLogo}
                    />
                ))}
            </Marquee>
        </div>
    )
}

export default Six