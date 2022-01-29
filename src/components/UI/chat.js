import _JSXStyle from 'styled-jsx/style';
import appConfig from '../../../config.json';

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
                    height: 600px;
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
                    text-align: left;
                    overflow-y: scroll;
                    display: flex;
                    flex-direction: column-reverse;
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
                    <img className="img-username" src={`https://github.com/${username}.png`} alt={`Foto de perfil do usuário ${username} no GitHub`} />

                    <div>
                        <span className="username-msg">{username}</span>

                        <span className="date-msg">{date}</span>
                    </div>
                </header>

                <p>{
                    msg.startsWith(':sticker:')
                    ? (
                        <img className="gif" src={msg.replace(':sticker:', '')} alt={`Gif enviado por ${username}`} />
                    ) : msg
                }</p>
            </li>

            <style jsx>{`
                li {
                    width: auto;
                    padding: 16px 2%;
                    border-radius: 12px;
                    transition: .3s ease-out;
                }

                li:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                }

                header {
                    width: 100%;
                    max-width: 400px;
                    display: flex;
                    align-items: center;
                }

                .gif {
                    width: 100%;
                    max-width: 200px;
                }

                .img-username {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    margin-right: 16px;
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

                @media (max-width: 468px) {
                    .img-username {
                        width: 24px;
                        height: 24px;
                        margin-right: 4px;
                    }

                    .gif {
                        max-width: 150px;
                    } 

                    span {
                        margin-right: 4px;
                    }
                }
            `}</style>
        </>
    );
}

function TextArea({ value, handleOnChange, handleKeyPress, placeholderInput }){
    return(
        <>
            <textarea
                value={value}
                onChange={handleOnChange}
                onKeyPress={handleKeyPress}
                placeholder={placeholderInput}
            ></textarea>

            <style jsx>{`
                textarea {
                    width: 100%;
                    max-width: '950px';
                    height: 42px;
                    color: ${appConfig.colors.white};
                    background-color: ${appConfig.colors.black};
                    border: 3px solid ${appConfig.colors.white};
                    font-size: var(--font-small);
                    padding: 8px;
                    resize: none;
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
    Message,
    TextArea
};