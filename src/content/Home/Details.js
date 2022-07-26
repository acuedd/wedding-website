import React from "react"

import { LANGUAGE } from "actions/constants"

const hashtag = "AndreEdu"

export default {
    [LANGUAGE.EN]: {
        Title: () => <span>Andrea and Edward are getting married!</span>,
        MyDate: () => (
            <div className="d-flex flex-column">
                <div>
                    <span >
                        Saturday, Sept 10th, 2022
                    </span>
                </div>
                <div>Love is patient...</div>
            </div>
        ),
        Location: () => <span>Jardínes del lago&apos;Panajachel, Sololá</span>,
        locationLink: "https://g.page/jardinesdellago?share",
        hashtag,
    },
    [LANGUAGE.ES]: {
        Title: () => <span>Andrea y Edward nos casamos!</span>,
        MyDate: () => (
            <div className="d-flex flex-column">
                <div>
                    <span >
                        Sábado, 10 de septiembre 2022
                    </span>
                </div>
                <div>El amor es paciente...</div>
            </div>
        ),
        Location: () => <span>Jardínes del lago&apos;Panajachel, Sololá</span>,
        locationLink: "https://g.page/jardinesdellago?share",
        hashtag,
    },
}
