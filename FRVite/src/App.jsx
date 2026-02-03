import TextInput from './components/TextInput'

function App() {
  return (
    <div>
      <TextInput placeholder={"O que está acontecendo?"} maxLength={125}/> {/* Componentes devem ser sempre iniciados com letra maiúscula pois são componentes React, se não, será considerado um elemento HTML. Quando criamos componentes, podemos criar quantos quisermos, basta chamá-los dentro do componente pai. Atributos devem ser passados como props, que são objetos que contêm as propriedades do componente. */}
      <TextInput placeholder={"Me diga uma novidade"} maxLength={250}/>
      <TextInput placeholder={"Me diga uma novidade"} maxLength={250} value={"Qualquer coisa"}/> {/* Mesmo que eu não tenha definido o valor da propriedade value, posso passar um valor fixo direto no componente.*/}
      <TextInput maxLength={250}/> {/* Mesmo que eu não tenha definido o valor da propriedade placeholder, posso passar um valor padrão para o componente isso se chama fallback value ou valor padrão.*/}
    </div>
  )
}

export default App
