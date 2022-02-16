import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import hotel from '../assets/images/hotel.jpg';
import '../assets/css/login.css';
//variable del login
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); //estado inicial del email
  const [password, setPassword] = useState(''); //'' '' '' la contraseña
  const [processingLogin, setProcessingLogin] = useState(false); //logeandose

  const handleLogin = () => {
    setProcessingLogin(true);

    axios
      .post('http://challenge-react.alkemy.org/', {
        //peticion a la api de alkemy
        email: email,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem('token', response.data.token);
        navigate('/'); //redirecciona al home
      })
      .catch(function (error) {
        //si los datos son diferentes a los correctos
        if (!(email === 'challenge@alkemy.org') && !(password === 'react')) {
          // unicos datos correctos
          swal(
            '¡ERROR! email y/o password inválido', //error
            'Por favor introduzca un email y/o password autorizado para el login'
          );
        } //sino
        setProcessingLogin(false); //cambia el estado del logeado
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          //valores iniciales que acepta formik ambos string
          email: '',
          password: '',
        }}
        validate={(inputValue) => {
          let inputErrors = {};

          //validacion de emal
          if (!inputValue.email) {
            inputErrors.email =
              'Campo "Email" no puede estar vacío por favor escriba un correo';
          } else if (inputValue.email === 'challenge@alkemy.org') {
            setEmail(inputValue.email);
          }

          //validacion contaseña
          if (!inputValue.password) {
            inputErrors.password =
              'Campo "Password" no puede estar vacío por favor escriba una contraseña';
          } else if (inputValue.password === 'react') {
            setPassword(inputValue.password);
          }

          return inputErrors;
        }}
        onSubmit={(inputValues, { resetForm }) => {
          resetForm();
          handleLogin();
        }}
      >
        {({
          handleSubmit,
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
        }) => (
          <>
            <section className="vh-100">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 text-black">
                    <div className="acount">
                      <img src={logo} alt="" srcset="" />
                    </div>

                    <div className="d-flex align-items-center justify-content-center mt-3 mb-3">
                      <h3>Iniciar sesion</h3>
                    </div>
                    <form className="formcontainer" onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example18">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          value={values.email}
                          placeholder="challenge@alkemy.org"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {touched.email && errors.email && (
                        <p className="m-0 ms-2 text-danger">{errors.email}</p>
                      )}
                      <div className="form-outline mb-4">
                        <label className="form-label mt-2" for="form2Example28">
                          Password
                        </label>
                        <input
                          value={values.password}
                          type="password"
                          className="form-control form-control-lg"
                          id="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {touched.password && errors.password && (
                        <p className="m-0 ms-2 text-danger">
                          {errors.password}
                        </p>
                      )}
                      <div className="btncontainer pt-1 mb-4">
                        <button
                          type="submit"
                          className="btn btn-info btn-lg btn-block"
                          disabled={processingLogin}
                        >
                          Ingresar
                        </button>
                        {processingLogin && ( //agregar spinner
                          <spinner className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </spinner>
                        )}
                      </div>
                    </form>
                  </div>
                  <div className="col-sm-6 px-0 d-none d-sm-block">
                    <img src={hotel} alt="Login" className="w-100 vh-100" />
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </Formik>
    </>
  );
};
