import React from 'react';

//Компонент «элемент списка»: простой элемент меню, блока статей или валют.

export default function ListItem(props) {
    return <li className={props.className}>{props.children}</li>;
}