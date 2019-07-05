import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-expand-sm bg-light navbar-light fixed-top"
                    id="main-nav">
                    <div className="container">
                        <a href="index.html" className="navbar-brand m-0">
                            <img
                                src="img/navbar-logo.svg"
                                alt=""
                                className="img img-fluid"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse ml-5"
                            id="navbarCollapse">
                            <ul className="navbar-nav mx-5 ">
                                <li className="nav-item m-4">
                                    <a
                                        href="#create-head-section"
                                        className="nav-link">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item m-4">
                                    <a
                                        href="#share-head-section"
                                        className="nav-link">
                                        Ride
                                    </a>
                                </li>
                                <li className="nav-item m-4">
                                    <a
                                        href="#share-head-section"
                                        className="nav-link">
                                        Fair Estimation
                                    </a>
                                </li>
                                <li className="nav-item m-4">
                                    <a
                                        href="#share-head-section"
                                        className="nav-link">
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item m-4">
                                    <a
                                        href="#share-head-section"
                                        className="nav-link">
                                        News
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <ul className="navbar-nav ml-auto ">
                                <li className="nav-item ml-4">
                                    <a
                                        href="#create-head-section"
                                        className="nav-link">
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item ml-4">
                                    <a
                                        href="#share-head-section"
                                        className="nav-link">
                                        Signup
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
