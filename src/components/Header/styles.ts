import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import {
  ECO_GREEN_DARK,
  ECO_GREEN,
  ECO_BONE_LIGHT,
} from "../../styles/theme";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;
  background: ${ECO_BONE_LIGHT};

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.25rem 0;                 /* minimal padding, no pill */
  text-decoration: none;
  background: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  transition: transform 0.15s ease-out, color 0.15s ease-out;

  &:hover,
  &:focus {
    transform: translateY(-1px);      /* subtle button-like feedback */
  }

  &:active {
    transform: translateY(0);         /* pressed state */
  }
`;

export const LogoText = styled("span")`
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: ${ECO_GREEN_DARK};
  text-transform: uppercase;
`;




export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: ${ECO_GREEN_DARK};
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: ${ECO_GREEN_DARK};
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: ${ECO_GREEN_DARK};
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: ${ECO_GREEN};
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
  color: ${ECO_GREEN_DARK};
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${ECO_GREEN_DARK};

  &:hover,
  &:active,
  &:focus {
    color: ${ECO_GREEN};
    text-underline-position: under;
    text-decoration: ${ECO_GREEN} wavy underline;
  }
`;
