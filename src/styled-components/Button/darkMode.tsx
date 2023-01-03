import styled from "styled-components";

type Props = {
  darkMode: boolean;
};

export const DarkModeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  color: ${({ darkMode }: Props) => (darkMode ? "white" : "black")};
`;
