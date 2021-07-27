import styled from "@emotion/styled";
import React from "react";

const FooterContainer = styled("footer")``;

const FooterPresenter = styled("div")`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 544px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 940px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Attribution = styled("span")`
  vertical-align: middle;
  margin-left: 10px;
  font-size: 0.8rem;
  color: #bbb;
  font-weight: 300;
`;

const Link = styled("a")``;

const Footer = () => {
  <FooterContainer>
    <FooterPresenter>
      <Logo href="/">새에덴</Logo>
      <Attribution>
        신도들을 위한 새에덴 교회의{" "}
        <Link href="http://saeeden.kr/main/sub.html?pageCode=42"></Link>. Code
        &amp; design licensed under SAEEDEN.
      </Attribution>
    </FooterPresenter>
  </FooterContainer>;
};

export default Footer;
