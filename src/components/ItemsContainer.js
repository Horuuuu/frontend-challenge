import React from 'react';
import { Item } from './Item';

export const ItemsContainer = ({ dishes }) => {
  return (
    <>
      <Item dishes={dishes} />
    </>
  );
};
