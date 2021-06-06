import '../index.css';
import React from 'react';
import Left from './leftBar/Left';
import MainWindow from './mainWindow/mainWindow';
import Advertising from './rightBar/Advertising';

export default function Contain(){
    return(
        <div className = 'contain'>
            <Left></Left>
            <MainWindow></MainWindow>
            <Advertising></Advertising>
        </div>

    )
}