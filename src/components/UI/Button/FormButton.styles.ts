import styled from "styled-components";

export const FormBtn = styled.button`
    width: 80%;
    padding: .6rem 0rem;
    font-size: 1.2rem;
    background-color: #7fa1ce;
    color: #141414b0;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: 2px 2px 25px #1a1919;
    margin-bottom: 2rem;

    &:focus-visible {
        outline: none;
    }

    &:focus-visible {
        border: 2px solid #e9f772;
    }
`;