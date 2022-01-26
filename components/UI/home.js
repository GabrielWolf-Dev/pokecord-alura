import _JSXStyle from 'styled-jsx/style';
import appConfig from '../../config.json';

/* Assets */
import btnClose from '../../assets/img/btn-close.png';

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
                <iframe src="https://giphy.com/embed/8UGGp7rQvfhe63HrFq" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <p><a style={{ color: appConfig.colors.white, fontSize: 'var(--font-medium)' }} href="https://giphy.com/gifs/reaction-mood-8UGGp7rQvfhe63HrFq">via GIPHY</a></p>
            </div>

            <style jsx>{`
                .box-gif {
                    width: 100%;
                    max-width: 350px;
                    position: relative;
                }
            `}</style>
        </>
    );
}

export {
    BgApresentacao,
    BtnClose,
    BoxGif
};