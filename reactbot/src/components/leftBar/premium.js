import diamond from '../leftBar/diamond 1.svg';
import React from "react";
import '../leftBar/leftBar.css';

function Premium(){
    return (
        <div className = 'premium'>
            <div className = 'premBlocks'>
                <img src = {diamond}></img>
                <span>ПРЕМИУМ</span>
            </div>
            <button> Получить</button>
        </div>
    )
}
export default Premium;