import { Link, useLocation } from "wouter";
import { NavThemeToggle } from "@/components/nav/NavThemeToggle";
import { styled } from "goober";

export const Nav = () => {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <Sidebar>
      <NavLinks>
        <NavLink to="/" $active={isActive("/")}>
          Home
        </NavLink>
        <NavLink to="/cv" $active={isActive("/cv")}>
          CV
        </NavLink>
        <NavLink to="/lab" $active={isActive("/lab")}>
          Lab
        </NavLink>
        <NavLink to="/contact" $active={isActive("/contact")}>
          Contact
        </NavLink>
        <NavLink to="/about" $active={isActive("/about")}>
          About
        </NavLink>
      </NavLinks>
      <ThemeToggleWrapper>
        <NavThemeToggle />
      </ThemeToggleWrapper>
    </Sidebar>
  );
};

const Sidebar = styled("nav")`
  width: 260px;
  height: 100vh;
  padding: 5rem 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.palette.bg};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled("div")`
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${(props) =>
    props.$active ? props.theme.palette.text : props.theme.palette.textMuted};
  padding: 0.1rem 0;
  text-decoration: none;
  transform: ${(props) =>
    props.$active ? "translateX(10px)" : "translateX(0)"};
  transition:
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateX(10px);
    color: ${(props) => props.theme.palette.text};
  }
`;

const ThemeToggleWrapper = styled("div")`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;
