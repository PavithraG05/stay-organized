import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './navbar.module.css'

const NavBar = () => {
    return(
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.navbarHeader}`}>
            <div className="container-fluid gx-0">
                <a className={`navbar-brand ${styles.navbarBrand}`} href="/" >
                    <img src="/text-1716182278752.png" alt="3D fonts"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className={`navbar-nav ${styles.headerNav}`}>
                        <a className="nav-link header-nav-link active text-white" aria-current="page" href="/"><i className={`bi bi-house-door-fill ${styles.houseFill}`}></i>&nbsp;Home</a>
                        <li className="nav-item header-nav-link dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className={`bi bi-pencil-fill`}></i>&nbsp;Todos
                            </a>
                            <ul className={`dropdown-menu ${styles.todoHeaderDropdown}`}>
                                <li><a className={`dropdown-item ${styles.todoHeaderDropdownList} text-white`} href="/addtodo">Add Todos</a></li>
                                <li><a className={`dropdown-item ${styles.todoHeaderDropdownList} text-white`} href="/viewtodo">View Todos</a></li>
                            </ul>
                        </li>
            
                        <a className="nav-link header-nav-link todo_link text-white" href="/register"><i className={`bi bi-person-circle ${styles.personCircle}`}></i>&nbsp;Register</a>
                    </div>
                </div> 
            </div>
        </nav>
    );
}

export default NavBar