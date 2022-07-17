import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Registry</>,
        SubHeading: () => (
            <span>
                Your presence is more than enough and we're not expecting any
                gifts. But, if you wish to contribute to our married life come
                back soon to see our registry.
            </span>
        ),
    },
    [LANGUAGE.ES]: {
        Heading: () => <>Registro</>,
        SubHeading: () => (
            <span>
                Tu presencia será más que suficiente, sin embargo, si deseas contribuir con nuestra
                nueva vida en matrimonio, tendrémos cajas para aportes o regresa pronto a la página, que subiremos pronto nuestro registro
                de regalos.
            </span>
        ),
    },
}
