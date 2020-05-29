import React from "react";
import Styled from "styled-components";
import { Footer } from "infoquiz/styles/atoms/footer";
import { Header } from "infoquiz/styles/atoms/header";
import { Color } from "infoquiz/styles/consts";

const WrapLayout = Styled.div`
 min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color:${Color.lightGrey};
  font-family: "Poppins";

`;

export const Layout = ({
  children,
  headerUserNotLogged = false,
  headerUserLogged = false,
  headerArrowBackHome = false,
  footerWaveBlue = false,
  footerWavePinkLower = false,
}: {
  children: any;
  headerUserNotLogged?: boolean;
  headerUserLogged?: boolean;
  headerArrowBackHome?: boolean;
  footerWaveBlue?: boolean;
  footerWavePinkLower?: boolean;
}) => (
  <WrapLayout>
    <Header
      headerUserNotLogged={headerUserNotLogged}
      headerUserLogged={headerUserLogged}
      headerArrowBackHome={headerArrowBackHome}
    />
    {children}
    <Footer
      footerWaveBlue={footerWaveBlue}
      footerWavePinkLower={footerWavePinkLower}
    />
  </WrapLayout>
);
