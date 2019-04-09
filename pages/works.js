import Head from "next/head";
import Link from "next/link";

import {useState, useContext} from 'react';

import "../styles/works.sass";

const worksList = [
    {year: "2019", projects: [
        {name: "Work In Puckgress", id: "wip", tech: ["React.JS", "Node.JS", "GraphQL"], link: "/workinpuckgress"}
    ]},
    {year: "2018", projects: [
        {name: "CRMSuite Website", id: "crm", tech: ["React.JS", "Node.JS"], link: "/crmsuite"},
        {name: "E-Brochure Project", id: "ebrochure", tech: ["Knockout.JS", "Less"], link: "/ebrochure"}
    ]},
    {year: "2017", projects: [
        {name: "Lenny Face Generator", id: "lenny", tech: ["C#", "Xamarin"], link: "lennyface"}
    ]}
];

const WorksContext = React.createContext();

// Year contains all works from that year

   // {name: "Work In Puckgress", id: "wip", }

const works = (props) => {
    return(
        <div className="works">
            <WorksHolder>
                <WorksLeft>
                    <WorksHeader/>
                    <WorksYears/>
                </WorksLeft>

                <WorksRight>
                    <WorksProjects/>
                </WorksRight>
            </WorksHolder>
        </div>
    )
}

const WorksHolder = (props) => {

    const [activeYear, setActiveYear] = useState(0);

    const length = worksList[activeYear].projects.length;
    
    const context = {
        setActiveYear: (value) => setActiveYear(value),
        activeYear: activeYear,
        length, length
    }


    return(
        <WorksContext.Provider value={context}>
            {props.children}
        </WorksContext.Provider>
    )
}

const WorksLeft = (props) => {
    return(
        <div className="works-left">
            {props.children}
        </div>
    )
}

const WorksHeader = (props) => {
    return(
        <div className="works-header">
            <Head>
                <title>Works</title>
            </Head>
            <div className="works-header-menuholder">
                <Link href="/">
                    <img alt="Menu" src="../static/img/menu.svg" className="works-header-menu"/>
                </Link>
            </div>

        </div>
    )
}

const WorksYears = () => {


    return(
        <div className="works-yearsholder">
            {worksList.map((data, index) => (
               <WorksYearsLabel  
                index={index}
                key={`year${data.year}`} 
                year={data.year} />
            ))}
        </div>
    )
}

const WorksYearsLabel = (props) => {

    // TODO: Switch this to use useContext later
    const {year, index} = props;
    const {activeYear, setActiveYear} = useContext(WorksContext);
    console.log(activeYear);
    const isActive = worksList[activeYear].year === year;
    
    return(
        <div className="works-year" onClick={() => setActiveYear(index)} >
            <h2 className={isActive ? "works-text-year active" : "works-text-year"}>{year}</h2>
        </div>
    )
}

const WorksRight = (props) => {
    return(
        <div className="works-right">
            {props.children}
        </div>
    )
}

const WorksProjects = (props) => {
    
    const {activeYear} = useContext(WorksContext);

    return(
        <div className="works-right-projects">
            {worksList[activeYear].projects.map((projects, index) => (
                <Project  
                    details = {projects} 
                    year={worksList[activeYear].year} 
                    key={`project${index}`}/>
            ))}
        </div>
    )
}


const Project = (props) => {
    const {details, year} = props;
    const {length} = useContext(WorksContext);
    

    return(
        <div className={length === 1 ? "work single" : "work"} id={details.id}>
            <div className="work-left">
                <h3 className="work-title">{details.name}</h3>
                <div className="work-image">
                    Logan, Put The Project Image Here
                </div>
            </div>

            <div className="work-right">
                <h2 className="work-year">{year}</h2>
                
                <h3 className="work-techtitle">Technology</h3>
                <div className="work-right-line faded"/>
                <div className="work-right-techholder">
                    {details.tech.map((tech, index) => (
                        <p className="work-tech" key={`tech${index}`}>{tech}</p>
                    ))}
                </div>
                    
                <div className="work-right-line"/>
                
               <Link href={details.link}>
                    <div className="work-right-button">
                        Read <br/> More
                    </div>
               </Link>
            </div>
        </div>
    )
}

            

export default works;