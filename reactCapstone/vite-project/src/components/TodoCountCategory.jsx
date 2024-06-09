import styles from './todocounts.module.css'
import getCategoryColor from './getCategoryColor';

const TodoCountCategory = ({category,countTodo}) => {

    const {colorClass,countCategory} = getCategoryColor(category, countTodo);
    // console.log(colorClass);
    return(
        
        <li className={styles.todoAsideSubList}>
            <i className={`bi bi-circle-fill ${colorClass}`}></i>
            <span onclick="filterCategory('${categoryName}')">&nbsp;&nbsp;{category} &nbsp;&nbsp;</span>
            <span className={`badge text-bg-secondary ${styles.todoCountBadge}`}>{countCategory}</span>  
        </li>
    );
}

export default TodoCountCategory