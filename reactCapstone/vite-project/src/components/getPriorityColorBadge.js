
export default function getPriorityColorBadge(priority) {
    let colorPriorityClass = '';
        
    priority === "high" || priority === "High" ? colorPriorityClass = 'text-bg-danger':
    priority === "medium" || priority === "Medium" ? colorPriorityClass = 'text-bg-warning':
    colorPriorityClass = 'text-bg-success';

    // console.log(`priority ${priority} ${colorPriorityClass}`);
    return colorPriorityClass;
}

