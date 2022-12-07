import styled from "styled-components"

const Footer = () =>{
    return(
        <FOOTER>
        <h5>All right reserved</h5>
        </FOOTER>
    )
}

export default Footer;

const FOOTER = styled.footer`
padding: 0;
margin: 0;
background-color: #343a40;
bottom: 0;

h5{
    display: flex;
    justify-content: center;
    padding: 10px ;
    margin-bottom: 0;
}

`