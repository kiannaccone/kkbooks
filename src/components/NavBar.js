import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavBar () {
    return (
        <MenuBar>
           <li><NavLink to ="/">Home</NavLink></li>
           <li><NavLink to ="/books">Book List</NavLink></li>
           <li><NavLink to ="/form">Add A Book</NavLink></li>
           <li><NavLink to ="/date">Book Date</NavLink></li>
        </MenuBar>
    )
}

export default NavBar;

const MenuBar = styled.ul`
   padding: 5%;
   display:flex;
   justify-content:space-around;
   font-family: 'Libre Baskerville', serif;
   li{
       list-style: none;
       a {
        color:black;
        text-decoration: none;
        font-size: 25px;
    }
   }

`

