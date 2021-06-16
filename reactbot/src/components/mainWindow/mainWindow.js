import React from 'react';
import '../mainWindow/window.css';
import '../mainWindow/heisenberg.svg';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import News from './news';
import Outlines from './Outlines';
import Rate from './rate';
import RegistrPage from './registPage';
import Tests from './testing';
import { useRoutes } from '../routes';

function MainWindow(){
    const routes = useRoutes(0git)
    return(
        <main id='promo' className = 'promo'>
            
                {routes}
            
            
            {/* <Switch>
                <Route exact path ='/news' component = {News}></Route>
                <Route path ='/registPage' component = {RegistrPage}></Route>
                <Route path ='/rate' component = {Rate}></Route>
                <Route path ='/Outlines' component = {Outlines}></Route>
                <Route path ='/testing' component = {Tests}></Route>                
            </Switch> */}

        </main>
    )
}
export default MainWindow;