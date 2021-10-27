import About from "./About";
import styled from 'styled-components'

function Home () {
    return (
        <HomeStyle>
            <h1>Welcome!</h1>
            <h2>Apparently you like books, funny, I do too.</h2>
            <About />
        </HomeStyle>
    )
}

export default Home;

const HomeStyle = styled.div`
    padding: 6px;
    text-align: center;
`
