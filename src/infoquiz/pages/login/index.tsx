import React, { useState } from "react";
import styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { useHistory } from "react-router-dom";

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
  const initialFormData = {
    email: "",
    password: "",
  };

  const [form_data, updateFormData] = useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
      ...form_data,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const SignInApi = () => {
    LoginService(form_data).then(
      (resp) => {
        localStorage.setItem("token", resp.accessToken);
        history.push("/");
      },
      () => console.log("error")
    );
  };

  return (
    <Layout headerArrowBackHome footerWavePinkLower>
      <LoginWrap>
        <Form>
          <Logo />
          <div>
            <Label>
              <label htmlFor="email">Ton mail :</label>
              <input
                type="email"
                placeholder="Mail"
                name="email"
                onChange={handleChange}
              />
            </Label>
            <Label>
              <label htmlFor="password">Ton mot de passe :</label>
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                onChange={handleChange}
              />
              <NotAccountTexte href="/">Pas encore de compte ?</NotAccountTexte>
            </Label>
          </div>
          <Button onClick={SignInApi}>Se connecter</Button>
        </Form>
        <img src={LoginImage} alt="" />
      </LoginWrap>
    </Layout>
  );
};
