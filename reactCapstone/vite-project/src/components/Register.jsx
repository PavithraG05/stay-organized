import RegisterImage from "./RegisterImage";
import RegisterUserForm from "./RegisterUserForm";

const Register = () => {
    return(
        <div className="row">
            <div className="col-lg-5">
                <RegisterImage/>
            </div>
            <div className="col-sm-12 col-lg-7 container">
                <RegisterUserForm/>
            </div>
        </div>
    );
}

export default Register;