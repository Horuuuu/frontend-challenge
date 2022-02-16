import React, { useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { useMenu } from '../context/MenuContext';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  //el detalle del plato tiene
  const { id } = useParams(); //id tomado con hook params
  const { dish, getDishById } = useMenu(); //y plato deacuerdo al id

  useEffect(() => {
    getDishById(id);
  }, [id]);

  return <ItemDetail dish={dish} />;
};
