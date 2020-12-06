import React, { FC } from 'react';
import { Checkbox } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';

import styles from './ListItemStyles.module.sass';

interface ListItemProps {
    id: string
    text : string,
    isChecked: boolean,
    deleteTodoItem: (id: string) => void,
    markChecked: (id: string, value: boolean) => void
}

export const ListItem: FC<ListItemProps> = (props) => {
    const {
        id,
        text,
        isChecked,
        deleteTodoItem,
        markChecked
    } = props;


    return (
        <div className={styles.container}>
            <div className={styles.text_container}>
                <Checkbox checked={isChecked} onChange={() => markChecked(id, !isChecked)}/>
                <div
                    className={styles.text}
                    style={isChecked ? { textDecoration: 'line-through'} : {}}
                >
                    {text}
                </div>
            </div>
            <IconButton>
                <DeleteForever
                    className={styles.icon}
                    onClick={() => deleteTodoItem(id)}
                />
            </IconButton>
        </div>
    );
};
