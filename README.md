# Fundamentos do React

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

## O que é React?
O React é uma biblioteca desenvolvida pelo time do Facebook com o intuito de se aplicar o conceito de componentização durante o desenvolvimento de uma aplicação web. Isso quer dizer que, com o auxílio do React e do JavaScript, você poderá desenvolver componentes reutilizáveis na interface de sua aplicação web. Isso certamente acelera e facilita o trabalho que o desenvolvedor normalmente teria ao desenvolver a interface da aplicação web. 

Essa ideia de componentização na verdade não é nova. Ela já era usada há muitos anos no desenvolvimento de aplicações Desktop. Porém, no começo da Internet, o desenvolvimento web era totalmente voltado a sites simples, criados para exibir informações estáticas. 

O próprio Facebook define o React como sendo "uma biblioteca declarativa, eficiente e flexível baseada em JavaScript para construção de interfaces".

O React se baseia na ideia de criarmos componentes que podem ser reutilizados em toda a aplicação e até em outras aplicações.

magine criar um componente que contenha todo o código necessário para exibir esse elemento e, quando quisermos utilizá-lo, bastaria chamá-lo por uma tag criada por nós mesmos como "<Curso />". Assim, fica fácil reutilizá-lo onde quisermos, além da nossa View ficar mais limpa, ao invés de termos várias <div> para todos os lados.

O React tem boa performance, pois evita acessar diretamente o DOM (já vamos entender isso).

Como o objetivo do React é focar na criação de componentes, muitas funcionalidades ficam por conta dos desenvolvedores, como requisições, roteamento, internacionalização, etc.

Isso pode até parecer ruim, mas na verdade nos dá flexibilidade para integrar com qualquer biblioteca que quisermos.

## Quem usa React?

Várias startups e gigantes do mundo todo usam React, pois sua versatilidade está revolucionando o modo como criamos nossas aplicações tanto web quanto mobile.

Isso mesmo! Com o React, também podemos desenvolver aplicações nativas para dispositivos móveis, como é o caso do Instagram. 