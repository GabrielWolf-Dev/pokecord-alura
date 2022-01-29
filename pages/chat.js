import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { filterXSS } from 'xss';
import { createClient } from '@supabase/supabase-js';

/* Assets: */
import btnSend from '../public/assets/img/button-send.png';

/* Componets */
import { 
    BgApp,
    BoxContent,
    Button
} from '../src/components/UI/generic-components';
import {
    Header,
    Options,
    BoxChat,
    ListMessages,
    Message,
    TextArea
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
                        <Options>Chat</Options>
                        <Options>Status</Options>
                    </div>

                    <Button handleAction={logout}>Logout</Button>
                </Header>

                <BoxChat>
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
                </BoxChat>

                <form
                style={{
                    display: 'flex',
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
            </BoxContent>
        </BgApp>
    );
}

export default ChatPage;