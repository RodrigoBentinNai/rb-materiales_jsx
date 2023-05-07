import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/rb_logo.jpg"

const styles = {
    logo: {
        height: 40,
        paddingRight: 30
    }
}

const NavBar = () => {
    return (
            <nav>
            
            <Navbar bg="primary" variant="dark">
                <Container>
                    <img src={logo} alt="logo" style={styles.logo} />
                    <Navbar.Brand href="#home">RB-Materiales</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Obra Gruesa</Nav.Link>
                    <Nav.Link href="#features">Terminaciones</Nav.Link>
                    <Nav.Link href="#pricing">Herramientas</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
            </nav>
    )
}

export default NavBar