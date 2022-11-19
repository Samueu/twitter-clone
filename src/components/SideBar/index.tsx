import React from 'react';

import {
     Container,
    SearchWrapper,
    SearchIcon,
    SearchInput,
    Body, } from './styles';

const SideBar: React.FC = () => {
  return(
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Search on twitter"/>
                <SearchIcon />
            </SearchWrapper>

            <Body>
                <p>{'Lorem ipsum dolor sit amet.'.repeat(90)}</p>
            </Body>
        </Container>
    );
}

export default SideBar;