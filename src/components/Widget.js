import React from 'react';

//отдельный независимый сложный компонент с "уникальными" дочерними элементами

export default function Widget(props) {
    return <article className={props.className}>{props.children}</article>;
}