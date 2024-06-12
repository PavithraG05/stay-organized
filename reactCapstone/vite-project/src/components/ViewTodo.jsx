import TodoCounts from "./TodoCounts"
import Countometer from './Countometer';
import TodoUserSelectNav from "./TodoUserSelectNav"
import Todos from "./Todos"
import styles from './viewtodos.module.css'
import { useState, useEffect } from 'react';
import useFetch from './useFetch';

const ViewTodo = () => {
    
    let count = {
        totalCount:0,
        personalCount:0,
        errandCount:0,
        workCount:0,
        helpCount:0,
        financeCount:0,
        householdCount:0,
        highCount:0,
        mediumCount:0,
        lowCount:0,
        completedCount:0,
        pendingCount:0
    }

    // Required in countometer
    const [countTodo, setCountTodo] = useState(count);
    //Required in filter status
    const [filterState, setFilterState] = useState(false);

    const [apiError, setApiError] = useState("");
    const [userid, setUserid] = useState(null);
    const [todos, setTodos] = useState([]);
    const [filteredArray, setFilteredArray]= useState([]);

    console.log(count);
    // let filteredArray = [];
    useEffect(()=>{
        async function init(){
           
            try{
                setApiError("");
                const response = await fetch(`http://localhost:8085/api/todos/byuser/${userid}`);
                if(response.ok){
                    const json = await response.json();
                    // const todos_list = await JSON.parse(json);
                    // console.log(`Response from Api ${json}`);
                    // setTodos(json);
                    console.log(JSON.stringify(json));
                    setTodos(json);
                    setApiError("");
                    
                }
                else{
                    throw response;
                }
            }
            catch (e){
                setApiError("Error fetching details using API");
            }

        }

        if(userid === ""){
            setApiError("Select an user from dropdown");
            setTodos([]);
        }
        else{
            init();
        }
        // data = JSON.parse(todos_list);
        // setTodos(JSON.parse(todos_list));
    },[userid]);
    console.log(`Todos ${todos.length}`);
    return(
        <>
        <div className={styles.todosArea}>
            <div className="row">
                <div className="col-lg-4 col-xl-3 bg-light">
                    <TodoCounts countTodo={countTodo} todos={todos} setTodos={setTodos} setFilterState={setFilterState} setFilteredArray={setFilteredArray}/>
                </div>
                <div className="col-lg-7 col-xl-8 g-2">
                    <TodoUserSelectNav setUserid={setUserid} apiError={apiError}/>
                    <Todos userid={userid} todos={todos} setTodos={setTodos} filterState={filterState} setFilterState={setFilterState} filteredArray={filteredArray}/>
                </div>
            </div>
        </div>
        <Countometer todos = {todos} countTodo={countTodo} setCountTodo = {setCountTodo}/>
        </>
    );
}

export default ViewTodo