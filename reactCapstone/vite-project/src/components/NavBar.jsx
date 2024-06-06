import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './navbar.module.css'

const NavBar = () => {
    return(
        <div className="NavBar">
            <Navbar expand="lg" className={styles.navbar}>
                <Container >
                    <Navbar.Brand href="#home">{<div className={styles.navbarBrand}><img  src="/text-1716182278752.png" alt="3D fonts"></img></div>}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`${styles.headerNav}`}>
                        
                            <Nav.Link href="#home" className={styles.navTextColor}>
                                <i className={`bi bi-house-door-fill ${styles.houseFill}`}></i>&nbsp;Home
                            </Nav.Link>
                            <NavDropdown className="text-white" title="Todos" id="basic-nav-dropdown">
                            <NavDropdown.Item className={styles.navTextColor} href="#action/3.1">Add Todos</NavDropdown.Item>
                            <NavDropdown.Item className={styles.navTextColor} href="#action/3.2">View Todos</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link" className={styles.navTextColor}>
                            <i className={`bi bi-person-circle ${styles.personCircle}`}></i>&nbsp;Register
                            </Nav.Link>
        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar