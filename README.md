<h1 style="text-align: center;">
    <a href="https://pokecord-alura.vercel.app/">Pokecord -- Alura 💬🧑‍💻</a>
</h1>

<div style="text-align: center;">
    <img style="width: 800px;" src="https://github.com/GabrielWolf-Dev/pokecord-alura/blob/main/public/assets/gifs/pokecord.gif?raw=true" alt="Gif de demonstração do projeto" alt="Gif de demonstração do projeto" />
</div>

## Chat com o tema de pokémon realizado na imersão React da Alura🧑🏻‍💻
<br>
Fiz o redesign do projeto para ficar com a cara do tema, trazendo ao máximo a identidade do anime, utilizei fontes e ícones de pixel art para lembrar até mesmo os games de pokémon do gameboy🎮🎮. Infelizmente alguns assets eu não consegui achar para utilizar por conta dos direitos de uso, mas mesmo assim não deixei que perdesse a essência do projeto ficar em pixel art.
<br>
Vale a pena ressaltar que neste design, principalmente o Container Box, foi muito inspirado no site feito no curso de <a href="https://www.youtube.com/playlist?list=PLirko8T4cEmzrH3jIJi7R7ufeqcpXYaLa">HTML5 e CSS Feliz</a> do <a href="https://github.com/marcobrunodev">Marco Bruno Dev</a>.
<br>
Achei que esse evento da "imersão React" foi a melhor atualmente, pois o estudo do Next.js foi diferente, em vez de iniciar com `` npx create-next-app `` foi configurado manualmente com `` npm install next react react-dom `` sendo possível entender melhor como funciona a estrutura do Next.js e suas funcionalidades nativas. Além de conhecer uma alternativa do Firebase que é o Supabase, um Back-end as a Service com banco de dados relacional. Foi com este Baas que conseguimos fazer o chat do app ter "vida", junto com o Real Time.

<div style="text-align: center;">
    <img style="width: 800px;" src="https://github.com/GabrielWolf-Dev/pokecord-alura/blob/main/public/assets/screenShot/login.png?raw=true" alt="Página de login" />
</div>

Além de relembrar toda a identidade do anime(por conta de ser um Fan Website), aproveitei a [PokéAPI](https://pokeapi.co/) para fazer uma pokédex da parte de "status" do usuário quando é acessado a página do chat. E na página de login coloquei um cover produzido por [Niall Stenson](https://www.youtube.com/watch?v=zxKeIAZT7Mw) para deixar a imersão melhor.

<div style="text-align: center;">
    <img style="width: 800px;" src="https://github.com/GabrielWolf-Dev/pokecord-alura/blob/main/public/assets/screenShot/chat.png?raw=true" alt="Chat" />
</div>

## Algumas dificuldades(Durante o desenvolvimento):
* Inicialmente iria utilizar 100% da lib Skynex UI que foi desenvolvido pelo Dev Soutinho, mas a lib me limitava um pouco, principalmente por não conhecer bem a biblioteca, então optei por desenvolver o meu próprio CSS com a funcionalidade nativa do Next.js de escrever CSS-In-Js que acabei gostando mais. Entretanto utilizei a lib para algumas coisas, como o botão para enviar os Stickers no chat.

* Quando começei a implementar a exclusão de mensagens, queria que elas fossem em "Real Time" como a inserção de mensagens no chat, entretanto conforme fui estudando a documentação do Supabase, só consegui deletar a mensagem sem o Real Time, mesmo ativando e colocando o evento de "DELETE" no subscribe.

* Depois de um tempo percebi que a inserção de pokémons na pokédex sem o Real Time era insuficiente, pois quando o usuário ia excluir o pokémon adicionado, dava erro por não estar em Real Time o que foi solucionado quando implementei a funcionalidade.

* Por conta de ser uma semana para fazer o projeto, algumas organizações de código ficou um pouco desorganizado, assim vou ajustando conforme tenho um tempo disponibilizado para isso, principalmente no "chat.js" ficou bastante funcionalidades e componentes dentro do arquivo.

* Por conta da lib "styled-jsx" nativa do Next.js ter funcionalidade somente dentro da página "pages" e eu queria fragmentar os componentes de estilização dentro da pasta "src/components" no root do projeto, então tive que instalar a lib que o Next utiliza(via npm para armazenar no package.json) para importar de forma global.

<div style="text-align: center;">
    <img style="height: 450px;" src="https://github.com/GabrielWolf-Dev/pokecord-alura/blob/main/public/assets/screenShot/gitHub-status.png?raw=true" alt="Chat mobile(Responsivo)" />
</div>

## Tecnologias:
* HTML5
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
    * [Next.js](https://nextjs.org/)
    * [React.js](https://reactjs.org/)
    * [Styled-jsx do Next(CSS-In-Js)](https://www.npmjs.com/package/styled-jsx)
    * [Webpack](https://webpack.js.org/)
    * [Babel](https://babeljs.io/setup#installation)
* Figma -- [Link do projeto pokecord](https://www.figma.com/file/dPzKwjQyCml41nU69yM1iC/Pokecord(Redesign-Aluracord-Matrix)?node-id=0%3A1)
* [Supabase](https://supabase.com/)(Baas do projeto)
* [XSS](https://www.npmjs.com/package/xss)(Lib para sanitizar inputs)
* [Vercel](https://vercel.com/) para fazer o deploy do projeto🌐

### Visitou a página "Projects" do repositório para saber, com mais detalhes, o que rolou no projeto? [Acesse este link](https://github.com/GabrielWolf-Dev/pokecord-alura/projects/1)

## Quer testar na sua máquina este projeto?
Siga os passos...
<br>
* Crie uma pasta para clonar o projeto;
* `` git clone git@github.com:GabrielWolf-Dev/pokecord-alura.git ``;
* Instale o [node](https://nodejs.org/en/) na sua versão mais recente;
    * Caso esteja no Linux, baixe o [nvm](https://github.com/nvm-sh/nvm) para facilitar a instalação do Node.js;
* `` npm install `` para baixar as dependências;
* Sempre dê um `` npm update `` caso alguma dependência esteja desatualizada;
* Crie um arquivo ".env" para inserir as variáveis de ambiente quando rodar o server do Next.js, essas variáveis carregam as configurações de conexão com o Supabase, infelizmente caso você queria retornar os dados para ter mais segurança com o servidor Node do Next com o método getServerSideProps, pode até dar certo para fazer um "SELECT", mas para atualizar e deletar algo não será possível retornar os dados, pois você vai precisar das funções quando conecta o Supabase e das variáveis que ficaram no lado do Front-End. Eu pelomenos não achei alguma solução para isso ainda 😔, mas quem sabe futuramente eu ache uma solução...🤔;
* `` NEXT_PUBLIC_ANON_KEY_SUPABASE=YOUR_ANON_KEY `` && `` NEXT_PUBLIC_URL_SUPABASE=YOUR_PUBLIC_URL_SUPABASE ``;
* Então é só rodar `` npm run dev `` e ser feliz :).

<div style="text-align: center;">
    <img style="width: 800px;" src="https://github.com/GabrielWolf-Dev/pokecord-alura/blob/main/public/assets/screenShot/pokedex.png?raw=true" alt="Chat mobile(Responsivo)" />
</div>
