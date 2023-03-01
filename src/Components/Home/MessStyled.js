import styled from "styled-components";

 
export const MESS = styled.div`
  background-color: #000;
  /* padding-top: 20px; */
  .banner {
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    /* margin-bottom: 25px; */
  }

  .banner img {
    width: 50vw;
    margin: auto;
  }

  .banner h3 {
    margin: auto;
    font-size: 4rem;
    font-style: italic;
    /* text-decoration: underline; */
    font-weight: 900;
    color: #fff;
    text-shadow: 3px 2px 2px #000;
    /* width: 50vw; */

    text-align: center;
    padding: 15px;
    /* background-color: rgb(22 21 21/50%); */
    /* border-radius: 20px; */
  }

  .container {
    justify-content: space-between;
  }

  .contact {
    background-color: #5e5656;
    padding: 20px 0 20px 0;
  }

  .contact h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    text-align: center;
    text-shadow: 1px 1px 1px #fff;
    padding: 5px;
  }

  .contact p {
    text-align: center;
    padding: 0 10px 0 10px;
    color: #fff;
    line-height: 2;
  }

  h5 {
    text-align: center;
    color: #fff;
    margin-bottom: 0;
  }

  a {
    width: 100%;
    margin: 10px auto;
    /* padding: 10px; */
  }

  .icon {
    font-size: 2rem;
    padding: 5px;
  }

  .address {
    background-color: #000;
    height: 310ppx;
    width: 40vw;
    border-radius: 20px;
    padding: 20px;
  }

  .open-hours {
    background-color: #000;
    height: 310px;
    width: 40vw;
    border-radius: 20px;
    flex-direction: column;
    padding: 20px;
  }

  .open-hours ul {
    margin: 0 auto;
  }

  .open-hours ul li {
    color: #fff;
    line-height: 2;
  }

  @media (max-width: 767px) {
    .container {
      flex-direction: column;
    }

    .address {
      background-color: #111010;
      height: 100%;
      width: auto;
    }

    .open-hours {
      background-color: #111010;
      height: 100%;
      width: auto;
    }

    .banner h3 {
      width: 100vw;
    }
  }
`;