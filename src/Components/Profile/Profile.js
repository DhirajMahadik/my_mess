import styled from "styled-components";
// import IMG from '../../dhirajHomepage.PNG'
import { PencilSquare } from 'react-bootstrap-icons'

const Profile = () => {



    return (
        <PROFILE>
            <div className="container">
                <div className="image py-3">
                    <img className="py-3" src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" alt="" />
                    <form>
                        <label>Update your mess banner</label>
                        <input className="form-control my-2" type="file" />
                        <button type="button" className="btn btn-sm btn-warning">Update</button>
                    </form>
                </div>

                <div className="Deatails py-3 px-5 my-4 mx-4 row g-3 ">
                    <div className="edit">
                        <samp>Edit details  <PencilSquare /></samp>
                    </div>
                    <hr />
                    <div className="col-md-6">
                        <h4> Mess name </h4>
                        <p>Shri sai mess</p>
                    </div>
                    <div className="col-md-6">
                        <h4> Type </h4>
                        <p> Only veg</p>
                    </div>
                    <div className="col-md-6">
                        <h4> Address </h4>
                        <p>Shop No - 11, Riddhi Enclave Ganpati Chowk Viman Nagar Pune, Maharashtra 411014 India.</p>
                    </div>

                    {/* <div className="col-md-6">
                        <h4> Location link </h4>
                        <p></p>
                    </div> */}

                    <div className="col-md-6">
                        <h4> Phone no </h4>
                        <p>9130147964</p>
                    </div>

                    <div className="col-md-6">
                        <h4> Email address </h4>
                        <p> dhirajmahadik9221@gmail.com</p>
                    </div>

                    <div className="col-md-6">
                        <h4> Mess open at </h4>
                        <p> 10:00 AM</p>
                    </div>

                    <div className="col-md-6">
                        <h4> Mess open at  </h4>
                        <p>09:30 PM</p>
                    </div>
                    <hr />
                   

                    <div className=" col-md-12">

                        <h3> Daily Updates </h3>

                    </div>

                    <div className=" col-md-12">

                        <h5> Lunch and Dinner time </h5>

                    </div>

                    <div className="col-md-3">
                        Lunch time <input className="form-control  " type="" name="" value="" placeholder="eg. 12 pm to 3 pm" />
                    </div>

                    <div className="col-md-3">
                        Dinner time <input className="form-control" type="" name="" value="" placeholder="eg. 7 pm to 10 pm" />
                    </div>

                    <hr />

                    <div className="col-md-12">
                        <h5> Today's Menu</h5>
                    </div>

                    <div className="col-md-3">

                        <textarea className="form-control" rows="" cols="" placeholder=" please update it on daily basis Eg. bhaji , chapati ect" />
                    </div>

                     <div className="edit" >
                     <button type="button" className="btn btn-sm btn-warning">Update</button>
                    </div>

                    {/* <div className="col-md-3">
                    Friday <input type="" name="" value=""/>
                    </div>

                    <div className="col-md-3">
                    Saturday <input type="" name="" value=""/>
                    </div> */}

                </div>

                <h2>Gallary</h2>
                <hr />
                <div className=" gallary row g-3">
                    <div className="col-md-4 py-2">
                        <div class="card " style={{ width: "18rem" }}>
                            <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" class="card-img-top" alt="..." />
                            <div class="card-body position-absulute">
                                <a href="/" class="btn btn-sm btn-danger">remove</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 py-2">
                        <div class="card " style={{ width: "18rem" }}>
                            <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" class="card-img-top" alt="..." />
                            <div class="card-body position-absulute">
                                <a href="/" class="btn btn-sm btn-danger">remove</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 py-2">
                        <div class="card " style={{ width: "18rem" }}>
                            <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" class="card-img-top" alt="..." />
                            <div class="card-body position-absulute">
                                <a href="/" class="btn btn-sm btn-danger">remove</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 py-2">
                        <div class="card " style={{ width: "18rem" }}>
                            <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" class="card-img-top" alt="..." />
                            <div class="card-body position-absulute">
                                <a href="/" class="btn btn-sm btn-danger">remove</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 py-2">
                        <div class="card " style={{ width: "18rem" }}>
                            <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" class="card-img-top" alt="..." />
                            <div class="card-body position-absulute">
                                <a href="/" class="btn btn-sm btn-danger">remove</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 py-2">
                        <div class="card " style={{ width: "18rem" }}>
                            <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" class="card-img-top" alt="..." />
                            <div class="card-body position-absulute">
                                <a href="/" class="btn btn-sm btn-danger">remove</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </PROFILE>
    )
}

export default Profile;

const PROFILE = styled.div`
/* background-color: #000; */
background-color: aliceblue;

.container{
    /* background-color: aliceblue; */
 
    display: flex;
    flex-direction: column;
}

.container h3{
    text-align: center;
}

.container h2{
    text-align: center;
}

.image{
    display: flex;
    flex-direction: column;
    margin: auto;
    
}

.image form{
    /* width: 500px; */
    margin: auto;
    text-align: center;
}

.image label{
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px;
}

.image img{
    /* width: 100vw; */
    width: -webkit-fill-available;
    margin: auto;
    border-radius: 50px;

}

.Deatails{
    /* background-color: #b0dada; */
    background-color: #d2f1f1;
    border-radius: 20px;
}

.Deatails h4 , p {
    padding: 0;
    margin: 2px;
}

input{
    border: none;
}

input:focus,
textarea:focus{
    border: none;
    box-shadow: none;
    
}

/* .Deatails  p{
    margin-left: 20px;
} */

/* .Deatails h4 {
    border-bottom: solid #000 1px;
    text-align: ;
    border-top: solid #000 1px;
} */

.edit{
    display: flex;
    justify-content: end;
}

.gallary .card{
    margin: auto;
}

.gallary .card-body{
    position: absolute;
    bottom: 0;
}
    
`