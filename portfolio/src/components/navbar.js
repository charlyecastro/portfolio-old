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
            prevScroll: 0,
            scrollUp : false,
            isTop: true,
            isOpen: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let currentScroll = window.pageYOffset
        let isScrollingUp = this.state.prevScroll > currentScroll

        this.setState({
            prevScroll: currentScroll,
            scrollUp : isScrollingUp,
            isTop : currentScroll === 0
          });
    }

    toggleSidebar = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })

        if(!this.state.isOpen) {
            document.documentElement.style.overflow = "hidden"
            document.querySelector("main").style.filter = "blur(3px)"
        } else {
            document.documentElement.style.overflow = "visible"
            document.querySelector("main").style.filter = "blur(0px)"
        }
    }

    linkClicked = () => {
        this.setState({
            isOpen: false,
        })
        document.documentElement.style.overflow = "visible"
        document.querySelector("main").style.filter = "blur(0px)"

    }

    render() {

        return (
            <>
                <nav   id = "side" className = {this.state.scrollUp & !this.state.isTop ? "navStart navShow" : !this.state.scrollUp & !this.state.isTop ? "navStart navHide" : "navStart"} >
                    <div className="contained" style={{
                        display: "flex",
                        position: "relative",
                        justifyContent: "space-between",
                    }}>
                        <Link id="logo" className="linkStyle" to="/" onClick = {this.linkClicked}> CC </Link>

                        <div style={{ alignSelf: "center", justifyContent: "flex-end",
 }}>
                            <a id="burger" className={this.state.isOpen ? "toggle" : ""} onClick={this.toggleSidebar}>
                                <span ></span>
                                <span ></span>
                            </a>
                            <div className = {this.state.isOpen ? "blur" : ""} ></div>
                            
                        </div>
                        <div className="menu" >
                            <Link className="linkStyle" to="/#about">about </Link>
                            <Link className="linkStyle" to="/#work">work </Link>
                            <Link className="linkStyle" to="/#contact">contact </Link>
                            <a className="linkStyle" href={PDF} target="_blank">resume </a>
                        </div>
                    </div>
                    <Sidebar isOpen={this.state.isOpen} handleLinkClick={this.linkClicked} />
                </nav>
            </>
        )
    }
}

export default Navbar
