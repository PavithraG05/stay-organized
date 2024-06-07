import styles from './todocounts.module.css'

const TodoCountCategory = (props) => {

    function getColor(categoryName){
        let colorClass = '';
        
        categoryName === "Personal Task" ? colorClass = 'text-primary':
        categoryName === "Household Task" ? colorClass = 'text-warning':
        categoryName === "Financial Task" ? colorClass = 'text-danger':
        categoryName === "Help Others" ? colorClass = 'text-dark':
        categoryName === "Errand" ? colorClass = 'text-info':
        colorClass = 'text-success';

        console.log(`category ${categoryName} ${colorClass}`);
        return colorClass;
    }

    let colorClass = getColor(props.category);
    return(
        
        <li className={styles.todoAsideSubList}>
            <i className={`bi bi-circle-fill ${colorClass}`}></i>
            <span onclick="filterCategory('${categoryName}')">&nbsp;&nbsp;{props.category} &nbsp;&nbsp;</span>
            <span className={`badge text-bg-secondary ${styles.todoCountBadge}`}></span>  
        </li>
    );
}

export default TodoCountCategory