

export default function getCategoryColorTodo(categoryName){
    let colorClass = '';
    
        
    categoryName === "Personal Task" ? colorClass = 'bg-primary':
    categoryName === "Household Task" ? colorClass = 'bg-warning':
    categoryName === "Financial Task" ? colorClass = 'bg-danger':
    categoryName === "Help Others" ? colorClass = 'bg-dark':
    categoryName === "Errand" ? colorClass = 'bg-info':
    colorClass = 'bg-success';

    // console.log(`category ${categoryName} ${colorClass}`);
    return colorClass;
}