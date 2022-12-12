import { useState } from "react"
import styled from "styled-components"
import { ArrowLeftCircleFill } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const Navigate = useNavigate()
    const [Banner, setBanner] = useState();
    const [User, setUser] = useState({
        messname: "",
        type: "",
        address: "",
        location: "",
        phone: "",
        email: "",
        open: "",
        close: ""
    })



    const onFileChangeHandler = (event) => {
        let file = event.target.files[0];
        setBanner(file);
        console.log(file)
    }

    const onchangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({ ...User, [name]: value })
    }

    const OnsubmitHandler = async (e) => {
        e.preventDefault();


        // let formData = new FormData();
        // formData.append('image', Banner)

        // console.log(formData)
        // let upload = await fetch('http://localhost:5000/add-image', {
        //     method: "post",
        //     body: formData,

        // })
        // let res = await upload
        // console.log(res);
        // console.log(User)
        // console.log(Banner)

        let formData = new FormData();
        // formData.append('image', Banner )
        formData.append(User)

        let data = await fetch('http://localhost:5000/add-mess', {
            method: "post",
            // body: JSON.stringify({ User }), headers: { "Content-Type": "application/json" }
            body: formData
        })
        let result = await data.json();
        console.log(result);

        

    }

    const backToHome = () => {
        Navigate('/')
    }


    return (
        <REGISTER_LOGIN className="">

            <form onSubmit={OnsubmitHandler} className="row g-3">
                <div className="col-md-12">

                    <ArrowLeftCircleFill onClick={backToHome} style={{ fontSize: "2rem" }} />

                </div>
                <div className="col-md-12">

                    <h2>Register your mess here</h2>

                </div>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name of your mess</label>
                    <input onChange={onchangeHandler} name="messname" value={User.messname} type="text" className="form-control" id="name" placeholder="Enter name here" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="type" className="form-label">Type</label>
                    <select onChange={onchangeHandler} name="type" value={User.type} id="type" className="form-select">
                        <option  >Choose</option>
                        <option value={"Veg/Non-Veg"}>Veg / Non-veg</option>
                        <option value={" Only Veg"}>Only Veg</option>
                        <option value={" Only Non-Veg"}>Only Non-Veg</option>
                    </select>
                </div>

                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input onChange={onchangeHandler} name="address" value={User.address} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="location" className="form-label">Location URL</label>
                    <input onChange={onchangeHandler} name="location" value={User.location} type="text" className="form-control" id="location" placeholder="Google map link etc" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="banner" className="form-label">Mess Banner</label>
                    <input onChange={onFileChangeHandler} name="banner" type="file" className="form-control" id="banner" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="phone" className="form-label">Phone no</label>
                    <input onChange={onchangeHandler} name="phone" value={User.phone} type="text" className="form-control" id="phone" placeholder="Enter phone no" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={onchangeHandler} name="email" value={User.email} type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="col-4">

                    <label className="form-label" htmlFor="openTime">
                        Mess open at
                    </label>
                    <input onChange={onchangeHandler} name="open" value={User.open} className="form-control" type="time" id="openTime" />

                </div>

                <div className="col-4">

                    <label className="form-label" htmlFor="closeTime">
                        Mess close at
                    </label>
                    <input onChange={onchangeHandler} name="close" value={User.close} className="form-control" type="time" id="closeTime" />

                </div>

                <div className="col-12 d-flex">
                    <button type="submit" className="btn btn-sm btn-outline-warning ">Register</button>
                </div>
            </form>
        </REGISTER_LOGIN>
    )
}

export default Register

export const REGISTER_LOGIN = styled.div`
display: flex;
padding: 50px;
background-color: #000;
/* height: 100vh; */

button{
    margin: 20px auto;
}

form{
    color: #fff;
    width: 60vw;
    margin:auto;
    /* background-color: #1a1818; */
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
    border: none;
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
    /* height: 100%; */

    form{
        width: 100%;
    }
}

@media (max-height: 600px){
    height: 100%;
}

@media (min-height: 800px){
    height: 100vh;
}

`;

