import { Container, Row, Badge, Media, NavItem, NavLink, Nav, TabContent, TabPane, List } from 'reactstrap';
import React, { useState } from 'react';
import classnames from 'classnames';
import UnitReviews from './ReviewComponent';

const imageSize ={
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    maxWidth: "400px"
};

const thumbnailSize = {
    maxHeight: 75,
    maxWidth: 75,
    width: "100%"
};

export function RenderTrue({unitTrue, trueReview = false}) {
    //Hook for Tab State
    const [currentTab, setCurrentTab] = useState('1');

    //Toggle Tab for Global TW
    const toggle = tab => {
        if(currentTab !== tab) setCurrentTab(tab);
    }

    const [serverTab, setServerTab] = useState('1');

    //Toggle for Different Server Stats
    const serverToggle = tab => {
        if(serverTab !== tab) setServerTab(tab)
    }

    const tw = unitTrue.trueweapon;
    const jp = unitTrue.trueweaponJP;

    return (
        <>
            <Container style={{marginTop: "1rem"}}>
            { (tw || jp) ? 
                <>
                    { tw?.true1 ? 
                        <>
                            <Nav pills justified>
                                <NavItem>
                                    <NavLink className={classnames({ active: currentTab === '1' })}
                                        onClick={() => {toggle('1')}}>
                                        <Media src={tw.true1.thumb} object-fit="cover" id="unitTrue" style={thumbnailSize}/>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: currentTab === '2' })}
                                        onClick={() => {toggle('2')}}>
                                        <Media src={tw.true2.thumb} object-fit="cover" id="unitTrue" style={thumbnailSize}/>
                                    </NavLink>
                                </NavItem>
                                {
                                    tw.true3 ? 
                                    <NavItem>
                                        <NavLink className={classnames({ active: currentTab === '3' })}
                                            onClick={() => {toggle('3')}}>
                                            <Media src={tw.true3.thumb} object-fit="cover" id="unitTrue" style={thumbnailSize}/>
                                        </NavLink>
                                    </NavItem>
                                    :
                                    null
                                }
                            </Nav>
                            <TabContent activeTab={currentTab}>
                                <TabPane tabId="1">
                                    <center>
                                    <RenderImage detail={tw.true1.detail} />
                                    <RenderName name={tw.true1.name} slot={tw.true1.slot} />
                                    <RenderAll 
                                    skill={tw.true1.skill} skillbreak={tw.true1.skillbreak} passive={tw.true1.passive} trueReview={trueReview ? trueReview.trueweapon.true1 : false} />
                                    </center>
                                </TabPane>
                            </TabContent>
                            <TabContent activeTab={currentTab}>
                                <TabPane tabId="2">
                                    <center>
                                    <RenderImage detail={tw.true2.detail} />
                                    <RenderName name={tw.true2.name} slot={tw.true2.slot} />
                                    <RenderAll skill={tw.true2.skill} skillbreak={tw.true2.skillbreak} passive={tw.true2.passive} trueReview={trueReview ? trueReview.trueweapon.true2 : false} />
                                    </center>
                                </TabPane>
                            </TabContent>
                            {
                                tw.true3 ? 
                                <TabContent activeTab={currentTab}>
                                    <TabPane tabId="3">
                                        <center>
                                        <RenderImage detail={tw.true3.detail} />
                                        <RenderName name={tw.true3.name} slot={tw.true3.slot} />
                                        <RenderAll skill={tw.true3.skill} skillbreak={tw.true3.skillbreak} passive={tw.true3.passive} trueReview={trueReview ? trueReview.trueweapon.true3 : false} />
                                        </center>
                                    </TabPane>
                                </TabContent>
                                : null
                            }
                        </>
                        : 
                        <>
                            <center>
                                {
                                    tw?.detail ? 
                                    <RenderImage detail={tw.detail} />
                                    :
                                    <RenderImage detail={jp.detail} />
                                }
                                {
                                    tw?.name ?
                                    <RenderName name={tw.name} slot={tw.slot} />
                                    :
                                    <RenderName name={jp.name} slot={jp.slot} />
                                }
                                
                            </center>
                            {
                                jp ? 
                                <center>
                                    <i><b>This unit has different stats for each server. Please select the server you want to view the stats for.</b></i>
                                    <Nav pills justified style={{ marginTop: "2rem", marginBottom: "2rem", maxWidth:"20rem"}}>
                                        <NavItem>
                                        <NavLink className={classnames({ active: serverTab === '1' })}
                                            onClick={() => {serverToggle('1')}} >
                                                <span style={{userSelect: "none"}}>Global</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: serverTab === '2' })}
                                                        onClick={() => {serverToggle('2')}} >
                                                <span style={{userSelect: "none"}}>Japan</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={serverTab} >
                                        <TabPane tabId="1">
                                            {
                                                tw ? <RenderAll skill={tw.skill} skillbreak={tw.skillbreak} passive={tw.passive} trueReview={trueReview.trueweapon} /> 
                                                : 
                                                <>
                                                    <center><h2>This unit is released in Global, but only Japan version currently has True Weapon</h2></center>
                                                </>
                                            }
                                            
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <RenderAll skill={jp.skill} skillbreak={jp.skillbreak} passive={jp.passive} trueReview={trueReview.trueweapon} />
                                        </TabPane>
                                    </TabContent>
                                </center>
                                :
                                <>
                                    <RenderAll detail={tw.detail} slot={tw.slot} name={tw.name} 
                                        skill={tw.skill} skillbreak={tw.skillbreak} passive={tw.passive} trueReview={trueReview.trueweapon} />
                                </>
                                
                            }
                            
                        </>
                    }
                    
                </>
            : <center><h1>This unit does not have a True Weapon</h1></center>}
            </Container>
        </>
        
    )
    
}

const RenderAll = ({ skill, skillbreak, passive, trueReview = false }) => {
    //Review Button Toggle
    const [review, setReview] = useState(false)

    return (
        <center>
            {trueReview &&
                <button onClick={() => setReview(!review)} style={{marginTop: ".3rem", marginBottom: ".3rem"}}>
                    { review ?  <>Hide Review</>  : <>Show Review</>}
                
                </button> 
            }
            <RenderSkill skillbreak={skillbreak} skill={skill} review={trueReview} isReview={review} />
            <RenderPassive passive={passive} review={trueReview} isReview={review} />
        </center>
    )
}
const RenderImage = ({ detail }) => {
    return (
        <Row>
            <center><Media src={detail} style={imageSize} /></center>
        </Row>
    )
}

const RenderName = ({ slot, name }) => {
    return (
        <Row>
            <strong><h1><Media src={slot} />{name}<Media src={slot} /></h1></strong>
        </Row>
    )
}

const RenderSkill = ({ skill, skillbreak, review, isReview }) => {
    return (
        <Row>
            <h3><strong>SKILL</strong></h3>
            <center><p><Badge color="primary">BREAK {skillbreak}</Badge> {skill} </p></center>
            { 
                isReview && review.skill && <UnitReviews review={review.skill} />
            }
        </Row>
    )
}

const RenderPassive = ({ passive, review, isReview }) => {
    return (
        <Row>
            <h3><strong>PASSIVE</strong></h3>
            <List type="unstyled">
                <li>{passive.ability1}</li>
                { 
                    isReview && review && <UnitReviews review={review.ability1} />
                }
                { passive.ability2 && 
                    <>
                        <li>{passive.ability2}</li> 
                        { 
                            isReview && review && <UnitReviews review={review.ability2} />
                        }
                    </>
                }
                { passive.ability3 && 
                    <>
                        <li>{passive.ability3}</li> 
                        { 
                            isReview && review && <UnitReviews review={review.ability3} />
                        }
                    </>
                }
                { passive.ability4 && 
                    <>
                        <li>{passive.ability4}</li> 
                        { 
                            isReview && review && <UnitReviews review={review.ability4} />
                        }
                    </>
                }
            </List>
        </Row>
    )
}