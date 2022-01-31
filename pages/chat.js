import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { filterXSS } from 'xss';
import { createClient } from '@supabase/supabase-js';
import appConfig from '../config.json';

/* Assets: */
import btnSend from '../public/assets/img/button-send.png';

/* Componets */
import { 
    BgApp,
    BoxContent,
    Button,
    Paragraph,
    SubTitle,
    Title,
    LinkAncor
} from '../src/components/UI/generic-components';
import {
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
} from '../src/components/UI/chat';
import ButtonSendSticker from '../src/components/ButtonStiker';

/* Config Supabase: */
const supabaseURL = process.env.NEXT_PUBLIC_URL_SUPABASE;
const supabaseAnonKEY = process.env.NEXT_PUBLIC_ANON_KEY_SUPABASE;
const supabaseConnection = createClient(supabaseURL, supabaseAnonKEY);
const table = 'messages';

/* Real Time Users Messages */
function listenMsgsRealTime(newMessage) {
    return supabaseConnection
    .from(table)
    .on("INSERT", (resRealTime) => {
        newMessage(resRealTime.new);
    }).subscribe();
}

function ChatPage(){
    const router = useRouter();
    const userLogged = router.query.username;
    const [message, setMessage] = useState("");
    const [msgList, setMsgList] = useState([]);
    const [isChatVisible, setIsChatVisible] = useState(true);
    const urlGitHub = `https://api.github.com/users/${userLogged}`;
    const [dataGitHub, setDataGitHub] = useState({});
    const [formatDates, setFormatDates] = useState({});
    const [pokemon, setPokemon] = useState(null);
    const [favoritePokemon, setFavoritePokemon] = useState([]);
    const textarea = useRef(null);

    useEffect(async () => {
        const { data } = await supabaseConnection
            .from(table)
            .select('*')
            .order('id', { ascending: false });

        setMsgList(data);

        listenMsgsRealTime((newMsg) => {
            setMsgList((currentValueList => [
                newMsg,
                ...currentValueList
            ]));
        });
    }, []);

    useEffect(async () => {
        const res = await fetch(urlGitHub);
        const data = await res.json();

        const originAccount = new Date(data.created_at);
        const lastUpdate = new Date(data.updated_at);


        setDataGitHub(data);
        setFormatDates({
            created_at: originAccount.toLocaleDateString(),
            lastUpdate: lastUpdate.toLocaleDateString()
        });
    }, [userLogged]);
    
    useEffect(async () => {
        const { data } = await supabaseConnection
            .from("favoritePokemons")
            .select('*')
            .match({ username: userLogged });

        setFavoritePokemon(data);
    }, []);
    
    function logout(){
        router.push('/');
    }

    function handleMsg(e){
        const msg = e.target.value;
        const sanitizedMsg = filterXSS(msg);
        
        setMessage(sanitizedMsg);
    }

    function sendMessage(e){
        const input = textarea.current;

        if(e.key === 'Enter' || e.type === 'click') {
            e.preventDefault();

            if(input.value === '')
                alert("O campo está vazio!");
            else 
                newMessage(message);
        }
    }

    async function newMessage(msg){
        const date = new Date();

        const msgFrom = {
            from: userLogged,
            message: msg,
            created_at: date,
        };

        /* Insert to Supabase */
        await supabaseConnection
            .from(table)
            .insert([msgFrom]);

        setMessage('');
    }

    function sendSticker(sticker){
        const msgSticker = ':sticker:' + sticker;

        newMessage(msgSticker);
    }

    async function searchPokemon(e){
        e.preventDefault();

        const form = e.target;
        const pokemon = filterXSS(e.target[0].value);
        const urlPokemon = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

        const res = await fetch(urlPokemon);
        const data = await res.json();

        setPokemon(data);
        form.reset();
    }

    async function sendPokeFavorite(){
        const date = new Date();

        const data = {
            created_at: date,
            username: userLogged,
            pokemon: pokemon
        };

        await supabaseConnection
            .from('favoritePokemons')
            .insert([data]);

        // Depois que terminar de favoritar
        setPokemon(null);
        setFavoritePokemon([
            data,
            ...favoritePokemon
        ]);
    }

    function removeFavoritePoke(e){
        const id = e.target.dataset.id;
        const table = "favoritePokemons";
        const values = favoritePokemon;
        const setter = setFavoritePokemon;

        
        removeColumn(id, table, values, setter);
    }

    function removeMsg(e){
        const id = e.target.dataset.id;
        const table = "messages";
        const values = msgList;
        const setter = setMsgList;

        removeColumn(id, table, values, setter);
    }

    async function removeColumn(id, table, values, setter){
        const { data, error } = await supabaseConnection
        .from(table)
        .delete()
        .match({ id: id });

    
        if(error !== null) {
            alert("Ocorreu algum erro ao excluir o item, por favor tente novamente ou mais tarde...");
        } else {
            alert("Exclusão realizada com sucesso!");

            const filterOnlyValues = values.filter(value => value.id !== data[0].id);
            setter(filterOnlyValues);
        }
    }

    return(
        <BgApp>
            <BoxContent ischatPage={true}>
                {
                    userLogged !== undefined ? (
                        <>
                        <Header>
                            <div>
                                <Options handlerChat={() => setIsChatVisible(true)}>Chat</Options>
                                <Options handlerChat={() => setIsChatVisible(false)}>Status</Options>
                            </div>

                            <Button handleAction={logout}>Logout</Button>
                        </Header>

                        <BoxChatPage isChatVisible={isChatVisible}>
                            <ListMessages>
                                {
                                    msgList.map((msg) => {
                                        const date = new Date(msg.created_at);
                                        const day = date.getDate().toPrecision();
                                        const month = (date.getMonth() + 1);
                                        const year = date.getFullYear();

                                        return(
                                            <Message
                                                key={msg.id}
                                                dataId={msg.id}
                                                msg={msg.message}
                                                username={msg.from}
                                                date={`${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`}
                                                deleteMsg={removeMsg}
                                            />  
                                        );
                                    }

                                    )
                                }
                            </ListMessages>
                        </BoxChatPage>

                        <form
                        style={{
                            display: isChatVisible ? 'flex' : 'none',
                            alignItems: 'center',
                            marginTop: '24px'
                        }}>
                            <TextArea
                                refTextArea={textarea}
                                value={message}
                                handleOnChange={handleMsg}
                                handleKeyPress={sendMessage}
                                placeholderInput="Insira a mensagem aqui..."
                            />

                            <ButtonSendSticker
                                onStickerClick={sendSticker}
                            />

                            <button
                                onClick={sendMessage}
                                type="submit"
                            >
                                <img src={btnSend.src} alt="Botão de enviar mensagem" />
                            </button>
                        </form>

                        <BoxChatPage isChatVisible={!isChatVisible}>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        overflowY: 'scroll',
                                        overflowX: 'hidden'
                                    }}
                                >
                                    <Title as="h2">GitHub Status:</Title>

                                
                                    <section
                                        key={dataGitHub.id}
                                        style={{ marginTop: '24px', textAlign: 'left' }}
                                    >
                                        <SubTitle>Nome: <span style={{ color: appConfig.colors.white}}>{dataGitHub.name}</span></SubTitle>
                                        <Paragraph><span style={{ color: appConfig.colors.black}}>Sobre:</span> {dataGitHub.bio}</Paragraph>
                                        <Paragraph>Conta criada - {formatDates.created_at} <span style={{ color: appConfig.colors.black}}>|</span> Ultima atividade - {formatDates.lastUpdate}.</Paragraph>
                                        <Paragraph>Você conhece {dataGitHub.followers + dataGitHub.following} treinadores pokémon, interaja no chat e faça novas alianças 🤝</Paragraph>
                                    </section>

                                    <ImageGitHub
                                        src={`https://github-readme-stats.vercel.app/api?username=${userLogged}&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true`}
                                        alt={`Github Stats ${userLogged}`}
                                    />

                                    <ImageGitHub
                                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userLogged}&layout=compact&langs_count=7&theme=tokyonight`}
                                        alt={`Github Stats ${userLogged}`}
                                    />

                                    <SubTitle>Procurar pokémon</SubTitle>

                                    <FormSearchPoke handlerSubmit={searchPokemon} />

                                    {
                                        pokemon === null ? false : <CardPokemon sendPokeFavorite={sendPokeFavorite} pokemon={pokemon} />
                                    }

                                    <SubTitle>Pokemons favoritos:</SubTitle>

                                    {
                                        favoritePokemon.length === 0 ? (
                                            <div
                                                style={{ marginTop: '32px' }}
                                            >
                                                <AlertMsg as="h3">Você não tem nenhum pokémon na sua pokédex :(</AlertMsg>
                                                    <iframe
                                                        style={{ width: '100%', maxWidth: '480px', height: '270px', marginTop: '24px' }}
                                                        src="https://giphy.com/embed/uWLJEGCSWdmvK"
                                                        frameBorder="0"
                                                        className="giphy-embed"
                                                        allowFullScreen
                                                    ></iframe>
                                                    <p><LinkAncor hrefLink={"https://giphy.com/gifs/pokemon-ash-ketchum-pokeball-uWLJEGCSWdmvK"}>via GIPHY</LinkAncor></p>
                                            </div>
                                        ) : (
                                            <ListFavoritePoke>
                                                {
                                                    favoritePokemon.map(pokemonFav => (
                                                        <CardPokemon
                                                            key={pokemonFav.id}
                                                            dataId={pokemonFav.id}
                                                            pokemon={pokemonFav.pokemon}
                                                            removeFavorite={removeFavoritePoke}
                                                        />
                                                    ))
                                                }
                                            </ListFavoritePoke>
                                        )
                                    }
                                </div>
                            </BoxChatPage>
                        </>
                    ) : (
                        <aside
                            style={{
                                widht: '100%',
                                marginTop: '24px'
                            }}
                        >
                            <SubTitle>Houve algum erro de autentição! Por favor, logue novamente...</SubTitle>
                            <iframe
                                style={{ width: '100%', maxWidth: '480px', height: '270px', marginTop: '24px' }}
                                src="https://giphy.com/embed/McNHek8WfyEA8" 
                                frameBorder="0" 
                                className="giphy-embed" 
                                allowFullScreen
                            ></iframe>
                            <p><LinkAncor hrefLink="https://giphy.com/gifs/pokemon-crying-adorable-McNHek8WfyEA8">via GIPHY</LinkAncor></p>

                            <Button handleAction={logout}>Logar novamente</Button>
                        </aside>
                    )
                }
            </BoxContent>
        </BgApp>
    );
}

export default ChatPage;