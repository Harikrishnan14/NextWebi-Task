import styles from './Header.module.css'
import Logo from '../../assets/images/logo.png'
import DownArrow from '../../assets/images/down-arrow.png'

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.logo}>
                <img src={Logo} alt="" />
            </div>
            <div className={styles.dropdowns}>
                {[
                    'Company',
                    'Services',
                    'Hire developers',
                    'Solutions',
                    'Technologies',
                    'Our Work'
                ].map((item, idx) => (
                    <div key={idx}>
                        <span className={styles.dropdownItems}>
                            {item}
                            {item !== 'Our Work' && <img src={DownArrow} alt="" />}
                        </span>
                    </div>
                ))}
            </div>
            <div>
                <button className={styles.contactBtn}>Contact Us</button>
            </div>
        </div>
    )
}

export default Header