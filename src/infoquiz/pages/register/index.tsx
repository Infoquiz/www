import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { Color } from "infoquiz/styles/consts";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Layout } from "infoquiz/styles/layout";
import { Logo, Input, Button, Error } from "infoquiz/styles/atoms";
import Roquet from "infoquiz/assets/illustrations/roquet.svg";

import { CreateAccount } from "./services";

const RegisterContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const RegisterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > img {
    display: none;
    transform: rotate(-30deg);
    ${rh.forTabletUp`
    display:block;
    width: 208px;
    `};
  }

  ${rh.forTabletUp`
  & > img {
    width: 208px;
  }`};
`;

const Form = styled.form`
  justify-content: space-between;
  padding: 15px 0;
  width: 100%;
  ${rh.forTabletUp`
    width: 366px;
 `};
`;

const Text = styled.p`
  font-weight: 800;
  font-size: 22px;
  margin-bottom: 10px;
  color: ${Color.pink};
  & > span {
    color: black;
  }
  ${rh.forTabletUp`font-size: 36px; margin-bottom:15px;`};
`;

const NotAccountTexte = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: ${Color.grey};
  & > span {
    text-decoration: underline 2px;
    font-weight: 600;
    color: ${Color.pink};
    margin-left: 5px;
  }
  ${rh.forTabletUp`font-size: 14px;`};
`;

export const Register = () => {
  const history = useHistory();

  const validate = (values) => {
    const errors: any = {};
    if (!values.username) {
      errors.username = "Votre pseudo est manquant";
    } else if (values.username.length > 5) {
      errors.username = "Votre pseudo doit contenir 5 caractère au minimum";
    }

    if (!values.email) {
      errors.email = "Votre email est manquant";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Votre email a un format non valide";
    }
    if (!values.datebirth) {
      errors.datebirth = "Votre date de naissance est manquant";
    }
    if (!values.password) {
      errors.password = "Votre mot de passe est manquant";
    } else if (values.password !== values.confirmpassword) {
      errors.password = "les mots de passent ne correspondent pas";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword =
        "Votre mot de passe de confirmation est manquant";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      datebirth: "",
      password: "",
      confirmpassword: "",
    },
    validate,
    onSubmit: (values) => {
      CreateAccount(values).then(
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
      <RegisterContainer>
        <div>
          <Text>
            Crée ton compte
            <Logo bigLogo={true} />
            <span>.</span>
          </Text>
          <NotAccountTexte href="/login">
            Tu as déjà un compte ? <span>Connecte-toi</span>
          </NotAccountTexte>
        </div>
        <RegisterWrapper>
          <Form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              placeholder="Ton prénom"
              name="username"
              onChange={formik.handleChange}
            />
            {formik.errors.username && <Error>{formik.errors.username}</Error>}
            <Input
              type="email"
              placeholder="exemple@blabla.com"
              name="email"
              onChange={formik.handleChange}
            />
            {formik.errors.email && <div>{formik.errors.email}</div>}
            <Input
              type="date"
              name="datebirth"
              onChange={formik.handleChange}
            />
            {formik.errors.datebirth && (
              <Error>{formik.errors.datebirth}</Error>
            )}

            <Input
              type="password"
              placeholder="Mot de passe"
              name="password"
              onChange={formik.handleChange}
            />
            {formik.errors.password && <Error>{formik.errors.password}</Error>}
            <Input
              type="password"
              placeholder="Mot de passe"
              name="confirmpassword"
              onChange={formik.handleChange}
            />
            {formik.errors.confirmpassword && (
              <Error>{formik.errors.confirmpassword}</Error>
            )}
            <Button type="submit">Créer mon compte</Button>
          </Form>
          <img src={Roquet} alt="fusée" />
        </RegisterWrapper>
      </RegisterContainer>
    </Layout>
  );
};
