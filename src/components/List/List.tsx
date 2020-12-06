import React, { FC } from 'react';
import { ListItem } from '../ListItem/ListItem';
import { ITodo } from '../Interfaces';

type List = {
    list: Array<ITodo>,
    deleteTodoItem: (id: string) => void,
    markChecked: (id: string, value: boolean) => void
};

export const List: FC<List> = (props) => {
    const {
        list,
        deleteTodoItem,
        markChecked
    } = props;

    return (
        <div>
            {list.map((item, index) => (
                <ListItem
                    key={index}
                    id={item.id}
                    text={item.text}
                    isChecked={item.isChecked}
                    deleteTodoItem={deleteTodoItem}
                    markChecked={markChecked}
                />
            ))}
        </div>
    );
};
