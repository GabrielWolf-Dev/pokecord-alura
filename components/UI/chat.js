import _JSXStyle from 'styled-jsx/style';
import appConfig from '../../config.json';

function Header({ children }) {
    return(
        <>
            <header>{children}</header>

            <style jsx>{`
                header {
                    width: 100%;
                    max-width: 1100px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 16px;
                }


                @media (max-width: 480px) {
                    header {
                        justify-content: center;
                        flex-direction: column;
                    }
    
                }
            `}</style>
        </>
    );
}

function Options({ children }) {
    return(
        <>
            <button>{children}</button>

            <style jsx>{`
                button {
                    font-size: var(font-small);
                    color: ${appConfig.colors.white};
                    text-decoration: underline;
                    transition: 0.3s ease-out;
                    display: inline-block;
                    margin: 0 8px;
                    padding: 6px 8px;
                }

                button:hover {
                    color: ${appConfig.colors.yellow};
                }
            `}</style>
        </>
    );
}

function BoxChat({ children }) {
    return(
        <>
            <main>{children}</main>

            <style jsx>{`
                main {
                    width: 100%;
                    max-width: 1050px;
                    padding: 24px 2%;
                    background-color: ${appConfig.colors['red-white']};
                    box-shadow: 5px 5px 0px ${appConfig.colors.black};
                    text-align: center;
                    font-size: var(--font-normal);
                    color: ${appConfig.colors.white};
                    margin: 0 auto;    
                }
            `}</style>
        </>
    );
}

function ListMessages({ children }) {
    return(
        <>
            <ul>{children}</ul>

            <style jsx>{`
                ul {
                    width: 100%;
                    height: 100%;
                    padding: 24px;
                    text-align: left;
                }
            `}</style>
        </>
    );
}

function Message({ date, username, msg }) {
    return(
        <>
            <li>
                <header>
                    <img src={`https://github.com/${username}.png`} alt={`Foto de perfil do usuário ${username} no GitHub`} />

                    <div>
                        <span className="username-msg">{username}</span>

                        <span className="date-msg">{date}</span>
                    </div>
                </header>

                <p>{msg}</p>
            </li>

            <style jsx>{`
                li {
                    width: 100%;
                    margin: 24px 0;
                }

                header {
                    width: 100%;
                    max-width: 300px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                img {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                }

                span {
                    margin: 0 8px;
                }

                .username-msg {
                    color: ${appConfig.colors.black};
                    font-size: var(--font-small);
                }
                
                .date-msg {
                    color: ${appConfig.colors.yellow};
                    font-size: var(--font-small);
                }

                p {
                    font-size: var(--font-medium);
                    margin-left: 4px;
                    margin-top: 16px;
                }
            `}</style>
        </>
    );
}

export {
    Header,
    Options,
    BoxChat,
    ListMessages,
    Message
};