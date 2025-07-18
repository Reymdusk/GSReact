import React, { useState } from 'react';
import { Tooltip, Navbar, NavbarToggler, Nav, NavItem, NavbarText, Collapse, Container, Row, Col, Media } from 'reactstrap';
import { NavLink, Outlet} from 'react-router-dom';
import { FaDiscord, FaFacebookF, FaTwitterSquare, FaReddit } from 'react-icons/fa';

function Header () {

//Renders a Navbar that collapses under certain viewports
const [isOpen, setIsOpen] = useState(false);

//Tooltips for External Links
const [discordTool, setDiscordTool] = useState(false);
const [facebookTool, setFacebookTool] = useState(false);
const [redditTool, setRedditTool] = useState(false);
const [twitterTool, setTwitterTool] = useState(false);
const [gsTool, setGSTool] = useState(false);

const iconSize = {
    maxHeight: 30
};

return (
    <React.Fragment>
        <Container>
            <Row>
                <Col>
                    <Navbar fixed="top" expand="md" dark style={{backgroundColor: "black"}}>
                        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav navbar className="me-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/" activeClassName="active" onClick={() => { setIsOpen(!isOpen) }}>
                                        <Media src="/chara_face_1200_1.png" style={{maxHeight: "35px", marginTop: "0rem"}} />
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/" activeClassName="active" onClick={() => { setIsOpen(!isOpen) }}>
                                        <b><p style={{paddingTop: "3px", marginBottom: "0rem", marginLeft: "0px"}}>HOME</p></b>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/news" activeClassName="active" onClick={() => { setIsOpen(!isOpen) }}>
                                        <b><p style={{paddingTop: "3px", marginBottom: "0rem", marginLeft: "0px"}}>CHANGELOG</p></b>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/tierlist" activeClassName="active" onClick={() => { setIsOpen(!isOpen) }}>
                                        <b><p style={{paddingTop: "3px", marginBottom: "0rem", marginLeft: "0px"}}>TIERLIST</p></b>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/units" activeClassName="active" onClick={() => { setIsOpen(!isOpen) }}>
                                        <b><p style={{paddingTop: "3px", marginBottom: "0rem", marginLeft: "0px"}}>UNITS</p></b>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/equips" activeClassName="active" onClick={() => { setIsOpen(!isOpen) }}>
                                        <b><p style={{paddingTop: "3px", marginBottom: "0rem", marginLeft: "0px"}}>EQUIPS</p></b>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/guides" activeClassName="active" onClick={() => { setIsOpen(!isOpen) }}>
                                        <b><p style={{paddingTop: "3px", marginBottom: "0rem", marginLeft: "0px"}}>GUIDES</p></b>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText>
                                <a href="https://discord.gg/grandsummoners" id="discordLink"><FaDiscord /></a>
                                <a href="https://www.facebook.com/GrandSummonersGlobal/" id="facebookLink"><FaFacebookF /></a>
                                <a href="https://www.reddit.com/r/grandsummoners/" id="redditLink"><FaReddit /></a>
                                <a href="https://twitter.com/GRDSMN_GLOBAL" id="twitterLink"><FaTwitterSquare /></a>
                                <a href="https://global.grandsummoners.com/" id="gsLink"><img src="/db/Icons/drops/resultbox_close_1_3.png" style={iconSize} alt="Official Grand Summoners" /></a>
                                <Tooltip isOpen={discordTool}
                                    target="discordLink"
                                    placement="bottom"
                                    toggle={() => setDiscordTool(!discordTool)} >Official Discord</Tooltip>
                                <Tooltip isOpen={facebookTool}
                                    target="facebookLink"
                                    placement="bottom"
                                    toggle={() => setFacebookTool(!facebookTool)} >Facebook</Tooltip>
                                    <Tooltip isOpen={redditTool}
                                    target="redditLink"
                                    placement="bottom"
                                    toggle={() => setRedditTool(!redditTool)} >Reddit</Tooltip>
                                <Tooltip isOpen={twitterTool}
                                    target="twitterLink"
                                    placement="bottom"
                                    toggle={() => setTwitterTool(!twitterTool)} >Twitter</Tooltip>
                                <Tooltip isOpen={gsTool}
                                target="gsLink"
                                placement="bottom"
                                toggle={() => setGSTool(!gsTool)} >Grand Summoners Official Page</Tooltip>
                            </NavbarText>
                        </Collapse>
                    </Navbar>
                    <Outlet />
                </Col>
            </Row>
        </Container>
        
    </React.Fragment>
    );
}

export default Header;