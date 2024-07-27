import { Link } from "react-router-dom";

export const Cta = () => {
    return (
        <section className="cta">
            <p className="cta-text">Have a project in mind? <br className="sm:block hidden" />
                Let's build something together!</p>
                <Link to="/contacts" className="btn">
                Contact
                </Link>
        </section>
    )
};