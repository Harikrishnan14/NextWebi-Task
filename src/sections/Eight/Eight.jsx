import React from 'react'
import styles from './Eight.module.css'
import * as Accordion from '@radix-ui/react-accordion';
import DownArrow from '../../assets/images/accordion-arrow.png'

const Eight = () => {

    const accordionData = [
        {
            id: 1,
            title: "Is it possible to enable incoming email in a SharePoint Online document library?",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eaque repellat enim cupiditate dicta! Quis adipisci blanditiis tempore minima commodi, explicabo deleniti alias? Blanditiis explicabo voluptatibus aut possimus repudiandae. Impedit nam molestias, officiis, debitis, sed vel velit corrupti consequatur quia doloremque veniam incidunt eius similique."
        },
        {
            id: 2,
            title: "Where can I get more details about your offshore development services?",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eaque repellat enim cupiditate dicta! Quis adipisci blanditiis tempore minima commodi, explicabo deleniti alias? Blanditiis explicabo voluptatibus aut possimus repudiandae. Impedit nam molestias, officiis, debitis, sed vel velit corrupti consequatur quia doloremque veniam incidunt eius similique."
        },
        {
            id: 3,
            title: "Can I change the developer?",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eaque repellat enim cupiditate dicta! Quis adipisci blanditiis tempore minima commodi, explicabo deleniti alias? Blanditiis explicabo voluptatibus aut possimus repudiandae. Impedit nam molestias, officiis, debitis, sed vel velit corrupti consequatur quia doloremque veniam incidunt eius similique."
        },
        {
            id: 4,
            title: "Will I get access directly to my resources?",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eaque repellat enim cupiditate dicta! Quis adipisci blanditiis tempore minima commodi, explicabo deleniti alias? Blanditiis explicabo voluptatibus aut possimus repudiandae. Impedit nam molestias, officiis, debitis, sed vel velit corrupti consequatur quia doloremque veniam incidunt eius similique."
        },
        {
            id: 5,
            title: "Where is your offshore development center located?",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eaque repellat enim cupiditate dicta! Quis adipisci blanditiis tempore minima commodi, explicabo deleniti alias? Blanditiis explicabo voluptatibus aut possimus repudiandae. Impedit nam molestias, officiis, debitis, sed vel velit corrupti consequatur quia doloremque veniam incidunt eius similique."
        }
    ]

    return (
        <div className={styles.Eight}>
            <div className={styles.head}>
                <h2>Frequently Asked Questions</h2>
                <p>We offer a range of pricing plans to fit every budget and level of need. Whether you're a solo professional</p>
            </div>
            <Accordion.Root type="single" collapsible className={styles.accordionRoot}>
                {accordionData.map((data, index) => (
                    <Accordion.Item value={`item-${index + 1}`} key={data.id.toString()} className={styles.accordionItem}>
                        <Accordion.Header className={styles.accordionHeader}>
                            <Accordion.Trigger className={styles.accordionTrigger}>
                                <h6>{data?.title}</h6>
                                <img src={DownArrow} alt="" className={styles.arrowIcon} />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className={styles.accordionContent}>
                           {data?.content}
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>
    )
}

export default Eight