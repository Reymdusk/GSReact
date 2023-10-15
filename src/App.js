import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Units from './components/UnitsPage';
import UnitDetails from './components/UnitComponent';
import Tierlist from './components/TierlistComponent';
import News from './components/NewsComponent';
import Article from './components/news/ArticleComponent';
import GuidesMainPage from './components/GuidesComponent';
import OtherGuides from './components/guidecomponents/OtherGuides';
import DisplayGuides from './components/guidecomponents/otherguides/OtherGuidesComponent';
import CrestGuides from './components/guidecomponents/CrestGuides'
import DisplayCrestGuide from './components/guidecomponents/crestbossguides/CrestGuidesComponent';
import FAQGuide from './components/guidecomponents/DisplayFAQ';
import { Container, Row, Col } from 'reactstrap';
import DotGuide from './components/guidecomponents/DotGuides';
import DisplayTrialGuide from './components/guidecomponents/dotguides/DotGuidesComponent';
import ScrollToTop from './components/ScrollComponent';
import Equips from './components/equipment/EquipPage';
import EquipDetails from './components/equipment/EquipComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ScrollToTop>
      <Container style={{backgroundColor: '#202022', color: '#aaabb8'}}>
        <div >
          <Row>
            <Col>
              <div className="App">
                <Routes>
                  <Route path="/" element={<Header />} >
                    <Route path="/" element={<Main />} />
                    <Route path="news" element={<News />} />
                    <Route path="news/:articleId" element={<Article />} />
                    <Route path="units" element={<Units />} >
                      <Route index />
                    </Route>
                    <Route path="units/:unitName" element={<UnitDetails />} />
                    <Route path="equips" element={<Equips />} />
                    <Route path="equips/:equipName" element={<EquipDetails />} />
                    <Route path="tierlist" element={<Tierlist />} />
                    <Route path="guides" element={<GuidesMainPage />} />
                    <Route path="guides/other-guides" element={<OtherGuides />} />
                    <Route path="guides/other-guides/:articleId" element={<DisplayGuides />} />
                    <Route path="guides/crest-guides" element={<CrestGuides />} />
                    <Route path="guides/crest-guides/:articleId" element={<DisplayCrestGuide />} />
                    <Route path="guides/dungeon-of-trials" element={<DotGuide />} />
                    <Route path="guides/dungeon-of-trials/:articleId" element={<DisplayTrialGuide />} />
                    <Route exact path="guides/FAQ" element={<FAQGuide />} />
                    <Route path="static" element={<Main />} />
                    <Route path="static/*" element={<Main />} />
                    <Route path="*" element={<Main />} />
                  </Route>
                </Routes>
              </div>
            </Col>
          </Row>
          <Row>
            <Footer />
          </Row>
        </div>
      </Container>
      </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
