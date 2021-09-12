import * as React from 'react';

function Item(props) {
    const item_ = props.item;
    return (
            <li key={item_.value}>
                {item_.name}
            </li>
    );
}

export default Item;
