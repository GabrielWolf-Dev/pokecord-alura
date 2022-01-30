import _JSXStyle from 'styled-jsx/style';
import appConfig from '../../../config.json';
import { Button } from './generic-components';

function Header({ children }) {
    return(
        <>
            <header>{children}</header>

            <style jsx>{`
                header {
                    width: 100%;
                    max-width: 1300px;
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

function Options({ children, handlerChat }) {
    return(
        <>
            <button onClick={handlerChat}>{children}</button>

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

function BoxChatPage({ children, isChatVisible }) {
    return(
        <>
            <main>{children}</main>

            <style jsx>{`
                main {
                    width: 100%;
                    max-width: 1300px;
                    height: 600px;
                    padding: 24px 2%;
                    background-color: ${appConfig.colors['red-white']};
                    box-shadow: 5px 5px 0px ${appConfig.colors.black};
                    text-align: center;
                    font-size: var(--font-normal);
                    color: ${appConfig.colors.white};
                    margin: 0 auto;
                    display: ${isChatVisible ? 'block' : 'none'};
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

function ImageGitHub({ src, alt }){
    return(
        <>
            <img src={src} alt={alt} />

            <style jsx>{`
                img {
                    width: 100%;
                    max-width: 450px;
                    display: inline-block;
                    margin: 24px 8px;
                }

                @media (max-width: 568px) {
                    img {
                        max-width: 350px;
                        margin: 24px 0;
                    }
                }
            `}</style>
        </>
    );
}

function FormSearchPoke({ handlerSubmit }){
    return(
        <>
            <form onSubmit={handlerSubmit}>
                <input placeholder="Pesquisar Pokémon..." />

                <Button isSubmit={true}>Procurar</Button>
            </form>

            <style jsx>{`
                form {
                    width: 100%;
                    max-width: 500px;
                    margin: 16px auto;
                    display: flex;
                    align-items: center;
                }

                input {
                    width: 100%;
                    max-width: 350px;
                    height: 42px;
                    color: ${appConfig.colors.white};
                    background-color: ${appConfig.colors.black};
                    border: 3px solid ${appConfig.colors.white};
                    font-size: var(--font-small);
                    padding-left: 8px;
                    margin-right: 24px;
                }

                @media (max-width: 678px) {
                    form {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                    }

                    input { margin-right: 0; }
                }
            `}</style>
        </>
    );
}

function CardPokemon({ pokemon, sendPokeFavorite=false, removeFavorite, dataId }){
    return(
        <>
            <li key={dataId} className="card-box">
                <div className="card-border-img">
                    <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                </div>

                <div className="card-content">
                    <h3>{pokemon.name}</h3>
                    <p>{pokemon.types[0].type.name}</p>
                </div>

                <ul>
                    {
                        pokemon.stats.map((statPoke, index) => (
                            <li key={index} className="list-hab">
                                <label htmlFor="hp">{statPoke.stat.name}</label>
                                <progress id="hp" value={statPoke.base_stat} max="100"></progress>
                            </li>
                        ))
                    }
                </ul>

                {sendPokeFavorite === false 
                ? <Button dataId={dataId} handleAction={removeFavorite}>Remover</Button> 
                : <Button handleAction={sendPokeFavorite}>Adicionar</Button>}
            </li>

            <style jsx>{`
                .card-box {
                    width: 100%;
                    max-width: 300px;
                    background-color: ${appConfig.colors.red};
                    padding: 10px 2%;
                    margin: 16px auto;
                    text-align: center;
                    box-shadow: 5px 5px 0px ${appConfig.colors.black};
                }

                .card-border-img {
                    width: 100%;
                    max-width: 140px;
                    height: 140px;
                    background-color: ${appConfig.colors['red-white']};
                    border-radius: 50%;
                    display: inline-block;
                    margin: 16px -4px 0 0;
                    position: relative;
                }

                .card-border-img > img {
                    width: 100%;
                    max-width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    -webkit-transform: translate(-50%,-50%);
                }

                .card-content { padding: 16px 2%; }
                
                .card-content h3 {
                    color: ${appConfig.colors.black};
                    font-size: var(--font-normal);
                }

                .card-content p {
                    font-size: var(--font-small);
                    margin: 8px 0;
                }

                .list-hab {
                    margin: 8px auto;
                } 

                .list-hab > label {
                    display: block;
                    font-size: var(--font-small);
                }

                progress {
                    height: 12px;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }

                progress::-webkit-progress-value {
                    border-radius: 10px;
                    background-color: ${appConfig.colors.yellow};
                }

                progress::-webkit-progress-bar {
                    border-radius: 10px;
                    background-color: ${appConfig.colors.white};
                }
                
            `}</style>
        </>
    );
}

function ListFavoritePoke({ children }){
    return(
        <>
            <ul>{children}</ul>

            <style jsx>{`
                ul {
                    width: 100%;
                    margin-top: 24px;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    flex-wrap: wrap;
                }
            `}</style>
        </>
    );
}

function AlertMsg({ children, as }){
    const Tag = as || false;

    return(
        <>
            <Tag>{children}</Tag>

            <style jsx>{`
                ${Tag} {
                    width: 100%;
                    max-width: 700px;
                    padding: 8px 2%;
                    margin: 0 auto;
                    background-color: ${appConfig.colors.yellow};
                    color: ${appConfig.colors.black};
                    font-size: var(--font-normal);
                    box-shadow: 4px 4px 0px ${appConfig.colors.white};
                }
            `}</style>
        </>
    );
}

export {
    Header,
    Options,
    BoxChatPage,
    ListMessages,
    Message,
    TextArea,
    ImageGitHub,
    CardPokemon,
    FormSearchPoke,
    ListFavoritePoke,
    AlertMsg
};