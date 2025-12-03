import { WORK_EXPERIENCE, EDUCATION } from "@/constants/cv.constant";
import { styled } from "goober";
import { Title } from "../core/Typography";
import { CVEntryList } from "../cv/CVEntryList";
import { Page } from "../core/Page";

export const CV = () => {
  return (
    <Page>
      <Section id="work-experience">
        <TitleWrapper>
          <Title>Work</Title>
        </TitleWrapper>
        <CVEntryList entries={WORK_EXPERIENCE} />
      </Section>

      <Section id="education">
        <TitleWrapper>
          <Title>Education</Title>
        </TitleWrapper>
        <CVEntryList entries={EDUCATION} />
      </Section>
    </Page>
  );
};

const Section = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  scroll-margin-top: 15vh;
`;

const TitleWrapper = styled("div")`
  width: 100%;
  max-width: 600px;
  text-align: left;
  margin-bottom: 2rem;
`;
