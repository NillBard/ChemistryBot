import '../leftBar/leftBar.css';
import Vk from '../leftBar/VK.svg';
import openBook from '../leftBar/Konspeckt.svg';
import star from '../leftBar/Star.svg';
import contract from '../leftBar/contract 1.svg';
import Check from '../leftBar/check 1.svg';
import books from '../leftBar/book 1.svg';
import help from '../leftBar/question-mark 1.svg';
import React from "react";
export default function leftBar (){
    return(
        <div className = 'leftBlщcks'>
            <div className = 'link'>
                <div className = 'imgLinks'>
                    <img id = 'vk' src = {Vk} ></img>
                    <a href="">Группа в ВК</a>
                </div>
                <div className = 'imgLinks'>
                    <img id = 'open-book' src = {openBook} ></img>
                    <a href=""> Конспекты</a>
                </div>
                <div className = 'imgLinks'>
                    <img id = 'star' src = {star} ></img>
                    <a href=""> Рейтинг</a>
                </div>
                <div className = 'imgLinks'>
                    <img id = 'contract' src = {contract} ></img>
                    <a href=""> Пробники </a>
                </div>
                <div className = 'imgLinks'>
                    <img id = 'Check' src = {Check} ></img>
                    <a href=""> Статьи</a>
                </div>
                <div className = 'imgLinks'>
                    <img id = 'book' src = {books} ></img>
                    <a href=""> Тесты</a>
                </div>
                <div className = 'imgLinks'>
                    <img id = 'help' src = {help} ></img>
                    <a href=""> Помощь</a>
                </div>
            </div>
        </div>
        
    );
};

