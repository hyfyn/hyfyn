import { FC, useEffect, useState } from "react";
import Logo from "app/components/atoms/logo";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
const grow = keyframes`
  from {
    transform: scale(0)
  }
  50% {
    transform: scale(0.5));
  }

  100% {
    transform: scale(1)
  }
`;

const slide = keyframes`
  from {
    height: 0;
    transform: translate3d(0, 50px, 0)
  }
  to {
    height: 100%;
    transform: translate3d(0, 0px, 0)
  }
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0)
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

const ScreeWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Intro = styled.h1(
  ({ theme }) => css`
    position: absolute;
    font-size: 8rem;
    animation: ${grow} 1s ease;
    background: repeating-linear-gradient(
      to right,
      ${theme.color.white},
      ${theme.color.black}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    span {
      position: absolute;
      bottom: -75px;
      left: 19px;
      animation: ${slide} 3s ease;
      color: ${theme.color.gold};
      background: repeating-linear-gradient(
        to right,
        ${theme.color.gold},
        ${theme.color.gold},
        ${theme.color.black}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `
);
const ScrollIcon = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 50%;
    bottom: 10%;
    text-align: center;
    margin-bottom: 6px;
    height: 5px;
    width: 20px;
    animation: ${bounce} 3s ease infinite;
    opacity: 0;
    transition: opacity 1s ease;
    &.display {
      opacity: 0.5;
    }
    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 50%;
      background: ${theme.color.lightGold};
      transform: skew(0deg, 45deg);
    }
    :after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 50%;
      background: ${theme.color.lightGold};
      transform: skew(0deg, -45deg);
    }
  `
);

const HomePage: FC = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => setDisplay(true), 3000);
  });
  return (
    <>
      {/* <Logo /> */}
      <ScreeWrap>
        <Intro>
          Welcome To <span>HyFyn</span>
        </Intro>
        <ScrollIcon className={display ? "display" : ""} />
      </ScreeWrap>

      <section>
        <header>
          <h1>About</h1>
        </header>
      </section>
    </>
  );
};

export default HomePage;
