import React from "react";
import styled from "styled-components";

const Loder = () => {
  return (
    <LoderStyled>
      <div class="loader"></div>
    </LoderStyled>
  );
};

export default Loder;


const LoderStyled = styled.div`
  align-items: center;
  /* background-color: #1D1F20; */
  display: flex;
  justify-content: center;
  height: 50vh;
  margin: auto;

  .loader  {
  animation: rotate 2s infinite;  
  height: 50px;
  width: 50px;
}

.loader:before,
.loader:after {   
  border-radius: 50%;
  content: '';
  display: block;
  height: 20px;  
  width: 20px;
}
.loader:before {
  animation: ball1 2s infinite;  
  background-color: #ffd700;
  box-shadow: 30px 0 0 #ffd700;
  margin-bottom: 10px;
}
.loader:after {
  animation: ball2 2s infinite; 
  background-color: #ffd700 ;
  box-shadow: 30px 0 0 #ffd700 ;
}

@keyframes rotate {
  0% { 
    -webkit-transform: rotate(0deg) scale(0.8); 
    -moz-transform: rotate(0deg) scale(0.8);
  }
  50% { 
    -webkit-transform: rotate(360deg) scale(1.2); 
    -moz-transform: rotate(360deg) scale(1.2);
  }
  100% { 
    -webkit-transform: rotate(720deg) scale(0.8); 
    -moz-transform: rotate(720deg) scale(0.8);
  }
}

@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 #ffd700;
  }
  50% {
    box-shadow: 0 0 0 #ffd700 ;
    margin-bottom: 0;
    -webkit-transform: translate(15px,15px);
    -moz-transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #ffd700 ;
    margin-bottom: 10px;
  }
}

@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 #ffd700 ;
  }
  50% {
    box-shadow: 0 0 0 #ffd700;
    margin-top: -20px;
    -webkit-transform: translate(15px,15px);
    -moz-transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #ffd700;
    margin-top: 0;
  }
}

`