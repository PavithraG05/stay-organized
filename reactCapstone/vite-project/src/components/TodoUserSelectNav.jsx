import styles from './todouserselectnav.module.css';
import useFetch from './useFetch';


const TodoUserSelectNav = ({setUserid}) => {
    
    const {data: usernames, loading, error} = useFetch("users");
    console.log(usernames);
    if (loading) return "Loading...";

    function handleChange(e){
    //    console.log(e);
       setUserid(e.target.value);
    }

    // console.log(userid);
    return(
        
        <div className="container">
            <div className={`${styles.todoContainer} rounded-0`}>
                <form>
                    <div className={`row justify-content-between`}>
                        <div className="col-sm-12 col-md-7 col-xl-7">
                            <div className="form-group">
                                <select className={`form-select ${styles.todoSelect}`} onChange={handleChange}>
                                        <option value=""  >Select an user to view their todos</option>
                                        {usernames && usernames.map((option) => {
                                        return (
                                            <option key={option.id} value={option.id}>
                                            {option.name}
                                            </option>
                                        );
                                        })}
                                </select>
                                {error && <div className={`${styles.errorFormField}`}>
                                    Error fetching details using API
                                </div>}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-xl-3">
                            <button className={`btn fw-bold ${styles.todoAddBtnClass}`} type="button" id="addTodosBtn"><i className={`bi bi-plus-square-fill ${styles.todoAddIcon}`}></i>Add Todo Task</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodoUserSelectNav