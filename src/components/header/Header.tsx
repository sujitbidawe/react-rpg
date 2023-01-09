import "./Header.css"
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div className="nav">
            <div>
                <NavLink to='/' end className='nav-link'>Home</NavLink>
                <NavLink to='/allusers' end className='nav-link'>Listing</NavLink>
            </div>
            <div>
                <span>
                    Welcome, <strong>User!</strong>
                </span>
            </div>
        </div>
    )
}

export default Header;