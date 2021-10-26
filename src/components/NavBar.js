import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

function NavBar () {
    return (
    <NavWrap>
        <nav>
            <NavLink to ="/">Home</NavLink>
            <br/>
            <NavLink to ="/books">Book List</NavLink>
            <br/>
            <NavLink to ="/form">Add A Book</NavLink>
            <br/>
            <NavLink to ="/date">Book Date</NavLink>
        </nav>
    </NavWrap>
    )
}

export default NavBar;

const NavWrap = styled.div`

`