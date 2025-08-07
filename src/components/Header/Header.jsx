import styles from './Header.module.css'
import Logo from '../../assets/images/logo.png'
import DownArrow from '../../assets/images/down-arrow.png'
import { useEffect, useRef } from 'react';

const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return;

            if (window.scrollY > 0) {
                headerRef.current.classList.add(styles.glass);
            } else {
                headerRef.current.classList.remove(styles.glass);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.HeaderMain} ref={headerRef}>
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
                        <div key={idx} className={styles.dropdownWrapper}>
                            <span className={styles.dropdownItems}>
                                {item}
                                {item !== 'Our Work' && <img src={DownArrow} alt="" />}
                            </span>

                            {item !== 'Our Work' && (
                                <div className={styles.dropdownMenu}>
                                    <p>Option 1</p>
                                    <p>Option 2</p>
                                    <p>Option 3</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    <button className={styles.contactBtn}>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Header