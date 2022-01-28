import { useRouter } from 'next/router';

/* Assets: */
import btnSend from '../public/assets/img/button-send.png';

/* Componets */
import { 
    BgApp,
    BoxContent,
    Button,
    InputText
} from '../components/UI/generic-components';
import {
    Header,
    Options,
    BoxChat,
    ListMessages,
    Message,
    TextArea
} from '../components/UI/chat';
import { useState } from 'react';

function ChatPage(){
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [msgList, setMsgList] = useState([]);

    function logout(){
        router.push('/');
    }

    function handleMsg(e){
        const msg = e.target.value;
        
        // Pelo jeito, vai ter que gravar a data por aqui, colocando um objeto:
        // { msg: 'message...', date: 27/01/2022, username: 'User name GitHub' }
        // Parece que vou ter que armazenar no localStorage o username, quando efetua o login, mas vamos ver ao decorrer das aulas...
        
        setMessage(msg);
    }

    function sendMessage(e){
        if(e.key === 'Enter' || e.type === 'click') {
            e.preventDefault();

            newMessage(message);
        }
    }

    function newMessage(msg){
        const date = new Date();
        const msgFrom = {
            id: msgList.length + 1,
            from: 'GabrielWolf-Dev',
            message: msg,
            date: (date.toLocaleDateString())
        };

        setMsgList([
            msgFrom,
            ...msgList
        ]);

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
                            msgList.map((msg) => 
                                <Message
                                    key={msg.id}
                                    msg={msg.message}
                                    username={msg.from}
                                    date={msg.date}
                                />    
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