import React from 'react'
import styles from './Twelve.module.css'
import bgImage from '../../assets/images/final-section-bg.jpg';
import India from '../../assets/images/flag-india.png'
import USA from '../../assets/images/flag-usa.png'
import UAE from '../../assets/images/flag-uae.png'

const Twelve = () => {

    const addressData = [
        {
            id: 1,
            country: "India",
            address: `4th Floor, 32/1, Mpark, NCPR Industrial\nLayout, Doddanekundi Industrial Area 2,\nSeetharampalya, Mahadevapura, Bengaluru,\nKarnataka 560048.`,
            flag: India
        },
        {
            id: 2,
            country: "USA",
            address: `188 Spear st #350,\nSan Francisco, CA 94105\nUnited States`,
            flag: USA
        },
        {
            id: 3,
            country: "India",
            address: `Office No.2042, ABN Group, 20th Floor,\nBurjuman Business Tower,\nAl Mankhool, Burdubai Dubai.`,
            flag: UAE
        },
    ]

    return (
        <div
            className={styles.Twelve}
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '997px'
            }}
        >
            <div className={styles.contents}>
                <div className={styles.head}>
                    <span>Get in Touch</span>
                    <h3>Connect for Excellence Your Gateway to Exceptional Solutions.</h3>
                </div>
                <div className={styles.address}>
                    {addressData?.map((address) => (
                        <div className={styles.gridItem} key={address.id.toString()}>
                            <img src={address.flag} alt="" />
                            <h6>{address.country}</h6>
                            <p>{address.address}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.inputBox}>
                <h5>Your Vision, Our Mission: Let's Shape Success Together.</h5>
                <form action="" className={styles.form}>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Company Name' />
                    <input type="text" placeholder='Email Address' />
                    <input type="text" placeholder='Contact Number' />
                    <textarea name="" id="" placeholder='Describe Your Requirement'></textarea>
                    <div className={styles.checkbox}>
                        <div className={styles.checkboxFirst}>
                            <input type="checkbox" name="get-portfolio" id="get-portfolio" />
                            <label htmlFor="get-portfolio">Click here to quickly get portfolio in your inbox</label>
                        </div>
                        <div className={styles.checkboxSecond}>
                            <span>5 + 3</span>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <button>Request Proposal</button>
                </form>
            </div>
        </div>
    )
}

export default Twelve