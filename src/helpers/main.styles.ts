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

export const ParagraphItalic = styled.p`
  color: #7fa1ce;
  font-size: 1.3rem;
  font-style: italic;
  letter-spacing: 2px;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f3f3f3;
  font-size: 1rem;
  letter-spacing: 2px;
  padding: 1.5rem;
  width: 100%;
`;

export const IconSpan = styled.span`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Span = styled.span`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HelperContainerStart = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
`;

export const HelperContainerCenter = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
