import styled from "styled-components";
import { ECO_BONE_LIGHT, ECO_GREEN_DARK } from "../../styles/theme";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  background: ${ECO_BONE_LIGHT};

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
  color: ${ECO_GREEN_DARK};
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StatsCard = styled("div")`
  margin-top: 1.75rem;
  padding: 1rem 1.25rem;
  border-radius: 18px;
  background: #f5efe6; /* bone */
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 12px 24px rgba(18, 53, 36, 0.14);
`;

export const StatsImage = styled("img")`
  width: 96px;
  height: 96px;
  border-radius: 16px;
  object-fit: cover;
`;

export const StatsContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const StatsTitle = styled("div")`
  font-weight: 700;
  font-size: 1rem;
`;

export const StatsRow = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.85rem;
`;

export const StatsPill = styled("span")`
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(18, 53, 36, 0.06);
`;