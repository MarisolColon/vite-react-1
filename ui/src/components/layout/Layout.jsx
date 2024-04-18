import { Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (<>
        <Header />
        <Container>
            <Row>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
        <Footer />
    </>)
}