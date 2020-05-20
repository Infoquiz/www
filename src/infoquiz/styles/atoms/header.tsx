import React from "react";
import { Logo } from "infoquiz/styles/atoms/logo";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";
import arrowBackHomeImage from "infoquiz/assets/img/arrow-left.svg";

const WrapHeader = Styled.div`
${rh.forPortraitTabletUp`padding: 40px 40px 0 40px;`}
  padding: 20px 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  font-family:"Poppins";
`;

const ButtonConnect = Styled.a`
${rh.forPortraitTabletUp`font-size: 18px;`}
font-family: "Poppins";
font-weight:600;
text-decoration: none;
margin-left: 15px;
font-size: 14px;
color: ${Color.turquoise};
border: 1.5px solid ${Color.turquoise};
padding: 6px 10px;
border-radius: 10px;`;

const ButtonCreateAccount = Styled.a`
${rh.forPortraitTabletUp`font-size: 18px;`}
font-family: "Poppins";
font-weight:600;
text-decoration: none;
margin-left: 15px;
font-size: 14px;
color: ${Color.turquoise};
border: 1.5px solid ${Color.turquoise};
padding: 6px 10px;
border-radius: 10px;  
display: none;
${rh.forMobileUp`display: inline;`}
`;

const ButtonDisconnect = Styled.a`
color: red;
    font-size: 18px;
`;
const ArrowBackHome = Styled.img` width: 30px;
margin: 20px;`;

const HeaderUserNotLogged = () => (
  <WrapHeader>
    <Logo />
    <div>
      <ButtonConnect href="/signIn">Se connecter</ButtonConnect>
      <ButtonCreateAccount href="/">Créer un compte</ButtonCreateAccount>
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

export const Header = ({
  headerUserNotLogged,
  headerUserLogged,
  headerArrowBackHome,
}: {
  headerUserNotLogged: boolean;
  headerUserLogged: boolean;
  headerArrowBackHome: boolean;
}) => {
  const handleHeader = () => {
    if (headerUserNotLogged) {
      return <HeaderUserNotLogged />;
    } else if (headerArrowBackHome) {
      return <HeaderArrowBackHome />;
    } else if (headerUserLogged) {
      return <HeaderUserLogged />;
    }
  };

  return <div>{handleHeader()}</div>;
};
