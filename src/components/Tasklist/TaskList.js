import React from "react";
import './tasklist.css';

export default function TaskList({ title }){
    return(
        <div className='tasklist'>
            <div className="title">{title /*Abro chaves para dizer que isso é um .jsx*/}</div>
            <div className="content"></div>
        </div>
    );
}