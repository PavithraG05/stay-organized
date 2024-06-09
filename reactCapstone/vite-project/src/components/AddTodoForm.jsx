import { useEffect, useState } from 'react';
import styles from './addtodoform.module.css';
import ToastMsg from './ToastMsg';
import useFetch from './useFetch';

const todoForm = {
    Username:"",
    Category:"",
    Description:"",
    Deadline:"",
    Priority:"",
}

const todo = {

}

const AddTodoForm = () => {

    const [form,setForm] = useState(todoForm);
    
    const [usernameErr,setUsernameErr] = useState("");
    const [categoryErr,setCategoryErr] = useState("");
    const [descriptionErr,setDescriptionErr] = useState("");
    const [deadlineErr,setDeadlineErr] = useState("");
    const [priorityErr,setPriorityErr] = useState("");
    const [apiErr, setApiErr] = useState("");

    const {data: categories, loading, error} = useFetch("categories");
    const {data: usernames, userloading, usererror} = useFetch("users");
    console.log(categories);
    if (loading) return "Loading...";
    if(error) setCategoryErr("Error fetching categories using API");
    console.log(usernames);
    if (userloading) return "Loading...";
    if(usererror) setUsernameErr("Error fetching categories using API");

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value);
        setForm((form) => ({
            ...form,
            [name]: value,
        })
      );
    }

    function validateName(){
        setUsernameErr("");
        !form.Username ? setUsernameErr("Username should not be empty") : todo['userid'] = Number(form.Username);
        console.log(todo);
    }

    function validateCategory(){
        setCategoryErr("");
        !form.Category ? setCategoryErr("Category should not be empty") : todo['category'] = form.Category;
        console.log(todo);
    }

    function validateDescription(){
        setDescriptionErr("");
        !form.Description ? setDescriptionErr("Description should not be empty") : todo['description'] = form.Description;
        console.log(todo);
    }

    function validateDeadline(){
        setDeadlineErr("");
        !form.Deadline ? setDeadlineErr("Deadline should not be empty") : todo['deadline'] = form.Deadline;
        console.log(todo);
    }

    function validatePriority(){
        setPriorityErr("");
        !form.Priority ? setPriorityErr("Priority should not be empty") : todo['priority'] = form.Priority;
        console.log(todo);
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(todo);
        console.log(JSON.stringify(todo));
        if(form.Username && form.Category && form.Description && form.Deadline && form.Priority){
            addTodo()
            
            setForm(todoForm);
            
        }
        else{
            !form.Username ? setUsernameErr("Username should not be empty") : setUsernameErr("");
            !form.Category ? setCategoryErr("Category should not be empty") : setCategoryErr("");
            !form.Description ? setDescriptionErr("Description should not be empty") : setDescriptionErr("");
            !form.Deadline ? setDeadlineErr("Deadline should not be empty") : setDeadlineErr("");
            !form.Priority ? setPriorityErr("Priority should not be empty") : setPriorityErr("");
        }
    }

    function addTodo(){
        fetch('http://localhost:8085/api/todos',
            {
                method: "POST",
                headers:{"content-type":"application/json"},
                body: JSON.stringify(todo)
            }
        )
        .then((response) => response.json())
        .then((data) => {
            alert("Todo added successfully");
            // return(
            //     <ToastMsg msg="Todo added successfully"/>
            // )
        })
        .catch((error) => {
            console.log(error);
            setApiErr("Error fetching details using API");
        });
    }

    return(
        <div className="container">
                <div className={`${styles.newtodoContainer} rounded-0`}>
                    <form>
                        <div className="form-group p-2">
                            <label>Username*</label>
                            <select className={`form-select ${styles.inputHover}`} name="Username" value={form.Username} onChange={handleChange} onBlur={validateName}>
                                <option value="" >Choose an option</option>
                                {usernames && usernames.map((option) => {
                                return (
                                    <option key={option.id} value={option.id}>
                                    {option.name}
                                    </option>
                                );
                                })}
                            </select>
                            {usernameErr && <div className={`${styles.errorFormField}`}>
                                {usernameErr}
                            </div>}
                        </div>
                        <div className="form-group p-2">
                            <label>Category*</label>
                            <select className={`form-select ${styles.inputHover}`} name="Category" value={form.Category} onChange={handleChange} onBlur={validateCategory}>
                                <option value="" >Choose an option</option>
                                {categories && categories.map((option) => {
                                return (
                                    <option key={option.id} value={option.name}>
                                    {option.name}
                                    </option>
                                );
                                })}
                            </select>
                            {categoryErr && <div className={`${styles.errorFormField}`}>
                                {categoryErr}
                            </div>}
                        </div>
                        <div className="form-group p-2">
                            <label className="form-label">Description*</label>
                            <textarea className={`form-control`} id="description" rows="3"  name="Description" value={form.Description} onChange={handleChange} onBlur={validateDescription}></textarea>
                            <div className={`${styles.formText}`}>
                                Specify the task description in minimum words.
                            </div>
                            {descriptionErr && <div className={`${styles.errorFormField}`}>
                                {descriptionErr}
                            </div>}
                        </div>
                        <div className="form-group p-2">
                            <label>Deadline*</label>
                            <input type="date" className={`form-control ${styles.inputHover}`} name="Deadline" value={form.Deadline} onChange={handleChange} onBlur={validateDeadline}/>
                            {deadlineErr && <div className={`${styles.errorFormField}`}>
                               {deadlineErr}
                            </div>}
                        </div>
                        <div className="form-group p-2">
                            <label>Priority*</label>
                            <div className="form-check form-check-inline mx-3">
                                <input className={`form-check-input ${styles.inputHover}`} type="radio" name="Priority" value="Low" onChange={handleChange} checked={form.Priority==='Low'} onBlur={validatePriority}/>
                                <label className="form-check-label">Low</label>
                            </div>
                            <div className="form-check form-check-inline mx-3">
                                <input className={`form-check-input ${styles.inputHover}`} type="radio" name="Priority" value="Medium" onChange={handleChange} checked={form.Priority==='Medium'} onBlur={validatePriority}/>
                                <label className="form-check-label">Medium</label>
                            </div>
                            <div className="form-check form-check-inline mx-3">
                                <input className={`form-check-input ${styles.inputHover}`} type="radio" name="Priority" value="High" onChange={handleChange} checked={form.Priority==='High'} onBlur={validatePriority}/>
                                <label className="form-check-label">High</label>
                            </div>
                            {priorityErr && <div className={`${styles.errorFormField}`}>
                                {priorityErr}
                            </div>}
                        </div>
                        {apiErr && <div className="errorFormField">{apiErr}</div>}
                        <div className="row p-3 justify-content-center">
                            <button className={`btn text-white ${styles.newtodoBtn} rounded-0`} type="submit" onClick={handleSubmit}>ADD TODO</button>
                        </div>
                    </form>

                    {/* <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="d-flex">
                          <div className="toast-body" id="toast_msg">
                                Todo task has been added successfully
                          </div>
                          <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                    </div>
                     */}
                </div>
            </div>
        );
}

export default AddTodoForm