import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { getNews } from '../shared/news/news';
import { Link } from 'react-router-dom';

export default function News () {
    //Obtain Articles
    const newsTopics = getNews().sort((a, b) => b.id - a.id);

    //First Article
    const theNews = newsTopics[0];

    //Japan Additions
    const newUnits = theNews.article.new?.units
    const newEquips = theNews.article.new?.equips
    const newDream = theNews.article.new?.dream

    //Global Addition
    const globalUnits = theNews.article.globalUpdate?.units
    const globalEquips = theNews.article.globalUpdate?.equips
    const globalDream = theNews.article.globalUpdate?.dream

    //innerHTML usually unsafe, but there's no user-submitted content so no javascript injections

    /**
     * 1) key = index
     * 2) Index 1 = Row for most recent news
     * 3) Else, cardgroup
     */
    return (
        <Container style={{marginTop: "5rem"}}>
            <Row>
                <Card style={{backgroundColor: "#292930", padding: "0" }}>
                    <CardHeader style={{padding: "1rem"}}>
                        <h1><center><strong>Changelogs</strong></center></h1>
                    </CardHeader>
                </Card>
            </Row>
            <Row>
                <RenderNewest newUnits={newUnits} newEquips={newEquips} newDream={newDream} globalUnits={globalUnits} globalEquips={globalEquips} globalDream={globalDream} intro={theNews.article.intro} date={theNews.date} />
            </Row>
            <Row>
                <CardGroup style={{marginTop: "4em"}}>
                    {
                        newsTopics.map((theNews, i) => {
                            if(i !== 0) {
                                return (
                                    <React.Fragment key={i}>
                                        <Col md="4">
                                        <Link to={`/news/${theNews.date}`} style={{textDectoration: "none"}}>
                                            <Card style={{ backgroundColor: "#25274d", color: "#aaabb8", marginBottom: "1em"}}>
                                                <center>
                                                    <h3>{theNews.date}</h3>
                                                </center>
                                            </Card>
                                        </Link>
                                        </Col>
                                    </React.Fragment>
                                )
                            }
                            return null
                        })
                    }
                </CardGroup>
            </Row>
        </Container>
    )
}

const RenderIntro = ({ intro }) => {
    return (
        <>
            <p>{intro}</p>
            <br/>
            <br/>
            <h2><b>Here are Today's Additions</b></h2>
            <br/><br/>
        </>
    )
}

const RenderUnit = ({unitname, unitid}) => {
    //Display Unit's name in URL, and Display Image of Unit

    return (
        <a href={`https://www.grandsummoners.info/units/${unitname}`}>
            <img src={`/db/Units/Thumbnail/unit_thumbnail_${unitid}.png`} style={{maxHeight: "100px"}} alt={unitname}/>
        </a>
    )
}

const RenderEquip = ({equipname, equipid}) => {
    //Display Equip's name in URL, Display Image of Equip

    return (
        <a href={`https://www.grandsummoners.info/equips/${equipname}`}>
            <img src={`/db/Equipment/Thumbnail/item_thumbnail_${equipid}.png`} style={{maxHeight: "100px"}} alt={equipname}/>
        </a>
    )
}

const RenderNewest = ({ newUnits, newEquips, newDream, globalUnits, globalEquips, globalDream, intro, date }) => {
    return (
        <Card style={{ backgroundColor: "#292930", color: "#e7f9fc", padding: "0px", margin: "0px"}}>
            <CardHeader style={{backgroundColor: "#22bbff", color: "#292930", paddingTop: "1em", paddingBottom: "1em", height: "80px"}}>
                <center><h1>{date}</h1></center>
            </CardHeader>
            <CardBody style={{ marginTop: "30px", overflowY: "scroll", height: "700px" }}>
                <center>
                    <RenderIntro intro={intro} />
                    {/*Checks if any NEW units, then renders*/}
                    {
                        newUnits?.length > 0 ? 
                        <>
                            <h3 style={{marginBottom: "1em"}}>The Following Unit(s) have been added: </h3>
                            {
                                newUnits.map(([unitname, unitid]) => {
                                    return (
                                        <React.Fragment key={unitid}>
                                            <RenderUnit unitname={unitname} unitid={unitid} />
                                        </React.Fragment>
                                    )
                                }
                                )
                            }
                            
                        </>
                        :
                        null
                    }

                    {/*Checks if any NEW equips, then renders*/}
                    {
                        newEquips?.length > 0 ? 
                        <div style={{ marginTop: "4em"}}>
                            <h3 style={{marginBottom: "1em"}}>The Following Equip(s) have been added: </h3>
                            {
                                newEquips.map(([equipname, equipid]) => {
                                    return (
                                        <React.Fragment key={equipid}>
                                            <RenderEquip equipname={equipname} equipid={equipid} />
                                        </React.Fragment>
                                    )
                                    })
                            }
                        </div>
                        :
                        null
                    }

                    {/*Checks if any NEW Dream Evos, then renders*/}
                    {
                        newDream?.length > 0 ? 
                        <div style={{ marginTop: "4em"}}>
                            <h3 style={{marginBottom: "1em"}}>The Following Unit(s) have received a Dream Evolution in Japan: </h3>
                            {
                                newDream.map(([unitname, unitid]) => {
                                    return (
                                        <React.Fragment key={unitid}>
                                            <RenderUnit unitname={unitname} unitid={unitid} />
                                        </React.Fragment>
                                    )
                                }
                                )
                            }
                            
                        </div>
                        :
                        null
                    }

                    {/*Checks if any GLOBAL units were released, then renders*/}
                    {
                        globalUnits?.length > 0 ? 
                        <div style={{ marginTop: "4em"}}>
                            <h3 style={{marginBottom: "1em"}}>The Following Unit(s) have been added to Global Filters: </h3>
                            {
                                globalUnits.map(([unitname, unitid]) => {
                                    return (
                                        <React.Fragment key={unitid}>
                                            <RenderUnit unitname={unitname} unitid={unitid} />
                                        </React.Fragment>
                                    )
                                }
                                )
                            }
                            
                        </div>
                        :
                        null
                    }

                    {/*Checks if any GLOBAL equips, then renders*/}
                    {
                        globalEquips?.length > 0 ? 
                        <div style={{ marginTop: "4em"}}>
                            <h3 style={{marginBottom: "1em"}}>The Following Equip(s) have been added to Global Filters: </h3>
                            {
                                globalEquips.map(([equipname, equipid]) => {
                                    return (
                                        <React.Fragment key={equipid}>
                                            <RenderEquip equipname={equipname} equipid={equipid} />
                                        </React.Fragment>
                                    )
                                    })
                            }
                        </div>
                        :
                        null
                    }

                    {/*Checks if any GLOBAL Dream were released, then renders*/}
                    {
                        globalDream?.length > 0 ? 
                        <div style={{ marginTop: "4em"}}>
                            <h3 style={{marginBottom: "1em"}}>The Following Unit(s) have had their Dream Evolutions added to Global: </h3>
                            {
                                globalDream.map(([unitname, unitid]) => {
                                    return (
                                        <React.Fragment key={unitid}>
                                            <RenderUnit unitname={unitname} unitid={unitid} />
                                        </React.Fragment>
                                    )
                                }
                                )
                            }
                        </div>
                        :
                        null
                    }
                    <p style={{marginTop: "2em"}}>That is all for today. As usual, if you spot any bugs, incorrect information, or missing lore, please use the #discord-feedback channel on the Grand Summoners Official Discord</p>
                    <p>Until Next Time, </p>
                    <p>GSOD Team</p>
                </center>
            </CardBody>
        </Card>
    )
}