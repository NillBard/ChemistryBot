
import React from 'react';
import '../mainWindow/window.css';
import Champion from '../mainWindow/Champion'
import PersonRate from '../mainWindow/PersonRate'
import Ac from '../mainWindow/heisenberg.svg';




 function Rate(){
    const Account = {
        name: 'Андрей',
        avatar: Ac 
    }
    return(
        
        <div className = 'RateBlock' >
            <div className ='headRate'>
                <h1 className='h1'>Рейтинг</h1>
            </div>
            <div className='champions'>
                <div className='champions first'><Champion /></div>
                <div className='champions second'><Champion/><Champion/></div>
                <div>
                    <ul>
                        <PersonRate name = {Account.name} avatar = {Account.avatar}></PersonRate>
  
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Rate;