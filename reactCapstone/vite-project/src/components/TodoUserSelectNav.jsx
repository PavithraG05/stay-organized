import styles from './todouserselectnav.module.css';
import useFetch from './useFetch';


const TodoUserSelectNav = ({setUserid, apiError}) => {
    
    const {data: usernames, loading, error} = useFetch("users");
    console.log("users populated in select");
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
                                {apiError && <div className={`${styles.errorFormField}`}>
                                    {apiError}
                                </div>}
                                {error && <div className={`${styles.errorFormField}`}>
                                    Error fetching user details using API
                                </div>}
                            </div>
                        </div>
                        
                        <div className="col-sm-12 col-md-3 col-xl-3">
                            <a className={`btn fw-bold ${styles.todoAddBtnClass}`} type="button" id="addTodosBtn" href="/addtodo"><i className={`bi bi-plus-square-fill ${styles.todoAddIcon}`}></i>Add Todo Task</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodoUserSelectNav