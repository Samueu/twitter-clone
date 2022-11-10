import React from 'react';

import { Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return(
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Você retweetou
            </Retweeted>
            <Body>
                <Avatar />


                <Content>
                    <Header>
                        <strong>Samuel</strong>
                        <span>@wakeupfilthy</span>
                        <Dot />
                        <time>09 de fev</time>
                    </Header>

                    <Description>foguete nao tem re!</Description>

                    <ImageContent />
                    
                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            18
                        </Status>
                        <Status>
                            <LikeIcon />
                            999
                        </Status>
                    </Icons>
                </ Content>
            </Body>
        </Container>
    );
}

export default Tweet;