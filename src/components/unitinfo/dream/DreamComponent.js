import { useState } from 'react'
import { Row, Media, Table, Nav, NavItem, TabContent, TabPane, NavLink, List, Tooltip } from 'reactstrap'
import classnames from 'classnames'

/**
 * For if Unit has Dream Evolution.
 * 
 * Use Tabs. Create based on which section is available
 * Assign each tab number uniquely based on element so can conditional render
 */

const Dream = ({ dream }) => {
    return (
        <center>
            <Header />
            <Tabs dream={dream} />
        </center>
    )
}

const Header = () => {
    return (
        <>
            <Row>
                <h3><strong><center>DREAM EVOLUTION</center></strong></h3>
                <center>
                <p>
                    This unit has Dream Evolution unlocked. <br/>
                    Please select a Tab to view the available passive(s) for each pathway.
                </p></center>
            </Row>
        </>
    )
}

const Tabs = ({ dream }) => {
    //Hook for Tab State
    const [currentTab, setCurrentTab] = useState('0')

    //Toggle Tab Function
    const toggle = tab => {
        if(currentTab !== tab) setCurrentTab(tab)
    }
    
    return (
        <center>
            <Nav pills justified style={{ marginTop: "2em" , marginBottom: "2em", maxWidth: "20em"}}>
                {
                    dream.fire && 
                    <TabLinks type="CRIMSON" currentTab={currentTab} toggle={toggle} tabNum={1} />
                }
                {
                    dream.water && 
                    <TabLinks type="AQUEOUS" currentTab={currentTab} toggle={toggle} tabNum={2} />
                }
                {
                    dream.earth && 
                    <TabLinks type="VERDANT" currentTab={currentTab} toggle={toggle} tabNum={3} />
                }
                {
                    dream.light && 
                    <TabLinks type="LUMINOUS" currentTab={currentTab} toggle={toggle} tabNum={4} />
                }
                {
                    dream.dark && 
                    <TabLinks type="SPECTRAL" currentTab={currentTab} toggle={toggle} tabNum={5} />
                }
            </Nav>
            <TabContent activeTab={currentTab}>
                {
                    dream.fire &&
                        <Contents tabId={1} passive={dream.fire.passive} evolution={dream.fire.evolution} />
                }
                {
                    dream.water &&
                        <Contents tabId={2} passive={dream.water.passive} evolution={dream.water.evolution} />
                }
                {
                    dream.earth &&
                        <Contents tabId={3} passive={dream.earth.passive} evolution={dream.earth.evolution} />
                }
                {
                    dream.light &&
                        <Contents tabId={4} passive={dream.light.passive} evolution={dream.light.evolution} />
                }
                {
                    dream.dark &&
                        <Contents tabId={5} passive={dream.dark.passive} evolution={dream.dark.evolution} />
                }
            </TabContent>
        </center>
    )
}

const TabLinks = ({ type, currentTab, toggle, tabNum }) => {
    return (
        <NavItem>
            <NavLink className={classnames({ active: currentTab === tabNum })}
                onClick={() => toggle(tabNum)}>
                    <span style={{userSelect: "none"}}>{type}</span>
            </NavLink>
        </NavItem>
    )
}

const Contents = ({ tabId, passive, evolution }) => {
    return (
        <TabPane tabId={tabId}>
            <center>
                <Evolution evo={evolution} />
                <Passive passive={passive} />
            </center>
        </TabPane>
    )
}

const Evolution = ({ evo }) => {

    //TODO TODO TODO: Create personalized tooltips
    
    const imageSize ={
        maxHeight: 75,
        maxWidth: 75,
        width: "100%",
        padding: 0
    }

    return (
        <Row>
            <h3>
                <Table>
                    <tr>
                        <th><center><Media src={evo.mat1} id="hover1" alt={evo.hover1} style={imageSize} /></center></th>

                        {
                            //Material Checks
                        }

                        { evo.mat2 && <th><center><Media src={evo.mat2} id="hover2" alt={evo.hover2} style={imageSize} /></center></th> }
                        { evo.mat2 && <th><center><Media src={evo.mat3} id="hover3" alt={evo.hover3} style={imageSize} /></center></th> }
                        { evo.mat2 && <th><center><Media src={evo.mat4} id="hover4" alt={evo.hover4} style={imageSize} /></center></th> }
                        { evo.mat2 && <th><center><Media src={evo.mat5} id="hover5" alt={evo.hover5} style={imageSize} /></center></th> }
                    </tr>
                    
                    <tr>
                        <td style={{ padding: 0 }}><center>X{evo.mat1amt}</center></td>
                        {evo.mat2 && <td style={{ padding: 0 }}><center>X{evo.mat2amt}</center></td>}
                        {evo.mat3 && <td style={{ padding: 0 }}><center>X{evo.mat3amt}</center></td>}
                        {evo.mat4 && <td style={{ padding: 0 }}><center>X{evo.mat4amt}</center></td>}
                        {evo.mat5 && <td style={{ padding: 0 }}><center>X{evo.mat5amt}</center></td>}
                    </tr>
                </Table>
            </h3>
        </Row>
    )
}

const Passive = ({ passive }) => {
    return (
        <Row>
            <h3><strong>DREAM PASSIVES</strong></h3>
            <List type="unstyled">
                <li style={{ marginBottom: "1em" }}>{passive.ability1}</li>
                {passive.ability2 &&
                    <li style={{ marginBottom: "1em" }}>{passive.ability2}</li>}
            </List>
        </Row>
    )
}

export default Dream