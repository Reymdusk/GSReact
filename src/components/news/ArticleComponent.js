import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Card, CardHeader, CardBody } from 'reactstrap';
import { getNewsById } from '../../shared/news/news';
import '../../App.css'

export default function Article () {
    const { articleId } = useParams();
    const newsArticle = getNewsById(articleId);
    const date = newsArticle.date
    const intro = newsArticle.article.intro
    const newUnits = newsArticle.article.new?.units
    const newEquips = newsArticle.article.new?.equips
    const globalUnits = newsArticle.article.globalUpdate?.units
    const globalEquips = newsArticle.article.globalUpdate?.equips

    return (
        <Container style={{marginTop: "5rem"}}>
            <Row>
                <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                    <CardHeader style={{backgroundColor: "#22bbff", color: "#292930", padding: "0"}}>
                        <h1><center><strong>{date}</strong></center></h1>
                    </CardHeader>
                    <CardBody>
                        <center>
                            {
                                <>
                                    <RenderIntro intro={intro} />
                                    
                                    {/*Checks if any NEW units, then renders*/}
                                    {
                                        newUnits?.length > 0 ? 
                                        <>
                                            <h3 style={{marginBottom: "1em"}}>The Following Unit(s) have been Added: </h3>
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
                                            <h3 style={{marginBottom: "1em"}}>The Following Equip(s) have been Added: </h3>
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
                                    {/*Checks if any GLOBAL units were released, then renders*/}
                                    {
                                        globalUnits?.length > 0 ? 
                                        <>
                                            <h3 style={{marginBottom: "1em"}}>The Following Unit(s) have been Added to Global Filters: </h3>
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
                                            
                                        </>
                                        :
                                        null
                                    }

                                    {/*Checks if any GLOBAL equips, then renders*/}
                                    {
                                        globalEquips?.length > 0 ? 
                                        <div style={{ marginTop: "4em"}}>
                                            <h3 style={{marginBottom: "1em"}}>The Following Equip(s) have been Added to Global Filters: </h3>
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
                                </>
                            }
                            <a href="/news"><button style={{backgroundColor: "#22bbff", color: "#292930", marginTop: "4em" }}>Return to Changelogs</button></a>
                        </center>
                    </CardBody>
                </Card>
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