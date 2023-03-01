import styled from "styled-components";

export const LOGIN = styled.div`

background-color: #000000b8;
height: 100vh;
display: grid;
padding: 10px;

button{
    margin: 20px auto;
}

.col-md-12{
    margin: auto;
    /* padding: 10px; */
}

form{
    color: #fff;
    width: 25vw;
    margin:auto;
    background-color: #ffffff4f;
    padding: 20px;
    border-radius: 10px;
}

form label{
    font-weight: bold;
}

form input , select{
    background-color: #1a1818;
    color: #fff;
}

form input:focus{
    background-color: #1a1818;
    color: #fff;
}



input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:active,
input:-webkit-autofill:focus {

    transition: background-color 5000s ease-in-out 0s;
    color: #fff !important;
    -webkit-text-fill-color: #fff !important;
}
h2{
    text-align: center;
    color: gold;
    font-weight: 800;
    /* padding: 15px; */

}

h1{
    text-align: center;
    color: gold;
    font-weight: 800;
}

@media (max-width: 767px){

    /* padding: 50px; */

    form{
        width: 100%;
        
    }
}

`