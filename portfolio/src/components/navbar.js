/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

import PDF from "../files/resume.pdf"
import Sidebar from "./sidebar"


// const Navbar = () => {
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggleSidebar = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })

        if(!this.state.isOpen) {
            document.documentElement.style.overflow = "hidden"
        } else {
            document.documentElement.style.overflow = "visible"
        }
    }

    linkClicked = () => {
        this.setState({
            isOpen: false
        })
        document.documentElement.style.overflow = "visible"

    }

    render() {
        return (
            <>
                <div className="contained">
                    <div style={{
                        display: "flex",
                        width: "100%",
                        position: "relative",
                        justifyContent: "space-between",
                        marginTop: "1rem",
                        marginBottom: "1rem"
                    }}>
                        <Link id="logo" className="logoStyle" to="/"> CC </Link>

                        <div style={{ alignSelf: "center", justifyContent: "flex-end" }}>
                            <a id="burger" className={this.state.isOpen ? "toggle" : ""} onClick={this.toggleSidebar}>
                                <span ></span>
                                <span ></span>
                            </a>
                            <Sidebar isOpen={this.state.isOpen} handleLinkClick={this.linkClicked} />
                        </div>
                        <div className="menu" >
                            <Link className="linkStyle" to="/#about">about </Link>
                            <Link className="linkStyle" to="/#work">work </Link>
                            <Link className="linkStyle" to="/#contact">contact </Link>
                            <a className="linkStyle" href={PDF} target="_blank">resume </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar
