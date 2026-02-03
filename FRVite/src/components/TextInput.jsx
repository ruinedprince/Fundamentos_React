// Props são objetos que contêm as propriedades do componente. São passados como argumentos para o componente. Podemos acessar as propriedades do componente através do objeto props.

export default function TextInput({placeholder = "Valor padrão", maxLength, ...props}) { // Como eu ja sei que vou receber as propriedades placeholder e maxLength, posso desestruturar o objeto props e receber as propriedades que eu quero. Se não receber, o valor padrão será "Valor padrão".
    return (
        <div>
            <textarea placeholder={placeholder} maxLength={maxLength} {...props}/> {/* O código entre as chaves é o valor da propriedade placeholder. O problema é que valores fixos direto no componente não são recomendados, pois se precisarmos alterar o valor, teremos que alterar o código fonte, por isso, usamos uma variável para armazenar o valor da propriedade.*/}
        </div>
    )
}