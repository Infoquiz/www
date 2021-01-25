import React from "react";
import styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { Layout } from "infoquiz/styles/layout";
import { Logo } from "infoquiz/styles/atoms/logo";
import { Input } from "infoquiz/styles/atoms/input";
import { Button } from "infoquiz/styles/atoms/button";
import { Error } from "infoquiz/styles/atoms/error";

import { CreateAccount } from "./services";

import Roquet from "infoquiz/assets/illustrations/roquet.svg";

const SignUpWrap = styled.form`
  display: flex;
  flex-direction: column;
  & > img {
  }
`;

const LabelWrap = styled.div`
  justify-content: space-between;
  padding: 15px;
  width: 100%;
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
      <SignUpWrap onSubmit={formik.handleSubmit}>
        <div>
          <Text>
            Crée ton compte
            <Logo bigLogo={true} /> <span>.</span>
          </Text>
          <NotAccountTexte href="/login">
            Tu as déjà un compte ?<span>Connecte-toi</span>
          </NotAccountTexte>
        </div>

        <LabelWrap>
          <div>
            <Input>
              <input
                type="text"
                placeholder="Ton prénom"
                name="username"
                onChange={formik.handleChange}
              />
              {formik.errors.username ? (
                <Error>{formik.errors.username}</Error>
              ) : null}
            </Input>
            <Input>
              <input
                type="email"
                placeholder="exemple@blabla.com"
                name="email"
                onChange={formik.handleChange}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </Input>
            <Input>
              <input
                type="date"
                name="datebirth"
                onChange={formik.handleChange}
              />
              {formik.errors.datebirth ? (
                <Error>{formik.errors.datebirth}</Error>
              ) : null}
            </Input>
          </div>
          <div>
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
            <Input>
              <input
                type="password"
                placeholder="Mot de passe"
                name="confirmpassword"
                onChange={formik.handleChange}
              />
              {formik.errors.confirmpassword ? (
                <Error>{formik.errors.confirmpassword}</Error>
              ) : null}
            </Input>
          </div>
          <Button type="submit">Créer mon compte</Button>
        </LabelWrap>
        <img src={Roquet} alt="" />
      </SignUpWrap>
    </Layout>
  );
};
