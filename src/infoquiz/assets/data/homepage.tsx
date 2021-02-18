import sadGirl from "infoquiz/assets/illustrations/sad-girl-phone.svg";
import helloGirl from "infoquiz/assets/illustrations/hello-girl.svg";
import septiqueGirl from "infoquiz/assets/illustrations/septique-girl.svg";
import smartphone from "infoquiz/assets/illustrations/smartphone.svg";
import learning from "infoquiz/assets/illustrations/learning.svg";
import timing from "infoquiz/assets/illustrations/timing.svg";
import girlYellow from "infoquiz/assets/illustrations/girl-yellow.svg";
import boyYellow from "infoquiz/assets/illustrations/boy-yellow.svg";
import oldYellow from "infoquiz/assets/illustrations/old-yellow.svg";
import moneyYellow from "infoquiz/assets/illustrations/money-red.svg";
import cardYellow from "infoquiz/assets/illustrations/card-red.svg";
import giftYellow from "infoquiz/assets/illustrations/gift-red.svg";

export const questions = [
  {
    image: sadGirl,
    question: "Infoquiz c’est quoi ?",
    response:
      "Infoquiz est un jeu pour t’apprendre pleins de notions sur le theme de l’informatique tout en t’amusant !",
    reponses: [
      {
        image: smartphone,
        text: "Disponible depuis ton smartphone !",
      },
      {
        image: learning,
        text: "Défis tes amis sur leurs connaisances.",
      },
      {
        image: timing,
        text: "Appprends baucoup sur un thème d’avenir.",
      },
    ],
  },
  {
    image: helloGirl,
    question: "Infoquiz c’est pour qui ?",
    response:
      "Infoquiz est fait pour tout les âges, car l’apprentissage n’a pas d’âge. ",
    reponses: [
      {
        image: girlYellow,
        text: "Pour les plus petits en apprentissage permanant.",
      },
      {
        image: boyYellow,
        text: "Les adultes en quete de savoirs.",
      },
      {
        image: oldYellow,
        text: "Aux personnes agés qui veulent être à la page !",
      },
    ],
  },
  {
    image: septiqueGirl,
    question: "Infoquiz c’est gratuit ou payant ?",
    response:
      "Infoquiz existe en version gratuite et en version premium pour seulement 9,99 euros par mois.",
    reponses: [
      {
        image: moneyYellow,
        text: "Une superbe version gratuite !",
      },
      {
        image: giftYellow,
        text: "Infoquiz premium est un superbe cadeau à offrir !",
      },
      {
        image: cardYellow,
        text: "Un paiement sécurisé. ",
      },
    ],
  },
];
