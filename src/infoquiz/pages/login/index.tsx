import React from "react";
import styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { Layout } from "infoquiz/styles/layout";
import { Logo } from "infoquiz/styles/atoms/logo";
import { Button } from "infoquiz/styles/atoms/button";
import { Label } from "infoquiz/styles/atoms/label";

import { LoginService } from "./services";

import LoginImage from "infoquiz/assets/illustrations/illustrationBoy-login.png";

const LoginWrap = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 220px;
  & > img {
    width: 250px;
  }
  margin: 30px;
  ${rh.forTabletUp`
  flex-direction:row;  
  width:100%; 
  & > img {
  width: 330px;
  }`};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  align-items: center;
  & > a {
    width: 100%;
  }
  ${rh.forTabletUp`width:300px; margin:50px;`};
`;

const NotAccountTexte = styled.a`
  font-size: 12px;
  color: black;
  text-decoration: underline;
  ${rh.forTabletUp`font-size: 14px;`};
`;

export const Login = () => {
  const history = useHistory();

  const validate = (values) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = "Reequired";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      LoginService(values).then(
        (resp) => {
          localStorage.setItem("token", resp.accessToken);
          history.push("/");
        },
        () => console.log("error")
      );
    },
  });

  return (
    <Layout headerArrowBackHome footerWavePinkLower>
      <LoginWrap>
        <Form onSubmit={formik.handleSubmit}>
          <Logo />
          <div>
            <Label>
              <label htmlFor="email">Ton mail :</label>
              <input
                type="email"
                placeholder="Mail"
                name="email"
                onChange={formik.handleChange}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </Label>
            <Label>
              <label htmlFor="password">Ton mot de passe :</label>
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                onChange={formik.handleChange}
              />
              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
              <NotAccountTexte href="/register">
                Pas encore de compte ?
              </NotAccountTexte>
            </Label>
          </div>
          <Button type="submit">Se connecter</Button>
        </Form>
        <img src={LoginImage} alt="" />
      </LoginWrap>
    </Layout>
  );
};
