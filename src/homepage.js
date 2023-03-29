import React from "react"
const Homepage = () => {
    return(
        <div>
            <nav class="navbar background">
                <ul class="nv-list">
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>

                </div>
            </nav>
        </div>
        
    )
}
export default Homepage