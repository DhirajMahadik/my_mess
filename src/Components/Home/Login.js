import styled from "styled-components"

const Login = () => {

    return (
        <LOGIN>

            <form className="col g-3">
            <div class="col-md-6">
            <h2>Login</h2>
                </div>
                <div class="col-md-6">
                    <label for="InputEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter your email" />
                </div>
                <div class="col-md-6">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="Password" placeholder="Enter your password" />
                </div>
                <div class="col-md-6">
                <button type="submit" class="btn btn-sm btn-outline-warning">Login</button>
                </div>
                
            </form>

        </LOGIN>
    )
}

export default Login

const LOGIN = styled.div`

background-color: #000;
height: 100vh;
display: grid;

button{
    margin: 20px auto;
}

.col-md-6{
    margin: auto;
    padding: 10px;
}

form{
    color: #fff;
    width: 50vw;
    margin:auto;
    background-color: darkslategray;
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
    padding: 20px;

}

@media (max-width: 767px){

    /* padding: 50px; */

    form{
        width: 100%;
        
    }
}

`