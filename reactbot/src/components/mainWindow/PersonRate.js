import React from 'react'
import Account from '../menu/acc.svg';
import '../mainWindow/window.css';

const styles = {
    text:{
        display: 'flex', 
    }
}

 const PersonRate = (props) =>{
    return(
        <div style={styles.text} >
            <img src= {props.avatar}/>
            <span>{props.name}</span>
        </div>
    )
}

export default PersonRate;