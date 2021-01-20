import React from 'react';
import {Link} from 'react-router-dom';

function Navi()
{
    return(
        <div>
           
            <nav className="navbar navbar-dark bg-dark">
            <ul className="justify-content-right">
                {/* <Link to='/about' className="nav-item">Table
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

                {/* <Link to='/shop' className="nav-item">Register
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

                
                {/* <Link to='/controlledinputs' className="nav-item">Online Purchase
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

                {/* <Link to='/Topics' className="nav-item">Topics
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

                <Link to='/createuser' className="nav-item">Librarian Login
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                <Link to='/registerpage' className="nav-item">Register Page
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                {/* <Link to='/userpage' className="nav-item">View Books
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}


                {/* <Link to='/condition' className="nav-item">Books Lists
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

                

                <Link to='/app' className="nav-item">Home
                </Link>
            </ul>
            </nav>
        </div>
    );
}
export default Navi;