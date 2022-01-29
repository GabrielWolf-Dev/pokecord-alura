import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
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
    Title
} from '../src/components/UI/generic-components';
import {
    Header,
    Options,
    BoxChatPage,
    ListMessages,
    Message,
    TextArea,
    ImageGitHub
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
        if(e.key === 'Enter' || e.type === 'click') {
            e.preventDefault();

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

    return(
        <BgApp>
            <BoxContent ischatPage={true}>
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

                                return(
                                    <Message
                                        key={msg.id}
                                        msg={msg.message}
                                        username={msg.from}
                                        date={date.toLocaleDateString()}
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
                            isCardLanguage={true}
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userLogged}&layout=compact&langs_count=7&theme=tokyonight`}
                            alt={`Github Stats ${userLogged}`}
                        />
                </BoxChatPage>
            </BoxContent>
        </BgApp>
    );
}

export default ChatPage;