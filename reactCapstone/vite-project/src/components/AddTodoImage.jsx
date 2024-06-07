import styles from './addtodoimage.module.css';

const AddTodoImage = () => {
    return(
        
        <div className={`${styles.newtodoImageLeft}`}>
            <img src="/new-2.jpeg" className={`${styles.pencilImage}`}/>
        </div>
    );
}

export default AddTodoImage