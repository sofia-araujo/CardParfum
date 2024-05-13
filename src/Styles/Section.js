import styled from 'styled-components'


export const Secao = styled.section`
    padding: 16px;
    margin: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
`

export const Titulo = styled.h1`
    font-size: 24px;
    color: hsl(212, 21%, 14%);
`

export const Texto = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: hsl(228, 12%, 48%);
 `

export const Price1 = styled.strong`
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 15px;
    color: hsl(158, 36%, 37%);
`

export const Price2 = styled.del`
    font-size: 12px;
    color: hsl(228, 12%, 48%);
`
export const Titulo2 = styled.h4`
    font-family: "Montserrat", sans-serif;
    letter-spacing: 3px;
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 10px;
    color: hsl(228, 12%, 48%);
`