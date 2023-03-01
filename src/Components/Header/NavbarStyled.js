import styled from "styled-components";

export const Header = styled.header`


span{
  color: red;
  font-weight: 700;
}

.navbar-brand{
  font-style: italic;
  font-weight: 900;
  margin-left: 20px;
}

.navbar-toggler{
  border: none;
}

.collapse{
  justify-content: flex-end;
  margin-right: 30px;
}

.navbar-toggler:focus{
  box-shadow: none;
}
`;