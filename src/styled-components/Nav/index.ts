import styled from "styled-components";

type CustomProps = {
  darkMode: boolean;
};

export const Nav = styled.nav`
  background: ${({ darkMode }: CustomProps) => (darkMode ? "black" : "white")};
  color: ${({ darkMode }: CustomProps) => (darkMode ? "white" : "black")};
`;
