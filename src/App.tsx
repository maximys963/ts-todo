import React, {Dispatch, FC, useState} from 'react';
import { Form } from './components/Form/Form';
import { List } from './components/List/List';
import { ITodo} from './components/Interfaces';
import { ListItemProps } from './components/Types';
import styles from './App.module.sass';

export const App: FC = () => {

    const [todoList, setTodoList] = useState<Array<ITodo>>([{
        id: '1',
        text: 'ololo',
        isChecked: false
    }]);

    function addTodoToList(todo: ListItemProps, clearFn: Dispatch<string>) {
        const checkedIndex = todoList.findIndex(elem => elem.isChecked);
        console.log('checkedIndex', checkedIndex);
        console.log('todoList', todoList);

        if(checkedIndex !== -1){
            const updatedList = [ ...todoList.slice(0, checkedIndex), todo, ...todoList.slice(checkedIndex, todoList.length)];
            setTodoList(updatedList);
        } else {
            setTodoList([...todoList, todo]);
        }

        clearFn('');
    }

    function deleteTodoItem(id: string){
        const todoIndex = todoList.findIndex((elem) => elem.id === id);
        const updatedTodos = [...todoList];
        updatedTodos.splice(todoIndex, 1);

        setTodoList(updatedTodos);
    }

    function markChecked(id: string, value: boolean){
        const todoIndex = todoList.findIndex((elem) => elem.id === id);
        const updatedTodos = [...todoList];
        if(value){
            const markedTodo = updatedTodos[todoIndex];
            markedTodo.isChecked = value;
            updatedTodos.splice(todoIndex, 1);
            updatedTodos.push(markedTodo);
        }else {
            updatedTodos[todoIndex].isChecked = false;
        }
        setTodoList(updatedTodos);
    }


    return (
        <div className={styles.App}>
        This is simple todo list
            <Form addTodoToList={addTodoToList}/>
            <List
                markChecked = {markChecked}
                deleteTodoItem={deleteTodoItem}
                list={todoList}
            />
        </div>
    );
};

export default App;
