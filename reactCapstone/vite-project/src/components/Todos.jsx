import styles from './todos.module.css'
import useFetch from './useFetch';

const Todos = (props) => {

    
    const {data: todos, loading, error} = useFetch(`todos/byuser/${props.userid}`);
    console.log(todos);
    if (loading) return "Loading...";

    console.log(props.userid);
    return(
        <div>
            <div className={styles.TodoImageContainer}>
                <img src="/todo2.jpeg" alt="no to-do to show yet" className={styles.noTodosImage}/>
            </div>
        </div>
    )
}

export default Todos