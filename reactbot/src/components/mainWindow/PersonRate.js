import React from 'react'
import Account from '../menu/acc.svg';
import '../mainWindow/window.css';

const styles = {
    text:{
        display: 'flex',
    }
}

export default function PersonRate(){
    return(
        <li style={styles.text} >
            <span >Place</span>
            <div>
                <img src={Account}/>
            </div>
            <span  >name</span>
        </li>
    )
}