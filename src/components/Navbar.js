import React from 'react'
import { NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { NavLink as ReactLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"> Health </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavItem className="nav-item">
                                <NavLink className="nav-NavItemnk" tag={ReactLink} to="/"> Home </NavLink>
                            </NavItem>

                            <NavItem className="nav-item">
                                <NavLink className="nav-NavItemnk" tag={ReactLink} to="/aboutus"> About </NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="nav-NavItemnk" tag={ReactLink} to="/contactus"> Contact </NavLink>
                            </NavItem>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
