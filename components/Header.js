import Head from "next/head";
import Link from "next/link";

import "../styles/header.sass";


export const Header = (props) => {
    return(
        <div className="header">
            <Head>
                <title>{props.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="header-logoHolder">
               {/* TODO: make this into an svg */}
               {/* <Link href="/">
                <img alt="Logo" src="../static/img/logo.png" className="header-logo"/>
               </Link> */}
            </div>

            <div className="header-links">
                <Link href="/works">Works</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </div>
        </div>
    )
}

export default Header;