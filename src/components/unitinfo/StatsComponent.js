import { Container, Row, Col, Media, Badge } from 'reactstrap';

const lbIconSize = {
    maxHeight: 40,
    maxWidth: 40
}

export function RenderStats({unitName, unitStats, unitAtt, unitType, unitSkill, unitPassive, unitSlots}){
    //Tab for Stats
    //Possibly make if else statements to check if ability3 exists
    //TODO: Work on Viewports

    

    //Check if 3rd passive exists
    if(unitPassive.ability3){

            //Check if Liberation Mode exists
            if(unitSkill.liberation) {
                return (
                    //Create tabs for Human and Liberation
                );
            }

            //Check if Phantom Bullet Exists
            if(unitSkill.phantombullet) {
                return (

                );
            }

            //Check if Cross Arts exists
            if(unitSkill.crossarts) {
                return (

                );
            }
            
            //Specific if statement for Elmessio
            if(unitSkill.trueartsbreak2) {
                return (
                    <Container>
                        <Row>
                                <center><h1><strong>{unitName}</strong></h1></center>
                        </Row>
                        <Row>
                            <Col>
                                <p><i>{unitAtt} , {unitType}</i></p>
                                <p>HP - {unitStats.hp} <Badge color="info" pill>+{unitStats.hpplus}</Badge></p>
                                <p>ATK - {unitStats.atk} <Badge color="info" pill>+{unitStats.atkplus}</Badge></p>
                                <p>DEF - {unitStats.def} <Badge color="info" pill>+{unitStats.defplus}</Badge></p>
                            </Col>
                            <Col>
                                <h3><strong>SLOTS</strong></h3>
                                <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                                <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                                <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                            </Col>
                            <Col>
                                <h3><strong>SKILL</strong></h3>
                                <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                                <h3><strong>ARTS</strong></h3>
                                <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                                <h3><strong>TRUE ARTS</strong></h3>
                                <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak1}</Badge> {unitSkill.truearts1}</p>
                                <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak2}</Badge> {unitSkill.truearts2}</p>
                            </Col>
                            <Col>
                                <h3><strong>PASSIVES</strong></h3>
                                <ul>
                                    <li>{unitPassive.ability1}</li>
                                    <li>{unitPassive.ability2}</li>
                                    <li>{unitPassive.ability3}</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                );
            }

        //Default 3 Ability Units
        return (
            <Container>
                <Row>
                        <center><h1><strong>{unitName}</strong></h1></center>
                </Row>
                <Row>
                    <Col>
                        <p><i>{unitAtt} , {unitType}</i></p>
                        <p>HP - {unitStats.hp} <Badge color="info" pill>+{unitStats.hpplus}</Badge></p>
                        <p>ATK - {unitStats.atk} <Badge color="info" pill>+{unitStats.atkplus}</Badge></p>
                        <p>DEF - {unitStats.def} <Badge color="info" pill>+{unitStats.defplus}</Badge></p>
                    </Col>
                    <Col>
                        <h3><strong>SLOTS</strong></h3>
                        <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                        <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                        <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                    </Col>
                    <Col>
                        <h3><strong>SKILL</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                        <h3><strong>ARTS</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                        <h3><strong>TRUE ARTS</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                    </Col>
                    <Col>
                        <h3><strong>PASSIVES</strong></h3>
                        <ul>
                            <li>{unitPassive.ability1}</li>
                            <li>{unitPassive.ability2}</li>
                            <li>{unitPassive.ability3}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }

    //If 3rd passive does not exist...
    if(unitPassive.ability2){
        return (
            <Container>
                <Row>
                        <center><h1><strong>{unitName}</strong></h1></center>
                </Row>
                <Row>
                    <Col>
                        <p><i>{unitAtt} , {unitType}</i></p>
                        <p>HP - {unitStats.hp} <Badge color="info" pill>+{unitStats.hpplus}</Badge></p>
                        <p>ATK - {unitStats.atk} <Badge color="info" pill>+{unitStats.atkplus}</Badge></p>
                        <p>DEF - {unitStats.def} <Badge color="info" pill>+{unitStats.defplus}</Badge></p>
                    </Col>
                    <Col>
                        <h3><strong>SLOTS</strong></h3>
                        <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                        <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                        <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                    </Col>
                    <Col>
                        <h3><strong>SKILL</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                        <h3><strong>ARTS</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                        <h3><strong>TRUE ARTS</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                    </Col>
                    <Col>
                        <h3><strong>PASSIVES</strong></h3>
                        <ul>
                            <li>{unitPassive.ability1}</li>
                            <li>{unitPassive.ability2}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
    return <div />
}
