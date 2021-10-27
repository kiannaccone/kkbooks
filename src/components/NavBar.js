import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

function NavBar () {
    return (
    <div>
        <nav>
            <NavLink to ="/">Home</NavLink>
            <br/>
            <NavLink to ="/books">Book List</NavLink>
            <br/>
            <NavLink to ="/form">Add A Book</NavLink>
            <br/>
            <NavLink to ="/date">Book Date</NavLink>
        </nav>
    </div>
    )
}

export default NavBar;

