import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap'

const Header = () => {
    return (
            <Jumbotron fluid className="header-top">
                <Container>
                     <h1 className="logo-header" variant="h5" align="center">Todo App</h1>
                </Container>
            </Jumbotron>
    )
}
export default Header;