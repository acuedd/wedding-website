import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { selectLanguage } from "utilities/cookies"
import { details } from "content/Home"
import CountdownTimer from './CountdownTimer';

import styles from "./Details.module.scss"
import "./CountDown.css"

const getDays = (date1, date2) => {
    const Difference_In_Time = date2.getTime() - date1.getTime()
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
    return Difference_In_Days

}

const Details = () => {
    const DATE_EVENT = new Date("2022-09-10 10:00");
    const Today = new Date();
    const DaysToEvent = getDays(Today, DATE_EVENT)

    const EVENT_DAYS_IN_MS = DaysToEvent * 24 * 60 * 60 * 1000

    const NOW_IN_MS = new Date().getTime()

    const [cookies] = useCookies(["language"])

    const dateTimeAfterThreeDays = NOW_IN_MS + EVENT_DAYS_IN_MS;

    const { Title, MyDate, Location, hashtag, locationLink } = details[
        selectLanguage(cookies)
    ]
    return (
        <section>
            <Container>
                <Row>
                    <Col className={styles.details}>
                        <h1 className={styles.announcement}>
                            <Title />
                        </h1>
                        <h1 className={styles.date}>
                            <MyDate />
                        </h1>
                        <h2>
                            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                        </h2>
                        <h2 className={styles.location}>
                            <a
                                href={locationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Location />
                            </a>
                        </h2>
                        <h3 className={styles.hashtag}>
                            <a
                                href={`https://www.instagram.com/explore/tags/${hashtag}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {`#${hashtag}`}
                            </a>
                        </h3>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Details
