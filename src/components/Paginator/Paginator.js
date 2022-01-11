import React, { useState } from 'react';
import {
  ButtonPaginator,
  ContainerBtnPaginator,
  IconPage,
} from './paginator.elements';

const Paginator = ({ perPage, totalPokemons, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPokemons / perPage); i++) {
    pageNumbers.push({ i, id: i });
  }

  const [previus, setPrevius] = useState(0);
  const [next, setNext] = useState(5);

  const pageNavNext = (number) => {
    paginate(number.i);
    if (number.i === next) {
      setNext(next + 1);
      setPrevius(previus + 1);
    }
    if (number.i - 1 === previus) {
      if (previus === 0) {
        return;
      }
      setNext(next - 1);
      setPrevius(previus - 1);
    }
  };

  const finishPage = () => {
    paginate(pageNumbers.length);
    setNext(pageNumbers.length);
    setPrevius(pageNumbers.length - 5);
  };

  const initPage = () => {
    paginate(1);
    setNext(5);
    setPrevius(0);
  };

  return (
    <ContainerBtnPaginator>
      <IconPage
        className='fas fa-chevron-left'
        onClick={initPage}
        disabled={next <= 5 && true}
      ></IconPage>
      {pageNumbers.slice(previus, next).map((number) => {
        return (
          <ButtonPaginator
            key={number.i}
            onClick={() => pageNavNext(number)}
            active={number.id === currentPage && true}
            to='##'
          >
            {number.i}
          </ButtonPaginator>
        );
      })}

      <IconPage
        className='fas fa-chevron-right'
        onClick={finishPage}
        disabled={previus >= pageNumbers.length - 5 && true}
      ></IconPage>
    </ContainerBtnPaginator>
  );
};

export default Paginator;
