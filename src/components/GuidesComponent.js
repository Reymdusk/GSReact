import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const imageSize = { 
    width: "100%",
    maxWidth: "25rem",
    height: "auto"
}

export default function GuidesMainPage () {
    //TODO: Replace the Title with an image banner of the article
    //TODO: Route Guides
    return (
        <Container style={{marginTop: "5rem"}}>
            <Row>
                <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                    <CardHeader style={{backgroundColor: "#22bbff", color: "#292930", padding: "0"}}>
                        <h1><center><strong>Game Guides</strong></center></h1>
                    </CardHeader>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                    <CardBody >
                        <h1 style={{color: "#e7f9fc"}}><b><center>Popular Guides</center></b></h1>
                        <CardGroup style={{alignItems: "center", justifyContent: "center", width: "100%"}}>
                            <Link to="FAQ" activeClassName="active">
                                <Col lg="auto">
                                    <img src="/db/guides/FAQBanner.png" style={imageSize} alt="FAQ" />
                                </Col>
                            </Link>

                        </CardGroup>
                        <h1 style={{color: "#e7f9fc"}}><b><center>Guide Categories</center></b></h1>
                        <CardGroup style={{alignItems: "center", justifyContent: "center", width: "100%"}}>
                            <Link to="crest-guides" activeClassName="active">
                                <Col lg="auto">
                                    <img src="/db/guides/CrestGuidesBanner.png" style={imageSize} alt="Crest Guides" />
                                </Col>
                            </Link>
                            <Link to="dungeon-of-trials">
                                <Col lg="auto">
                                    <img src="/db/guides/DOTBanner.png" style={imageSize} alt="Dungeon of Trials" />
                                </Col>
                            </Link>
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}

/*
                            <Link to="reroll-guide" activeClassName="active">
                                <Col lg="auto">
                                    <Card style={cardSize}>
                                            <h1><b><center>Current Reroll Recommendations</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                            <Link to="curret-banner" activeClassName="active">
                                <Col lg="auto">
                                    <Card style={cardSize}>
                                            <h1><b><center>Current Banner Reviews</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>

                            <Link to="mines-guides" activeClassName="active">
                                <Col lg="auto">
                                    <Card style={cardCategorySize}>
                                            <h1><b><center>Mines Guides</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                            <Link to="giant-boss-guides" activeClassName="active">
                                <Col lg="auto">
                                    <Card style={cardCategorySize}>
                                            <h1><b><center>Giant Boss Guides</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
    <Link to="unit-reviews" activeClassName="active">
    <Col lg="auto">
        <Card style={cardCategorySize}>
                <h1><b><center>Unit Reviews</center></b></h1>
        </Card>
    </Col>
    </Link>
    <Link to="event-guides" activeClassName="active">
    <Col lg="auto">
        <Card style={cardCategorySize}>
                <h1><b><center>Event Guides</center></b></h1>
        </Card>
    </Col>
    </Link>
    <Link to="other-guides" activeClassName="active">
    <Col lg="auto">
        <Card style={cardCategorySize}>
                <h1><b><center>Other Guides</center></b></h1>
        </Card>
    </Col>
    </Link>
*/