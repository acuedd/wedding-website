import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Registry</>,
        SubHeading: () => (
            <>

                <p><b>The gift is optional</b></p>
                <p><b>Attend the wedding is mandatory</b></p>
                <p>But if you want to give us a some gift, you can contribute in cash in the pillar-box in the wedding day or
                    enter to this link to check our wish list
                </p><br />
                <a target="_blank" href="https://www.cemaco.com/list/aculopezluxchajon">https://www.cemaco.com/list/aculopezluxchajon</a>
            </>
        ),
    },
    [LANGUAGE.ES]: {
        Heading: () => <>Registro</>,
        SubHeading: () => (
            <>

                <p><b>El regalo es opcional la asistencia obligatoria. </b></p>
                <p><b>LA ASISTENCIA OBLIGATORIA. </b></p>
                <p>Pero si deseas tener un detalle con nosotros, puedes entrar al siguiente link para adquirir algo de nuestra lista de deseos:
                </p><br />
                <a target="_blank" href="https://www.cemaco.com/list/aculopezluxchajon">https://www.cemaco.com/list/aculopezluxchajon</a>
            </>
        ),
    },
}
