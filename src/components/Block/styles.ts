import styled from "styled-components";
import { ECO_BONE, ECO_GREEN_DARK } from "../../styles/theme";

export const Content = styled("p")`
  margin-top: 1.5rem;
  color: ${ECO_GREEN_DARK};
`;

export const Container = styled("div")`
  position: relative;
  max-width: 700px;
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 400px;
  background: ${ECO_BONE};
  padding: 2rem;
`;
