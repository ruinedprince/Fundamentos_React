# Fundamentos do React

---
## A web pré e pós componentes

No começo, a web era apenas para compartilhar documentos, assim como os documentos do Word. Tanto que HTML significa "Linguagem de Marcação de HiperTexto".

As tags nos ajudavam a deixar parte do texto em negrito, declarar títulos, criar listas e tudo mais que se pode precisar em um texto. 

Com a evolução da web, começamos a desenvolver sistemas e várias outras coisas com HTML, CSS e JavaScript.

Hoje em dia, o HTML está evoluindo muito para facilitar o desenvolvimento de aplicações, mas originalmente ele foi criado apenas para a formatação de textos.

Quando criamos um texto, não teremos coisas repetidas, certo? Não faz sentido ter, por exemplo, um parágrafo sendo repetido em vários locais. Então, até pouco tempo, não havia a ideia de reaproveitamento de um elemento que criamos para a interface.

Isso fez com que a gente criasse Views inteiras.

Uma tela do sistema era criada inteiramente só pensando no Layout.

Se tivéssemos uma tela parecida, poderíamos reaproveitar o JavaScript e CSS, mas o HTML teria que ser repetido. 

E por muito tempo o nosso fluxo de trabalho foi assim. Algumas bibliotecas começaram a criar elementos que eram inseridos por JavaScript, mas ainda assim não era o melhor dos mundos, pois nos fazia misturar muito JavaScript com HTML. Para montar os elementos na View, tínhamos que controlá-los totalmente pelo JavaScript.

Um exemplo muito comum foi o jQuery UI. 

Podemos escolher onde queremos que nosso elemento apareça e executar um Script. 

Até que alguns frameworks começaram com a ideia de reaproveitamento de HTML. Mas foi o React que revolucionou o modo de pensarmos na construção de nossas telas. 

Com o React, podemos facilmente criar nossos próprios elementos e chamá-los quando quisermos, como se eles fossem tags do HTML. Desde então, começamos a pensar no desenvolvimento web baseado em componentes, que já é um conceito bem conhecido no desenvolvimento Desktop. 