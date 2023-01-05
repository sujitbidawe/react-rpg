import "./Header.css"
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div className="nav">
            <div>
                <NavLink data-testid='nav-link' to='/' end className='nav-link'>Home</NavLink>
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