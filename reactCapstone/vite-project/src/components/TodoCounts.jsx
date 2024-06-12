import styles from './todocounts.module.css'
import { useState, useEffect } from 'react';
import TodoCountCategory from './TodoCountCategory';
import useFetch from './useFetch';

const TodoCounts = ({countTodo, todos, setTodos,setFilterState, setFilteredArray}) => {

    const [categoryApiErr, setCategoryApiErr] = useState("");
    const {data: categories, loading, error} = useFetch("categories");
    console.log("category populating from api");
    if (loading) return "Loading...";
    if(error) setCategoryApiErr("Error fetching categories using API");

    function filterStatus(status){
        console.log(`Clicked ${status}`)
        setFilterState(true);
        status === 'Completed' ? status = true : status = false;
        let output = todos.filter((todo) => todo.completed === status);
        setFilteredArray(output);
        // console.log(`output filtered ${JSON.stringify(output)}`)
        // setTodos(output);
    }

    function filterPriority(priority){
        console.log(`Clicked ${priority}`)
        setFilterState(true);
        let output = todos.filter((todo) => todo.priority === priority);
        setFilteredArray(output);
        // console.log(`output filtered ${JSON.stringify(output)}`)
        // setTodos(output);
    }

    function filterAll(){
        console.log(`Clicked to filter all`)
        // setFilterState(true);
        // let output = todos;
        // setFilteredArray(output);
        // console.log(`output filtered ${JSON.stringify(output)}`)
        // setTodos(output);
        setFilterState(false);
    }
    return(
        <div className={styles.todoAsideContainer}>
                            
            <div className={styles.todoAsideTitleInfo}>
                TO-DO TASK COUNTOMETER
            </div>
            <div className={styles.noteTodo}>(Note: Click on any item in the list below to filter todos)</div>
            <hr/>
            <br/>
            <div>
                
                <span className={styles.todoAsideListTitle}>
                    Task Categories
                </span>
                <ul className={styles.todoAsideList} id="todo-allCategory">
                    <li  className={styles.todoAsideSubList}>
                        <span onClick={()=>filterAll()} className={styles.subList}>Total Tasks &nbsp;&nbsp;</span>
                        <span className={`badge text-bg-secondary ${styles.todoCountBadge}`}>{countTodo.totalCount}</span>
                        
                        {categories && categories.map((category)=>{
                            return (<TodoCountCategory category = {category.name} countTodo={countTodo} todos={todos} setFilterState={setFilterState} setFilteredArray={setFilteredArray}/>);
                        })}

                    </li>
                </ul>
                {categoryApiErr && <div>{categoryApiErr}</div>}
            </div>
            <hr/>
            <div>
                <span className={styles.todoAsideListTitle}>Task Status</span>
                <ul className={styles.todoAsideList}>
                    <li className={styles.todoAsideSubList}>
                        <i className="bi bi-check-circle-fill" id="completedIcon"></i>
                        <span className={styles.subList} onClick={()=>filterStatus(`Completed`)}>&nbsp;Completed&nbsp;&nbsp;</span>
                        <span id="todo-completed-count" className={`badge text-bg-secondary ${styles.todoCountBadge}`}>{countTodo.completedCount}</span>
                        
                    </li>
                    <li className={styles.todoAsideSubList}>
                        <i className="bi bi-exclamation-circle-fill"></i>
                        <span className={styles.subList} onClick={()=>filterStatus(`Pending`)}>&nbsp;Pending&nbsp;&nbsp;</span>
                        <span id="todo-pending-count" className={`badge text-bg-secondary ${styles.todoCountBadge}`}>{countTodo.pendingCount}</span>
                        
                    </li>
                </ul>
            </div>
            <hr/>
            <div>
                <span className={styles.todoAsideListTitle}>
                    Task Priority
                </span>
                <ul className={styles.todoAsideList}>
                    <li className={styles.todoAsideSubList}>
                        <i className="bi bi-flag-fill text-danger"></i>
                        <span className={styles.subList} onClick={()=>filterPriority(`High`)}>&nbsp;High&nbsp;&nbsp;</span>
                        <span id="todo-high-count" className={`badge text-bg-secondary ${styles.todoCountBadge}`}>{countTodo.highCount}</span>
                        
                    </li>
                    <li className={styles.todoAsideSubList}>
                        <i className="bi bi-flag-fill text-warning"></i>
                        <span className={styles.subList} onClick={()=>filterPriority(`Medium`)}>&nbsp;Medium&nbsp;&nbsp;</span>
                        <span id="todo-medium-count" className={`badge text-bg-secondary ${styles.todoCountBadge}`}>{countTodo.mediumCount}</span>
                        
                    </li>
                    <li className={styles.todoAsideSubList}>
                        <i className="bi bi-flag-fill text-success"></i>
                        <span className={styles.subList} onClick={()=>filterPriority(`Low`)}>&nbsp;Low&nbsp;&nbsp;</span>
                        <span id="todo-low-count" className={`badge text-bg-secondary ${styles.todoCountBadge}`}>{countTodo.lowCount}</span>
                        
                    </li>
                </ul>
                <hr/>
            </div>
        </div>
    );
}

export default TodoCounts