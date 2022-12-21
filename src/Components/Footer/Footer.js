import styled from "styled-components"

const Footer = () =>{
    return(
        <FOOTER>
        <h6>Copyright © 2022 mymess.com</h6>
        </FOOTER>
    )
}

export default Footer;

const FOOTER = styled.footer`
padding: 0;
margin: 0;
background-color: darkgray;
bottom: 0;

h6{
    display: flex;
    justify-content: center;
    padding: 10px ;
    margin-bottom: 0;
}

`