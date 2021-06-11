import React from 'react'
import Account from '../menu/acc.svg';
import '../mainWindow/window.css';

const styles = {
    text:{
        textAlign: 'center',
    }
}

export default function Champion(){
    return(
        <div style={styles.text}>
            <span className='h2'>TOP</span>
            <div className='h2'>
                <img src={Account}/>
            </div>
            <span className='h2' >name</span>
        </div>
    )
}