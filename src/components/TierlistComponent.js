import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
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
                <h2>
                            Massive Tierlist Reorganization in Progress...
                        </h2>
                        <p>We apologize for any inconvenience this may cause.</p>
                        <p>The Tierlist will be based on a document created by members of the GSOD team.</p>
                        <p>To access the document, and also obtain a copy, click <a href="https://docs.google.com/spreadsheets/d/1J6b7ptaZPZYFkd1p28X_RiP8QpCRiaQnS0bfMpVtah8/">HERE</a></p>
                {/* <Nav pills justified>
                    <NavItem>
                        <NavLink 
                            className={classNames({ active: currentTab === '1' })}
                            onClick={() => { toggle('1') }}
                            >
                            General Tierlist
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            className={classNames({ active: currentTab === '2' })}
                            onClick={() => { toggle('2') }}
                            >
                            Detailed Tierlist
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={currentTab}>
                    <TabPane tabId="1">
                        <DisplayAccordion unit={units} />
                    </TabPane>
                    <TabPane tabId="2">
                        <DisplayDetail unit={units} />
                    </TabPane>
                </TabContent> */}
            </Row>
        </Container>
    )
}

/* 
TODO: Check if this works

function CreateTable({units}) {
   //Set default Sort
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: "rank", direction: "desc" });

   // Custom order for elements
   const attributeOrder = ["Fire", "Water", "Earth", "Light", "Dark"];

   //Sort Units to Default via Rank first, element second, ID third
   const sortData = (key, direction = "asc") => {
    const sorted = [...units].sort((a, b) => {
      let result = 0;

      // Primary sort (column clicked)
      if (typeof a[key] === "number" && typeof b[key] === "number") {
        result = a[key] - b[key];
      } else if (key === "attribute") {
        result = attributeOrder.indexOf(a.attribute) - attributeOrder.indexOf(b.attribute);
      } else {
        result = String(a[key]).localeCompare(String(b[key]));
      }

      // Adjust for ascending/descending
      if (direction === "desc") result *= -1;

      // Secondary sort (element order) if equal
      if (result === 0) {
        const attrDiff =
          attributeOrder.indexOf(a.attribute) - attributeOrder.indexOf(b.attribute);
        if (attrDiff !== 0) return attrDiff;
      }

      // Tertiary sort (ID) if still equal
      if (result === 0) {
        return a.id - b.id;
      }

      return result;
    });

    setData(sorted);
  };

  // Default sort when component mounts (rank ↓)
  useEffect(() => {
    sortData("rank", "desc");
  }, []);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    sortData(key, direction);
  };

            return (
    <table border="1" cellPadding="5">
      <thead>
        <tr>
            <th>Name</th>
          <th onClick={() => handleSort("rank")} style={{ cursor: "pointer" }}>
            Rank {sortConfig.key === "rank" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
          </th>
          <th onClick={() => handleSort("defense")} style={{ cursor: "pointer" }}>
            Defense {sortConfig.key === "defense" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
          </th>
          <th onClick={() => handleSort("artgen")} style={{ cursor: "pointer" }}>
            Arts Generation {sortConfig.key === "artGen" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
          </th>
          <th onClick={() => handleSort("damage")} style={{ cursor: "pointer" }}>
            Damage {sortConfig.key === "damage" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
          </th>
          <th onClick={() => handleSort("buffs")} style={{ cursor: "pointer" }}>
            Buffs {sortConfig.key === "buffs" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
          </th>
          <th onClick={() => handleSort("heal")} style={{ cursor: "pointer" }}>
            Heal {sortConfig.key === "heal" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
          </th>
          <th onClick={() => handleSort("break")} style={{ cursor: "pointer" }}>
            Break {sortConfig.key === "break" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((char, index) => (
          <tr key={index}>
            <td>{char.name}</td>
            <td>{char.tier.rank}</td>
            <td>{char.tier.defense}</td>
            <td>{char.tier.artgen}</td>
            <td>{char.tier.damage}</td>
            <td>{char.tier.buffs}</td>
            <td>{char.tier.heal}</td>
            <td>{char.tier.break}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
} */

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
                                    <p><img src="/db/Icons/other/lb_7.png" style={{maxWidth: "20px"}} alt="Unit favors LB7" /> LB7 Favorability</p>
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
        <UncontrolledAccordion flush defaultOpen={["SS", "S", "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"]} stayOpen style={{marginTop: "3rem", width: "100%"}}>
            <DisplayRank unit={unit} rank={13} />
            <DisplayRank unit={unit} rank={12} />
            <DisplayRank unit={unit} rank={11} />
            <DisplayRank unit={unit} rank={10} />
            <DisplayRank unit={unit} rank={9} />
            <DisplayRank unit={unit} rank={8} />
            <DisplayRank unit={unit} rank={7} />
            <DisplayRank unit={unit} rank={6} />
            <DisplayRank unit={unit} rank={5} />
            <DisplayRank unit={unit} rank={4} />
            <DisplayRank unit={unit} rank={3} />
            <DisplayRank unit={unit} rank={2} />
            <DisplayRank unit={unit} rank={1} />
        </UncontrolledAccordion>
    )
}

//TODO
function DisplayDetail({unit}) {
    return (
        <UncontrolledAccordion flush defaultOpen={["SSS", "SS", "S", "A", "B", "C", "F", "TBD"]} stayOpen style={{marginTop: "3rem", width: "100%"}}>
            <DisplayLuckRank unit={unit} rank="SS" />
            <DisplayLuckRank unit={unit} rank="S" />
            <DisplayLuckRank unit={unit} rank="A" />
            <DisplayLuckRank unit={unit} rank="B" />
            <DisplayLuckRank unit={unit} rank="C" />
            <DisplayLuckRank unit={unit} rank="F" />
        </UncontrolledAccordion>
    )
}

function DisplayRank({unit, rank}) {
    const desktopWidth = "80%";//"75px";
    const mobileWidth = "60%";//"60px";
    const desktopFont = "15px";
    const mobileFont = "12px";
    let ranking

    return (
        <>
            <AccordionHeader targetId={rank}>
                {/* {//Variable to display rank
                        
                        switch({rank})
                        {
                                    case 13:
                                                ranking = <h1><strong>SS</strong></h1> 
                                                            break;
                                    case 12:
                                                ranking = <h1><strong>S</strong></h1> 
                                                            break;
                                    case 11:
                                                ranking = <h1><strong>A+</strong></h1> 
                                                            break;
                                    case 10:
                                                ranking = <h1><strong>A</strong></h1>
                                                            break;
                                    case 9:
                                                ranking = <h1><strong>A-</strong></h1> 
                                                            break;
                                    case 8:
                                                ranking = <h1><strong>B+</strong></h1> 
                                                            break;
                                    case 7:
                                                ranking = <h1><strong>B</strong></h1> 
                                                            break;
                                    case 6:
                                                ranking = <h1><strong>B-</strong></h1> 
                                                            break;
                                    case 5:
                                                ranking = <h1><strong>C+</strong></h1> 
                                                            break;
                                    case 4:
                                                ranking = <h1><strong>C</strong></h1> 
                                                            break;
                                    case 3:
                                                ranking = <h1><strong>C-</strong></h1> 
                                                            break;
                                    case 2:
                                                ranking = <h1><strong>D</strong></h1> 
                                                            break;
                                    case 1:
                                                ranking = <h1><strong>F</strong></h1> 
                                                            break;
                                    default: 
                                                null
                        }} */}
                        
                
                        {ranking}
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
                            <img src={unit.image.thumbsuper ? unit.image.thumbsuper : unit.image.thumbawk} style={thumbnailSize} object-fit="cover" alt={unit.name} />
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

    if(unit.lb7require === true){
        return (
            <center>
                <Card style={{border: "none", width: "90px", backgroundColor: "rgba(0, 0, 0, 0)", padding: "0px", margin: "0px"}}>
                    <a href={`/units/${unit.name}/`} style={{textDecoration: "none"}}>
                        <img src={unit.image.thumbsuper ? unit.image.thumbsuper : unit.image.thumbawk} style={thumbnailSize} object-fit="cover" alt={unit.name} />
                        <br />
                        <p style={{paddingBottom: "2px", marginBottom: "2px", color: "#aaabb8", fontSize: `${fontSizing}`, width: "75px", display: "inline-block"}}>
                            {unit.name}
                        </p>
                        <img src="/db/Icons/other/lb_7.png" style={{maxWidth: "20px", paddingBottom: "0px", marginBottom: "2rem"}} alt="Unit favors LB7" />
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

