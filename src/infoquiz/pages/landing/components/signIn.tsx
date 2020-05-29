import React from "react";
import styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Layout } from "infoquiz/styles/layout";
import { Logo } from "infoquiz/styles/atoms/logo";
import { Button } from "infoquiz/styles/atoms/button";
import LoginImage from "infoquiz/assets/img/illustrationBoy-login.png";

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
  ${rh.forPortraitTabletUp`flex-direction:row;  width:100%; 
  
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
  ${rh.forPortraitTabletUp`width:300px; margin:50px;`};
`;

const LabelItems = styled.div`
  margin: 10px 0;
  & > input {
    width: 100%;
    transition: ease 0.1s;
    background-color: rgba(46, 196, 182, 0.33);
    border: none;
    margin-top: 5px;
    border: 0.5px solid #555;
    border-radius: 5px;
    padding: 9px 6px;
    &:focus {
      transition: ease 0.1s;
      background-color: $turquoise;
      border: 1px solid #555;
    }
  }
  & > label {
    ${rh.forPortraitTabletUp`font-size: 18px;`};
    font-size: 14px;
  }
`;
const NotAccountTexte = styled.a`
  ${rh.forPortraitTabletUp`font-size: 14px;`};
  font-size: 12px;
  color: black;
  text-decoration: underline;
`;

export const SignIn = () => {
  return (
    <Layout headerArrowBackHome footerWavePinkLower>
      <LoginWrap>
        <Form>
          <Logo />
          <div>
            <LabelItems>
              <label htmlFor="email">Ton mail :</label>
              <input type="email" placeholder="Mail" name="email" />
            </LabelItems>
            <LabelItems>
              <label htmlFor="password">Ton mot de passe :</label>
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
              />
              <NotAccountTexte href="/">Pas encore de compte ?</NotAccountTexte>
            </LabelItems>
          </div>
          <Button>Se connecter</Button>
        </Form>

        <img src={LoginImage} alt="" />
      </LoginWrap>
    </Layout>
  );
};
