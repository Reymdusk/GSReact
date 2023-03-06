import React, {useState} from 'react';
import { Container, Row, Col, Media, Card, CardHeader, CardBody, Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getUnits } from '../shared/unitInfo';
import Placeholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import '../App.css';

export default function Units () {
    //Obtain Unit Data
    const units = getUnits();

    //Search for Unit Names
    const [query, setQuery] = useState("");

    //Filter based on Unit Types
    const [filters, setFilters] = useState({
        attribute: {
            Fire: true,
            Water: true,
            Earth: true,
            Light: true,
            Dark: true
        },
        type: {
            Machine: true,
            Dragon: true,
            Giant: true,
            Spirit: true,
            Beast: true,
            God: true,
            Human: true,
            Demon: true
        },
        server: {
            Global: true,
            Japan: true
        }
    })

    //Accordion
    const [accordion, setAccordion] = useState("0")
    const toggle = (id) => {
        accordion === id ? setAccordion() : setAccordion(id)
    }
    

    //Function to Set Button Filters
    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        setFilters({
            ...filters,
            [name]: {
            ...filters[name],
            [value]: checked,
            },
        });

    };

    //Display Unit Thumbnails
    return (
        <React.Fragment>
            <Container style={{marginTop: "5rem"}}>
                <Row style={{ marginLeft: "5%", marginRight: "5%"}}>
                    <Card style={{backgroundColor: "#292930", color: "#e7f9fc", marginBottom: "2rem", padding: "0"}}>
                        <CardHeader style={{backgroundColor: "#22bbff", color: "#292930", padding: "0"}}>
                            <p><center><h3>Select a Unit to view the Unit's information.</h3></center></p>
                        </CardHeader>
                        <CardBody>
                            <p><center>Please be aware that ALL units are available, including Units only available in Japan.</center></p>
                        </CardBody>
                    </Card>
                </Row>
                <Row style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "2rem"}}>
                    <Accordion open={accordion} toggle={toggle}>
                        <AccordionItem style={{ borderColor: "#292930" }}>
                            <AccordionHeader targetId="1" >
                                <h5 style={{ color: "#e7f9fc", padding: "0", marginTop: "0px", marginBottom: "0px"}}><center>Advanced Filters</center></h5>
                            </AccordionHeader>
                            <AccordionBody accordionId="1" style={{ backgroundColor: "#202022", color: "#e7f9fc", padding: "0" }}>
                                <Row>
                                    <Col>
                                        <ServerFilters filters={filters} handleChange={handleChange} />
                                    </Col>
                                    <Col>
                                        <AttributeFilters filters={filters} handleChange={handleChange} />
                                    </Col>
                                    <Col>
                                        <TypeFilters filters={filters} handleChange={handleChange} />
                                    </Col>
                                </Row>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Row>
                <Row style={{ marginLeft: "5%", marginRight: "5%"}}>
                    <center>
                        <input placeholder="Search Unit Name" onChange={e => setQuery(e.target.value)} style={{
                            display: "flex",
                            width: "100%",
                            maxWidth: "790px",
                            height: "auto",
                            marginBottom: "2rem",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }} />
                    </center>
                </Row>
                <Row style={{marginLeft: "5%", marginRight: "5%"}}>            
                    {units
                    .filter(unit => {
                        const isGlobalChecked = filters.server.Global;
                        const isJapanChecked = filters.server.Japan;

                        //Check for Server
                        const hasMatchingServer = (isGlobalChecked && isJapanChecked)
                        || ((isGlobalChecked && !isJapanChecked) && !unit.lore.evoawk?.toLowerCase().includes('currently unreleased in global.') && !unit.name.toLowerCase().includes('kazlaser'))
                        || ((isJapanChecked && !isGlobalChecked) && !unit.lore.evoawk?.toLowerCase().includes('crunchyroll-hime') );

                        //Check for Attributes
                        const selectedAttr = Object.keys(filters.attribute).filter((key) => filters.attribute[key])
                        const hasMatchingAttr = selectedAttr.some((attr) => unit.attribute.includes(attr))

                        //Check for Types
                        const selectedTypes = Object.keys(filters.type).filter((key) => filters.type[key])
                        const hasMatchingTypes = selectedTypes.some((type) => unit.type.includes(type))

                        //Check for Search
                        const hasMatchingName = unit.name.toLowerCase().includes(query.toLowerCase());

                        return hasMatchingAttr && hasMatchingTypes && hasMatchingName && hasMatchingServer
                    })
                    .map(unit => {
                        if(unit.image.thumbsuper){
                            return (
                                <RenderThumbnail thumbnail={unit.image.thumbsuper} name={unit.name} />
                            );
                        }
                        else if(unit.image.thumbawk){
                            return (
                                <RenderThumbnail thumbnail={unit.image.thumbawk} name={unit.name} />
                            );
                        }
                        else {
                            return (
                                <RenderThumbnail thumbnail={unit.image.thumb5} name={unit.name} />
                            );
                        }
                    })}
                </Row>
            </Container>
        </React.Fragment>
    );
}

const RenderThumbnail = ({ thumbnail, name }) => {
    return (
        <React.Fragment>
            <Col xs="4" sm="auto">
                <center>
                    <Card style={{maxWidth: "75px", backgroundColor: "#202022", border: "none", justifyContent: "center"}}>
                        <Link to={`/units/${name}`} style={{textDecoration: 'none', color: "#aaabb8"}}>
                            <Placeholder type="rect" rows={1} ready={thumbnail !== ''} >
                                <Media src={thumbnail} alt={name} width="100%" height="auto" object-fit="cover" />
                            </Placeholder>
                            <Placeholder  rows={1} ready={thumbnail !== ''}>
                                <p style={{display: "inline-block", marginLeft: "-6px", marginRight: "-1px"}}>{name}</p>
                            </Placeholder>
                        </Link>
                    </Card>
                </center>
            </Col>
        </React.Fragment>
    )
}

const ServerFilters = ({ filters, handleChange }) => {
    return (
        <center>
            <b>Server</b>
            <form className="filterButtons">
                <label style={{ backgroundColor: filters.server.Global ? "green" : ""}}>
                    <input
                        type="checkbox"
                        name="server"
                        value="Global"
                        checked={filters.server.Global}
                        onChange={handleChange} 
                        
                        />
                        Global
                </label>
                <label style={{ backgroundColor: filters.server.Japan ? "green" : ""}}>
                    <input
                        type="checkbox"
                        name="server"
                        value="Japan"
                        checked={filters.server.Japan}
                        onChange={handleChange}
                        />
                        Japan
                </label>
            </form>
        </center>
    )
}

const TypeFilters = ({ filters, handleChange }) => {
    return (
        <center>
            <b>Race</b>
            <form className="filterButtons">
                <label style={{ backgroundColor: filters.type.Human ? "#2774AF" : ""}}>
                    <input
                        type="checkbox"
                        name="type"
                        value="Human"
                        checked={filters.type.Human}
                        onChange={handleChange}
                        />
                    <img src="/db/Icons/types/Human_Icon.png" alt="Human Type" className="filterIcons" /> 
                    Human
                </label>
                <label style={{ backgroundColor: filters.type.Demon ? "#2774AF" : ""}}>
                    <input
                        type="checkbox"
                        name="type"
                        value="Demon"
                        checked={filters.type.Demon}
                        onChange={handleChange}
                        />
                    <img src="/db/Icons/types/Demon_Icon.png" alt="Demon Type" className="filterIcons" /> 
                    Demon
                </label>
                <label style={{ backgroundColor: filters.type.God ? "#2774AF" : ""}}>
                    <input
                        type="checkbox"
                        name="type"
                        value="God"
                        checked={filters.type.God}
                        onChange={handleChange}
                        />
                    <img src="/db/Icons/types/God_Icon.png" alt="God Type" className="filterIcons" /> 
                    God
                </label>
                <label style={{ backgroundColor: filters.type.Spirit ? "#2774AF" : ""}}>
                    <input
                        type="checkbox"
                        name="type"
                        value="Spirit"
                        checked={filters.type.Spirit}
                        onChange={handleChange}
                        />
                    <img src="/db/Icons/types/Spirit_Icon.png" alt="Spirit Type" className="filterIcons" /> 
                    Spirit
                </label>
                <label style={{ backgroundColor: filters.type.Machine ? "#2774AF" : ""}}>
                    <input
                        type="checkbox"
                        name="type"
                        value="Machine"
                        checked={filters.type.Machine}
                        onChange={handleChange}
                        />
                    <img src="/db/Icons/types/Machine_Icon.png" alt="Machine Type" className="filterIcons" /> 
                    Machine
                </label>
                <label style={{ backgroundColor: filters.type.Dragon ? "#2774AF" : ""}}>
                    <input
                        type="checkbox"
                        name="type"
                        value="Dragon"
                        checked={filters.type.Dragon}
                        onChange={handleChange}
                        />
                    <img src="/db/Icons/types/Dragon_Icon.png" alt="Dragon Type" className="filterIcons" /> 
                    Dragon
                </label>
                <label style={{ backgroundColor: filters.type.Beast ? "#2774AF" : ""}}>
                    <input
                        type="checkbox"
                        name="type"
                        value="Beast"
                        checked={filters.type.Beast}
                        onChange={handleChange}
                        className="filterButton"
                        />
                    <img src="/db/Icons/types/Beast_Icon.png" alt="Beast Type" className="filterIcons" /> 
                    Beast
                </label>
                <label style={{ backgroundColor: filters.type.Giant ? "#2774AF" : ""}}>
                    <input
                        type="checkbox"
                        name="type"
                        value="Giant"
                        checked={filters.type.Giant}
                        onChange={handleChange}
                        />
                        <img src="/db/Icons/types/Giant_Icon.png" alt="Giant Type" className="filterIcons" /> 
                        Giant
                </label>
            </form>
        </center>
    )
}

const AttributeFilters = ({ filters, handleChange }) => {
    return (
        <center>
            <b>Attributes</b>
            <form className="filterButtons">
                <label style={{ backgroundColor: filters.attribute.Fire ? "#5b5b5b" : ""}}>
                    <input
                        type="checkbox"
                        name="attribute"
                        value="Fire"
                        checked={filters.attribute.Fire}
                        onChange={handleChange}
                    />
                    <img src="/db/Icons/types/Fire_Icon.png" alt="Fire Attribute" className="filterIcons" /> 
                    Fire
                </label>
                <label style={{ backgroundColor: filters.attribute.Water ? "#5b5b5b" : ""}}>
                    <input
                        type="checkbox"
                        name="attribute"
                        value="Water"
                        checked={filters.attribute.Water}
                        onChange={handleChange}
                    />
                    <img src="/db/Icons/types/Water_Icon.png" alt="Water Attribute" className="filterIcons" /> 
                    Water
                </label>
                <label style={{ backgroundColor: filters.attribute.Earth ? "#5b5b5b" : ""}}>
                    <input
                        type="checkbox"
                        name="attribute"
                        value="Earth"
                        checked={filters.attribute.Earth}
                        onChange={handleChange}
                    />
                    <img src="/db/Icons/types/Earth_Icon.png" alt="Earth Attribute" className="filterIcons" /> 
                    Earth
                </label>
                <label style={{ backgroundColor: filters.attribute.Light ? "#5b5b5b" : ""}}>
                    <input
                        type="checkbox"
                        name="attribute"
                        value="Light"
                        checked={filters.attribute.Light}
                        onChange={handleChange}
                    />
                    <img src="/db/Icons/types/Light_Icon.png" alt="Light Attribute" className="filterIcons" /> 
                    Light
                </label>
                <label style={{ backgroundColor: filters.attribute.Dark ? "#5b5b5b" : ""}}>
                    <input
                        type="checkbox"
                        name="attribute"
                        value="Dark"
                        checked={filters.attribute.Dark}
                        onChange={handleChange}
                    />
                    <img src="/db/Icons/types/Dark_Icon.png" alt="Dark Attribute" className="filterIcons" /> 
                    Dark
                </label>
            </form>
        </center>
    )
}