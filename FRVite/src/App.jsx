import TextInput from './components/TextInput'

function App() {
  return (
    <div>
      <TextInput placeholder="Digite algo..."/> {/* Componentes devem ser sempre iniciados com letra maiúscula pois são componentes React, se não, será considerado um elemento HTML. Quando criamos componentes, podemos criar quantos quisermos, basta chamá-los dentro do componente pai.  */}
    </div>
  )
}

export default App
