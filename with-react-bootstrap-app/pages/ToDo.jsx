import { useState } from 'react';

let nextId = 0;

export default function List(){
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState([])

    return(
        <>
            <h1>To do list:</h1>
            <input
                value={taskName}
                onChange={e=> setTaskName(e.target.value)}
            />

            <button onClick={() =>{
                setTasks([...tasks, {id:nextId++, taskName: taskName}])
            }}>Add Task</button>

            <ul>
                {tasks.map(task =>(
                    <li key={task.id}>{task.taskName}{'  '}
                        <button onClick={() => {
                            setTasks(
                                tasks.filter(a =>
                                    a.id !== task.id
                                )
                            )
                        }}>Remove Task</button>
                    </li>
                ))}
            </ul>
        </>
    )
}