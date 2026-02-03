import TextInput from './components/TextInput'
import styles from './App.module.css'


function App() {
  return (
    <div>

      {/* Componentes devem ser sempre iniciados com letra maiúscula pois são componentes React, se não, será considerado um elemento HTML. Quando criamos componentes, podemos criar quantos quisermos, basta chamá-los dentro do componente pai. Atributos devem ser passados como props, que são objetos que contêm as propriedades do componente. */}
      {/* Mesmo que eu não tenha definido o valor da propriedade value, posso passar um valor fixo direto no componente.*/}
      {/* Mesmo que eu não tenha definido o valor da propriedade placeholder, posso passar um valor padrão para o componente isso se chama fallback value ou valor padrão.*/}

      <TextInput className={styles.appContainer} placeholder={"O que está acontecendo?"} maxLength={125}/>
    </div>
  )
}

export default App
