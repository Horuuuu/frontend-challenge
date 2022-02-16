import React from 'react';
import { Formik } from 'formik';
import { useMenu } from '../context/MenuContext';
import menum from '../assets/images/menum.jpg';
import '../assets/css/seeker.css';
//funcion para busca los platos
export const DishesSearch = () => {
  const { searchDishesByQuery } = useMenu();

  return (
    <>
      <Formik
        initialValues={{ searchValue: '' }}
        onSubmit={(values, { resetForm }) => {
          if (values.searchValue.length >= 2) {
            let query = values.searchValue.toLowerCase();
            searchDishesByQuery(query);
          }
          resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <div>
            <form onSubmit={handleSubmit}>
              <img className="imgseeker" src={menum} alt="" srcset="" />

              <input
                className="inputseeker"
                type="text"
                id="searching"
                name="searchValue"
                value={values.searchValue}
                placeholder="ej: Pizza"
                onChange={handleChange}
              />
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};
