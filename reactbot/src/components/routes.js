import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import News from './mainWindow/news';
import Outlines from './mainWindow/Outlines';
import Rate from './mainWindow/rate';
import RegistrPage from './mainWindow/registPage';
import Tests from './mainWindow/testing';

export const useRoutes = isAuth => {
    if( isAuth ) {
        return(
            <Switch>
                <Route path ='/news' exact component = {News}></Route>
                <Route path ='/registPage' exact component = {RegistrPage}></Route>
                <Route path ='/rate' exact component = {Rate}></Route>
                <Route path ='/outlines' component = {Outlines}></Route>
                <Route path ='/testing' component = {Tests}></Route>
                <Route path ='/exam' component = {Tests}></Route>
                <Redirect to="/"/>
            </Switch>

        )
    }

    return(
        <Switch>
            <Route path="/registPage" exact component = { RegistrPage }></Route>
            <Redirect to="/registPage"/>
        </Switch>
    )
}