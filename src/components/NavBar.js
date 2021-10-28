import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavBar () {
    return (
        <MenuBar>
            <NavLink to ="/">Home</NavLink>
            <NavLink to ="/books">Book List</NavLink>
            <NavLink to ="/form">Add A Book</NavLink>
            <NavLink to ="/date">Book Date</NavLink>
        </MenuBar>
    )
}

export default NavBar;

const MenuBar = styled.div`
    disply: flex;
    justify-content: space-evenly;
    padding-bottom: 20%;
`

