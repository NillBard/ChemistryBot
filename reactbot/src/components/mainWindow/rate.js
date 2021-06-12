
import React from 'react';
import '../mainWindow/window.css';
import Champion from '../mainWindow/Champion.js'
import PersonRate from '../mainWindow/PersonRate'


export default function Rate(){
    return(
        <div >
            <div className ='headRate'>
                <h1 className='h1'>Рейтинг</h1>
            </div>
            <div className='champions'>
                <div className='champions first'><Champion /></div>
                <div className='champions second'><Champion/><Champion/></div>
                <div>
                    <ul>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        <PersonRate/>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
