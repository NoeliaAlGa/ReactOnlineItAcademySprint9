import styled from "styled-components";
import { Card, Row, Button } from 'react-bootstrap';

export const CardsDiv = styled.div `
      margin: 2rem; 
`
export const RowDiv =styled(Row)`
    margin-top: 1rem;
`

export const CardDiv = styled(Card) `
    height: auto;
    @media (min-width: 768px) {
        height: 680px;
    }
    @media (min-width: 1026px) {
        height: 610px;
    }
`
export const CardDivRegalos = styled(Card) `
    position:relative;
    height: auto;
    @media (min-width: 768px) {
        height: 630px;
    }
    @media (min-width: 1026px) {
        height: 570px;
    }
`
export const CardDivTextil = styled(Card) `
    position:relative;
    height: auto;
    @media (min-width: 768px) {
        height: 680px;
    }
    @media (min-width: 1026px) {
        height: 570px;
    }
`

export const CardDivMadera = styled(Card) `
    position:relative;
    height: auto;
    @media (min-width: 768px) {
        height: 580px;
    }
    @media (min-width: 1026px) {
        height: 520px;
    }
`
export const CardDivLienzos = styled(Card) `
    position:relative;
    height: auto;
    @media (min-width: 768px) {
        height: 570px;
    }
    @media (min-width: 1026px) {
        height: 540px;
    }
`
export const CardDiv2 = styled(Card) `
    position:relative;
    height: 540px;
`
export const ButtonInBottom = styled.div`
   
    @media (min-width: 768px) {
        position:absolute;
        bottom:10px;
        left: 0;
        right: 0;
        margin: auto;
    }
`

export const ImgCard = styled(Card.Img)`
width: 100%;
height: 400px;
object-fit:cover;
object-position:center;
border-radius: 10px 10px 0 0;

@media (min-width: 768px) {
    height: 300px;
}
`
export const TitleStyle = styled.h1`
      font-weight: bold;
      color: white;
      text-align: left;
      background-color: black;
      width: fit-content;
      padding: 1rem 2rem 1rem 4rem;
      margin-left: -25px;
      border-radius: 0 20px 20px 0;
`
export const TitleCards = styled.h2`
    color: black;
    text-align: center;
    font-size: 30px;
`
export const TextCards = styled(Card.Text)`
    color: black;
    text-align: justify;
    text-align-last: center;
    font-size: 16px;
`
export const PrecioCards = styled.h2`
    font-size: 24px;
    text-align: center;
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextAreaStyle = styled.textarea `
    height: 100px;
    width: 100%;
`

export const ButtonComprar = styled(Button)`
    display: block;
    margin-top: 1rem;
`

export const BodyComikeate = styled.div `
    background-color: Crimson;
    height: 100%;
    width: 100%;
    padding-bottom: 2rem;
   
`
export const BodyTextil = styled(BodyComikeate) `
    background-color: ForestGreen;
`
export const BodyRegalos = styled(BodyComikeate) `
    background-color: DeepPink;
`
export const BodyMadera = styled(BodyComikeate) `
    background-color: rgb(255, 195, 0);
`
export const BodyLienzos = styled(BodyComikeate) `
    background-color: Coral;
`
export const BodyContactanos = styled(BodyComikeate) `
    background-color: BlueViolet;
`
export const BodyLogIn = styled(BodyComikeate) `
    background-color: Crimson;
`

export const BodySignUp = styled(BodyComikeate) `
    background-color: rgb(255, 195, 0);
`