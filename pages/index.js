import { Typewriter } from 'react-simple-typewriter';
import { Player } from '@lottiefiles/react-lottie-player';
import appConfig from '../config.json';
import {
    Box,
    Button,
    Text,
    TextField,
    Image
} from '@skynexui/components';
import bgHomePage from '../assets/img/pikachu-fight.jpg';
import gifPokemons from '../assets/img/pokemons.gif';

function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

  function Title({ children, tag }){
    const Tag = tag || 'h1';

    return (
      <>
        <Tag>{children}</Tag>
        <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.neutrals['000']};
                  font-size: 24px;
                  font-weight: 600;
              }
        `}</style>
      </>
    );
  }

  function BgApresentacao({ tag }){
    const Tag = tag || 'aside';

    return(
      <>
      <Tag>
      </Tag>
        <style jsx>{`
              ${Tag} {
                  width: 100%;
                  height: 100vh;
                  position: fixed;
                  top: 0;
                  left: 0;
                  background-color: ${appConfig.theme.colors.neutrals["900"]};
                  opacity: 0.8;
                  z-index: 2;
              }
        `}</style>
      </>
    );
  }

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

  return (
    <>
      <GlobalStyle />

      <BgApresentacao />
      <Box
          styleSheet={{
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
            zIndex: '3',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: appConfig.theme.colors.neutrals["000"],
            fontSize: '20px'
          }}
        >
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/private_files/lf30_rBOODA.json"
            style={{ height: '200px', width: '200px' }}
          />

          <Box style={{
            width: '80%',
            margin: '0 auto 32px auto',
          }}>
            <Typewriter
              words={pharse}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1000}
              onLoopDone={() => {
                // Fazer aparecer o botão de "Entrar no Podecord"
                // Retirar esse background e a música se não acabar...
              }}
            />
          </Box>

          <img
            style={{
              margin: '16px auto',
              display: 'block'
            }}
            src={gifPokemons.src}
            alt="Gif de pokémons sorrindo"
          />

          <Text>Pokecord -- Alura</Text>
        </Box>
      
      {/*
        Não estou conseguindo importar o áudio, pq não tem um loader específico para importar, então quere ver se consigo consumir via url, depois deste commit...
      */}

      {/* Container & Background da Home */}
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary["200"],
          backgroundImage: `url(${bgHomePage.src})`,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Title tag="h2">Vamos batalhar?</Title>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              styleSheet={{ zIndex: '1' }}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["600"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[700],
              }}
            />

            <Text variant="body3" styleSheet={{ marginTop: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              Não tem uma conta? 
              Acesse o <a style={{ color: appConfig.theme.colors.neutrals["000"]}} target="_blank" href='https://github.com/signup' >github</a> e crie a sua!
            </Text>
          </Box>

          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}

export default Home;