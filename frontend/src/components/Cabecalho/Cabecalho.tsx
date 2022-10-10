import { CabecalhoContainer, Logo } from "./Cabecalho.style";

const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <div>
                <Logo src="/imagens/myteacher.png"/>
            </div>

            <p>Encontre um professor ou professora perfeita!</p>
        </CabecalhoContainer>
    )
}

export default Cabecalho;