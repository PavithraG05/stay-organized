

export default function getCategoryColor(categoryName, countTodo){
    let colorClass = '';
    let countCategory = 0;
        
    categoryName === "Personal Task" ? (colorClass = 'text-primary', countCategory = countTodo.personalCount):
    categoryName === "Household Task" ? (colorClass = 'text-warning',countCategory = countTodo.householdCount):
    categoryName === "Financial Task" ? (colorClass = 'text-danger',countCategory = countTodo.financeCount):
    categoryName === "Help Others" ? (colorClass = 'text-dark',countCategory = countTodo.helpCount):
    categoryName === "Errand" ? (colorClass = 'text-info',countCategory = countTodo.errandCount):
    (colorClass = 'text-success',countCategory = countTodo.workCount);

    // console.log(`category ${categoryName} ${colorClass}`);
    return {colorClass, countCategory};
}