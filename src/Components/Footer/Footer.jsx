import styled from "styled-components"

const Footer = () =>{
    return(
        <FOOTER>
        <h6>Copyright © 2022 mymess.com  <a className="mx-2" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1u7D0I23uyEj4BeB2NsUDTXbl3mqsGBMQ/view">  Get APP</a></h6>
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