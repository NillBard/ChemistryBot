import '../leftBar/leftBar.css';
import Vk from '../leftBar/VK.svg';
import openBook from '../leftBar/Konspeckt.svg';
import star from '../leftBar/Star.svg';
import contract from '../leftBar/contract 1.svg';
import Check from '../leftBar/check 1.svg';
import books from '../leftBar/book 1.svg';
import help from '../leftBar/question-mark 1.svg';
import React from "react";
import { NavLink } from "react-router-dom";


export default function leftBar (){
    return(        
            <nav className = 'link'>
                <div className = 'imgLinks'>
                    <img id = 'vk' src = {Vk} ></img>
                    <a href ='http://vk.com' target="_blank">Группа в ВК</a>
                </div>
                <div className = 'imgLinks'>
                    <img id = 'open-book' src = {openBook} ></img>
                    <NavLink to="/outlines"> Конспекты</NavLink>
                </div>
                <div className = 'imgLinks'>
                    <img id = 'star' src = {star} ></img>
                    <NavLink to="/rate"> Рейтинг</NavLink>
                </div>
                <div className = 'imgLinks'>
                    <img id = 'contract' src = {contract} ></img>
                    <NavLink to="/exam"> Пробники </NavLink>
                </div>
                <div className = 'imgLinks'>
                    <img id = 'Check' src = {Check} ></img>
                    <NavLink to="articles"> Статьи</NavLink>
                </div>
                <div className = 'imgLinks'>
                    <img id = 'book' src = {books} ></img>
                    <NavLink to="/testing"> Тесты</NavLink>
                </div>
                <div className = 'imgLinks'>
                    <img id = 'help' src = {help} ></img>
                    <NavLink to="/help"> Помощь</NavLink>
                </div>
            </nav>
        
        
    );
};

