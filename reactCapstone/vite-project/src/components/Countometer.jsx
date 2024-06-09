import { useState, useEffect } from "react";

const Countometer = ({todos,countTodo,setCountTodo}) => {

    // const [personalCount, setPersonalCount] = useState(0);
    // const [errandCount, setErrandCount] = useState(0);
    // const [workCount, setWorkCount] = useState(0);
    // const [helpCount, setHelpCount] = useState(0);
    // const [financeCount, setFinanceCount] = useState(0);
    // const [householdCount, setHouseHoldCount] = useState(0);
    // const [highCount, setHighCount] = useState(0);
    // const [lowCount, setLowCount] = useState(0);
    // const [mediumCount, setMediumCount] = useState(0);
    // const [completedCount, setCompletedCount] = useState(0);
    // const [pendingCount, setPendingCount] = useState(0);

    
    useEffect(() => {
        count_todo();
    },[todos]);

    function count_todo(){
        
        let total_count = 0;
        let personal_count = 0;
        let errand_count = 0;
        let work_count = 0;
        let  help_count = 0;
        let finance_count = 0;
        let household_count = 0;
        let high_count = 0;
        let medium_count = 0;
        let low_count = 0;
        let completed_count = 0;
        let pending_count = 0;
        // console.log(personal_count,errand_count,work_count,help_count,finance_count,household_count);
        console.log(`in countometer ${todos}`)
        todos.map((todo) => {
            console.log(todo);
            if(todo.category === "Personal Task"){
                personal_count ++;
            }
            else if(todo.category === "Errand"){
                errand_count ++ ;
            }
            else if(todo.category === "Work Task"){
                work_count ++;
            }
            else if(todo.category === "Help Others"){
                help_count ++;
            }
            else if(todo.category === "Financial Task"){
                finance_count ++;
            }
            else{
                household_count ++;
            }
            
            if(todo.priority === "High" || todo.priority === "high"){
                high_count ++;
            }else if(todo.priority === "Low" || todo.priority === "low"){
                low_count ++;
            }else if(todo.priority === "Medium" || todo.priority === "medium"){
                medium_count ++;
            }
            
            if(todo.completed === true){
                completed_count ++;
            }else{
                pending_count++;
            }

            total_count = todos.length;
            setCountTodo((countTodo)=>(
                {...countTodo,
                    totalCount: total_count,
                    personalCount:personal_count, 
                    errandCount:errand_count,
                    workCount:work_count,
                    helpCount:help_count,
                    financeCount:finance_count,
                    householdCount:household_count,
                    highCount:high_count,
                    mediumCount:medium_count,
                    lowCount:low_count,
                    completedCount:completed_count,
                    pendingCount:pending_count
                }));
        })
        // console.log(personal_count,errand_count,work_count,help_count,finance_count,household_count);
        // console.log(high_count,low_count,medium_count);
        // console.log(completed_count,pending_count);
    }
    console.log(countTodo);
    return(
        <>
            {console.log("rendered")}
        </>
    );
}

export default Countometer