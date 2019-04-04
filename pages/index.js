import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import "../styles/home.sass";

const index = (props) => {
    return(
        <div className="home">

            <Header title={"Logan's Portfolio"}/>

            <div className="home-hero">
                {/* <img className="home-img-person" alt="" src="../static/img/person.png"/> */}
                <div className="home-hero-content">
                    <h1 className="text-h1">My name is Logan, and I am a developer who creates responsive websites that look and feel amazing</h1>

                    <p className="text-p">Here's some of my selected projects</p>

                    {/* <img className="home-img coding" alt="" src="../static/img/coding.svg"/>
                    <img className="home-img cloud" alt="" src="../static/img/cloud.svg"/>
                    <img className="home-img html" alt="" src="../static/img/html.svg"/>
                    <img className="home-img css" alt="" src="../static/img/css.svg"/>
                    <img className="home-img js" alt="" src="../static/img/js.svg"/>
                    <img className="home-img github" alt="" src="../static/img/github.svg"/> */}

                </div>
            </div>

            <div className="home-projects">

            </div>

            <Footer/>
            
        </div>
    )
}

export default index;