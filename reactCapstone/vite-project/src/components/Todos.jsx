import Countometer from './Countometer';
import ModalDialog from './ModalDialog';
import TodoCard from './TodoCard';
import styles from './todos.module.css'
import useFetch from './useFetch';
import { useEffect, useState } from 'react';

const Todos = ({userid, countTodo, setCountTodo, todos, setTodos}) => {

    const [show, setShow] = useState(false);
    // const [todoTask, setTodoTask] = useState([]);
    console.log(`In Todos ${JSON.stringify(todos)}`);
    return(
        <>
        
        <div className={`row row-cols-lg-1 gx-0`}>
            {(userid === null || todos.length === 0) && <div className={styles.TodoImageContainer}>
                <img src="/todo2.jpeg" alt="no to-do to show yet" className={styles.noTodosImage}/>
            </div>}

            {todos.length > 0 && todos.map((todo) => {
                    console.log(`loop ${JSON.stringify(todo)}`);
                    return(
                        <>
                            
                            <TodoCard todo={todo} setShow={setShow} todos={todos} setTodos={setTodos}/>
                        </>
                    )
                })}
            {/* {console.log(count)} */}
            <Countometer todos = {todos} countTodo={countTodo} setCountTodo = {setCountTodo}/>
        </div>
        </>
    )
}

export default Todos