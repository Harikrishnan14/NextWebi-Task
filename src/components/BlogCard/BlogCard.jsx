import React from 'react'
import styles from './BlogCard.module.css'
import Arrow from '../../assets/images/top-right-blue-arrow.png'

const BlogCard = ({ data }) => {
    return (
        <div className={styles.BlogCard}>
            <div className={styles.imageWrapper}>
                <img src={data.image} alt="" />
                <div className={styles.imageOverlay} />
            </div>
            <div className={styles.contents}>
                <h6>{data.title}</h6>
                <p>{data?.subtext}</p>
                <button className={styles.readMoreBtn}>
                    Read more
                    <img src={Arrow} alt="" />
                </button>
            </div>
        </div>
    )
}

export default BlogCard