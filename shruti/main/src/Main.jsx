import React from 'react';
import {Link, Route} from "react-router-dom";


export const Main = () => {
    console.log('**********************************************************************');
    return (

        <div>
            <nav class="navbar background">
                <ul class="nav-list">

                    <div class="logo">
                        <img src={require('./wmlogo.jpg')} alt="waste" width={40} height={90} />
                    </div>

                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div class="rightNav">
                    {/* <button class="btn btn-sm" onClick={<Login />}>Log In</button> */}
                    {/* <Link to="/Login"> */}
                    <Link to = '/login'><button class="btn btn-sm" >Log In</button>
                    </Link>
                    <Link to = '/register'><button class="btn btn-sm">Register</button>
                    </Link>
                </div>
            </nav>

            <img src={require('./waste2.png')} alt="waste" height={500} />

            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}



