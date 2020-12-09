import React from "react";
import styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { Layout } from "infoquiz/styles/layout";
import { Logo } from "infoquiz/styles/atoms/logo";
import { Label } from "infoquiz/styles/atoms/label";
import { Button } from "infoquiz/styles/atoms/button";

import { CreateAccount } from "./services";

const SignUpWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0 10px 0;
  padding: 15px;
  ${rh.forTabletUp`
  flex-direction: row;
  margin: 60px 0 30px 0;
`};
`;

export const Register = () => {
  const history = useHistory();

  const validate = (values) => {
    const errors: any = {};
    if (!values.username) {
      errors.username = "Reequired";
    } else if (values.username.length > 10) {
      errors.username = "Must be 10 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.datebirth) {
      errors.datebirth = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password !== values.confirmpassword) {
      errors.password = "les mots de passent ne correspondent pas";
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = "Required";
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
        <Logo />
        <LabelWrap>
          <div>
            <Label>
              <label>Ton prénom :</label>
              <input
                type="text"
                placeholder="Ton prénom"
                name="username"
                onChange={formik.handleChange}
              />
              {formik.errors.username ? (
                <div>{formik.errors.username}</div>
              ) : null}
            </Label>
            <Label>
              <label>Ton mail :</label>
              <input
                type="text"
                placeholder="exemple@blabla.com"
                name="email"
                onChange={formik.handleChange}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </Label>
            <Label>
              <label>Ta date de naissance :</label>
              <input
                type="date"
                name="datebirth"
                onChange={formik.handleChange}
              />
              {formik.errors.datebirth ? (
                <div>{formik.errors.datebirth}</div>
              ) : null}
            </Label>
          </div>
          <div>
            <Label>
              <label>Ton mot de passe :</label>
              <input
                type="text"
                placeholder="Mot de passe"
                name="password"
                onChange={formik.handleChange}
              />
              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </Label>
            <Label>
              <label>Confirme ton mot de passe :</label>
              <input
                type="text"
                placeholder="Mot de passe"
                name="confirmpassword"
                onChange={formik.handleChange}
              />
              {formik.errors.confirmpassword ? (
                <div>{formik.errors.confirmpassword}</div>
              ) : null}
            </Label>
          </div>
        </LabelWrap>
        <Button type="submit">Créer mon compte</Button>
      </SignUpWrap>
    </Layout>
  );
};
