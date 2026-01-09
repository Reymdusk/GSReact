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
                            <Link to="dungeon-of-trials">
                                <Col lg="auto">
                                    <img src="/db/guides/DOTBanner.png" style={imageSize} alt="Dungeon of Trials" />
                                </Col>
                            </Link>
                            <a href="https://docs.google.com/document/d/1sTdmOg1K857H7MAuzZWUV4Kk-zwABDG3hl4anyPeAQA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <Col lg="auto">
                                    <img src="/db/guides/SRBanner.png" style={imageSize} alt="Summoners' Road" />
                                </Col>
                            </a>
                            <a href="https://docs.google.com/document/d/16IorJQQXMksXIYcNlu3i8iwWTEKeooEpgZG7l-rt4nY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <Col lg="auto">
                                    <img src="/db/guides/TribalRuinsBanner.png" style={imageSize} alt="Tribal Ruins" />
                                </Col>
                            </a>
                            <a href="https://docs.google.com/document/d/1OaGohMM8zZsCJ63MEosjiTP2aFStrMRZby7qKGEh6vw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <Col lg="auto">
                                    <img src="/db/guides/EleRuinsBanner.png" style={imageSize} alt="Elemental Ruins" />
                                </Col>
                            </a>
                            <a href="https://docs.google.com/document/d/14ztpoBP4MUjuFB1guR0shvLpERMz1r2H4DpfUdcnBMI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <Col lg="auto">
                                    <img src="/db/guides/GCBanner.png" style={imageSize} alt="Grand Crusade" />
                                </Col>
                            </a>
                            <a href="https://docs.google.com/document/d/1eERn4m-4WyBbaZIoCkgshY-BqZNpB5ey84uOQsnwv7I/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <Col lg="auto">
                                    <img src="/db/guides/MinesBanner.png" style={imageSize} alt="Magical Mines" />
                                </Col>
                            </a>
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}

/*
                            <Link to="crest-guides" activeClassName="active">
                                <Col lg="auto">
                                    <img src="/db/guides/CrestGuidesBanner.png" style={imageSize} alt="Crest Guides" />
                                </Col>
                            </Link>
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