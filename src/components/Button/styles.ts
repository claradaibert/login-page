import styled from 'styled-components'

export const ButtonContainer = styled.button`
    width: 70%;
    border-radius: 15px;
    background: linear-gradient(96deg, #4982F7 -40.92%, #D084FC 98.39%);
    color: ${({theme}) => theme.background_primary_white};
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    padding: 1rem 0;
    border: none;
`