import styled from "styled-components";

export const BackButtonContainer = styled.button`
    display: flex;
    color: ${({theme}) => theme.background_primary_blue};
    font-size: 0.875rem;
    align-items: center;
    gap: 0.3rem;
    align-self: left;
    border: none;
    position: relative;
    right: 33%;
    bottom: 50px;

    @media screen and (max-width: 700px) {
        bottom: 30px;
    }
`