import { Typewriter } from 'react-simple-typewriter';
import { Player } from '@lottiefiles/react-lottie-player';
import appConfig from '../config.json';

/* Assets: */


/* Components */
import GlobalStyle from '../components/GlobalStyle';
import HeadHTML from '../components/Head';
import {
  BgApp,
  BoxContent
} from '../components/UI/generic-components';
import {
  BgApresentacao,
  BtnClose,
  BoxGif
} from '../components/UI/home';
import { useState } from 'react';

function Home(){
  const [isDisplayed, setIsDisplayed] = useState(true);
  const username = 'GabrielWolf-Dev';
  const pharses = [
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
    setIsDisplayed(false);
    console.log(isDisplayed);
  }

  return (
    <>
      <HeadHTML />
      <GlobalStyle />

      <BgApp>
        <BgApresentacao isDisplayed={isDisplayed}>
          <BoxContent>
            <BtnClose stopApresentation={stopApresentation} />

            <Player
              autoplay
              loop
              src="https://assets7.lottiefiles.com/private_files/lf30_rBOODA.json"
              style={{ height: '200px', width: '200px' }}
            />

          <Typewriter
              words={pharses}
              loop={2}
              cursor
              cursorStyle='|'
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1000}
          />

          <BoxGif />
          </BoxContent>
        </BgApresentacao>
      </BgApp>
    </>
  );
}

export default Home;