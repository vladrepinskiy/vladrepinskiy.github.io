import { styled } from "goober";

export const CV = () => {
    return (
        <Page>
            <Title>CV</Title>
            <Content>
                <p>Your CV content will go here.</p>
            </Content>
        </Page>
    );
};

const Page = styled("div")`
  min-height: 100vh;
  padding: 4rem clamp(1.5rem, 4vw, 6rem);
  background: radial-gradient(circle at top, #1d1d1d 0%, #050505 100%);
  color: #f5f5f5;
`;

const Title = styled("h1")`
  font-size: clamp(2.5rem, 4vw, 4rem);
  margin-bottom: 1rem;
`;

const Content = styled("div")`
  font-size: 1.2rem;
  max-width: 42ch;
  line-height: 1.6;
  color: rgba(245, 245, 245, 0.85);
`;

