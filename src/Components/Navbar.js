import React from 'react' 
import {Link} from  'react-router-dom'
export default function Navbar(props) {
  return (
    <>
     <div className="navigation">
            <nav>
                <ul>
                    <li><a href="#home">Overview</a></li>
                    <li><a href="#about">Project</a></li>
                    <li><a href="#portfolio">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
      </div>    

 
  
    
    </>
  )
}
