import styled from "styled-components";

type Props = {
  darkMode: boolean;
};

export const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100%;
  height: 75px;
  text-transform: uppercase;
  padding: 10px;

  background: ${({ darkMode }: Props) => (darkMode ? "#385170" : "#e7eaf6")};
  color: ${({ darkMode }: Props) => (darkMode ? "white" : "black")};

  align-items: center;
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.div`
  padding-left: 20px;
  cursor: pointer;
`;

export const NavLinkA = styled.a`
  text-decoration: none;
  color: inherit;
`;
