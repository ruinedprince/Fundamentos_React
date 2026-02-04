import styles from './TextInput.module.css';
// Props são objetos que contêm as propriedades do componente. São passados como argumentos para o componente. Podemos acessar as propriedades do componente através do objeto props.

export default function TextInput(props) {

    // Podemos desestruturar className (e outras props) agora para evitar o erro ReferenceError.
    
    const { className = '', ...rest } = props;

    // const inputElement = useRef();


    // if (inputElement.current) { // Verifica se o elemento existe antes de acessar sua propriedade defaultValue.
    //     console.log(inputElement.current.defaultValue);
    // }

    return (
        <div className={`${styles.container} ${className}`}>
            {/* O código entre as chaves é o valor da propriedade placeholder. O problema é que valores fixos direto no componente não são recomendados, pois se precisarmos alterar o valor, teremos que alterar o código fonte, por isso, usamos uma variável para armazenar o valor da propriedade.
                */}
            {/* Como eu quero que o textarea tenha a classe input, posso usar o className={styles.input} para aplicar a classe input. Eu não posso usar apena "class" pois isso é uma palavra reservada do JavaScript.*/}

            <textarea
                className={styles.input}
                {...rest}
            />
            
        </div>
    )
}