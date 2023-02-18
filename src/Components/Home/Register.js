import { useState } from "react"
import styled from "styled-components"
import { ToastContainer, toast } from 'react-toastify';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'
import { PersonCircle } from 'react-bootstrap-icons'

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
        close: "",
        password: ""
    })

    const Toastoptions = {
        position: "top-center",
        autoClose: 6000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"

    };

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
        // toast.success("Registered Successfully" ,Toastoptions);
        let formData = new FormData();
        formData.append('image', Banner);
        for (let key of Object.keys(User)) {
            formData.append(key, User[key]);
        }
        await fetch('http://localhost:5000/add-mess', {
            method: 'POST',
            body: formData
        }).then((res) => {
            if (res.status === 200) {
                console.log("Registered Successfully")
                toast.success("Registered Successfully", Toastoptions);
                setTimeout(() => {
                    Navigate('/login')
                }, 5000)
            } else if (res.status === 400) {
                console.log("Email Already exist")
                toast.error("Email Already exist.", Toastoptions);
            }
        }).catch((err) => {
            // console.log("Email already exist")
            toast.error(err.message, Toastoptions);
        })
        // let res = await data.json()
        // console.log(res)
        // } catch  (error) {
        //    let err = await error.json()
        //    console.log(err)
        // }



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
                    <h1><PersonCircle /></h1>
                    <h2>Register your mess here</h2>

                </div>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name of your mess</label>
                    <input required onChange={onchangeHandler} name="messname" value={User.messname} type="text" className="form-control" id="name" placeholder="Enter name here" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="type" className="form-label">Type</label>
                    <select required onChange={onchangeHandler} name="type" value={User.type} id="type" className="form-select">
                        <option value={"Veg/Non-Veg"}>Veg / Non-veg</option>
                        <option value={" Only Veg"}>Only Veg</option>
                        <option value={" Only Non-Veg"}>Only Non-Veg</option>
                    </select>
                </div>

                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input required onChange={onchangeHandler} name="address" value={User.address} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="location" className="form-label">Location URL</label>
                    <input required onChange={onchangeHandler} name="location" value={User.location} type="text" className="form-control" id="location" placeholder="Google map link etc" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="banner" className="form-label">Mess Banner</label>
                    <input required onChange={onFileChangeHandler} name="banner" type="file" className="form-control" id="banner" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone no</label>
                    <input required onChange={onchangeHandler} name="phone" value={User.phone} type="text" className="form-control" id="phone" placeholder="Enter phone no" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input required onChange={onchangeHandler} name="email" value={User.email} type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input required onChange={onchangeHandler} name="password" type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
                <div className="col-6">

                    <label className="form-label" htmlFor="openTime">
                        Mess open at
                    </label>
                    <input required onChange={onchangeHandler} name="open" value={User.open} className="form-control" type="time" id="openTime" />

                </div>

                <div className="col-6">

                    <label className="form-label" htmlFor="closeTime">
                        Mess close at
                    </label>
                    <input onChange={onchangeHandler} name="close" value={User.close} className="form-control" type="time" id="closeTime" />

                </div>
                <div className="col-md-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" data-bs-toggle="modal" data-bs-target="#termsANDconditions">
                            Accept terms & conditions
                        </label>
                    </div>
                </div>

                <div className="col-12 d-flex">
                    <button type="submit" className="btn btn-sm btn-outline-warning ">Register</button>
                </div>
            </form>

            {/* Terms and conditions model */}

            <div className="modal fade" id="termsANDconditions" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Terms & conditions</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Thank you for using mymess. These Terms of Service (the "Terms") are intended to make you aware of your legal rights and responsibilities with respect to your access to and use of the mymess website at www.mymess.com (the "Site") and any related mobile or software applications ("mymess Platform") including but not limited to delivery of information via the website whether existing now or in the future that link to the Terms (collectively, the "Services").
                                <br/>
                                <b>These Terms are effective for all existing and future mymess customers, including but without limitation to users having access to 'restaurant business page' to manage their claimed business listings.</b>
                            </p>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">OK</button>
                        </div> */}
                    </div>
                </div>
            </div>

            <ToastContainer />
        </REGISTER_LOGIN>
    )
}

export default Register

export const REGISTER_LOGIN = styled.div`
display: flex;
padding: 20px;
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

.form-check-label{
    text-decoration:underline ;
    cursor: pointer;
}

form h2{
    text-align: center;
    color: gold;
    font-weight: 800;
    padding: 15px;

}

form h1{
    text-align: center;
    color: gold;
    font-weight: 800;
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

