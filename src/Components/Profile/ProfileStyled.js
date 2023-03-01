import styled from "styled-components";

 const Profile = styled.div`
  /* background-color: #000; */
  background-color: #6a8297;

  .container {
    /* background-color: aliceblue; */

    display: flex;
    flex-direction: column;
    .loader {
      position: absolute;
    }
  }

  .container h3 {
    text-align: center;
  }

  .container h2 {
    text-align: center;
  }

  .image {
    display: flex;
    /* flex-direction: column; */
    /* margin: auto; */
    /* background-image: url("https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020"); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 400px;
    margin-top: 20px;
    border-radius: 20px;
  }

  .image form {
    /* width: 500px; */
    margin: auto;
    text-align: center;
    background-color: rgba(0 0 0/50%);
    padding: 15px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    h2 {
      color: #fff;
      font-weight: 800;
    }
  }

  .image input {
    border-radius: 20px;
    color: #fff;
    visibility: hidden;
  }

  .image label {
    /* font-size: 1rem; */
    font-weight: bold;
    padding: 10px;
    color: #fff;
  }

  .image img {
    /* width: 100vw; */
    width: -webkit-fill-available;
    margin: auto;
    border-radius: 50px;
  }

  .Deatails {
    /* background-color: #b0dada; */
    background-color: #d2f1f1;
    border-radius: 20px;
  }

  .Deatails h4,
  p {
    padding: 0;
    margin: 2px;
  }

  input {
    border: none;
  }

  input:focus,
  textarea:focus {
    border: none;
    box-shadow: none;
  }

  .Deatails p {
    padding: 5px 5px 5px 10px;
    color: #000;
    background-color: #b7dce3;
    border-radius: 5px;
    text-align: center;
  }

  .Deatails h4 {
    /* border-bottom: solid #000 1px; */
    /* text-align: center; */
    /* border-top: solid #000 1px; */
  }

  .edit {
    display: flex;
    justify-content: end;
  }

  .edit samp {
    cursor: pointer;
  }

  .modal-body input {
    border: solid 1px;
  }

  .gallary .card {
    margin: auto;
  }

  .gallary .card-body {
    position: absolute;
    bottom: 0;
  }

  .upload-photo {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  .upload-label {
    margin: auto;
    /* color: #fff; */
    padding: 5px 10px;
    cursor: pointer;
    /* font-weight: bold; */
    /* border: solid yellowgreen 1px; */
    /* background-color: red; */
    border-radius: 20px;
  }
`;

export default Profile