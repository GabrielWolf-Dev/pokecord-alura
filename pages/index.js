import { Typewriter } from 'react-simple-typewriter';
import { Player } from '@lottiefiles/react-lottie-player';
import appConfig from '../config.json';

/* Assets: */
import gifPokemons from '../assets/img/pokemons.gif';

/* Components */
import GlobalStyle from '../components/GlobalStyle';
import HeadHTML from '../components/Head';
import {
  BgApp,
  BoxContent
} from '../components/UI/generic-components';
import {
  BgApresentacao,
  BtnClose
} from '../components/UI/home';

function Home(){
  const username = 'GabrielWolf-Dev';
  const pharse = [
    'Seja bem vindo ao Pokecord! 👋',
    'Uma comunidade que troca ideias sobre pokémon, desafiam-se e batalham 🔥',
    'Todos tem o desejo de ser o melhor treinador pokémon :) ✨',
    'Você pode encontrar o seu pokemon favorito e batalhar até a vitória 🏆',
    'Projeto feito por GabrielWolf-Dev, junto com a imersão React da Alura e toda a sua comunidade 🖥️',
    'Agradeço muito a Alura por prover esta oportunidade e a toda comunidade que apoia essas imersões maravilhosas!!! ❤️',
    'Logue com sua conta do GitHub e venha batalhar com a gente! 😀'
  ];
  const musicPoke = 'https://github.com/GabrielWolf-Dev/pokecord-alura/blob/main/assets/sounds/pokemon-cover.mp3?raw=true';

  function stopApresentation(){
    // Retirar a apresentação e parar a musica se ela não acabar...
    // E coloca na Box de logar com a conta
  }

  return (
    <>
      <HeadHTML />
      <GlobalStyle />

      <BgApp>
        <BgApresentacao>
          <BoxContent>
            <BtnClose onClick={stopApresentation} />

            <p>sasasa</p>
            <p>sasasa</p>
            <p>sasasa</p>
            <p>sasasa</p>
            <p>sasasa</p>
          </BoxContent>
        </BgApresentacao>
      </BgApp>
    </>
  );
}

export default Home;