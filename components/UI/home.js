import _JSXStyle from 'styled-jsx/style';
import appConfig from '../../config.json';

/* Assets */
import btnClose from '../../assets/img/btn-close.png';

function BgApresentacao({ tag, children }){
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
                  display: flex;
                  justify-content: center;
                  align-items: center;
              }
        `}</style>
      </>
    );
}

function BtnClose(){
    return(
        <>
            <button>
                    <img style={{ width: '100%', height: '100%' }} src={btnClose.src} alt="Botão fechar" />
            </button>
            <style jsx>{`
                button {
                    width: 25px;
                    heigth: 25px;
                    background-color: transparent;
                    cursor: pointer;
                    border: 0;
                    position: absolute;
                    top: 16px;
                    right: 16px;
                }
            `}</style>
        </>
    );
}

export {
    BgApresentacao,
    BtnClose
};