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
            <aside>
                <img className="pokeball-icon" src={pokeball.src} alt="Ícone de uma pokebola" />

                {children}
            </aside>
            <style jsx>{`
                aside {
                    width: 100%;
                    max-width: 400px;
                    padding: 16px 2%;
                    background-color: ${appConfig.colors.red};
                    box-shadow: 5px 5px 0px ${appConfig.colors.black};
                    position: relative;
                    text-align: center;
                    font-size: 12px;
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
                  color: ${appConfig.theme.colors.neutrals['000']};
                  font-size: 24px;
                  font-weight: 600;
              }
        `}</style>
      </>
    );
}

export {
    Title,
    BgApp,
    BoxContent
};