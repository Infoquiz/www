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

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      datebirth: "",
      password: "",
    },
    onSubmit: (values) => {
      CreateAccount(values).then(
        (d) => console.log("s", d),
        () => console.log("error")
      );
      history.push("/");
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
                type="name"
                placeholder="Ton prénom"
                name="username"
                onChange={formik.handleChange}
              />
            </Label>
            <Label>
              <label>Ton mail :</label>
              <input
                type="email"
                placeholder="exemple@blabla.com"
                name="email"
                onChange={formik.handleChange}
              />
            </Label>
            <Label>
              <label>Ta date de naissance :</label>
              <input
                type="date"
                name="datebirth"
                onChange={formik.handleChange}
              />
            </Label>
          </div>
          <div>
            <Label>
              <label>Ton mot de passe :</label>
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                onChange={formik.handleChange}
              />
            </Label>
            <Label>
              <label>Confirme ton mot de passe :</label>
              <input
                type="password"
                placeholder="Mot de passe"
                name="confirmpassword"
                onChange={formik.handleChange}
              />
            </Label>
          </div>
        </LabelWrap>
        <Button type="submit">Créer mon compte</Button>
      </SignUpWrap>
    </Layout>
  );
};
