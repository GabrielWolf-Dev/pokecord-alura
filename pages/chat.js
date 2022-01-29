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
} from '../components/UI/generic-components';
import {
    Header,
    Options,
    BoxChat,
    ListMessages,
    Message,
    TextArea
} from '../components/UI/chat';


function ChatPage(){
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [msgList, setMsgList] = useState([]);
    const supabaseURL = process.env.NEXT_PUBLIC_URL_SUPABASE;
    const supabaseAnonKEY = process.env.NEXT_PUBLIC_ANON_KEY_SUPABASE;
    const supabaseConnection = createClient(supabaseURL, supabaseAnonKEY);
    const table = 'messages';

    useEffect(async () => {
        const { data } = await supabaseConnection
            .from(table)
            .select('*')
            .order('id', { ascending: false });

        setMsgList(data);
    }, []);

    function logout(){
        router.push('/');
    }

    function handleMsg(e){
        const msg = e.target.value;
        const sanitizedMsg = filterXSS(msg);
        
        // Pelo jeito, vai ter que gravar a data por aqui, colocando um objeto:
        // { msg: 'message...', date: 27/01/2022, username: 'User name GitHub' }
        // Parece que vou ter que armazenar no localStorage o username, quando efetua o login, mas vamos ver ao decorrer das aulas...
        
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
            from: 'GabrielWolf-Dev',
            message: msg,
            created_at: date,
        };
        const { data, status } = await supabaseConnection
            .from(table)
            .insert([msgFrom]);

        if(status === 201) {
            setMsgList([
                data[0],
                ...msgList
            ]);
        }

        setMessage('');
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
    
                    <button
                        onClick={sendMessage}
                        style={{ marginLeft: '24px' }}
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