import React, { useState } from 'react';
import { Media, Container, Nav, NavItem, NavLink, Card, CardHeader, CardBody, TabPane, TabContent
} from 'reactstrap';
import '../index.css';
import '../App.css';
import { useParams } from 'react-router-dom';
import { getUnitByName } from '../shared/unitInfo';
import { RenderTrue } from './unitinfo/TrueComponent';
import { RenderStats } from './unitinfo/StatsComponent';
import { RenderTwoStar, RenderThreeStar, RenderFourStar, RenderFiveStar, RenderAwaken, RenderSuper } from './unitinfo/LoreComponent';
import classNames from 'classnames';

function UnitDetails () {  
    return (
        <React.Fragment>
            <Container style={{marginTop: "5rem"}}>
                <UnitHome />
            </Container>
        </React.Fragment>
    )
}

function UnitHome() {
    //Unit Info
    const selectedUnit = useParams();
    const units = getUnitByName(selectedUnit.unitName); //unitName from Route

    //Tabs
    const [currentTab, setCurrentTab] = useState('2');
    const toggle = tab => {
        if (currentTab !== tab) setCurrentTab(tab);
    }

    return (
        <Card style={{backgroundColor: "#292930", color: "#e7f9fc", paddingBottom: "2rem"}}>
            <center>
            <CardHeader style={{backgroundColor: "#22bbff", color: "#292930"}}>
                <h2>Select a category to view Unit Information</h2>
            </CardHeader>
            </center>
            <CardBody>
                <Nav pills justified>
                    <NavItem>
                        <NavLink 
                            className={classNames({ active: currentTab === '1' })}
                            onClick={() => { toggle('1') }}
                            >
                            <span style={{userSelect: "none"}}>Lore</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            className={classNames({ active: currentTab === '2' })}
                            onClick={() => { toggle('2') }}>
                            <span style={{userSelect: "none"}}>Stats</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            className={classNames({ active: currentTab === '3' })}
                            onClick={() => { toggle('3') }}>
                            <span style={{userSelect: "none"}}>True Weapon</span>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={currentTab} >
                    <TabPane tabId="1">
                        <RenderLore unitLore={units.lore} unitImage={units.image} unitName={units.name} unitEvolution={units.evolution} />
                    </TabPane>
                    <TabPane tabId="2">
                        <RenderStats unitName={units.name} unitStats={units.stats} unitStatsJP={units.statsJP}
                                                    unitAtt={units.attribute} unitType={units.type} unitSkill={units.skillset} unitSkillJP={units.skillsetJP}
                                                    unitPassive={units.passive} unitPassiveJP={units.passiveJP} unitSlots={units.slots} unitSlotsJP={units.slotsJP}
                                                    unitImage={units.image} unitReview={units.review} unitDreamJP={units.dreamJP} unitDream={units.dream}
                                                    />
                    </TabPane>
                    <TabPane tabId="3">
                        <RenderTrue unitTrue={units} trueReview={units.review} />
                    </TabPane>
                </TabContent>
            </CardBody>
            
        </Card>
    )
}

const unitSize = {
    width: "80%",
    maxWidth: "100px",
    height: "auto"
}

function RenderLore({unitName, unitLore, unitImage, unitEvolution}) {
    //Tabs
    const [currentTab, setCurrentTab] = useState('1');
    const toggle = tab => {
        if (currentTab !== tab) setCurrentTab(tab);
    }

    return (
        <>
            <center><h1><strong>{unitName}</strong></h1></center>
            <p><center>Select an Evolution to view the Lore</center></p>

            <Nav pills justified>
                { unitImage.thumb2 ? 
                            <NavItem>
                                <NavLink 
                                    className={classNames({ active: currentTab === '2' })}
                                    onClick={() => { toggle('2') }}>
                                    <Media src={unitImage.thumb2} style={unitSize}/>
                                </NavLink>
                            </NavItem> 
                            : null
                }

                { unitImage.thumb3 ? 
                            <NavItem>
                                <NavLink 
                                    className={classNames({ active: currentTab === '3' })}
                                    onClick={() => { toggle('3') }}>
                                    <Media src={unitImage.thumb3} style={unitSize}/>
                                </NavLink>
                            </NavItem> 
                            : null
                }

                { unitImage.thumb4 ? 
                            <NavItem>
                                <NavLink 
                                    className={classNames({ active: currentTab === '4' })}
                                    onClick={() => { toggle('4') }}>
                                    <Media src={unitImage.thumb4} style={unitSize}/>
                                </NavLink>
                            </NavItem> 
                            : null
                }

                { unitImage.thumb5 ? 
                            <NavItem>
                                <NavLink 
                                    className={classNames({ active: currentTab === '5' })}
                                    onClick={() => { toggle('5') }}>
                                    <Media src={unitImage.thumb5} style={unitSize}/>
                                </NavLink>
                            </NavItem> 
                            : null
                }

                { unitImage.thumbawk ? 
                            <NavItem>
                                <NavLink 
                                    className={classNames({ active: currentTab === '6' })}
                                    onClick={() => { toggle('6') }}>
                                    <Media src={unitImage.thumbawk} style={unitSize}/>
                                </NavLink>
                            </NavItem> 
                            : null
                }

                { unitImage.thumbsuper ? 
                            <NavItem>
                                <NavLink 
                                    className={classNames({ active: currentTab === '7' })}
                                    onClick={() => { toggle('7') }}>
                                    <Media src={unitImage.thumbsuper} style={unitSize}/>
                                </NavLink>
                            </NavItem> 
                            : null
                }
            </Nav>
            <TabContent activeTab={currentTab}>
                { unitImage.thumb2 ? 
                            <TabPane tabId="2">
                                <RenderTwoStar lore={unitLore.evo2} unitImage={unitImage} unitEvo={unitEvolution} />
                            </TabPane>
                            : null            
                }

                { unitImage.thumb3 ? 
                            <TabPane tabId="3">
                                <RenderThreeStar lore={unitLore.evo3} unitImage={unitImage} unitEvo={unitEvolution} />
                            </TabPane>
                            : null            
                }

                { unitImage.thumb4 ? 
                            <TabPane tabId="4">
                                <RenderFourStar lore={unitLore.evo4} unitImage={unitImage} unitEvo={unitEvolution} />
                            </TabPane>
                            : null            
                }

                { unitImage.thumb5 ? 
                            <TabPane tabId="5">
                                <RenderFiveStar lore={unitLore.evo5} unitImage={unitImage} unitEvo={unitEvolution} />
                            </TabPane>
                            : null            
                }

                { unitImage.thumbawk ? 
                            <TabPane tabId="6">
                                <RenderAwaken lore={unitLore.evoawk} unitImage={unitImage} unitEvo={unitEvolution} />
                            </TabPane>
                            : null            
                }

                { unitImage.thumbsuper ? 
                            <TabPane tabId="7">
                                <RenderSuper lore={unitLore.evosuper} unitImage={unitImage} unitEvo={unitEvolution} />
                            </TabPane>
                            : null            
                }
            </TabContent>
        </>
    )
}

export default UnitDetails;
