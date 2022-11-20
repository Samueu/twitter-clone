import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

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

            <StickyBox>
                <Body>
                    <List 
                        title="Maybe you like"
                        elements={[
                            <FollowSugestion 
                                name="Samuel Batista"
                                nickname="@mukawitdawoodie"
                            />,

                            <FollowSugestion 
                                name="Leticia"
                                nickname="@daLeticia"

                            />,

                            <FollowSugestion 
                                name="Maria Cristina"
                                nickname="@mariacrisfeliz"
                            
                            />
                        ]}
                    
                    />
                    <List 
                        title="Maybe you like"
                        elements={[
                            <News />,<News />,<News />
                        ]}
                    
                    />
                    <List 
                        title="Maybe you like"
                        elements={[
                            <News />,<News />,<News />
                        ]}
                    
                    />
                    <List 
                        title="Maybe you like"
                        elements={[
                            <News />,<News />,<News />
                        ]}
                    
                    />
                    
                </Body>
            </StickyBox>
            
        </Container>
    );
}

export default SideBar;