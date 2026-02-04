import styles from './TextInput.module.css';
import { useState } from 'react';

// Props são objetos que contêm as propriedades do componente. São passados como argumentos para o componente. Podemos acessar as propriedades do componente através do objeto props.

export default function TextInput({placeholder = "Valor padrão", maxLength, className, ...props}) {

    // Como eu ja sei que vou receber as propriedades placeholder e maxLength, posso desestruturar o objeto props e receber as propriedades que eu quero. Se não receber, o valor padrão será "Valor padrão".

    const [text, setText] = useState('');
    
    function onTextChange(event) {
        const text = event.target.value;
        if (text.length <= maxLength) {
            setText(text);
        }
    }

    return (
        <div className={`${styles.container} ${className || ''}`}>

            {/* O código entre as chaves é o valor da propriedade placeholder. O problema é que valores fixos direto no componente não são recomendados, pois se precisarmos alterar o valor, teremos que alterar o código fonte, por isso, usamos uma variável para armazenar o valor da propriedade.
            */}
            {/* Como eu quero que o textarea tenha a classe input, posso usar o className={styles.input} para aplicar a classe input. Eu não posso usar apena "class" pois isso é uma palavra reservada do JavaScript.*/}

            <textarea
                className={styles.input}
                placeholder={placeholder}
                onChange={onTextChange}
                maxLength={maxLength}
                value={text}
                {...props}
            />
            <p>{text.length}/{maxLength}</p>
        </div>
    )
}