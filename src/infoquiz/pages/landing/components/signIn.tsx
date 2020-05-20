import React from "react";
import styled from "styled-components";

import { Layout } from "infoquiz/styles/layout";
import { Button } from "infoquiz/styles/atoms/button";

const Form = styled.form`
  & > a {
    @include medium {
      font-size: 12px;
    }
    font-size: 10px;
    color: black;
    text-decoration: none;
    text-decoration: underline;
  }
  display: flex;
  flex-direction: column;
  &__center {
    @include medium {
      display: flex;
    }
  }
  &__right {
    @include medium {
      padding-left: 80px;
    }
  }
  margin-bottom: 15px;
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
    @include medium {
      font-size: 18px;
    }
    font-size: 14px;
  }
`;

export const SignIn = () => {
  return (
    <Layout headerArrowBackHome>
      <Form>
        <div>
          <p>
            infoqui<span>z</span>
          </p>
        </div>
        <LabelItems>
          <label htmlFor="email">Ton mail :</label>
          <input type="email" placeholder="Mail" name="email" />
        </LabelItems>
        <LabelItems>
          <label htmlFor="password">Ton mot de passe :</label>
          <input type="password" placeholder="Mot de passe" name="password" />
        </LabelItems>
        <a href="">Pas encore de compte ?</a>
        <Button>Se connecter</Button>
      </Form>
    </Layout>
  );
};
