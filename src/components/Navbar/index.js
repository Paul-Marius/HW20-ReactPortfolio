import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav nav-pills flex-column flex-sm-row col-sm-12 col-lg-9">
            <li className="flex-sm-fill text-sm-center">
                <NavLink
                    exact
                    to="/"
                    className="nav-link"
                    activeClassName="nav-link active">
                    About
                </NavLink>
            </li>

            <li className="flex-sm-fill text-sm-center">
                <NavLink
                    to="/portfolio"
                    className="nav-link"
                    activeClassName="nav-link active">
                    Portfolio
                </NavLink>
            </li>

            <li className="flex-sm-fill text-sm-center">
                <NavLink
                    to="/contact"
                    className="nav-link"
                    activeClassName="nav-link active">
                    Contact
                </NavLink>
            </li>

            <a
                className="flex-sm-fill text-sm-center nav-link resume"
                href={require("../Data/Paul-Besliu-Resume.pdf")}
                //   onClick={() => window.open("../Data/Paul-Besliu-Resume.pdf")}
                //   href={Resume}
                // onClick={() => window.open(Resume)}
                target="_blank"
                rel="noopener noreferrer">

                <img
                    src={require("../Data/paulbesliu.jpg")}
                    alt="resume"
                    height="28"
                    width="28"
                    className="resume"
                />
            </a>

            <a
                className="flex-sm-fill text-sm-center nav-link"
                href="https://github.com/Paul-Marius"
                // onClick={() => window.open("https://github.com/Paul-Marius")}
                target="_blank"
                rel="noopener noreferrer">

                <img
                    src={require("../Data/GitHub-icon.png")}
                    alt="GitHub"
                    height="25"
                    width="25"
                    className="github"
                />
            </a>

            <a
                className="flex-sm-fill text-sm-center nav-link"
                href="https://www.linkedin.com/in/paul-marius-besliu/"
                // onClick={() => window.open("https://www.linkedin.com/in/paul-marius-besliu/")}
                target="_blank"
                rel="noopener noreferrer">

                <img
                    src={require("../Data/LinkedIn-icon.png")}
                    alt="Linkedin"
                    height="24"
                    width="29"
                    className="linkedin"
                />
            </a>
        </nav>
    );
}
export default Navbar;