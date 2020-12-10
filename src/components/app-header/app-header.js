import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 30px;
  h1  {
  font-size: 26px;
  color: ${props => props.colorblue ? 'blue' : 'darkblue'}
  :hover{
  color:ligthblue;
  }
  h2 {
  font-size: 1.2rem;
  color: grey;
  }
`;
const AppHeader = ({liked, allPost}) => {
    return (
        <Header colorblue>
            <h1>Road to the Dream</h1>
            <h1>{allPost} record, from this liked {liked}</h1>
        </Header>
    )
}

export default AppHeader;