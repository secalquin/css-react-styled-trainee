import styled from "styled-components";

type CustomProps = {
  darkMode: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ darkMode }: CustomProps) =>
    darkMode ? "#142d4c" : "#a2a8d3"};
  color: ${({ darkMode }: CustomProps) => (darkMode ? "white" : "black")};
`;
