import {NavLink} from 'react-router-dom'

function NavBar () {
    return (
    <nav>
        <NavLink to ="/">Home</NavLink>
        <br/>
        <NavLink to ="/books">Book List</NavLink>
        <br/>
        <NavLink to ="/form">Add A Book</NavLink>
        <br/>
        <NavLink to ="/date">Book Date</NavLink>
    </nav>
    )
}

export default NavBar;