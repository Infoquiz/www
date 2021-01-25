import React from "react";
import Styled from "styled-components";
import { Color } from "infoquiz/styles/consts";

import { Footer } from "infoquiz/styles/atoms/footer";
import { Header } from "infoquiz/styles/atoms/header";

const WrapLayout = Styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:${Color.lightGrey};
  font-family: "Poppins";
`;

export const Layout = ({
  children,
  headerUserNotLogged = false,
  headerUserLogged = false,
  headerArrowBackHome = false,
  headerLevel = false,
  footerWaveBlue = false,
  footerWavePinkLower = false,
  footerWavePinkHigh = false,
  footerWavePinkZigzag = false,
  level = "",
}: {
  children: any;
  headerUserNotLogged?: boolean;
  headerUserLogged?: boolean;
  headerArrowBackHome?: boolean;
  headerLevel?: boolean;
  footerWaveBlue?: boolean;
  footerWavePinkLower?: boolean;
  footerWavePinkHigh?: boolean;
  footerWavePinkZigzag?: boolean;
  level?: string;
}) => (
  <WrapLayout>
    <Header
      headerUserNotLogged={headerUserNotLogged}
      headerUserLogged={headerUserLogged}
      headerArrowBackHome={headerArrowBackHome}
      headerLevel={headerLevel}
      level={level}
    />
    {children}
    <Footer
      footerWaveBlue={footerWaveBlue}
      footerWavePinkLower={footerWavePinkLower}
      footerWavePinkHigh={footerWavePinkHigh}
      footerWavePinkZigzag={footerWavePinkZigzag}
    />
  </WrapLayout>
);
