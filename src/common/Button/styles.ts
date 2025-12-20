import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "#123524"};      /* Phthalo green default */
  color: ${(p) => (p.color ? "#123524" : "#E6DDC4")}; /* text bone when default */
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #1E7045;                      /* accent green border */
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgba(18, 53, 36, 0.3);  /* greenish shadow */

  &:hover,
  &:active,
  &:focus {
    color: #E6DDC4;                               /* bone text */
    border: 1px solid #1E7045;                    /* accent green */
    background-color: #1E7045;                    /* slightly lighter green */
  }
`;
