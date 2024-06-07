import AddTodoForm from "./AddTodoForm";
import AddTodoImage from "./AddTodoImage";
import styles from './addtodo.module.css';

const AddTodo = () => {
    return(
        <div className = {`AddTodo ${styles.newtodo}`}>
            <AddTodoImage/>
            <AddTodoForm/>
        </div>
    );
}

export default AddTodo