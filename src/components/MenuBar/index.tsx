import React from 'react';

import Button from '../Button';

import { Container,
    TopSide,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    BotSide,
    Avatar,
    ProfileData,
    ExitIcon } from './styles';

const MenuBar: React.FC = () => {
  return(
    <Container>
        <TopSide>
            <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Home Page</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notifications</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Messages</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favorites</span>
                </MenuButton>

                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Profile</span>
                </MenuButton>   

                 <Button>
                    <span>Tweetar</span>
                 </Button>            
        </TopSide>

        <BotSide>
            <Avatar />
            <ProfileData>
                <strong>de Souza</strong>
                <span>@mukawithdahoodie</span>
            </ProfileData>

            <ExitIcon />
        </BotSide>
    </Container>
  );
}

export default MenuBar;