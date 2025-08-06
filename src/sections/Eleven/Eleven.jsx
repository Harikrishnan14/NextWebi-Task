import React from 'react'
import styles from './Eleven.module.css'
import BlogCard from '../../components/BlogCard/BlogCard'
import Blog1 from '../../assets/images/blog-1.png'
import Blog2 from '../../assets/images/blog-2.png'
import Blog3 from '../../assets/images/blog-3.png'

const Eleven = () => {

    const blogData = [
        {
            id: 1,
            title: "AI in Healthcare",
            subtext: "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
            image: Blog1
        },
        {
            id: 2,
            title: "AI Ethics",
            subtext: "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
            image: Blog2
        },
        {
            id: 3,
            title: "Machine Learning Explained",
            subtext: "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode",
            image: Blog3
        },
    ]

    return (
        <div className={styles.Eleven}>
            <div className={styles.head}>
                <h2>Related Blogs</h2>
            </div>
            <div className={styles.blogs}>
                {blogData.map((data) => (
                    <BlogCard data={data} key={data.id.toString()} />
                ))}
            </div>
        </div>
    )
}

export default Eleven