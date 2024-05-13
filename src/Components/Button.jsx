import { Botao, Imagem } from "../Styles/Button";

const Button = ({texto, imagem}) => {
    return(
        <Botao><Imagem src={imagem}></Imagem> {texto}</Botao>
    )
}

export default Button