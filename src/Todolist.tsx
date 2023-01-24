import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    checkoutRemove: (DoneID: string, IsDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("");
    const [error, setError] = useState(false)

    const addTask = () => {
        const newTitle = title.trim();
        if(newTitle !== ""){
            props.addTask(newTitle.trim());
            setTitle("");
        }else {
            setError(true)
        }


    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <button onClick={addTask}>+</button>
        </div>
        {
            error ? <div className="error-message">Enter text!</div> : ''
        }

        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id}>
                        <input type="checkbox"
                               checked={t.isDone}
                               onChange={(e: ChangeEvent<HTMLInputElement>)=> props.checkoutRemove(t.id, e.currentTarget.checked)}
                        />
                        <span className={t.isDone ? "strikethrough-text" : "is-done"}>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === "all" ? "active-filter" : ""} onClick={ onAllClickHandler }>All</button>
            <button className={props.filter === "active" ? "active-filter" : ""} onClick={ onActiveClickHandler }>Active</button>
            <button className={props.filter === "completed" ? "active-filter" : ""} onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}
