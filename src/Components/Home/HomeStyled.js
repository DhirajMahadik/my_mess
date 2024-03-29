import styled from "styled-components";

export const HOME = styled.section`
  background-color: #000;
  .Link {
    width: 100%;
    text-decoration: none;
    color: #000;
  }

  .Flex {
    background-image: url("https://b.zmtcdn.com/data/pictures/8/18894888/479fef6a7a652d56a755e0d4bcf2e90e.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 300px;
    display: flex;
  }

  .Flex form {
    margin: auto;
    input {
      padding: 20px 0px;
      padding: 20px 20px;
      border: solid goldenrod 2px;
      border-radius: 20px;
      background-color: #00000061;
      color: #fff;
      -webkit-text-fill-color: #fff;
      :hover{
        padding: 20px 100px;
        text-align: center;
        transition: .7s;
      }
    }
  }

  .Flex span {
    color: red;
  }

  .Flex form h1 {
    font-size: 4rem;
    /* font-family: cursive; */
    color: #fff;
    font-weight: 900;
    font-style: italic;
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: center;
    text-shadow: 2px 2px 2px #000;
  }

  .card {
    margin: 20px auto;
    padding: 0;
    border-radius: 20px;
    background-color: #e0e0e0;
    height: 300px;
    
    :hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }

  .card-body {
    position: relative;
    margin-top: 123px;
    background-color: #e0e0e0;
    border-radius: 50px 0px 20px 20px;
  }

  button {
    margin: 10px auto;
  }

  .container {
    margin: auto;
    padding: 20px;
    height: 850px;
    overflow: scroll;
    ::-webkit-scrollbar{
      display: none;
    }
  }

  .card-text {
    font-weight: 800;
  }

  img {
    height: 170px;
    position: absolute;
    border-radius: 20px;
  }

  hr {
    color: #fff;
  }

  h4 {
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding: 20px;
  }

  span {
    display: block;
  }

  form input {
    height: 30px;
  }

  @media (max-width: 767px) {
    height: 100%;

    .Container {
      height: 100%;
    }

    .card{
     margin: auto;

    }

    .card-body {
      height: 160px;
      
      h5{
        font-size: 15px;
      }

      span{
        font-size: 12px;
      }
    
    }
    .col-md-3{
      width: 175px;
      margin: 10px auto;

    }

    .row > * {
    padding: 0 !important;
  
}

  }
`;
