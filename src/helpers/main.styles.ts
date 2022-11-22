import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const PrimaryTitle = styled.h1`
  font-size: 3rem;
`;

export const SecondaryTitle = styled.h2`
  font-size: 2rem;
  font-style: italic;
  color: #7fa1ce;
`;

export const TertiaryTitle = styled.h3`
  font-size: 1.7rem;
  color: #7fa1ce;
  letter-spacing: 1px;
`;

export const Paragraph = styled.p`
  color: #7fa1ce;
  font-size: 1.3rem;
  font-style: italic;
  letter-spacing: 2px;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
`;
