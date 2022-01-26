import { Typewriter } from 'react-simple-typewriter';
import { Player } from '@lottiefiles/react-lottie-player';
import appConfig from '../config.json';

/* Components */
import GlobalStyle from '../components/GlobalStyle';
import HeadHTML from '../components/Head';
import {
  BgApp,
  BoxContent,
  Paragraph,
  LinkAncor,
  Title,
  InputText,
  Button
} from '../components/UI/generic-components';
import {
  BgApresentacao,
  BtnClose,
  BoxGif,
  ParagraphPhase,
  BoxHomePerfil,
  ImgPerfil,
  UserName
} from '../components/UI/home';
import { useState } from 'react';

function Home(){
  const [isDisplayed, setIsDisplayed] = useState(true);
  const pharses = [
    'Seja bem vindo ao Pokecord! 👋',
    'Uma comunidade que troca ideias sobre pokémon, desafiam-se e batalham 🔥',
    'Todos tem o desejo de ser o melhor treinador pokémon :) ✨',
    'Você pode encontrar o seu pokemon favorito e batalhar até a vitória 🏆',
    'Projeto feito por GabrielWolf-Dev, junto com a imersão React da Alura e toda a sua comunidade 🖥️',
    'Agradeço muito a Alura por prover esta oportunidade e a toda comunidade que apoia essas imersões maravilhosas!!! ❤️',
    'Logue com sua conta do GitHub e venha batalhar com a gente! 😀',
  ];
  const [inputValueLogin, setInputValueLogin] = useState('');

  function stopApresentation(){
    // Retirar a apresentação e parar a musica se ela não acabar...
    // E coloca na Box de logar com a conta
    setIsDisplayed(false);
  }

  function inputLogin(e){
    const value = e.target.value;
    console.log(value);
    setInputValueLogin(value);
  }

  function login(){
    console.log('login github');
  }

  return (
    <>
      <HeadHTML />
      <GlobalStyle />
      <audio autoPlay src="/assets/sounds/pokemon-cover.mp3"></audio>

      <BgApp>
        <BgApresentacao isDisplayed={isDisplayed}>

          <BoxContent>
            <BtnClose stopApresentation={stopApresentation} />

            <Player
              autoplay
              loop
              src="https://assets7.lottiefiles.com/private_files/lf30_rBOODA.json"
              style={{ height: '180px', width: '180px' }}
            />

          <ParagraphPhase>
            <Typewriter
                words={pharses}
                loop={2}
                cursor
                cursorStyle='|'
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1000}
            />
          </ParagraphPhase>

          <BoxGif />

          <Paragraph>Música <LinkAncor hrefLink="https://www.youtube.com/watch?v=zxKeIAZT7Mw">"Pokémon Theme on Guitar"</LinkAncor> produzida por <LinkAncor hrefLink="https://www.youtube.com/channel/UCR0rr17_gU-7JOBrOxQnarg">Niall Stenson</LinkAncor> 🎸🔥</Paragraph>
          <Paragraph>Pokecord -- Alura</Paragraph>
          </BoxContent>
        </BgApresentacao>

        <BoxContent isLoginPage={true}>
          <main style={{ width: '100%', maxWidth: '400px', padding: '24px 2%' }}>
            <Title titleLogin={true}>Boas Vindas Treinador!</Title>
            <Paragraph>{appConfig.name}</Paragraph>

            <form>
              <InputText
                inputLogin={inputLogin}
                placeholderInput="Digite o seu nome do GitHub"
              />
              <Button isLoginPage={true} login={login}>Entrar</Button>
            </form>

            <Paragraph isLoginBox={true}>Não possui uma conta no <LinkAncor hrefLink="https://github.com/signup">github?</LinkAncor></Paragraph>
          </main>

          <BoxHomePerfil>
            <ImgPerfil userName={inputValueLogin} />

            <UserName>{inputValueLogin}</UserName>
            <LinkAncor hrefLink="https://giphy.com/gifs/pokemon-harley-quinn-the-joker-yhfTY8JL1wIAE">GIPHY</LinkAncor>
          </BoxHomePerfil>
        </BoxContent>
      </BgApp>
    </>
  );
}

export default Home;