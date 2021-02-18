import React from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";

import { Logo } from "infoquiz/styles/atoms/logo";

import arrowBackHomeImage from "infoquiz/assets/pictos/arrow-left.svg";

const WrapHeader = Styled.div`
  padding: 20px 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  ${rh.forTabletUp`padding: 40px 40px 0 40px;`}
`;

const ButtonConnect = Styled.a`
${rh.forTabletUp`font-size: 18px;`}
font-weight:600;
text-decoration: none;
margin-left: 15px;
font-size: 14px;
color: ${Color.pink};
padding: 6px 10px;
border-radius: 6px;  
`;

const ButtonCreateAccount = Styled.a`
font-weight:600;
text-decoration: none;
margin-left: 15px;
font-size: 14px;
color: ${Color.lightGrey};
background-color: ${Color.pink};
padding: 5px 20px;
border-radius: 6px;  
display: none;
${rh.forTabletUp`font-size: 18px;`}
${rh.forMobileUp`display: inline;`}
`;

const ButtonDisconnect = Styled.a`
  color: red;
  font-size: 18px;
`;

const ArrowBackHome = Styled.img` width: 30px;
margin: 5px;
${rh.forTabletUp`margin: 20px;`}`;

const Level = Styled.p`
font-weight:800;
font-size:18px; 
text-decoration:underline ${Color.pink};
text-decoration-thickness:5px;
${rh.forMobileUp`font-size:24px; `}
${rh.forTabletUp`font-size:30px; `}`;

const HeaderUserNotLogged = () => (
  <WrapHeader>
    <Logo />
    <div>
      <ButtonConnect href="/login">Se connecter</ButtonConnect>
      <ButtonCreateAccount href="/register">
        Créer un compte
      </ButtonCreateAccount>
    </div>
  </WrapHeader>
);

const HeaderUserLogged = () => (
  <WrapHeader>
    <Logo />
    <ButtonDisconnect href="/">Se deconnecter</ButtonDisconnect>
  </WrapHeader>
);

const HeaderArrowBackHome = () => (
  <WrapHeader>
    <a href="/">
      <ArrowBackHome src={arrowBackHomeImage} alt="flèche" />
    </a>
  </WrapHeader>
);

const HeaderLevel = ({ level }) => (
  <WrapHeader>
    <a href="/">
      <ArrowBackHome src={arrowBackHomeImage} alt="flèche" />
    </a>
    <Level>{level}</Level>
  </WrapHeader>
);

export const Header = ({
  headerUserNotLogged,
  headerUserLogged,
  headerArrowBackHome,
  headerLevel,
  level,
}: {
  headerUserNotLogged: boolean;
  headerUserLogged: boolean;
  headerArrowBackHome: boolean;
  headerLevel: boolean;
  level: string;
}): JSX.Element => {
  const handleHeader = (level) => {
    if (headerUserNotLogged) {
      return <HeaderUserNotLogged />;
    } else if (headerArrowBackHome) {
      return <HeaderArrowBackHome />;
    } else if (headerUserLogged) {
      return <HeaderUserLogged />;
    } else if (headerLevel) {
      return <HeaderLevel level={level} />;
    }
  };

  return <div>{handleHeader(level)}</div>;
};
