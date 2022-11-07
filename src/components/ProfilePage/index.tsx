import React from 'react';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage, } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            {/* <EditButton outlined>Editar Perfil</EditButton> */}

            <h1>Samueu</h1>
            <h2>@samueu</h2>

            <p>
                Student and Developer <a href='https://instagram.com/samuuelbatista'>@Instagram</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Bh eh quem?
                </li>
            </ul>
            <ul>
                <li>
                    <CakeIcon />
                    Nasceu 9 de fevereiro de 2004
                </li>
            </ul>

            <Followage>
                <span>
                    Seguindo <strong> 908 </strong>
                </span>
                <span>
                    <strong> 1080 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>
    </Container>

  );
}

export default ProfilePage;