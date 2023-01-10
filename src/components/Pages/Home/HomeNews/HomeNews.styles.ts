import styled from "styled-components";

export const HomeNewsContainer = styled.section`
  width: 90%;
  min-height: 20rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background: #f3f3f3;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 20px;

  &:nth-child(3) {
    padding-top: 8rem;
    margin-top: -6rem;
  }
  
  &:last-child {
    margin-bottom: 8rem;
  }
`;

export const HomeNewsInfoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HomeNewsInfoTitle = styled.h3`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 800;
  text-align: left;
`;

export const HomeNewsInfoHeading = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const HomeNewsInfoDescription = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
`;

export const HomeNewsInfoParagraph = styled.p`
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
`;

export const HomeNewsDescription = styled.p`
  width: 100%;
  font-size: 1.1rem;
  letter-spacing: 2px;
  padding: 1rem 0rem;
`;

export const HomeNewsPhotoBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const HomeNewsImg = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 10px;
`;
