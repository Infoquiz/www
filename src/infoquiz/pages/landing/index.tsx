import React, { useEffect } from "react";

import { Layout } from "infoquiz/styles/layout";
import { QuestionBanner } from "infoquiz/pages/landing/questions-banner";
import { Banner } from "infoquiz/pages/landing/banner";
import { Recomendation } from "infoquiz/pages/landing/recomendation";

export const Landing = () => {
  useEffect(() => {
    console.log(localStorage.getItem("token"));
  }, []);

  return (
    <Layout headerUserNotLogged footerWaveBlue>
      <Banner />
      <QuestionBanner />
      <Recomendation />
    </Layout>
  );
};
