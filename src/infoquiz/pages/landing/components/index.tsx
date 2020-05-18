import React from "react";
import Styled from "styled-components";
import {responsiveHelpers as rh} from "../../../styles/utils";

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


  &__image {
    
  }
  &__title {
    ${rh.forportraitTabletUp``} {
      font-size: 18px;
    }
    @include large {
      font-size: 22px;
    }
    margin-top: 20px;
    font-family: "Poppins-SemiBold";
  }
  &__texte {
    text-align: left;
    line-height: 18px;
    font-size: 12px;
    margin: 10px 0;
    ${rh.forportraitTabletUp``} {
      line-height: 21px;
      font-size: 14px;
      margin: 15px 0;
    }
    @include large {
      line-height: 30px;
      font-size: 20px;
      margin: 20px 0;
    }
  }
  &__textes {
    ${rh.forportraitTabletUp``} {
      width: 450px;
    }
    width: 300px;
  }`
  const WelcomeImage = Styled.div`
  & > img {
    width: 200px;
      ${rh.forportraitTabletUp``} {
        width: 320px;
        margin-left: 20px;
      }
      @include large {
        width: 400px;
        margin-left: 30px;
      }
      
    }
  `
const Landing = () => {
  return (
    <WrapLanding>
     
  
      <div class="landing__welcom">
        <div class="landing__welcom__textes">
          <p class="landing__welcom__title">C’est l’heure de faire
            un infoquiz !</p>
          <p class="landing__welcom__texte">Infoquiz c’est un jeu pour t’apprendre pleins de notions sur le thême
            de l’informatique tout en t’amusant !</p>
        </div>
        <WelcomeImage>
          <img src="./assets/img/illustrationGo-landing.png" alt="ordinateur">
        </WelcomeImage>
      </div>
  
      {/* <div class="landing__emoji">
        <div>
          <img src="./assets/img/brain-landingIcon.png" alt="cerveau">
          <p>Apprends et dépasse toi !</p>
        </div>
        <div>
          <img src="./assets/img/emoji-landingIcon.png" alt="emoji">
          <p>Amuse toi !</p>
        </div>
        <div>
          <img src="./assets/img/friends-landingIcon.png" alt="amis">
          <p>Défis tes amis !</p>
        </div>
      </div>
  
      <a href="index.php?url=choice" class="button button-md">C'est
        parti !</a>
  
      <div class="wave">
        <img src="./assets/img/wave-landing.svg" alt="">
      </div> */}
      </WrapLanding>
  );
};
