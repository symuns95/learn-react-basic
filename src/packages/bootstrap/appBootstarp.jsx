import React from 'react'
import Header from './header'
import Footer from './footer'
import { Row, Container, Col } from 'react-bootstrap'
const AppBootstrap = () => {
    return (
        <>
            <Header />
            <section className="container-xxl">
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                {/* now container-fulid for extra lage screen and container for other screen */}
                <Container fulid="xl">
                    {/* initial row style is flex/wrap/marginleft/marginright */}
                    <Row>
                        {/* xs mean initaial value I can set initial value by xs */}
                        <Col xs={12} xl={6} lg={8} md={12} className="border">
                            xs=12 md=12 lg=8 xl=6
                        </Col>
                        {/* I can set different breakpoint */}
                        <Col xs={6} xl={6} lg={4} md={12} className="border">
                            xs=6 md=12 lg=4 xl=6
                        </Col>
                    </Row>

                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row>
                        <Col xs={6} md={4} className="border">
                            xs=6 md=4
                        </Col>
                        <Col xs={6} md={4} className="border">
                            xs=6 md=4
                        </Col>
                        <Col xs={6} md={4} className="border">
                            xs=6 md=4
                        </Col>
                    </Row>

                    {/* Columns are always 50% wide, on mobile and desktop */}
                    <Row>
                        <Col xs={6} className="border">xs=6</Col>
                        <Col xs={6} className="border">xs=6</Col>
                    </Row>
                </Container>
                <Container className="my-6">
                    <Row>
                        {/* sm mean  now sm 8 till small screen<*/}
                        <Col sm={8} className="border bg-blue-200">sm=8 <br /> now sm 8 till small screen</Col>
                        <Col sm={4} className="border bg-blue-200">sm=4 <br /> now sm 4 till small screen</Col>
                    </Row>
                    <Row>
                        <Col sm className="border bg-blue-200">sm=true <br /> mean now it take all col equal value</Col>
                        <Col sm className="border bg-blue-200">sm=true <br /> mean now it take all col equal value</Col>
                        <Col sm className="border bg-blue-200">sm=true <br /> mean now it take all col equal value</Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {/* if I set xs=true then all time col takes equal value */}
                        <Col xs className="border">First, but unordered</Col>
                        {/* I can set col by order */}
                        <Col xs={{ order: 12 }} className="border">Second, but last</Col>
                        <Col xs={{ order: 1 }} className="border">Third, but second</Col>
                        {/* i can give string value */}
                        <Col xs={{ order: 'first' }} className="border">Third, but first</Col>
                    </Row>
                </Container>
                <Container className="my-5">
                    <Row>
                        <Col md={4} className="border">md=4</Col>
                        {/* now col take col-md-4 and offset-md-4 */}
                        <Col md={{ span: 4, offset: 4 }} className="border">{`md={{ span: 4, offset: 4 }}`}</Col>
                    </Row>
                    <Row>
                        {/* now col take col-md-3 offset-md-3 */}
                        <Col md={{ span: 3, offset: 3 }} className="border">{`md={{ span: 3, offset: 3 }}`}</Col>
                        {/* now col take col-md-3 offset-md-3 */}
                        <Col md={{ span: 3, offset: 3 }} className="border">{`md={{ span: 3, offset: 3 }}`}</Col>
                    </Row>
                    <Row>
                        {/* now col take col-md-6 offset-md-3 */}
                        <Col md={{ span: 6, offset: 3 }} className="border">{`md={{ span: 6, offset: 3 }}`}</Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default AppBootstrap
