import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import "../styles/home.sass";

const index = (props) => {
    return(
        <div className="home">

            <Header title={"Logan's Portfolio"}/>

            <div className="home-hero">
                <div className="home-hero-content">
                    <h1 className="text-h1">My name is <span>Logan Clements</span>, and I am a developer who creates responsive websites that look and feel amazing</h1>

                    <div className="home-hero-btnHolder">
                        <Link href="/works">
                            <button className="button-primary">View My Projects</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <Footer/> */}
            
        </div>
    )
}

export default index;