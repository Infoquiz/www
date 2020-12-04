import React, { useEffect } from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";

import { Button } from "infoquiz/styles/atoms/button";
import { Layout } from "infoquiz/styles/layout";

import computer from "infoquiz/assets/img/illustrationGo-landing.png";
import brain from "infoquiz/assets/img/brain-landingIcon.png";
import emoji from "infoquiz/assets/img/emoji-landingIcon.png";
import friends from "infoquiz/assets/img/friends-landingIcon.png";

const LandingWelcome = Styled.div`
  text-align: left;
  margin-top: 20px;
${rh.forMobileUp`
    margin: 50px 20px;
    display: flex;
    align-items: center;`} 
`;

const WelcomeImage = Styled.div`
  & > img {
    width: 200px;
      ${rh.forTabletUp`
        width: 320px;
        margin-left: 20px;`} 
      ${rh.forLittleDesktopUp`   
        width: 400px;
        margin-left: 30px;`} 
    }
`;

const WelcomeTextes = Styled.div`
    width: 300px;
    ${rh.forTabletUp` 
    width: 450px;`}  
`;

const WelcomeTitle = Styled.div`
  margin-top: 20px;
  font-weight:600;
${rh.forTabletUp`font-size: 18px;`} 
${rh.forLittleDesktopUp`font-size: 22px;`} 
`;

const WelcomeTexte = Styled.div`
  text-align: left;
  line-height: 18px;
  font-size: 12px;
  margin: 10px 0;
    ${rh.forTabletUp` line-height: 21px;
      font-size: 14px;
      margin: 15px 0;`} 
    ${rh.forLittleDesktopUp` line-height: 30px;
      font-size: 20px;
      margin: 20px 0;`} 
`;

const LandingEmoji = Styled.div`
   padding: 0 30px;
   display: flex;
   justify-content: space-between;
   width: 100%;
  ${rh.forTabletUp`  padding: 40px 70px 0 70px;`}  
   }
   ${rh.forLittleDesktopUp`
     padding: 40px 250px 0 250px;`}

   & > div {
     margin: 10px;
     width: 70px;
     ${rh.forMobileUp`width: 90px;`};
    ${rh.forTabletUp`width: 110px;`} ;
    ${rh.forLittleDesktopUp`width: 130px;`};
     &>img{ ${rh.forMobileUp`width: 90px;`};
    ${rh.forTabletUp`width: 110px;`} ;
    ${rh.forLittleDesktopUp`width: 130px;`};}
   
     & > p {
      margin-top: 5px;
       text-align: center;
       font-weight:300;
       font-size: 12px;
  ${rh.forTabletUp`font-size: 18px;
`} }

   }`;

export const Landing = () => {
  useEffect(() => {
    console.log(localStorage.getItem("token"));
  }, []);

  return (
    <Layout headerUserNotLogged footerWaveBlue>
      <LandingWelcome>
        <WelcomeTextes>
          <WelcomeTitle>C’est l’heure de faire un infoquiz !</WelcomeTitle>
          <WelcomeTexte>
            Infoquiz c’est un jeu pour t’apprendre pleins de notions sur le
            thême de l’informatique tout en t’amusant !
          </WelcomeTexte>
        </WelcomeTextes>
        <WelcomeImage>
          <img src={computer} alt="ordinateur" />
        </WelcomeImage>
      </LandingWelcome>

      <LandingEmoji>
        <div>
          <img src={brain} alt="cerveau" />
          <p>Apprends et dépasse toi !</p>
        </div>
        <div>
          <img src={emoji} alt="emoji" />
          <p>Amuse toi !</p>
        </div>
        <div>
          <img src={friends} alt="amis" />
          <p>Défis tes amis !</p>
        </div>
      </LandingEmoji>

      <Button>
        <a href="/levelchoice">C'est parti !</a>
      </Button>
    </Layout>
  );
};
