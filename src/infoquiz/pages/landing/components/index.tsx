import React from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Button } from "infoquiz/styles/atoms/button";
import { Footer } from "infoquiz/styles/atoms/footer";

const WrapLanding = Styled.div`

 min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

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
      ${rh.forPortraitTabletUp`width: 320px;
        margin-left: 20px;`} 
      
      ${rh.forLandscapeTabletUp`   width: 400px;
        margin-left: 30px;`} 
    }
  `;

const WelcomeTextes = Styled.div`
  ${rh.forPortraitTabletUp` width: 450px;`}  
    width: 300px;
  `;
const WelcomeTitle = Styled.div`
    margin-top: 20px;
    font-family: "Poppins-SemiBold";
${rh.forPortraitTabletUp`   font-size: 18px;`} 
${rh.forLandscapeTabletUp` font-size: 22px;`} 
   `;

const WelcomeTexte = Styled.div`
 text-align: left;
    line-height: 18px;
    font-size: 12px;
    margin: 10px 0;
    ${rh.forPortraitTabletUp` line-height: 21px;
      font-size: 14px;
      margin: 15px 0;`} 
    ${rh.forLandscapeTabletUp` line-height: 30px;
      font-size: 20px;
      margin: 20px 0;`} 
   `;

const LandingEmoji = Styled.div`
   padding: 0 30px;
   display: flex;
   justify-content: space-between;
   width: 100%;
  ${rh.forPortraitTabletUp`  padding: 40px 70px 0 70px;`} 
    
   }
   ${rh.forLandscapeTabletUp`
     padding: 40px 250px 0 250px;`}

   & > div {
    margin: 10px;
     width: 70px;
    ${rh.forMobileUp`
       width: 90px;`};
  ${rh.forPortraitTabletUp`   width: 110px;`} ;
  
  ${rh.forLandscapeTabletUp`
     width: 130px;`};
 
     & > p {
      margin-top: 5px;
       text-align: center;
       font-family: "Poppins-Light";
       font-size: 12px;
  ${rh.forPortraitTabletUp`font-size: 18px;
`} }

   }`;

export const Landing = () => {
  return (
    <WrapLanding>
      <LandingWelcome>
        <WelcomeTextes>
          <WelcomeTitle>C’est l’heure de faire un infoquiz !</WelcomeTitle>
          <WelcomeTexte>
            Infoquiz c’est un jeu pour t’apprendre pleins de notions sur le
            thême de l’informatique tout en t’amusant !
          </WelcomeTexte>
        </WelcomeTextes>
        <WelcomeImage>
          <img src="./assets/img/illustrationGo-landing.png" alt="ordinateur" />
        </WelcomeImage>
      </LandingWelcome>

      <LandingEmoji>
        <div>
          <img src="./assets/img/brain-landingIcon.png" alt="cerveau" />
          <p>Apprends et dépasse toi !</p>
        </div>
        <div>
          <img src="./assets/img/emoji-landingIcon.png" alt="emoji" />
          <p>Amuse toi !</p>
        </div>
        <div>
          <img src="./assets/img/friends-landingIcon.png" alt="amis" />
          <p>Défis tes amis !</p>
        </div>
      </LandingEmoji>

      <Button>C'est parti !</Button>
      <Footer></Footer>
    </WrapLanding>
  );
};
