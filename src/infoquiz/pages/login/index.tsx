import React from "react";
import styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { Color } from "infoquiz/styles/consts";

import { Layout } from "infoquiz/styles/layout";
import { Logo } from "infoquiz/styles/atoms/logo";
import { Error } from "infoquiz/styles/atoms/error";
import { Button } from "infoquiz/styles/atoms/button";
import { Input } from "infoquiz/styles/atoms/input";

import { LoginService } from "./services";

import Roquet from "infoquiz/assets/illustrations/roquet.svg";

const LoginWrap = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  justify-content: space-between;
  & > a {
    width: 100%;
  }
  & > img {
    width: 108px;
    margin: 15px auto;
  }
  ${rh.forTabletUp`
  flex-direction: row;
  & > img {
  width: 208px;
  margin-left:  350px;
  }`};
`;

const Inputs = styled.div`
  width: 100%;
  ${rh.forTabletUp` width: 366px;`};
`;

const NotAccountTexte = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: ${Color.grey};
  ${rh.forTabletUp`font-size: 14px;`};
  & > span {
    text-decoration: underline 2px;
    font-weight: 600;
    color: ${Color.pink};
    margin-left: 5px;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 22px;
  margin-bottom: 10px;
  ${rh.forTabletUp`font-size: 36px; margin-bottom:15px;`};
  color: ${Color.pink};
  & > span {
    color: black;
  }
`;

export const Login = () => {
  const history = useHistory();

  const validate = (values) => {
    const errors: any = {};
    if (!values.email) {
      errors.email =
        "Impossible de trouver un compte correspondant à cette adresse e-mail";
    }
    if (!values.password) {
      errors.password = "Votre mot de passe est incorrect";
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
        <div>
          <Text>
            Connexion à mon compte <Logo bigLogo={true} /> <span>.</span>
          </Text>
          <NotAccountTexte href="/register">
            Pas encore de compte ?<span>Crée en un</span>
          </NotAccountTexte>
        </div>

        <Form onSubmit={formik.handleSubmit}>
          <Inputs>
            <Input>
              <input
                type="email"
                placeholder="Mail"
                name="email"
                onChange={formik.handleChange}
              />
              {formik.errors.email ? (
                <Error>{formik.errors.email}</Error>
              ) : null}
            </Input>
            <Input>
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                onChange={formik.handleChange}
              />
              {formik.errors.password ? (
                <Error>{formik.errors.password}</Error>
              ) : null}
            </Input>
            <Button type="submit" fill={false}>
              Me connecter
            </Button>
          </Inputs>
          <img src={Roquet} alt="" />
        </Form>
      </LoginWrap>
    </Layout>
  );
};
