import React from "react";

import { APP_NAME } from "../../lib/utils/constant";

const Banner = () => {
  <div classname="banner">
    <div classname="container">
      <h1 classname="logo-font">{APP_NAME.toLowerCase()}</h1>
      <p>새에덴 교회</p>
    </div>
  </div>;
};

export default Banner;
