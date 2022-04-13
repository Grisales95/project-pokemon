import React from 'react';
import { IconsTypeStyled } from './IconsType.elements';

const IconsType = ({ icon, setType, setCurrentPage }) => {
  const handleType = () => {
    setType(icon.type);
    setCurrentPage(1);
  };
  return (
    <IconsTypeStyled
      src={icon.img}
      alt={icon.type}
      onClick={() => handleType()}
      bgColor={icon.color}
    />
  );
};

export default IconsType;
