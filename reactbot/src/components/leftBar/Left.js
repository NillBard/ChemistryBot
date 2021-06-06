import '../leftBar/leftBar.css';
import React from 'react';
import LeftBar from './leftBar'
import Premium from './premium'

export default function Left(){
    return(
        <div className = 'leftBlocks'>
            <LeftBar></LeftBar>
            <Premium></Premium>
        </div>

    )
}