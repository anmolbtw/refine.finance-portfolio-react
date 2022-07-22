/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
    return(
        <div>
        {/* Top navigation bar */}
        <section id="navbar">
            <nav className="navbar fixed-top navbar-light navbar-expand-md">
            <a href="#" className="navbar-brand">
                <img src="images/refine-logo.png" alt="" className="refine-logo" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse" id="navbar">
                <ul className="navbar-nav ms-lg-auto">
                <li className="nav-item">
                    <a href="" className="nav-link">
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                    Business
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                    Screener
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                    Company Analytics
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active blue" aria-current="page" href="#">
                    Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                    <img
                        src="images/Vectorprofile.jpg"
                        alt="profile"
                        className="profile-img"
                    />
                    </a>
                </li>
                </ul>
            </div>
            </nav>
        </section>
        {/* Middle Section  */}
        <div className="topline" />
        <p className="or">OR</p>
        <div className="bottomline" />
        {/* Middle Text  */}
        <p className="p1">Curated Portfolios</p>
        <p className="p2">Create your Portfolio</p>
        <p className="p3">Expertly-created Portfolios</p>
        <p className="p4">Create your Portfolio</p>
        <p className="p5">
            Choose from ready well diversified portfolios across industries or investing
            styles.
        </p>
        <p className="p6">
            Select the stocks you like to make diversified portfolios.
        </p>
        {/* Bottom Buttons */}
        <button className="btn1">Explore Portfolios</button>
        <button className="btn2">Create Portfolio</button>
    </div>

    );

}

export default App;