import _JSXStyle from 'styled-jsx/style';
import appConfig from '../../config.json';

/* Assets: */
import bgPikachu from '../../assets/img/pikachu-fight.jpg';
import pokeball from '../../assets/img/pokeball-icon.png';

function BgApp({ tag, children }){
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

function BoxContent({ children }){
    return(
        <>
            <main>
                <img className="pokeball-icon" src={pokeball.src} alt="Ícone de uma pokebola" />

                {children}
            </main>
            <style jsx>{`
                main {
                    width: 100%;
                    max-width: 450px;
                    padding: 24px 2%;
                    background-color: ${appConfig.colors.red};
                    box-shadow: 5px 5px 0px ${appConfig.colors.black};
                    position: relative;
                    text-align: center;
                    font-size: var(--font-normal);
                    color: ${appConfig.colors.white};
                    z-index: 3;
                }

                .pokeball-icon {
                    width: 42px;
                    height: 42px;
                    position: absolute;
                    left: 50%;
                    top: -21px;
                    transform: translateX(-50%);
                }
            `}</style>
        </>
    );
}

function Title({ children, tag }){
    const Tag = tag || 'h1';

    return (
      <>
        <Tag>{children}</Tag>
        <style jsx>{`
              ${Tag} {
                  color: ${appConfig.colors.black};
                  font-size: var(--font-big);
                  font-weight: 600;
              }
        `}</style>
      </>
    );
}

function Paragraph({ tag, children }){
    const Tag = tag || 'p'

    return(
        <>
            <Tag>{children}</Tag>
            <style jsx>{`
                ${Tag} {
                    margin: 16px 0;
                    font-size: var(--font-medium);
                    color: ${appConfig.colors.white};
                    line-height: 18px;
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
    LinkAncor
};