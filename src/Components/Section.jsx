import {Secao, Titulo, Price1, Price2, Texto, Titulo2} from '../Styles/Section'
import Button from './Button'

const Section = () => {
    return(
        <Secao>
            <Titulo2>PERFUME</Titulo2>
            <Titulo>Gabrielle Essence Eau De Parfum</Titulo>
            <Texto>A floral, solar and voluptuous by Oliver Polge, Parfumer-Creator for the House of CHANEL</Texto>
            <Price1>$149.99 <Price2>$169.99</Price2></Price1>
            <Button 
            imagem='../../images/icon-cart.svg'
            texto='Add to Cart'/>
        </Secao>
        
    )
}

export default Section