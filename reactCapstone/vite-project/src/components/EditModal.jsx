import styles from './editmodal.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import useFetch from './useFetch';
import { useState,useEffect } from 'react';

const EditModal = ({editModalShow, setEditModalShow, todoTask, setTodoTask, todos, setTodos}) => {

  console.log(`In edit Modal ${JSON.stringify(todoTask)}`);

  const {data: categories, loading, error} = useFetch("categories");
  const [editFormErr, setEditFormErr] = useState("");
  const updatedTodo = {
    category:todoTask.category,
    description:todoTask.description,
    priority:todoTask.priority,
    deadline:todoTask.deadline,
    completed:todoTask.completed
  }
  const [editForm, setEditForm] = useState({});
  useEffect(()=>{
    setEditForm(updatedTodo);
  },[todoTask])

  console.log(`In Edit Modal ${JSON.stringify(editForm)}`);
  console.log(`Todos ${JSON.stringify(todos)}`);

  function updateTodo(editForm, status){

    console.log(updatedTodo);
    fetch(`http://localhost:8085/api/todos/${todoTask.id}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body: JSON.stringify({
        category:editForm.category,
        description:editForm.description,
        deadline:editForm.deadline,
        priority:editForm.priority,
        completed:status,
      })
      })
      .then(response => {
          response.json();
      })
      .then (json => {
          //$('.toast').toast('show');
          // alert('Todo status has been updated successfully');
          setTodoTask((todoTask) => ({...todoTask,
              category:editForm.category,
              description:editForm.description,
              deadline:editForm.deadline,
              priority:editForm.priority,
              completed:editForm.completed,
          }));
          const new_todos = todos.map((todo) => todo.id === todoTask.id ? 
            {...todo,description:editForm.description,
            category:editForm.category,
            deadline:editForm.deadline,
            priority:editForm.priority,
            completed:status, 
            }:todo)
          
          console.log(`new_todos ${JSON.stringify(new_todos)}`);
          setTodos(new_todos);
          setEditModalShow(false);
          setEditFormErr("");
      })
      .catch(err => {
          console.log(err);
          setEditFormErr("Error in updating the task details");
      });
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(todoTask);
    let status = "";
    if(editForm.completed === "Pending"){
      status = Boolean(false);
    }
    else{
      status = Boolean(true);
    }
    

    if(editForm.category && editForm.description && editForm.priority && editForm.deadline && editForm.completed){
      updateTodo(editForm, status);
      console.log(status);
    }
    else{
        !editForm.category ? setEditFormErr("Category should not be empty") : setEditFormErr("");
        !editForm.description ? setEditFormErr("Description should not be empty") : setEditFormErr("");
        !editForm.priority ? setEditFormErr("Priority should not be empty") : setEditFormErr("");
        !editForm.deadline ? setEditFormErr("Deadline should not be empty") : setEditFormErr("");
        !editForm.completed ? setEditFormErr("Status should not be empty") : setEditFormErr("");
    }
    
    
  }
  
  function handleClose(){
    setEditModalShow(false);
  }

  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setEditForm((editForm) => ({
      ...editForm,
      [name]: value,
    })
    );
  }

  if (loading) return "Loading...";
  if(error) setEditFormErr("Error fetching categories using API");
  return (
    <>

      <Modal show={editModalShow} onHide={handleClose} centered className={styles.font}>
        <Modal.Header closeButton>
          <Modal.Title><i className={`bi bi-pencil-square`}></i> &nbsp;Edit Todo Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="form-group p-2">
              <label>Category*</label>
              <select className={`form-select ${styles.inputHover}`} name="category" value={editForm.category} onChange={handleChange}>
              
                  {categories && categories.map((option) => {
                  return (
                      <option key={option.id} value={option.name}>
                      {option.name}
                      </option>
                  );
                  })}
              </select>
            </div>
            <div className="form-group p-2">
              <label className="form-label">Description*</label>
              <textarea className={`form-control`} id="description" rows="3"  name="description" value={editForm.description} onChange={handleChange}></textarea>
              
            </div>
            <div className="form-group p-2">
                <label>Deadline*</label>
                <input type="date" className={`form-control ${styles.inputHover}`} name="deadline" value={editForm.deadline} onChange={handleChange}/>
                
            </div>
            <div className="form-group p-2">
                <label>Priority*</label>
                <select className={`form-select ${styles.inputHover}`} name="priority" value={editForm.priority} onChange={handleChange}>
                  <option key="High" value="High">High</option>
                  <option key="Medium" value="Medium">Medium</option>
                  <option key="Low" value="Low">Low</option>
                </select>
                
            </div>
            <div className="form-group p-2">
                <label>Status*</label>
                <select className={`form-select ${styles.inputHover}`} name="completed" value={editForm.completed} onChange={handleChange}>
                  <option key="Completed" value="Completed">Completed</option>
                  <option key="Pending" value="Pending">Pending</option>
                </select>
                
            </div>
            {editFormErr && <div className={`${styles.errorFormField}`}>
                {editFormErr}
            </div>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className={styles.btnColor} onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default EditModal