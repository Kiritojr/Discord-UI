import React from 'react';

import { Container, Separator } from './style';
import { ServerButton } from '../serverButton/index';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>

        <Separator/>

      <ServerButton />
      <ServerButton hasNotification/>
      <ServerButton mentions={3}/>
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default ServerList;