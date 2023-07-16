import classNames from 'classnames';
import React, {useState} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup, UncontrolledAccordion, AccordionHeader, AccordionItem, AccordionBody,
            TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import { getUnits } from '../shared/unitInfo';
import { Default, Mobile } from './MobileCheckComponent';

const cardHeaderColor = {
    backgroundColor: "#22bbff", 
    color: "#292930"
}

const accordionColor = {
    backgroundColor: "#2e2e2e", 
    color: "#e7f9fc", 
    padding: "0"
}

export default function Tierlist() {
    //Tab hook
    const [currentTab, setCurrentTab] = useState('1');

    const toggle = tab => {
        if (currentTab !== tab) setCurrentTab(tab);
    }

    //Obtain Unit Data
    const units = getUnits();
    
    return (
        <Container style={{marginTop: "5rem"}}>
            <DisplayHeader />
            <Row>
                <Nav pills justified>
                    <NavItem>
                        <NavLink 
                            className={classNames({ active: currentTab === '1' })}
                            onClick={() => { toggle('1') }}
                            >
                            General Units
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            className={classNames({ active: currentTab === '2' })}
                            onClick={() => { toggle('2') }}
                            >
                            Luck Units
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={currentTab}>
                    <TabPane tabId="1">
                        <DisplayAccordion unit={units} />
                    </TabPane>
                    <TabPane tabId="2">
                        <DisplayLuck unit={units} />
                    </TabPane>
                </TabContent>
            </Row>
        </Container>
    )
}

function DisplayHeader(){
    return (
        <Row>
            <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px", marginBottom: "2rem"}}>
                <CardHeader>
                    <h1><center><strong>Global Tierlist</strong></center></h1>
                </CardHeader>
                <CardBody>
                        <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                            <CardHeader style={cardHeaderColor}>
                                <center><h4>LEGEND</h4></center>
                            </CardHeader>
                            <CardBody>
                                <center>
                                    <p><img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px"}} alt="True Weapon is Favorable for Unit" /> True Weapon Favorability (Bumped up 0-2 Subtiers)</p>
                                    <p><img src="/db/Icons/skill/thumbnail/skill5.png" style={{maxWidth: "20px"}} alt="Unit is reliant on True Weapon" /> True Weapon Reliance (Bumped up 2+ subtiers)</p>
                                    <p><img src="/db/Icons/skill/thumbnail/damage_up.png" style={{maxWidth: "20px"}} alt="Unit has a useful Cross Art with another unit" /> Notable Cross Arts Synergy</p>
                                </center>
                            </CardBody>
                        </Card>
                        <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                            <CardHeader style={cardHeaderColor}>
                                <center><h4>NOTE</h4></center>
                            </CardHeader>
                            <CardBody>
                                <p><center>This tierlist is for GLOBAL units only. Do <strong>not</strong> consider this gospel. Each unit may have their own niche, even the lower ranking units</center></p>
                                <p><center>This is simply meant to show the general analysis of each unit. </center></p>
                                <p><center>Rankings were determined by players from the Grand Summoners <a href="https://discord.gg/grandsummoners">Official Discord</a> Server Staff.</center></p>
                                <p><center>Be aware that the Rankings are based on their <b>most optimized</b> scenarios.</center></p>
                                <p><center><b>NOTE: </b>The "General Unit's" tab does not include all Luck units. Only impactful Luck units will be displayed.</center></p>
                                <p><center>The Luck Unit's tab will show all available (farmable) Luck Units.</center></p>
                            </CardBody>
                        </Card>
                </CardBody>
            </Card>
        </Row>
    )
}

function DisplayAccordion({unit}) {
    return (
        <UncontrolledAccordion flush defaultOpen={["SSS", "SS", "S", "A+", "A", "A-", "B+", "B", "B-", "C", "F", "TBD"]} stayOpen style={{marginTop: "3rem", width: "100%"}}>
            <DisplayRank unit={unit} rank="SSS" />
            <DisplayRank unit={unit} rank="SS" />
            <DisplayRank unit={unit} rank="S" />
            <DisplayRank unit={unit} rank="A+" />
            <DisplayRank unit={unit} rank="A" />
            <DisplayRank unit={unit} rank="A-" />
            <DisplayRank unit={unit} rank="B+" />
            <DisplayRank unit={unit} rank="B" />
            <DisplayRank unit={unit} rank="B-" />
            <DisplayRank unit={unit} rank="C" />
            <DisplayRank unit={unit} rank="F" />
            <DisplayRank unit={unit} rank="TBD" />
        </UncontrolledAccordion>
    )
}

function DisplayLuck({unit}) {
    return (
        <UncontrolledAccordion flush defaultOpen={["SSS", "SS", "S", "A", "B", "C", "F", "TBD"]} stayOpen style={{marginTop: "3rem", width: "100%"}}>
            <DisplayLuckRank unit={unit} rank="SSS" />
            <DisplayLuckRank unit={unit} rank="SS" />
            <DisplayLuckRank unit={unit} rank="S" />
            <DisplayLuckRank unit={unit} rank="A" />
            <DisplayLuckRank unit={unit} rank="B" />
            <DisplayLuckRank unit={unit} rank="C" />
            <DisplayLuckRank unit={unit} rank="F" />
            <DisplayLuckRank unit={unit} rank="TBD" />
        </UncontrolledAccordion>
    )
}

function DisplayRank({unit, rank}) {
    const desktopWidth = "80%";//"75px";
    const mobileWidth = "60%";//"60px";
    const desktopFont = "15px";
    const mobileFont = "12px";

    return (
        <>
            <AccordionHeader targetId={rank}>
                <h1><strong>{rank}</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId={rank} style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === rank && units.attribute === "Fire"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === rank && units.attribute === "Earth"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === rank && units.attribute === "Water"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === rank && units.attribute === "Light"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === rank && units.attribute === "Dark"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === rank && units.attribute === "Fire"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === rank && units.attribute === "Earth"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === rank && units.attribute === "Water"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === rank && units.attribute === "Light"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === rank && units.attribute === "Dark"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
        </>
    )
}

function DisplayLuckRank({unit, rank}) {
    const desktopWidth = "80%";//"75px";
    const mobileWidth = "60%";//"60px";
    const desktopFont = "15px";
    const mobileFont = "12px";

    return (
        <>
            <AccordionHeader targetId={rank}>
                <h1><strong>{rank}</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId={rank} style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.luckrank === rank && units.attribute === "Fire"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.luckrank === rank && units.attribute === "Earth"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.luckrank === rank && units.attribute === "Water"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.luckrank === rank && units.attribute === "Light"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.luckrank === rank && units.attribute === "Dark"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.luckrank === rank && units.attribute === "Fire"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.luckrank === rank && units.attribute === "Earth"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.luckrank === rank && units.attribute === "Water"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.luckrank === rank && units.attribute === "Light"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.luckrank === rank && units.attribute === "Dark"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
        </>
    )
}

function DisplayUnit({unit, imageSize, fontSizing}) {

    const thumbnailSize = {
        width: `${imageSize}`,
        maxWidth: "75px",
        margin: "0px",
        padding: "0px"
    };

    //If Unit is not awakened
    if (!unit.image.thumbawk) {
        return (
            <center>
                <Card style={{border: "none", width: "90px", backgroundColor: "rgba(0, 0, 0, 0)", padding: "0px", margin: "0px"}}>
                    <a href={`/units/${unit.name}/`} style={{textDecoration: "none"}}>
                        <img src={unit.image.thumb5} style={thumbnailSize} object-fit="cover" alt={unit.name} />
                        <br />
                        <p style={{paddingTop: "0px", marginTop: "0px", marginBottom: "0px", color: "#aaabb8", fontSize: `${fontSizing}`, width: "75px", display: "inline-block"}}>{unit.name}</p>
                    </a>
                </Card>
            </center>
        )
    }

    if(unit.twrequire){
        if(unit.twrequire === "reliance"){
            return (
                <center>
                    <Card style={{border: "none", width: "90px", backgroundColor: "rgba(0, 0, 0, 0)", padding: "0px", margin: "0px"}}>
                        <a href={`/units/${unit.name}/`} style={{textDecoration: "none"}}>
                            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" alt={unit.name} />
                            <br />
                            <p style={{paddingBottom: "2px", marginBottom: "2px", color: "#aaabb8", fontSize: `${fontSizing}`, width: "75px", display: "inline-block"}}>
                                {unit.name}
                            </p>
                            <img src="/db/Icons/skill/thumbnail/skill5.png" style={{maxWidth: "20px", paddingBottom: "0px", marginBottom: "2rem"}} alt="Unit is relaint on true weapon"/>
                        </a>
                    </Card>
                </center>
            )
        }
        /* if(unit.name === "Luahn") {
            return (
                <center>
                    <Card style={{border: "none", width: "90px", backgroundColor: "rgba(0, 0, 0, 0)", padding: "0px", margin: "0px"}}>
                        <a href={`/units/${unit.name}/`} style={{textDecoration: "none"}}>
                            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" alt={unit.name} />
                            <br />
                            <p style={{marginBottom: "0px", color: "#aaabb8", fontSize: `${fontSizing}`, width: "75px", display: "inline-block"}}>{unit.name}</p>
                            <img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px", paddingBottom: "0px", marginBottom: "2rem"}} alt="True Weapon is favorable for unit" />
                            <img src="/db/Icons/skill/thumbnail/damage_up.png" style={{maxWidth: "20px", paddingBottom: "0px", marginBottom: "2rem"}} alt="Unit has notable cross arts synergy with another unit" />
                        </a>
                    </Card>
                </center>
            )
        } */

        return (
            <center>
                <Card style={{border: "none", width: "90px", backgroundColor: "rgba(0, 0, 0, 0)", padding: "0px", margin: "0px"}}>
                    <a href={`/units/${unit.name}/`} style={{textDecoration: "none"}}>
                        {
                            unit.image.thumbsuper ? <img src={unit.image.thumbsuper} style={thumbnailSize} object-fit="cover" alt={unit.name} />
                            :
                            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" alt={unit.name} />
                        }
                        <br />
                        <p style={{paddingTop: "0px", marginTop: "0px", marginBottom: "0px", color: "#aaabb8", fontSize: `${fontSizing}`, width: "75px", display: "inline-block"}}>{unit.name}</p>
                        <img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px", paddingTop: "0px", marginTop: "0px", paddingBottom: "0px", marginBottom: "2rem"}} alt="True Weapon is favorable for unit" />
                    </a>
                </Card>
            </center>
        )
    }

    return (
        <center>
            <Card style={{border: "none", width: "90px", backgroundColor: "rgba(0, 0, 0, 0)", padding: "0px" , margin: "0px"}}>
                <a href={`/units/${unit.name}/`} style={{textDecoration: "none"}}>
                    {
                            unit.image.thumbsuper ? <img src={unit.image.thumbsuper} style={thumbnailSize} object-fit="cover" alt={unit.name} />
                            :
                            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" alt={unit.name} />
                    }
                    <p style={{paddingBottom: "0px", marginBottom: "2px", color: "#aaabb8", fontSize: `${fontSizing}`, width: "75px", display: "inline-block"}}>{unit.name}</p>
                </a>
            </Card>
        </center>
    )
}

