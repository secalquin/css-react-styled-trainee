import styled from "styled-components";

type CustomProps = {
  darkMode: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ darkMode }: CustomProps) => (darkMode ? "black" : "white")};
  color: ${({ darkMode }: CustomProps) => (darkMode ? "white" : "black")};
`;
