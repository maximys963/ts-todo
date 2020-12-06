import React, { Dispatch, useState, FC, ChangeEvent } from 'react';
import nextId from 'react-id-generator';
import { ListItemProps } from '../Types';
import {Button, TextField} from '@material-ui/core';

import styles from './Form.module.sass';


type FormProps = {
    addTodoToList: (text: ListItemProps, setText: Dispatch<string>) => void
}

export const Form: FC<FormProps> = (props) => {
    const [ text, setText ] = useState('');
    const { addTodoToList } = props;

    function handleAddTodoToList() {
        if(text) {
            addTodoToList(
                {
                    id: nextId(),
                    text,
                    isChecked: false
                },
                setText);
        }
    }

    return (
        <div className={styles.form_container}>
            <TextField
                value={text}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
            />
            <div className={styles.button}>
                <Button
                    onClick={() => handleAddTodoToList()}
                    color="primary"
                    variant="contained"
                >Add</Button>
            </div>
        </div>
    );
};


