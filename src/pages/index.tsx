import { FC, useEffect, useState } from "react";
// import Logo from "app/components/atoms/logo";
import { ScrollIndicator } from "app/components/atoms/scrollIndicator";
import { IntroTitle } from "app/components/atoms";
import { ScreenWrap } from "app/components/atoms";

const HomePage: FC = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => setDisplay(true), 3000);
  });
  return (
    <>
      {/* <Logo /> */}
      <ScreenWrap>
        <IntroTitle>
          Welcome To <span>HyFyn</span>
        </IntroTitle>
        <ScrollIndicator className={display ? "display" : ""} />
      </ScreenWrap>

      <section>
        <header>
          <h1>Hello</h1>
        </header>
      </section>
    </>
  );
};

export default HomePage;
