import { styled } from "goober";
import { SidebarThemeToggle } from "./SidebarThemeToggle";

export const SidebarControls = () => {
  return (
    <SidebarControlsContainer>
      <SidebarThemeToggle />
    </SidebarControlsContainer>
  );
};

const SidebarControlsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
