import { useState } from 'react';
import { Media, Container, Row, Nav, NavItem, NavLink,
        Card, CardHeader, CardBody, TabPane, TabContent 
    } from 'reactstrap';
import '../../index.css';
import '../../App.css';
import { useParams } from 'react-router-dom';
import { getEquipByName } from '../../shared/equipInfo';
import classnames from 'classnames';
import EquipStats from './EquipStats';
import EquipLore from './EquipLore';

const EquipDetails = () =>{
    return (
        <Container>
            <EquipHome />
        </Container>
    )
}

const EquipHome = () => {
    //Equip Info
    const selectedEquip = useParams(); //Find Equip name based on parameters
    const decodedEquipName = decodeURIComponent(selectedEquip.equipName)
    const equips = getEquipByName(decodedEquipName);
    

    //Tabs for Equip Lore and Stats
    const [currentTab, setCurrentTab] = useState("1");
    const toggle = tab => {
        if (currentTab !== tab) setCurrentTab(tab);
    }

    return (
        <Card style={{backgroundColor: "#292930", color: "#e7f9fc", paddingBottom: "2rem", marginTop: "5rem" }}>
            <CardHeader style={{ backgroundColor: "#22bbff", color: "#292930"}}>
                <h2><center>Equipment Information</center></h2>
            </CardHeader>
            <CardBody>
            <center>
            <Nav pills justified style={{marginTop: "2rem"}}> 
                <NavItem>
                    <NavLink className={classnames({ active: currentTab === '1' })}
                        onClick={() => {toggle('1')}} >
                            Stats
                    </NavLink> 
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: currentTab === '2' })}
                        onClick={() => {toggle('2')}} >
                            Lore
                    </NavLink>
                </NavItem>
            </Nav>
            
            <RenderImage thumb={equips.image.thumb} thumbmax={equips.image.thumbmax} detail={equips.image.detail} detailmax={equips.image.detailmax} />
            <RenderName name={equips.name} type={equips.type} />

            <TabContent activeTab={currentTab}>
                <TabPane tabId="1">
                    <EquipStats type={equips.type} skillset={equips.skillset} stats={equips.stats} passive={equips.passive} star={equips.star} />
                </TabPane>
                <TabPane tabId="2">
                    <EquipLore lore={equips.lore} />
                </TabPane>
            </TabContent>
            </center>
            </CardBody>
        </Card>
    )
}

const RenderImage = ({ thumb, thumbmax, detail, detailmax }) => {
    //Tabs for Equip Images
    const [currentTab, setCurrentTab] = useState("1");
    const toggle = tab => {
        if (currentTab !== tab) setCurrentTab(tab);
    }

    return (
        <Row>
            <center>
            { thumb ? 
                <>
                    <Nav pills justified style={{marginTop: "2rem", width: "20rem"}}> 
                    <NavItem>
                        <NavLink className={classnames({ active: currentTab === '1' })}
                            onClick={() => {toggle('1')}} >
                                <Media src={thumb}  style={{ maxWidth: "50px", height: "auto" }}/>
                        </NavLink> 
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: currentTab === '2' })}
                            onClick={() => {toggle('2')}} >
                                <Media src={thumbmax} style={{ maxWidth: "50px", height: "auto" }}/>
                        </NavLink>
                    </NavItem>
                    </Nav>
                    <TabContent activeTab={currentTab}>
                        <TabPane tabId="1">
                            <Media src={detail} style={{ width: "15em" }} />
                        </TabPane>
                        <TabPane tabId="2">
                            <Media src={detailmax} style={{ width: "15em" }} />
                        </TabPane>
                    </TabContent>
                </>
                :
                <Media src={detailmax} style={{ width: "15em", marginTop: "2rem" }} />
            }
            
            </center>
        </Row>
    )
}

const RenderName = ({ type, name }) => {
    return (
        <Row>
            <h1>
                <strong>
                    <Media src={type} />
                    <span style={{marginLeft: "1rem" , marginRight: "1rem" }} >{name}</span>
                    <Media src={type} />
                </strong>
            </h1>
        </Row>
    )
}

export default EquipDetails;