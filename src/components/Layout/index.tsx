import React, { useContext } from "react";
import { Container } from "../../styled-components/Container";
import MainContext from "../../contexts/mainContext";
import { Nav, NavItem, NavLinkA, NavList } from "../../styled-components/Nav";
import { DarkModeButton } from "../../styled-components/Button/darkMode";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const Layout = ({ children }: Props) => {
  const { darkMode, handleColorMode } = useContext(MainContext);
  return (
    <>
      <Container darkMode={darkMode}>
        <Nav darkMode={darkMode}>
          <div style={{ marginLeft: "25px" }}>
            <img
              src="https://www.pepsi.com/en-us/assets/images/logo.44fea4ca40e8a8843bb0fdf07d618439.png"
              alt="logo"
            />
          </div>
          <NavList>
            <NavItem></NavItem>
            <NavItem>
              <NavLinkA href="/about">Home</NavLinkA>
            </NavItem>
            <NavItem>
              <NavLinkA href="/about">About Me</NavLinkA>
            </NavItem>
            <NavItem>
              <NavLinkA href="/contact">Contact</NavLinkA>
            </NavItem>
            <NavItem>
              <DarkModeButton onClick={handleColorMode} darkMode={darkMode}>
                {darkMode ? (
                  <i style={{ color: "white" }} className="fa-solid fa-sun"></i>
                ) : (
                  <i
                    style={{ backgroundColor: "inherit" }}
                    className="fa-solid fa-moon"
                  ></i>
                )}
              </DarkModeButton>
            </NavItem>
          </NavList>
        </Nav>
        {children}
      </Container>
    </>
  );
};

export default Layout;
