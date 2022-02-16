import React, { useEffect, useState } from 'react';
import { useMenu } from '../context/MenuContext';
import '../assets/css/menu.css';
import { GiHealthPotion } from 'react-icons/gi';
import { BiTimeFive, BiDollarCircle } from 'react-icons/bi';
export const MenuSummary = () => {
  const [averagePrice, setAveragePrice] = useState(0);
  const [averageTimePreparation, setAverageTimePreparation] = useState(0);
  const [averageHealthScore, setAverageHealthScore] = useState(0);
  const { menu } = useMenu();
  //promedio del precio del menu
  const averageMenuPrice = () => {
    let menuPrice = 0;
    //el precio del menu la suma  del precio los items
    menu.forEach((item) => {
      menuPrice = menuPrice + item.price;
    });
    //divide el precio por la longitude de los items
    let average = menuPrice / menu.length;

    setAveragePrice(average);
  };
  //promedio de teimpo de preparacion
  const averageMenuPreparation = () => {
    let menuTimePreparation = 0;

    menu.forEach((item) => {
      menuTimePreparation = menuTimePreparation + item.timePreparation;
    });

    let average = menuTimePreparation / menu.length;

    setAverageTimePreparation(average);
  };
  //promedio de heathscore
  const averageMenuHealthScore = () => {
    let menuHealthScore = 0;

    menu.forEach((item) => {
      menuHealthScore = menuHealthScore + item.healthScore;
    });

    let average = menuHealthScore / menu.length;

    setAverageHealthScore(average);
  };

  useEffect(() => {
    averageMenuPrice();
    averageMenuPreparation();
    averageMenuHealthScore();
  }, [menu]); //llama el efecto solo al menu

  return (
    <>
      {menu.length > 0 && (
        <div className="resumemenu">
          <p>
            <BiDollarCircle />
            <b>Precio total del menú: </b>
            {averagePrice.toFixed(2)}
          </p>
          <p>
            <BiTimeFive />
            <b>Tiempo de preparación : </b>
            {averageTimePreparation.toFixed(2)}
          </p>
          <p>
            <GiHealthPotion />
            <b>Promedio de health score: </b>
            {averageHealthScore.toFixed(2)}
          </p>
        </div>
      )}
    </>
  );
};
