import React from 'react';

import ProfilePanel from './ProfilePanel';
import LoadingProfilePanel from '../Shimmer/LoadingProfilePanel';
import HashtagPanel from './HashtagPanel';

import { Container } from './styles';

const LeftColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <LoadingProfilePanel />
      ) : 
      (
        <>
          <ProfilePanel />
          <HashtagPanel />
        </>
      )  
      }
    </Container>
  );
};

export default LeftColumn;
