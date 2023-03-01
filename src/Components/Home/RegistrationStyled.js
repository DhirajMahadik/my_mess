import styled from "styled-components";

export const REGISTER_LOGIN = styled.div`
  display: flex;
  padding: 20px;
  background-color: #000000b8;
  height: 100vh;

  button {
    margin: 20px auto;
  }

  form {
    color: #fff;
    width: 30vw;
    margin: auto;
    background-color: #ffffff4f;
    padding: 0 10px;
    border-radius: 10px;
  }

  form label {
    font-weight: bold;
  }

  form input,
  select {
    background-color: #1a1818;
    color: #fff;
    border: none;
  }

  form input:focus {
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

  .form-check-label {
    text-decoration: underline;
    cursor: pointer;
  }

  form h2 {
    text-align: center;
    color: gold;
    font-weight: 800;
  }

  form h1 {
    text-align: center;
    color: gold;
    font-weight: 800;
  }

  @media (max-width: 767px) {
    form {
      width: 100%;
    }
  }

  @media (max-height: 600px) {
    height: 100%;
  }

  @media (min-height: 800px) {
    height: 100vh;
  }
`;
