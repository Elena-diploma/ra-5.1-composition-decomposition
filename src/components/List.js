import React from 'react';

//список меню, статей или валют.

export default function List(props) {
    return (
        <ul className={props.className}>
            {props.children(props.items)}
            {props.date ? <li>{props.date}</li> : null}
            {props.more ? (
                <li>
                    <a href={props.more.url}>{props.more.title}</a>
                </li>
            ) : null}
        </ul>
    );
}