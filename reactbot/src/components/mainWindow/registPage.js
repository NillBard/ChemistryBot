import React from 'react'
import '../mainWindow/window.css'

const styles = {
    
    registration:{
        width: '320px',
        height: '52px',
        marginBottom: '20px',
        backgroundColor: '#8F85FF',
        borderRadius: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'var(--primary-robo-font)',
        fontSize: '20px',
        color: '#FFFACC'
    }
}

export default function Outlines(){
    return(
        <div className = 'leftBlocks'>
            <h1 className='h1'>Пожалуйста авторизуйтесь</h1>
            <div>
        
            </div>
            <div>
                <div className='login'><span>Регистрация</span></div>
                <div style={styles.login} ><span>Войти</span></div>
            </div>
        </div>
    )
}