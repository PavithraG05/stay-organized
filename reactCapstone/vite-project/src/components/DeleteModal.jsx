import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './deletemodal.module.css';
import { useState } from 'react';

const DeleteModal = ({deleteModalShow, setDeleteModalShow, todoTask, todos, setTodos}) =>{

    const [deleteErr, setDeleteErr] = useState("");
    console.log(todos.length);
    function deleteTodo(){
        let filter_todos = [];
        filter_todos = todos.filter((todo)=> todo.id !== todoTask.id);
        console.log(filter_todos);
        console.log(filter_todos.length);
        
        fetch(`http://localhost:8085/api/todos/${todoTask.id}`,{
            method:"DELETE"
            })
            .then(response => {
                response.json();
                
                setTodos(filter_todos);
                setDeleteModalShow(false);
                setDeleteErr("");
            })
            .catch(err => {
                console.log(err);
                setDeleteErr("Error in deleting todo");
            });
    }

    function handleSubmit(event){
        event.preventDefault();
        deleteTodo();
    }

    function handleClose(){
        setDeleteModalShow(false);
    }

    return(
        <Modal show={deleteModalShow} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body>Are you sure you want to delete the task: "{todoTask.description}"?<br/>
            <span className={styles.noteText}>(Kindly note the delete action is irreversible)</span>
            {deleteErr && <span className={`${styles.errorFormField}`}><br/>{deleteErr}</span>}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" className={styles.btnColor} onClick={handleSubmit}>
                Yes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                No
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal