import React from 'react'
import styles from './Seven.module.css'
import PaperPlane from '../../assets/images/paper-plane.png'
import DownRightArrow from '../../assets/images/down-right-arrow.png'
import * as Accordion from '@radix-ui/react-accordion';
import BlueTick from '../../assets/images/blue-tick.png'
import DownArrow from '../../assets/images/accordion-arrow.png'

const Seven = () => {

    const accordionData = [
        {
            id: 1,
            title: "Offshore software development team deployment",
            subtitle: "At Nextwebi, offshore software development firm we entail deploying a team at a different location to help you meet your technological requirements. The software industry is ramping up at a faster pace across the globe creating fierce competition and increasing the cost of running the business. Inevitably, Onsite-Offshore Software Development emerged as a solution for many businesses looking to build custom services to tackle the problems arising timely."
        },
        {
            id: 2,
            title: "Workflow post offshore software development team establishment",
            subtitle: "Hire a dedicated offshore software development team with Nextwebi and expand your business outreach while cutting recruitment and infrastructure costs."
        },
        {
            id: 3,
            title: "Cost of offshore development services",
            subtitle: "Estimating the cost of offshore development services can be a tricky process as it depends on various factors in domain knowledge, industry expertise, and project knowledge. The components that influence the cost of offshore development services include:"
        }
    ]

    return (
        <div className={styles.Seven}>
            <div className={styles.innerFirst}>
                <div className={styles.first}>
                    <h2>Offshore Dedicated Development Team for Your Project Requirements</h2>
                    <p>Nextwebi is a leading offshore software development company we save you from hiring hassle and deploy a team of dedicated </p>
                </div>
                <div className={styles.square}>
                    <img src={PaperPlane} alt="" />
                    <h4>Let's begin with a no-obligation
                        conversations.</h4>
                    <div className={styles.squareInner}>
                        <button>Request a Quote</button>
                        <img src={DownRightArrow} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.innerSecond}>
                <Accordion.Root type="single" collapsible defaultValue="item-1" className={styles.accordionRoot}>
                    {accordionData.map((data, index) => (
                        <Accordion.Item value={`item-${index + 1}`} key={data.id.toString()} className={styles.accordionItem}>
                            <Accordion.Header className={styles.accordionHeader}>
                                <Accordion.Trigger className={styles.accordionTrigger}>
                                    <div className={styles.accordionTriggerInner}>
                                        <h6>{data?.title}</h6>
                                        <img src={DownArrow} alt="" className={styles.arrowIcon} />
                                    </div>
                                    <p>{data?.subtitle}</p>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className={styles.accordionContent}>
                                <div>
                                    <img src={BlueTick} alt="" />
                                    <p>Enhanced business process quality</p>
                                </div>
                                <div>
                                    <img src={BlueTick} alt="" />
                                    <p>Flexible and scalable technological solutions</p>
                                </div>
                                <div>
                                    <img src={BlueTick} alt="" />
                                    <p>Technically proficient team of offshore software developers</p>
                                </div>
                                <div>
                                    <img src={BlueTick} alt="" />
                                    <p>On-time project delivery with high-security standards</p>
                                </div>
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </div>
    )
}

export default Seven