import _JSXStyle from 'styled-jsx/style';
import appConfig from '../../config.json';

/* Assets */
import btnClose from '../../public/assets/img/btn-close.png';
import defaultPhoto from '../../public/assets/gifs/charmander.gif';

function BgApresentacao({ tag, children, isDisplayed }){
    const Tag = tag || 'aside';

    return(
      <>
      <Tag>{children}</Tag>
        <style jsx>{`
              ${Tag} {
                  width: 100%;
                  height: 100vh;
                  position: fixed;
                  top: 0;
                  left: 0;
                  background-color: rgba(33, 33, 33, 0.5);
                  z-index: 2;
                  display: ${isDisplayed ? 'flex' : 'none'};
                  justify-content: center;
                  align-items: center;
              }
        `}</style>
      </>
    );
}

function BtnClose({ stopApresentation }){
    return(
        <>
            <button onClick={stopApresentation}>
                    <img style={{ width: '100%', height: '100%' }} src={btnClose.src} alt="Botão fechar" />
            </button>
            <style jsx>{`
                button {
                    width: 25px;
                    heigth: 25px;
                    position: absolute;
                    top: 16px;
                    right: 16px;
                }
            `}</style>
        </>
    );
}

function BoxGif(){
    return(
        <>
            <div className="box-gif">
                <iframe src="https://giphy.com/embed/8UGGp7rQvfhe63HrFq" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                <p><a target="_blank" href="https://giphy.com/gifs/reaction-mood-8UGGp7rQvfhe63HrFq">via GIPHY</a></p>
            </div>

            <style jsx>{`
                .box-gif {
                    width: 100%;
                    max-width: 400px;
                    position: relative;
                }

                a {
                    font-size: var(--font-medium);
                    color: ${appConfig.colors.white};
                    transition: 0.3s ease-out;
                }

                a:hover {
                    color: ${appConfig.colors.yellow};
                }
            `}</style>
        </>
    );
}

function ParagraphPhase({ children }){
    return(
        <>
            <p>{children}</p>

            <style jsx>{`
                p {
                    width: 300px;
                    margin: 0 auto 32px auto;
                    text-align: left;
                }
            `}</style>
        </>
    );
}

function BoxHomePerfil({ children }){
    return(
        <>
            <div>{children}</div>

            <style jsx>{`
                div {
                    width: 100%;
                    max-width: 200px;
                    height: 264px;
                    background-color: ${appConfig.colors.black};
                    color: ${appConfig.colors.white};
                    box-shadow: 5px 5px 0px ${appConfig.colors.white};
                }
            `}</style>
        </>
    );
}

function ImgPerfil({ userName }){
    const isUserName = userName == '';
    const username = isUserName ? 'Charmander' : userName;

    return(
        <> 
            <img
                src={`${isUserName ? defaultPhoto.src : `https://github.com/${username}.png`}`}
                alt={`${isUserName ? `Gif de ${username}` : `Foto de perfil do ${username} no GitHub`}`}
            />

            <style jsx>{`
                img {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    margin: 24px auto;
                }
            `}</style>
        </>
    );
    
}

function UserName({ children }){
    const username = children == '' ? `Faça o login :)` : children;

    return(
        <>
            <p>{username}</p>
            <style jsx>{`
                p {
                    padding: 8px;
                    background-color: ${appConfig.colors.black};
                    color: ${appConfig.colors.white};
                    font-size: var(--font-small);
                }
            `}</style>
        </>
    );
}

export {
    BgApresentacao,
    BtnClose,
    BoxGif,
    ParagraphPhase,
    BoxHomePerfil,
    ImgPerfil,
    UserName
};