import Link from "next/link";
import "../styles/error.sass";

const error = () => {
    return(
        <div className="error">
            <h1 className="error-text">STAY OFF THE <br/> 404 PAAAGEUH!</h1>
            <p className="error-description">The page you're looking for doesn't exist.</p>
            
            <Link href="/">
                <button className="error-button">Go Back Home</button>
            </Link>
            
            <img className="error-image" src="../static/img/sas.png" alt="Stephen A Smith"/>


            <a className="error-link" target="_blank"  href="https://www.youtube.com/watch?v=d4U42ahjVf4">If you don't get the reference, click here</a>

        </div>
    )
}

export default error;