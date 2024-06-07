import styles from './todocounts.module.css'
import { useState, useEffect } from 'react';
import TodoCountCategory from './TodoCountCategory';
import useFetch from './useFetch';

const TodoCounts = () => {

    const [categoryApiErr, setCategoryApiErr] = useState("");

    const {data: categories, loading, error} = useFetch("categories");
    console.log(categories);
    if (loading) return "Loading...";
    if(error) setCategoryApiErr("Error fetching categories using API");

    return(
        <div className={styles.todoAsideContainer}>
                            
            <div className={styles.todoAsideTitleInfo}>
                TO-DO TASK COUNTOMETER
            </div>
            <hr/>
            <br/>
            <div>
                <span className={styles.todoAsideListTitle}>
                    Task Categories
                </span>
                <ul className={styles.todoAsideList} id="todo-allCategory">
                    <li  className={styles.todoAsideSubList}>
                        <span onclick="filterAll()">Total Tasks &nbsp;&nbsp;</span>
                        <span id="todo-alltask-count" className={`badge text-bg-secondary ${styles.todoCountBadge}`}></span>
                        
                        {categories && categories.map((category)=>{
                            return (<TodoCountCategory category = {category.name}/>);
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
                        <span onclick="filterStatus(`Completed`)">&nbsp;Completed&nbsp;&nbsp;</span>
                        <span id="todo-completed-count" className={`badge text-bg-secondary ${styles.todoCountBadge}`}></span>
                        
                    </li>
                    <li className={styles.todoAsideSubList}>
                        <i className="bi bi-exclamation-circle-fill"></i>
                        <span onclick="filterStatus(`Pending`)">&nbsp;Pending&nbsp;&nbsp;</span>
                        <span id="todo-pending-count" className={`badge text-bg-secondary ${styles.todoCountBadge}`}></span>
                        
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
                        <span onclick="filterPriority(`high`)">&nbsp;High&nbsp;&nbsp;</span>
                        <span id="todo-high-count" className={`badge text-bg-secondary ${styles.todoCountBadge}`}></span>
                        
                    </li>
                    <li className={styles.todoAsideSubList}>
                        <i className="bi bi-flag-fill text-warning"></i>
                        <span onclick="filterPriority(`medium`)">&nbsp;Medium&nbsp;&nbsp;</span>
                        <span id="todo-medium-count" className={`badge text-bg-secondary ${styles.todoCountBadge}`}></span>
                        
                    </li>
                    <li className={styles.todoAsideSubList}>
                        <i className="bi bi-flag-fill text-success"></i>
                        <span onclick="filterPriority(`low`)">&nbsp;Low&nbsp;&nbsp;</span>
                        <span id="todo-low-count" className={`badge text-bg-secondary ${styles.todoCountBadge}`}></span>
                        
                    </li>
                </ul>
                <hr/>
            </div>
        </div>
    );
}

export default TodoCounts