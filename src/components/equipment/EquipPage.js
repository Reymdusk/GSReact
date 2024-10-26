import { useState } from 'react';
import { Container, Row, Col, Media, Card, CardHeader, CardBody, Accordion, AccordionItem, AccordionBody, AccordionHeader,
        Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getEquips } from '../../shared/equipInfo';
import 'react-placeholder/lib/reactPlaceholder.css';
import '../../App.css';

const Equips = () => {
    //Obtain Equipment Data
    const equips = getEquips();

    //Search Query
    const [query, setQuery] = useState("");

    //Filter Default Settings
    const [filters, setFilters] = useState({
        type: {
            phys: true,
            mag: true,
            def: true,
            heal: true,
            supp: true
        },
        rarity: {
            one: true,
            two: true,
            three: true,
            four: true,
            five: true,
            six: true
        },
        server: {
            Global: true,
            Unreleased: true
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

        //Set page to 1st on each filter change
        setCurrentPage(1)
    };

    //Sort Options
    const [searchType, setSearchType] = useState("name")
    const [sortOrder, setSortOrder] = useState("default")
    const [sortRarity, setSortRarity] = useState("default")

    //Default amount of Equips per page
    const [equipsPerPage, setEquipsPerPage] = useState(100)
    const [currentPage, setCurrentPage] = useState(1)

    //Render Type
    const [currentRender, setCurrentRender] = useState("card")

    //Display Equipment Thumbnails
    return (
        <>
            <Container style={{marginTop: "5rem"}}>
                <Row style={{ marginLeft: "5%", marginRight: "5%"}}>
                    <Card style={{backgroundColor: "#292930", color: "#e7f9fc", marginBottom: "2rem", padding: "0" }}>
                        <CardHeader style={{backgroundColor: "#22bbff", color: "#292930", padding: "0" }}>
                            <center><h3>Select an Equipment to view the Equipment's information</h3></center>
                        </CardHeader>
                        <CardBody>
                            <p><center>Please be aware that ALL equips are available, including equips only currently available in Japan.</center></p>
                        </CardBody>
                    </Card>
                </Row>

                <Row style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "2rem" }}>
                    <Accordion open={accordion} toggle={toggle}>
                        <AccordionItem style={{ borderColor: "#292930"}}>
                            <AccordionHeader targetId="1">
                                <h5 style={{ color: "#e7f9fc" , padding: "0", marginTop: "0px", marginBottom: "0px" }}>
                                    <center>Advanced Filters</center>
                                </h5>
                            </AccordionHeader>
                            <AccordionBody accordionId="1" style={{ backgroundColor: "#202022", color: "#e7f9fc", padding: "0"}}>
                                <Row>
                                    <Col xs="6" sm="4">
                                        <ServerFilters filters={filters} handleChange={handleChange} />
                                    </Col>
                                    <Col xs="6" sm="4">
                                        <TypeFilters filters={filters} handleChange={handleChange} />
                                    </Col>
                                    <Col>
                                        <RarityFilters filters={filters} handleChange={handleChange} />
                                    </Col>
                                </Row>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Row>

                <Row style={{ marginLeft: "5%", marginRight: "5%"}}>
                    <RenderSearch setQuery={setQuery} setCurrentPage={setCurrentPage} />
                    <Col md="12">
                        <RenderSearchType searchType={searchType} setSearchType={setSearchType} />
                    </Col>
                    <Col md="3">
                        <RenderSortOptions sortOrder={sortOrder} setSortOrder={setSortOrder} />
                    </Col>
                    <Col md="6">
                        <RenderSortRarity sortRarity={sortRarity} setSortRarity={setSortRarity} />
                    </Col>
                    <Col>
                        <RenderShowType currentView={currentRender} onChangeView={setCurrentRender} />
                    </Col>
                    <Col>
                        <RenderEquipAmount equips={equips} setEquipsPerPage={setEquipsPerPage} equipsPerPage={equipsPerPage} setCurrentPage={setCurrentPage} />
                    </Col>
                </Row>
                <RenderEquips equips={equips} filters={filters} query={query} sortOrder={sortOrder} sortRarity={sortRarity} searchType={searchType}
                        setEquipsPerPage={setEquipsPerPage} equipsPerPage={equipsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}  currentView={currentRender} />
            </Container>
        </>
    )
}

const RenderEquips = ({ equips, searchType, filters, query, sortOrder, sortRarity, equipsPerPage, currentPage, setCurrentPage, currentView }) => {
    const filteredEquips = equips
        .filter(equip => {
            const isGlobalChecked = filters.server.Global
            const isUnreleasedChecked = filters.server.Unreleased

            //Check for Server
            const hasMatchingServer = (isGlobalChecked && isUnreleasedChecked)
            || ((isGlobalChecked && !isUnreleasedChecked) && !equip.lore.toLowerCase().includes('currently unreleased in global'))
            || ((!isGlobalChecked && isUnreleasedChecked) && equip.lore.toLowerCase().includes('currently unreleased in global'))
            
            //Check for Types
            const selectedTypes = Object.keys(filters.type).filter((key) => filters.type[key])
            const hasMatchingTypes = selectedTypes.some((type) => equip.type.includes(`${type}LB`))
            
            //Check for Rarity
            const selectedRarities = Object.keys(filters.rarity).filter((key) => filters.rarity[key])
            const hasMatchingRarities = selectedRarities.some((rarity) => {
                if (rarity === "one" && equip.star === 1) {
                    return true
                }
                if (rarity === "two" && equip.star === 2) {
                    return true
                }
                if (rarity === "three" && equip.star === 3) {
                    return true
                }
                if (rarity === "four" && equip.star === 4) {
                    return true
                }
                if (rarity === "five" && equip.star === 5) {
                    return true
                }
                if (rarity === "six" && equip.star === 6) {
                    return true
                }

                return false
            })
        
        //Check for Search
        const hasMatchingName = searchType === 'name' ? equip.name?.toLowerCase().includes(query.toLowerCase()) : equip.skillset.skill?.toLowerCase().includes(query.toLowerCase())
        const hasMatchingTranslate = searchType === 'name' ? equip.translate?.toLowerCase().includes(query.toLowerCase()) : false
        

        return hasMatchingServer && hasMatchingTypes && (hasMatchingName || hasMatchingTranslate) && hasMatchingRarities 
        })
    .sort((a, b) => {
            //If Type Order checked
            if(sortOrder === "type") 
            {
                const typeOrder = ['/db/Mines/thumbnail/physLB.png', `/db/Mines/thumbnail/magLB.png`, `/db/Mines/thumbnail/defLB.png`, `/db/Mines/thumbnail/healLB.png`, `/db/Mines/thumbnail/suppLB.png`]
                return typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type)
            }
            //Default Sort
            return a.id - b.id
        })
    .sort((a, b) => {
        //Rarity Sort Ascending
        const rarityOrder = [6, 5, 4, 3, 2, 1]
        if(sortRarity === "rarityasc") 
        {
            return rarityOrder.indexOf(a.star) - rarityOrder.indexOf(b.star)
        }

        //Rarity Sort Descending
        if(sortRarity === "raritydesc") 
        {
            return rarityOrder.indexOf(b.star) - rarityOrder.indexOf(a.star)
        }

        return null
    })

    //Determine Page amount
    const totalEquips = filteredEquips.length
    const totalPages = Math.ceil(totalEquips / equipsPerPage)

    const handlePageChange = ( pageNumber ) => {
        //Update Page when clicked
        setCurrentPage(pageNumber)
    }

    //Determine what equips to show per page
    const indexOfLastEquip = currentPage * equipsPerPage
    const indexOfFirstEquip = indexOfLastEquip - equipsPerPage
    const equipsToShow = filteredEquips.slice(indexOfFirstEquip, indexOfLastEquip)

    //Render Pagination with Equips
    return (
        <Row style={{ marginTop: "1rem"}}>
            <div style={{ overflowX: "auto"}}>
                <Pagination aria-label="Equip Pages">
                    <PaginationItem disabled={ currentPage <= 1 }>
                        <PaginationLink previous href="#" onClick={() => handlePageChange( currentPage - 1 )} />
                    </PaginationItem>
                    {
                        [...Array(totalPages)].map((_, index) => {
                            return (
                                <PaginationItem active={ index + 1 === currentPage } key={index}>
                                    <PaginationLink href="#" onClick={() => handlePageChange(index + 1)}>
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        })
                    }
                    <PaginationItem disabled={ currentPage >= totalPages }>
                        <PaginationLink next href="#" onClick={() => handlePageChange(currentPage + 1)} />
                    </PaginationItem>
                </Pagination>
            </div>


            {
                currentView === "card" ? (
                    equipsToShow.map(equip => {
                    return (
                        <>
                            { equip.name !== "???" &&
                                <Col  xs="4" sm="auto">
                                    <center key={equip.id}>
                                        <Card style={{width: "120px", backgroundColor: "#202022", border: "none"}}>
                                            <Link to={`/equips/${equip.name}`} style={{textDecoration: "none", color: "#aaabb8"}} >
                                                <Media src={equip.image.thumbmax} alt={equip.name} style={{maxWidth: "80px", width:"100%", height:"auto", objectFit:"cover"}} />
                                                <center><p style={{display: "inline-block", marginLeft: "-8px", marginRight: "-2px", width: "100%"}}>{equip.name}</p></center>
                                            </Link>
                                        </Card>
                                    </center>
                                </Col>
                            }
                            
                        </>
                    )
                })
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th><center>Equip</center></th>
                                <th><center>Description</center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                equipsToShow.map(equip => {
                                    return (
                                        <tr>
                                            { equip.name !== "???" &&
                                                <td style={{paddingTop: "1em"}}>
                                                    <center>
                                                    <Link to={`/equips/${equip.name}`} style={{textDecoration: "none", color: "#aaabb8"}} >
                                                        <Media src={equip.image.thumbmax} alt={equip.name} style={{maxWidth: "80px", width:"100%", height:"auto", objectFit:"cover"}} />
                                                        <p style={{display: "inline-block", marginLeft: "-8px", marginRight: "-2px", width: "100%"}}>{equip.name}</p>
                                                    </Link>
                                                    </center>
                                                </td>
                                            }
                                            {
                                                equip.name !== "???" &&
                                                <td>
                                                    <center>
                                                    <p>{equip.skillset.skill}</p></center>
                                                </td>
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )
                
            }
            <div style={{ overflowX: "auto"}}>
                <Pagination aria-label="Equip Pages">
                    <PaginationItem disabled={ currentPage <= 1 }>
                        <PaginationLink previous href="#" onClick={() => handlePageChange( currentPage - 1 )} />
                    </PaginationItem>
                    {
                        [...Array(totalPages)].map((_, index) => {
                            return (
                                <PaginationItem active={ index + 1 === currentPage } key={index}>
                                    <PaginationLink href="#" onClick={() => handlePageChange(index + 1)}>
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        })
                    }
                    <PaginationItem disabled={ currentPage >= totalPages }>
                        <PaginationLink next href="#" onClick={() => handlePageChange(currentPage + 1)} />
                    </PaginationItem>
                </Pagination>
            </div>
        </Row>
    )
}

const RenderSearch = ({ setQuery, setCurrentPage }) => {
    const handleSearch = (e) => {
        setQuery(e.target.value)
        setCurrentPage(1)
    }

    return (
        <center>
            <input placeholder='Search Equipment Name'
                    onChange={handleSearch}
                    style={{
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
    )
}

const RenderSearchType = ({ searchType, setSearchType }) => {
    return (
        <div className="sort-options">
            <div style={{ marginRight: ".2rem"}}>Search By:</div>
            <label style={{ backgroundColor: searchType === "name" ? "#5b5b5b" : "" }}>
                <input type="radio"
                        value="name"
                        checked={ searchType === "name" }
                        onChange={() => setSearchType("name")} 
                        />
                <center>Name</center>
            </label>
            <label style={{ backgroundColor: searchType === "skill" ? "#5b5b5b" : "" }}>
                <input type="radio"
                        value="skill"
                        checked={ searchType === "skill" }
                        onChange={() => setSearchType("skill")} />
                <center>Skillset</center>
            </label>
        </div>
    )
}

const RenderSortOptions = ({ sortOrder, setSortOrder }) => {
    return (
        <div className="sort-options">
            <div style={{ marginRight: ".2rem"}}>Sort By:</div>
            <label style={{ backgroundColor: sortOrder === "default" ? "#5b5b5b" : "" }}>
                <input type="radio"
                        value="default"
                        checked={ sortOrder === "default" }
                        onChange={() => setSortOrder("default")} 
                        />
                <center>ID</center>
            </label>
            <label style={{ backgroundColor: sortOrder === "type" ? "#5b5b5b" : "" }}>
                <input type="radio"
                        value="type"
                        checked={ sortOrder === "type" }
                        onChange={() => setSortOrder("type")} />
                <center>Type</center>
            </label>
        </div>
    )
}

const RenderShowType = ({ currentView, onChangeView }) => {
    return (
        <div className="sort-options">
            <div style={{ marginRight: ".2rem"}}>View Mode:</div>

            <label style={{ backgroundColor: currentView === "card" ? "#5b5b5b" : "" }}>
                <input type="radio"
                        value="default"
                        checked={ currentView === "card" }
                        onChange={() => onChangeView("card")} 
                        />
                <center>Card</center>
            </label>
            <label style={{ backgroundColor: currentView === "type" ? "#5b5b5b" : "" }}>
                <input type="radio"
                        value="type"
                        checked={ currentView === "type" }
                        onChange={() => onChangeView("type")} />
                <center>Table</center>
            </label>
        </div>
    )
}

const RenderSortRarity = ({ sortRarity, setSortRarity }) => {
    return (
        <div className="sort-options">
            <div style={{ marginRight: ".2rem" }}>Rarity: </div>
            <label style={{ backgroundColor: sortRarity === "default" ? "#5b5b5b" : "", width: "7em" }}>
                <input type="radio"
                        value="default"
                        checked={ sortRarity === "default" }
                        onChange={() => setSortRarity("default")} />
                <center>Default</center>
            </label>
            <label style={{ backgroundColor: sortRarity === "rarityasc" ? "#5b5b5b" : "", width: "7em" }}>
                <input type="radio"
                        value="rarityasc"
                        checked={ sortRarity === "rarityasc" }
                        onChange={() => setSortRarity("rarityasc")} />
                <center>Rarity (6 =&gt; 1)</center>
            </label>
            <label style={{ backgroundColor: sortRarity === "raritydesc" ? "#5b5b5b" : "", width: "7em" }}>
                <input type="radio"
                        value="raritydesc"
                        checked={ sortRarity === "raritydesc" }
                        onChange={() => setSortRarity("raritydesc")} />
                <center>Rarity (1 =&gt; 6)</center>
            </label>
        </div>
    )
}
const RenderEquipAmount = ({ setEquipsPerPage, equipsPerPage, equips, setCurrentPage }) => {
    const handleSelectChange = (e) => {
        setEquipsPerPage(e.target.value)
        setCurrentPage(1)
    }

    return (
        <div className="page-sort-options">
            <div style={{ marginRight: ".2rem"}}>Show:</div>
            <select value={equipsPerPage} onChange={handleSelectChange}>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value={equips.length}>All</option>
            </select>
        </div>
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
                <label style={{ backgroundColor: filters.server.Unreleased ? "green" : ""}}>
                    <input
                        type="checkbox"
                        name="server"
                        value="Unreleased"
                        checked={filters.server.Unreleased}
                        onChange={handleChange}
                        />
                        Unreleased
                </label>
            </form>
        </center>
    )
}

const TypeFilters = ({ filters, handleChange }) => {
    return (
        <center>
            <b>Type</b>
            <form className="filterButtons">
                <label style={{ backgroundColor: filters.type.phys ? "#2774AF" : ""}} >
                    <input
                        type="checkbox"
                        name="type"
                        value="phys"
                        checked={filters.type.phys}
                        onChange={handleChange}
                        />
                    <img src="/db/Mines/thumbnail/physLB.png" alt="Physical Equipment" className="filterIcons" />
                    Physical
                </label>
                <label style={{ backgroundColor: filters.type.mag ? "#2774AF" : ""}} >
                    <input
                        type="checkbox"
                        name="type"
                        value="mag"
                        checked={filters.type.mag}
                        onChange={handleChange}
                        />
                    <img src="/db/Mines/thumbnail/magLB.png" alt="Magical Equipment" className="filterIcons" />
                    Magical
                </label>
                <label style={{ backgroundColor: filters.type.def ? "#2774AF" : ""}} >
                    <input
                        type="checkbox"
                        name="type"
                        value="def"
                        checked={filters.type.def}
                        onChange={handleChange}
                        />
                    <img src="/db/Mines/thumbnail/defLB.png" alt="Defense Equipment" className="filterIcons" />
                    Defense
                </label>
                <label style={{ backgroundColor: filters.type.heal ? "#2774AF" : ""}} >
                    <input
                        type="checkbox"
                        name="type"
                        value="heal"
                        checked={filters.type.heal}
                        onChange={handleChange}
                        />
                    <img src="/db/Mines/thumbnail/healLB.png" alt="Healing Equipment" className="filterIcons" />
                    Healing
                </label>
                <label style={{ backgroundColor: filters.type.supp ? "#2774AF" : ""}} >
                    <input
                        type="checkbox"
                        name="type"
                        value="supp"
                        checked={filters.type.supp}
                        onChange={handleChange}
                        />
                    <img src="/db/Mines/thumbnail/suppLB.png" alt="Support Equipment" className="filterIcons" />
                    Support
                </label>
            </form>
        </center>
    )
}

const RarityFilters = ({ filters, handleChange }) => {
    return (
        <center>
            <b>Rarity</b>
            <form className="filterButtons">
                <label style={{ backgroundColor: filters.rarity.one ? "blue" : "" }} className="rarityLabel">
                    <input
                        type="checkbox"
                        name="rarity"
                        value="one"
                        checked={filters.rarity.one}
                        onChange={handleChange} 
                        />
                    <img src="/db/Icons/other/equip1_star.png" alt="One Star Rarity" />
                </label>
                <label style={{ backgroundColor: filters.rarity.two ? "blue" : "" }} className="rarityLabel">
                    <input
                        type="checkbox"
                        name="rarity"
                        value="two"
                        checked={filters.rarity.two}
                        onChange={handleChange} 
                        />
                    <img src="/db/Icons/other/equip2_star.png" alt="Two Star Rarity" />
                </label>
                <label style={{ backgroundColor: filters.rarity.three ? "blue" : "" }} className="rarityLabel">
                    <input
                        type="checkbox"
                        name="rarity"
                        value="three"
                        checked={filters.rarity.three}
                        onChange={handleChange} 
                        />
                    <img src="/db/Icons/other/equip3_star.png" alt="Three Star Rarity" />
                </label>
                <label style={{ backgroundColor: filters.rarity.four ? "blue" : "" }} className="rarityLabel">
                    <input
                        type="checkbox"
                        name="rarity"
                        value="four"
                        checked={filters.rarity.four}
                        onChange={handleChange} 
                        />
                    <img src="/db/Icons/other/equip4_star.png" alt="Four Star Rarity" />
                </label>
                <label style={{ backgroundColor: filters.rarity.five ? "blue" : "" }} className="rarityLabel">
                    <input
                        type="checkbox"
                        name="rarity"
                        value="five"
                        checked={filters.rarity.five}
                        onChange={handleChange} 
                        />
                    <img src="/db/Icons/other/equip5_star.png" alt="Five Star Rarity" />
                </label>
                <label style={{ backgroundColor: filters.rarity.six ? "blue" : "" }} className="rarityLabel">
                    <input
                        type="checkbox"
                        name="rarity"
                        value="six"
                        checked={filters.rarity.six}
                        onChange={handleChange} 
                        />
                    <img src="/db/Icons/other/equip6_star.png" alt="Six Star Rarity" />
                </label>
            </form>
        </center>
    )
}
export default Equips;