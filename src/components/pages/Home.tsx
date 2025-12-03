import { styled } from "goober";
import { Hero } from "../core/Hero";
import { Page } from "../core/Page";

export const Home = () => {
  return (
    <Page>
      <Content>
        <Hero />
      </Content>
    </Page>
  );
};

const Content = styled("div")`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
`;
