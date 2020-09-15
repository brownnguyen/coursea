import React from 'react'
import Headers from '../../Layout/Headers/Headers'
import Footer from '../../Layout/Footer/Footer'
import { Route } from 'react-router-dom';
const HomeLayout = (props) => {
    return (
        <>
            <Headers />
            {props.children}
            <Footer />
        </>
    )
}
export default function HomeTemplate(props) {

    return (
        <Route path={props.path} exact={props.exact} render={(propsComponent) => (
            <HomeLayout>
                <props.component {...propsComponent}></props.component>
            </HomeLayout>
        )} />
    )
}
