import TodoCounts from "./TodoCounts"
import TodoUserSelectNav from "./TodoUserSelectNav"
import Todos from "./Todos"
import styles from './viewtodos.module.css'
import { useState } from 'react';

const ViewTodo = () => {

    const [userid, setUserid] = useState(null);

    return(
        <div className={styles.todosArea}>
            <div className="row">
                <div className="col-lg-4 col-xl-3 bg-light">
                    <TodoCounts/>
                </div>
                <div className="col-lg-7 col-xl-8 g-2">
                    <TodoUserSelectNav setUserid={setUserid}/>
                    <Todos userid={userid}/>
                </div>
            </div>
        </div>
    );
}

export default ViewTodo