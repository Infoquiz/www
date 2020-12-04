import React, { useState } from "react";
import styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { useHistory } from "react-router-dom";

import { Layout } from "infoquiz/styles/layout";
import { Logo } from "infoquiz/styles/atoms/logo";
import { Label } from "infoquiz/styles/atoms/label";
import { Button } from "infoquiz/styles/atoms/button";

import { CreateAccount } from "infoquiz/services";

const SignUpWrap = styled.div`
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
  const initial_form_data = {
    username: "",
    email: "",
    datebirth: "",
    password: "",
  };

  const [form_data, updateFormData] = useState(initial_form_data);
  const handleChange = (e) => {
    updateFormData({
      ...form_data,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = () => {
    CreateAccount(form_data);
    history.push("/login");
  };

  return (
    <Layout headerArrowBackHome footerWavePinkLower>
      <SignUpWrap>
        <Logo />
        <LabelWrap>
          <div>
            <Label>
              <label>Ton prénom :</label>
              <input
                type="name"
                placeholder="Ton prénom"
                name="username"
                onChange={handleChange}
              />
            </Label>
            <Label>
              <label>Ton mail :</label>
              <input
                type="email"
                placeholder="exemple@blabla.com"
                name="email"
                onChange={handleChange}
              />
            </Label>
            <Label>
              <label>Ta date de naissance :</label>
              <input type="date" name="datebirth" onChange={handleChange} />
            </Label>
          </div>
          <div>
            <Label>
              <label>Ton mot de passe :</label>
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                onChange={handleChange}
              />
            </Label>
            <Label>
              <label>Confirme ton mot de passe :</label>
              <input
                type="password"
                placeholder="Mot de passe"
                name="confirmpassword"
                onChange={handleChange}
              />
            </Label>
          </div>
        </LabelWrap>
        <Button onClick={handleSubmit}>Créer mon compte</Button>
      </SignUpWrap>
    </Layout>
  );
};