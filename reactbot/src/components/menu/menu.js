import React from 'react';
import Flask from '../menu/flask 1.svg';
import Account from '../menu/acc.svg';
import '../menu/menu.css';

export default function Menu (){
    return (
        <div className = 'menu'>
            <div className = 'icon'>
                <img src = {Flask}></img>
                <p>ХИМБОТ</p>
            </div>
            <div className = 'account'>
                <img src = {Account}></img>
                <p>ACCOUNT</p>
            </div>
        </div>
    );
}