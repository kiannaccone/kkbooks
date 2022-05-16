import portugal from "./portugal.jpeg"
import styled from 'styled-components';

function About () {
    return (
    <div>
        <Image src={portugal} alt="library"/>
        <h3>
            “That's the thing about books. They let you travel without moving your feet.”
            <br/>
            Jhumpa Lahiri, <em>The Namesake</em>
        </h3>
        <p>
            <br/>
            This is a safe haven for all bookish fans. Please feel free to browse books as well as add your favorites. 
            <br/>
            Unsure what to read next? Go to book date to have a blind date with a new book. Happy reading! 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
                Brought to you by: 
            <br/> 
            <br/> 
                KK Books ❤️
            <br/>
            <br/>
        </p>
        <br/>
    </div>
    )
}

export default About;

const Image = styled.img `
width: 33%;
`