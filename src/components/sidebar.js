/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

import PDF from "../files/resume.pdf"

// const Navbar = () => {
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    render() {
        return (
            <>
                <div id = "side" className={this.props.isOpen ? "sidebar open" : "sidebar"} >

                    <Link className="sideLinkContainer" onClick={this.props.handleLinkClick} to="/#about">
                        <i className="fa fa-user fa-lg iconStyle" />
                        <p className="sideLinkStyle">about</p> </Link>

                    <Link onClick={this.props.handleLinkClick} className="sideLinkContainer" to="/#work">
                    <i className="fa fa-code fa-lg iconStyle" />
                    <p className="sideLinkStyle">work</p>
                         </Link>

                    <Link onClick={this.props.handleLinkClick} className="sideLinkContainer" to="/#contact">
                    <i className="fa fa-envelope fa-lg iconStyle" />
                    <p className="sideLinkStyle">contact</p>
                        </Link>

                    <a onClick={this.props.handleLinkClick} className="sideLinkContainer" href={PDF} target="_blank">
                    <i className="fa fa-file fa-lg iconStyle" />
                    <p className="sideLinkStyle">resume</p>
                        </a>
                </div>
            </>
        )
    }
}

export default Sidebar
