import React from "react"
import { Route, Switch } from "react-router-dom"

import { Navigation } from "components/Navigation"
import { Footer } from "components/Footer"

import { Home } from "views/Home"
import { HowWeMet } from "views/HowWeMet"
import { Schedule } from "views/Schedule"
import { Travel } from "views/Travel"
import { ThingsToDo } from "views/ThingsToDo"
import { FAQ } from "views/FAQ"
import { Registry } from "views/Registry"
import { MyDocument } from "views/Invitation"
// import { RSVP } from "views/RSVP"



// <Route exact path={"/rsvp"} component={RSVP} />
const AppLayout = () => (
    <>
        <main className="mb-4">
            <Navigation />
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/how-we-met"} component={HowWeMet} />
                <Route exact path={"/schedule"} component={Schedule} />
                <Route exact path={"/travel"} component={Travel} />
                <Route exact path={"/things-to-do"} component={ThingsToDo} />
                <Route exact path={"/faq"} component={FAQ} />
                <Route exact path={"/registry"} component={Registry} />
                <Route exact path={"/invitation"} component={MyDocument} />
            </Switch>
        </main>
        <Footer />
    </>
)

export default AppLayout
