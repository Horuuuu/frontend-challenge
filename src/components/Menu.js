import React from 'react';
//import { MenuContainer } from '../StyleComponents/Style';
import { useMenu } from '../context/MenuContext';
import { Item } from './Item';
import { MenuSummary } from './MenuSummary';
import '../assets/css/menu.css';
import rata from '../assets/images/rata.jpg';
import donald from '../assets/images/donald.jpg';
export const Menu = () => {
  const { menu } = useMenu();
  return (
    <div className="resumemenu">
      {menu.length === 0 ? ( //si la longitud del menu es 0
        <>
          <img className="imgmenu" src={rata} alt="" srcset="" />

          <div>
            <h4>"El menú esta vacío"</h4>
            {/*se muestra imagen del pato */}
            <img src={donald} alt="" srcset="" />
          </div>
        </>
      ) : (
        //sino se muestra los platos elegidos
        <>
          <img className="imgmenu" src={rata} alt="" srcset="" />
          <Item
            dishes={menu}
            key={menu.id}
            disapeartButton={{ 'd-none': false }}
            appearButton={{ 'd-none': true }}
            disapearParagrah={{ 'd-none': true }}
          />
        </>
      )}
      <MenuSummary />
    </div>
  );
};
