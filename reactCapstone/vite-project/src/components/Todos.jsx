import TodoCard from './TodoCard';
import styles from './todos.module.css'
import { useEffect, useState } from 'react';

const Todos = ({userid,todos, setTodos, filterState, setFilterState, filteredArray}) => {

    
    const [searchInput, setSearchInput] = useState("");
    const [sort, setSort] = useState(false);
   
    console.log(`In Todos ${JSON.stringify(todos)}`);

    const sortedArray = todos.slice().sort((a,b)=>Number(a.completed)-Number(b.completed))
    console.log(`sort array ${JSON.stringify(sortedArray)}`)
    
    //Priority Sort
    const priorityOrder = ['High', 'Medium', 'Low'];
    const sortByPriority = (a,b) => {
        const priorityA = priorityOrder.indexOf(a.priority);
        const priorityB = priorityOrder.indexOf(b.priority);
        return priorityA - priorityB;
    }
    const prioritySortedArray = todos.slice().sort(sortByPriority);
    // console.log(`priority array ${JSON.stringify(prioritySortedArray)}`);
    // console.log(`filter status ${filterState} ${filteredArray}`);

    function handleSearch(e){
        setSearchInput(e.target.value);
    }

    function handleSort(){
        // filterClassName = styles.filterColor;
        setSort(!sort);
        setFilterState(false);
        console.log(filterClassName);
    }

    return(
        <>
        {todos.length > 0 && 
        <div className={`row justify-content-between`}>
        <div className={`col-md-6 col-xl-6 ${styles.searchContainer}`}>
            <div className={`input-group ${styles.searchSize} mb-3`}>
            <span className={`input-group-text ${styles.searchLabel}`} id="basic-addon1"><i className="bi bi-search"></i></span>
            <input type="text" className={`form-control ${styles.searchBar}`} placeholder="Search tasks based on description" aria-label="search" value={searchInput} aria-describedby="basic-addon1" onChange={handleSearch}/>
            </div>
        </div>
        <div className="col-sm-12 col-md-3 col-xl-3">
            <input type="checkbox" className={`btn-check `} id="btn-check-2-outlined" onClick={handleSort} autocomplete="off" />
            <label className={`btn btn-outline-secondary ${styles.todoSortPriority}`} for="btn-check-2-outlined"><i className={`bi bi-funnel-fill ${styles.funnel}`}></i>Sort By Priority</label><br/>
            {/* <button className={`btn ${styles.todoSortPriority} ${styles.filterColor} `}  onClick={handleSort} type="button" id="addTodosBtn"><i className={`bi bi-funnel-fill ${styles.funnel}`}></i>Sort by Priority</button> */}
        </div>
        </div>
        }
        <div className={`row row-cols-lg-1 gx-0`}>
            {(userid === null || todos.length === 0) && <div className={styles.TodoImageContainer}>
                <img src="/todo2.jpeg" alt="no to-do to show yet" className={styles.noTodosImage}/>
            </div>}
           
            {(sort === false && filterState === false) && sortedArray.map((todo) => {
                    console.log(`loop ${JSON.stringify(todo)}`);
                    return(
                        <>
                            <TodoCard todo={todo} todos={todos} setTodos={setTodos} searchInput={searchInput}/>
                        </>
                    )
                })}
            
            {(sort === true && filterState === false) && prioritySortedArray.map((todo) => {
                    console.log(`loop ${JSON.stringify(todo)}`);
                    return(
                        <><TodoCard todo={todo} todos={todos} setTodos={setTodos} searchInput={searchInput}/></>
                    )
                })}
            
            {(filterState === true) && filteredArray.map((todo) => {
                    console.log(`Filter loop ${JSON.stringify(todo)}`);
                    return(
                        <>
                            <TodoCard todo={todo} todos={todos} setTodos={setTodos} searchInput={searchInput}/>
                        </>
                    )
                })}
            {/* {console.log(count)} */}
            {/* <Countometer todos = {todos} countTodo={countTodo} setCountTodo = {setCountTodo}/> */}
        </div>
        </>
    )
}

export default Todos