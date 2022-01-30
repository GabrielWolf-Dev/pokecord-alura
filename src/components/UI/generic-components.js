import _JSXStyle from 'styled-jsx/style';
import appConfig from '../../../config.json';

/* Assets: */
import bgPikachu from '../../../public/assets/img/pikachu-fight.jpg';
import pokeball from '../../../public/assets/img/pokeball-icon.png';

function BgApp({ children, tag }){
    const Tag = tag || 'div';

    return(
        <>
            <Tag>{children}</Tag>
            <style jsx>{`
                ${Tag} {
                    width: 100vw;
                    background-color: ${appConfig.colors['yellow-op-20']};
                    background-image: url(${bgPikachu.src});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    background-blend-mode: multiply;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    );
}

function BoxContent({ children, isLoginPage=false, ischatPage=false, as="div" }){
    const Tag = as;

    return(
        <>
            <Tag>
                <img className="pokeball-icon" src={pokeball.src} alt="Ícone de uma pokebola" />

                {children}
            </Tag>
            <style jsx>{`
                ${Tag} {
                    width: 100%;
                    padding: 24px 2%;
                    background-color: ${appConfig.colors.red};
                    box-shadow: 5px 5px 0px ${appConfig.colors.black};
                    position: relative;
                    text-align: center;
                    font-size: var(--font-normal);
                    color: ${appConfig.colors.white};
                    margin: 0 4%;

                    ${isLoginPage ? `
                        max-width: 800px;
                        z-index: 1;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    ` : ischatPage ? `
                        max-width: 1400px;
                    ` : `
                        max-width: 450px;
                        z-index: 3;
                    `}
                }

                .pokeball-icon {
                    width: 42px;
                    height: 42px;
                    position: absolute;
                    left: 50%;
                    top: -21px;
                    transform: translateX(-50%);
                }

                @media (max-width: 768px) {
                    ${isLoginPage ? `
                            ${Tag} {
                                max-width: 400px;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                            }
                    ` : false}
                }
            `}</style>
        </>
    );
}

function InputText({ placeholderInput, inputHandler }){
    return(
        <>
            <input
                onChange={inputHandler}
                type="text"
                placeholder={placeholderInput}
                required
            />

            <style jsx>{`
                input[type='text'] {
                    width: 100%;
                    max-width: 350px;
                    height: 42px;
                    color: ${appConfig.colors.white};
                    background-color: ${appConfig.colors.black};
                    border: 3px solid ${appConfig.colors.white};
                    font-size: var(--font-small);
                    padding-left: 8px;
                }
            `}</style>
        </>
    );
}

function Button({ children, isSubmit=false, handleAction, dataId }){
    return(
        <>
            <button data-id={dataId} onClick={handleAction} type={isSubmit ? 'submit' : 'button'}>{children}</button>

            <style jsx>{`
                button {
                    width: 100%;
                    max-width: 200px;
                    height: 32px;
                    margin: 16px 0;
                    background-color: ${appConfig.colors.yellow};
                    color: ${appConfig.colors.black};
                    box-shadow: 5px 5px 0px ${appConfig.colors.black};
                }
            `}</style>
        </>
    );
}

function Title({ children, tag, titleLogin }){
    const Tag = tag || 'h1';
    const title = titleLogin || false;

    return (
      <>
        <Tag>{children}</Tag>
        <style jsx>{`
              ${Tag} {
                  color: ${appConfig.colors.black};
                  font-size: var(--font-big);
                  font-weight: 600;
                  ${title ? `
                    width: 100%;
                    max-width: 250px;
                    margin: 0 auto;
                  ` : false}
              }
        `}</style>
      </>
    );
}

function SubTitle({ children }) {
    return(
        <>
            <h3>{children}</h3>

            <style jsx>{`
                h3 {
                    color: ${appConfig.colors.black};
                    font-size: var(--font-normal);
                    font-weight: normal;
                }
            `}</style>
        </>
    );
}

function Paragraph({ children, isLoginBox, tag }){
    const Tag = tag || 'p';
    const loginBox = isLoginBox || false;

    return(
        <>
            <Tag>{children}</Tag>
            <style jsx>{`
                ${Tag} {
                    margin: 16px ${loginBox ? 'auto' : '0'};
                    font-size: var(--font-medium);
                    color: ${appConfig.colors.white};
                    line-height: 18px;

                    ${loginBox ? `
                        width: 100%;
                        max-width: 200px;
                    ` : false}
                }
            `}</style>
        </>
    );
}

function LinkAncor({ children, hrefLink, fontSize }){
    const font = fontSize || 'var(--font-medium)';

    return(
        <>
            <a target="_blank" href={hrefLink}>{children}</a>
            <style jsx>{`
                a {
                    font-size: ${font};
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

export {
    Title,
    BgApp,
    BoxContent,
    Paragraph,
    LinkAncor,
    InputText,
    Button,
    SubTitle
};