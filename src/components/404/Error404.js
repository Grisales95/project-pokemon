import React from 'react';
import {
  Error404Styled,
  ErrorContainer,
  ErrorDescription,
  ErrorTitle,
  ImgPokeBall,
} from './Error404.elements';

const Error404 = () => {
  return (
    <ErrorContainer>
      <Error404Styled>Error</Error404Styled>
      <ErrorTitle>
        4{' '}
        <ImgPokeBall
          src='https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png'
          alt='pokeball'
        />
        4
      </ErrorTitle>
      <ErrorDescription> Page Not Found </ErrorDescription>
    </ErrorContainer>
  );
};

export default Error404;
