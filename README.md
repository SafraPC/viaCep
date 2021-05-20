# viaCep
  
  # Backend
  Desenvolvido em Node.js utilizando express e estrutura MVC, no entanto, o backend foi criado como API. 
  Em si, ele consome uma API do viacep onde inserimos o cep destinado e retorna todos os dados para a gente.
  como consulta é dinheiro, a proposta principal era pegar esses dados, verificar se eles existem no cache do REDIS e caso não existir,
  verificar se ele existe no nosso banco de dados MONGO DB para cachear e não precisar ir a té a api novamente.
  Dessa forma, foi utilizado algumas bibliotecas para nos ajudar neste desafio, como dotenv, express, axios, nodemon e ioredis.
  
 
  # Frontend
  Como o foco da aplicação era construir um SPA com um input de pesquisa e um botão para search, utilizei React como biblioteca / framework ,
  regex para o input, styled componpotents como pré-processador CSS, dotenv para a variável da API, Bootstrap para a criação de um header responsivo,
  Toastify para melhor interface ao usuario e um template safrapc que eu mesmo criei.
  
  # Para rodar, o que eu preciso fazer?
  O projeto não está hospedado e foi feito como desafio de um processo seletivo, por isso dentro dele se encontram as pastas de frontend e backend.
  
  Para roda-lo você precisará de um gerenciador de pacotes javascript (NPM ou YARN), neste caso utilize
  YARN ou npm install para instalar as dependencias.

  Instale o Docker na sua maquina e rode o seguinte comando : 
  
  docker run --name redis -p 6379:6379
  
  verifique se sua imagem redis está rodando no docker com o comando :
  
  docker ps
  
  Crie um novo projeto e um cluster no MONGO DB pegue a connection string e siga os exemplos do .example.env no backend. 
  
  Link a porta da api no frontend com um .env seguindo o .example.env e por fim,
  
  utilize yarn dev ou nmp run dev para inicializar o servidor
  utilize yarn start ou npm start para inicializar o frontend
  
  
# ESCOPO DA APLICAÇÃO
Develop an application to help a user to query a ZIP code. Where, when entering a zip code, the screen will display address information as neighborhood, municipality and backyard. To do this, create an api rest with integration with the ViaCEP service and a web application. On the backend, a cache of the queries carried out by the user must be made. After a query is made on the viaCEP api, the address information should be stored in a database and in subsequent queries from the same zip code, this information must be returned without searching the viaCEP service. The frontend must have a screen with a field to inform the zip code, a button to perform the search, and after clicking on the button, the address information.


  #OBRIGADO!
