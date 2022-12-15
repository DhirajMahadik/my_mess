import styled from "styled-components"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const [messList, setMessList] = useState([])

    const GetData = async () => {

        let data = await fetch('http://localhost:5000/', {
            method: "get"
        })
        let result = await data.json();
        setMessList(result)
        // console.log(result)
    }

    const SearchHandler = async (e)=>{
        let key = e.target.value;
        console.log(key)
        if(key){
            let data = await fetch(`http://localhost:5000/search/${key}`, {method:"get"});
            let res = await data.json();
            console.log(res)
            if(res){
                setMessList(res)
            }
        }
       
        else{
            GetData()
        }
       
    }
       
    

    useEffect(() => {
        GetData()
    }, [])

    return (
        <HOME>
            <div>
                <form>
                <marquee style={{color:"#fff"}}>Search anything</marquee>
                    <input onChange={(e)=>SearchHandler(e)} type="Text" className="form-control" placeholder="Search" />
                  
                </form>

            </div>

            <div className="container py-3">
                <hr />
                <h4>You can check following results</h4>
                <div className="row g-3">
                    {messList.length > 0 ? messList.map((element) => {
                        // return 
                            return <div className="col-md-4">
                                <div className="card " key={element._id}    >
                                <Link className="Link  " to={`/mess/${element._id}`}>
                                    {/* <span style={{ color: "black", border: " solid 2px #fff" }} className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-warning">
                                4.5
                            </span> */}

                                    <img src={element.photo ? element.photo : "https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" } className="card-img-top" alt="..." />
                                    {/* <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020"  className="card-img-top" alt="..." />  */}

                                    <div className="card-body">
                                        <h5 className="card-title">{element.messname}</h5>
                                        <span className="card-text">{element.type}</span>
                                        <span>Open : {element.open}</span>
                                        <span>Close : {element.close}</span>

                                    </div>
                                </Link>
                            </div>
                            </div>
                            
                     

                    }): <div className="container d-flex" style={{height:"100vh"}} >
                            <h2 style={{textAlign:"center", margin:"auto"}}>No data found</h2>
                     </div>}
                </div>

            </div>
        </HOME>

    )
}

export default Home

const HOME = styled.section`

background-color: #000;
/* height: 100vh; */
    .Link{
        width: 100%;
        text-decoration: none;
        color: #000;
    }

    .card{
        width: 18rem;
        margin: 20px auto;
        padding: 0;
        border-radius: 20px;
    }

    .card-body{
        position: relative;
        margin-top: 123px;
        background-color: #e0e0e0;
        border-radius: 40px 40px 20px 20px;
    }
    
    .container{
        margin: auto;
        padding: 20px;
        /* height: 100vh; */
        
    }

    .card-text{
        font-weight: 800;
    }

    img{
        height: 170px;
        position: absolute;
        border-radius: 20px;
    }

    hr{
        color: #fff;
    }

    h4{
        text-align: center;
        color: #fff;
        font-weight: bold;
        padding: 20px;
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

    @media (max-width: 767px){
    height: 100%;

    .Container{
        height: 100%;
    }
    }

    
`;