# minutrade-teste-tecnico

##Instruções para rodar
-Clone o projeto
-Instale node e yarn caso não tenha
-No terminal vá até a pasta do projeto e use o comando yarn install
-Ainda no terminal de um comando yarn start
-Entre em algum navegador e entre no localhost:8080

##Considerações

-Tomou em torno de 9h o desenvolvimento da aplicação.

-Você pode usar o plugin de react e redux no browser, que não foi bloqueado

-Usei as configurações de webpack de um outro projeto que fiz, que tinha uso de libs e loaders parecido, por isso não gastei muito tempo de configuraçao

-Resolvi usar antd por acreditar que o uso de uma biblioteca de componentes tornaria o processo mais rapido e particularmente eu gosto do ant design.

-As verificações dentro do form e a forma que o form foi feito poderia ser mais separada com mais functions, mas como só tinha 3 fields resolvi fazer tudo em poucos metodos.

-Sobre as localizações das lojas, como nas informações só temos o endereço tive que usar uma lib pra achar coordenadas, porem tive o problema de como é executado em local host, eu não tenho uma API key pra fazer as requisições pra api do google que limita meu acesso sem uma, então preferi deixar o codigo feito com o problema de requisição do que inventar ou fazer na mão um novo setup de informações, porem minha aplicação funcionaria facilmente se tivesse já as coordenadas, com pequenas modificações é claro.

-A localização inicial do mapa, deixei no meio de São Paulo, ia fazer com a primeira localização que encontrasse mas por conta do problema da API de coordenadas não consegui.

-Sobre as imagens como não trabalhei com um database, resolvi usar URL e seria necessario upar imagens em algum site ou dominio para mostrar elas no site.

-Como eu não tenho um database e não tenho produtos com IDs unicos, usei o nome como "chave primaria" dos produtos, isso pode deletar diversos cards caso eles tenham mesmo nome, poderia ser resolvido com algum sistema de IDs