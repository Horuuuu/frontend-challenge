import React, { useEffect } from 'react';
import { ItemsContainer } from './ItemsContainer';

import { Menu } from './Menu';
import { DishesSearch } from './DishesSearch';
import { useMenu } from '../context/MenuContext';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { getDishesList, dishesList } = useMenu(); //estado de la lista de platos
  const isUserLogged = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLogged) {
      //para saber si esta logeado o no
      navigate('/login');
    }

    getDishesList();
  }, []);

  return (
    <>
      <DishesSearch />
      {dishesList.length >= 1 && <ItemsContainer dishes={dishesList} />}
      {/*se renderiza el componente si por lo menos hay un plato*/}
    </>
  );
};
