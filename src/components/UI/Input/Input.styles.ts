import styled from "styled-components";

export const InputField = styled.input<{hasError?: boolean}>`
  width: 80%;
  padding: .5rem 0rem;
  font-size: 1.2rem;
  background: transparent;
  color: #ffffff;
  border: none;
  border-bottom: ${(props) => !props.hasError ? "2px solid #d8d8d8a1" : "2px solid #df2d2da1"};
  transition: .3s ease-out;
  margin-bottom: 2rem;

  &:focus-visible {
    outline: none;
    border-bottom: 2px solid #7fa1ce;
  }
`;
