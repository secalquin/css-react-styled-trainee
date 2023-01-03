import React, { useContext } from "react";
import { Container } from "../../styled-components/Container";
import MainContext from "../../contexts/mainContext";
import { Nav } from "../../styled-components/Nav";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const Layout = ({ children }: Props) => {
  const { darkMode, handleColorMode } = useContext(MainContext);
  return (
    <>
      <Container darkMode={darkMode}>
        <Nav darkMode={darkMode}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <button onClick={handleColorMode}>
                {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
              </button>
            </li>
          </ul>
        </Nav>
        {children}
      </Container>
    </>
  );
};

export default Layout;
