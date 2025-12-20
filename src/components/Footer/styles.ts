import styled from "styled-components";
import {
  ECO_GREEN_DARK,
  ECO_GREEN,
  ECO_BONE_LIGHT,
  ECO_BONE,
} from "../../styles/theme";

export const FooterSection = styled("footer")`
  background: ${ECO_BONE_LIGHT};
  padding: 3rem 0 2rem;
`;

export const Brand = styled("div")`
  max-width: 320px;
`;

export const BrandName = styled("h4")`
  font-size: 24px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${ECO_GREEN_DARK};
  margin-bottom: 0.75rem;
`;

export const Tagline = styled("p")`
  font-size: 14px;
  line-height: 1.6;
  color: ${ECO_GREEN};
  margin: 0;
`;

export const InfoGroup = styled("div")`
  margin-bottom: 1.25rem;
`;

export const InfoLabel = styled("div")`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${ECO_GREEN};
  margin-bottom: 0.25rem;
`;

export const InfoText = styled("div")`
  font-size: 14px;
  color: ${ECO_GREEN_DARK};

  a {
    color: ${ECO_GREEN_DARK};
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      color: ${ECO_GREEN};
    }
  }
`;

export const Divider = styled("div")`
  margin: 2rem 0 1.5rem;
  height: 1px;
  background: ${ECO_BONE};
`;
