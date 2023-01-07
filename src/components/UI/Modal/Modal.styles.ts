import styled from "styled-components";

export const ModalSection = styled.section`
  width: 100%;
  height: clamp(50%, 100%, 100vh);
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
`;
