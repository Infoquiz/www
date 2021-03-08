import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";
import { Layout } from "infoquiz/styles/layout";
import { Logo, Input, Button, Error } from "infoquiz/styles/atoms";
import Roquet from "infoquiz/assets/illustrations/roquet.svg";

import { LoginService } from "./services";

const LoginContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > img {
    display: none;
  }
  ${rh.forTabletUp`
  & > img {
    display:block;
    width: 208px;
  }`};
`;

const Form = styled.form`
  width: 100%;
  margin-top: 15px;
  justify-content: space-between;
  & > a {
    width: 100%;
  }
  ${rh.forTabletUp`
  width: 366px;
 `};
`;

const NotAccountText = styled.a`
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

const Text = styled.p`
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
        "Impossible de trouver un compte correspondant à cette adresse mail";
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
      <LoginContainer>
        <div>
          <Text>
            Connexion à mon compte <Logo bigLogo={true} /> <span>.</span>
          </Text>
          <NotAccountText href="/register">
            Pas encore de compte ?<span>Crée en un</span>
          </NotAccountText>
        </div>
        <LoginWrapper>
          <Form onSubmit={formik.handleSubmit}>
            <Input>
              <input
                type="email"
                placeholder="Mail"
                name="email"
                onChange={formik.handleChange}
              />
            </Input>
            {formik.errors.email && <Error>{formik.errors.email}</Error>}
            <Input>
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                onChange={formik.handleChange}
              />
            </Input>
            {formik.errors.password && <Error>{formik.errors.password}</Error>}
            <Button type="submit" fill={false}>
              Me connecter
            </Button>
          </Form>
          <img src={Roquet} alt="fusée" />
        </LoginWrapper>
      </LoginContainer>
    </Layout>
  );
};
