import { Row } from "antd";
import styled from "styled-components";

const ecoDark = "#155435";
const bone = "#f5efe6"; // bone background behind the image

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

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

// New: wrappers for the main hero image
export const ImageWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.75rem 2rem;
  border-radius: 28px;
  background: ${bone};
  box-shadow: 0 18px 36px rgba(21, 84, 53, 0.18);
`;

export const HeroImage = styled("div")`
  width: 280px;
  max-width: 100%;
  height: auto;

  img,
  svg {
    width: 100%;
    height: auto;
    border-radius: 22px;
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

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
