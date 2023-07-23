import React, { useState } from 'react';
import { Container, Row, Media, Badge, Table, Nav, NavItem, TabContent, TabPane, NavLink, List } from 'reactstrap';
import classnames from 'classnames';
import UnitReviews from './ReviewComponent';
import Dream from './dream/DreamComponent';

const lbIconSize = {
    maxHeight: 40,
    maxWidth: 40
}

const imageSize ={
    maxHeight: 500,
    maxWidth: 500
};

function RenderStat({ unitStats }) {
    return (
        <>
            <Row>
                <Table bordered>
                    <tr>
                        <th>
                            <center>HP</center>
                        </th>
                        <th>
                            <center>ATK</center>
                        </th>
                        <th>
                            <center>DEF</center>
                        </th>
                    </tr>
                    <tr>
                        <td><center>{unitStats.hp}</center></td>
                        <td><center>{unitStats.atk}</center></td>
                        <td><center>{unitStats.def}</center></td>
                    </tr>
                    <tr>
                        <td>
                            <center><Badge color="info" pill>+{unitStats.hpplus}</Badge></center>
                        </td>
                        <td>
                            <center><Badge color="info" pill>+{unitStats.atkplus}</Badge></center>
                        </td>
                        <td>
                            <center><Badge color="info" pill>+{unitStats.defplus}</Badge></center>
                        </td>
                    </tr>
                </Table>
            </Row>
        </>
    )
}

function RenderSlots({ unitSlots }) {
    return (
        <Row>
            <h3><strong>SLOTS</strong></h3>
            <Table bordered>
                <tr>
                    <th>
                        <center><h4>{unitSlots.slot1}☆<br/><Media src={unitSlots.slot1type} style={lbIconSize} /></h4></center>
                    </th>
                    <th>
                        <center><h4>{unitSlots.slot2}☆<br/><Media src={unitSlots.slot2type} style={lbIconSize} /></h4></center>
                    </th>
                    <th>
                        <center><h4>{unitSlots.slot3}☆<br/>
                            {
                            unitSlots.slot31type ? <><Media src={unitSlots.slot31type} style={lbIconSize} /><br />/ <br/><Media src={unitSlots.slot32type} style={lbIconSize} /></>
                            : <Media src={unitSlots.slot3type} style={lbIconSize} /> 
                            }
                        </h4></center>
                    </th>
                </tr>
            </Table>
        </Row>
    )
}

function RenderSkills({ unitSkill, unitReview, isReview }) {
    return (
        <center>
            { unitSkill.skill1break ? 
                <Row>
                    <h3><strong>SKILL</strong></h3>
                    <center><p><Badge color="primary" pill>BREAK {unitSkill.skillbreak1}</Badge> {unitSkill.skill}</p></center>
                    <center><p><Badge color="primary" pill>BREAK {unitSkill.skillbreak2}</Badge> {unitSkill.magiaskill}</p></center>
                </Row> : 
                <Row>
                    <h3><strong>SKILL</strong></h3>
                    <center><p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p></center>
                    {
                        unitReview.skill && isReview && <UnitReviews review={unitReview.skill} /> 
                    }
                </Row>
            }
            
            <Row>
                <h3><strong>ARTS</strong></h3>
                <center><p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p></center>
                {
                    unitReview.arts && isReview && <UnitReviews review={unitReview.arts} /> 
                }
            </Row>


            { unitSkill.trueartsbreak || unitSkill.trueartsbreak === 0 ? 
                <Row>
                    <h3><strong>TRUE ARTS</strong></h3>
                    <center><p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p></center>
                    {
                    unitReview.truearts && isReview  && <UnitReviews review={unitReview.truearts} /> 
                    }
                </Row>
            : null }

            { unitSkill.trueartsbreak1 &&
                <Row>
                    <h3><strong>TRUE ARTS</strong></h3>
                    <center><p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak1}</Badge> {unitSkill.truearts1}</p></center>
                    <center><p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak2}</Badge> {unitSkill.truearts2}</p></center>
                </Row> 
            }

            { unitSkill.crossarts &&
                <Row>
                    <h3><strong>CROSS ARTS</strong></h3>
                    <center><p><Badge color="primary" pill>BREAK {unitSkill.crossartsbreak}</Badge> {unitSkill.crossarts}</p></center>
                    {
                        unitReview.crossarts && isReview && <UnitReviews review={unitReview.crossarts} />
                    }
                </Row> 
            }

            { unitSkill.phantombullet && 
                <Row>
                    <h3><strong>PHANTOM BULLET</strong></h3>
                    <center><p><Badge color="primary" pill>BREAK {unitSkill.phantombulletbreak}</Badge> {unitSkill.phantombullet}</p></center>
                    {
                        unitReview.phantombullet && isReview  && <UnitReviews review={unitReview.phantombullet} /> 
                    }
                </Row> 
            }

            { unitSkill.superequipname && 
                <Row>
                    <h3><strong>Super "{unitSkill.superequipname}"</strong></h3>
                    <h4>5☆ <img src={unitSkill.superequiptype} style={lbIconSize} alt="Super Equipment Slot Type" /></h4>
                    <center><p><Badge color="primary" pill>BREAK {unitSkill.superequipbreak}</Badge> {unitSkill.superequip}</p></center>
                    {
                        unitReview.superequip && isReview  && <UnitReviews review={unitReview.superequip} /> 
                    }
                    <center>
                        <b>NOTES:</b>
                        <List type="unstyled">
                            <li>The Abilities of the Equip originally in the <img src={unitSkill.superequiptype} style={{maxWidth: "25px"}} alt="Super Equipment Slot Type" /> slot will be retained.</li>
                            <li>The active of the Equip originally in the <img src={unitSkill.superequiptype} style={{maxWidth: "25px"}} alt="Super Equipment Slot Type" /> slot cannot be activated while this Equip replaces it. If it was on cooldown when this Equip replaces it, the cooldown will continue counting down while this Equip is replacing it.</li>
                        </List>
                    </center>
                </Row> 
            }
            {
                unitSkill.superarts && 
                <Row>
                    <h3><strong>SUPER ARTS</strong></h3>
                    <center><p><Badge color="primary" pill>BREAK {unitSkill.superartsbreak}</Badge> {unitSkill.superarts}</p></center>
                    {
                        unitReview.superarts && isReview && <UnitReviews review={unitReview.superarts} />
                    }
                </Row> 
            }
            
        </center>
    )
}

function RenderPassives({ unitPassive, isReview, unitReview }) {
    return (
        <Row>
            <h3><strong>PASSIVES</strong></h3>
            <List type="unstyled">
                <li style={{marginBottom: "1rem"}}>{unitPassive.ability1}</li>
                {isReview && unitReview.ability1 && <UnitReviews review={unitReview.ability1} />}
                { unitPassive.ability2 && 
                    <>
                        <li style={{marginBottom: "1rem"}}>{unitPassive.ability2}</li>
                        {isReview && unitReview.ability2 && <UnitReviews review={unitReview.ability2} />}
                    </> 
                }
                { unitPassive.ability3 && 
                    <>
                        <li style={{marginBottom: "1rem"}}>{unitPassive.ability3}</li>
                        {isReview && unitReview.ability3 && <UnitReviews review={unitReview.ability3} />}
                    </> 
                }
                { unitPassive.ability4 && 
                    <>
                        <li style={{marginBottom: "1rem"}}>{unitPassive.ability4}</li>
                        {isReview && unitReview.ability4 && <UnitReviews review={unitReview.ability4} />}
                    </> 
                }
                { unitPassive.ability5 && 
                    <>
                        <li style={{marginBottom: "1rem"}}>{unitPassive.ability5}</li>
                        {isReview && unitReview.ability5 && <UnitReviews review={unitReview.ability5} />}
                    </> 
                }
            </List>
        </Row>
    )
}

function RenderImageAndTypes({ unitImage, unitAtt, unitType, unitName }) {
    //Hook for Special Illustration
    const [specialShift, setSpecialShift] = useState('1')

    //Toggle Tab for Illustration
    const spToggle = tab => {
        if(specialShift !== tab) setSpecialShift(tab)
    }
    
    if (unitImage.detailsuper) {
        return (
            <>
            {
                unitImage.thumbspecial
                ?
                <>
                    
                    <TabContent activeTab={specialShift}>
                        <TabPane tabId="1">
                            <RenderDetail detail={unitImage.detailsuper} />
                        </TabPane>
                        <TabPane tabId="2">
                            <RenderDetail detail={unitImage.detailspecial} />
                        </TabPane>
                    </TabContent>
                    <p style={{marginTop: "2em"}}>This unit has a Special Illustration. <br/>You may toggle between the Super Artwork and the Special Artwork</p>
                    <Nav pills justified style={{ marginTop: "2rem", marginBottom: "2rem", maxWidth:"20rem"}}>
                    <NavItem>
                        <NavLink className={classnames({ active: specialShift === '1' })}
                            onClick={() => {spToggle('1')}} >
                                <Media src={unitImage.thumbsuper} object-fit="cover" id="unitName" style={{width: "75px" }}/>
                        </NavLink> 
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: specialShift === '2' })}
                            onClick={() => {spToggle('2')}} >
                                <Media src={unitImage.thumbspecial} object-fit="cover" id="unitName" style={{width: "75px" }}/>
                        </NavLink>
                    </NavItem>
                    </Nav>
                </>
                :
                <>
                    <RenderDetail detail={unitImage.detailsuper} />
                </>
            }
                <h1><strong>{unitName}</strong></h1>
                <p><i>{unitAtt} , {unitType}</i></p>
            </>
        )
    }

    if (unitImage.detailawk) {
        return (
            <>
                <RenderDetail detail={unitImage.detailawk} />
                <h1><strong>{unitName}</strong></h1>
                <p><i>{unitAtt} , {unitType}</i></p>
            </>
        )
    }

    if (unitImage.detail5) {
        return (
            <>
                <RenderDetail detail={unitImage.detail5} />
                <h1><strong>{unitName}</strong></h1>
                <p><i>{unitAtt} , {unitType}</i></p>
            </>
        )
    }
}
export function RenderStats({unitName, unitStats, unitStatsJP = false, unitAtt, unitType, unitSkill, 
                            unitSkillJP = false, unitPassive, unitPassiveJP = false, unitSlots, 
                            unitSlotsJP = false, unitImage, unitReview = false, unitDreamJP = false})
                            {
    //Hook for Tab State
    const [currentTab, setCurrentTab] = useState('1');
    const [serverTab, setServerTab] = useState('1');

    //Toggle Tab for Revelation
    const toggle = tab => {
        if(currentTab !== tab) setCurrentTab(tab);
    }

    //Toggle Tab for Server
    const serverToggle = tab => {
        if(serverTab !== tab) setServerTab(tab)
    }

    //Review Button Toggle
    const [review, setReview] = useState(false)

    return (
        <Container style={{marginTop: "1rem"}}>
            <center>
                <RenderImageAndTypes unitImage={unitImage} unitName={unitName} unitAtt={unitAtt} unitType={unitType} />
            </center>
            { 
                unitSkill.revelation 
                ? 
                <center>
                    <Nav pills justified style={{ marginTop: "2rem", marginBottom: "2rem", maxWidth:"20rem"}}>
                    <NavItem>
                        <NavLink className={classnames({ active: currentTab === '1' })}
                            onClick={() => {toggle('1')}} >
                                <Media src={unitImage.thumbawk} object-fit="cover" id="unitName" style={{width: "75px" }}/>
                        </NavLink> 
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: currentTab === '2' })}
                            onClick={() => {toggle('2')}} >
                                <Media src={unitImage.revelation} object-fit="cover" id="unitName" style={{width: "75px" }}/>
                        </NavLink>
                    </NavItem>
                    </Nav>
                    <TabContent activeTab={currentTab}>
                        <TabPane tabId="1">
                                <RenderStat unitStats={unitStats} />
                                <RenderSlots unitSlots={unitSlots} />
                                {unitReview &&
                                    <button onClick={() => setReview(!review)} style={{marginTop: ".3rem", marginBottom: ".3rem"}}>
                                        { review ?  <>Hide Review</>  : <>Show Review</>}
                                    
                                    </button> 
                                }
                                <RenderSkills unitSkill={unitSkill} unitReview={unitReview} isReview={review}/>
                                <RenderPassives unitPassive={unitPassive} unitReview={unitReview} isReview={review}/>
                                {
                                    review ? 
                                    <>
                                        <h3><strong>SUMMARY</strong></h3>
                                        <UnitReviews review={unitReview.overall} />
                                        <center><i>Review Last Updated {unitReview.lastupdated}</i></center>
                                    </> 
                                    : null
                                }
                        </TabPane>
                        <TabPane tabId="2">
                            <RenderStat unitStats={unitStats} />
                            <RenderSlots unitSlots={unitSlots} />
                            {unitReview &&
                                    <button onClick={() => setReview(!review)} style={{marginTop: ".3rem", marginBottom: ".3rem"}}>
                                        { review ?  <>Hide Review</>  : <>Show Review</>}
                                    
                                    </button> 
                            }

                            <RevelationMode unitSkill={unitSkill.revelation} unitReview={unitReview.revelation} isReview={review}/>
                            <RenderPassives unitPassive={unitPassive} unitReview={unitReview} isReview={review}/>
                            {
                                    review ? 
                                    <>
                                        <h3><strong>SUMMARY</strong></h3>
                                        <UnitReviews review={unitReview.overall} />
                                        <center><i>Review Last Updated {unitReview.lastupdated}</i></center>
                                    </> 
                                    : null
                            }
                        </TabPane>
                    </TabContent>
                </center> 
            :
                <center>
                    { 
                        unitStatsJP || unitSkillJP || unitSlotsJP || unitPassiveJP || unitDreamJP ? 
                            <>
                                <i><b>This unit has different stats for each server. Please select the server you want to view the stats for.</b></i>
                                
                                <Nav pills justified style={{ marginTop: "2rem", marginBottom: "2rem", maxWidth:"20rem"}}>
                                    <NavItem>
                                        <NavLink className={classnames({ active: serverTab === '1' })}
                                            onClick={() => {serverToggle('1')}} >
                                                Global
                                        </NavLink> 
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: serverTab === '2' })}
                                            onClick={() => {serverToggle('2')}} >
                                                Japan
                                        </NavLink> 
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={serverTab}>
                                    <TabPane tabId="1">
                                        <RenderStat unitStats={unitStats} />
                                        <RenderSlots unitSlots={unitSlots} />
                                        {unitReview &&
                                            <button onClick={() => setReview(!review)} style={{marginTop: ".3rem", marginBottom: ".3rem"}}>
                                                { review ?  <>Hide Review</>  : <>Show Review</>}
                                            
                                            </button> 
                                        }
                                        <RenderSkills unitSkill={unitSkill} unitReview={unitReview} isReview={review}/>
                                        <RenderPassives unitPassive={unitPassive} unitReview={unitReview} isReview={review}/>
                                        {
                                            review ? 
                                            <>
                                                <h3><strong>SUMMARY</strong></h3>
                                                <UnitReviews review={unitReview.overall} />
                                                <center><i>Review Last Updated {unitReview.lastupdated}</i></center>
                                            </> 
                                            : null
                                        }
                                    </TabPane>
                                    <TabPane tabId="2">
                                        {
                                            unitStatsJP ? <RenderStat unitStats={unitStatsJP} /> : <RenderStat unitStats={unitStats} />
                                        }
                                        {
                                            unitSlotsJP ? <RenderSlots unitSlots={unitSlotsJP} /> : <RenderSlots unitSlots={unitSlots} />
                                        }
                                        {unitReview &&
                                            <button onClick={() => setReview(!review)} style={{marginTop: ".3rem", marginBottom: ".3rem"}}>
                                                { review ?  <>Hide Review</>  : <>Show Review</>}
                                            
                                            </button> 
                                        }
                                        {
                                            unitSkillJP ? <RenderSkills unitSkill={unitSkillJP} unitReview={unitReview} isReview={review} /> : <RenderSkills unitSkill={unitSkill} unitReview={unitReview} isReview={review} />
                                        }
                                        {
                                            unitPassiveJP ? <RenderPassives unitPassive={unitPassiveJP} unitReview={unitReview} isReview={review} /> : <RenderPassives unitPassive={unitPassive} unitReview={unitReview} isReview={review}/>
                                        }
                                        {
                                            unitDreamJP && <Dream dream={unitDreamJP} />
                                        }
                                        {
                                            review ? 
                                            <>
                                                <h3><strong>SUMMARY</strong></h3>
                                                <UnitReviews review={unitReview.overall} />
                                                <center><i>Review Last Updated {unitReview.lastupdated}</i></center>
                                            </> 
                                            : null
                                        }
                                    </TabPane>
                                </TabContent>
                            </>
                        :
                            <>
                                <RenderStat unitStats={unitStats} />
                                <RenderSlots unitSlots={unitSlots} />
                                {unitReview &&
                                    <button onClick={() => setReview(!review)} style={{marginTop: ".3rem", marginBottom: ".3rem"}}>
                                        { review ?  <>Hide Review</>  : <>Show Review</>}
                                    
                                    </button> 
                                }
                                <RenderSkills unitSkill={unitSkill} unitReview={unitReview} isReview={review}/>
                                <RenderPassives unitPassive={unitPassive} unitReview={unitReview} isReview={review}/>
                                {
                                    review ? 
                                    <>
                                        <h3><strong>SUMMARY</strong></h3>
                                        <UnitReviews review={unitReview.overall} />
                                        <center><i>Review Last Updated {unitReview.lastupdated}</i></center>
                                    </> 
                                    : null
                                }
                            </>
                    }
                </center>
            }
            
            
        </Container>

    );
}

//Liberation Skill Tab
export function RevelationMode ({unitSkill, unitReview, isReview}) {
    return (
        <>
            
            <Row>
                    <h3><strong>REVELATION SKILLS</strong></h3>
                    <List type="unstyled">
                        <li style={{marginBottom: "1em"}}><Badge color="primary" pill>BREAK {unitSkill.skill1break}</Badge> {unitSkill.skill1}</li>
                            {
                                unitReview.skill1 && isReview && <UnitReviews review={unitReview.skill1} /> 
                            }

                        <li style={{marginBottom: "1em"}}><Badge color="primary" pill>BREAK {unitSkill.skill2break}</Badge> {unitSkill.skill2}</li>
                            {
                                unitReview.skill2 && isReview && <UnitReviews review={unitReview.skill2} /> 
                            }

                        <li style={{marginBottom: "1em"}}><Badge color="primary" pill>BREAK {unitSkill.skill3break}</Badge> {unitSkill.skill3}</li>
                            {
                                unitReview.skill3 && isReview && <UnitReviews review={unitReview.skill3} /> 
                            }
                    </List>
                    <h3><strong>MEGA SKILL</strong></h3>
                    <center><p><Badge color="primary" pill>BREAK {unitSkill.megaskillbreak}</Badge> {unitSkill.megaskill}</p></center>
                    {
                        unitReview.megaskill && isReview && <UnitReviews review={unitReview.megaskill} /> 
                    }
            </Row>
            <Row>
                <h3><strong>MEGA ARTS</strong></h3>
                <center><p><Badge color="primary" pill>BREAK {unitSkill.megaartsbreak}</Badge> {unitSkill.megaarts}</p></center>
                {
                        unitReview.megaarts && isReview && <UnitReviews review={unitReview.megaarts} /> 
                }
            </Row>
        </>
    )
}

function RenderDetail({detail}){
    //Shows the Unit Detail
    return(
        <div className="row justify-content-md-center">
            <Media src={detail} style={imageSize} />
        </div>
    )
}