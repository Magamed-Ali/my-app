import React from 'react';


export type TodoListType = {
    title: string;
    tasks: Array<TaskType> ;
    students: string[];
}

type TaskType={
    taskId: number,
    title: string,
    isDone:boolean}

function TodoList(props: TodoListType) {



    return (
        <div>
            {
                <h2>{props.title}</h2>
            }
            {props.students.map(i => {
                return (
                    <ul>
                        <li>{i}</li>
                    </ul>
                )
            })}
        </div>
    );
}

export default TodoList;