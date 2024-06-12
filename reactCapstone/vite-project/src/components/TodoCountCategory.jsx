import styles from './todocounts.module.css'
import getCategoryColor from './getCategoryColor';

const TodoCountCategory = ({category,countTodo,todos,setFilterState,setFilteredArray}) => {

    const {colorClass,countCategory} = getCategoryColor(category, countTodo);
    // console.log(colorClass);
    function filterCategory(category){
        setFilterState(true);
        console.log(`Clicked ${category}`)
        let output = todos.filter((todo) => todo.category === category);
        setFilteredArray(output);
        console.log(`output filtered ${JSON.stringify(output)}`)
        // setTodos(output);
    }

    return(
        
        <li className={styles.todoAsideSubList}>
            <i className={`bi bi-circle-fill ${colorClass}`}></i>
            <span className={styles.subList} onClick={()=>filterCategory(category)}>&nbsp;&nbsp;{category} &nbsp;&nbsp;</span>
            <span className={`badge text-bg-secondary ${styles.todoCountBadge}`}>{countCategory}</span>  
        </li>
    );
}

export default TodoCountCategory