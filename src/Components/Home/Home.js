import styled from "styled-components"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const [messList, setMessList] = useState([])

    const GetData = async () => {

        let data = await fetch('http://localhost:5000/messes', {
            method: "get"
        })
        let result = await data.json();
        setMessList(result)
        console.log(result)


    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <HOME>
            <div>
                <form>
                    <input type="Text" className="form-control" placeholder="Search" />
                </form>

            </div>

            <div className="container d-flex  row g-3 py-3">
                <hr />
                <h4>You can check following results</h4>
                {messList.map((element) => {
                    // return <Link className="Link" to={`/mess/${element._id}`} key={element._id}>
                  return  <div className="card col-md-3"    >
                    <Link className="Link" to={`/mess/${element._id}`} key={element._id}>
                        <span style={{ color: "black", border: " solid 2px #fff" }} className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-warning">
                            4.5
                        </span>

                        <img src={element.photo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>
                            <span className="card-text">{element.type}</span>
                            <span>{element.open}</span>
                            <span>{element.close}</span>

                        </div>
                        </Link>
                    </div>

                // </Link>
                })}

                
                {/* 
                <div className="card col-md-3 position-relative" >
                    <span style={{ color: "black", border: " solid 2px #fff" }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                        4.5
                    </span>
                    <img src="https://media.timeout.com/images/105825245/750/422/image.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Sakshi Mess</h5>
                        <span className="card-text"> Only Veg </span>
                        <span>Open : 10 AM</span>
                        <span>Close : 10 PM</span>
                       
                    </div>
                </div>

                <div className="card col-md-3" >
                    <span style={{ color: "black", border: " solid 2px #fff" }} className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-warning">
                        4.5
                    </span>
                    <img src="https://resdiaryportal.wpengine.com/wp-content/uploads/2022/02/lotus-double-bay-restaurant-360x240.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Shri Sai Mess</h5>
                        <span className="card-text">Veg & Non-Veg</span>
                        <span>Open : 10 AM</span>
                        <span>Close : 10 PM</span>
                        
                    </div>
                </div>

                <div className="card col-md-3" >
                    <span style={{ color: "black", border: " solid 2px #fff" }} className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-warning">
                        4.5
                    </span>
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/76/e1/6b/sand-wood.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Panjabi Mess</h5>
                        <span className="card-text">Veg & Non-Veg</span>
                        <span>Open : 10 AM</span>
                        <span>Close : 10 PM</span>
                        
                    </div>
                </div>

                <div className="card col-md-3" >
                    <span style={{ color: "black", border: " solid 2px #fff" }} className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-warning">
                        4.5
                    </span>
                    <img src="https://images.hindustantimes.com/img/2021/08/24/550x309/424047b8-f53b-11eb-a3e5-073c8ff4a6d2_1628092243522_1629837022818.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">My Tiffin Mess</h5>
                        <span className="card-text"> Only Veg </span>
                        <span>Open : 10 AM</span>
                        <span>Close : 10 PM</span>
                       
                    </div>
                </div>

                <div className="card col-md-3" >
                    <span style={{ color: "black", border: " solid 2px #fff" }} className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-warning">
                        4.5
                    </span>
                    <img src="https://resdiaryportal.wpengine.com/wp-content/uploads/2022/02/lotus-double-bay-restaurant-360x240.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">My Tiffin Mess</h5>
                        <span className="card-text"> Only Veg </span>
                        <span>Open : 10 AM</span>
                        <span>Close : 10 PM</span>
                       
                    </div>
                </div>

                <div className="card col-md-3" >
                    <span style={{ color: "black", border: " solid 2px #fff" }} className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-warning">
                        4.5
                    </span>
                    <img src="https://images.hindustantimes.com/img/2021/08/24/550x309/424047b8-f53b-11eb-a3e5-073c8ff4a6d2_1628092243522_1629837022818.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">My Tiffin Mess</h5>
                        <span className="card-text"> Only Veg </span>
                        <span>Open : 10 AM</span>
                        <span>Close : 10 PM</span>
                        
                    </div>
                </div>

                <div className="card col-md-3" >
                    <span style={{ color: "black", border: " solid 2px #fff" }} className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-warning">
                        4.5
                    </span>
                    <img src="https://resdiaryportal.wpengine.com/wp-content/uploads/2022/02/lotus-double-bay-restaurant-360x240.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">My Tiffin Mess</h5>
                        <span className="card-text"> Only Veg </span>
                        <span>Open : 10 AM</span>
                        <span>Close : 10 PM</span>
                       
                    </div>
                </div> */}


            </div>
        </HOME>

    )
}

export default Home

const HOME = styled.section`

background-color: #000;

    .Link{
        width: 100%;
        text-decoration: none;
        color: #000;
    }

    .card{
        width: 16rem;
        margin: 20px auto;
        padding: 0;
    }
    
    .container{
        margin: auto;
    }

    .card-text{
        font-weight: 800;
    }

    img{
        height: 170px;
    }

    hr{
        color: #fff;
    }

    h4{
        text-align: center;
        color: #fff;
        font-weight: bold;
    }

    span{
        display: block;
    }

    form{
        width: fit-content;
        padding-top: 30px;
        margin: auto;
    }

    form input{
       height: 30px;
    }

    
`;