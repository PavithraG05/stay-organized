import styles from './todocard.module.css'
import getCategoryColorTodo from './getCategoryColorTodo';
import getPriorityColorBadge from './getPriorityColorBadge';
import { useEffect, useState } from 'react';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import getCompletedClass from './getCompletedClass';


const TodoCard = ({todo, todos, setTodos}) => {

    console.log(`Todo ${JSON.stringify(todo)}`);
    const [todoTask, setTodoTask] = useState([]);
    const [editModalShow, setEditModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    useEffect(()=>{
        setTodoTask(todo);
    },[todo]);
 
    console.log(`TodoTask ${JSON.stringify(todoTask)}`)
    
    
    // let completed_strike="";
    // let status_icon_styles = "";
    let status="";
    // console.log(`TodoTask ${JSON.stringify(todoTask)}`);

   
    if(todoTask.completed === true){
        status = "Completed";
        // status_icon_styles = styles.biCheckCircleFill;
        // completed_strike = styles.strike;
        setTodoTask((todoTask) => ({...todoTask,completed:status}));
    }
    if(todoTask.completed === false){
        status = "Pending";
        // status_icon_styles = styles.biCheckCircle;
        setTodoTask((todoTask) => ({...todoTask,completed:status}));
    } 
    
    // console.log(status_icon);
    let colorName = getCategoryColorTodo(todoTask.category);
    let priorityBadge = getPriorityColorBadge(todoTask.priority);
    const {completed_strike , status_icon_styles} = getCompletedClass(todoTask.completed); 

    function updateStatus(taskid, status) {
        // console.log(`Clicked on id ${taskid} ${status}`);
        let completed_status = false;
        if(todoTask.completed === 'Pending'){
            completed_status = true;
            setTodoTask((todoTask) => ({...todoTask,completed:"Completed"}));
        }
        else{
            completed_status = false;
            setTodoTask((todoTask) => ({...todoTask,completed:"Pending"}));
        }

        completed_status = Boolean(todoTask.completed);
        // console.log(typeof completed_status);
        console.log(completed_status);
        fetch(`http://localhost:8085/api/todos/${taskid}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body: JSON.stringify({'completed':completed_status})
        })
        .then(response => {
            response.json();
        })
        .then (json => {
            //let text = `Todo task has been added successfully`;
            //console.log(text);
            //let message = document.getElementById("toast_msg");
            //message.innerHTML=text;
            //$('.toast').toast('show');
            // alert('Todo status has been updated successfully');
            const new_todos = todos.map((todo) => todo.id === taskid ? 
            {...todo,
            completed:completed_status, 
            }:todo)
            console.log(`update status new_todos ${JSON.stringify(new_todos)}`);
            // setTodos(new_todos);
        })
        .catch(err => {
            console.log(err);
        });
     }

    function editTodo(todo, status){
        // console.log(todo.category);
        // console.log(todo.description);
        // console.log(todo.priority);
        // console.log(todo.deadline);
        // console.log(status);
        // console.log(todo.id);
        setEditModalShow(true);
        // setTodoTask((todoTask) => ({
        //     ...todoTask,
        //     category:todo.category,
        //     description:todo.description,
        //     deadline:todo.deadline,
        //     priority:todo.priority,
        //     completed:status,
        //     id:todo.id
        // }));
    }

    function deleteTodo(todo, status){
        setDeleteModalShow(true);
        // setTodoTask((todoTask) => ({
        //     ...todoTask,
        //     category:todo.category,
        //     description:todo.description,
        //     deadline:todo.deadline,
        //     priority:todo.priority,
        //     completed:status,
        //     id:todo.id
        // }));
    }
    return(
        <div className={`card ${styles.todoCard}`}>
        <div className={`card-header ${styles.todoCategoryHeader}`}>
            <p>
                <span className={`${styles.todoCategoryTitle} ${styles.todoCategoryColorDot} ${colorName}`}></span>
                <span className={`${styles.todoCategoryTitle}`}>&nbsp;&nbsp;{todoTask.category}&nbsp;&nbsp;</span>
                <span className={`badge ${priorityBadge}`}>{todoTask.priority}</span>
                <span className={`${styles.todoIcons}`}>
                    
                    <i className={`bi bi-star ${styles.biStar}`}></i>
                    <i className={`bi bi-pencil-square ${styles.biPencilSquare}`} onClick={()=>editTodo(todoTask, status)}></i>
                    <i className={`bi bi-trash ${styles.biTrash}`} onClick={()=>deleteTodo(todoTask, status)}></i>
                    <i className={`bi bi-check-circle ${status_icon_styles}`} onClick={()=>updateStatus(todoTask.id, status)} ></i>
                </span>
            </p>
        </div>
        <div className={`card-body ${styles.todoBody}`}>
            <div className="row">
                <div className="col-9">
                    <h6 className={`card-title ${styles.todoDesc} ${completed_strike}`}>{todoTask.description}</h6>
                </div>
                <div className="col-3">
                    <a><h6 className={styles.todoStatus}>{todoTask.completed}</h6></a>
                </div>
            </div>
            <p className={`card-text ${completed_strike}`}><i className="bi bi-calendar3"></i>&nbsp;&nbsp;Due date: {todoTask.deadline}</p>
        </div>
        <EditModal editModalShow={editModalShow} setEditModalShow={setEditModalShow} todoTask={todoTask} setTodoTask={setTodoTask} todos={todos} setTodos={setTodos}/>
        <DeleteModal deleteModalShow = {deleteModalShow} setDeleteModalShow={setDeleteModalShow} todoTask={todoTask} todos={todos} setTodos={setTodos}/>
    </div>
    
    )
}

export default TodoCard