import { Row } from "antd";
import styled from "styled-components";

const ecoDark = "#123524"; // phthalo green
const bone = "#f5efe6";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)<{ direction: string }>`
  flex-direction: ${({ direction }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: ${ecoDark};
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

// export const ButtonWrapper = styled("div")`
//   display: flex;
//   justify-content: space-between;
//   max-width: 100%;

//   @media screen and (min-width: 1024px) {
//     max-width: 80%;
//   }

//   button:last-child {
//     margin-left: 20px;
//   }
// `;

/* === Product metrics card (no inner image) === */

export const ProductCardWrapper = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ProductCard = styled("div")`
  margin-top: 0.75rem;
  padding: 1.5rem 1.75rem;
  border-radius: 24px;
  background: ${bone};
  display: inline-flex;
  flex-direction: column;
  gap: 0.9rem;
  box-shadow: 0 20px 40px rgba(18, 53, 36, 0.18);
  min-width: 340px;

  @media only screen and (max-width: 575px) {
    min-width: 100%;
  }
`;

export const ProductName = styled("div")`
  font-weight: 700;
  font-size: 1.05rem;
  color: ${ecoDark};
`;

export const ProductPills = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const ProductPill = styled("span")`
  font-size: 0.9rem;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background: rgba(18, 53, 36, 0.06);
  color: ${ecoDark};
`;
export const ButtonWrapper = styled("div")`
  display: flex;
  align-items: center;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-right: 0.75rem; /* space before icon */
  }
`;


